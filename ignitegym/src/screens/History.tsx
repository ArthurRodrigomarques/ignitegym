import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Text } from "@gluestack-ui/themed";
import { Heading, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "15.01.2025",
      data: ["Puxada frontal", "Remada unilateral"],
    },
    {
      title: "13.01.2025",
      data: ["Remada unilateral"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$trueGray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
            fontFamily="$heading"
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="$trueGray100" textAlign="center">
            Não há exercicios registrados ainda. {"\n"} Vamos fazer exercicios
            hoje
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
