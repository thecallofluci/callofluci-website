import { Box, Flex, FlexProps, Text } from '@chakra-ui/react'
import { Hero, Link, PageMetadata, Section } from '@/components'
import { MAIN_CONTENT_ID } from '@/constants'

interface FaqItemProps extends FlexProps {
  question: string
}
const FaqItem: React.FC<FaqItemProps> = ({
  question,
  children,
  ...flexProps
}) => (
  <Flex direction={{ base: 'column', md: 'row' }} py={6} gap={6} {...flexProps}>
    <Text flex={1} textStyle="h6-mono" color="text">
      {question}
    </Text>
    <Text flex={2}>{children}</Text>
  </Flex>
)
export default function NewPage() {
  return (
    <>
      <PageMetadata
        title="New Page"
        description="This is the new page description."
      />
      <Box as="main" id={MAIN_CONTENT_ID}>
        <Hero
          header="New Page"
          cta={[
            { name: 'Get started', href: '/get-started' },
            { name: 'Contribute', href: '/contribute' },
          ]}
        >
          This is the new page content.
        </Hero>
        {/* Add your page content here */}
      </Box>
    </>
  )
}
