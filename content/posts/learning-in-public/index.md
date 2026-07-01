---
title: "Learning in public"
date: 2026-07-01
summary: I'm looking for work. In this post, I write about career progression, upskilling and learning in public.
resources:
- name: header
  src: img/header.jpg
---

{{< first-letter >}}
I started my career in software development in the world of medical devices.
From a piano teacher who wanted to change careers to have a positive impact in
the world, I couldn't have gotten luckier. Working in a startup, especially a
medical device startup, I ended up doing a lot more than my title described. On
top of learning about software development, I also got to learn about quality
management systems, non-conformances, CAPAs, audits, data privacy, information
security management, etc. In terms of software development though, I feel a bit
stunted, and I'm ready for a new challenge.
{{< /first-letter >}}

As I've been applying to jobs, I've noticed a big gap between my experience on
paper, and my experience on the tools. I realised that in the world of Python
developers, there are: AI developers who have PhDs in machine learning,
scientific programmers with at least a master in biochemical engineering (or
some other "real" engineering), or back-end programmers with at least five years
of experience. None of these describe me, so I need to get closer to one of
those descriptions if I want a job!

I used to just think of myself as a software developer, but what I've been
learning while looking at jobs is that the position I held was unlike anything
else in the market. In hindsight, thinking there would be a perfect mapping is
naïve. Anyhow, more tertiary education is out of the question at the
moment, therefore, I need to aim towards back-end development.

In my first and only interview so far, I was tasked with designing an audit log
system. It was more complicated than I had originally anticipated (partially
from me overcomplicating the design) and the discussion with the interviewers
highlighted some clear gaps in my knowledge and practice.

I'm a big fan of the idea of learning in public but I've always found it
difficult to do. What is the point of me recycling knowledge that already exists
in a better form? I'm not adding anything to the conversation. What I can
contribute is my experience and my recommendations. In an age where AI has
become a thinking and learning companion, I think it's necessary to get back to
real human recommendations from people we can identify with.

Below is a list of resources I found useful for learning. I hope you get some
use out of them too.

[Roadmap](https://roadmap.sh/backend): This was a useful starting point to figure out what conceptual
knowledge gaps I had. I'm pretty sure this is AI generated, but it's a good
enough start.

When I realised that I didn't know as much about PostgreSQL as I originally
thought, I went deep on SQL, database design, and DBMS internals.

[This course](https://cs50.harvard.edu/sql/) is a great little primer on SQL with some fun exercises. I
had never actually studied SQL and only gathered information here and there so
it was nice to have it all in one place where I could also practice. Note: I
haven't finished the entire course yet.

SQLite has [great documentation](https://sqlite.org/arch.html) about its architecture and how it differs from
PostgreSQL. There is also [this book](https://www.interdb.jp/pg/) about the internals of PostgreSQL. I'm not
super interested in understanding the deep inner-workings of these DBMS but
having an understanding of pages, how indexes work, or how queries are computed
is useful knowledge to help make sense of some of the prescriptions you will
hear for designing and optimising data storage and querying.

In terms of query optimisation and indexing, there is [this website](https://use-the-index-luke.com/). The default
indexing strategy is a B-tree (balanced tree), the theory of which you can learn
in [Knuth's TAOCP Vol.3](https://www-cs-faculty.stanford.edu/~knuth/taocp.html), but for other indexing strategies, there is a short and
informative video by HelloInterview [here](https://www.youtube.com/watch?v=BHCSL_ZifI0). Sharding and partitioning are also concepts
to quickly look into, but otherwise the basics of query optimisation just seem
to be common sense (e.g., only select what you require).

I also learnt about different communication protocols; turns out HTTP is not the
be-all and end-all of application layer communication protocols! Two protocols I didn't know about
before were [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) (which enable two-way communication between server and
client) and [gRPC](https://www.youtube.com/watch?v=hVrwuMnCtok) (which provides a standardised format for calling functions
from other microservices).

Theoretical knowledge will unfortunately not be enough though. I need to show
that I can apply the knowledge and use the technologies. This is the part that
I'm currently struggling with. Systems require things like Kafka, Redis, or
Kubernetes because they have a certain scale. Companies need CI/CD pipelines
because they have dozens of developers working on a project and need to deploy
quickly. None of these constraints are present for personal projects, so I'm
struggling coming up with ideas of projects that are serious enough to warrant
these technologies but no so big that I spend the next three months working on
them. I've considered contributing to open source (something I've wanted to do
for a while) but I'm finding it difficult to find projects where I will be able
to get experience in these technologies.

If anyone has any corrections for my noob brain, suggestions for how to
proceed, or is in the same boat and would like to bounce ideas, leave me a
shout at my full name (url of this website) [at] gmail [dot] com. In the
meantime I will keep learning and applying, and check back in when I have more
recommendations.

## Header Image

*Boats at Berck-sur-Mer*, Édouard Manet ([link](https://www.rawpixel.com/image/2909632))
