import { VStack, Image, Center, Text, Heading } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png"
import Logo from "@assets/logo.svg"

import { Input } from "@components/Input"

export function SignIn() {
    return (
        <VStack flex={1} bg="$trueGray700">
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
                <Logo/>

                <Text color="$trueGray100" fontSize="$sm">
                    Treine sua mente e o seu corpo
                </Text>

                <Center gap="$2">
                    <Heading color="$trueGray100" pt="$10">Acesse a conta</Heading>
                    <Input 
                    placeholder="E-mail" keyboardType="email-address"
                    autoCapitalize="none"
                    />
                    <Input placeholder="Senha" secureTextEntry/>
                </Center>

            </Center>
            </VStack>
        </VStack>
    )
}