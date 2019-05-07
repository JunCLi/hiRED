--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.0

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
-- Name: bazaar; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA bazaar;


--
-- Name: hired; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA hired;


--
-- Name: spaceX; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA "spaceX";


--
-- Name: spaceexplorers; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA spaceexplorers;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: item_ratings; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.item_ratings (
    item_rating_id integer NOT NULL,
    item_rating_itemrated_id numeric(9,0),
    item_rating_rater_id numeric(9,0),
    item_rating_rating numeric(2,1),
    item_rating_comment character varying(499),
    item_rating_date date DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: item_ratings_item_rating_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.item_ratings_item_rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: item_ratings_item_rating_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.item_ratings_item_rating_id_seq OWNED BY bazaar.item_ratings.item_rating_id;


--
-- Name: items; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.items (
    item_id integer NOT NULL,
    item_name character varying(64) NOT NULL,
    item_type character varying(64),
    item_status character varying(64),
    item_price numeric(9,2),
    item_quantity_avail numeric(9,0),
    item_description character varying(999),
    item_thumbnail_url character varying(999),
    item_condition character varying(64),
    item_owner_id numeric(9,0),
    item_date_created date DEFAULT CURRENT_TIMESTAMP,
    item_quantity_sold numeric(9,0),
    item_rating numeric(2,1),
    item_rating_num numeric(9,0)
);


--
-- Name: items_item_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.items_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: items_item_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.items_item_id_seq OWNED BY bazaar.items.item_id;


--
-- Name: pgmigrations; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.pgmigrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.pgmigrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.pgmigrations_id_seq OWNED BY bazaar.pgmigrations.id;


--
-- Name: transactions; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.transactions (
    transaction_id integer NOT NULL,
    transaction_item_id numeric(9,0),
    transaction_item_name character varying(64),
    transaction_item_type character varying(64),
    transaction_item_status character varying(64),
    transaction_item_price numeric(9,2),
    transaction_item_thumbnail_url character varying(999),
    transaction_item_condition character varying(64),
    transaction_item_buyer_id numeric(9,0),
    transaction_item_seller_id numeric(9,0),
    transaction_date date DEFAULT CURRENT_TIMESTAMP,
    transaction_stripe_id character varying(255)
);


--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.transactions_transaction_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.transactions_transaction_id_seq OWNED BY bazaar.transactions.transaction_id;


--
-- Name: user_ratings; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.user_ratings (
    user_rating_id integer NOT NULL,
    user_rating_rater_id numeric(9,0),
    user_rating_rated_id numeric(9,0),
    user_rating_rating numeric(2,1),
    user_rating_comment character varying(499),
    user_rating_date date DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: user_ratings_user_rating_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.user_ratings_user_rating_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: user_ratings_user_rating_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.user_ratings_user_rating_id_seq OWNED BY bazaar.user_ratings.user_rating_id;


--
-- Name: users; Type: TABLE; Schema: bazaar; Owner: -
--

CREATE TABLE bazaar.users (
    user_id integer NOT NULL,
    user_first_name character varying(64),
    user_last_name character varying(64),
    user_username character varying(64),
    user_email text NOT NULL,
    user_password text NOT NULL,
    user_date_joined date DEFAULT CURRENT_TIMESTAMP,
    user_account_deleted boolean,
    user_rating numeric(2,1)
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: bazaar; Owner: -
--

CREATE SEQUENCE bazaar.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: bazaar; Owner: -
--

ALTER SEQUENCE bazaar.users_user_id_seq OWNED BY bazaar.users.user_id;


--
-- Name: conversations; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.conversations (
    id integer NOT NULL
);


--
-- Name: conversations_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.conversations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: conversations_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.conversations_id_seq OWNED BY hired.conversations.id;


--
-- Name: dribbble; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.dribbble (
    id integer NOT NULL,
    user_id integer NOT NULL,
    date_pulled timestamp with time zone NOT NULL,
    feed_item_id integer NOT NULL
);


--
-- Name: dribbble_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.dribbble_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: dribbble_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.dribbble_id_seq OWNED BY hired.dribbble.id;


--
-- Name: feed_items; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.feed_items (
    id integer NOT NULL,
    user_id integer NOT NULL,
    date_created timestamp with time zone NOT NULL,
    title text NOT NULL,
    content text NOT NULL,
    likes integer NOT NULL,
    location text NOT NULL,
    direct_link text NOT NULL
);


--
-- Name: feed_items_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.feed_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: feed_items_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.feed_items_id_seq OWNED BY hired.feed_items.id;


--
-- Name: feedback; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.feedback (
    id integer NOT NULL,
    user_id integer NOT NULL,
    issue_type text NOT NULL,
    issue_content text NOT NULL
);


--
-- Name: feedback_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: feedback_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.feedback_id_seq OWNED BY hired.feedback.id;


--
-- Name: github; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.github (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feed_item_id integer NOT NULL,
    date_created timestamp with time zone NOT NULL
);


--
-- Name: github_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.github_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: github_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.github_id_seq OWNED BY hired.github.id;


--
-- Name: linkedin; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.linkedin (
    id integer NOT NULL,
    user_id integer NOT NULL,
    feed_item_id integer NOT NULL,
    date_pulled timestamp with time zone NOT NULL
);


--
-- Name: linkedin_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.linkedin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: linkedin_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.linkedin_id_seq OWNED BY hired.linkedin.id;


--
-- Name: messages; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.messages (
    id integer NOT NULL,
    user_id integer NOT NULL,
    conversation_id integer NOT NULL,
    content text NOT NULL,
    date_created timestamp with time zone NOT NULL
);


--
-- Name: messages_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.messages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: messages_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.messages_id_seq OWNED BY hired.messages.id;


--
-- Name: portfolio; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.portfolio (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    type text NOT NULL,
    custom_link text NOT NULL,
    api_link text NOT NULL,
    thumbnail text NOT NULL
);


--
-- Name: portfolio_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.portfolio_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: portfolio_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.portfolio_id_seq OWNED BY hired.portfolio.id;


--
-- Name: tags; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.tags (
    id integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL
);


--
-- Name: tags_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.tags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tags_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.tags_id_seq OWNED BY hired.tags.id;


--
-- Name: users; Type: TABLE; Schema: hired; Owner: -
--

CREATE TABLE hired.users (
    id integer NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    campus text NOT NULL,
    mentor boolean NOT NULL,
    location text NOT NULL,
    password text NOT NULL,
    role text NOT NULL,
    "current-job" text NOT NULL,
    avatar text NOT NULL,
    date_created timestamp with time zone NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: hired; Owner: -
--

CREATE SEQUENCE hired.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: hired; Owner: -
--

ALTER SEQUENCE hired.users_id_seq OWNED BY hired.users.id;


--
-- Name: pgmigrations; Type: TABLE; Schema: spaceX; Owner: -
--

CREATE TABLE "spaceX".pgmigrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE; Schema: spaceX; Owner: -
--

CREATE SEQUENCE "spaceX".pgmigrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE OWNED BY; Schema: spaceX; Owner: -
--

ALTER SEQUENCE "spaceX".pgmigrations_id_seq OWNED BY "spaceX".pgmigrations.id;


--
-- Name: bookings; Type: TABLE; Schema: spaceexplorers; Owner: -
--

CREATE TABLE spaceexplorers.bookings (
    booking_id integer NOT NULL,
    booking_flight_number numeric(9,0),
    booking_rocket_id character varying(64),
    booking_rocket_type character varying(64),
    booking_mission_name character varying(64),
    booking_mission_patch character varying(199),
    booking_launch_year character varying(64),
    booking_launch_date_local character varying(64),
    booking_launch_site_name_long character varying(64),
    booking_launch_is_booked boolean,
    booking_launch_user_id numeric(9,0),
    booking_date date DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: bookings_booking_id_seq; Type: SEQUENCE; Schema: spaceexplorers; Owner: -
--

CREATE SEQUENCE spaceexplorers.bookings_booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: bookings_booking_id_seq; Type: SEQUENCE OWNED BY; Schema: spaceexplorers; Owner: -
--

ALTER SEQUENCE spaceexplorers.bookings_booking_id_seq OWNED BY spaceexplorers.bookings.booking_id;


--
-- Name: pgmigrations; Type: TABLE; Schema: spaceexplorers; Owner: -
--

CREATE TABLE spaceexplorers.pgmigrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE; Schema: spaceexplorers; Owner: -
--

CREATE SEQUENCE spaceexplorers.pgmigrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE OWNED BY; Schema: spaceexplorers; Owner: -
--

ALTER SEQUENCE spaceexplorers.pgmigrations_id_seq OWNED BY spaceexplorers.pgmigrations.id;


--
-- Name: users; Type: TABLE; Schema: spaceexplorers; Owner: -
--

CREATE TABLE spaceexplorers.users (
    user_id integer NOT NULL,
    user_fullname character varying(64),
    user_username character varying(64),
    user_email text NOT NULL,
    user_password text NOT NULL,
    user_date_joined date DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: spaceexplorers; Owner: -
--

CREATE SEQUENCE spaceexplorers.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: spaceexplorers; Owner: -
--

ALTER SEQUENCE spaceexplorers.users_user_id_seq OWNED BY spaceexplorers.users.user_id;


--
-- Name: item_ratings item_rating_id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.item_ratings ALTER COLUMN item_rating_id SET DEFAULT nextval('bazaar.item_ratings_item_rating_id_seq'::regclass);


--
-- Name: items item_id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.items ALTER COLUMN item_id SET DEFAULT nextval('bazaar.items_item_id_seq'::regclass);


--
-- Name: pgmigrations id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.pgmigrations ALTER COLUMN id SET DEFAULT nextval('bazaar.pgmigrations_id_seq'::regclass);


--
-- Name: transactions transaction_id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.transactions ALTER COLUMN transaction_id SET DEFAULT nextval('bazaar.transactions_transaction_id_seq'::regclass);


--
-- Name: user_ratings user_rating_id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.user_ratings ALTER COLUMN user_rating_id SET DEFAULT nextval('bazaar.user_ratings_user_rating_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.users ALTER COLUMN user_id SET DEFAULT nextval('bazaar.users_user_id_seq'::regclass);


--
-- Name: conversations id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.conversations ALTER COLUMN id SET DEFAULT nextval('hired.conversations_id_seq'::regclass);


--
-- Name: dribbble id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.dribbble ALTER COLUMN id SET DEFAULT nextval('hired.dribbble_id_seq'::regclass);


--
-- Name: feed_items id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.feed_items ALTER COLUMN id SET DEFAULT nextval('hired.feed_items_id_seq'::regclass);


--
-- Name: feedback id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.feedback ALTER COLUMN id SET DEFAULT nextval('hired.feedback_id_seq'::regclass);


--
-- Name: github id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.github ALTER COLUMN id SET DEFAULT nextval('hired.github_id_seq'::regclass);


--
-- Name: linkedin id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.linkedin ALTER COLUMN id SET DEFAULT nextval('hired.linkedin_id_seq'::regclass);


--
-- Name: messages id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.messages ALTER COLUMN id SET DEFAULT nextval('hired.messages_id_seq'::regclass);


--
-- Name: portfolio id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.portfolio ALTER COLUMN id SET DEFAULT nextval('hired.portfolio_id_seq'::regclass);


--
-- Name: tags id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.tags ALTER COLUMN id SET DEFAULT nextval('hired.tags_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.users ALTER COLUMN id SET DEFAULT nextval('hired.users_id_seq'::regclass);


--
-- Name: pgmigrations id; Type: DEFAULT; Schema: spaceX; Owner: -
--

ALTER TABLE ONLY "spaceX".pgmigrations ALTER COLUMN id SET DEFAULT nextval('"spaceX".pgmigrations_id_seq'::regclass);


--
-- Name: bookings booking_id; Type: DEFAULT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.bookings ALTER COLUMN booking_id SET DEFAULT nextval('spaceexplorers.bookings_booking_id_seq'::regclass);


--
-- Name: pgmigrations id; Type: DEFAULT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.pgmigrations ALTER COLUMN id SET DEFAULT nextval('spaceexplorers.pgmigrations_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.users ALTER COLUMN user_id SET DEFAULT nextval('spaceexplorers.users_user_id_seq'::regclass);


--
-- Data for Name: item_ratings; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.item_ratings (item_rating_id, item_rating_itemrated_id, item_rating_rater_id, item_rating_rating, item_rating_comment, item_rating_date) FROM stdin;
1	1	2	4.9	This is a spectacular Paddle Board. Really cool woodwork. Would highly recommend.	2019-04-14
\.


--
-- Data for Name: items; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.items (item_id, item_name, item_type, item_status, item_price, item_quantity_avail, item_description, item_thumbnail_url, item_condition, item_owner_id, item_date_created, item_quantity_sold, item_rating, item_rating_num) FROM stdin;
2	"No-Thrill" Nissan Versa 2007 166,000 KM	Cars	available	1800.00	1	Want a great running car that is practically theft proof? Meet No-Thrill. Trunk does not open. Gas door is stuck open. You will make a lot of friends as everyone honks and gestures to let you know the gas door is open. Several panels are different shades of black. Some matte, some shiny. Call it abstract art. Shakes like it has withdrawal symptoms if you drive over 65 Km/h. Best offer only, accepting 24k gold as well. Holla for a grand tour with it.	http://www.blogcdn.com/green.autoblog.com/media/2007/09/nissan-versa-review-post-4505.jpg	salvageable	1	2019-04-03	0	\N	\N
3	test	test	available	12.00	10	vdsvdsfdsfcdsfdscds	\N	fdsfdsfdsfds	1	2019-05-02	11	\N	\N
1	Amazing wood effect stand up paddle board!	Water Sports	available	1000.15	1	Ready to tackle just about anything, from flatwater to fitness to surfing and even SUP yoga. This Taiga's stable design suits beginners on calm water or paddlers venturing into surfier conditions. It tracks superbly, letting you develop skills and efficient strokes on either side. <br /> Clear coat finish uses tri-layer fibreglass epoxy resin. Lightweight EPS foam core with 5-layer reinforced sidewalls. Deck pad makes touring days more comfortable.	https://cdn.shopify.com/s/files/1/1107/3616/products/board_with_grip_1024x1024.jpg?v=1475640742	near mint	1	2019-04-14	111	4.9	1
\.


--
-- Data for Name: pgmigrations; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.pgmigrations (id, name, run_on) FROM stdin;
1	1550779717609_full-db-migration	2019-05-01 13:06:40.554345
\.


--
-- Data for Name: transactions; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.transactions (transaction_id, transaction_item_id, transaction_item_name, transaction_item_type, transaction_item_status, transaction_item_price, transaction_item_thumbnail_url, transaction_item_condition, transaction_item_buyer_id, transaction_item_seller_id, transaction_date, transaction_stripe_id) FROM stdin;
1	1	Amazing wood effect stand up paddle board!	Water Sports	not available for sale	1000.15	https://cdn.shopify.com/s/files/1/1107/3616/products/board_with_grip_1024x1024.jpg?v=1475640742	near mint	2	1	2019-04-14	\N
2	3	test	test	not available for sale	12.00	\N	fdsfdsfdsfds	1	1	2019-05-02	\N
3	3	test	test	not available for sale	12.00	\N	fdsfdsfdsfds	1	1	2019-05-02	\N
4	1	Amazing wood effect stand up paddle board!	Water Sports	not available for sale	1000.15	https://cdn.shopify.com/s/files/1/1107/3616/products/board_with_grip_1024x1024.jpg?v=1475640742	near mint	1	1	2019-05-02	\N
5	1	Amazing wood effect stand up paddle board!	Water Sports	not available for sale	1000.15	https://cdn.shopify.com/s/files/1/1107/3616/products/board_with_grip_1024x1024.jpg?v=1475640742	near mint	1	1	2019-05-02	\N
\.


--
-- Data for Name: user_ratings; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.user_ratings (user_rating_id, user_rating_rater_id, user_rating_rated_id, user_rating_rating, user_rating_comment, user_rating_date) FROM stdin;
1	2	1	4.8	Simon is really the King of App Dev.	2019-04-14
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: bazaar; Owner: -
--

COPY bazaar.users (user_id, user_first_name, user_last_name, user_username, user_email, user_password, user_date_joined, user_account_deleted, user_rating) FROM stdin;
1	Simon	Stern	simistern	simon@simon.stern	$2b$12$keWnhcUZrDCqFNL66SBQCeKKuAsn8xtS0H5qQAGJmFkk4jft0/1iy	2017-08-15	f	4.9
2	Akshay	Manchanda	IronA	akshay@akshay.com	$2b$12$Icmv1X6pKuV5CS8b5uisgOfhfmggUO94y4LbMumV9Oj1H8NXNRvMa	2019-03-02	f	4.4
3	test	test	test	test@test.com	$2b$12$PK4fX6SJkiSk7gn9cxCj6OIiOYeLEMzDLe5NRa5UwH9JGQq3CW102	2019-05-01	f	\N
\.


--
-- Data for Name: conversations; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.conversations (id) FROM stdin;
\.


--
-- Data for Name: dribbble; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.dribbble (id, user_id, date_pulled, feed_item_id) FROM stdin;
\.


--
-- Data for Name: feed_items; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.feed_items (id, user_id, date_created, title, content, likes, location, direct_link) FROM stdin;
\.


--
-- Data for Name: feedback; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.feedback (id, user_id, issue_type, issue_content) FROM stdin;
\.


--
-- Data for Name: github; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.github (id, user_id, feed_item_id, date_created) FROM stdin;
\.


--
-- Data for Name: linkedin; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.linkedin (id, user_id, feed_item_id, date_pulled) FROM stdin;
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.messages (id, user_id, conversation_id, content, date_created) FROM stdin;
\.


--
-- Data for Name: portfolio; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.portfolio (id, user_id, title, description, type, custom_link, api_link, thumbnail) FROM stdin;
\.


--
-- Data for Name: tags; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.tags (id, type, name) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: hired; Owner: -
--

COPY hired.users (id, first_name, last_name, campus, mentor, location, password, role, "current-job", avatar, date_created) FROM stdin;
\.


--
-- Data for Name: pgmigrations; Type: TABLE DATA; Schema: spaceX; Owner: -
--

COPY "spaceX".pgmigrations (id, name, run_on) FROM stdin;
\.


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: spaceexplorers; Owner: -
--

COPY spaceexplorers.bookings (booking_id, booking_flight_number, booking_rocket_id, booking_rocket_type, booking_mission_name, booking_mission_patch, booking_launch_year, booking_launch_date_local, booking_launch_site_name_long, booking_launch_is_booked, booking_launch_user_id, booking_date) FROM stdin;
1	1	falcon9	\N	FalconSat	https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png	2006	2006-03-25T10:30:00+12:00	Cape Canaveral Air Force Station Space Launch Complex 40	f	1	2019-04-14
24	2	\N	\N	\N	\N	\N	\N	\N	\N	3	2019-05-06
25	1	\N	\N	\N	\N	\N	\N	\N	\N	3	2019-05-06
26	3	\N	\N	\N	\N	\N	\N	\N	\N	3	2019-05-07
\.


--
-- Data for Name: pgmigrations; Type: TABLE DATA; Schema: spaceexplorers; Owner: -
--

COPY spaceexplorers.pgmigrations (id, name, run_on) FROM stdin;
1	1550779717609_full-db-migration	2019-05-01 22:42:39.437425
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: spaceexplorers; Owner: -
--

COPY spaceexplorers.users (user_id, user_fullname, user_username, user_email, user_password, user_date_joined) FROM stdin;
1	Simon Stern	simistern	simon@simon.stern		2017-08-15
2	Akshay IronA	IronA	akshay@akshay.com		2019-03-02
3	test	test	test@test.com	$2b$12$mVaQfPonXc/tkhm2WKrKO.AeJFk7MYOAPDDg5FLv//O4pC93vFUhy	2019-05-01
5	test2	test2	test2@test2.com	$2b$12$Yts0oSytg4jmg9Q3qh8TvOb3UwVNMSH6WVKNkyIZX3EvmUf.NVPbS	2019-05-02
\.


--
-- Name: item_ratings_item_rating_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.item_ratings_item_rating_id_seq', 1, true);


--
-- Name: items_item_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.items_item_id_seq', 3, true);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.pgmigrations_id_seq', 1, true);


--
-- Name: transactions_transaction_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.transactions_transaction_id_seq', 5, true);


--
-- Name: user_ratings_user_rating_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.user_ratings_user_rating_id_seq', 1, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: bazaar; Owner: -
--

SELECT pg_catalog.setval('bazaar.users_user_id_seq', 3, true);


--
-- Name: conversations_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.conversations_id_seq', 1, false);


--
-- Name: dribbble_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.dribbble_id_seq', 1, false);


--
-- Name: feed_items_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.feed_items_id_seq', 1, false);


--
-- Name: feedback_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.feedback_id_seq', 1, false);


--
-- Name: github_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.github_id_seq', 1, false);


--
-- Name: linkedin_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.linkedin_id_seq', 1, false);


--
-- Name: messages_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.messages_id_seq', 1, false);


--
-- Name: portfolio_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.portfolio_id_seq', 1, false);


--
-- Name: tags_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.tags_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: hired; Owner: -
--

SELECT pg_catalog.setval('hired.users_id_seq', 1, false);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE SET; Schema: spaceX; Owner: -
--

SELECT pg_catalog.setval('"spaceX".pgmigrations_id_seq', 1, false);


--
-- Name: bookings_booking_id_seq; Type: SEQUENCE SET; Schema: spaceexplorers; Owner: -
--

SELECT pg_catalog.setval('spaceexplorers.bookings_booking_id_seq', 26, true);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE SET; Schema: spaceexplorers; Owner: -
--

SELECT pg_catalog.setval('spaceexplorers.pgmigrations_id_seq', 1, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: spaceexplorers; Owner: -
--

SELECT pg_catalog.setval('spaceexplorers.users_user_id_seq', 5, true);


--
-- Name: item_ratings item_ratings_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.item_ratings
    ADD CONSTRAINT item_ratings_pkey PRIMARY KEY (item_rating_id);


--
-- Name: items items_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.items
    ADD CONSTRAINT items_pkey PRIMARY KEY (item_id);


--
-- Name: pgmigrations pgmigrations_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.pgmigrations
    ADD CONSTRAINT pgmigrations_pkey PRIMARY KEY (id);


--
-- Name: transactions transactions_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.transactions
    ADD CONSTRAINT transactions_pkey PRIMARY KEY (transaction_id);


--
-- Name: user_ratings user_ratings_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.user_ratings
    ADD CONSTRAINT user_ratings_pkey PRIMARY KEY (user_rating_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_user_email_key; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);


--
-- Name: users users_user_username_key; Type: CONSTRAINT; Schema: bazaar; Owner: -
--

ALTER TABLE ONLY bazaar.users
    ADD CONSTRAINT users_user_username_key UNIQUE (user_username);


--
-- Name: conversations conversations_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.conversations
    ADD CONSTRAINT conversations_pkey PRIMARY KEY (id);


--
-- Name: dribbble dribbble_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.dribbble
    ADD CONSTRAINT dribbble_pkey PRIMARY KEY (id);


--
-- Name: feed_items feed_items_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.feed_items
    ADD CONSTRAINT feed_items_pkey PRIMARY KEY (id);


--
-- Name: feedback feedback_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.feedback
    ADD CONSTRAINT feedback_pkey PRIMARY KEY (id);


--
-- Name: github github_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.github
    ADD CONSTRAINT github_pkey PRIMARY KEY (id);


--
-- Name: linkedin linkedin_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.linkedin
    ADD CONSTRAINT linkedin_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: portfolio portfolio_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.portfolio
    ADD CONSTRAINT portfolio_pkey PRIMARY KEY (id);


--
-- Name: tags tags_pkey; Type: CONSTRAINT; Schema: hired; Owner: -
--

ALTER TABLE ONLY hired.tags
    ADD CONSTRAINT tags_pkey PRIMARY KEY (id);


--
-- Name: pgmigrations pgmigrations_pkey; Type: CONSTRAINT; Schema: spaceX; Owner: -
--

ALTER TABLE ONLY "spaceX".pgmigrations
    ADD CONSTRAINT pgmigrations_pkey PRIMARY KEY (id);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (booking_id);


--
-- Name: pgmigrations pgmigrations_pkey; Type: CONSTRAINT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.pgmigrations
    ADD CONSTRAINT pgmigrations_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: users users_user_email_key; Type: CONSTRAINT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);


--
-- Name: users users_user_username_key; Type: CONSTRAINT; Schema: spaceexplorers; Owner: -
--

ALTER TABLE ONLY spaceexplorers.users
    ADD CONSTRAINT users_user_username_key UNIQUE (user_username);


--
-- PostgreSQL database dump complete
--

