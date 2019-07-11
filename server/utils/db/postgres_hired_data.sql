--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.14
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

COPY hired.conversations (id, user_id_1, user_id_2) FROM stdin;
1	10	1
2	10	2
3	11	1
4	15	1
5	16	5
6	16	1
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
7	13	t	\N
8	14	t	\N
9	15	t	\N
10	18	t	\N
11	17	t	\N
12	18	t	\N
13	19	t	\N
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.messages (id, conversation_id, content, date_created, from_user) FROM stdin;
1	11	Hello Jeff	2019-05-16 10:44:19.493007	\N
4	1	hello world	2019-05-16 16:20:41.372049	10
5	1	hello	2019-05-16 16:40:31.174139	10
6	1	hello	2019-05-16 16:40:36.959065	10
7	1	hello	2019-05-16 16:46:47.353592	10
8	1	hi dude	2019-05-16 17:10:36.970568	1
9	1	how are u	2019-05-16 17:13:58.938184	1
10	1	im good man	2019-05-16 17:14:09.407851	10
11	1	im good man	2019-05-16 17:18:47.943739	10
12	1	yho	2019-05-16 17:31:31.033855	10
13	1	lo	2019-05-16 17:31:55.293832	10
14	1	damn	2019-05-16 17:34:11.781795	10
15	1	hello	2019-05-16 18:35:09.454606	10
16	3	hi	2019-05-20 15:48:19.854397	11
17	1	my subscription	2019-05-21 11:00:02.52529	11
18	1	my subscription	2019-05-21 11:39:02.828004	14
19	1	my subscription	2019-05-21 11:40:09.745172	14
20	1	my subscription2	2019-05-21 11:40:59.302664	14
21	1	my subscription2	2019-05-21 11:42:56.41055	14
22	1	my subscription2	2019-05-21 11:43:38.395287	14
23	1	my subscription2	2019-05-21 11:44:34.903872	14
24	1	my subscription2	2019-05-21 11:46:16.206452	14
25	1	my subscription2	2019-05-21 11:47:06.92636	14
26	1	my subscription2	2019-05-21 11:47:17.157652	14
27	1	my subscription2	2019-05-21 11:48:16.276491	14
28	1	person3	2019-05-21 11:51:41.57029	1
29	1	jul	2019-05-21 11:51:55.453775	10
30	1	it worked	2019-06-06 12:09:29.339583	1
31	1	try test	2019-06-06 12:12:03.231642	1
32	1	test 2	2019-06-06 12:14:30.031924	1
33	1	test 3	2019-06-06 12:17:22.303661	1
34	1	test 3	2019-06-06 12:22:19.228602	1
35	1	test 4	2019-06-06 12:23:28.695005	1
36	1	test 5	2019-06-06 12:24:55.748041	1
37	1	test 6	2019-06-06 12:25:42.556484	1
38	1	test 7	2019-06-06 12:28:35.309504	1
39	1	test 8	2019-06-06 12:30:59.049785	1
40	1	test 9	2019-06-06 12:41:06.032216	1
41	1	test 10	2019-06-06 12:42:10.110987	1
42	1	test 11	2019-06-06 12:42:59.541064	1
43	1	test 12	2019-06-06 12:43:59.097939	1
44	1	it works!!!	2019-06-06 12:49:38.128457	1
45	1	cool 	2019-06-06 13:37:20.278592	1
46	5	hi	2019-06-06 13:52:59.144913	16
47	1	hi 	2019-06-06 14:56:12.862113	16
48	1	apollo-hooks	2019-06-06 14:57:13.391043	16
49	1	apollo-hooks 2	2019-06-06 14:58:23.078307	16
50	1	apollo-hooks 3	2019-06-06 15:01:51.01099	16
51	1	apollo-hooks 4	2019-06-06 15:08:04.864932	16
52	1	apollo-hooks 5	2019-06-06 15:10:32.908117	16
53	1	apollo-hooks 6	2019-06-06 15:11:28.944692	16
54	1	apollo-hooks 7	2019-06-06 15:16:08.565955	16
55	1	apollo-hooks 8	2019-06-06 15:23:50.500048	16
56	1	apollo-hooks 8	2019-06-06 15:24:42.226634	16
57	1	apollo-hooks 9	2019-06-06 15:25:39.650667	16
58	1	apollo-hooks 10	2019-06-06 15:27:17.526765	16
59	1	apollo-hooks 11	2019-06-06 15:30:05.940818	16
60	1	apollo-hooks 12	2019-06-06 15:31:32.159926	16
61	1	apollo-hooks 12	2019-06-06 15:33:15.046097	16
62	1	test 1	2019-06-06 15:35:20.946884	16
63	1	test 2	2019-06-06 15:42:34.652862	16
64	1	test 3	2019-06-06 15:48:02.633322	16
65	1	test 4	2019-06-06 15:50:08.881899	16
66	1	test 5	2019-06-06 15:51:03.243497	16
67	1	test 5	2019-06-06 15:51:17.774184	16
68	1	test 6	2019-06-06 15:51:49.50341	16
69	1	test 7	2019-06-06 15:54:02.290636	16
70	1	test 8	2019-06-06 15:58:06.635572	16
71	1	test 8	2019-06-06 15:59:07.310272	16
72	1	test 9	2019-06-06 16:00:10.567024	16
73	1	test 9	2019-06-06 16:00:13.957501	16
74	1	test 9	2019-06-06 16:00:14.821985	16
75	1	test 9	2019-06-06 16:00:15.481228	16
76	1	test 9	2019-06-06 16:00:16.136229	16
77	1	test 9	2019-06-06 16:00:16.739485	16
78	1	test 10	2019-06-06 16:00:59.257954	16
79	1	th	2019-06-06 16:04:40.403977	16
80	1	hello 	2019-06-06 16:06:53.690005	16
\.


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.portfolio (id, user_id, title, description, type, custom_link, api_link, thumbnail) FROM stdin;
1	11	Julien Assouline	some dude	I don't know what this is			
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

