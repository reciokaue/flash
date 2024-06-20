import Document from '@tiptap/extension-document'
import Placeholder from '@tiptap/extension-placeholder'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, Strikethrough } from 'lucide-react'

import { Button } from '../ui/button'

interface TextEditorProps {
  content: string
  getContent: (data: string) => void
}

export function TextEditor({ content }: TextEditorProps) {
  // const [content, setContent] = useState(
  //   '<h2>Deck sem titulo</h2><br/><br/><br/>',
  // )

  const editor = useEditor({
    extensions: [
      Document.extend({
        content: 'heading block*',
      }),
      StarterKit.configure({
        codeBlock: false,
        document: false,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Untitled'
          }
          return "Type '/' to see commands..."
        },
      }),
    ],
    content,
    editorProps: {
      attributes: {
        class: 'prose prose-violet outline-none',
      },
    },
  })

  return (
    <>
      <EditorContent
        className="prose prose-violet w-full max-w-screen-lg outline-none"
        editor={editor}
      />
      {editor ? (
        <BubbleMenu
          editor={editor}
          className="flex rounded-md border bg-background"
        >
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            aria-selected={editor.isActive('heading', { level: 1 })}
            variant="editor"
            size="editor"
          >
            H1
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            aria-selected={editor.isActive('heading', { level: 2 })}
            variant="editor"
            size="editor"
          >
            H2
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBold().run()}
            aria-selected={editor.isActive('bold')}
            variant="editor"
            size="editor"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            aria-selected={editor.isActive('italic')}
            variant="editor"
            size="editor"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            aria-selected={editor.isActive('strike')}
            variant="editor"
            size="editor"
          >
            <Strikethrough className="h-4 w-4" />
          </Button>
        </BubbleMenu>
      ) : null}
      {/* {editor ? (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent
            return currentLineText === '/'
          }}
        >
          <div className="absolute -left-4 top-5 flex w-96 flex-col gap-3 rounded-lg bg-zinc-700 p-2">
            <section className="flex gap-3 rounded-lg p-1 px-3 transition-colors hover:bg-zinc-600">
              <img
                className="h-14 w-14 rounded-lg"
                src="https://www.notion.so/images/blocks/text/en-US.png"
              />
              <div className="flex flex-col gap-1">
                <h1 className="">Text</h1>
                <p className="">Just start writing with plain text.</p>
              </div>
            </section>
            <section className="flex gap-3 rounded-lg p-1 px-3 transition-colors hover:bg-zinc-600">
              <img
                className="h-14 w-14 rounded-lg"
                src="https://www.notion.so/images/blocks/text/en-US.png"
              />
              <div className="flex flex-col gap-1">
                <h1 className="">Text</h1>
                <p className="">Just start writing with plain text.</p>
              </div>
            </section>
            <section className="flex gap-3 rounded-lg p-1 px-3 transition-colors hover:bg-zinc-600">
              <img
                className="h-14 w-14 rounded-lg"
                src="https://www.notion.so/images/blocks/text/en-US.png"
              />
              <div className="flex flex-col gap-1">
                <h1 className="">Text</h1>
                <p className="">Just start writing with plain text.</p>
              </div>
            </section>
          </div>
        </FloatingMenu>
      ) : null} */}
    </>
  )
}
