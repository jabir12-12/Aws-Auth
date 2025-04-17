import { Flex, useAuthenticator, View, Text, Button } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const Layout = ({ children }: React.PropsWithChildren) => {
    const router = useRouter();
    const { user, signOut } = useAuthenticator();

    return (
        <View minHeight='100vh' backgroundColor='white'>
            <Flex
                direction='row'
                paddingBlock="medium"
                paddingInline="xl"
                gap="1rem"
                alignItems="center" // This ensures proper vertical alignment
            >
                <Link href='/home'>
                    <Button
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105"
                    >
                        Home
                    </Button>
                </Link>

                <Link href='/create'>
                    <Button
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105"
                    >
                        Create
                    </Button>
                </Link>

                <Link href='/test'>
                    <Button
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-purple-700 hover:scale-105"
                    >
                        Test
                    </Button>
                </Link>

                {user && (
                    <Flex alignItems="center" gap="1rem" marginLeft="auto">
                        <Text className="text-lg font-medium">{user.username}</Text>
                        <Button
                            className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-red-600 hover:scale-105"
                            onClick={() => {
                                signOut();
                                router.push('/');
                            }}
                        >
                            Sign Out
                        </Button>
                    </Flex>
                )}
            </Flex>

            <Flex direction='column' alignItems="center" padding="xl">
                {children}
            </Flex>
        </View>
    )
}
