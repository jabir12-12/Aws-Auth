import { Flex, Text } from '@aws-amplify/ui-react'

export default function Home() {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center" padding="xl" >
            <Text fontSize="4xl" fontWeight="bold" color="purple.600">
                Welcome to the Home Page!
            </Text>
        </Flex>
    )
}
