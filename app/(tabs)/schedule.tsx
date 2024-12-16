import { Calendar as CalendarIcon } from 'iconsax-react-native';
import { useMemo, useState } from 'react';
import { FlatList, Image, Modal, Pressable, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '~/components';
import sessions from '~/data/sessions.json';
import users from '~/data/users.json';

const ScheduleScreen = () => {
  const currentUserId = 'user1';
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);

  // Get current week dates
  const getCurrentWeekDates = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
    const monday = new Date(today.setDate(diff));

    const weekDates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      weekDates.push(date.toISOString().split('T')[0]);
    }
    return weekDates;
  };

  // Process sessions data
  const processedSessions = useMemo(() => {
    return sessions.map((session) => {
      const otherUserId = session.user1 === currentUserId ? session.user2 : session.user1;
      const otherUser = users.find((u) => u.id === otherUserId);
      const sessionDate = new Date(session.scheduledTime).toISOString().split('T')[0];
      const sessionTime = new Date(session.scheduledTime).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });

      return {
        ...session,
        date: sessionDate,
        time: sessionTime,
        otherUser,
      };
    });
  }, []);

  // Get marked dates for calendar
  const markedDates = useMemo(() => {
    const dates: { [key: string]: any } = {};
    processedSessions.forEach((session) => {
      dates[session.date] = {
        marked: true,
        dotColor: '#0891b2',
      };
    });
    // Add selected date styling
    dates[selectedDate] = {
      ...dates[selectedDate],
      selected: true,
      selectedColor: '#0891b2',
    };
    return dates;
  }, [processedSessions, selectedDate]);

  const weekDates = useMemo(() => getCurrentWeekDates(), []);
  const filteredSessions = processedSessions.filter((session) => session.date === selectedDate);

  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getDay = (dateString: string) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const isToday = (dateString: string) => {
    const today = new Date().toISOString().split('T')[0];
    return dateString === today;
  };

  const getSessionCount = (dateString: string) => {
    return processedSessions.filter((session) => session.date === dateString).length;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header
        title="Schedule"
        subtitle={`${filteredSessions.length} sessions today`}
        rightIcon={
          <Pressable
            className="rounded-full border border-gray-200 bg-gray-50 p-2"
            onPress={() => setShowCalendar(true)}>
            <CalendarIcon size={22} color="#666666" variant="Linear" />
          </Pressable>
        }
      />

      {/* Calendar Modal */}
      <Modal visible={showCalendar} animationType="fade" transparent>
        <Pressable className="flex-1 bg-black/50" onPress={() => setShowCalendar(false)}>
          <View className="mx-4 mt-32 overflow-hidden rounded-3xl bg-white">
            <Calendar
              onDayPress={(day) => handleDateSelect(day.dateString)}
              markedDates={markedDates}
              theme={{
                todayTextColor: '#0891b2',
                arrowColor: '#0891b2',
                dotColor: '#0891b2',
                selectedDayBackgroundColor: '#0891b2',
              }}
            />
            <Pressable
              className="border-t border-gray-100 p-4"
              onPress={() => setShowCalendar(false)}>
              <Text className="text-center text-base font-medium text-gray-500">Close</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>

      {/* Date Selector */}
      <View className="border-b border-gray-100 px-4 py-3">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={weekDates}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setSelectedDate(item)}
              className={`mr-4 items-center rounded-xl px-4 py-2 ${
                selectedDate === item ? 'bg-cyan-500' : isToday(item) ? 'bg-cyan-50' : 'bg-gray-50'
              }`}>
              <Text
                className={`text-sm ${
                  selectedDate === item
                    ? 'text-white'
                    : isToday(item)
                      ? 'text-cyan-600'
                      : 'text-gray-500'
                }`}>
                {getDayName(item)}
              </Text>
              <Text
                className={`mt-1 text-lg font-semibold ${
                  selectedDate === item
                    ? 'text-white'
                    : isToday(item)
                      ? 'text-cyan-600'
                      : 'text-gray-900'
                }`}>
                {getDay(item)}
              </Text>
              {getSessionCount(item) > 0 && (
                <View
                  className={`mt-1 h-1.5 w-1.5 rounded-full ${
                    selectedDate === item ? 'bg-white' : 'bg-cyan-500'
                  }`}
                />
              )}
            </Pressable>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      {/* Sessions List */}
      <FlatList
        data={filteredSessions}
        contentContainerClassName="p-4"
        ItemSeparatorComponent={() => <View className="h-3" />}
        renderItem={({ item }) => (
          <View className="rounded-xl border border-gray-100 bg-white p-4">
            <View className="flex-row items-center justify-between">
              <View className="max-w-[80%] flex-row items-center gap-3">
                <Image
                  source={{ uri: item.otherUser?.profilePicture }}
                  className="h-10 w-10 rounded-full"
                />
                <View>
                  <Text className="text-lg font-semibold text-gray-900">
                    {item.otherUser?.name}
                  </Text>
                  <Text className="text-sm text-gray-500">{item.skillExchange[0]}</Text>
                </View>
              </View>
              <View
                className={`rounded-full px-3 py-1 ${
                  item.status === 'upcoming' ? 'bg-cyan-50' : 'bg-purple-50'
                }`}>
                <Text
                  className={`text-xs font-medium ${
                    item.status === 'upcoming' ? 'text-cyan-600' : 'text-purple-600'
                  }`}>
                  {item.status}
                </Text>
              </View>
            </View>
            <View className="mt-3 flex-row items-center">
              <Text className="text-sm text-gray-500">{item.time}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <View className="mt-8 items-center">
            <CalendarIcon size={48} color="#0891b2" variant="Bold" />
            <Text className="mt-4 text-center text-base text-gray-500">
              No sessions scheduled{'\n'}for this day
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ScheduleScreen;
