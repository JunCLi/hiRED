--
-- PostgreSQL database dump
--

<<<<<<< HEAD
-- Dumped from database version 10.7 (Ubuntu 10.7-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.7 (Ubuntu 10.7-0ubuntu0.18.04.1)
=======
-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d

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

<<<<<<< HEAD
COPY hired.dribbble (id, user_id, feed_item_id, date_pulled) FROM stdin;
=======
COPY hired.dribbble (id, user_id, date_pulled, feed_item_id) FROM stdin;
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d
\.


--
-- Data for Name: feed_items; Type: TABLE DATA; Schema: hired; Owner: postgres
--

<<<<<<< HEAD
COPY hired.feed_items (id, user_id, title, content, likes, location, direct_link, date_created) FROM stdin;
=======
COPY hired.feed_items (id, user_id, date_created, title, content, likes, location, direct_link) FROM stdin;
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.feedback (id, user_id, issue_type, issue_content) FROM stdin;
\.


--
-- Data for Name: github; Type: TABLE DATA; Schema: hired; Owner: postgres
--

<<<<<<< HEAD
COPY hired.github (id, user_id, feed_item_id, date_pulled) FROM stdin;
=======
COPY hired.github (id, user_id, feed_item_id, date_created) FROM stdin;
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d
\.


--
-- Data for Name: linkedin; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.linkedin (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: mentors; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.mentors (id, user_id, status) FROM stdin;
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
-- Data for Name: tags; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.tags (type, name) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: hired; Owner: postgres
--

COPY hired.users (id, fullname, email, password, role, campus, location, current_job, avatar, date_created) FROM stdin;
<<<<<<< HEAD
2	person3	person3@person.com	$2b$12$D.8A4BIC724NRtOQH6PXZOanToquS2iJrIxkB/z0Goz6.rOAiQwPu	\N	\N	\N	\N	\N	2019-05-07 17:07:28.874048
=======
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d
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
-- Name: mentors_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.mentors_id_seq', 1, false);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.messages_id_seq', 1, false);


--
-- Name: portfolio_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

SELECT pg_catalog.setval('hired.portfolio_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: postgres
--

<<<<<<< HEAD
SELECT pg_catalog.setval('hired.users_id_seq', 2, true);
=======
SELECT pg_catalog.setval('hired.users_id_seq', 1, false);
>>>>>>> 0b72156f9c5f0bcbb447f711cd9300dd6d90896d


--
-- PostgreSQL database dump complete
--

