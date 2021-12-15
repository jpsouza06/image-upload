import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        mx="auto"
        mb="2.5rem"
        mt="2.5rem"
        w="auto"
        h="auto"
        maxW={900}
        maxH={600}
        bg="transparent"
      >
        <ModalBody p="0">
          <Image
            src={imgUrl}
            maxW={900}
            maxH={600}
          />
        </ModalBody>

        <ModalFooter h="2rem" bg="pGray.800" borderBottomRadius="6px">
          <Link
            href={imgUrl}
            isExternal
            fontSize="0.875rem"
            mr="auto"
            ml="10px"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
