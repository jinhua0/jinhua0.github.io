(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{341:function(v,_,t){"use strict";t.r(_);var a=t(4),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程"}},[v._v("#")]),v._v(" 进程与线程")]),v._v(" "),_("h3",{attrs:{id:"并行和并发有什么区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并行和并发有什么区别"}},[v._v("#")]),v._v(" 并行和并发有什么区别？")]),v._v(" "),_("p",[v._v("并行和并发是两个相关但不同的概念。并行是指在某一时刻，多个程序可以同时执行。并发是指在一段时间内，多个程序可以交替执行。并行是硬件通过多核处理器或多台机器实现的一种能力，而并发是操作系统通过上下文切换实现的一种现象。¹")]),v._v(" "),_("p",[v._v("举个例子，你吃饭吃到一半，电话来了，你停了下来接了电话，接完后继续吃饭，这说明你支持并发。你吃饭吃到一半，电话来了，你一边打电话一边吃饭，这说明你支持并行。并发的关键是你有处理多个任务的能力，不一定要同时。并行的关键是你有同时处理多个任务的能力。所以它们最关键的点就是：是否是『同时』。³")]),v._v(" "),_("h3",{attrs:{id:"进程有哪些调度算法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程有哪些调度算法"}},[v._v("#")]),v._v(" 进程有哪些调度算法？")]),v._v(" "),_("p",[v._v("进程调度算法也称为CPU调度算法。当CPU空闲时，操作系统会选择内存中的某个处于“就绪状态”的进程，并为其分配CPU ¹。常见的进程调度算法有：")]),v._v(" "),_("ol",[_("li",[v._v("先来先服务（FCFS）调度算法：按照就绪进程进入就绪队列的先后次序选择当前最先进入就绪队列的进程来执行，直到此进程阻塞或结束，才进行下一次的进程选择调度 ⁴。")]),v._v(" "),_("li",[v._v("最短作业优先（SJF）调度算法：优先选择运行时间最短的进程来运行 ³。")]),v._v(" "),_("li",[v._v("高响应比优先调度算法：每次进行进程调度时，先计算“响应比优先级”，然后把“响应比优先级”最高的进程投入运行 ³。")]),v._v(" "),_("li",[v._v("时间片轮转调度算法：每个进程被分配一个时间段，称为时间片（Quantum），即允许该进程在该时间段中运行。如果时间片用完，进程还在运行，那么将会把此进程从 CPU 释放出来，并把 CPU 分配另外一个进程 ³。")]),v._v(" "),_("li",[v._v("最高优先级调度算法：从就绪队列中选择最高优先级的进程进行运行 ³。")]),v._v(" "),_("li",[v._v("多级反馈队列调度算法：设置了多个队列，赋予每个队列不同的优先级，每个队列都有自己的时间片长度和调度算法 ³。")])]),v._v(" "),_("h3",{attrs:{id:"进程-线程的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程-线程的区别"}},[v._v("#")]),v._v(" 进程 线程的区别")]),v._v(" "),_("p",[v._v("进程和线程都是操作系统中的概念。它们之间的区别主要体现在以下几个方面：")]),v._v(" "),_("ol",[_("li",[v._v("进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位 ⁵。")]),v._v(" "),_("li",[v._v("进程有自己独立的地址空间，每启动一个进程，系统就会为它分配地址空间，建立数据表来维护代码段、堆栈段和数据段。而线程共享本进程的地址空间和资源 ⁴。")]),v._v(" "),_("li",[v._v("线程相对于进程来说，切换开销小，占用资源少。多个线程可以并发执行，提高程序的执行效率 ¹。")]),v._v(" "),_("li",[v._v("一个进程可以包含多个线程，线程之间可以共享进程中的数据 ¹。")])]),v._v(" "),_("p",[v._v("总之，进程和线程都是为了实现多任务处理而设计的概念。它们之间最大的区别在于进程拥有独立的地址空间，而线程则共享所属进程的地址空间。这使得线程之间可以方便地共享数据，但也带来了同步和互斥等问题。")]),v._v(" "),_("h3",{attrs:{id:"为什么会发生死锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么会发生死锁"}},[v._v("#")]),v._v(" 为什么会发生死锁")]),v._v(" "),_("p",[v._v("死锁是指多个线程因竞争资源而造成的一种僵局（互相等待），若无外力作用，这些线程都将无法向前推进 1。死锁产生的原因主要有以下几点：")]),v._v(" "),_("ol",[_("li",[v._v("系统资源不足。通常系统中拥有的不可剥夺资源，其数量不足以满足多个线程运行的需要，使得线程在运行过程中，会因争夺资源而陷入僵局 1。")]),v._v(" "),_("li",[v._v("线程运行推进的顺序不合适。线程在运行过程中，请求和释放资源的顺序不当，也同样会导致死锁 1。")]),v._v(" "),_("li",[v._v("信号量使用不当也会造成死锁。线程间彼此相互等待对方发来的消息，结果也会使得这些线程间无法继续向前推进")])]),v._v(" "),_("h3",{attrs:{id:"死锁产的条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#死锁产的条件"}},[v._v("#")]),v._v(" 死锁产的条件")]),v._v(" "),_("p",[v._v("产生死锁必须同时满足以下四个条件，只要其中任一条件不成立，死锁就不会发生 1：")]),v._v(" "),_("ol",[_("li",[v._v("互斥条件：线程要求对所分配的资源进行排他性控制，即在一段时间内某资源仅为一个线程所占有。此时若有其他线程请求该资源，则请求线程只能等待。")]),v._v(" "),_("li",[v._v("不剥夺条件：线程所获得的资源在未使用完毕之前，不能被其他线程强行夺走，即只能由获得该资源的线程自己来释放。")]),v._v(" "),_("li",[v._v("请求和保持条件：线程已经保持了至少一个资源，但又提出了新的资源请求，而该资源已被其他线程占有，此时请求线程被阻塞，但对自己已获得的资源保持不放。")]),v._v(" "),_("li",[v._v("循环等待条件：存在一种线程资源的循环等待链，链中每一个线程已获得的资源同时被链中下一个线程所请求。")])]),v._v(" "),_("h3",{attrs:{id:"如何避免死锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何避免死锁"}},[v._v("#")]),v._v(" 如何避免死锁")])])}),[],!1,null,null,null);_.default=s.exports}}]);