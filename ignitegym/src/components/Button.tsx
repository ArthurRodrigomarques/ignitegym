import {Button as GluestackButton, Text, ButtonSpinner} from "@gluestack-ui/themed"
import { ComponentProps } from "react"

type Props = ComponentProps<typeof GluestackButton> & {
    title: string
    isLoading?: boolean
}

export function Button({ title, isLoading = false,  ...rest }: Props) {
    return (
        <GluestackButton 
        w="$full"
        h="$14"
        bg="$green700"
        borderWidth="$0"
        borderColor="$green500"
        rounded="$sm"
        $active-bg="$green500"
        disabled={isLoading}
        {...rest}
        >
           { isLoading ? (
            <ButtonSpinner/> 
            ) : (
            <Text color="$white" fontFamily="$heading" fontSize="$sm">
                {title}
            </Text>
            )}
        </GluestackButton>
    )
}