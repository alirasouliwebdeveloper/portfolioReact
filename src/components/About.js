import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
/********************* company Logos ********************************/
import TejartBankLogo from "../assets/images/tejaratbankLogo.png";
import Freelancer from "../assets/images/freelancer.jpeg";
import PezhvakWeb from "../assets/images/Pezhvakweb.png";
import AzadUnivercityLogo from "../assets/images/AzadUnivercityLogo.png";

function Company({
  title,
  role,
  skills,
  period,
  logo,
  colorMode,
  alt,
  isEducation = false,
}) {
  return (
    <Box
      paddingX={4}
      paddingY={5}
      _hover={{ shadow: "md" }}
      borderColor={`mode.${colorMode}.border`}
      backgroundColor={`mode.${colorMode}.cardBG`}
      position="relative"
      rounded="md"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Image
            rounded="full"
            width={{
              sm: "4rem",
              md: "14",
            }}
            height={{
              sm: isEducation ? "4rem" : "auto",
              md: "auto",
            }}
            objectFit="cover"
            src={logo}
            alt={alt}
          />
          <Stack spacing={2} pl={3}>
            <Heading fontSize="xl" color={`mode.${colorMode}.career.text`}>
              {title}
            </Heading>
            <Heading fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
              {role}
              <Text
                display={["block", "none", "none", "none"]}
                fontSize={14}
                color={`mode.${colorMode}.career.subtext`}
              >
                {period}
              </Text>
            </Heading>
          </Stack>
        </Flex>
        <Stack display={["none", "flex", "flex", "flex"]}>
          <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
            {period}
          </Text>
        </Stack>
      </Flex>
      <Stack spacing={2} mt={3} isInline alignItems="center">
        {skills.split(",").map((skill) => (
          <Tag
            size="sm"
            padding="0 3px"
            key={skill}
            color="#4299E1"
            fontWeight="bold"
            bgColor={`mode.${colorMode}.career.tagBG`}
          >
            {skill}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

const About = () => {
  const { colorMode } = useColorMode();
  const companies = [
    {
      title: "Tejarat Bank",
      alt: "tejarat bank image",
      role: "Senior Frontend Developer",
      skills: "Typescript, Javascript, React, MUI, Web Component",
      period: "2021 - Present",
      logo: TejartBankLogo,
    },
    {
      title: "Freelancer",
      alt: "Freelancer image",
      role: "Senior Full-stack Developer",
      skills:
        "Laravel, PHP, WordPress, Typescript, Javascript, React, MUI, Chakra UI, Tailwind, Bootstrap",
      period: "2019 - 2021",
      logo: Freelancer,
    },
    {
      title: "PezhwakWeb Company",
      alt: "PezhwakWeb Company image",
      role: "Mid-Level Full-stack Developer",
      skills: "WordPress, Bootstrap, Project Management",
      period: "2014 - 2019",
      logo: PezhvakWeb,
    },
  ];

  return (
    <Stack
      as="main"
      padding="1.5rem"
      color="#2D3748"
      backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="48rem"
      paddingTop="3rem"
    >
      <Stack spacing={2} marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`} display="flex">
          Hi, I'm Ali
        </Heading>
        <Stack as="flex" flexDirection="row" alignItems="center">
          <Box>
            <Text color={`mode.${colorMode}.subtext`}>
              As an experienced Frontend Developer, I bring a proven track
              record of designing and implementing user-friendly and visually
              appealing web applications. With a strong foundation in web
              technologies and a passion for creating seamless user experiences,
              I am well-equipped to contribute to the success of any project
            </Text>
          </Box>
          <Box mb="3">
            <Avatar
              ml="2"
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="IRAN Flag"
              src="https://www.flaticon.com/premium-icon/icons/svg/1863/1863138.svg"
            />
          </Box>
        </Stack>
        {/* <Text color={`mode.${colorMode}.subtext`}>
          This is my digital garden, where I write about the things I'm working
          on and share what I've learned.
        </Text> */}
      </Stack>
      <Stack marginBottom={8}>
        <Heading color={`mode.${colorMode}.text`}>My Skills</Heading>
        <Stack
          padding={4}
          borderLeft="4px solid"
          borderColor={`mode.${colorMode}.skills.border`}
          color={`mode.${colorMode}.career.subtext`}
          _hover={{ shadow: "md" }}
          backgroundColor={`mode.${colorMode}.cardBG`}
          rounded="md"
          fontWeight="bold"
        >
          <Text>Javascript, React</Text>
          <Text>MySQL</Text>
          <Text>Chakra UI, MUI, Tailwind, Bootstrap</Text>
          <Text>
            Software Architecture, Project Management, Problem Solutions
          </Text>
        </Stack>
      </Stack>
      <Stack spacing={4} marginBottom={6}>
        <Heading color={`mode.${colorMode}.career.text`}>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              My Careers
            </Text>
            <Stack pl={3}>
              <Box
                as={BsFillBriefcaseFill}
                size="25px"
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        {companies.map((company, index) => (
          <Company
            key={index}
            title={company.title}
            role={company.role}
            skills={company.skills}
            period={company.period}
            logo={company.logo}
            colorMode={colorMode}
          />
        ))}
      </Stack>
      <Stack spacing={4}>
        <Heading>
          <Flex alignItems="center">
            <Text as="span" color={`mode.${colorMode}.career.text`}>
              My Education
            </Text>
            <Stack pl={2}>
              <Box
                as={FaGraduationCap}
                color={`mode.${colorMode}.career.subtext`}
              />
            </Stack>
          </Flex>
        </Heading>
        <Company
          title="Islamic Azad University of Karaj"
          alt="Islamic Azad University of Karaj"
          role="Bachelor's Degree in Computer Software Engineer"
          skills="Project Management, Web Development, Game Development"
          period="2013 - 2016"
          logo={AzadUnivercityLogo}
          colorMode={colorMode}
          isEducation={true}
        />
      </Stack>
    </Stack>
  );
};

export default About;
