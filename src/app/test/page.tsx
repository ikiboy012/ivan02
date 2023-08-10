import { Button, Text } from "@radix-ui/themes";

export default function Page() {
  return (
    <div >
      <Text className="bg-red-500">Hello from Radix Themes :)</Text>
      <Button variant="classic" radius="large" className="border-red-500 border-2" >Let's go</Button>
    </div>
  )
}
