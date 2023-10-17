(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{337:function(s,e,v){"use strict";v.r(e);var a=v(4),_=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),e("h3",{attrs:{id:"你觉得什么是redis呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你觉得什么是redis呢"}},[s._v("#")]),s._v(" 你觉得什么是Redis呢")]),s._v(" "),e("p",[s._v("Redis是一种高性能的基于键值(key-value)对的NoSQL数据库。\n与其它的NoSQL数据库相比，比如说Memcached, Redis的优势在于：")]),s._v(" "),e("ul",[e("li",[s._v("Redis 支持的数据类型更丰富，Redis中的value支持string（字符串）、hash（哈希）、 list（列表）、set（集合）、zset（有序集合）、Bitmaps（位图）、 HyperLogLog、GEO（地理信息定位）等多种数据结构，因此 Redis可以满足很多的应用场景。")]),s._v(" "),e("li",[s._v("Redis 支持数据的持久化，Redis可以将内存的数据利用快照(RDB)和日志(AOF)的形式保存到硬盘上，这样在发生类似断电或者机器故障的时候，内存中的数据不会“丢失”。")]),s._v(" "),e("li",[s._v("Redis 原生支持集群模式，具有高可用性，可扩展性。")]),s._v(" "),e("li",[s._v("Redis 支持发布订阅模型、Lua 脚本、事务等功能。Redis 事务其实就是保证所有放在队列中的命令是按顺序执行的，不会被客户端传入的其它指令所干扰；此外还可以监视键的变化，键被修改事务就不能执行，一定程度保证了一致性；所以事务是保证了隔离性和一致性，不能保证原子性和持久性。我们可以用lua脚本实现自定义的业务逻辑。")])]),s._v(" "),e("h3",{attrs:{id:"redis的应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的应用场景"}},[s._v("#")]),s._v(" Redis的应用场景")]),s._v(" "),e("ul",[e("li",[s._v("String\n"),e("ul",[e("li",[s._v("缓存对象")]),s._v(" "),e("li",[s._v("常规计数")]),s._v(" "),e("li",[s._v("分布式锁")]),s._v(" "),e("li",[s._v("共享Session信息")])])]),s._v(" "),e("li",[s._v("List\n"),e("ul",[e("li",[s._v("消息队列")])])]),s._v(" "),e("li",[s._v("Hash\n"),e("ul",[e("li",[s._v("缓存对象")]),s._v(" "),e("li",[s._v("购物车")])])]),s._v(" "),e("li",[s._v("Set\n"),e("ul",[e("li",[s._v("点赞")]),s._v(" "),e("li",[s._v("公共关注")]),s._v(" "),e("li",[s._v("抽奖活动")])])]),s._v(" "),e("li",[s._v("Zset\n"),e("ul",[e("li",[s._v("排行榜")])])]),s._v(" "),e("li",[s._v("BitMap\n"),e("ul",[e("li",[s._v("签到")]),s._v(" "),e("li",[s._v("判断用户登陆")])])]),s._v(" "),e("li",[s._v("HyperLogLog\n"),e("ul",[e("li",[s._v("百万级网页UV计数")])])]),s._v(" "),e("li",[s._v("GEO\n"),e("ul",[e("li",[s._v("滴滴叫车(经纬度)")])])]),s._v(" "),e("li",[s._v("Stream\n"),e("ul",[e("li",[s._v("消息队列")])])])]),s._v(" "),e("h3",{attrs:{id:"redis为什么快啊"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis为什么快啊"}},[s._v("#")]),s._v(" Redis为什么快啊")]),s._v(" "),e("ul",[e("li",[s._v("SDS的优势：\nRedis中的简单动态字符串（SDS）相较于C语言中的字符串有以下几个优势：")])]),s._v(" "),e("ol",[e("li",[e("p",[e("strong",[s._v("二进制安全")]),s._v("：C语言中的字符串以空字符（null terminator）作为字符串的结束标志，这意味着C语言中的字符串不能包含空字符。而SDS使用显式的长度字段来表示字符串的长度，因此它可以存储任意类型的数据，包括空字符。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("避免缓冲区溢出")]),s._v("：C语言中的字符串操作（如strcat和strcpy）可能会导致缓冲区溢出，因为它们不检查目标缓冲区的大小。而SDS在执行字符串操作时会检查缓冲区的大小，并在需要时自动扩展缓冲区，从而避免了缓冲区溢出的问题。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("减少修改字符串时带来的内存分配次数")]),s._v("：当需要修改C语言中的字符串时，通常需要重新分配内存来存储新的字符串。而SDS使用了空间预分配和惰性空间释放两种策略来减少内存分配次数。当SDS需要扩展时，它会预分配多余的空间；当SDS需要缩短时，它不会立即释放多余的空间，而是等待将来再次使用。")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("获取字符串长度的时间复杂度为O(1)")]),s._v("：由于C语言中的字符串以空字符作为结束标志，因此获取字符串长度需要遍历整个字符串，时间复杂度为O(n)。而SDS使用显式的长度字段来表示字符串长度，因此获取字符串长度的时间复杂度为O(1)。")])])]),s._v(" "),e("p",[s._v("然而，SDS也有一些缺陷。由于SDS使用了空间预分配和惰性空间释放两种策略来减少内存分配次数，因此它可能会占用比实际需要更多的内存空间。此外，由于SDS不是C语言中的标准类型，因此不能直接使用C语言中的标准库函数来操作SDS。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个C语言中的字符串"),e("code",[s._v('char *s = "hello"')]),s._v("和一个Redis中的SDS"),e("code",[s._v('sdshdr *sh = sdsnew("hello")')]),s._v("。我们可以使用"),e("code",[s._v("strlen(s)")]),s._v("来获取C语言中字符串的长度，但这需要遍历整个字符串。而对于SDS，我们可以使用"),e("code",[s._v("sh->len")]),s._v("来直接获取字符串长度，时间复杂度为O(1)。但是，如果我们想要使用"),e("code",[s._v("printf")]),s._v("函数来打印SDS中的字符串，则需要先使用"),e("code",[s._v("sdsdup(sh)")]),s._v("函数将SDS转换为C语言中的字符串。")]),s._v(" "),e("ul",[e("li",[s._v("压缩列表的优势：\n压缩列表（ziplist）是Redis中一种用于节省内存的数据结构，它被用作列表键和哈希键的底层实现之一。压缩列表是一种紧凑的、顺序的、内存连续的数据结构，它将多个元素存储在一个单独的内存块中。")])]),s._v(" "),e("p",[s._v("压缩列表的优势在于它能够有效地存储少量小型元素。当列表键或哈希键中只包含少量小型元素时，使用压缩列表作为底层实现可以节省内存空间。此外，由于压缩列表是内存连续的，因此它能够提供快速的顺序访问性能。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个哈希键，它包含两个字段，分别为"),e("code",[s._v('"name"')]),s._v("和"),e("code",[s._v('"age"')]),s._v("。如果我们使用普通的哈希表来存储这个哈希键，则需要为每个字段分配一个单独的内存块，并且还需要额外的空间来存储指向这些内存块的指针。但是，如果我们使用压缩列表来存储这个哈希键，则可以将所有字段连续地存储在一个单独的内存块中，从而节省了内存空间。")]),s._v(" "),e("p",[s._v("需要注意的是，压缩列表并不适用于所有情况。当列表键或哈希键中包含大量元素或大型元素时，使用压缩列表作为底层实现可能会降低性能。因此，Redis会根据实际情况选择是否使用压缩列表作为底层实现。")]),s._v(" "),e("ul",[e("li",[s._v("哈希表\n哈希表（hash table）是Redis中一种重要的数据结构，它被用作多种键类型的底层实现，包括哈希键、集合键和有序集合键。哈希表是一种关联数组数据结构，它能够通过键来快速访问值。")])]),s._v(" "),e("p",[s._v("Redis中的哈希表实现具有以下几个优势：")]),s._v(" "),e("p",[s._v("快速查找：哈希表能够在平均O(1)的时间复杂度内查找、插入和删除元素。这意味着无论哈希表中包含多少元素，查找元素的速度都非常快。")]),s._v(" "),e("p",[s._v("渐进式rehashing：当哈希表需要扩容或缩容时，Redis使用了一种渐进式rehashing算法来避免一次性执行大量的数据迁移操作。这种算法可以将rehashing操作分散到多次查询和更新操作中，从而减少对性能的影响。")]),s._v(" "),e("p",[s._v("支持多种键类型：Redis中的哈希表不仅用于实现哈希键，还用于实现集合键和有序集合键。这意味着开发人员可以使用相同的底层数据结构来实现多种不同的功能。")]),s._v(" "),e("ul",[e("li",[s._v("跳表\n跳表（skiplist）是Redis中一种用于实现有序集合键的数据结构。跳表是一种基于概率的数据结构，它通过在每个元素上维护多个指向其他元素的指针来实现快速查找。")])]),s._v(" "),e("p",[s._v("跳表的优势在于它能够在平均O(log n)的时间复杂度内执行查找、插入和删除操作，同时还能够支持范围查询和有序遍历。这意味着跳表能够快速地执行各种复杂的操作，而无需对数据进行排序。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个有序集合键，它包含三个元素，分别为"),e("code",[s._v('"apple"')]),s._v("、"),e("code",[s._v('"banana"')]),s._v("和"),e("code",[s._v('"cherry"')]),s._v("。我们可以使用"),e("code",[s._v("ZADD")]),s._v("命令将这三个元素添加到有序集合键中，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('ZADD myzset 1 "apple"\nZADD myzset 2 "banana"\nZADD myzset 3 "cherry"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后我们可以使用"),e("code",[s._v("ZRANGEBYSCORE")]),s._v("命令来查询分数在给定范围内的元素：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ZRANGEBYSCORE myzset 1 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由于Redis中的跳表能够在平均O(log n)的时间复杂度内执行范围查询，因此无论有序集合键中包含多少元素，查询元素的速度都非常快。")]),s._v(" "),e("ul",[e("li",[s._v("QuickList\nQuicklist是Redis中一种用于实现列表键的数据结构。它是一种混合数据结构，结合了双向链表和压缩列表两种数据结构的优点。Quicklist由多个压缩列表组成，这些压缩列表通过双向链表连接在一起。")])]),s._v(" "),e("p",[s._v("Quicklist的优势在于它能够有效地存储大量小型元素，同时还能够快速地执行列表键的各种操作，如插入、删除和索引等。当列表键中只包含少量小型元素时，使用Quicklist作为底层实现可以节省内存空间。此外，由于Quicklist使用了双向链表来连接多个压缩列表，因此它能够快速地在列表的两端插入和删除元素。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个列表键，它包含三个元素，分别为"),e("code",[s._v('"apple"')]),s._v("、"),e("code",[s._v('"banana"')]),s._v("和"),e("code",[s._v('"cherry"')]),s._v("。我们可以使用"),e("code",[s._v("LPUSH")]),s._v("命令将这三个元素添加到列表键中，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('LPUSH mylist "apple"\nLPUSH mylist "banana"\nLPUSH mylist "cherry"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("然后我们可以使用"),e("code",[s._v("LINDEX")]),s._v("命令来获取列表中指定位置的元素：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("LINDEX mylist 0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("由于Redis中的Quicklist能够快速地执行各种列表操作，因此无论列表键中包含多少元素，获取元素的速度都非常快。")]),s._v(" "),e("ul",[e("li",[s._v("Listpack\nListpack是Redis中一种用于实现哈希键和流（stream）的数据结构。它是一种紧凑的、顺序的、内存连续的数据结构，类似于压缩列表，但具有更好的空间效率和更快的随机访问性能。")])]),s._v(" "),e("p",[s._v("Listpack的优势在于它能够有效地存储少量小型元素。当哈希键或流中只包含少量小型元素时，使用Listpack作为底层实现可以节省内存空间。此外，由于Listpack是内存连续的，因此它能够提供快速的顺序访问和随机访问性能。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个哈希键，它包含两个字段，分别为"),e("code",[s._v('"name"')]),s._v("和"),e("code",[s._v('"age"')]),s._v("。我们可以使用"),e("code",[s._v("HSET")]),s._v("命令将这两个字段存储到哈希键中，如下所示：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('HSET myhash name "Alice"\nHSET myhash age 30\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("然后我们可以使用"),e("code",[s._v("HGET")]),s._v("命令来快速获取这两个字段的值：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("HGET myhash name\nHGET myhash age\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("由于Redis中的Listpack能够快速地执行随机访问操作，因此无论哈希键中包含多少字段，获取字段值的速度都非常快。")]),s._v(" "),e("h3",{attrs:{id:"i-o多路复用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#i-o多路复用"}},[s._v("#")]),s._v(" I/O多路复用")]),s._v(" "),e("h3",{attrs:{id:"为什么redis早期使用的单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么redis早期使用的单线程"}},[s._v("#")]),s._v(" 为什么Redis早期使用的单线程")]),s._v(" "),e("h3",{attrs:{id:"为什么redis6-0之后使用了多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么redis6-0之后使用了多线程"}},[s._v("#")]),s._v(" 为什么Redis6.0之后使用了多线程")]),s._v(" "),e("h2",{attrs:{id:"持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持久化"}},[s._v("#")]),s._v(" 持久化")]),s._v(" "),e("h3",{attrs:{id:"redis的持久化方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的持久化方式"}},[s._v("#")]),s._v(" Redis的持久化方式")]),s._v(" "),e("h3",{attrs:{id:"aof为什么要进行重写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof为什么要进行重写"}},[s._v("#")]),s._v(" AOF为什么要进行重写")]),s._v(" "),e("p",[s._v("AOF（Append Only File）是Redis中一种用于持久化的方法，它通过将每个写命令追加到AOF文件中来实现数据持久化。随着写命令的不断执行，AOF文件会变得越来越大，其中可能包含许多冗余和过时的命令。为了减小AOF文件的大小并提高数据恢复的速度，Redis支持对AOF文件进行重写。")]),s._v(" "),e("p",[s._v("AOF重写的目的是通过重新生成一个新的AOF文件来压缩原有的AOF文件。新的AOF文件中只包含当前数据库状态所需的最少命令，不包含冗余和过时的命令。这样，新的AOF文件就能够更快地恢复数据，同时占用更少的磁盘空间。")]),s._v(" "),e("p",[s._v("举个例子，假设我们有一个AOF文件，其中包含以下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SET x 1\nINCR x\nDEL x\nSET x 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("在这个例子中，前三个命令都是冗余的，因为它们对当前数据库状态没有影响。通过对AOF文件进行重写，我们可以生成一个新的AOF文件，其中只包含最后一个命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SET x 2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("新的AOF文件能够更快地恢复数据，并且占用更少的磁盘空间。")]),s._v(" "),e("p",[s._v("总之，AOF重写是一种用于压缩AOF文件并提高数据恢复速度的方法。它通过重新生成一个新的AOF文件来实现这一目标。")]),s._v(" "),e("h3",{attrs:{id:"aof的三种写回策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aof的三种写回策略"}},[s._v("#")]),s._v(" AOF的三种写回策略")]),s._v(" "),e("p",[s._v("AOF（Append Only File）是Redis中一种用于持久化的方法，它通过将每个写命令追加到AOF文件中来实现数据持久化。Redis支持三种不同的AOF写回策略，分别为"),e("code",[s._v("always")]),s._v("、"),e("code",[s._v("everysec")]),s._v("和"),e("code",[s._v("no")]),s._v("。")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("always")]),s._v("策略：每当Redis执行一个写命令时，它都会立即将该命令追加到AOF文件中，并调用"),e("code",[s._v("fsync")]),s._v("函数将AOF文件的内容强制写入磁盘。这种策略能够提供最高的数据安全性，但会严重影响Redis的性能。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("everysec")]),s._v("策略：每当Redis执行一个写命令时，它都会将该命令追加到AOF文件中，但不会立即调用"),e("code",[s._v("fsync")]),s._v("函数。相反，Redis会每秒钟调用一次"),e("code",[s._v("fsync")]),s._v("函数，将AOF文件的内容强制写入磁盘。这种策略在数据安全性和性能之间取得了平衡，是默认的AOF写回策略。")])]),s._v(" "),e("li",[e("p",[e("code",[s._v("no")]),s._v("策略：每当Redis执行一个写命令时，它都会将该命令追加到AOF文件中，但不会调用"),e("code",[s._v("fsync")]),s._v("函数。相反，Redis依赖于操作系统来决定何时将AOF文件的内容写入磁盘。这种策略能够提供最高的性能，但数据安全性较低。")])])]),s._v(" "),e("p",[s._v("总之，Redis支持三种不同的AOF写回策略，分别为"),e("code",[s._v("always")]),s._v("、"),e("code",[s._v("everysec")]),s._v("和"),e("code",[s._v("no")]),s._v("。这三种策略在数据安全性和性能之间取得了不同的平衡。")]),s._v(" "),e("h3",{attrs:{id:"redis-4-0的混合持久化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-4-0的混合持久化"}},[s._v("#")]),s._v(" Redis 4.0的混合持久化")]),s._v(" "),e("p",[s._v("混合持久化是在 Redis 4.0 版本中引入的一种新的持久化方式，它结合了 RDB 和 AOF 的优点。混合持久化只发生在 AOF 重写过程中。当开启混合持久化时，"),e("code",[s._v("fork")]),s._v(" 出的子进程先将共享的内存副本全量地以 RDB 方式写入 AOF 文件，然后再将重写缓冲区的增量命令以 AOF 方式写入到文件。写入完成后通知主进程更新统计信息，并将新的含有 RDB 格式和 AOF 格式的 AOF 文件替换旧的 AOF 文件¹。")]),s._v(" "),e("p",[s._v("混合持久化的优点是可以结合 RDB 和 AOF 的优点，快速加载同时避免丢失过多的数据。由于绝大部分都是 RDB 格式，加载速度快，同时结合 AOF，增量的数据以 AOF 方式保存了，数据更少地丢失²。")]),s._v(" "),e("p",[s._v("例如，在使用混合持久化时，如果 Redis 服务器崩溃，那么在恢复数据时，Redis 会先加载 AOF 文件中的 RDB 格式数据（全量数据），然后再加载 AOF 文件中剩余的 AOF 格式数据（增量数据）。这样就可以快速地恢复大部分数据，并且只会丢失很少的数据¹。")]),s._v(" "),e("h2",{attrs:{id:"高可用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高可用"}},[s._v("#")]),s._v(" 高可用")]),s._v(" "),e("h3",{attrs:{id:"主从复制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[s._v("#")]),s._v(" 主从复制")]),s._v(" "),e("p",[s._v("Redis 主从复制是指将一台 Redis 服务器的数据复制到其他的 Redis 服务器。前者称为主节点 (master)，后者称为从节点 (slave)；数据的复制是单向的，只能由主节点到从节点。默认情况下，每台 Redis 服务器都是主节点，且一个主节点可以有多个从节点 (或没有从节点)，但一个从节点只能有一个主节点¹。")]),s._v(" "),e("p",[s._v("主从复制的作用主要包括：")]),s._v(" "),e("ul",[e("li",[s._v("数据冗余：主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。")]),s._v(" "),e("li",[s._v("故障恢复：当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复；实际上是一种服务的冗余。")]),s._v(" "),e("li",[s._v("负载均衡：在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务（即写 Redis 数据时应用连接主节点，读 Redis 数据时应用连接从节点），分担服务器负载；尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高 Redis 服务器的并发量。")]),s._v(" "),e("li",[s._v("高可用基石：主从复制还是哨兵和集群能够实施的基础，因此说主从复制是 Redis 高可用的基础¹。")])]),s._v(" "),e("p",[s._v("例如，在一个简单的主从复制架构中，你可以将一个 Redis 服务器设置为主节点，并将另一个 Redis 服务器设置为从节点。当你在主节点上执行写操作时，这些写操作会被自动同步到从节点上。这样，当主节点出现故障时，你可以快速地切换到从节点继续提供服务。")]),s._v(" "),e("h3",{attrs:{id:"主从数据同步的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从数据同步的方式"}},[s._v("#")]),s._v(" 主从数据同步的方式")]),s._v(" "),e("p",[s._v("主从数据同步有两种方式：全量复制和部分复制。")]),s._v(" "),e("p",[s._v("全量复制是指从节点将主节点的所有数据都复制一遍。当一个从节点第一次连接到主节点时，或者当从节点和主节点之间的网络连接中断一段时间后重新连接时，都会触发全量复制。在全量复制过程中，主节点会使用 "),e("code",[s._v("bgsave")]),s._v(" 命令在后台生成一个 RDB 文件，并将该文件发送给从节点。从节点接收到 RDB 文件后，会清空自己的数据库，然后载入 RDB 文件中的数据。这样，从节点就拥有了主节点当前的所有数据。")]),s._v(" "),e("p",[s._v("部分复制是指从节点只复制主节点上发生变化的数据。当一个从节点已经完成了全量复制，并且和主节点保持着网络连接时，主节点会将执行的写命令实时发送给从节点。从节点接收到写命令后，会立即执行这些命令，以保持和主节点的数据一致。")]),s._v(" "),e("p",[s._v("例如，在一个简单的主从复制架构中，当你在主节点上执行写操作时，这些写操作会被自动同步到从节点上。如果你在主节点上执行了 "),e("code",[s._v("SET key value")]),s._v(" 命令，那么主节点会将该命令发送给从节点，从节点接收到该命令后，也会执行 "),e("code",[s._v("SET key value")]),s._v(" 命令。这样，主从节点上的数据就保持了一致。")]),s._v(" "),e("h3",{attrs:{id:"主从复制的方式会出现哪些问题呢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主从复制的方式会出现哪些问题呢"}},[s._v("#")]),s._v(" 主从复制的方式会出现哪些问题呢")]),s._v(" "),e("p",[s._v("主从复制的方式可能会出现以下问题：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("数据延迟：由于主从复制是异步进行的，所以从节点的数据可能会落后于主节点。当你在主节点上执行写操作时，这些写操作不会立即同步到从节点上，而是需要一定的时间。这就意味着，在某些情况下，你在从节点上读取的数据可能不是最新的。")])]),s._v(" "),e("li",[e("p",[s._v("数据丢失：当主节点出现故障时，如果故障发生在数据同步到从节点之前，那么这些数据将会丢失。例如，在一个简单的主从复制架构中，如果你在主节点上执行了写操作，但在该写操作同步到从节点之前，主节点出现了故障，那么这些写操作将会丢失。")])]),s._v(" "),e("li",[e("p",[s._v("脑裂问题：脑裂（split-brain）是指在一个分布式系统中，由于网络分区或其他原因导致系统被分成两个或多个独立的部分，每个部分都认为自己是整个系统的一部分，并开始独立工作。在 Redis 主从复制架构中，如果主节点和从节点之间出现网络分区，那么从节点将无法与主节点通信。如果此时你将从节点升级为主节点，并开始接收写操作，那么当网络分区恢复后，整个系统将出现数据不一致的情况。")])])]),s._v(" "),e("h3",{attrs:{id:"redis中的哨兵机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis中的哨兵机制"}},[s._v("#")]),s._v(" Redis中的哨兵机制")]),s._v(" "),e("p",[s._v("Redis 哨兵（Sentinel）是一种分布式的监控系统，它用于监控 Redis 集群中的主节点和从节点的运行状态，并在主节点出现故障时自动进行故障转移。哨兵机制的引入是为了解决主从复制架构中的一些问题，提高 Redis 集群的可用性。")]),s._v(" "),e("p",[s._v("在一个简单的主从复制架构中，当主节点出现故障时，需要人工介入才能将从节点升级为主节点，并将客户端的连接切换到新的主节点上。这个过程不仅需要人工操作，而且可能会导致较长时间的服务中断。为了解决这个问题，Redis 引入了哨兵机制。")]),s._v(" "),e("p",[s._v("哨兵是一个独立的进程，它会定期检查 Redis 集群中的主节点和从节点的运行状态。当哨兵检测到主节点出现故障时，它会自动从从节点中选举出一个新的主节点，并将其他从节点的复制关系切换到新的主节点上。同时，哨兵还会通知客户端新的主节点的地址，以便客户端能够快速切换到新的主节点上。")]),s._v(" "),e("p",[s._v("例如，在一个包含一个主节点、两个从节点和三个哨兵的 Redis 集群中，当主节点出现故障时，三个哨兵会通过投票选举出一个领导者。领导者负责从两个从节点中选举出一个新的主节点，并将另一个从节点的复制关系切换到新的主节点上。同时，哨兵还会通知客户端新的主节点的地址，以便客户端能够快速切换到新的主节点上。")]),s._v(" "),e("h3",{attrs:{id:"raft算法领导选举过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#raft算法领导选举过程"}},[s._v("#")]),s._v(" Raft算法领导选举过程")]),s._v(" "),e("p",[s._v("Raft 算法是一种分布式一致性算法，它用于在分布式系统中选举出一个领导者（leader）。Raft 算法通过多轮投票来保证最终只有一个节点被选举为领导者。")]),s._v(" "),e("p",[s._v("在 Raft 算法中，每个节点都可以处于三种状态之一：跟随者（Follower）、候选人（Candidate）和领导者（Leader）。在正常情况下，集群中只有一个领导者，其他节点都是跟随者。")]),s._v(" "),e("p",[s._v("当一个跟随者在一段时间内没有收到领导者的心跳消息时，它会认为领导者已经失效，并将自己转换为候选人状态。候选人会向其他节点发送投票请求，请求其他节点投票给它。如果候选人获得了集群中大多数节点的投票，那么它就会成为新的领导者。")]),s._v(" "),e("p",[s._v("例如，在一个包含 5 个节点的集群中，当领导者失效时，每个跟随者都有可能成为候选人。假设节点 A 成为了候选人，并向其他节点发送了投票请求。如果节点 B、C 和 D 都投票给了节点 A，那么节点 A 就获得了集群中大多数节点的投票（4 票中的 3 票），它就会成为新的领导者。")]),s._v(" "),e("p",[s._v("Raft 算法通过这种方式来保证最终只有一个节点被选举为领导者。当然，Raft 算法还包含许多其他细节，如日志复制、安全性等，这里就不再赘述了。")]),s._v(" "),e("h3",{attrs:{id:"主节点发生故障之后-新的主节点如何挑选"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主节点发生故障之后-新的主节点如何挑选"}},[s._v("#")]),s._v(" 主节点发生故障之后，新的主节点如何挑选")]),s._v(" "),e("p",[s._v("在 Redis 中，当主节点发生故障时，新的主节点是由哨兵（Sentinel）系统自动选举出来的。")]),s._v(" "),e("p",[s._v("哨兵是一个分布式的监控系统，它会定期检查 Redis 集群中的主节点和从节点的运行状态。当哨兵检测到主节点出现故障时，它会启动故障转移（failover）流程。在故障转移流程中，哨兵会从从节点中选举出一个新的主节点。")]),s._v(" "),e("p",[s._v("哨兵在选举新的主节点时，会考虑多种因素，如从节点的复制偏移量、从节点与主节点之间的网络延迟等。哨兵会选择一个复制偏移量最大、与主节点之间网络延迟最小的从节点作为新的主节点。")]),s._v(" "),e("p",[s._v("例如，在一个包含一个主节点、两个从节点和三个哨兵的 Redis 集群中，当主节点出现故障时，三个哨兵会通过投票选举出一个领导者。领导者负责从两个从节点中选举出一个新的主节点，并将另一个从节点的复制关系切换到新的主节点上。同时，哨兵还会通知客户端新的主节点的地址，以便客户端能够快速切换到新的主节点上。")]),s._v(" "),e("h3",{attrs:{id:"redis集群是如何进行数据分区的"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis集群是如何进行数据分区的"}},[s._v("#")]),s._v(" Redis集群是如何进行数据分区的")]),s._v(" "),e("p",[s._v("Redis 集群通过哈希分区（hash partitioning）的方式来进行数据分区。在 Redis 集群中，所有的数据会被分成 16384 个哈希槽（hash slot）。每个键都会被映射到一个哈希槽中，具体的映射方式是通过计算键的 CRC16 校验和，然后对 16384 取模得到。")]),s._v(" "),e("p",[s._v("在 Redis 集群中，每个节点都负责一部分哈希槽。当你在集群中执行读写操作时，Redis 会根据键的哈希槽来确定应该将该操作发送到哪个节点上。例如，在一个包含三个节点的 Redis 集群中，你可以将 0 到 5460 号哈希槽分配给节点 A，将 5461 到 10922 号哈希槽分配给节点 B，将 10923 到 16383 号哈希槽分配给节点 C。当你执行 "),e("code",[s._v("SET key value")]),s._v(" 命令时，Redis 会计算 "),e("code",[s._v("key")]),s._v(" 的哈希槽，然后将该命令发送到负责该哈希槽的节点上。")]),s._v(" "),e("p",[s._v("通过这种方式，Redis 集群可以将数据分散到多个节点上，实现数据的水平扩展。当集群中的某个节点出现故障时，你还可以使用故障转移（failover）和重新分片（resharding）的方式来恢复集群的正常运行。")]),s._v(" "),e("h2",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[s._v("#")]),s._v(" 缓存")]),s._v(" "),e("h3",{attrs:{id:"缓存击穿、缓存穿透、缓存雪崩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿、缓存穿透、缓存雪崩"}},[s._v("#")]),s._v(" 缓存击穿、缓存穿透、缓存雪崩？")]),s._v(" "),e("p",[s._v("缓存击穿、缓存穿透和缓存雪崩都是缓存系统中常见的问题。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("缓存击穿：指一个存在于缓存中的热点数据，在缓存过期的一刻，同时有大量的请求涌入，这些请求都会落到数据库上，从而导致数据库短时间内承受巨大的压力。解决方法通常是对热点数据设置永不过期，或者在加锁更新。")])]),s._v(" "),e("li",[e("p",[s._v("缓存穿透：指查询一个数据库一定不存在的数据，由于缓存不命中且无法设置缓存，导致每次请求都要到数据库查询，造成数据库压力过大。解决方法通常是采用布隆过滤器（Bloom Filter）来判断数据是否存在，或者对不存在的数据也设置一个较短的过期时间。")])]),s._v(" "),e("li",[e("p",[s._v("缓存雪崩：指在某一个时间段内，缓存中大量的数据同时过期失效，导致大量的请求涌入数据库，造成数据库压力过大。解决方法通常是给缓存设置一个随机的过期时间，避免大量数据同时过期；或者采用热备份方案，在主缓存失效时启用备份缓存。")])])]),s._v(" "),e("h3",{attrs:{id:"缓存-与-数据库数据的一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存-与-数据库数据的一致性"}},[s._v("#")]),s._v(" 缓存 与 数据库数据的一致性")]),s._v(" "),e("p",[s._v("在使用缓存时，保证缓存与数据库数据的一致性是一个重要的问题。下面是一些常用的方法来保证缓存与数据库数据的一致性：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("缓存过期：给缓存设置一个过期时间，当缓存过期后，再次查询时会从数据库中获取最新的数据。这种方法简单易实现，但缺点是在缓存过期之前，缓存中的数据可能不是最新的。")])]),s._v(" "),e("li",[e("p",[s._v("写操作时更新缓存：在执行写操作时，同时更新数据库和缓存中的数据。这种方法可以保证缓存中的数据始终是最新的，但需要注意的是，更新缓存和更新数据库应该在同一个事务中进行，以避免数据不一致的情况。")])]),s._v(" "),e("li",[e("p",[s._v("延迟双删：在执行写操作时，先删除缓存中的数据，然后再更新数据库中的数据。等待一段时间后，再次删除缓存中的数据。这种方法可以有效地避免脏读的情况，但需要注意的是，等待的时间应该大于缓存的过期时间。")])])]),s._v(" "),e("p",[s._v("例如，在一个简单的电商系统中，当用户下单时，需要更新商品库存。为了保证缓存与数据库数据的一致性，你可以采用写操作时更新缓存的方法。具体来说，在用户下单时，你可以先从缓存中获取商品库存信息，并检查库存是否充足。如果库存充足，则在同一个事务中更新数据库和缓存中的商品库存信息，并提交订单。")]),s._v(" "),e("p",[s._v("通过这种方式，可以保证缓存与数据库数据始终保持一致。\n"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/408515044",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考这篇一致性分析文章"),e("OutboundLink")],1)]),s._v(" "),e("h3",{attrs:{id:"本地缓存-与-分布式缓存的数据一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地缓存-与-分布式缓存的数据一致性"}},[s._v("#")]),s._v(" 本地缓存 与 分布式缓存的数据一致性")]),s._v(" "),e("p",[s._v("在分布式系统中，保证本地缓存与分布式缓存的一致性是一个挑战。由于本地缓存和分布式缓存分别位于不同的节点上，因此需要采用一些特殊的方法来保证它们之间的一致性。")]),s._v(" "),e("p",[s._v("下面是一些常用的方法来保证本地缓存与分布式缓存的一致性：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("基于消息队列：在执行写操作时，将写操作发送到消息队列中。各个节点订阅消息队列，并在收到写操作时更新本地缓存和分布式缓存中的数据。这种方法可以保证最终一致性，但需要注意的是，消息队列可能会成为系统的瓶颈。")])]),s._v(" "),e("li",[e("p",[s._v("基于版本号：给每个数据维护一个版本号，在更新数据时同时更新版本号。各个节点在查询数据时，先从本地缓存中获取数据，并检查版本号是否与分布式缓存中的版本号一致。如果不一致，则从分布式缓存中获取最新的数据，并更新本地缓存。")])]),s._v(" "),e("li",[e("p",[s._v("基于时间戳：给每个数据维护一个时间戳，在更新数据时同时更新时间戳。各个节点在查询数据时，先从本地缓存中获取数据，并检查时间戳是否在一个可接受的范围内。如果不在可接受的范围内，则从分布式缓存中获取最新的数据，并更新本地缓存。")])])]),s._v(" "),e("p",[s._v("例如，在一个简单的电商系统中，当用户下单时，需要更新商品库存。为了保证本地缓存与分布式缓存的一致性，你可以采用基于版本号的方法。具体来说，在用户下单时，你可以先从本地缓存中获取商品库存信息，并检查版本号是否与分布式缓存中的版本号一致。如果不一致，则从分布式缓存中获取最新的商品库存信息，并更新本地缓存。然后再检查库存是否充足，并提交订单。")]),s._v(" "),e("p",[s._v("通过这种方式，你可以保证本地缓存与分布式缓存始终保持一致。")]),s._v(" "),e("h2",{attrs:{id:"redis运维"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis运维"}},[s._v("#")]),s._v(" Redis运维")]),s._v(" "),e("h3",{attrs:{id:"redis的过期数据回收策略有哪些"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis的过期数据回收策略有哪些"}},[s._v("#")]),s._v(" Redis的过期数据回收策略有哪些？")]),s._v(" "),e("p",[s._v("Redis 采用了多种策略来回收过期数据，主要包括定时删除、惰性删除和定期删除三种。")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("定时删除：在设置键的过期时间的同时，创建一个定时器，让定时器在键过期的时间到达时，立即执行对键的删除操作。这种策略可以保证过期数据被及时删除，但缺点是需要维护大量的定时器，会占用大量的 CPU 资源。")])]),s._v(" "),e("li",[e("p",[s._v("惰性删除：在获取键时，先检查键是否过期，如果过期则删除。这种策略不需要额外的 CPU 资源，但缺点是无法保证过期数据被及时删除。")])]),s._v(" "),e("li",[e("p",[s._v("定期删除：每隔一段时间，程序对数据库进行一次检查，随机删除一些过期的键。这种策略可以有效地减少过期数据对内存的占用，但缺点是无法保证过期数据被及时删除。")])])]),s._v(" "),e("p",[s._v("实际上，Redis 采用了惰性删除和定期删除两种策略相结合的方式来回收过期数据。当你获取一个键时，Redis 会先检查该键是否过期，如果过期则删除；同时，Redis 还会每隔一段时间对数据库进行一次检查，随机删除一些过期的键。")]),s._v(" "),e("h3",{attrs:{id:"内存淘汰策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内存淘汰策略"}},[s._v("#")]),s._v(" 内存淘汰策略")]),s._v(" "),e("p",[s._v("当 Redis 的内存使用量达到了 "),e("code",[s._v("maxmemory")]),s._v(" 限制时，Redis 会根据配置的内存淘汰策略来删除一些键，以释放内存空间。Redis 提供了多种内存淘汰策略，可以根据实际情况选择合适的策略。")]),s._v(" "),e("p",[s._v("下面是 Redis 支持的内存淘汰策略：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("volatile-lru")]),s._v("：从已设置过期时间的键中，使用 LRU 算法删除最近最少使用的键。")]),s._v(" "),e("li",[e("code",[s._v("allkeys-lru")]),s._v("：从所有键中，使用 LRU 算法删除最近最少使用的键。")]),s._v(" "),e("li",[e("code",[s._v("volatile-lfu")]),s._v("：从已设置过期时间的键中，使用 LFU 算法删除最近最不经常使用的键。")]),s._v(" "),e("li",[e("code",[s._v("allkeys-lfu")]),s._v("：从所有键中，使用 LFU 算法删除最近最不经常使用的键。")]),s._v(" "),e("li",[e("code",[s._v("volatile-random")]),s._v("：从已设置过期时间的键中，随机删除一个键。")]),s._v(" "),e("li",[e("code",[s._v("allkeys-random")]),s._v("：从所有键中，随机删除一个键。")]),s._v(" "),e("li",[e("code",[s._v("volatile-ttl")]),s._v("：从已设置过期时间的键中，删除剩余生存时间最短的键。")]),s._v(" "),e("li",[e("code",[s._v("noeviction")]),s._v("：不进行任何淘汰操作，直接返回错误。")])]),s._v(" "),e("p",[s._v("例如，在一个简单的缓存系统中，如果你希望保留热点数据，可以选择 "),e("code",[s._v("allkeys-lru")]),s._v(" 策略。这样，在内存使用量达到 "),e("code",[s._v("maxmemory")]),s._v(" 限制时，Redis 会从所有键中，使用 LRU 算法删除最近最少使用的键。")]),s._v(" "),e("p",[s._v("你可以通过修改配置文件或运行时执行 "),e("code",[s._v("config set maxmemory-policy <policy>")]),s._v(" 命令来设置内存淘汰策略。")]),s._v(" "),e("h3",{attrs:{id:"redis实现分布式锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis实现分布式锁"}},[s._v("#")]),s._v(" Redis实现分布式锁")]),s._v(" "),e("p",[s._v("Redisson.Redis 可以用来实现分布式锁，以保证在分布式环境下多个客户端对共享资源的互斥访问。常用的方法是使用 SETNX 命令和过期时间来实现。")]),s._v(" "),e("h3",{attrs:{id:"redis中hash的key值可以单独设置过期时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis中hash的key值可以单独设置过期时间"}},[s._v("#")]),s._v(" Redis中hash的key值可以单独设置过期时间")]),s._v(" "),e("p",[s._v("这是因为 Redis 的过期时间机制是基于 key 的，而不是基于 field 的。也就是说，Redis 只能对整个 key 设置过期时间，而不能对 key 中的某个 field 设置过期时间。这是 Redis 的设计决定，可能是为了简化过期时间的管理和清理。")]),s._v(" "),e("p",[s._v("举个例子，假设您有一个 Hash 类型的数据，key 是 "),e("code",[s._v("user")]),s._v("，field 是 "),e("code",[s._v("name")]),s._v(" 和 "),e("code",[s._v("age")]),s._v("，value 分别是 "),e("code",[s._v("Alice")]),s._v(" 和 "),e("code",[s._v("18")]),s._v("。您想要让 "),e("code",[s._v("name")]),s._v(" 这个 field 在 10 秒后过期，但是 "),e("code",[s._v("age")]),s._v(" 这个 field 不过期。如果 Redis 支持直接设置 Hash 类型的过期时间，您可能会这样做：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("HSET user name Alice\nHSET user age "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nHEXPIRE user name "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 假设这个命令存在")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("但是，Redis 并不支持这样的操作，因为它只能对整个 key 设置过期时间，而不能对 key 中的某个 field 设置过期时间。所以，如果您想要实现类似的效果，您需要使用上面提到的“曲线救国”的方法。具体来说，您可以这样做：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("HSET user name Alice\nHSET user age "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nSETEX user:name "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" Alice "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 user 和 name 组合成一个新的 key，并设置过期时间")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 Redis 的过期监听功能，在监听到 user:name 过期时，执行以下命令：")]),s._v("\nHDEL user name "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除 Hash 中的 name field")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=_.exports}}]);