COPY hired.users (id, fullname, email, password, role, campus, location, current_job, avatar, date_created, study_year, study_cohort, github_access_token, github_api_code, dribbble_access_token, dribbble_api_code, dribbble_connected, description, programs, job_location) FROM stdin;
2	julien something	julien@something.com	$2b$12$sA31Ve47d2uYQ16g.kGtCutwmxmnDskxu0Rd3peLfaQQ9tDsNh78G	\N	\N	\N	\N	\N	2019-05-08 11:34:59.181124	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
1	person3	person3@person.com	$2b$12$D.8A4BIC724NRtOQH6PXZOanToquS2iJrIxkB/z0Goz6.rOAiQwPu	\N	\N	\N	\N	\N	2019-05-07 17:07:28.874048	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
3	Julien Assouline	julien1993@hotmail.ca	$2b$12$iltwkgmupuzjf9Lx9enH8eXmUydOLv3cmNIy3gYy2W9XTp19T/toG	\N	\N	\N	\N	\N	2019-05-13 13:24:52.410748	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
5	thing	thing@hotmail.com	$2b$12$fW8sSqAgQghhOdVZXX8QbObskE/YGS3Kh8iDGqXPdJKd7ePVxvLea	ALUMNI	TOR	Wayne Towers	batman	\N	2019-05-14 15:12:49.297095	2015	Q1	\N	\N	\N	\N	\N	\N	\N	\N
6	sweet	o@well.com	$2b$12$Lbv1oMVGrpP78L0RmBRpbutn81FbnXZocrBEejmoxgJrZKiS4t2q2	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-14 16:15:36.944306	2014	Q1	\N	\N	\N	\N	\N	\N	\N	\N
7	lol	lol@noway.com	$2b$12$P88AH8pzG7lmHEJMOFG5j.eI17.LxyU9OfJ1IKns3zBHvT3kXuFVG	STUDENT	LON	hello	something	\N	2019-05-14 16:17:17.842185	2015	Q1	\N	\N	\N	\N	\N	\N	\N	\N
8	cool	cool@cool.com	$2b$12$FEPaYhn58dpKrSns65sSyuBGwRzgWsH/JdqD9yKgjcbg1GAeALI.y	STUDENT	TOR	cool	nice	\N	2019-05-14 16:44:08.431754	2014	Q2	\N	\N	\N	\N	\N	\N	\N	\N
9	test	test@test.com	$2b$12$CZ/iMifD/W.ev1HJrFzLo.cjtyfh8A/QyV6qL7D88nD7paK3OlF4a	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-15 15:06:40.005603	2017	Q2	\N	\N	5027312d04a2c8d3cc176b5568ba149314e7fb8d69f0b0cf490518608dc2591f	a3ea6afa74c35fbe26e2ed26ec5025e2eef1000ef2b0f38f0dcb633c8025a4a4	true	\N	\N	\N
10	Jul	ju3@hotmail.ca	$2b$12$brAqqcUyTncqjDREyoHIRuTRrd40OKRtpLsqzHVAGc7A7N0DEX3EC	\N	\N	\N	\N	\N	2019-05-16 09:28:05.928242	\N	\N	\N	\N	\N	\N	\N	\N	\N	\N
11	hjh	1993@hotmail.ca	$2b$12$ZWDxgLFES3VT/ZQkqCdNF.YAWCYfdB7pREPpHnzmVzYkgyraOjGgG					\N	2019-05-20 15:23:21.137491			\N	\N	\N	\N	\N	\N	\N	\N
12	Julehwk	93@hotmail.ca	$2b$12$xGtJ00gQznQgplBT1UuPQOHZMQgQ/d2l56gz5QsbNrdyk4v4QC0Pa	ALUMNI	TOR	cnjksdvk	bvjfbxk	\N	2019-05-21 11:20:08.738213	2017	Q2	\N	\N	\N	\N	\N	\N	\N	\N
13	Julien Assouline	3@hotmail.ca	$2b$12$EEFjakCQFpe4XEiuLh8v4elFisw3iVPaUBxbswDg4Rl5AhATPqHX6		TOR			\N	2019-05-21 11:21:44.68088			\N	\N	\N	\N	\N	\N	\N	\N
14	j9	j9@hotmail.ca	$2b$12$DW4ac.iM.KpAUWRG0SWYDeSdODHSogCSfIdcw9cp0S8MxwT/HlAd.					\N	2019-05-21 11:31:56.570641			\N	\N	\N	\N	\N	\N	\N	\N
15	Julien Assouline	ju93@hotmail.ca	$2b$12$GLz6YNjlfuyXH/NWAuZ6xOWisQX.FZKLv4Vr9.16u2wxxbDvUN4E6	STUDENT	TOR	Toronto	developer	\N	2019-06-05 11:43:08.630994	2014	Q2	\N	\N	\N	\N	\N	\N	\N	\N
16	Juli	gj3@hotmail.ca	$2b$12$NuqpoelMfiJML6f0fbr05OdresV.86DSOgIpAbDPtlu5DAR1j9U2C					\N	2019-06-06 13:52:39.431745			\N	\N	\N	\N	\N	\N	\N	\N
17	user3	user3@cool.com	$2b$12$cRQXg8dPl5NGV0o.802o9uCxe6Dfvld18zKJjye16wlnMnnoyKWcu	ALUMNI	TOR	canada town 	app developer	\N	2019-07-10 17:28:54.865014	2016	Q2	\N	\N	\N	\N	\N	\N	\N	red academy
18	user4	user4@hotmail.ca	$2b$12$pG7j9pgri4kmh7eOoFN59OT4P1ol2G/Q3HP.02KAcZw5mb9QdOVWC	ALUMNI	LON	vancouver	web dev	\N	2019-07-10 17:38:20.661613	2014	Q2	\N	\N	\N	\N	\N	\N	\N	red academy
19	user4	user5@homtail.ca	$2b$12$MX1w3.wQ.nkImzOT0ka5GuTdY9oi64FppFJoD3AQh8g64zZjoPujW	STAFF	LON	montreal	web dev	\N	2019-07-10 17:42:43.91579	2016	Q3	\N	\N	\N	\N	\N	\N	WEBAPP	red academy
4	Julienngjienisd	jul@hotmail.ca	$2b$12$DbcsJhKGH1cUwz75qra9d.eCrKFiguoQYVjlBf9m7FpnIMMHr3BlO	STUDENT	TOR	Wayne Towers	batman	\N	2019-05-14 13:38:49.411468	2018	Q2	\N	\N	\N	\N	\N	\N	APP	\N
\.


--
-- Data for Name: program_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.program_users (user_id, program_id) FROM stdin;
9	1
13	5
14	1
15	5
17	6
18	6
19	6
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
9	1
9	2
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

SELECT pg_catalog.setval('hired.conversations_id_seq', 6, true);


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

SELECT pg_catalog.setval('hired.mentors_id_seq', 13, true);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.messages_id_seq', 80, true);


--
-- Name: portfolio_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.portfolio_id_seq', 1, true);


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

SELECT pg_catalog.setval('hired.users_id_seq', 19, true);


--
-- PostgreSQL database dump complete
--

