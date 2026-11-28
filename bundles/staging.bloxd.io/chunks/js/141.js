/*! For license information please see yteou.141.bf63c433.chunk.js.LICENSE.txt */
export const id = 141;
export const ids = [141];
export const modules = {
  7365: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Graph: () => cd,
      debug: () => Vm,
      default: () => Am,
      graphlib: () => Rd,
      layout: () => ym,
      util: () => im,
      version: () => KO
    });
    var Wd = Object.defineProperty,
      Fd = (dd, Od, md) => ((dd, Od, md) => Od in dd ? Wd(dd, Od, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: md
      }) : dd[Od] = md)(dd, "symbol" != typeof Od ? Od + "" : Od, md),
      Rd = {};
    ((dd, Od) => {
      for (var md in Od) Wd(dd, md, {
        get: Od[md],
        enumerable: !0
      })
    })(Rd, {
      Graph: () => cd,
      alg: () => bd
    });
    var Xd = Object.defineProperty,
      Kd = (dd, Od) => {
        for (var md in Od) Xd(dd, md, {
          get: Od[md],
          enumerable: !0
        })
      },
      hd = class {
        constructor(dd) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, dd && (this._isDirected = !("directed" in dd) || dd.directed, this._isMultigraph = "multigraph" in dd && dd.multigraph, this._isCompound = "compound" in dd && dd.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
        }
        isDirected() {
          return this._isDirected
        }
        isMultigraph() {
          return this._isMultigraph
        }
        isCompound() {
          return this._isCompound
        }
        setGraph(dd) {
          return this._label = dd, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(dd) {
          return this._defaultNodeLabelFn = "function" != typeof dd ? () => dd : dd, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((dd => 0 === Object.keys(this._in[dd]).length))
        }
        sinks() {
          return this.nodes().filter((dd => 0 === Object.keys(this._out[dd]).length))
        }
        setNodes(dd, Od) {
          return dd.forEach((dd => {
            void 0 !== Od ? this.setNode(dd, Od) : this.setNode(dd)
          })), this
        }
        setNode(dd, Od) {
          return dd in this._nodes ? (arguments.length > 1 && (this._nodes[dd] = Od), this) : (this._nodes[dd] = arguments.length > 1 ? Od : this._defaultNodeLabelFn(dd), this._isCompound && (this._parent[dd] = "\0", this._children[dd] = {}, this._children["\0"][dd] = !0), this._in[dd] = {}, this._preds[dd] = {}, this._out[dd] = {}, this._sucs[dd] = {}, ++this._nodeCount, this)
        }
        node(dd) {
          return this._nodes[dd]
        }
        hasNode(dd) {
          return dd in this._nodes
        }
        removeNode(dd) {
          if (dd in this._nodes) {
            let Od = dd => this.removeEdge(this._edgeObjs[dd]);
            delete this._nodes[dd], this._isCompound && (this._removeFromParentsChildList(dd), delete this._parent[dd], this.children(dd).forEach((dd => {
              this.setParent(dd)
            })), delete this._children[dd]), Object.keys(this._in[dd]).forEach(Od), delete this._in[dd], delete this._preds[dd], Object.keys(this._out[dd]).forEach(Od), delete this._out[dd], delete this._sucs[dd], --this._nodeCount
          }
          return this
        }
        setParent(dd, Od) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Od) Od = "\0";
          else {
            for (let md = Od += ""; void 0 !== md; md = this.parent(md))
              if (md === dd) throw new Error("Setting " + Od + " as parent of " + dd + " would create a cycle");
            this.setNode(Od)
          }
          return this.setNode(dd), this._removeFromParentsChildList(dd), this._parent[dd] = Od, this._children[Od][dd] = !0, this
        }
        parent(dd) {
          if (this._isCompound) {
            let Od = this._parent[dd];
            if ("\0" !== Od) return Od
          }
        }
        children() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Od = this._children[dd];
            if (Od) return Object.keys(Od)
          } else {
            if ("\0" === dd) return this.nodes();
            if (this.hasNode(dd)) return []
          }
          return []
        }
        predecessors(dd) {
          let Od = this._preds[dd];
          if (Od) return Object.keys(Od)
        }
        successors(dd) {
          let Od = this._sucs[dd];
          if (Od) return Object.keys(Od)
        }
        neighbors(dd) {
          let Od = this.predecessors(dd);
          if (Od) {
            let md = new Set(Od),
              Wd = this.successors(dd);
            if (Wd)
              for (let dd of Wd) md.add(dd);
            return Array.from(md.values())
          }
        }
        isLeaf(dd) {
          var Od;
          let md;
          return md = this.isDirected() ? this.successors(dd) : this.neighbors(dd), 0 === (null != (Od = null == md ? void 0 : md.length) ? Od : 0)
        }
        filterNodes(dd) {
          let Od = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Od.setGraph(this.graph()), Object.entries(this._nodes).forEach((md => {
            let [Wd, Fd] = md;
            dd(Wd) && Od.setNode(Wd, Fd)
          })), Object.values(this._edgeObjs).forEach((dd => {
            Od.hasNode(dd.v) && Od.hasNode(dd.w) && Od.setEdge(dd, this.edge(dd))
          }));
          let md = {},
            Wd = dd => {
              let Fd = this.parent(dd);
              return !Fd || Od.hasNode(Fd) ? (md[dd] = Fd, Fd) : Fd in md ? md[Fd] : Wd(Fd)
            };
          return this._isCompound && Od.nodes().forEach((dd => Od.setParent(dd, Wd(dd)))), Od
        }
        setDefaultEdgeLabel(dd) {
          return this._defaultEdgeLabelFn = "function" != typeof dd ? () => dd : dd, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(dd, Od) {
          return dd.reduce(((dd, md) => (void 0 !== Od ? this.setEdge(dd, md, Od) : this.setEdge(dd, md), md))), this
        }
        setEdge(dd, Od, md, Wd) {
          let Fd, Rd, Xd, Kd, hd = !1;
          "object" == typeof dd && null !== dd && "v" in dd ? (Fd = dd.v, Rd = dd.w, Xd = dd.name, 2 === arguments.length && (Kd = Od, hd = !0)) : (Fd = dd, Rd = Od, Xd = Wd, arguments.length > 2 && (Kd = md, hd = !0)), Fd = "" + Fd, Rd = "" + Rd, void 0 !== Xd && (Xd = "" + Xd);
          let Qd = td(this._isDirected, Fd, Rd, Xd);
          if (Qd in this._edgeLabels) return hd && (this._edgeLabels[Qd] = Kd), this;
          if (void 0 !== Xd && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Fd), this.setNode(Rd), this._edgeLabels[Qd] = hd ? Kd : this._defaultEdgeLabelFn(Fd, Rd, Xd);
          let od = function(dd, Od, md, Wd) {
            let Fd = "" + Od,
              Rd = "" + md;
            if (!dd && Fd > Rd) {
              let dd = Fd;
              Fd = Rd, Rd = dd
            }
            let Xd = {
              v: Fd,
              w: Rd
            };
            return Wd && (Xd.name = Wd), Xd
          }(this._isDirected, Fd, Rd, Xd);
          return Fd = od.v, Rd = od.w, Object.freeze(od), this._edgeObjs[Qd] = od, vd(this._preds[Rd], Fd), vd(this._sucs[Fd], Rd), this._in[Rd][Qd] = od, this._out[Fd][Qd] = od, this._edgeCount++, this
        }
        edge(dd, Od, md) {
          let Wd = 1 === arguments.length ? od(this._isDirected, dd) : td(this._isDirected, dd, Od, md);
          return this._edgeLabels[Wd]
        }
        edgeAsObj(dd, Od, md) {
          let Wd = 1 === arguments.length ? this.edge(dd) : this.edge(dd, Od, md);
          return "object" != typeof Wd || null === Wd ? {
            label: Wd
          } : Wd
        }
        hasEdge(dd, Od, md) {
          return (1 === arguments.length ? od(this._isDirected, dd) : td(this._isDirected, dd, Od, md)) in this._edgeLabels
        }
        removeEdge(dd, Od, md) {
          let Wd = 1 === arguments.length ? od(this._isDirected, dd) : td(this._isDirected, dd, Od, md),
            Fd = this._edgeObjs[Wd];
          if (Fd) {
            let dd = Fd.v,
              Od = Fd.w;
            delete this._edgeLabels[Wd], delete this._edgeObjs[Wd], Qd(this._preds[Od], dd), Qd(this._sucs[dd], Od), delete this._in[Od][Wd], delete this._out[dd][Wd], this._edgeCount--
          }
          return this
        }
        inEdges(dd, Od) {
          return this.isDirected() ? this.filterEdges(this._in[dd], dd, Od) : this.nodeEdges(dd, Od)
        }
        outEdges(dd, Od) {
          return this.isDirected() ? this.filterEdges(this._out[dd], dd, Od) : this.nodeEdges(dd, Od)
        }
        nodeEdges(dd, Od) {
          if (dd in this._nodes) return this.filterEdges({
            ...this._in[dd],
            ...this._out[dd]
          }, dd, Od)
        }
        _removeFromParentsChildList(dd) {
          delete this._children[this._parent[dd]][dd]
        }
        filterEdges(dd, Od, md) {
          if (!dd) return;
          let Wd = Object.values(dd);
          return md ? Wd.filter((dd => dd.v === Od && dd.w === md || dd.v === md && dd.w === Od)) : Wd
        }
      };

    function vd(dd, Od) {
      dd[Od] ? dd[Od]++ : dd[Od] = 1
    }

    function Qd(dd, Od) {
      void 0 !== dd[Od] && !--dd[Od] && delete dd[Od]
    }

    function td(dd, Od, md, Wd) {
      let Fd = "" + Od,
        Rd = "" + md;
      if (!dd && Fd > Rd) {
        let dd = Fd;
        Fd = Rd, Rd = dd
      }
      return Fd + "\x01" + Rd + "\x01" + (void 0 === Wd ? "\0" : Wd)
    }

    function od(dd, Od) {
      return td(dd, Od.v, Od.w, Od.name)
    }

    function Nd(dd) {
      let Od = {
          options: {
            directed: dd.isDirected(),
            multigraph: dd.isMultigraph(),
            compound: dd.isCompound()
          },
          nodes: qd(dd),
          edges: Hd(dd)
        },
        md = dd.graph();
      return void 0 !== md && (Od.value = structuredClone(md)), Od
    }

    function qd(dd) {
      return dd.nodes().map((Od => {
        let md = dd.node(Od),
          Wd = dd.parent(Od),
          Fd = {
            v: Od
          };
        return void 0 !== md && (Fd.value = md), void 0 !== Wd && (Fd.parent = Wd), Fd
      }))
    }

    function Hd(dd) {
      return dd.edges().map((Od => {
        let md = dd.edge(Od),
          Wd = {
            v: Od.v,
            w: Od.w
          };
        return void 0 !== Od.name && (Wd.name = Od.name), void 0 !== md && (Wd.value = md), Wd
      }))
    }

    function yd(dd) {
      let Od = new hd(dd.options);
      return void 0 !== dd.value && Od.setGraph(dd.value), dd.nodes.forEach((dd => {
        Od.setNode(dd.v, dd.value), dd.parent && Od.setParent(dd.v, dd.parent)
      })), dd.edges.forEach((dd => {
        Od.setEdge({
          v: dd.v,
          w: dd.w,
          name: dd.name
        }, dd.value)
      })), Od
    }
    Kd({}, {
      read: () => yd,
      write: () => Nd
    });
    var bd = {};
    Kd(bd, {
      CycleException: () => sd,
      bellmanFord: () => pd,
      components: () => Yd,
      dijkstra: () => Ed,
      dijkstraAll: () => Jd,
      findCycles: () => xd,
      floydWarshall: () => Sd,
      isAcyclic: () => Vd,
      postorder: () => nd,
      preorder: () => Ld,
      prim: () => Pd,
      shortestPaths: () => zd,
      tarjan: () => Ud,
      topsort: () => ud
    });
    var Td = () => 1;

    function pd(dd, Od, md, Wd) {
      return function(dd, Od, md, Wd) {
        let Fd, Rd = {},
          Xd = 0,
          Kd = dd.nodes(),
          hd = function(dd) {
            let Od = Rd[dd.v],
              Wd = Rd[dd.w];
            if (!Od || !Wd) return;
            let Xd = md(dd);
            Od.distance + Xd < Wd.distance && (Rd[dd.w] = {
              distance: Od.distance + Xd,
              predecessor: dd.v
            }, Fd = !0)
          },
          vd = function() {
            Kd.forEach((function(dd) {
              Wd(dd).forEach((function(Od) {
                let md = Od.v === dd ? Od.v : Od.w,
                  Wd = md === Od.v ? Od.w : Od.v;
                hd({
                  v: md,
                  w: Wd
                })
              }))
            }))
          };
        Kd.forEach((function(dd) {
          let md = dd === Od ? 0 : Number.POSITIVE_INFINITY;
          Rd[dd] = {
            distance: md,
            predecessor: ""
          }
        }));
        let Qd = Kd.length;
        for (let td = 1; td < Qd && (Fd = !1, Xd++, vd(), Fd); td++);
        if (Xd === Qd - 1 && (Fd = !1, vd(), Fd)) throw new Error("The graph contains a negative weight cycle");
        return Rd
      }(dd, String(Od), md || Td, Wd || function(Od) {
        var md;
        return null != (md = dd.outEdges(Od)) ? md : []
      })
    }

    function Yd(dd) {
      let Od, md = {},
        Wd = [];

      function Fd(Wd) {
        var Rd, Xd;
        Wd in md || (md[Wd] = !0, Od.push(Wd), null == (Rd = dd.successors(Wd)) || Rd.forEach(Fd), null == (Xd = dd.predecessors(Wd)) || Xd.forEach(Fd))
      }
      return dd.nodes().forEach((function(dd) {
        Od = [], Fd(dd), Od.length && Wd.push(Od)
      })), Wd
    }
    var gd = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((dd => dd.key))
        }
        has(dd) {
          return dd in this._keyIndices
        }
        priority(dd) {
          let Od = this._keyIndices[dd];
          if (void 0 !== Od) return this._arr[Od].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(dd, Od) {
          let md = this._keyIndices,
            Wd = String(dd);
          if (!(Wd in md)) {
            let dd = this._arr,
              Fd = dd.length;
            return md[Wd] = Fd, dd.push({
              key: Wd,
              priority: Od
            }), this._decrease(Fd), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let dd = this._arr.pop();
          return delete this._keyIndices[dd.key], this._heapify(0), dd.key
        }
        decrease(dd, Od) {
          let md = this._keyIndices[dd];
          if (void 0 === md) throw new Error(`Key not found: ${dd}`);
          let Wd = this._arr[md].priority;
          if (Od > Wd) throw new Error(`New priority is greater than current priority. Key: ${dd} Old: ${Wd} New: ${Od}`);
          this._arr[md].priority = Od, this._decrease(md)
        }
        _heapify(dd) {
          let Od = this._arr,
            md = 2 * dd,
            Wd = md + 1,
            Fd = dd;
          md < Od.length && (Fd = Od[md].priority < Od[Fd].priority ? md : Fd, Wd < Od.length && (Fd = Od[Wd].priority < Od[Fd].priority ? Wd : Fd), Fd !== dd && (this._swap(dd, Fd), this._heapify(Fd)))
        }
        _decrease(dd) {
          let Od, md = this._arr,
            Wd = md[dd].priority;
          for (; 0 !== dd && (Od = dd >> 1, !(md[Od].priority < Wd));) this._swap(dd, Od), dd = Od
        }
        _swap(dd, Od) {
          let md = this._arr,
            Wd = this._keyIndices,
            Fd = md[dd],
            Rd = md[Od];
          md[dd] = Rd, md[Od] = Fd, Wd[Rd.key] = dd, Wd[Fd.key] = Od
        }
      },
      wd = () => 1;

    function Ed(dd, Od, md, Wd) {
      return function(dd, Od, md, Wd) {
        let Fd, Rd, Xd = {},
          Kd = new gd,
          hd = function(dd) {
            let Od = dd.v !== Fd ? dd.v : dd.w,
              Wd = Xd[Od];
            if (!Wd) return;
            let hd = md(dd),
              vd = Rd.distance + hd;
            if (hd < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + dd + " Weight: " + hd);
            vd < Wd.distance && (Wd.distance = vd, Wd.predecessor = Fd, Kd.decrease(Od, vd))
          };
        for (dd.nodes().forEach((function(dd) {
            let md = dd === Od ? 0 : Number.POSITIVE_INFINITY;
            Xd[dd] = {
              distance: md,
              predecessor: ""
            }, Kd.add(dd, md)
          })); Kd.size() > 0;) {
          Fd = Kd.removeMin();
          let dd = Xd[Fd];
          if (!dd || dd.distance === Number.POSITIVE_INFINITY) break;
          Rd = dd, Wd(Fd).forEach(hd)
        }
        return Xd
      }(dd, String(Od), md || wd, Wd || function(Od) {
        var md;
        return null != (md = dd.outEdges(Od)) ? md : []
      })
    }

    function Jd(dd, Od, md) {
      return dd.nodes().reduce((function(Wd, Fd) {
        return Wd[Fd] = Ed(dd, Fd, Od, md), Wd
      }), {})
    }

    function Ud(dd) {
      let Od = 0,
        md = [],
        Wd = {},
        Fd = [];

      function Rd(Xd) {
        var Kd;
        let hd = Wd[Xd] = {
          onStack: !0,
          lowlink: Od,
          index: Od++
        };
        if (md.push(Xd), null == (Kd = dd.successors(Xd)) || Kd.forEach((function(dd) {
            if (dd in Wd) {
              let Od = Wd[dd];
              null != Od && Od.onStack && (hd.lowlink = Math.min(hd.lowlink, Od.index))
            } else {
              Rd(dd);
              let Od = Wd[dd];
              Od && (hd.lowlink = Math.min(hd.lowlink, Od.lowlink))
            }
          })), hd.lowlink === hd.index) {
          let dd, Od = [];
          do {
            dd = md.pop();
            let Fd = Wd[dd];
            Fd && (Fd.onStack = !1), Od.push(dd)
          } while (Xd !== dd);
          Fd.push(Od)
        }
      }
      return dd.nodes().forEach((function(dd) {
        dd in Wd || Rd(dd)
      })), Fd
    }

    function xd(dd) {
      return Ud(dd).filter((function(Od) {
        var md;
        let Wd = Od[0];
        return !!Wd && (Od.length > 1 || 1 === Od.length && (null != (md = dd.outEdges(Wd, Wd)) ? md : []).length > 0)
      }))
    }
    var Bd = () => 1;

    function Sd(dd, Od, md) {
      return function(dd, Od, md) {
        let Wd = {},
          Fd = dd.nodes();
        return Fd.forEach((function(dd) {
          let Rd = {};
          Wd[dd] = Rd, Rd[dd] = {
            distance: 0,
            predecessor: ""
          }, Fd.forEach((function(Od) {
            dd !== Od && (Rd[Od] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), md(dd).forEach((function(md) {
            let Wd = md.v === dd ? md.w : md.v,
              Fd = Od(md);
            Rd[Wd] = {
              distance: Fd,
              predecessor: dd
            }
          }))
        })), Fd.forEach((function(dd) {
          let Od = Wd[dd];
          Od && Fd.forEach((function(md) {
            let Rd = Wd[md];
            Rd && Fd.forEach((function(md) {
              let Wd = Rd[dd],
                Fd = Od[md],
                Xd = Rd[md];
              if (Wd && Fd && Xd) {
                let dd = Wd.distance + Fd.distance;
                dd < Xd.distance && (Xd.distance = dd, Xd.predecessor = Fd.predecessor)
              }
            }))
          }))
        })), Wd
      }(dd, Od || Bd, md || function(Od) {
        var md;
        return null != (md = dd.outEdges(Od)) ? md : []
      })
    }
    var sd = class extends Error {
      constructor(dd) {
        super(dd), this.name = "CycleException"
      }
    };

    function ud(dd) {
      let Od = {},
        md = {},
        Wd = [];
      if (dd.sinks().forEach((function Fd(Rd) {
          var Xd;
          if (Rd in md) throw new sd;
          Rd in Od || (md[Rd] = !0, Od[Rd] = !0, null == (Xd = dd.predecessors(Rd)) || Xd.forEach(Fd), delete md[Rd], Wd.push(Rd))
        })), Object.keys(Od).length !== dd.nodeCount()) throw new sd;
      return Wd
    }

    function Vd(dd) {
      try {
        ud(dd)
      } catch (Od) {
        if (Od instanceof sd) return !1;
        throw Od
      }
      return !0
    }

    function Ad(dd, Od, md, Wd, Fd) {
      Array.isArray(Od) || (Od = [Od]);
      let Rd = Od => {
          var md;
          return null != (md = dd.isDirected() ? dd.successors(Od) : dd.neighbors(Od)) ? md : []
        },
        Xd = {};
      return Od.forEach((function(Od) {
        if (!dd.hasNode(Od)) throw new Error("Graph does not have node: " + Od);
        Fd = rd(dd, Od, "post" === md, Xd, Rd, Wd, Fd)
      })), Fd
    }

    function rd(dd, Od, md, Wd, Fd, Rd, Xd) {
      return Od in Wd || (Wd[Od] = !0, md || (Xd = Rd(Xd, Od)), Fd(Od).forEach((function(Od) {
        Xd = rd(dd, Od, md, Wd, Fd, Rd, Xd)
      })), md && (Xd = Rd(Xd, Od))), Xd
    }

    function Gd(dd, Od, md) {
      return Ad(dd, Od, md, (function(dd, Od) {
        return dd.push(Od), dd
      }), [])
    }

    function nd(dd, Od) {
      return Gd(dd, Od, "post")
    }

    function Ld(dd, Od) {
      return Gd(dd, Od, "pre")
    }

    function Pd(dd, Od) {
      var md;
      let Wd, Fd = new hd,
        Rd = {},
        Xd = new gd;

      function Kd(dd) {
        let md = dd.v === Wd ? dd.w : dd.v,
          Fd = Xd.priority(md);
        if (void 0 !== Fd) {
          let Kd = Od(dd);
          Kd < Fd && (Rd[md] = Wd, Xd.decrease(md, Kd))
        }
      }
      if (0 === dd.nodeCount()) return Fd;
      dd.nodes().forEach((function(dd) {
        Xd.add(dd, Number.POSITIVE_INFINITY), Fd.setNode(dd)
      }));
      let vd = dd.nodes()[0];
      void 0 !== vd && Xd.decrease(vd, 0);
      let Qd = !1;
      for (; Xd.size() > 0;) {
        if (Wd = Xd.removeMin(), Wd in Rd) Fd.setEdge(Wd, Rd[Wd]);
        else {
          if (Qd) throw new Error("Input graph is not connected: " + dd);
          Qd = !0
        }
        null == (md = dd.nodeEdges(Wd)) || md.forEach(Kd)
      }
      return Fd
    }

    function zd(dd, Od, md, Wd) {
      return function(dd, Od, md, Wd) {
        if (void 0 === md) return Ed(dd, Od, md, Wd);
        let Fd = !1,
          Rd = dd.nodes();
        for (let Xd = 0; Xd < Rd.length; Xd++) {
          let Kd = Rd[Xd];
          if (void 0 === Kd) continue;
          let hd = Wd(Kd);
          for (let dd = 0; dd < hd.length; dd++) {
            let Od = hd[dd];
            if (!Od) continue;
            let Wd = Od.v === Kd ? Od.v : Od.w;
            md({
              v: Wd,
              w: Wd === Od.v ? Od.w : Od.v
            }) < 0 && (Fd = !0)
          }
          if (Fd) return pd(dd, Od, md, Wd)
        }
        return Ed(dd, Od, md, Wd)
      }(dd, Od, md, null != Wd ? Wd : Od => {
        var md;
        return null != (md = dd.outEdges(Od)) ? md : []
      })
    }
    var cd = hd;

    function jd(dd, Od, md, Wd) {
      let Fd = Wd;
      for (; dd.hasNode(Fd);) Fd = OO(Wd);
      return md.dummy = Od, dd.setNode(Fd, md), Fd
    }

    function Dd(dd) {
      let Od = new cd({
        multigraph: dd.isMultigraph()
      }).setGraph(dd.graph());
      return dd.nodes().forEach((md => {
        dd.children(md).length || Od.setNode(md, dd.node(md))
      })), dd.edges().forEach((md => {
        Od.setEdge(md, dd.edge(md))
      })), Od
    }

    function ed(dd, Od) {
      let md, Wd, Fd = dd.x,
        Rd = dd.y,
        Xd = Od.x - Fd,
        Kd = Od.y - Rd,
        hd = dd.width / 2,
        vd = dd.height / 2;
      if (!Xd && !Kd) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Kd) * hd > Math.abs(Xd) * vd ? (Kd < 0 && (vd = -vd), md = vd * Xd / Kd, Wd = vd) : (Xd < 0 && (hd = -hd), md = hd, Wd = hd * Kd / Xd), {
        x: Fd + md,
        y: Rd + Wd
      }
    }

    function Id(dd) {
      let Od = mO(kd(dd) + 1).map((() => []));
      return dd.nodes().forEach((md => {
        let Wd = dd.node(md),
          Fd = Wd.rank;
        void 0 !== Fd && (Od[Fd] || (Od[Fd] = []), Od[Fd][Wd.order] = md)
      })), Od
    }

    function ld(dd, Od, md, Wd) {
      let Fd = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Fd.rank = md, Fd.order = Wd), jd(dd, "border", Fd, Od)
    }
    var Cd = 65535;

    function Zd(dd, Od) {
      if (Od.length > Cd) {
        let md = function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cd,
            md = [];
          for (let Wd = 0; Wd < dd.length; Wd += Od) {
            let Fd = dd.slice(Wd, Wd + Od);
            md.push(Fd)
          }
          return md
        }(Od);
        return dd(...md.map((Od => dd(...Od))))
      }
      return dd(...Od)
    }

    function kd(dd) {
      let Od = dd.nodes().map((Od => {
        let md = dd.node(Od).rank;
        return void 0 === md ? Number.MIN_VALUE : md
      }));
      return Zd(Math.max, Od)
    }

    function fd(dd, Od) {
      let md = Date.now();
      try {
        return Od()
      } finally {
        console.log(dd + " time: " + (Date.now() - md) + "ms")
      }
    }

    function Md(dd, Od) {
      return Od()
    }
    var dO = 0;

    function OO(dd) {
      return dd + "" + ++dO
    }

    function mO(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Od && (Od = dd, dd = 0);
      let Wd = dd => dd < Od;
      md < 0 && (Wd = dd => Od < dd);
      let Fd = [];
      for (let Rd = dd; Wd(Rd); Rd += md) Fd.push(Rd);
      return Fd
    }

    function WO(dd, Od) {
      let md = {};
      for (let Wd of Od) void 0 !== dd[Wd] && (md[Wd] = dd[Wd]);
      return md
    }

    function FO(dd, Od) {
      let md;
      return md = "string" == typeof Od ? dd => dd[Od] : Od, Object.entries(dd).reduce(((dd, Od) => {
        let [Wd, Fd] = Od;
        return dd[Wd] = md(Fd, Wd), dd
      }), {})
    }
    var RO = "\0";

    function XO(dd, Od, md) {
      var Wd, Fd, Rd, Xd, Kd, hd;
      if (!(dd && Od && md && "edge" === Od.dummy && "edge" === md.dummy && Od.edgeObj && md.edgeObj && dd[Od.edgeObj.v] && dd[md.edgeObj.v] && dd[Od.edgeObj.w] && dd[md.edgeObj.w])) return 0;
      let vd = !0;
      Od.edgeObj.w === md.edgeObj.w && (vd = !1);
      let Qd = vd ? null != (Fd = null == (Wd = dd[Od.edgeObj.v]) ? void 0 : Wd.rank) ? Fd : NaN : null != (Xd = null == (Rd = dd[Od.edgeObj.w]) ? void 0 : Rd.rank) ? Xd : NaN,
        td = Object.entries(dd).find((dd => {
          var md, Wd;
          return (null == (md = dd[1].edgeObj) ? void 0 : md.v) === Od.edgeObj.v && (null == (Wd = dd[1].edgeObj) ? void 0 : Wd.w) === Od.edgeObj.w && dd[1].rank === Qd
        })),
        od = Object.entries(dd).find((dd => {
          var Od, Wd;
          return (null == (Od = dd[1].edgeObj) ? void 0 : Od.v) === md.edgeObj.v && (null == (Wd = dd[1].edgeObj) ? void 0 : Wd.w) === md.edgeObj.w && dd[1].rank === Qd
        }));
      if (!td || !od) return 0;
      let Nd = null != (Kd = td[1].order) ? Kd : NaN,
        qd = null != (hd = od[1].order) ? hd : NaN;
      return isNaN(Nd - qd) ? 0 : Nd - qd
    }
    var KO = "3.1.1";

    function hO(dd) {
      dd._prev._next = dd._next, dd._next._prev = dd._prev, delete dd._next, delete dd._prev
    }

    function vO(dd, Od) {
      if ("_next" !== dd && "_prev" !== dd) return Od
    }
    var QO = class {
        constructor() {
          Fd(this, "_sentinel");
          let dd = {};
          dd._next = dd._prev = dd, this._sentinel = dd
        }
        dequeue() {
          let dd = this._sentinel,
            Od = dd._prev;
          if (Od !== dd) return hO(Od), Od
        }
        enqueue(dd) {
          let Od = this._sentinel;
          dd._prev && dd._next && hO(dd), dd._next = Od._next, Od._next._prev = dd, Od._next = dd, dd._prev = Od
        }
        toString() {
          let dd = [],
            Od = this._sentinel,
            md = Od._prev;
          for (; md !== Od;) dd.push(JSON.stringify(md, vO)), md = md._prev;
          return "[" + dd.join(", ") + "]"
        }
      },
      tO = () => 1;

    function oO(dd, Od) {
      if (dd.nodeCount() <= 1) return [];
      let md = function(dd, Od) {
        let md = new cd,
          Wd = 0,
          Fd = 0;
        dd.nodes().forEach((dd => {
          md.setNode(dd, {
            v: dd,
            in: 0,
            out: 0
          })
        })), dd.edges().forEach((dd => {
          let Rd = md.edge(dd.v, dd.w) || 0,
            Xd = Od(dd),
            Kd = Rd + Xd;
          md.setEdge(dd.v, dd.w, Kd);
          let hd = md.node(dd.v),
            vd = md.node(dd.w);
          Fd = Math.max(Fd, hd.out += Xd), Wd = Math.max(Wd, vd.in += Xd)
        }));
        let Rd = function(dd) {
            let Od = [];
            for (let md = 0; md < dd; md++) Od.push(md);
            return Od
          }(Fd + Wd + 3).map((() => new QO)),
          Xd = Wd + 1;
        return md.nodes().forEach((dd => {
          qO(Rd, Xd, md.node(dd))
        })), {
          graph: md,
          buckets: Rd,
          zeroIdx: Xd
        }
      }(dd, Od || tO);
      return function(dd, Od, md) {
        var Wd;
        let Fd, Rd = [],
          Xd = Od[Od.length - 1],
          Kd = Od[0];
        for (; dd.nodeCount();) {
          for (; Fd = Kd.dequeue();) NO(dd, Od, md, Fd);
          for (; Fd = Xd.dequeue();) NO(dd, Od, md, Fd);
          if (dd.nodeCount())
            for (let Xd = Od.length - 2; Xd > 0; --Xd)
              if (Fd = null == (Wd = Od[Xd]) ? void 0 : Wd.dequeue(), Fd) {
                Rd = Rd.concat(NO(dd, Od, md, Fd, !0) || []);
                break
              }
        }
        return Rd
      }(md.graph, md.buckets, md.zeroIdx).flatMap((Od => dd.outEdges(Od.v, Od.w) || []))
    }

    function NO(dd, Od, md, Wd, Fd) {
      let Rd = [],
        Xd = Fd ? Rd : void 0;
      return (dd.inEdges(Wd.v) || []).forEach((Wd => {
        let Xd = dd.edge(Wd),
          Kd = dd.node(Wd.v);
        Fd && Rd.push({
          v: Wd.v,
          w: Wd.w
        }), Kd.out -= Xd, qO(Od, md, Kd)
      })), (dd.outEdges(Wd.v) || []).forEach((Wd => {
        let Fd = dd.edge(Wd),
          Rd = Wd.w,
          Xd = dd.node(Rd);
        Xd.in -= Fd, qO(Od, md, Xd)
      })), dd.removeNode(Wd.v), Xd
    }

    function qO(dd, Od, md) {
      var Wd, Fd, Rd;
      md.out ? md.in ? null == (Rd = dd[md.out - md.in + Od]) || Rd.enqueue(md) : null == (Fd = dd[dd.length - 1]) || Fd.enqueue(md) : null == (Wd = dd[0]) || Wd.enqueue(md)
    }

    function HO(dd, Od) {
      var md;
      ("greedy" === dd.graph().acyclicer ? oO(dd, (md = dd, dd => md.edge(dd).weight)) : function(dd, Od) {
        let md = [],
          Wd = {},
          Fd = {};

        function Rd(Od) {
          Object.hasOwn(Fd, Od) || (Fd[Od] = !0, Wd[Od] = !0, dd.outEdges(Od).forEach((dd => {
            Object.hasOwn(Wd, dd.w) ? md.push(dd) : Rd(dd.w)
          })), delete Wd[Od])
        }

        function Xd(Rd) {
          var Kd;
          Object.hasOwn(Fd, Rd) || (Fd[Rd] = !0, Wd[Rd] = !0, null == (Kd = dd.outEdges(Rd)) || Kd.forEach((Fd => {
            var Kd, hd;
            Object.hasOwn(Wd, Fd.w) || (null == (Kd = Od.node(Rd)) ? void 0 : Kd.rank) > (null == (hd = Od.node(Fd.w)) ? void 0 : hd.rank) && function(dd, Od, md) {
              let Wd = new Set;

              function Fd(Od) {
                var Rd;
                if (dd.sources().includes(Od)) return !0;
                Wd.add(Od);
                for (let Xd of null != (Rd = dd.inEdges(Od)) ? Rd : [])
                  if ((Xd.v !== md.v || Xd.w !== md.w) && !Wd.has(Xd.v) && Fd(Xd.v)) return !0;
                return !1
              }
              return Fd(Od)
            }(dd, Fd.w, Fd) ? md.push(Fd) : Xd(Fd.w)
          })), delete Wd[Rd])
        }
        let Kd = Rd;
        return Od && "function" == typeof Od.node && (Kd = Xd), dd.sources().forEach(Kd), dd.nodes().forEach(Kd), md
      }(dd, null != Od ? Od : null)).forEach((Od => {
        let md = dd.edge(Od);
        dd.removeEdge(Od), md.forwardName = Od.name, md.reversed = !0, dd.setEdge(Od.w, Od.v, md, OO("rev"))
      }))
    }

    function yO(dd) {
      dd.graph().dummyChains = [], dd.edges().forEach((Od => function(dd, Od) {
        let md, Wd, Fd, Rd = Od.v,
          Xd = dd.node(Rd).rank,
          Kd = Od.w,
          hd = dd.node(Kd).rank,
          vd = Od.name,
          Qd = dd.edge(Od),
          td = Qd.labelRank;
        if (hd === Xd + 1) return;
        for (dd.removeEdge(Od), Fd = 0, ++Xd; Xd < hd; ++Fd, ++Xd) Qd.points = [], Wd = {
          width: 0,
          height: 0,
          edgeLabel: Qd,
          edgeObj: Od,
          rank: Xd
        }, md = jd(dd, "edge", Wd, "_d"), Xd === td && (Wd.width = Qd.width, Wd.height = Qd.height, Wd.dummy = "edge-label", Wd.labelpos = Qd.labelpos), dd.setEdge(Rd, md, {
          weight: Qd.weight
        }, vd), 0 === Fd && dd.graph().dummyChains.push(md), Rd = md;
        dd.setEdge(Rd, Kd, {
          weight: Qd.weight
        }, vd)
      }(dd, Od)))
    }

    function bO(dd) {
      let Od = {};
      dd.sources().forEach((function md(Wd) {
        let Fd = dd.node(Wd);
        if (Object.hasOwn(Od, Wd)) return Fd.rank;
        Od[Wd] = !0;
        let Rd = dd.outEdges(Wd),
          Xd = Rd ? Rd.map((Od => null == Od ? Number.POSITIVE_INFINITY : md(Od.w) - dd.edge(Od).minlen)) : [],
          Kd = Zd(Math.min, Xd);
        return Kd === Number.POSITIVE_INFINITY && (Kd = 0), Fd.rank = Kd
      }))
    }

    function TO(dd, Od) {
      return dd.node(Od.w).rank - dd.node(Od.v).rank - dd.edge(Od).minlen
    }
    var pO = function(dd) {
      let Od = new cd({
          directed: !1
        }),
        md = dd.nodes();
      if (0 === md.length) throw new Error("Graph must have at least one node");
      let Wd, Fd, Rd = md[0],
        Xd = dd.nodeCount();
      for (Od.setNode(Rd, {}); YO(Od, dd) < Xd && (Wd = gO(Od, dd), Wd);) Fd = Od.hasNode(Wd.v) ? TO(dd, Wd) : -TO(dd, Wd), wO(Od, dd, Fd);
      return Od
    };

    function YO(dd, Od) {
      return dd.nodes().forEach((function md(Wd) {
        let Fd = Od.nodeEdges(Wd);
        Fd && Fd.forEach((Fd => {
          let Rd = Fd.v,
            Xd = Wd === Rd ? Fd.w : Rd;
          !dd.hasNode(Xd) && !TO(Od, Fd) && (dd.setNode(Xd, {}), dd.setEdge(Wd, Xd, {}), md(Xd))
        }))
      })), dd.nodeCount()
    }

    function gO(dd, Od) {
      return Od.edges().reduce(((md, Wd) => {
        let Fd = Number.POSITIVE_INFINITY;
        return dd.hasNode(Wd.v) !== dd.hasNode(Wd.w) && (Fd = TO(Od, Wd)), Fd < md[0] ? [Fd, Wd] : md
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function wO(dd, Od, md) {
      dd.nodes().forEach((dd => Od.node(dd).rank += md))
    }
    var {
      preorder: aO,
      postorder: EO
    } = bd, JO = UO;

    function UO(dd) {
      dd = function(dd) {
        let Od = (new cd).setGraph(dd.graph());
        return dd.nodes().forEach((md => Od.setNode(md, dd.node(md)))), dd.edges().forEach((md => {
          let Wd = Od.edge(md.v, md.w) || {
              weight: 0,
              minlen: 1
            },
            Fd = dd.edge(md);
          Od.setEdge(md.v, md.w, {
            weight: Wd.weight + Fd.weight,
            minlen: Math.max(Wd.minlen, Fd.minlen)
          })
        })), Od
      }(dd), bO(dd);
      let Od, md, Wd = pO(dd);
      for (SO(Wd), xO(Wd, dd); Od = uO(Wd);) md = VO(Wd, dd, Od), iO(Wd, dd, Od, md)
    }

    function xO(dd, Od) {
      let md = EO(dd, dd.nodes());
      md = md.slice(0, md.length - 1), md.forEach((md => function(dd, Od, md) {
        let Wd = dd.node(md).parent,
          Fd = dd.edge(md, Wd);
        Fd.cutvalue = BO(dd, Od, md)
      }(dd, Od, md)))
    }

    function BO(dd, Od, md) {
      let Wd = dd.node(md).parent,
        Fd = !0,
        Rd = Od.edge(md, Wd),
        Xd = 0;
      Rd || (Fd = !1, Rd = Od.edge(Wd, md)), Xd = Rd.weight;
      let Kd = Od.nodeEdges(md);
      return Kd && Kd.forEach((Rd => {
        let Kd = Rd.v === md,
          hd = Kd ? Rd.w : Rd.v;
        if (hd !== Wd) {
          let Wd = Kd === Fd,
            vd = Od.edge(Rd).weight;
          if (Xd += Wd ? vd : -vd, function(dd, Od, md) {
              return dd.hasEdge(Od, md)
            }(dd, md, hd)) {
            let Od = dd.edge(md, hd).cutvalue;
            Xd += Wd ? -Od : Od
          }
        }
      })), Xd
    }

    function SO(dd, Od) {
      arguments.length < 2 && (Od = dd.nodes()[0]), sO(dd, {}, 1, Od)
    }

    function sO(dd, Od, md, Wd, Fd) {
      let Rd = md,
        Xd = dd.node(Wd);
      Od[Wd] = !0;
      let Kd = dd.neighbors(Wd);
      return Kd && Kd.forEach((Fd => {
        Object.hasOwn(Od, Fd) || (md = sO(dd, Od, md, Fd, Wd))
      })), Xd.low = Rd, Xd.lim = md++, Fd ? Xd.parent = Fd : delete Xd.parent, md
    }

    function uO(dd) {
      return dd.edges().find((Od => dd.edge(Od).cutvalue < 0))
    }

    function VO(dd, Od, md) {
      let Wd = md.v,
        Fd = md.w;
      Od.hasEdge(Wd, Fd) || (Wd = md.w, Fd = md.v);
      let Rd = dd.node(Wd),
        Xd = dd.node(Fd),
        Kd = Rd,
        hd = !1;
      return Rd.lim > Xd.lim && (Kd = Xd, hd = !0), Od.edges().filter((Od => hd === AO(dd, dd.node(Od.v), Kd) && hd !== AO(dd, dd.node(Od.w), Kd))).reduce(((dd, md) => TO(Od, md) < TO(Od, dd) ? md : dd))
    }

    function iO(dd, Od, md, Wd) {
      let Fd = md.v,
        Rd = md.w;
      dd.removeEdge(Fd, Rd), dd.setEdge(Wd.v, Wd.w, {}), SO(dd), xO(dd, Od),
        function(dd, Od) {
          let md = dd.nodes().find((Od => !dd.node(Od).parent));
          if (!md) return;
          let Wd = aO(dd, [md]);
          Wd = Wd.slice(1), Wd.forEach((md => {
            let Wd = dd.node(md).parent,
              Fd = Od.edge(md, Wd),
              Rd = !1;
            Fd || (Fd = Od.edge(Wd, md), Rd = !0), Od.node(md).rank = Od.node(Wd).rank + (Rd ? Fd.minlen : -Fd.minlen)
          }))
        }(dd, Od)
    }

    function AO(dd, Od, md) {
      return md.low <= Od.lim && Od.lim <= md.lim
    }
    UO.initLowLimValues = SO, UO.initCutValues = xO, UO.calcCutValue = BO, UO.leaveEdge = uO, UO.enterEdge = VO, UO.exchangeEdges = iO;
    var rO = function(dd) {
      let Od = dd.graph().ranker;
      if ("function" == typeof Od) return Od(dd);
      switch (Od) {
        case "network-simplex":
        default:
          nO(dd);
          break;
        case "tight-tree":
          ! function(dd) {
            bO(dd), pO(dd)
          }(dd);
          break;
        case "longest-path":
          GO(dd);
        case "none":
      }
    };
    var GO = bO;

    function nO(dd) {
      JO(dd)
    }
    var LO = function(dd) {
      let Od = function(dd) {
          let Od = {},
            md = 0;

          function Wd(Fd) {
            let Rd = md;
            dd.children(Fd).forEach(Wd), Od[Fd] = {
              low: Rd,
              lim: md++
            }
          }
          return dd.children(RO).forEach(Wd), Od
        }(dd),
        md = dd.graph();
      if (!Array.isArray(md.dummyChains)) return;
      md.dummyChains.forEach((md => {
        let Wd = dd.node(md),
          Fd = Wd.edgeObj,
          Rd = function(dd, Od, md, Wd) {
            let Fd, Rd = [],
              Xd = [],
              Kd = Math.min(Od[md].low, Od[Wd].low),
              hd = Math.max(Od[md].lim, Od[Wd].lim);
            Fd = md;
            do {
              Fd = dd.parent(Fd), Rd.push(Fd)
            } while (Fd && (Od[Fd].low > Kd || hd > Od[Fd].lim));
            let vd = Fd,
              Qd = Wd;
            for (;
              (Qd = dd.parent(Qd)) !== vd;) Xd.push(Qd);
            return {
              path: Rd.concat(Xd.reverse()),
              lca: vd
            }
          }(dd, Od, Fd.v, Fd.w),
          Xd = Rd.path,
          Kd = Rd.lca,
          hd = 0,
          vd = Xd[hd],
          Qd = !0;
        for (; md !== Fd.w;) {
          if (Wd = dd.node(md), Qd) {
            for (;
              (vd = Xd[hd]) !== Kd && dd.node(vd).maxRank < Wd.rank;) hd++;
            vd === Kd && (Qd = !1)
          }
          if (!Qd) {
            for (; hd < Xd.length - 1 && dd.node(Xd[hd + 1]).minRank <= Wd.rank;) hd++;
            vd = Xd[hd]
          }
          void 0 !== vd && dd.setParent(md, vd), md = dd.successors(md)[0]
        }
      }))
    };

    function PO(dd) {
      let Od = jd(dd, "root", {}, "_root"),
        md = function(dd) {
          let Od = {};

          function md(Wd, Fd) {
            let Rd = dd.children(Wd);
            Rd && Rd.length && Rd.forEach((dd => md(dd, Fd + 1))), Od[Wd] = Fd
          }
          return dd.children(RO).forEach((dd => md(dd, 1))), Od
        }(dd),
        Wd = Object.values(md),
        Fd = Zd(Math.max, Wd) - 1,
        Rd = 2 * Fd + 1;
      dd.graph().nestingRoot = Od, dd.edges().forEach((Od => dd.edge(Od).minlen *= Rd));
      let Xd = function(dd) {
        return dd.edges().reduce(((Od, md) => Od + dd.edge(md).weight), 0)
      }(dd) + 1;
      dd.children(RO).forEach((Wd => {
        zO(dd, Od, Rd, Xd, Fd, md, Wd)
      })), dd.graph().nodeRankFactor = Rd
    }

    function zO(dd, Od, md, Wd, Fd, Rd, Xd) {
      var Kd;
      let hd = dd.children(Xd);
      if (!hd.length) return void(Xd !== Od && dd.setEdge(Od, Xd, {
        weight: 0,
        minlen: md
      }));
      let vd = ld(dd, "_bt"),
        Qd = ld(dd, "_bb"),
        td = dd.node(Xd);
      dd.setParent(vd, Xd), td.borderTop = vd, dd.setParent(Qd, Xd), td.borderBottom = Qd, hd.forEach((Kd => {
        var hd;
        zO(dd, Od, md, Wd, Fd, Rd, Kd);
        let td = dd.node(Kd),
          od = td.borderTop ? td.borderTop : Kd,
          Nd = td.borderBottom ? td.borderBottom : Kd,
          qd = td.borderTop ? Wd : 2 * Wd,
          Hd = od !== Nd ? 1 : Fd - (null != (hd = Rd[Xd]) ? hd : 0) + 1;
        dd.setEdge(vd, od, {
          weight: qd,
          minlen: Hd,
          nestingEdge: !0
        }), dd.setEdge(Nd, Qd, {
          weight: qd,
          minlen: Hd,
          nestingEdge: !0
        })
      })), dd.parent(Xd) || dd.setEdge(Od, vd, {
        weight: 0,
        minlen: Fd + (null != (Kd = Rd[Xd]) ? Kd : 0)
      })
    }
    var cO = function(dd) {
      dd.children(RO).forEach((function Od(md) {
        let Wd = dd.children(md),
          Fd = dd.node(md);
        if (Wd.length && Wd.forEach(Od), Fd && Object.hasOwn(Fd, "minRank")) {
          Fd.borderLeft = [], Fd.borderRight = [];
          for (let Od = Fd.minRank, Wd = Fd.maxRank + 1; Od < Wd; ++Od) jO(dd, "borderLeft", "_bl", md, Fd, Od), jO(dd, "borderRight", "_br", md, Fd, Od)
        }
      }))
    };

    function jO(dd, Od, md, Wd, Fd, Rd) {
      let Xd = {
          width: 0,
          height: 0,
          rank: Rd,
          borderType: Od
        },
        Kd = Fd[Od][Rd - 1],
        hd = jd(dd, "border", Xd, md);
      Fd[Od][Rd] = hd, dd.setParent(hd, Wd), Kd && dd.setEdge(Kd, hd, {
        weight: 1
      })
    }

    function DO(dd) {
      var Od;
      let md = null == (Od = dd.graph().rankdir) ? void 0 : Od.toLowerCase();
      ("bt" === md || "rl" === md) && function(dd) {
        dd.nodes().forEach((Od => lO(dd.node(Od)))), dd.edges().forEach((Od => {
          var md;
          let Wd = dd.edge(Od);
          null == (md = Wd.points) || md.forEach(lO), Object.hasOwn(Wd, "y") && lO(Wd)
        }))
      }(dd), ("lr" === md || "rl" === md) && (function(dd) {
        dd.nodes().forEach((Od => CO(dd.node(Od)))), dd.edges().forEach((Od => {
          var md;
          let Wd = dd.edge(Od);
          null == (md = Wd.points) || md.forEach(CO), Object.hasOwn(Wd, "x") && CO(Wd)
        }))
      }(dd), eO(dd))
    }

    function eO(dd) {
      dd.nodes().forEach((Od => IO(dd.node(Od)))), dd.edges().forEach((Od => IO(dd.edge(Od))))
    }

    function IO(dd) {
      let Od = dd.width;
      dd.width = dd.height, dd.height = Od
    }

    function lO(dd) {
      dd.y = -dd.y
    }

    function CO(dd) {
      let Od = dd.x;
      dd.x = dd.y, dd.y = Od
    }

    function ZO(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        md = {},
        Wd = dd.nodes().filter((Od => !dd.children(Od).length)),
        Fd = Wd.map((Od => dd.node(Od).rank)),
        Rd = mO(Zd(Math.max, Fd) + 1).map((() => []));
      return Wd.sort(((Od, md) => dd.node(Od).rank - dd.node(md).rank)).forEach((function Wd(Fd) {
        if (md[Fd]) return;
        md[Fd] = !0;
        let Xd = dd.node(Fd);
        Rd[Xd.rank].push(Fd);
        let Kd = dd.successors(Fd);
        Kd && [...Kd].sort(((md, Wd) => function(md, Wd) {
          let Fd = dd.node(md),
            Rd = dd.node(Wd);
          return XO(Od, Fd, Rd)
        }(md, Wd))).forEach(Wd)
      })), Rd
    }

    function kO(dd, Od) {
      let md = 0;
      for (let Wd = 1; Wd < Od.length; ++Wd) md += fO(dd, Od[Wd - 1], Od[Wd]);
      return md
    }

    function fO(dd, Od, md) {
      let Wd = function(dd, Od) {
          return dd.reduce(((dd, md, Wd) => (dd[md] = Od[Wd], dd)), {})
        }(md, md.map(((dd, Od) => Od))),
        Fd = Od.flatMap((Od => {
          let md = dd.outEdges(Od);
          return md ? md.map((Od => ({
            pos: Wd[Od.w],
            weight: dd.edge(Od).weight
          }))).sort(((dd, Od) => dd.pos - Od.pos)) : []
        })),
        Rd = 1;
      for (; Rd < md.length;) Rd <<= 1;
      let Xd = 2 * Rd - 1;
      Rd -= 1;
      let Kd = new Array(Xd).fill(0),
        hd = 0;
      return Fd.forEach((dd => {
        let Od = dd.pos + Rd;
        Kd[Od] += dd.weight;
        let md = 0;
        for (; Od > 0;) Od % 2 && (md += Kd[Od + 1]), Od = Od - 1 >> 1, Kd[Od] += dd.weight;
        hd += dd.weight * md
      })), hd
    }

    function MO(dd, Od) {
      let md = {};
      return dd.forEach(((dd, Od) => {
          let Wd = {
            indegree: 0,
            in: [],
            out: [],
            vs: [dd.v],
            i: Od
          };
          void 0 !== dd.barycenter && (Wd.barycenter = dd.barycenter, Wd.weight = dd.weight), md[dd.v] = Wd
        })), Od.edges().forEach((dd => {
          let Od = md[dd.v],
            Wd = md[dd.w];
          void 0 !== Od && void 0 !== Wd && (Wd.indegree++, Od.out.push(Wd))
        })),
        function(dd) {
          let Od = [];

          function md(dd) {
            return Od => {
              Od.merged || (void 0 === Od.barycenter || void 0 === dd.barycenter || Od.barycenter >= dd.barycenter) && function(dd, Od) {
                let md = 0,
                  Wd = 0;
                dd.weight && (md += dd.barycenter * dd.weight, Wd += dd.weight), Od.weight && (md += Od.barycenter * Od.weight, Wd += Od.weight), dd.vs = Od.vs.concat(dd.vs), dd.barycenter = md / Wd, dd.weight = Wd, dd.i = Math.min(Od.i, dd.i), Od.merged = !0
              }(dd, Od)
            }
          }

          function Wd(Od) {
            return md => {
              md.in.push(Od), 0 === --md.indegree && dd.push(md)
            }
          }
          for (; dd.length;) {
            let Fd = dd.pop();
            Od.push(Fd), Fd.in.reverse().forEach(md(Fd)), Fd.out.forEach(Wd(Fd))
          }
          return Od.filter((dd => !dd.merged)).map((dd => WO(dd, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(md).filter((dd => !dd.indegree)))
    }

    function dm(dd, Od, md, Wd, Fd) {
      let Rd = {},
        Xd = null,
        Kd = null,
        hd = Fd;
      "boolean" == typeof Od ? (hd = Od, Rd = {}) : Od && (Rd = Od, Xd = null != md ? md : null, Kd = null != Wd ? Wd : null);
      let vd = function(dd, Od) {
          let md = {
            lhs: [],
            rhs: []
          };
          return dd.forEach((dd => {
            Od(dd) ? md.lhs.push(dd) : md.rhs.push(dd)
          })), md
        }(dd, (dd => Object.hasOwn(dd, "barycenter"))),
        Qd = vd.lhs,
        td = vd.rhs.sort(((dd, Od) => Od.i - dd.i)),
        od = [],
        Nd = 0,
        qd = 0,
        Hd = 0;
      Qd.sort(function(dd, Od, md) {
        return (Wd, Fd) => {
          if (Wd.barycenter < Fd.barycenter) return -1;
          if (Wd.barycenter > Fd.barycenter) return 1;
          if (dd && ("string" == typeof Wd.vs[0] || "string" == typeof Fd.vs[0])) {
            let md = dd.node(Wd.vs[0]),
              Rd = dd.node(Fd.vs[0]),
              Xd = XO(Od, md, Rd);
            if (0 !== Xd) return Xd
          }
          return md ? Fd.i - Wd.i : Wd.i - Fd.i
        }
      }(Kd, Xd, !!hd));
      for (let [bd, Td] of Object.entries(Rd)) {
        let dd = Qd.findIndex((dd => dd.vs[0] === bd));
        Qd.splice(dd + 1, 0, Td)
      }
      Hd = Om(od, td, Hd), Qd.forEach((dd => {
        Hd += dd.vs.length, od.push(dd.vs), Nd += dd.barycenter * dd.weight, qd += dd.weight, Hd = Om(od, td, Hd)
      }));
      let yd = {
        vs: od.flat(1)
      };
      return qd && (yd.barycenter = Nd / qd, yd.weight = qd), yd
    }

    function Om(dd, Od, md) {
      let Wd;
      for (; Od.length && (Wd = Od[Od.length - 1]).i <= md;) Od.pop(), dd.push(Wd.vs), md++;
      return md
    }

    function mm(dd, Od, md, Wd, Fd) {
      var Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd;
      let yd = null,
        bd = Fd;
      "boolean" == typeof Wd ? (bd = Wd, yd = null) : void 0 !== Wd && (yd = Wd);
      let Td = dd.children(Od),
        pd = dd.node(Od),
        Yd = pd ? pd.borderLeft : void 0,
        gd = pd ? pd.borderRight : void 0,
        wd = {};
      Yd && (Td = Td.filter((dd => dd !== Yd && dd !== gd)));
      let Ed = function(dd) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Od => {
          let md = dd.inEdges(Od);
          if (!md || !md.length) return {
            v: Od
          };
          {
            let Wd = md.reduce(((Od, md) => {
              let Wd = dd.edge(md),
                Fd = dd.node(md.v);
              return {
                sum: Od.sum + Wd.weight * Fd.order,
                weight: Od.weight + Wd.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Od,
              barycenter: Wd.sum / Wd.weight,
              weight: Wd.weight
            }
          }
        }))
      }(dd, Td);
      Ed.forEach((Od => {
        if (dd.children(Od.v).length) {
          let {
            result: Wd
          } = mm(dd, Od.v, md, yd, bd);
          wd[Od.v] = Wd, Object.hasOwn(Wd, "barycenter") && function(dd, Od) {
            void 0 !== dd.barycenter ? (dd.barycenter = (dd.barycenter * dd.weight + Od.barycenter * Od.weight) / (dd.weight + Od.weight), dd.weight += Od.weight) : (dd.barycenter = Od.barycenter, dd.weight = Od.weight)
          }(Od, Wd)
        }
      }));
      let Jd = MO(Ed, md);
      ! function(dd, Od) {
        dd.forEach((dd => {
          dd.vs = dd.vs.flatMap((dd => Od[dd] ? Od[dd].vs : dd))
        }))
      }(Jd, wd);
      let Ud = {},
        xd = !1;
      for (let Sd = 0; Sd < Jd.length; Sd++)
        for (let Od = Sd + 1; Od < Jd.length; Od++)
          if (Jd[Sd] && Jd[Od] && null != (Rd = Jd[Sd]) && Rd.barycenter && null != (Xd = Jd[Od]) && Xd.barycenter && (null == (Kd = Jd[Sd]) ? void 0 : Kd.barycenter) === Jd[Od].barycenter) {
            let md = null != (vd = null == (hd = Jd[Sd]) ? void 0 : hd.vs[0]) ? vd : "",
              Wd = null != (td = null == (Qd = Jd[Od]) ? void 0 : Qd.vs[0]) ? td : "",
              Fd = dd.node(md),
              Rd = dd.node(Wd);
            if ("edge" === Fd.dummy && "edge" === Rd.dummy && (null == (od = Fd.edgeObj) ? void 0 : od.v) === (null == (Nd = Rd.edgeObj) ? void 0 : Nd.v) && (null == (qd = Fd.edgeObj) ? void 0 : qd.w) === (null == (Hd = Rd.edgeObj) ? void 0 : Hd.w)) {
              if (Fd.edgeLabel.reversed) {
                Ud[Wd] = Jd[Sd], Jd.splice(Sd, 1), Sd--;
                break
              }
              Ud[md] = Jd[Od], Jd.splice(Od, 1), Od--
            } else xd = !0
          } let Bd = dm(Jd, Ud, yd, dd, bd);
      if (Yd && gd) {
        Bd.vs = [Yd, Bd.vs, gd].flat(1);
        let Od = dd.predecessors(Yd);
        if (Od && Od.length) {
          let md = dd.node(Od[0]),
            Wd = dd.predecessors(gd),
            Fd = dd.node(Wd[0]);
          Object.hasOwn(Bd, "barycenter") || (Bd.barycenter = 0, Bd.weight = 0), Bd.barycenter = (Bd.barycenter * Bd.weight + md.order + Fd.order) / (Bd.weight + 2), Bd.weight += 2
        }
      }
      return Object.defineProperty(Bd, "result", {
        value: Bd,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Bd, "usedBias", {
        value: xd,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Bd
    }

    function Wm(dd, Od, md, Wd) {
      Wd || (Wd = dd.nodes());
      let Fd = function(dd) {
          let Od;
          for (; dd.hasNode(Od = OO("_root")););
          return Od
        }(dd),
        Rd = new cd({
          compound: !0
        }).setGraph({
          root: Fd
        }).setDefaultNodeLabel((Od => dd.node(Od)));
      return Wd.forEach((Wd => {
        let Xd = dd.node(Wd),
          Kd = dd.parent(Wd);
        if (Xd.rank === Od || Xd.minRank <= Od && Od <= Xd.maxRank) {
          Rd.setNode(Wd), Rd.setParent(Wd, Kd || Fd);
          let hd = dd[md](Wd);
          hd && hd.forEach((Od => {
            let md = Od.v === Wd ? Od.w : Od.v,
              Fd = Rd.edge(md, Wd),
              Xd = void 0 !== Fd ? Fd.weight : 0;
            Rd.setEdge(md, Wd, {
              weight: dd.edge(Od).weight + Xd
            })
          })), Object.hasOwn(Xd, "minRank") && Rd.setNode(Wd, {
            borderLeft: Xd.borderLeft[Od],
            borderRight: Xd.borderRight[Od]
          })
        }
      })), Rd
    }

    function Fm(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Od.customOrder) return void Od.customOrder(dd, Fm);
      let Wd = kd(dd),
        Fd = Rm(dd, mO(1, Wd + 1), "inEdges"),
        Rd = Rm(dd, mO(Wd - 1, -1, -1), "outEdges"),
        Xd = ZO(dd, md);
      if (Km(dd, Xd), Od.disableOptimalOrderHeuristic) return;
      let Kd, hd = Number.POSITIVE_INFINITY,
        vd = Od.constraints || [];
      for (let Qd = 0, td = 0; td < 4; ++Qd, ++td) {
        Xm(Qd % 2 ? Fd : Rd, Qd % 4 >= 2, vd, md), Xd = Id(dd);
        let Od = kO(dd, Xd);
        Od < hd ? (td = 0, Kd = Object.assign({}, Xd), hd = Od) : Od === hd && (Kd = structuredClone(Xd))
      }
      Km(dd, Kd)
    }

    function Rm(dd, Od, md) {
      let Wd = new Map,
        Fd = (dd, Od) => {
          Wd.has(dd) || Wd.set(dd, []), Wd.get(dd).push(Od)
        };
      for (let Rd of dd.nodes()) {
        let Od = dd.node(Rd);
        if ("number" == typeof Od.rank && Fd(Od.rank, Rd), "number" == typeof Od.minRank && "number" == typeof Od.maxRank)
          for (let dd = Od.minRank; dd <= Od.maxRank; dd++) dd !== Od.rank && Fd(dd, Rd)
      }
      return Od.map((function(Od) {
        return Wm(dd, Od, md, Wd.get(Od) || [])
      }))
    }

    function Xm(dd, Od, md, Wd) {
      let Fd = !0,
        Rd = new cd;
      dd.forEach((function(dd) {
        md.forEach((dd => Rd.setEdge(dd.left, dd.right)));
        let Xd = dd.graph().root,
          {
            result: Kd,
            usedBias: hd
          } = mm(dd, Xd, Rd, Wd, Fd);
        Od && hd && (Fd = !Fd), Kd.vs.forEach(((Od, md) => dd.node(Od).order = md)),
          function(dd, Od, md) {
            let Wd, Fd = {};
            md.forEach((md => {
              let Rd, Xd, Kd = dd.parent(md);
              for (; Kd;) {
                if (Rd = dd.parent(Kd), Rd ? (Xd = Fd[Rd], Fd[Rd] = Kd) : (Xd = Wd, Wd = Kd), Xd && Xd !== Kd) return void Od.setEdge(Xd, Kd);
                Kd = Rd
              }
            }))
          }(dd, Rd, Kd.vs)
      }))
    }

    function Km(dd, Od) {
      Object.values(Od).forEach((Od => Od.forEach(((Od, md) => dd.node(Od).order = md))))
    }

    function hm(dd, Od, md) {
      if (Od > md) {
        let dd = Od;
        Od = md, md = dd
      }
      let Wd = dd[Od];
      Wd || (dd[Od] = Wd = {}), Wd[md] = !0
    }

    function Qm(dd, Od, md) {
      if (Od > md) {
        let dd = Od;
        Od = md, md = dd
      }
      let Wd = dd[Od];
      return void 0 !== Wd && Object.hasOwn(Wd, md)
    }

    function tm(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Rd = {},
        Xd = function(dd, Od, md, Wd) {
          let Fd = new cd,
            Rd = dd.graph(),
            Xd = function(dd, Od, md) {
              return (Wd, Fd, Rd) => {
                let Xd, Kd = Wd.node(Fd),
                  hd = Wd.node(Rd),
                  vd = 0;
                if (vd += Kd.width / 2, Object.hasOwn(Kd, "labelpos")) switch (Kd.labelpos.toLowerCase()) {
                  case "l":
                    Xd = -Kd.width / 2;
                    break;
                  case "r":
                    Xd = Kd.width / 2
                }
                if (Xd && (vd += md ? Xd : -Xd), Xd = void 0, vd += (Kd.dummy ? Od : dd) / 2, vd += (hd.dummy ? Od : dd) / 2, vd += hd.width / 2, Object.hasOwn(hd, "labelpos")) switch (hd.labelpos.toLowerCase()) {
                  case "l":
                    Xd = hd.width / 2;
                    break;
                  case "r":
                    Xd = -hd.width / 2
                }
                return Xd && (vd += md ? Xd : -Xd), vd
              }
            }(Rd.nodesep, Rd.edgesep, Wd);
          return Od.forEach((Od => {
            let Wd;
            Od.forEach((Od => {
              let Rd = md[Od];
              if (void 0 !== Rd) {
                if (Fd.setNode(Rd), void 0 !== Wd) {
                  let Kd = md[Wd];
                  if (void 0 !== Kd) {
                    let md = Fd.edge(Kd, Rd);
                    Fd.setEdge(Kd, Rd, Math.max(Xd(dd, Od, Wd), md || 0))
                  }
                }
                Wd = Od
              }
            }))
          })), Fd
        }(dd, Od, md, Fd),
        Kd = Fd ? "borderLeft" : "borderRight";

      function hd(dd, Od) {
        let md = Xd.nodes().slice(),
          Wd = {},
          Fd = md.pop();
        for (; Fd;) {
          if (Wd[Fd]) dd(Fd);
          else {
            Wd[Fd] = !0, md.push(Fd);
            for (let dd of Od(Fd)) md.push(dd)
          }
          Fd = md.pop()
        }
      }
      return hd((function(dd) {
        let Od = Xd.inEdges(dd);
        Rd[dd] = Od ? Od.reduce(((dd, Od) => {
          var md;
          let Wd = null != (md = Rd[Od.v]) ? md : 0,
            Fd = Xd.edge(Od);
          return Math.max(dd, Wd + (void 0 !== Fd ? Fd : 0))
        }), 0) : 0
      }), (function(dd) {
        return Xd.predecessors(dd) || []
      })), hd((function(Od) {
        let md = Xd.outEdges(Od),
          Wd = Number.POSITIVE_INFINITY;
        md && (Wd = md.reduce(((dd, Od) => {
          let md = Rd[Od.w],
            Wd = Xd.edge(Od);
          return Math.min(dd, (void 0 !== md ? md : 0) - (void 0 !== Wd ? Wd : 0))
        }), Number.POSITIVE_INFINITY));
        let Fd = dd.node(Od);
        Wd !== Number.POSITIVE_INFINITY && Fd.borderType !== Kd && (Rd[Od] = Math.max(void 0 !== Rd[Od] ? Rd[Od] : 0, Wd))
      }), (function(dd) {
        return Xd.successors(dd) || []
      })), Object.keys(Wd).forEach((dd => {
        var Od;
        let Wd = md[dd];
        void 0 !== Wd && (Rd[dd] = null != (Od = Rd[Wd]) ? Od : 0)
      })), Rd
    }

    function om(dd, Od) {
      let md, Wd = Id(dd),
        Fd = Object.assign(function(dd, Od) {
          let md = {};
          return Od.length && Od.reduce((function(Od, Wd) {
            let Fd = 0,
              Rd = 0,
              Xd = Od.length,
              Kd = Wd[Wd.length - 1];
            return Wd.forEach(((Od, hd) => {
              let vd = function(dd, Od) {
                  if (dd.node(Od).dummy) {
                    let md = dd.predecessors(Od);
                    if (md) return md.find((Od => dd.node(Od).dummy))
                  }
                }(dd, Od),
                Qd = vd ? dd.node(vd).order : Xd;
              (vd || Od === Kd) && (Wd.slice(Rd, hd + 1).forEach((Od => {
                let Wd = dd.predecessors(Od);
                Wd && Wd.forEach((Wd => {
                  let Rd = dd.node(Wd),
                    Xd = Rd.order;
                  (Xd < Fd || Qd < Xd) && (!Rd.dummy || !dd.node(Od).dummy) && hm(md, Wd, Od)
                }))
              })), Rd = hd + 1, Fd = Qd)
            })), Wd
          })), md
        }(dd, Wd), function(dd, Od) {
          let md = {};

          function Wd(Od, Wd, Fd, Rd, Xd) {
            mO(Wd, Fd).forEach((Wd => {
              let Fd = Od[Wd];
              if (void 0 !== Fd && dd.node(Fd).dummy) {
                let Od = dd.predecessors(Fd);
                Od && Od.forEach((Od => {
                  if (void 0 === Od) return;
                  let Wd = dd.node(Od);
                  Wd.dummy && (Wd.order < Rd || Wd.order > Xd) && hm(md, Od, Fd)
                }))
              }
            }))
          }
          return Od.length && Od.reduce((function(Od, md) {
            let Fd = -1,
              Rd = -1,
              Xd = 0;
            return md.forEach(((Kd, hd) => {
              if ("border" === dd.node(Kd).dummy) {
                let Od = dd.predecessors(Kd);
                if (Od && Od.length) {
                  let Kd = Od[0];
                  if (void 0 === Kd) return;
                  Rd = dd.node(Kd).order, Wd(md, Xd, hd, Fd, Rd), Xd = hd, Fd = Rd
                }
              }
              Wd(md, Xd, md.length, Rd, Od.length)
            })), md
          })), md
        }(dd, Wd)),
        Rd = {};
      ["u", "d"].forEach((Xd => {
        md = "u" === Xd ? Wd : Object.values(Wd).reverse(), ["l", "r"].forEach((Wd => {
          "r" === Wd && (md = md.map((dd => Object.values(dd).reverse())));
          let Kd = function(dd, Od, md, Wd, Fd) {
              let Rd = {},
                Xd = {},
                Kd = {};
              return Od.forEach((dd => {
                dd.forEach(((dd, Od) => {
                  Rd[dd] = dd, Xd[dd] = dd, Kd[dd] = Od
                }))
              })), Od.forEach((Od => {
                let hd = -1,
                  vd = -1,
                  Qd = !1,
                  td = Od,
                  od = Od.findIndex((Od => (null == Fd ? void 0 : Fd.includes(Od)) || Nm(Od, dd, Fd)));
                od > 0 && (td = [Od[od], ...Od.slice(0, od), ...Od.slice(od + 1)], Qd = !0), td.forEach((Od => {
                  var td;
                  let od = Wd(Od);
                  if (od && od.length) {
                    null != Fd && Fd.includes(Od) && (od = od.filter((Od => Nm(Od, dd, Fd))));
                    let Wd = od.sort(((dd, Od) => {
                        let md = Kd[dd],
                          Wd = Kd[Od];
                        return (void 0 !== md ? md : 0) - (void 0 !== Wd ? Wd : 0)
                      })),
                      Nd = (Wd.length - 1) / 2;
                    for (let dd = Math.floor(Nd), Fd = Math.ceil(Nd); dd <= Fd; ++dd) {
                      let Fd = Wd[dd];
                      if (void 0 === Fd) continue;
                      let od = Kd[Fd];
                      if (void 0 !== od && Xd[Od] === Od && hd < od && Kd[Fd] !== vd && !Qm(md, Od, Fd)) {
                        let dd = Rd[Fd];
                        void 0 !== dd && (Xd[Fd] = Od, Xd[Od] = Rd[Od] = dd, hd = od, Qd && (hd = -1, vd = null != (td = Kd[Fd]) ? td : -1, Qd = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Rd,
                align: Xd
              }
            }(dd, md, Fd, (Od => ("u" === Xd ? dd.predecessors(Od) : dd.successors(Od)) || []), Od),
            hd = tm(dd, md, Kd.root, Kd.align, "r" === Wd);
          "r" === Wd && (hd = FO(hd, (dd => -dd))), Rd[Xd + Wd] = hd
        }))
      }));
      let Xd = function(dd, Od) {
        return Object.values(Od).reduce(((Od, md) => {
          let Wd = Number.NEGATIVE_INFINITY,
            Fd = Number.POSITIVE_INFINITY;
          Object.entries(md).forEach((Od => {
            let [md, Rd] = Od, Xd = function(dd, Od) {
              return dd.node(Od).width
            }(dd, md) / 2;
            Wd = Math.max(Rd + Xd, Wd), Fd = Math.min(Rd - Xd, Fd)
          }));
          let Rd = Wd - Fd;
          return Rd < Od[0] && (Od = [Rd, md]), Od
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(dd, Rd);
      return function(dd, Od) {
          let md = Object.values(Od),
            Wd = Zd(Math.min, md),
            Fd = Zd(Math.max, md);
          ["u", "d"].forEach((md => {
            ["l", "r"].forEach((Rd => {
              let Xd = md + Rd,
                Kd = dd[Xd];
              if (!Kd || Kd === Od) return;
              let hd = Object.values(Kd),
                vd = Wd - Zd(Math.min, hd);
              "l" !== Rd && (vd = Fd - Zd(Math.max, hd)), vd && (dd[Xd] = FO(Kd, (dd => dd + vd)))
            }))
          }))
        }(Rd, Xd),
        function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            md = dd.ul;
          return md ? FO(md, ((md, Wd) => {
            var Fd, Rd;
            if (Od) {
              let md = Od.toLowerCase(),
                Fd = dd[md];
              if (Fd && void 0 !== Fd[Wd]) return Fd[Wd]
            }
            let Xd = Object.values(dd).map((dd => {
              let Od = dd[Wd];
              return void 0 !== Od ? Od : 0
            })).sort(((dd, Od) => dd - Od));
            return ((null != (Fd = Xd[1]) ? Fd : 0) + (null != (Rd = Xd[2]) ? Rd : 0)) / 2
          })) : {}
        }(Rd, dd.graph().align)
    }

    function Nm(dd, Od, md) {
      var Wd;
      if (!md) return !1;
      let Fd = null == (Wd = Od.node(dd)) ? void 0 : Wd.edgeObj;
      if (!Fd || Od.node(dd).edgeLabel.reversed) return !1;
      let Rd = md.indexOf(null == Fd ? void 0 : Fd.v),
        Xd = md.indexOf(null == Fd ? void 0 : Fd.w);
      return -1 !== Rd && -1 !== Xd && Rd === (Xd + 1) % md.length || Rd === (Xd - 1) % md.length
    }

    function qm(dd, Od) {
      (function(dd) {
        let Od = Id(dd),
          md = dd.graph(),
          Wd = md.ranksep,
          Fd = md.rankalign,
          Rd = 0;
        Od.forEach((Od => {
          let md = Od.reduce(((Od, md) => {
            var Wd;
            let Fd = null != (Wd = dd.node(md).height) ? Wd : 0;
            return Od > Fd ? Od : Fd
          }), 0);
          Od.forEach((Od => {
            let Wd = dd.node(Od);
            Wd.y = "top" === Fd ? Rd + Wd.height / 2 : "bottom" === Fd ? Rd + md - Wd.height / 2 : Rd + md / 2
          })), Rd += md + Wd
        }))
      })(dd = Dd(dd)), Object.entries(om(dd, Od)).forEach((Od => {
        let [md, Wd] = Od;
        return dd.node(md).x = Wd
      }))
    }
    var Hm = new WeakMap;

    function ym(dd) {
      return Tm(dd, Md, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), dd
    }

    function bm(dd, Od, md) {
      let Wd = Od;
      for (; void 0 !== Wd;) {
        let Od = dd.parent(Wd);
        if (Od === md) return Wd;
        Wd = Od
      }
    }

    function Tm(dd, Od, md) {
      var Wd;
      let Fd = dd.nodes().filter((Od => dd.children(Od).length)),
        Rd = {};
      Fd.forEach((Wd => {
        let Fd = dd.node(Wd);
        if (Fd && Fd.rankdir) {
          let Xd = new cd({
            multigraph: !0,
            compound: !0
          });
          Xd.setGraph({
            rankdir: Fd.rankdir
          });
          let Kd = dd.children(Wd);
          Kd.forEach((Od => {
            let md = {
              ...dd.node(Od)
            };
            Xd.setNode(Od, md);
            let Fd = dd.parent(Od);
            Fd && Fd !== Wd && Kd.includes(Fd) && Xd.setParent(Od, Fd)
          }));
          let hd = new Set;
          dd.edges().forEach((Od => {
            let md = bm(dd, Od.v, Wd),
              Fd = bm(dd, Od.w, Wd);
            if (md && Fd && md !== Fd) {
              let Wd = `${md}\0${Fd}`;
              hd.has(Wd) || (hd.add(Wd), Xd.setEdge(md, Fd, {
                ...dd.edge(Od)
              }))
            }
          })), Tm(Xd, Od, md);
          let vd = Sm(Xd);
          pm(vd, Od, md, null), Ym(Xd, vd);
          let Qd = 1 / 0,
            td = 1 / 0,
            od = -1 / 0,
            Nd = -1 / 0;
          Xd.nodes().forEach((dd => {
            if (dd === Wd) return;
            let Od = Xd.node(dd);
            Od && "number" == typeof Od.x && "number" == typeof Od.y && "number" == typeof Od.width && "number" == typeof Od.height && (Qd = Math.min(Qd, Od.x - Od.width / 2), od = Math.max(od, Od.x + Od.width / 2), td = Math.min(td, Od.y - Od.height / 2), Nd = Math.max(Nd, Od.y + Od.height / 2))
          })), (!isFinite(Qd) || !isFinite(td) || !isFinite(od) || !isFinite(Nd)) && (Qd = td = 0, od = Nd = 0);
          let qd = od - Qd,
            Hd = Nd - td;
          Rd[Wd] = {
            minX: Qd,
            yW: td,
            maxX: od,
            bW: Nd,
            width: qd,
            height: Hd,
            offsetX: Qd,
            offsetY: td
          }, Fd._dagreClusterSubgraph = Xd
        }
      }));
      let Xd = [],
        Kd = new Map;
      Fd.forEach((Od => {
        let md = dd.node(Od);
        md && md.rankdir && Rd[Od] && Kd.set(Od, (dd.children(Od) || []).filter((dd => dd !== Od)))
      }));
      let hd = new Set([...Kd.values()].flat()),
        vd = new Map;
      Kd.forEach(((Od, md) => {
        hd.has(md) || vd.set(md, (Od => {
          let md = [],
            Wd = (dd.children(Od) || []).filter((dd => dd !== Od));
          for (; Wd.length > 0;) {
            let Od = Wd.shift();
            md.push(Od), (dd.children(Od) || []).filter((dd => dd !== Od)).forEach((dd => Wd.push(dd)))
          }
          return md
        })(md))
      }));
      let Qd = new Set([...vd.values()].flat()),
        td = dd => {
          for (let [Od, md] of vd)
            if (md.includes(dd)) return Od;
          return dd
        },
        od = [];
      dd.edges().forEach((Od => {
        (Qd.has(Od.v) || Qd.has(Od.w)) && od.push({
          edge: Od,
          label: dd.edge(Od)
        })
      }));
      let Nd = new Map;
      Qd.forEach((Od => {
        let md = dd.parent(Od);
        Nd.set(Od, "string" == typeof md ? md : void 0)
      })), vd.forEach(((Od, md) => {
        let Wd = dd.node(md),
          Fd = [];
        Od.forEach((Od => {
          let md = dd.node(Od);
          md && (Fd.push({
            id: Od,
            node: md,
            parent: Nd.get(Od)
          }), dd.removeNode(Od))
        }));
        let Kd = od.filter((dd => {
            let {
              edge: md
            } = dd;
            return Od.includes(md.v) || Od.includes(md.w)
          })),
          hd = Rd[md];
        Wd && (Xd.push({
          clusterId: md,
          subgraph: Wd._dagreClusterSubgraph,
          bounds: hd,
          children: Od,
          removedNodes: Fd,
          removedEdges: Kd
        }), Wd.width = hd.width, Wd.height = hd.height)
      }));
      let qd = new Set;
      od.forEach((Od => {
        let {
          edge: md,
          label: Wd
        } = Od, Fd = td(md.v), Rd = td(md.w);
        if (Fd !== Rd && dd.hasNode(Fd) && dd.hasNode(Rd)) {
          let Od = `${Fd}\0${Rd}`;
          qd.has(Od) || (qd.add(Od), dd.setEdge(Fd, Rd, {
            ...Wd,
            width: 0,
            height: 0
          }))
        }
      }));
      let Hd = Sm(dd),
        yd = pm(Hd, Od, md, null != (Wd = Hm.get(dd)) ? Wd : null);
      Hm.set(dd, yd), Ym(dd, Hd), qd.forEach((Od => {
        let md = Od.indexOf("\0"),
          Wd = Od.slice(0, md),
          Fd = Od.slice(md + 1);
        dd.hasEdge(Wd, Fd) && dd.removeEdge(Wd, Fd)
      })), Xd.forEach((Od => {
        let {
          clusterId: md,
          subgraph: Wd,
          bounds: Fd,
          removedNodes: Rd,
          removedEdges: Xd
        } = Od;
        var Kd, hd;
        let vd = dd.node(md),
          Qd = null != (Kd = null == vd ? void 0 : vd.x) ? Kd : 0,
          td = null != (hd = null == vd ? void 0 : vd.y) ? hd : 0,
          od = (Fd.minX + Fd.maxX) / 2,
          Nd = (Fd.yW + Fd.bW) / 2;
        Rd.forEach((Od => {
          let {
            id: md,
            node: Wd,
            parent: Fd
          } = Od;
          dd.setNode(md, Wd), void 0 !== Fd && dd.setParent(md, Fd)
        })), Xd.forEach((Od => {
          let {
            edge: md,
            label: Wd
          } = Od;
          dd.setEdge(md, Wd)
        })), Wd.nodes().forEach((Od => {
          if (Od === md) return;
          let Fd = Wd.node(Od),
            Rd = dd.node(Od);
          Rd && Fd && "number" == typeof Fd.x && "number" == typeof Fd.y && (Rd.x = Qd + (Fd.x - od), Rd.y = td + (Fd.y - Nd))
        })), delete vd._dagreClusterSubgraph
      })), Fd.forEach((Od => {
        var md, Wd;
        let Fd = dd.node(Od),
          Xd = Rd[Od];
        if (Fd && Fd.rankdir && Fd._dagreClusterSubgraph && Xd) {
          let Rd = Fd._dagreClusterSubgraph,
            Kd = null != (md = Fd.x) ? md : 0,
            hd = null != (Wd = Fd.y) ? Wd : 0,
            vd = (Xd.minX + Xd.maxX) / 2,
            Qd = (Xd.yW + Xd.bW) / 2;
          Rd.nodes().forEach((md => {
            if (md === Od) return;
            let Wd = Rd.node(md),
              Fd = dd.node(md);
            if (Fd && Wd && "number" == typeof Wd.x && "number" == typeof Wd.y) {
              let dd = Wd.x - vd,
                Od = Wd.y - Qd;
              Fd.x = Kd + dd, Fd.y = hd + Od
            }
          })), delete Fd._dagreClusterSubgraph
        }
      }))
    }

    function pm(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Fd, Rd;
      let Xd = !1 !== (null == md ? void 0 : md.useDynamic),
        Kd = Xd && null != (Fd = null == Wd ? void 0 : Wd.graph) ? Fd : null,
        hd = Xd && null != (Rd = null == Wd ? void 0 : Wd.rawNodes) ? Rd : null;
      Od("    makeSpaceForEdgeLabels", (() => function(dd) {
        let Od = dd.graph();
        Od.ranksep /= 2, dd.edges().forEach((md => {
          var Wd;
          let Fd = dd.edge(md);
          Fd.minlen *= 2, "c" !== (null != (Wd = Fd.labelpos) ? Wd : "r").toLowerCase() && ("TB" === Od.rankdir || "BT" === Od.rankdir ? Fd.width += Fd.labeloffset : Fd.height += Fd.labeloffset)
        }))
      }(dd))), Od("    removeSelfEdges", (() => function(dd) {
        dd.edges().forEach((Od => {
          if (Od.v === Od.w) {
            let md = dd.node(Od.v);
            md.selfEdges || (md.selfEdges = []), md.selfEdges.push({
              e: Od,
              label: dd.edge(Od)
            }), dd.removeEdge(Od)
          }
        }))
      }(dd))), Od("    acyclic", (() => HO(dd, Kd))), Od("    nestingGraph.run", (() => PO(dd))), Od("    rank", (() => rO(Dd(dd)))), Od("    injectEdgeLabelProxies", (() => function(dd) {
        dd.edges().forEach((Od => {
          let md = dd.edge(Od);
          if (md.width && md.height) {
            let md = dd.node(Od.v),
              Wd = {
                rank: (dd.node(Od.w).rank - md.rank) / 2 + md.rank,
                e: Od
              };
            jd(dd, "edge-proxy", Wd, "_ep")
          }
        }))
      }(dd))), Od("    removeEmptyRanks", (() => function(dd) {
        let Od = dd.nodes().map((Od => dd.node(Od).rank)).filter((dd => void 0 !== dd)),
          md = Zd(Math.min, Od),
          Wd = [];
        dd.nodes().forEach((Od => {
          let Fd = dd.node(Od).rank - md;
          Wd[Fd] || (Wd[Fd] = []), Wd[Fd].push(Od)
        }));
        let Fd = 0,
          Rd = dd.graph().nodeRankFactor;
        Array.from(Wd).forEach(((Od, md) => {
          void 0 === Od && md % Rd !== 0 ? --Fd : void 0 !== Od && Fd && Od.forEach((Od => dd.node(Od).rank += Fd))
        }))
      }(dd))), Od("    nestingGraph.cleanup", (() => function(dd) {
        let Od = dd.graph();
        dd.removeNode(Od.nestingRoot), delete Od.nestingRoot, dd.edges().forEach((Od => {
          dd.edge(Od).nestingEdge && dd.removeEdge(Od)
        }))
      }(dd))), Od("    normalizeRanks", (() => function(dd) {
        let Od = dd.nodes().map((Od => {
            let md = dd.node(Od).rank;
            return void 0 === md ? Number.MAX_VALUE : md
          })),
          md = Zd(Math.min, Od);
        dd.nodes().forEach((Od => {
          let Wd = dd.node(Od);
          Object.hasOwn(Wd, "rank") && (Wd.rank -= md)
        }))
      }(dd))), Od("    assignRankMinMax", (() => function(dd) {
        let Od = 0;
        dd.nodes().forEach((md => {
          let Wd = dd.node(md);
          Wd.borderTop && (Wd.minRank = dd.node(Wd.borderTop).rank, Wd.maxRank = dd.node(Wd.borderBottom).rank, Od = Math.max(Od, Wd.maxRank))
        })), dd.graph().maxRank = Od
      }(dd))), Od("    removeEdgeLabelProxies", (() => function(dd) {
        dd.nodes().forEach((Od => {
          let md = dd.node(Od);
          if ("edge-proxy" === md.dummy) {
            let Wd = md;
            dd.edge(Wd.e).labelRank = md.rank, dd.removeNode(Od)
          }
        }))
      }(dd))), Od("    normalize.run", (() => yO(dd))), Od("    parentDummyChains", (() => LO(dd))), Od("    addBorderSegments", (() => cO(dd))), Od("    order", (() => Fm(dd, md, hd))), Od("    insertSelfEdges", (() => function(dd) {
        Id(dd).forEach((Od => {
          let md = 0;
          Od.forEach(((Od, Wd) => {
            let Fd = dd.node(Od);
            "number" != typeof Fd.rank && (Fd.rank = 0), Fd.order = Wd + md, (Fd.selfEdges || []).forEach((Od => {
              jd(dd, "selfedge", {
                width: Od.label.width,
                height: Od.label.height,
                rank: Fd.rank,
                order: Wd + ++md,
                e: Od.e,
                edgeLabel: Od.label
              }, "_se"), (!Array.isArray(Od.label.points) || 7 !== Od.label.points.length) && (Od.label.points = [{
                x: 0,
                y: -10
              }, {
                x: 0,
                y: -10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 10
              }, {
                x: 0,
                y: 0
              }, {
                x: 0,
                y: 0
              }])
            })), delete Fd.selfEdges
          }))
        }))
      }(dd))), Od("    adjustCoordinateSystem", (() => function(dd) {
        var Od;
        let md = null == (Od = dd.graph().rankdir) ? void 0 : Od.toLowerCase();
        ("lr" === md || "rl" === md) && eO(dd)
      }(dd))), Od("    position", (() => qm(dd, md.corePath))), Od("    positionSelfEdges", (() => function(dd) {
        dd.nodes().forEach((Od => {
          let md = dd.node(Od),
            Wd = dd => "number" == typeof dd && isFinite(dd);
          if ("selfedge" === md.dummy) {
            let Fd = md,
              Rd = dd.node(Fd.e.v),
              Xd = Wd(null == Rd ? void 0 : Rd.x) ? Rd.x : 0,
              Kd = Wd(null == Rd ? void 0 : Rd.y) ? Rd.y : 0,
              hd = Wd(null == Rd ? void 0 : Rd.width) ? Rd.width : 0,
              vd = Wd(null == Rd ? void 0 : Rd.height) ? Rd.height : 0,
              Qd = Wd(md.x) ? md.x : Xd,
              td = Wd(md.y) ? md.y : Kd,
              od = hd / 2,
              Nd = vd / 2;
            Fd.edgeLabel.points = [{
              x: Qd + od,
              y: td - Nd
            }, {
              x: Qd + od,
              y: td - Nd
            }, {
              x: Qd,
              y: td
            }, {
              x: Qd - od,
              y: td + Nd
            }, {
              x: Qd - od,
              y: td + Nd
            }, {
              x: Qd,
              y: td
            }, {
              x: Qd,
              y: td
            }], Fd.edgeLabel.x = Qd, Fd.edgeLabel.y = td, dd.setEdge(Fd.e, Fd.edgeLabel), dd.removeNode(Od)
          } else md && Array.isArray(md.selfEdges) && md.selfEdges.forEach((dd => {
            if (!Array.isArray(dd.label.points) || 7 !== dd.label.points.length) {
              let Od = Wd(md.x) ? md.x : 0,
                Fd = Wd(md.y) ? md.y : 0,
                Rd = (Wd(md.width) ? md.width : 0) / 2,
                Xd = (Wd(md.height) ? md.height : 0) / 2;
              dd.label.points = [{
                x: Od + Rd,
                y: Fd - Xd
              }, {
                x: Od + Rd,
                y: Fd - Xd
              }, {
                x: Od,
                y: Fd
              }, {
                x: Od - Rd,
                y: Fd + Xd
              }, {
                x: Od - Rd,
                y: Fd + Xd
              }, {
                x: Od,
                y: Fd
              }, {
                x: Od,
                y: Fd
              }]
            }
          }))
        }))
      }(dd)));
      let vd = JSON.parse(JSON.stringify(dd._nodes));
      return Od("    removeBorderNodes", (() => function(dd) {
        dd.nodes().forEach((Od => {
          if (dd.children(Od).length) {
            let md = dd.node(Od),
              Wd = dd.node(md.borderTop),
              Fd = dd.node(md.borderBottom),
              Rd = dd.node(md.borderLeft[md.borderLeft.length - 1]),
              Xd = dd.node(md.borderRight[md.borderRight.length - 1]);
            md.width = Math.abs(Xd.x - Rd.x), md.height = Math.abs(Fd.y - Wd.y), md.x = Rd.x + md.width / 2, md.y = Wd.y + md.height / 2
          }
        })), dd.nodes().forEach((Od => {
          "border" === dd.node(Od).dummy && dd.removeNode(Od)
        }))
      }(dd))), Od("    normalize.undo", (() => function(dd) {
        dd.graph().dummyChains.forEach((Od => {
          let md, Wd = dd.node(Od),
            Fd = Wd.edgeLabel;
          for (dd.setEdge(Wd.edgeObj, Fd); Wd.dummy;) md = dd.successors(Od)[0], dd.removeNode(Od), Fd.points.push({
            x: Wd.x,
            y: Wd.y
          }), "edge-label" === Wd.dummy && (Fd.x = Wd.x, Fd.y = Wd.y, Fd.width = Wd.width, Fd.height = Wd.height), Od = md, Wd = dd.node(Od)
        }))
      }(dd))), Od("    fixupEdgeLabelCoords", (() => function(dd) {
        dd.edges().forEach((Od => {
          let md = dd.edge(Od);
          if (Object.hasOwn(md, "x")) switch (("l" === md.labelpos || "r" === md.labelpos) && (md.width -= md.labeloffset), md.labelpos) {
            case "l":
              md.x -= md.width / 2 + md.labeloffset;
              break;
            case "r":
              md.x += md.width / 2 + md.labeloffset
          }
        }))
      }(dd))), Od("    undoCoordinateSystem", (() => DO(dd))), Od("    translateGraph", (() => function(dd) {
        let Od = Number.POSITIVE_INFINITY,
          md = 0,
          Wd = Number.POSITIVE_INFINITY,
          Fd = 0,
          Rd = dd.graph(),
          Xd = Rd.marginx || 0,
          Kd = Rd.marginy || 0;

        function hd(dd) {
          let Rd = dd.x,
            Xd = dd.y,
            Kd = dd.width,
            hd = dd.height;
          Od = Math.min(Od, Rd - Kd / 2), md = Math.max(md, Rd + Kd / 2), Wd = Math.min(Wd, Xd - hd / 2), Fd = Math.max(Fd, Xd + hd / 2)
        }
        dd.nodes().forEach((Od => hd(dd.node(Od)))), dd.edges().forEach((Od => {
          let md = dd.edge(Od);
          Object.hasOwn(md, "x") && hd(md)
        })), Od -= Xd, Wd -= Kd, dd.nodes().forEach((md => {
          let Fd = dd.node(md);
          Fd.x -= Od, Fd.y -= Wd
        })), dd.edges().forEach((md => {
          let Fd = dd.edge(md);
          Fd.points.forEach((dd => {
            dd.x -= Od, dd.y -= Wd
          })), Object.hasOwn(Fd, "x") && (Fd.x -= Od), Object.hasOwn(Fd, "y") && (Fd.y -= Wd)
        })), Rd.width = md - Od + Xd, Rd.height = Fd - Wd + Kd
      }(dd))), Od("    assignNodeIntersects", (() => function(dd) {
        dd.edges().forEach((Od => {
          if (Od.v === Od.w) return;
          let md, Wd, Fd = dd.edge(Od),
            Rd = dd.node(Od.v),
            Xd = dd.node(Od.w);
          Fd.points ? (md = Fd.points[0], Wd = Fd.points[Fd.points.length - 1]) : (Fd.points = [], md = Xd, Wd = Rd), Fd.points.unshift(ed(Rd, md)), Fd.points.push(ed(Xd, Wd))
        }))
      }(dd))), Od("    reversePoints", (() => function(dd) {
        dd.edges().forEach((Od => {
          let md = dd.edge(Od);
          md.reversed && md.points.reverse()
        }))
      }(dd))), Od("    acyclic.undo", (() => function(dd) {
        dd.edges().forEach((Od => {
          let md = dd.edge(Od);
          if (md.reversed) {
            dd.removeEdge(Od);
            let Wd = md.forwardName;
            delete md.reversed, delete md.forwardName, dd.setEdge(Od.w, Od.v, md, Wd)
          }
        }))
      }(dd))), {
        graph: dd,
        rawNodes: vd
      }
    }

    function Ym(dd, Od) {
      dd.nodes().forEach((md => {
        let Wd = dd.node(md),
          Fd = Od.node(md);
        Wd && (Wd.x = Fd.x, Wd.y = Fd.y, Wd.order = Fd.order, Wd.rank = Fd.rank, Od.children(md).length && (Wd.width = Fd.width, Wd.height = Fd.height))
      })), dd.edges().forEach((md => {
        let Wd = dd.edge(md),
          Fd = Od.edge(md);
        Wd.points = Fd.points, Object.hasOwn(Fd, "x") && (Wd.x = Fd.x, Wd.y = Fd.y)
      })), dd.graph().width = Od.graph().width, dd.graph().height = Od.graph().height
    }
    var gm = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      wm = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      am = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Em = ["width", "height", "rank"],
      Jm = {
        width: 0,
        height: 0
      },
      Um = ["minlen", "weight", "width", "height", "labeloffset"],
      xm = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Bm = ["labelpos"];

    function Sm(dd) {
      let Od = new cd({
          multigraph: !0,
          compound: !0
        }),
        md = um(dd.graph());
      return Od.setGraph(Object.assign({}, wm, sm(md, gm), WO(md, am))), dd.nodes().forEach((md => {
        let Wd = sm(um(dd.node(md)), Em);
        Object.keys(Jm).forEach((dd => {
          void 0 === Wd[dd] && (Wd[dd] = Jm[dd])
        })), Od.setNode(md, Wd);
        let Fd = dd.parent(md);
        void 0 !== Fd && Od.setParent(md, Fd)
      })), dd.edges().forEach((md => {
        let Wd = um(dd.edge(md));
        Od.setEdge(md, Object.assign({}, xm, sm(Wd, Um), WO(Wd, Bm)))
      })), Od
    }

    function sm(dd, Od) {
      return FO(WO(dd, Od), Number)
    }

    function um(dd) {
      let Od = {};
      return dd && Object.entries(dd).forEach((dd => {
        let [md, Wd] = dd;
        "string" == typeof md && (md = md.toLowerCase()), Od[md] = Wd
      })), Od
    }

    function Vm(dd) {
      let Od = Id(dd),
        md = new cd({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return dd.nodes().forEach((Od => {
        md.setNode(Od, {
          label: Od
        }), md.setParent(Od, "layer" + dd.node(Od).rank)
      })), dd.edges().forEach((dd => md.setEdge(dd.v, dd.w, {}, dd.name))), Od.forEach(((dd, Od) => {
        let Wd = "layer" + Od;
        md.setNode(Wd, {
          rank: "same"
        }), dd.reduce(((dd, Od) => (md.setEdge(dd, Od, {
          style: "invis"
        }), Od)))
      })), md
    }
    var im = {
        time: fd,
        notime: Md
      },
      Am = {
        graphlib: Rd,
        version: KO,
        layout: ym,
        debug: Vm,
        util: {
          time: fd,
          notime: Md
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);