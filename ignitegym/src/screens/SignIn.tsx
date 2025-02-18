import { Controller, useForm } from "react-hook-form";
import {
  VStack,
  Image,
  Center,
  Text,
  Heading,
  ScrollView,
  useToast,
} from "@gluestack-ui/themed";
import { useState } from "react";

import { useAuth } from "@hooks/useAuth";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

type FormData = {
  email: string;
  password: string;
};

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const toast = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function handleNewAccount() {
    navigation.navigate("signUp");
  }

  async function handleSignIn({ email, password }: FormData) {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possivel entrar. Tente novamente mais tarde";

      setIsLoading(false);
      Alert.alert(title);
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          source={BackgroundImg}
          alt="Pessoas treinando"
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$trueGray100" fontSize="$sm">
              Treine sua mente e o seu corpo
            </Text>

            <Center gap="$2">
              <Heading color="$trueGray100" pt="$10">
                Acesse sua conta
              </Heading>

              <Controller
                control={control}
                name="email"
                rules={{ required: "Informe o e-mail" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={onChange}
                    errorMessage={errors.email?.message}
                    autoCapitalize="none"
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                rules={{ required: "Informe a senha" }}
                render={({ field: { onChange } }) => (
                  <Input
                    secureTextEntry
                    placeholder="Senha"
                    onChangeText={onChange}
                    errorMessage={errors.password?.message}
                  />
                )}
              />

              <Button
                title="Acessar"
                onPress={handleSubmit(handleSignIn)}
                isLoading={isLoading}
              />
            </Center>
            <Center mt="$4">
              <Text
                color="$trueGray100"
                fontSize="$sm"
                mb="$3"
                fontFamily="$body"
              >
                Ainda não tem acesso?
              </Text>

              <Button
                title="Criar Conta"
                variant="outline"
                onPress={handleNewAccount}
              />
            </Center>
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
