# Branches

* `master` - finished code with Recoil integration
* `original` - original imlementation using "prop drilling"

# Setup

Use `npm start` to start the development server on port `3000`.

# Description

The goal of this project was to get to know more about the `recoil` library as the state management.

It was created using [this](https://www.youtube.com/watch?v=_ISAA_Jt9kI&ab_channel=ReactEurope), [this](https://www.youtube.com/watch?v=wHe6-2-ZX6Y&ab_channel=LeighHallidayLeighHalliday) and [this](https://youtu.be/JvWukLAdS_8).

# Status

-

# Stack

- `CRA`: as the bootstrap.

- `recoil`: as the state management library.

# Notes

- every component that is subscribed by an atom, will suffer from re-renders.

- `useRecoilValue`: recommended hook to use when a component intends to read state without writing to it. [Read](https://recoiljs.org/docs/api-reference/core/useRecoilValue/).

- `useRecoilState`: Similar to the `useState()`. It returns a tuple of the current value of the state and a setter function. [Read](https://recoiljs.org/docs/api-reference/core/useRecoilState/).

# How it works

- creating atoms for specific pieces of state & sharing for specific nodes

- it uses default react local state under the hood

# Why should I use

- if you are running with issues where the relationships between their components don't correspond to the single hierarchy

- since react is based on nested components (Self contained)

- where there are no nesting components and you need still keep relationships with the data (show one data in the left according to the ones at the right)

# Benefits

- simpler than mobx & redux

- use default react implementation way of coding with some minor tweaks (different from mobx)

# Difference from Context

**context**

- allows: consumer can consumes a value provided by the provider and not only by others (if its not wrapping it) (context has 1 value and consumer can consume that value per provider)

**recoil**

- allows: provider that can provide any value where each can have its own consumers (and everyone else its just built on that)

# Concepts

**Atoms**

- Atoms contain the source of truth for our application state

- An atom represents a piece of state.

- Atoms can be read from and written to from any component.

- Components that read the value of an atom are implicitly subscribed to that atom, so any atom updates will result in a re-render of all components subscribed to that atom.

**Selector**

- A **selector** represents a piece of **derived state**.

- Derived state is a **transformation** of state.

- You can think of derived state as the output of passing state to a pure function that modifies the given state in some way.

**Derived Data**

- powerful concept because it lets us build dynamic data that depends on other data.

