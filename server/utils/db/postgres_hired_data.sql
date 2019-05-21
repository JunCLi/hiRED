--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.12
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: conversations; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.conversations (id) FROM stdin;
\.


--
-- Data for Name: dribbble; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.dribbble (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: dribbble_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.dribbble_items (id, user_id, date_pulled, token) FROM stdin;
\.


--
-- Data for Name: feed_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feed_items (id, user_id, title, content, likes, location, direct_link, date_created) FROM stdin;
\.


--
-- Data for Name: skills; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.skills (id, value, label) FROM stdin;
1	react	React
2	graphql	Graphql
3	apollo	Apollo
4	postgres	Postgres
5	react native	React native
6	redux	Redux
7	formik	Formik
8	javascript	Javascript
9	html	HTML
10	css	CSS
\.


--
-- Data for Name: feed_items_tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feed_items_tags (feed_item_id, tag_id) FROM stdin;
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feedback (id, user_id, issue_type, issue_content) FROM stdin;
\.


--
-- Data for Name: github; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.github (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: mentors; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.mentors (id, user_id, status, disabled) FROM stdin;
1	1	t	\N
2	2	t	\N
3	3	t	\N
4	5	t	\N
5	7	t	\N
6	8	t	\N
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.messages (id, user_id, conversation_id, content, date_created) FROM stdin;
\.


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.portfolio (id, user_id, title, description, type, custom_link, api_link, thumbnail) FROM stdin;
\.


--
-- Data for Name: programs; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.programs (id, name) FROM stdin;
1	UX
2	UI
3	DM
4	WEB
5	APP
6	WEBAPP
7	UXUI
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users (id, fullname, email, password, role, campus, location, current_job, avatar, date_created, study_year, study_cohort, github_access_token, github_api_code, dribbble_access_token, dribbble_api_code, dribbble_connected) FROM stdin;
2	julien something	julien@something.com	$2b$12$sA31Ve47d2uYQ16g.kGtCutwmxmnDskxu0Rd3peLfaQQ9tDsNh78G	\N	\N	\N	\N	\N	2019-05-08 11:34:59.181124	\N	\N	\N	\N	\N	\N	\N
1	person3	person3@person.com	$2b$12$D.8A4BIC724NRtOQH6PXZOanToquS2iJrIxkB/z0Goz6.rOAiQwPu	\N	\N	\N	\N	\N	2019-05-07 17:07:28.874048	\N	\N	\N	\N	\N	\N	\N
3	Julien Assouline	julien1993@hotmail.ca	$2b$12$iltwkgmupuzjf9Lx9enH8eXmUydOLv3cmNIy3gYy2W9XTp19T/toG	\N	\N	\N	\N	\N	2019-05-13 13:24:52.410748	\N	\N	\N	\N	\N	\N	\N
4	Julienngjienisd	jul@hotmail.ca	$2b$12$DbcsJhKGH1cUwz75qra9d.eCrKFiguoQYVjlBf9m7FpnIMMHr3BlO	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-14 13:38:49.411468	2018	Q2	\N	\N	\N	\N	\N
5	thing	thing@hotmail.com	$2b$12$fW8sSqAgQghhOdVZXX8QbObskE/YGS3Kh8iDGqXPdJKd7ePVxvLea	ALUMNI	TOR	Wayne Towers	batman	\N	2019-05-14 15:12:49.297095	2015	Q1	\N	\N	\N	\N	\N
6	sweet	o@well.com	$2b$12$Lbv1oMVGrpP78L0RmBRpbutn81FbnXZocrBEejmoxgJrZKiS4t2q2	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-14 16:15:36.944306	2014	Q1	\N	\N	\N	\N	\N
7	lol	lol@noway.com	$2b$12$P88AH8pzG7lmHEJMOFG5j.eI17.LxyU9OfJ1IKns3zBHvT3kXuFVG	STUDENT	LON	hello	something	\N	2019-05-14 16:17:17.842185	2015	Q1	\N	\N	\N	\N	\N
8	cool	cool@cool.com	$2b$12$FEPaYhn58dpKrSns65sSyuBGwRzgWsH/JdqD9yKgjcbg1GAeALI.y	STUDENT	TOR	cool	nice	\N	2019-05-14 16:44:08.431754	2014	Q2	\N	\N	\N	\N	\N
9	test	test@test.com	$2b$12$CZ/iMifD/W.ev1HJrFzLo.cjtyfh8A/QyV6qL7D88nD7paK3OlF4a	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-15 15:06:40.005603	2017	Q2	\N	\N	5027312d04a2c8d3cc176b5568ba149314e7fb8d69f0b0cf490518608dc2591f	a3ea6afa74c35fbe26e2ed26ec5025e2eef1000ef2b0f38f0dcb633c8025a4a4	true
\.


--
-- Data for Name: program_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.program_users (user_id, program_id) FROM stdin;
9	1
\.


--
-- Data for Name: skills_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.skills_users (user_id, skills_id) FROM stdin;
4	5
4	1
4	6
4	3
4	1
5	1
5	3
5	2
5	4
7	1
7	2
7	3
8	1
8	2
8	3
\.


--
-- Data for Name: users_conversation; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users_conversation (user_id, conversation_id) FROM stdin;
\.


--
-- Data for Name: users_tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users_tags (user_id, tag_id) FROM stdin;
\.


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.conversations_id_seq', 1, false);


--
-- Name: dribbble_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.dribbble_id_seq', 29, true);


--
-- Name: feed_items_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.feed_items_id_seq', 1, false);


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.feedback_id_seq', 1, false);


--
-- Name: github_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.github_id_seq', 1, false);


--
-- Name: linkedin_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.linkedin_id_seq', 1, false);


--
-- Name: mentors_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.mentors_id_seq', 3, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.messages_id_seq', 1, false);


--
-- Name: portfolio_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.portfolio_id_seq', 1, false);


--
-- Name: programs_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.programs_id_seq', 7, true);


--
-- Name: skills_users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.skills_users_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.tags_id_seq', 14, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.users_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

