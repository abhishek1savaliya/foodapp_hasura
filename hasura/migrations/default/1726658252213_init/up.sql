SET check_function_bodies = false;

/* Table 'friend' */
CREATE TABLE friend (
    id serial NOT NULL,
    "name" text NOT NULL,
    PRIMARY KEY(id)
);

/* Table 'pizza' */
CREATE TABLE pizza (
    id serial NOT NULL,
    title text NOT NULL,  -- changed integer to text if this is meant to store names, otherwise keep integer
    PRIMARY KEY(id)
);

/* Table 'pizza_topping' */
CREATE TABLE pizza_topping (
    id serial NOT NULL,
    title text NOT NULL,
    emoji text NOT NULL,
    available boolean NOT NULL DEFAULT TRUE,
    PRIMARY KEY(id)
);

/* Table 'pizza_topping_pizza' */
CREATE TABLE pizza_topping_pizza (
    id serial NOT NULL,
    pizza_id integer NOT NULL,
    pizza_topping_id integer NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (pizza_id) REFERENCES pizza(id) ON DELETE CASCADE,
    FOREIGN KEY (pizza_topping_id) REFERENCES pizza_topping(id) ON DELETE CASCADE
);

/* Table 'pizza_order' */
CREATE TABLE pizza_order (
    id serial NOT NULL,
    friend_id integer NOT NULL,
    pizza_id integer NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (friend_id) REFERENCES friend(id) ON DELETE CASCADE,
    FOREIGN KEY (pizza_id) REFERENCES pizza(id) ON DELETE CASCADE
);
