import { Heading, HStack, Text, VStack, Icon } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";
import { LogOut } from "lucide-react-native";

export function HomeHeader() {
  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" gap="$4" alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/ArthurRodrigoMarques.png" }}
        alt="Imagem do usuario"
        w="$16"
        h="$16"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$sm">
          Olá,
        </Text>
        <Heading color="$gray100" fontSize="$md">
          Rodrigo
        </Heading>
      </VStack>

      <Icon as={LogOut} color="$trueGray200" size="xl" />
    </HStack>
  );
}
