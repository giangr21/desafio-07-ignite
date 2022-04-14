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
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay>
        <ModalContent bg="pGray.700">
          <ModalBody p="0">
            <Image
              src={imgUrl}
              w="100%"
              h="100%"
              maxW="900px"
              maxH="600px"
              objectFit="contain"
            />
          </ModalBody>
          <ModalFooter
            h="32px"
            color="pGray.50"
            bg="pGray.800"
            fontSize="14px"
            justifyContent="flex-start"
          >
            <Link href={imgUrl} rel="noopener noreferrer" target="_blank">
              Abrir original
            </Link>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
}
