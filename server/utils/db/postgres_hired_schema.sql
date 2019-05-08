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
-- Name: hired; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA hired;


ALTER SCHEMA hired OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: conversations; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.conversations (
    id integer NOT NULL
);


ALTER TABLE hired.conversations OWNER TO postgres;

--
-- Name: dribbble; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.dribbble (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feed_item_id integer NOT NULL,
    date_pulled timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.dribbble OWNER TO postgres;

--
-- Name: feed_items; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.feed_items (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title text,
    content text,
    likes integer,
    location text,
    direct_link text,
    date_created timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.feed_items OWNER TO postgres;

--
-- Name: feedback; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.feedback (
    id integer NOT NULL,
    user_id integer NOT NULL,
    issue_type text,
    issue_content text
);


ALTER TABLE hired.feedback OWNER TO postgres;

--
-- Name: github; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.github (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feed_item_id integer NOT NULL,
    date_pulled timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.github OWNER TO postgres;

--
-- Name: linkedin; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.linkedin (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feed_item_id integer NOT NULL,
    date_pulled timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.linkedin OWNER TO postgres;

--
-- Name: mentors; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.mentors (
    id integer NOT NULL,
    user_id integer,
    status boolean NOT NULL
);


ALTER TABLE hired.mentors OWNER TO postgres;

--
-- Name: mentors_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.mentors_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.mentors_id_seq OWNER TO postgres;

--
-- Name: mentors_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.mentors_id_seq OWNED BY hired.mentors.id;


--
-- Name: messages; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.messages (
    id integer NOT NULL,
    user_id integer NOT NULL,
    conversation_id integer NOT NULL,
    content text,
    date_created timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.messages OWNER TO postgres;

--
-- Name: portfolio; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.portfolio (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title text,
    description text,
    type text,
    custom_link text,
    api_link text,
    thumbnail text
);


ALTER TABLE hired.portfolio OWNER TO postgres;

--
-- Name: tags; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.tags (
    type text,
    name text
);


ALTER TABLE hired.tags OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.users (
    id integer NOT NULL,
    fullname text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text,
    campus text,
    location text,
    current_job text,
    avatar text,
    date_created timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE hired.users OWNER TO postgres;

--
-- Name: mentors id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.mentors ALTER COLUMN id SET DEFAULT nextval('hired.mentors_id_seq'::regclass);


--
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (id);


--
-- Name: dribbble dribbble_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.dribbble
    ADD CONSTRAINT dribbble_pkey PRIMARY KEY (id);


--
-- Name: feed_items feed_items_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feed_items
    ADD CONSTRAINT feed_items_pkey PRIMARY KEY (id);


--
-- Name: feedback feedback_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feedback
    ADD CONSTRAINT feedback_pkey PRIMARY KEY (id);


--
-- Name: github github_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.github
    ADD CONSTRAINT github_pkey PRIMARY KEY (id);


--
-- Name: linkedin linkedin_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.linkedin
    ADD CONSTRAINT linkedin_pkey PRIMARY KEY (id);


--
-- Name: mentors mentors_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.mentors
    ADD CONSTRAINT mentors_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: portfolio portfolio_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.portfolio
    ADD CONSTRAINT portfolio_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

