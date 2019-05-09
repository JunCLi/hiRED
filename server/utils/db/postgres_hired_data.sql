--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
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

COPY hired.dribbble (id, user_id, feed_item_id, date_pulled, token, api_code) FROM stdin;
\.


--
-- Data for Name: feed_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feed_items (id, user_id, title, content, likes, location, direct_link, date_created) FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.tags (id, type, name) FROM stdin;
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

COPY hired.github (id, user_id, feed_item_id, date_pulled, token, api_code) FROM stdin;
\.


--
-- Data for Name: linkedin; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.linkedin (id, user_id, feed_item_id, token, api_code, date_pulled) FROM stdin;
\.


--
-- Data for Name: mentors; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.mentors (id, user_id, status, disabled) FROM stdin;
1	1	t	\N
2	2	t	\N
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
1	DM
2	UX
3	UI
4	WEB
5	APP
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users (id, fullname, email, password, role, campus, location, current_job, avatar, date_created, study_cohort, study_year) FROM stdin;
1	person3	person3@person.com	$2b$12$D.8A4BIC724NRtOQH6PXZOanToquS2iJrIxkB/z0Goz6.rOAiQwPu	\N	\N	\N	\N	\N	2019-05-07 17:07:28.874048	\N	\N
2	julien something	julien@something.com	$2b$12$sA31Ve47d2uYQ16g.kGtCutwmxmnDskxu0Rd3peLfaQQ9tDsNh78G	\N	\N	\N	\N	\N	2019-05-08 11:34:59.181124	\N	\N
\.


--
-- Data for Name: program_users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.program_users (user_id, program_id) FROM stdin;
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

SELECT pg_catalog.setval('hired.dribbble_id_seq', 1, false);


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
-- Name: linkedin_id_seq1; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.linkedin_id_seq1', 1, false);


--
-- Name: mentors_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.mentors_id_seq', 2, true);


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

SELECT pg_catalog.setval('hired.programs_id_seq', 5, true);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.users_id_seq', 2, true);


--
-- PostgreSQL database dump complete
--

