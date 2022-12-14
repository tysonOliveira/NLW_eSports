import { StatusBar } from "react-native";
import { 
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

//Chave aula 1: LevelUp
//Chave aula 2: Journey
//Chave aula 3: UntilTheEnd
//Chave aula 4: ProPlayer
import { Routes } from "./src/routes";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });
  return (
    <Background >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Routes /> : <Loading /> }
    </Background>
  );
}
