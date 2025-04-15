import { Post } from "@/models";
import { Button, Flex, TextField, withAuthenticator } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { DataStore } from "aws-amplify/datastore";
import { useRouter } from "next/router";
import { useState } from "react";
function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const router = useRouter();
    const [files, setFiles] = useState({});
    const handlesubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        console.log({ title, body, files })
        DataStore.save(
            new Post({
                title,
                body,
                image: Object.keys(files)
            })
        ).then(() => {
            router.push('/?success=1');

        })
    }

    return (
        <Flex as='form' direction='column' onSubmit={handlesubmit}>
            <TextField
                label='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
                label='Body'
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <StorageManager
                accessLevel='guest'
                acceptedFileTypes={["image/*"]}
                maxFileCount={5}
                onUploadSuccess={({ key = '' }) => {
                    setFiles((prevfiles) => {
                        return {
                            ...prevfiles,
                            [key]: true
                        }
                    })
                }}
            />
            <Button
                type="submit">
                Submit
            </Button>
        </Flex>
    )
}
export default withAuthenticator(Create)

function usestate(arg0: boolean): [any, any] {
    throw new Error("Function not implemented.");
}
