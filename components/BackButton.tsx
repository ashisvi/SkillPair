import { ArrowLeft } from 'iconsax-react-native';
import { TouchableOpacity } from 'react-native';

export const BackButton: React.FC<{ onPress?: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="rounded-full border border-gray-200 bg-gray-50 p-2"
      onPress={onPress}>
      <ArrowLeft size={22} color="#666666" variant="Linear" />
    </TouchableOpacity>
  );
};
