import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { Center, VStack } from "@gluestack-ui/themed";

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <Group />
    </VStack>
  );
}
