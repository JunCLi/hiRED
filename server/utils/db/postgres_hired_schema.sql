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
-- Name: conversations_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.conversations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.conversations_id_seq OWNER TO postgres;

--
-- Name: conversations_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.conversations_id_seq OWNED BY hired.conversations.id;


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
-- Name: dribbble_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.dribbble_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.dribbble_id_seq OWNER TO postgres;

--
-- Name: dribbble_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.dribbble_id_seq OWNED BY hired.dribbble.id;


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
-- Name: feed_items_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.feed_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.feed_items_id_seq OWNER TO postgres;

--
-- Name: feed_items_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.feed_items_id_seq OWNED BY hired.feed_items.id;


--
-- Name: feed_items_tags; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.feed_items_tags (
    feed_item_id integer,
    tag_id integer
);


ALTER TABLE hired.feed_items_tags OWNER TO postgres;

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
-- Name: feedback_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.feedback_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.feedback_id_seq OWNER TO postgres;

--
-- Name: feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.feedback_id_seq OWNED BY hired.feedback.id;


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
-- Name: github_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.github_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.github_id_seq OWNER TO postgres;

--
-- Name: github_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.github_id_seq OWNED BY hired.github.id;


--
-- Name: linkedin_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.linkedin_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.linkedin_id_seq OWNER TO postgres;

--
-- Name: mentors; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.mentors (
    id integer NOT NULL,
    user_id integer,
    status boolean NOT NULL,
    disabled boolean
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
-- Name: messages_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.messages_id_seq OWNER TO postgres;

--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.messages_id_seq OWNED BY hired.messages.id;


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
-- Name: portfolio_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.portfolio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.portfolio_id_seq OWNER TO postgres;

--
-- Name: portfolio_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.portfolio_id_seq OWNED BY hired.portfolio.id;


--
-- Name: program_users; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.program_users (
    user_id integer,
    program_id integer
);


ALTER TABLE hired.program_users OWNER TO postgres;

--
-- Name: programs; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.programs (
    id integer NOT NULL,
    name text
);


ALTER TABLE hired.programs OWNER TO postgres;

--
-- Name: programs_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.programs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.programs_id_seq OWNER TO postgres;

--
-- Name: programs_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.programs_id_seq OWNED BY hired.programs.id;


--
-- Name: tags; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.tags (
    id integer NOT NULL,
    type text,
    name text
);


ALTER TABLE hired.tags OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.tags_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.tags_id_seq OWNER TO postgres;

--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.tags_id_seq OWNED BY hired.tags.id;


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
-- Name: users_conversation; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.users_conversation (
    user_id integer,
    conversation_id integer
);


ALTER TABLE hired.users_conversation OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: hired; Owner: postgres
--

CREATE SEQUENCE hired.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE hired.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: postgres
--

ALTER SEQUENCE hired.users_id_seq OWNED BY hired.users.id;


--
-- Name: users_tags; Type: TABLE; Schema: hired; Owner: postgres
--

CREATE TABLE hired.users_tags (
    user_id integer,
    tag_id integer
);


ALTER TABLE hired.users_tags OWNER TO postgres;

--
-- Name: conversations id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.conversations ALTER COLUMN id SET DEFAULT nextval('hired.conversations_id_seq'::regclass);


--
-- Name: dribbble id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.dribbble ALTER COLUMN id SET DEFAULT nextval('hired.dribbble_id_seq'::regclass);


--
-- Name: feed_items id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feed_items ALTER COLUMN id SET DEFAULT nextval('hired.feed_items_id_seq'::regclass);


--
-- Name: feedback id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feedback ALTER COLUMN id SET DEFAULT nextval('hired.feedback_id_seq'::regclass);


--
-- Name: github id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.github ALTER COLUMN id SET DEFAULT nextval('hired.github_id_seq'::regclass);


--
-- Name: mentors id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.mentors ALTER COLUMN id SET DEFAULT nextval('hired.mentors_id_seq'::regclass);


--
-- Name: messages id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.messages ALTER COLUMN id SET DEFAULT nextval('hired.messages_id_seq'::regclass);


--
-- Name: portfolio id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.portfolio ALTER COLUMN id SET DEFAULT nextval('hired.portfolio_id_seq'::regclass);


--
-- Name: programs id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.programs ALTER COLUMN id SET DEFAULT nextval('hired.programs_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.tags ALTER COLUMN id SET DEFAULT nextval('hired.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users ALTER COLUMN id SET DEFAULT nextval('hired.users_id_seq'::regclass);


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
-- Name: programs programs_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.programs
    ADD CONSTRAINT programs_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: feed_items_tags feed_items_tags_feed_item_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feed_items_tags
    ADD CONSTRAINT feed_items_tags_feed_item_id_fkey FOREIGN KEY (feed_item_id) REFERENCES hired.feed_items(id);


--
-- Name: feed_items_tags feed_items_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.feed_items_tags
    ADD CONSTRAINT feed_items_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES hired.tags(id);


--
-- Name: program_users program_users_program_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.program_users
    ADD CONSTRAINT program_users_program_id_fkey FOREIGN KEY (program_id) REFERENCES hired.programs(id);


--
-- Name: program_users program_users_user_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.program_users
    ADD CONSTRAINT program_users_user_id_fkey FOREIGN KEY (user_id) REFERENCES hired.users(id);


--
-- Name: users_conversation users_conversation_conversation_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users_conversation
    ADD CONSTRAINT users_conversation_conversation_id_fkey FOREIGN KEY (conversation_id) REFERENCES hired.conversations(id);


--
-- Name: users_conversation users_conversation_user_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users_conversation
    ADD CONSTRAINT users_conversation_user_id_fkey FOREIGN KEY (user_id) REFERENCES hired.users(id);


--
-- Name: users_tags users_tags_tag_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users_tags
    ADD CONSTRAINT users_tags_tag_id_fkey FOREIGN KEY (tag_id) REFERENCES hired.tags(id);


--
-- Name: users_tags users_tags_user_id_fkey; Type: FK CONSTRAINT; Schema: hired; Owner: postgres
--

ALTER TABLE ONLY hired.users_tags
    ADD CONSTRAINT users_tags_user_id_fkey FOREIGN KEY (user_id) REFERENCES hired.users(id);


--
-- PostgreSQL database dump complete
--

