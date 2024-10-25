import {
    Box,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    HStack,
    Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'


const RupeeSlider = () => {
    const [sliderValue, setSliderValue] = useState(100000); // Default value in rupees

    const formatRupee = (val) => `₹ ${val.toLocaleString('en-IN')}`;

    return (
        <Box w="100%">
            <HStack mt={12}>
                <Text fontSize="xs" fontWeight="500" color={"#9A9A9A"} mb={0} w={12}>₹ 100</Text>
                <Slider
                    aria-label='slider-ex-6'
                    onChange={(val) => setSliderValue(val)}
                    colorScheme='purple'
                    min={100}
                    max={500000}
                    defaultValue={100000}
                >
                    <SliderMark
                        value={sliderValue}
                        textAlign='center'
                        bg='#efeefe'
                        color='#3725EA'
                        mt='-12'
                        ml='-45px'
                        p={2}
                        w={90}
                        fontSize={"xs"}
                        fontWeight={600}
                        rounded={"md"}
                        position="relative"
                        sx={{
                            '::after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-3', // Adjust the distance of the arrow from the mark
                                left: '50%',
                                transform: 'translateX(-50%)',
                                borderWidth: '6px',
                                borderStyle: 'solid',
                                borderColor: '#efeefe transparent transparent transparent', // Arrow color matching the bg
                            },
                        }}
                    >
                        {formatRupee(sliderValue)}
                    </SliderMark>

                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                <Text fontSize="xs" fontWeight="500" color={"#9A9A9A"} mb={0} w={24}>₹ 5,00,000</Text>
            </HStack>
        </Box>
    )
}

export default RupeeSlider