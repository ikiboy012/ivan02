'use client';

import { getRandomString } from "@/libs/utils";
import { AlertDialog, Button, Flex, IconButton, Table, TextField } from "@radix-ui/themes";
import { useState } from "react";
import { TrashIcon } from '@radix-ui/react-icons'

type TodoItem = {
  id: string;
  text: string;
}

export default function Page() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  function addNewTodoItem() {
    setTodoList((oldValue) => {
      return [...oldValue, {
        id: getRandomString(),
        text: inputText
      }]
    });
    setInputText("");
  }

  function deleteTodoItem(id: string) {





    setTodoList((oldValue) => {
      return oldValue.filter((todoItem) => {
        return todoItem.id !== id;
      })
    })
  }


  return (
    <Flex direction="column" align="start" gap="4">
      {todoList.length > 0 ? (
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Text</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {todoList.map((value, index) => {
              return (
                <Table.Row key={index} align="center">
                  <Table.Cell>{value.id}</Table.Cell>
                  <Table.Cell>{value.text}</Table.Cell>
                  <Table.Cell>

                    <AlertDialog.Root>
                      <AlertDialog.Trigger>
                      <IconButton color="red" variant="ghost" radius="full">
                      <TrashIcon width="18" height="18" />
                    </IconButton>
                      </AlertDialog.Trigger>
                      <AlertDialog.Content style={{ maxWidth: 450 }}>
                        <AlertDialog.Title>Delete item</AlertDialog.Title>
                        <AlertDialog.Description size="2">
                          Are you sure? This action will delete item <strong>{value.text}</strong> from list
                        </AlertDialog.Description>

                        <Flex gap="3" mt="4" justify="end">
                          <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                              Cancel
                            </Button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action>
                            <Button variant="solid" color="red"  onClick={()=>{deleteTodoItem(value.id)}}>
                              Delete
                            </Button>
                          </AlertDialog.Action>
                        </Flex>
                      </AlertDialog.Content>
                    </AlertDialog.Root>

                    {/* <IconButton color="red" variant="ghost" radius="full" onClick={()=>{return alertBox()}}>
                      <TrashIcon width="18" height="18" />
                    </IconButton> */}

                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
      ) : null}

      <TextField.Input
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />

      <Button
        onClick={addNewTodoItem}
      >
        Add
      </Button>



    </Flex>
  )
}
