/*! For license information please see x17cru.112.3109e879.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6303: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Graph: () => Td,
      debug: () => bk,
      default: () => jk,
      graphlib: () => Wd,
      layout: () => Ok,
      util: () => Sk,
      version: () => PJ
    });
    var pd = Object.defineProperty,
      Nd = (dd, Jd, kd) => ((dd, Jd, kd) => Jd in dd ? pd(dd, Jd, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: kd
      }) : dd[Jd] = kd)(dd, "symbol" != typeof Jd ? Jd + "" : Jd, kd),
      Wd = {};
    ((dd, Jd) => {
      for (var kd in Jd) pd(dd, kd, {
        get: Jd[kd],
        enumerable: !0
      })
    })(Wd, {
      Graph: () => Td,
      alg: () => Rd
    });
    var Pd = Object.defineProperty,
      Zd = (dd, Jd) => {
        for (var kd in Jd) Pd(dd, kd, {
          get: Jd[kd],
          enumerable: !0
        })
      },
      gd = class {
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
        setNodes(dd, Jd) {
          return dd.forEach((dd => {
            void 0 !== Jd ? this.setNode(dd, Jd) : this.setNode(dd)
          })), this
        }
        setNode(dd, Jd) {
          return dd in this._nodes ? (arguments.length > 1 && (this._nodes[dd] = Jd), this) : (this._nodes[dd] = arguments.length > 1 ? Jd : this._defaultNodeLabelFn(dd), this._isCompound && (this._parent[dd] = "\0", this._children[dd] = {}, this._children["\0"][dd] = !0), this._in[dd] = {}, this._preds[dd] = {}, this._out[dd] = {}, this._sucs[dd] = {}, ++this._nodeCount, this)
        }
        node(dd) {
          return this._nodes[dd]
        }
        hasNode(dd) {
          return dd in this._nodes
        }
        removeNode(dd) {
          if (dd in this._nodes) {
            let Jd = dd => this.removeEdge(this._edgeObjs[dd]);
            delete this._nodes[dd], this._isCompound && (this._removeFromParentsChildList(dd), delete this._parent[dd], this.children(dd).forEach((dd => {
              this.setParent(dd)
            })), delete this._children[dd]), Object.keys(this._in[dd]).forEach(Jd), delete this._in[dd], delete this._preds[dd], Object.keys(this._out[dd]).forEach(Jd), delete this._out[dd], delete this._sucs[dd], --this._nodeCount
          }
          return this
        }
        setParent(dd, Jd) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Jd) Jd = "\0";
          else {
            for (let kd = Jd += ""; void 0 !== kd; kd = this.parent(kd))
              if (kd === dd) throw new Error("Setting " + Jd + " as parent of " + dd + " would create a cycle");
            this.setNode(Jd)
          }
          return this.setNode(dd), this._removeFromParentsChildList(dd), this._parent[dd] = Jd, this._children[Jd][dd] = !0, this
        }
        parent(dd) {
          if (this._isCompound) {
            let Jd = this._parent[dd];
            if ("\0" !== Jd) return Jd
          }
        }
        children() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Jd = this._children[dd];
            if (Jd) return Object.keys(Jd)
          } else {
            if ("\0" === dd) return this.nodes();
            if (this.hasNode(dd)) return []
          }
          return []
        }
        predecessors(dd) {
          let Jd = this._preds[dd];
          if (Jd) return Object.keys(Jd)
        }
        successors(dd) {
          let Jd = this._sucs[dd];
          if (Jd) return Object.keys(Jd)
        }
        neighbors(dd) {
          let Jd = this.predecessors(dd);
          if (Jd) {
            let kd = new Set(Jd),
              pd = this.successors(dd);
            if (pd)
              for (let dd of pd) kd.add(dd);
            return Array.from(kd.values())
          }
        }
        isLeaf(dd) {
          var Jd;
          let kd;
          return kd = this.isDirected() ? this.successors(dd) : this.neighbors(dd), 0 === (null != (Jd = null == kd ? void 0 : kd.length) ? Jd : 0)
        }
        filterNodes(dd) {
          let Jd = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Jd.setGraph(this.graph()), Object.entries(this._nodes).forEach((kd => {
            let [pd, Nd] = kd;
            dd(pd) && Jd.setNode(pd, Nd)
          })), Object.values(this._edgeObjs).forEach((dd => {
            Jd.hasNode(dd.v) && Jd.hasNode(dd.w) && Jd.setEdge(dd, this.edge(dd))
          }));
          let kd = {},
            pd = dd => {
              let Nd = this.parent(dd);
              return !Nd || Jd.hasNode(Nd) ? (kd[dd] = Nd, Nd) : Nd in kd ? kd[Nd] : pd(Nd)
            };
          return this._isCompound && Jd.nodes().forEach((dd => Jd.setParent(dd, pd(dd)))), Jd
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
        setPath(dd, Jd) {
          return dd.reduce(((dd, kd) => (void 0 !== Jd ? this.setEdge(dd, kd, Jd) : this.setEdge(dd, kd), kd))), this
        }
        setEdge(dd, Jd, kd, pd) {
          let Nd, Wd, Pd, Zd, gd = !1;
          "object" == typeof dd && null !== dd && "v" in dd ? (Nd = dd.v, Wd = dd.w, Pd = dd.name, 2 === arguments.length && (Zd = Jd, gd = !0)) : (Nd = dd, Wd = Jd, Pd = pd, arguments.length > 2 && (Zd = kd, gd = !0)), Nd = "" + Nd, Wd = "" + Wd, void 0 !== Pd && (Pd = "" + Pd);
          let Kd = od(this._isDirected, Nd, Wd, Pd);
          if (Kd in this._edgeLabels) return gd && (this._edgeLabels[Kd] = Zd), this;
          if (void 0 !== Pd && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Nd), this.setNode(Wd), this._edgeLabels[Kd] = gd ? Zd : this._defaultEdgeLabelFn(Nd, Wd, Pd);
          let ld = function(dd, Jd, kd, pd) {
            let Nd = "" + Jd,
              Wd = "" + kd;
            if (!dd && Nd > Wd) {
              let dd = Nd;
              Nd = Wd, Wd = dd
            }
            let Pd = {
              v: Nd,
              w: Wd
            };
            return pd && (Pd.name = pd), Pd
          }(this._isDirected, Nd, Wd, Pd);
          return Nd = ld.v, Wd = ld.w, Object.freeze(ld), this._edgeObjs[Kd] = ld, Cd(this._preds[Wd], Nd), Cd(this._sucs[Nd], Wd), this._in[Wd][Kd] = ld, this._out[Nd][Kd] = ld, this._edgeCount++, this
        }
        edge(dd, Jd, kd) {
          let pd = 1 === arguments.length ? ld(this._isDirected, dd) : od(this._isDirected, dd, Jd, kd);
          return this._edgeLabels[pd]
        }
        edgeAsObj(dd, Jd, kd) {
          let pd = 1 === arguments.length ? this.edge(dd) : this.edge(dd, Jd, kd);
          return "object" != typeof pd || null === pd ? {
            label: pd
          } : pd
        }
        hasEdge(dd, Jd, kd) {
          return (1 === arguments.length ? ld(this._isDirected, dd) : od(this._isDirected, dd, Jd, kd)) in this._edgeLabels
        }
        removeEdge(dd, Jd, kd) {
          let pd = 1 === arguments.length ? ld(this._isDirected, dd) : od(this._isDirected, dd, Jd, kd),
            Nd = this._edgeObjs[pd];
          if (Nd) {
            let dd = Nd.v,
              Jd = Nd.w;
            delete this._edgeLabels[pd], delete this._edgeObjs[pd], Kd(this._preds[Jd], dd), Kd(this._sucs[dd], Jd), delete this._in[Jd][pd], delete this._out[dd][pd], this._edgeCount--
          }
          return this
        }
        inEdges(dd, Jd) {
          return this.isDirected() ? this.filterEdges(this._in[dd], dd, Jd) : this.nodeEdges(dd, Jd)
        }
        outEdges(dd, Jd) {
          return this.isDirected() ? this.filterEdges(this._out[dd], dd, Jd) : this.nodeEdges(dd, Jd)
        }
        nodeEdges(dd, Jd) {
          if (dd in this._nodes) return this.filterEdges({
            ...this._in[dd],
            ...this._out[dd]
          }, dd, Jd)
        }
        _removeFromParentsChildList(dd) {
          delete this._children[this._parent[dd]][dd]
        }
        filterEdges(dd, Jd, kd) {
          if (!dd) return;
          let pd = Object.values(dd);
          return kd ? pd.filter((dd => dd.v === Jd && dd.w === kd || dd.v === kd && dd.w === Jd)) : pd
        }
      };

    function Cd(dd, Jd) {
      dd[Jd] ? dd[Jd]++ : dd[Jd] = 1
    }

    function Kd(dd, Jd) {
      void 0 !== dd[Jd] && !--dd[Jd] && delete dd[Jd]
    }

    function od(dd, Jd, kd, pd) {
      let Nd = "" + Jd,
        Wd = "" + kd;
      if (!dd && Nd > Wd) {
        let dd = Nd;
        Nd = Wd, Wd = dd
      }
      return Nd + "\x01" + Wd + "\x01" + (void 0 === pd ? "\0" : pd)
    }

    function ld(dd, Jd) {
      return od(dd, Jd.v, Jd.w, Jd.name)
    }

    function Qd(dd) {
      let Jd = {
          options: {
            directed: dd.isDirected(),
            multigraph: dd.isMultigraph(),
            compound: dd.isCompound()
          },
          nodes: Ld(dd),
          edges: Od(dd)
        },
        kd = dd.graph();
      return void 0 !== kd && (Jd.value = structuredClone(kd)), Jd
    }

    function Ld(dd) {
      return dd.nodes().map((Jd => {
        let kd = dd.node(Jd),
          pd = dd.parent(Jd),
          Nd = {
            v: Jd
          };
        return void 0 !== kd && (Nd.value = kd), void 0 !== pd && (Nd.parent = pd), Nd
      }))
    }

    function Od(dd) {
      return dd.edges().map((Jd => {
        let kd = dd.edge(Jd),
          pd = {
            v: Jd.v,
            w: Jd.w
          };
        return void 0 !== Jd.name && (pd.name = Jd.name), void 0 !== kd && (pd.value = kd), pd
      }))
    }

    function ed(dd) {
      let Jd = new gd(dd.options);
      return void 0 !== dd.value && Jd.setGraph(dd.value), dd.nodes.forEach((dd => {
        Jd.setNode(dd.v, dd.value), dd.parent && Jd.setParent(dd.v, dd.parent)
      })), dd.edges.forEach((dd => {
        Jd.setEdge({
          v: dd.v,
          w: dd.w,
          name: dd.name
        }, dd.value)
      })), Jd
    }
    Zd({}, {
      read: () => ed,
      write: () => Qd
    });
    var Rd = {};
    Zd(Rd, {
      CycleException: () => md,
      bellmanFord: () => Gd,
      components: () => vd,
      dijkstra: () => Bd,
      dijkstraAll: () => sd,
      findCycles: () => Md,
      floydWarshall: () => Yd,
      isAcyclic: () => Sd,
      postorder: () => nd,
      preorder: () => Ud,
      prim: () => yd,
      shortestPaths: () => Dd,
      tarjan: () => ad,
      topsort: () => bd
    });
    var Id = () => 1;

    function Gd(dd, Jd, kd, pd) {
      return function(dd, Jd, kd, pd) {
        let Nd, Wd = {},
          Pd = 0,
          Zd = dd.nodes(),
          gd = function(dd) {
            let Jd = Wd[dd.v],
              pd = Wd[dd.w];
            if (!Jd || !pd) return;
            let Pd = kd(dd);
            Jd.distance + Pd < pd.distance && (Wd[dd.w] = {
              distance: Jd.distance + Pd,
              predecessor: dd.v
            }, Nd = !0)
          },
          Cd = function() {
            Zd.forEach((function(dd) {
              pd(dd).forEach((function(Jd) {
                let kd = Jd.v === dd ? Jd.v : Jd.w,
                  pd = kd === Jd.v ? Jd.w : Jd.v;
                gd({
                  v: kd,
                  w: pd
                })
              }))
            }))
          };
        Zd.forEach((function(dd) {
          let kd = dd === Jd ? 0 : Number.POSITIVE_INFINITY;
          Wd[dd] = {
            distance: kd,
            predecessor: ""
          }
        }));
        let Kd = Zd.length;
        for (let od = 1; od < Kd && (Nd = !1, Pd++, Cd(), Nd); od++);
        if (Pd === Kd - 1 && (Nd = !1, Cd(), Nd)) throw new Error("The graph contains a negative weight cycle");
        return Wd
      }(dd, String(Jd), kd || Id, pd || function(Jd) {
        var kd;
        return null != (kd = dd.outEdges(Jd)) ? kd : []
      })
    }

    function vd(dd) {
      let Jd, kd = {},
        pd = [];

      function Nd(pd) {
        var Wd, Pd;
        pd in kd || (kd[pd] = !0, Jd.push(pd), null == (Wd = dd.successors(pd)) || Wd.forEach(Nd), null == (Pd = dd.predecessors(pd)) || Pd.forEach(Nd))
      }
      return dd.nodes().forEach((function(dd) {
        Jd = [], Nd(dd), Jd.length && pd.push(Jd)
      })), pd
    }
    var xd = class {
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
          let Jd = this._keyIndices[dd];
          if (void 0 !== Jd) return this._arr[Jd].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(dd, Jd) {
          let kd = this._keyIndices,
            pd = String(dd);
          if (!(pd in kd)) {
            let dd = this._arr,
              Nd = dd.length;
            return kd[pd] = Nd, dd.push({
              key: pd,
              priority: Jd
            }), this._decrease(Nd), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let dd = this._arr.pop();
          return delete this._keyIndices[dd.key], this._heapify(0), dd.key
        }
        decrease(dd, Jd) {
          let kd = this._keyIndices[dd];
          if (void 0 === kd) throw new Error(`Key not found: ${dd}`);
          let pd = this._arr[kd].priority;
          if (Jd > pd) throw new Error(`New priority is greater than current priority. Key: ${dd} Old: ${pd} New: ${Jd}`);
          this._arr[kd].priority = Jd, this._decrease(kd)
        }
        _heapify(dd) {
          let Jd = this._arr,
            kd = 2 * dd,
            pd = kd + 1,
            Nd = dd;
          kd < Jd.length && (Nd = Jd[kd].priority < Jd[Nd].priority ? kd : Nd, pd < Jd.length && (Nd = Jd[pd].priority < Jd[Nd].priority ? pd : Nd), Nd !== dd && (this._swap(dd, Nd), this._heapify(Nd)))
        }
        _decrease(dd) {
          let Jd, kd = this._arr,
            pd = kd[dd].priority;
          for (; 0 !== dd && (Jd = dd >> 1, !(kd[Jd].priority < pd));) this._swap(dd, Jd), dd = Jd
        }
        _swap(dd, Jd) {
          let kd = this._arr,
            pd = this._keyIndices,
            Nd = kd[dd],
            Wd = kd[Jd];
          kd[dd] = Wd, kd[Jd] = Nd, pd[Wd.key] = dd, pd[Nd.key] = Jd
        }
      },
      qd = () => 1;

    function Bd(dd, Jd, kd, pd) {
      return function(dd, Jd, kd, pd) {
        let Nd, Wd, Pd = {},
          Zd = new xd,
          gd = function(dd) {
            let Jd = dd.v !== Nd ? dd.v : dd.w,
              pd = Pd[Jd];
            if (!pd) return;
            let gd = kd(dd),
              Cd = Wd.distance + gd;
            if (gd < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + dd + " Weight: " + gd);
            Cd < pd.distance && (pd.distance = Cd, pd.predecessor = Nd, Zd.decrease(Jd, Cd))
          };
        for (dd.nodes().forEach((function(dd) {
            let kd = dd === Jd ? 0 : Number.POSITIVE_INFINITY;
            Pd[dd] = {
              distance: kd,
              predecessor: ""
            }, Zd.add(dd, kd)
          })); Zd.size() > 0;) {
          Nd = Zd.removeMin();
          let dd = Pd[Nd];
          if (!dd || dd.distance === Number.POSITIVE_INFINITY) break;
          Wd = dd, pd(Nd).forEach(gd)
        }
        return Pd
      }(dd, String(Jd), kd || qd, pd || function(Jd) {
        var kd;
        return null != (kd = dd.outEdges(Jd)) ? kd : []
      })
    }

    function sd(dd, Jd, kd) {
      return dd.nodes().reduce((function(pd, Nd) {
        return pd[Nd] = Bd(dd, Nd, Jd, kd), pd
      }), {})
    }

    function ad(dd) {
      let Jd = 0,
        kd = [],
        pd = {},
        Nd = [];

      function Wd(Pd) {
        var Zd;
        let gd = pd[Pd] = {
          onStack: !0,
          lowlink: Jd,
          index: Jd++
        };
        if (kd.push(Pd), null == (Zd = dd.successors(Pd)) || Zd.forEach((function(dd) {
            if (dd in pd) {
              let Jd = pd[dd];
              null != Jd && Jd.onStack && (gd.lowlink = Math.min(gd.lowlink, Jd.index))
            } else {
              Wd(dd);
              let Jd = pd[dd];
              Jd && (gd.lowlink = Math.min(gd.lowlink, Jd.lowlink))
            }
          })), gd.lowlink === gd.index) {
          let dd, Jd = [];
          do {
            dd = kd.pop();
            let Nd = pd[dd];
            Nd && (Nd.onStack = !1), Jd.push(dd)
          } while (Pd !== dd);
          Nd.push(Jd)
        }
      }
      return dd.nodes().forEach((function(dd) {
        dd in pd || Wd(dd)
      })), Nd
    }

    function Md(dd) {
      return ad(dd).filter((function(Jd) {
        var kd;
        let pd = Jd[0];
        return !!pd && (Jd.length > 1 || 1 === Jd.length && (null != (kd = dd.outEdges(pd, pd)) ? kd : []).length > 0)
      }))
    }
    var Fd = () => 1;

    function Yd(dd, Jd, kd) {
      return function(dd, Jd, kd) {
        let pd = {},
          Nd = dd.nodes();
        return Nd.forEach((function(dd) {
          let Wd = {};
          pd[dd] = Wd, Wd[dd] = {
            distance: 0,
            predecessor: ""
          }, Nd.forEach((function(Jd) {
            dd !== Jd && (Wd[Jd] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), kd(dd).forEach((function(kd) {
            let pd = kd.v === dd ? kd.w : kd.v,
              Nd = Jd(kd);
            Wd[pd] = {
              distance: Nd,
              predecessor: dd
            }
          }))
        })), Nd.forEach((function(dd) {
          let Jd = pd[dd];
          Jd && Nd.forEach((function(kd) {
            let Wd = pd[kd];
            Wd && Nd.forEach((function(kd) {
              let pd = Wd[dd],
                Nd = Jd[kd],
                Pd = Wd[kd];
              if (pd && Nd && Pd) {
                let dd = pd.distance + Nd.distance;
                dd < Pd.distance && (Pd.distance = dd, Pd.predecessor = Nd.predecessor)
              }
            }))
          }))
        })), pd
      }(dd, Jd || Fd, kd || function(Jd) {
        var kd;
        return null != (kd = dd.outEdges(Jd)) ? kd : []
      })
    }
    var md = class extends Error {
      constructor(dd) {
        super(dd), this.name = "CycleException"
      }
    };

    function bd(dd) {
      let Jd = {},
        kd = {},
        pd = [];
      if (dd.sinks().forEach((function Nd(Wd) {
          var Pd;
          if (Wd in kd) throw new md;
          Wd in Jd || (kd[Wd] = !0, Jd[Wd] = !0, null == (Pd = dd.predecessors(Wd)) || Pd.forEach(Nd), delete kd[Wd], pd.push(Wd))
        })), Object.keys(Jd).length !== dd.nodeCount()) throw new md;
      return pd
    }

    function Sd(dd) {
      try {
        bd(dd)
      } catch (Jd) {
        if (Jd instanceof md) return !1;
        throw Jd
      }
      return !0
    }

    function jd(dd, Jd, kd, pd, Nd) {
      Array.isArray(Jd) || (Jd = [Jd]);
      let Wd = Jd => {
          var kd;
          return null != (kd = dd.isDirected() ? dd.successors(Jd) : dd.neighbors(Jd)) ? kd : []
        },
        Pd = {};
      return Jd.forEach((function(Jd) {
        if (!dd.hasNode(Jd)) throw new Error("Graph does not have node: " + Jd);
        Nd = Xd(dd, Jd, "post" === kd, Pd, Wd, pd, Nd)
      })), Nd
    }

    function Xd(dd, Jd, kd, pd, Nd, Wd, Pd) {
      return Jd in pd || (pd[Jd] = !0, kd || (Pd = Wd(Pd, Jd)), Nd(Jd).forEach((function(Jd) {
        Pd = Xd(dd, Jd, kd, pd, Nd, Wd, Pd)
      })), kd && (Pd = Wd(Pd, Jd))), Pd
    }

    function fd(dd, Jd, kd) {
      return jd(dd, Jd, kd, (function(dd, Jd) {
        return dd.push(Jd), dd
      }), [])
    }

    function nd(dd, Jd) {
      return fd(dd, Jd, "post")
    }

    function Ud(dd, Jd) {
      return fd(dd, Jd, "pre")
    }

    function yd(dd, Jd) {
      var kd;
      let pd, Nd = new gd,
        Wd = {},
        Pd = new xd;

      function Zd(dd) {
        let kd = dd.v === pd ? dd.w : dd.v,
          Nd = Pd.priority(kd);
        if (void 0 !== Nd) {
          let Zd = Jd(dd);
          Zd < Nd && (Wd[kd] = pd, Pd.decrease(kd, Zd))
        }
      }
      if (0 === dd.nodeCount()) return Nd;
      dd.nodes().forEach((function(dd) {
        Pd.add(dd, Number.POSITIVE_INFINITY), Nd.setNode(dd)
      }));
      let Cd = dd.nodes()[0];
      void 0 !== Cd && Pd.decrease(Cd, 0);
      let Kd = !1;
      for (; Pd.size() > 0;) {
        if (pd = Pd.removeMin(), pd in Wd) Nd.setEdge(pd, Wd[pd]);
        else {
          if (Kd) throw new Error("Input graph is not connected: " + dd);
          Kd = !0
        }
        null == (kd = dd.nodeEdges(pd)) || kd.forEach(Zd)
      }
      return Nd
    }

    function Dd(dd, Jd, kd, pd) {
      return function(dd, Jd, kd, pd) {
        if (void 0 === kd) return Bd(dd, Jd, kd, pd);
        let Nd = !1,
          Wd = dd.nodes();
        for (let Pd = 0; Pd < Wd.length; Pd++) {
          let Zd = Wd[Pd];
          if (void 0 === Zd) continue;
          let gd = pd(Zd);
          for (let dd = 0; dd < gd.length; dd++) {
            let Jd = gd[dd];
            if (!Jd) continue;
            let pd = Jd.v === Zd ? Jd.v : Jd.w;
            kd({
              v: pd,
              w: pd === Jd.v ? Jd.w : Jd.v
            }) < 0 && (Nd = !0)
          }
          if (Nd) return Gd(dd, Jd, kd, pd)
        }
        return Bd(dd, Jd, kd, pd)
      }(dd, Jd, kd, null != pd ? pd : Jd => {
        var kd;
        return null != (kd = dd.outEdges(Jd)) ? kd : []
      })
    }
    var Td = gd;

    function Ed(dd, Jd, kd, pd) {
      let Nd = pd;
      for (; dd.hasNode(Nd);) Nd = dJ(pd);
      return kd.dummy = Jd, dd.setNode(Nd, kd), Nd
    }

    function cd(dd) {
      let Jd = new Td({
        multigraph: dd.isMultigraph()
      }).setGraph(dd.graph());
      return dd.nodes().forEach((kd => {
        dd.children(kd).length || Jd.setNode(kd, dd.node(kd))
      })), dd.edges().forEach((kd => {
        Jd.setEdge(kd, dd.edge(kd))
      })), Jd
    }

    function hd(dd, Jd) {
      let kd, pd, Nd = dd.x,
        Wd = dd.y,
        Pd = Jd.x - Nd,
        Zd = Jd.y - Wd,
        gd = dd.width / 2,
        Cd = dd.height / 2;
      if (!Pd && !Zd) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Zd) * gd > Math.abs(Pd) * Cd ? (Zd < 0 && (Cd = -Cd), kd = Cd * Pd / Zd, pd = Cd) : (Pd < 0 && (gd = -gd), kd = gd, pd = gd * Zd / Pd), {
        x: Nd + kd,
        y: Wd + pd
      }
    }

    function rd(dd) {
      let Jd = JJ(zd(dd) + 1).map((() => []));
      return dd.nodes().forEach((kd => {
        let pd = dd.node(kd),
          Nd = pd.rank;
        void 0 !== Nd && (Jd[Nd] || (Jd[Nd] = []), Jd[Nd][pd.order] = kd)
      })), Jd
    }

    function ud(dd, Jd, kd, pd) {
      let Nd = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Nd.rank = kd, Nd.order = pd), Ed(dd, "border", Nd, Jd)
    }
    var td = 65535;

    function Vd(dd, Jd) {
      if (Jd.length > td) {
        let kd = function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : td,
            kd = [];
          for (let pd = 0; pd < dd.length; pd += Jd) {
            let Nd = dd.slice(pd, pd + Jd);
            kd.push(Nd)
          }
          return kd
        }(Jd);
        return dd(...kd.map((Jd => dd(...Jd))))
      }
      return dd(...Jd)
    }

    function zd(dd) {
      let Jd = dd.nodes().map((Jd => {
        let kd = dd.node(Jd).rank;
        return void 0 === kd ? Number.MIN_VALUE : kd
      }));
      return Vd(Math.max, Jd)
    }

    function Hd(dd, Jd) {
      let kd = Date.now();
      try {
        return Jd()
      } finally {
        console.log(dd + " time: " + (Date.now() - kd) + "ms")
      }
    }

    function wd(dd, Jd) {
      return Jd()
    }
    var Ad = 0;

    function dJ(dd) {
      return dd + "" + ++Ad
    }

    function JJ(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Jd && (Jd = dd, dd = 0);
      let pd = dd => dd < Jd;
      kd < 0 && (pd = dd => Jd < dd);
      let Nd = [];
      for (let Wd = dd; pd(Wd); Wd += kd) Nd.push(Wd);
      return Nd
    }

    function kJ(dd, Jd) {
      let kd = {};
      for (let pd of Jd) void 0 !== dd[pd] && (kd[pd] = dd[pd]);
      return kd
    }

    function pJ(dd, Jd) {
      let kd;
      return kd = "string" == typeof Jd ? dd => dd[Jd] : Jd, Object.entries(dd).reduce(((dd, Jd) => {
        let [pd, Nd] = Jd;
        return dd[pd] = kd(Nd, pd), dd
      }), {})
    }
    var NJ = "\0";

    function WJ(dd, Jd, kd) {
      var pd, Nd, Wd, Pd, Zd, gd;
      if (!(dd && Jd && kd && "edge" === Jd.dummy && "edge" === kd.dummy && Jd.edgeObj && kd.edgeObj && dd[Jd.edgeObj.v] && dd[kd.edgeObj.v] && dd[Jd.edgeObj.w] && dd[kd.edgeObj.w])) return 0;
      let Cd = !0;
      Jd.edgeObj.w === kd.edgeObj.w && (Cd = !1);
      let Kd = Cd ? null != (Nd = null == (pd = dd[Jd.edgeObj.v]) ? void 0 : pd.rank) ? Nd : NaN : null != (Pd = null == (Wd = dd[Jd.edgeObj.w]) ? void 0 : Wd.rank) ? Pd : NaN,
        od = Object.entries(dd).find((dd => {
          var kd, pd;
          return (null == (kd = dd[1].edgeObj) ? void 0 : kd.v) === Jd.edgeObj.v && (null == (pd = dd[1].edgeObj) ? void 0 : pd.w) === Jd.edgeObj.w && dd[1].rank === Kd
        })),
        ld = Object.entries(dd).find((dd => {
          var Jd, pd;
          return (null == (Jd = dd[1].edgeObj) ? void 0 : Jd.v) === kd.edgeObj.v && (null == (pd = dd[1].edgeObj) ? void 0 : pd.w) === kd.edgeObj.w && dd[1].rank === Kd
        }));
      if (!od || !ld) return 0;
      let Qd = null != (Zd = od[1].order) ? Zd : NaN,
        Ld = null != (gd = ld[1].order) ? gd : NaN;
      return isNaN(Qd - Ld) ? 0 : Qd - Ld
    }
    var PJ = "3.1.1";

    function ZJ(dd) {
      dd._prev._next = dd._next, dd._next._prev = dd._prev, delete dd._next, delete dd._prev
    }

    function gJ(dd, Jd) {
      if ("_next" !== dd && "_prev" !== dd) return Jd
    }
    var CJ = class {
        constructor() {
          Nd(this, "_sentinel");
          let dd = {};
          dd._next = dd._prev = dd, this._sentinel = dd
        }
        dequeue() {
          let dd = this._sentinel,
            Jd = dd._prev;
          if (Jd !== dd) return ZJ(Jd), Jd
        }
        enqueue(dd) {
          let Jd = this._sentinel;
          dd._prev && dd._next && ZJ(dd), dd._next = Jd._next, Jd._next._prev = dd, Jd._next = dd, dd._prev = Jd
        }
        toString() {
          let dd = [],
            Jd = this._sentinel,
            kd = Jd._prev;
          for (; kd !== Jd;) dd.push(JSON.stringify(kd, gJ)), kd = kd._prev;
          return "[" + dd.join(", ") + "]"
        }
      },
      KJ = () => 1;

    function oJ(dd, Jd) {
      if (dd.nodeCount() <= 1) return [];
      let kd = function(dd, Jd) {
        let kd = new Td,
          pd = 0,
          Nd = 0;
        dd.nodes().forEach((dd => {
          kd.setNode(dd, {
            v: dd,
            in: 0,
            out: 0
          })
        })), dd.edges().forEach((dd => {
          let Wd = kd.edge(dd.v, dd.w) || 0,
            Pd = Jd(dd),
            Zd = Wd + Pd;
          kd.setEdge(dd.v, dd.w, Zd);
          let gd = kd.node(dd.v),
            Cd = kd.node(dd.w);
          Nd = Math.max(Nd, gd.out += Pd), pd = Math.max(pd, Cd.in += Pd)
        }));
        let Wd = function(dd) {
            let Jd = [];
            for (let kd = 0; kd < dd; kd++) Jd.push(kd);
            return Jd
          }(Nd + pd + 3).map((() => new CJ)),
          Pd = pd + 1;
        return kd.nodes().forEach((dd => {
          QJ(Wd, Pd, kd.node(dd))
        })), {
          graph: kd,
          buckets: Wd,
          zeroIdx: Pd
        }
      }(dd, Jd || KJ);
      return function(dd, Jd, kd) {
        var pd;
        let Nd, Wd = [],
          Pd = Jd[Jd.length - 1],
          Zd = Jd[0];
        for (; dd.nodeCount();) {
          for (; Nd = Zd.dequeue();) lJ(dd, Jd, kd, Nd);
          for (; Nd = Pd.dequeue();) lJ(dd, Jd, kd, Nd);
          if (dd.nodeCount())
            for (let Pd = Jd.length - 2; Pd > 0; --Pd)
              if (Nd = null == (pd = Jd[Pd]) ? void 0 : pd.dequeue(), Nd) {
                Wd = Wd.concat(lJ(dd, Jd, kd, Nd, !0) || []);
                break
              }
        }
        return Wd
      }(kd.graph, kd.buckets, kd.zeroIdx).flatMap((Jd => dd.outEdges(Jd.v, Jd.w) || []))
    }

    function lJ(dd, Jd, kd, pd, Nd) {
      let Wd = [],
        Pd = Nd ? Wd : void 0;
      return (dd.inEdges(pd.v) || []).forEach((pd => {
        let Pd = dd.edge(pd),
          Zd = dd.node(pd.v);
        Nd && Wd.push({
          v: pd.v,
          w: pd.w
        }), Zd.out -= Pd, QJ(Jd, kd, Zd)
      })), (dd.outEdges(pd.v) || []).forEach((pd => {
        let Nd = dd.edge(pd),
          Wd = pd.w,
          Pd = dd.node(Wd);
        Pd.in -= Nd, QJ(Jd, kd, Pd)
      })), dd.removeNode(pd.v), Pd
    }

    function QJ(dd, Jd, kd) {
      var pd, Nd, Wd;
      kd.out ? kd.in ? null == (Wd = dd[kd.out - kd.in + Jd]) || Wd.enqueue(kd) : null == (Nd = dd[dd.length - 1]) || Nd.enqueue(kd) : null == (pd = dd[0]) || pd.enqueue(kd)
    }

    function LJ(dd, Jd) {
      var kd;
      ("greedy" === dd.graph().acyclicer ? oJ(dd, (kd = dd, dd => kd.edge(dd).weight)) : function(dd, Jd) {
        let kd = [],
          pd = {},
          Nd = {};

        function Wd(Jd) {
          Object.hasOwn(Nd, Jd) || (Nd[Jd] = !0, pd[Jd] = !0, dd.outEdges(Jd).forEach((dd => {
            Object.hasOwn(pd, dd.w) ? kd.push(dd) : Wd(dd.w)
          })), delete pd[Jd])
        }

        function Pd(Wd) {
          var Zd;
          Object.hasOwn(Nd, Wd) || (Nd[Wd] = !0, pd[Wd] = !0, null == (Zd = dd.outEdges(Wd)) || Zd.forEach((Nd => {
            var Zd, gd;
            Object.hasOwn(pd, Nd.w) || (null == (Zd = Jd.node(Wd)) ? void 0 : Zd.rank) > (null == (gd = Jd.node(Nd.w)) ? void 0 : gd.rank) && function(dd, Jd, kd) {
              let pd = new Set;

              function Nd(Jd) {
                var Wd;
                if (dd.sources().includes(Jd)) return !0;
                pd.add(Jd);
                for (let Pd of null != (Wd = dd.inEdges(Jd)) ? Wd : [])
                  if ((Pd.v !== kd.v || Pd.w !== kd.w) && !pd.has(Pd.v) && Nd(Pd.v)) return !0;
                return !1
              }
              return Nd(Jd)
            }(dd, Nd.w, Nd) ? kd.push(Nd) : Pd(Nd.w)
          })), delete pd[Wd])
        }
        let Zd = Wd;
        return Jd && "function" == typeof Jd.node && (Zd = Pd), dd.sources().forEach(Zd), dd.nodes().forEach(Zd), kd
      }(dd, null != Jd ? Jd : null)).forEach((Jd => {
        let kd = dd.edge(Jd);
        dd.removeEdge(Jd), kd.forwardName = Jd.name, kd.reversed = !0, dd.setEdge(Jd.w, Jd.v, kd, dJ("rev"))
      }))
    }

    function OJ(dd) {
      dd.graph().dummyChains = [], dd.edges().forEach((Jd => function(dd, Jd) {
        let kd, pd, Nd, Wd = Jd.v,
          Pd = dd.node(Wd).rank,
          Zd = Jd.w,
          gd = dd.node(Zd).rank,
          Cd = Jd.name,
          Kd = dd.edge(Jd),
          od = Kd.labelRank;
        if (gd === Pd + 1) return;
        for (dd.removeEdge(Jd), Nd = 0, ++Pd; Pd < gd; ++Nd, ++Pd) Kd.points = [], pd = {
          width: 0,
          height: 0,
          edgeLabel: Kd,
          edgeObj: Jd,
          rank: Pd
        }, kd = Ed(dd, "edge", pd, "_d"), Pd === od && (pd.width = Kd.width, pd.height = Kd.height, pd.dummy = "edge-label", pd.labelpos = Kd.labelpos), dd.setEdge(Wd, kd, {
          weight: Kd.weight
        }, Cd), 0 === Nd && dd.graph().dummyChains.push(kd), Wd = kd;
        dd.setEdge(Wd, Zd, {
          weight: Kd.weight
        }, Cd)
      }(dd, Jd)))
    }

    function eJ(dd) {
      let Jd = {};
      dd.sources().forEach((function kd(pd) {
        let Nd = dd.node(pd);
        if (Object.hasOwn(Jd, pd)) return Nd.rank;
        Jd[pd] = !0;
        let Wd = dd.outEdges(pd),
          Pd = Wd ? Wd.map((Jd => null == Jd ? Number.POSITIVE_INFINITY : kd(Jd.w) - dd.edge(Jd).minlen)) : [],
          Zd = Vd(Math.min, Pd);
        return Zd === Number.POSITIVE_INFINITY && (Zd = 0), Nd.rank = Zd
      }))
    }

    function RJ(dd, Jd) {
      return dd.node(Jd.w).rank - dd.node(Jd.v).rank - dd.edge(Jd).minlen
    }
    var IJ = function(dd) {
      let Jd = new Td({
          directed: !1
        }),
        kd = dd.nodes();
      if (0 === kd.length) throw new Error("Graph must have at least one node");
      let pd, Nd, Wd = kd[0],
        Pd = dd.nodeCount();
      for (Jd.setNode(Wd, {}); GJ(Jd, dd) < Pd && (pd = vJ(Jd, dd), pd);) Nd = Jd.hasNode(pd.v) ? RJ(dd, pd) : -RJ(dd, pd), xJ(Jd, dd, Nd);
      return Jd
    };

    function GJ(dd, Jd) {
      return dd.nodes().forEach((function kd(pd) {
        let Nd = Jd.nodeEdges(pd);
        Nd && Nd.forEach((Nd => {
          let Wd = Nd.v,
            Pd = pd === Wd ? Nd.w : Wd;
          !dd.hasNode(Pd) && !RJ(Jd, Nd) && (dd.setNode(Pd, {}), dd.setEdge(pd, Pd, {}), kd(Pd))
        }))
      })), dd.nodeCount()
    }

    function vJ(dd, Jd) {
      return Jd.edges().reduce(((kd, pd) => {
        let Nd = Number.POSITIVE_INFINITY;
        return dd.hasNode(pd.v) !== dd.hasNode(pd.w) && (Nd = RJ(Jd, pd)), Nd < kd[0] ? [Nd, pd] : kd
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function xJ(dd, Jd, kd) {
      dd.nodes().forEach((dd => Jd.node(dd).rank += kd))
    }
    var {
      preorder: qJ,
      postorder: BJ
    } = Rd, sJ = iJ;

    function iJ(dd) {
      dd = function(dd) {
        let Jd = (new Td).setGraph(dd.graph());
        return dd.nodes().forEach((kd => Jd.setNode(kd, dd.node(kd)))), dd.edges().forEach((kd => {
          let pd = Jd.edge(kd.v, kd.w) || {
              weight: 0,
              minlen: 1
            },
            Nd = dd.edge(kd);
          Jd.setEdge(kd.v, kd.w, {
            weight: pd.weight + Nd.weight,
            minlen: Math.max(pd.minlen, Nd.minlen)
          })
        })), Jd
      }(dd), eJ(dd);
      let Jd, kd, pd = IJ(dd);
      for (FJ(pd), aJ(pd, dd); Jd = mJ(pd);) kd = bJ(pd, dd, Jd), SJ(pd, dd, Jd, kd)
    }

    function aJ(dd, Jd) {
      let kd = BJ(dd, dd.nodes());
      kd = kd.slice(0, kd.length - 1), kd.forEach((kd => function(dd, Jd, kd) {
        let pd = dd.node(kd).parent,
          Nd = dd.edge(kd, pd);
        Nd.cutvalue = MJ(dd, Jd, kd)
      }(dd, Jd, kd)))
    }

    function MJ(dd, Jd, kd) {
      let pd = dd.node(kd).parent,
        Nd = !0,
        Wd = Jd.edge(kd, pd),
        Pd = 0;
      Wd || (Nd = !1, Wd = Jd.edge(pd, kd)), Pd = Wd.weight;
      let Zd = Jd.nodeEdges(kd);
      return Zd && Zd.forEach((Wd => {
        let Zd = Wd.v === kd,
          gd = Zd ? Wd.w : Wd.v;
        if (gd !== pd) {
          let pd = Zd === Nd,
            Cd = Jd.edge(Wd).weight;
          if (Pd += pd ? Cd : -Cd, function(dd, Jd, kd) {
              return dd.hasEdge(Jd, kd)
            }(dd, kd, gd)) {
            let Jd = dd.edge(kd, gd).cutvalue;
            Pd += pd ? -Jd : Jd
          }
        }
      })), Pd
    }

    function FJ(dd, Jd) {
      arguments.length < 2 && (Jd = dd.nodes()[0]), YJ(dd, {}, 1, Jd)
    }

    function YJ(dd, Jd, kd, pd, Nd) {
      let Wd = kd,
        Pd = dd.node(pd);
      Jd[pd] = !0;
      let Zd = dd.neighbors(pd);
      return Zd && Zd.forEach((Nd => {
        Object.hasOwn(Jd, Nd) || (kd = YJ(dd, Jd, kd, Nd, pd))
      })), Pd.low = Wd, Pd.lim = kd++, Nd ? Pd.parent = Nd : delete Pd.parent, kd
    }

    function mJ(dd) {
      return dd.edges().find((Jd => dd.edge(Jd).cutvalue < 0))
    }

    function bJ(dd, Jd, kd) {
      let pd = kd.v,
        Nd = kd.w;
      Jd.hasEdge(pd, Nd) || (pd = kd.w, Nd = kd.v);
      let Wd = dd.node(pd),
        Pd = dd.node(Nd),
        Zd = Wd,
        gd = !1;
      return Wd.lim > Pd.lim && (Zd = Pd, gd = !0), Jd.edges().filter((Jd => gd === jJ(dd, dd.node(Jd.v), Zd) && gd !== jJ(dd, dd.node(Jd.w), Zd))).reduce(((dd, kd) => RJ(Jd, kd) < RJ(Jd, dd) ? kd : dd))
    }

    function SJ(dd, Jd, kd, pd) {
      let Nd = kd.v,
        Wd = kd.w;
      dd.removeEdge(Nd, Wd), dd.setEdge(pd.v, pd.w, {}), FJ(dd), aJ(dd, Jd),
        function(dd, Jd) {
          let kd = dd.nodes().find((Jd => !dd.node(Jd).parent));
          if (!kd) return;
          let pd = qJ(dd, [kd]);
          pd = pd.slice(1), pd.forEach((kd => {
            let pd = dd.node(kd).parent,
              Nd = Jd.edge(kd, pd),
              Wd = !1;
            Nd || (Nd = Jd.edge(pd, kd), Wd = !0), Jd.node(kd).rank = Jd.node(pd).rank + (Wd ? Nd.minlen : -Nd.minlen)
          }))
        }(dd, Jd)
    }

    function jJ(dd, Jd, kd) {
      return kd.low <= Jd.lim && Jd.lim <= kd.lim
    }
    iJ.initLowLimValues = FJ, iJ.initCutValues = aJ, iJ.calcCutValue = MJ, iJ.leaveEdge = mJ, iJ.enterEdge = bJ, iJ.exchangeEdges = SJ;
    var XJ = function(dd) {
      let Jd = dd.graph().ranker;
      if ("function" == typeof Jd) return Jd(dd);
      switch (Jd) {
        case "network-simplex":
        default:
          nJ(dd);
          break;
        case "tight-tree":
          ! function(dd) {
            eJ(dd), IJ(dd)
          }(dd);
          break;
        case "longest-path":
          fJ(dd);
        case "none":
      }
    };
    var fJ = eJ;

    function nJ(dd) {
      sJ(dd)
    }
    var UJ = function(dd) {
      let Jd = function(dd) {
          let Jd = {},
            kd = 0;

          function pd(Nd) {
            let Wd = kd;
            dd.children(Nd).forEach(pd), Jd[Nd] = {
              low: Wd,
              lim: kd++
            }
          }
          return dd.children(NJ).forEach(pd), Jd
        }(dd),
        kd = dd.graph();
      if (!Array.isArray(kd.dummyChains)) return;
      kd.dummyChains.forEach((kd => {
        let pd = dd.node(kd),
          Nd = pd.edgeObj,
          Wd = function(dd, Jd, kd, pd) {
            let Nd, Wd = [],
              Pd = [],
              Zd = Math.min(Jd[kd].low, Jd[pd].low),
              gd = Math.max(Jd[kd].lim, Jd[pd].lim);
            Nd = kd;
            do {
              Nd = dd.parent(Nd), Wd.push(Nd)
            } while (Nd && (Jd[Nd].low > Zd || gd > Jd[Nd].lim));
            let Cd = Nd,
              Kd = pd;
            for (;
              (Kd = dd.parent(Kd)) !== Cd;) Pd.push(Kd);
            return {
              path: Wd.concat(Pd.reverse()),
              lca: Cd
            }
          }(dd, Jd, Nd.v, Nd.w),
          Pd = Wd.path,
          Zd = Wd.lca,
          gd = 0,
          Cd = Pd[gd],
          Kd = !0;
        for (; kd !== Nd.w;) {
          if (pd = dd.node(kd), Kd) {
            for (;
              (Cd = Pd[gd]) !== Zd && dd.node(Cd).maxRank < pd.rank;) gd++;
            Cd === Zd && (Kd = !1)
          }
          if (!Kd) {
            for (; gd < Pd.length - 1 && dd.node(Pd[gd + 1]).minRank <= pd.rank;) gd++;
            Cd = Pd[gd]
          }
          void 0 !== Cd && dd.setParent(kd, Cd), kd = dd.successors(kd)[0]
        }
      }))
    };

    function yJ(dd) {
      let Jd = Ed(dd, "root", {}, "_root"),
        kd = function(dd) {
          let Jd = {};

          function kd(pd, Nd) {
            let Wd = dd.children(pd);
            Wd && Wd.length && Wd.forEach((dd => kd(dd, Nd + 1))), Jd[pd] = Nd
          }
          return dd.children(NJ).forEach((dd => kd(dd, 1))), Jd
        }(dd),
        pd = Object.values(kd),
        Nd = Vd(Math.max, pd) - 1,
        Wd = 2 * Nd + 1;
      dd.graph().nestingRoot = Jd, dd.edges().forEach((Jd => dd.edge(Jd).minlen *= Wd));
      let Pd = function(dd) {
        return dd.edges().reduce(((Jd, kd) => Jd + dd.edge(kd).weight), 0)
      }(dd) + 1;
      dd.children(NJ).forEach((pd => {
        DJ(dd, Jd, Wd, Pd, Nd, kd, pd)
      })), dd.graph().nodeRankFactor = Wd
    }

    function DJ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      var Zd;
      let gd = dd.children(Pd);
      if (!gd.length) return void(Pd !== Jd && dd.setEdge(Jd, Pd, {
        weight: 0,
        minlen: kd
      }));
      let Cd = ud(dd, "_bt"),
        Kd = ud(dd, "_bb"),
        od = dd.node(Pd);
      dd.setParent(Cd, Pd), od.borderTop = Cd, dd.setParent(Kd, Pd), od.borderBottom = Kd, gd.forEach((Zd => {
        var gd;
        DJ(dd, Jd, kd, pd, Nd, Wd, Zd);
        let od = dd.node(Zd),
          ld = od.borderTop ? od.borderTop : Zd,
          Qd = od.borderBottom ? od.borderBottom : Zd,
          Ld = od.borderTop ? pd : 2 * pd,
          Od = ld !== Qd ? 1 : Nd - (null != (gd = Wd[Pd]) ? gd : 0) + 1;
        dd.setEdge(Cd, ld, {
          weight: Ld,
          minlen: Od,
          nestingEdge: !0
        }), dd.setEdge(Qd, Kd, {
          weight: Ld,
          minlen: Od,
          nestingEdge: !0
        })
      })), dd.parent(Pd) || dd.setEdge(Jd, Cd, {
        weight: 0,
        minlen: Nd + (null != (Zd = Wd[Pd]) ? Zd : 0)
      })
    }
    var TJ = function(dd) {
      dd.children(NJ).forEach((function Jd(kd) {
        let pd = dd.children(kd),
          Nd = dd.node(kd);
        if (pd.length && pd.forEach(Jd), Nd && Object.hasOwn(Nd, "minRank")) {
          Nd.borderLeft = [], Nd.borderRight = [];
          for (let Jd = Nd.minRank, pd = Nd.maxRank + 1; Jd < pd; ++Jd) EJ(dd, "borderLeft", "_bl", kd, Nd, Jd), EJ(dd, "borderRight", "_br", kd, Nd, Jd)
        }
      }))
    };

    function EJ(dd, Jd, kd, pd, Nd, Wd) {
      let Pd = {
          width: 0,
          height: 0,
          rank: Wd,
          borderType: Jd
        },
        Zd = Nd[Jd][Wd - 1],
        gd = Ed(dd, "border", Pd, kd);
      Nd[Jd][Wd] = gd, dd.setParent(gd, pd), Zd && dd.setEdge(Zd, gd, {
        weight: 1
      })
    }

    function cJ(dd) {
      var Jd;
      let kd = null == (Jd = dd.graph().rankdir) ? void 0 : Jd.toLowerCase();
      ("bt" === kd || "rl" === kd) && function(dd) {
        dd.nodes().forEach((Jd => uJ(dd.node(Jd)))), dd.edges().forEach((Jd => {
          var kd;
          let pd = dd.edge(Jd);
          null == (kd = pd.points) || kd.forEach(uJ), Object.hasOwn(pd, "y") && uJ(pd)
        }))
      }(dd), ("lr" === kd || "rl" === kd) && (function(dd) {
        dd.nodes().forEach((Jd => tJ(dd.node(Jd)))), dd.edges().forEach((Jd => {
          var kd;
          let pd = dd.edge(Jd);
          null == (kd = pd.points) || kd.forEach(tJ), Object.hasOwn(pd, "x") && tJ(pd)
        }))
      }(dd), hJ(dd))
    }

    function hJ(dd) {
      dd.nodes().forEach((Jd => rJ(dd.node(Jd)))), dd.edges().forEach((Jd => rJ(dd.edge(Jd))))
    }

    function rJ(dd) {
      let Jd = dd.width;
      dd.width = dd.height, dd.height = Jd
    }

    function uJ(dd) {
      dd.y = -dd.y
    }

    function tJ(dd) {
      let Jd = dd.x;
      dd.x = dd.y, dd.y = Jd
    }

    function VJ(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        kd = {},
        pd = dd.nodes().filter((Jd => !dd.children(Jd).length)),
        Nd = pd.map((Jd => dd.node(Jd).rank)),
        Wd = JJ(Vd(Math.max, Nd) + 1).map((() => []));
      return pd.sort(((Jd, kd) => dd.node(Jd).rank - dd.node(kd).rank)).forEach((function pd(Nd) {
        if (kd[Nd]) return;
        kd[Nd] = !0;
        let Pd = dd.node(Nd);
        Wd[Pd.rank].push(Nd);
        let Zd = dd.successors(Nd);
        Zd && [...Zd].sort(((kd, pd) => function(kd, pd) {
          let Nd = dd.node(kd),
            Wd = dd.node(pd);
          return WJ(Jd, Nd, Wd)
        }(kd, pd))).forEach(pd)
      })), Wd
    }

    function zJ(dd, Jd) {
      let kd = 0;
      for (let pd = 1; pd < Jd.length; ++pd) kd += HJ(dd, Jd[pd - 1], Jd[pd]);
      return kd
    }

    function HJ(dd, Jd, kd) {
      let pd = function(dd, Jd) {
          return dd.reduce(((dd, kd, pd) => (dd[kd] = Jd[pd], dd)), {})
        }(kd, kd.map(((dd, Jd) => Jd))),
        Nd = Jd.flatMap((Jd => {
          let kd = dd.outEdges(Jd);
          return kd ? kd.map((Jd => ({
            pos: pd[Jd.w],
            weight: dd.edge(Jd).weight
          }))).sort(((dd, Jd) => dd.pos - Jd.pos)) : []
        })),
        Wd = 1;
      for (; Wd < kd.length;) Wd <<= 1;
      let Pd = 2 * Wd - 1;
      Wd -= 1;
      let Zd = new Array(Pd).fill(0),
        gd = 0;
      return Nd.forEach((dd => {
        let Jd = dd.pos + Wd;
        Zd[Jd] += dd.weight;
        let kd = 0;
        for (; Jd > 0;) Jd % 2 && (kd += Zd[Jd + 1]), Jd = Jd - 1 >> 1, Zd[Jd] += dd.weight;
        gd += dd.weight * kd
      })), gd
    }

    function wJ(dd, Jd) {
      let kd = {};
      return dd.forEach(((dd, Jd) => {
          let pd = {
            indegree: 0,
            in: [],
            out: [],
            vs: [dd.v],
            i: Jd
          };
          void 0 !== dd.barycenter && (pd.barycenter = dd.barycenter, pd.weight = dd.weight), kd[dd.v] = pd
        })), Jd.edges().forEach((dd => {
          let Jd = kd[dd.v],
            pd = kd[dd.w];
          void 0 !== Jd && void 0 !== pd && (pd.indegree++, Jd.out.push(pd))
        })),
        function(dd) {
          let Jd = [];

          function kd(dd) {
            return Jd => {
              Jd.merged || (void 0 === Jd.barycenter || void 0 === dd.barycenter || Jd.barycenter >= dd.barycenter) && function(dd, Jd) {
                let kd = 0,
                  pd = 0;
                dd.weight && (kd += dd.barycenter * dd.weight, pd += dd.weight), Jd.weight && (kd += Jd.barycenter * Jd.weight, pd += Jd.weight), dd.vs = Jd.vs.concat(dd.vs), dd.barycenter = kd / pd, dd.weight = pd, dd.i = Math.min(Jd.i, dd.i), Jd.merged = !0
              }(dd, Jd)
            }
          }

          function pd(Jd) {
            return kd => {
              kd.in.push(Jd), 0 === --kd.indegree && dd.push(kd)
            }
          }
          for (; dd.length;) {
            let Nd = dd.pop();
            Jd.push(Nd), Nd.in.reverse().forEach(kd(Nd)), Nd.out.forEach(pd(Nd))
          }
          return Jd.filter((dd => !dd.merged)).map((dd => kJ(dd, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(kd).filter((dd => !dd.indegree)))
    }

    function AJ(dd, Jd, kd, pd, Nd) {
      let Wd = {},
        Pd = null,
        Zd = null,
        gd = Nd;
      "boolean" == typeof Jd ? (gd = Jd, Wd = {}) : Jd && (Wd = Jd, Pd = null != kd ? kd : null, Zd = null != pd ? pd : null);
      let Cd = function(dd, Jd) {
          let kd = {
            lhs: [],
            rhs: []
          };
          return dd.forEach((dd => {
            Jd(dd) ? kd.lhs.push(dd) : kd.rhs.push(dd)
          })), kd
        }(dd, (dd => Object.hasOwn(dd, "barycenter"))),
        Kd = Cd.lhs,
        od = Cd.rhs.sort(((dd, Jd) => Jd.i - dd.i)),
        ld = [],
        Qd = 0,
        Ld = 0,
        Od = 0;
      Kd.sort(function(dd, Jd, kd) {
        return (pd, Nd) => {
          if (pd.barycenter < Nd.barycenter) return -1;
          if (pd.barycenter > Nd.barycenter) return 1;
          if (dd && ("string" == typeof pd.vs[0] || "string" == typeof Nd.vs[0])) {
            let kd = dd.node(pd.vs[0]),
              Wd = dd.node(Nd.vs[0]),
              Pd = WJ(Jd, kd, Wd);
            if (0 !== Pd) return Pd
          }
          return kd ? Nd.i - pd.i : pd.i - Nd.i
        }
      }(Zd, Pd, !!gd));
      for (let [Rd, Id] of Object.entries(Wd)) {
        let dd = Kd.findIndex((dd => dd.vs[0] === Rd));
        Kd.splice(dd + 1, 0, Id)
      }
      Od = dk(ld, od, Od), Kd.forEach((dd => {
        Od += dd.vs.length, ld.push(dd.vs), Qd += dd.barycenter * dd.weight, Ld += dd.weight, Od = dk(ld, od, Od)
      }));
      let ed = {
        vs: ld.flat(1)
      };
      return Ld && (ed.barycenter = Qd / Ld, ed.weight = Ld), ed
    }

    function dk(dd, Jd, kd) {
      let pd;
      for (; Jd.length && (pd = Jd[Jd.length - 1]).i <= kd;) Jd.pop(), dd.push(pd.vs), kd++;
      return kd
    }

    function Jk(dd, Jd, kd, pd, Nd) {
      var Wd, Pd, Zd, gd, Cd, Kd, od, ld, Qd, Ld, Od;
      let ed = null,
        Rd = Nd;
      "boolean" == typeof pd ? (Rd = pd, ed = null) : void 0 !== pd && (ed = pd);
      let Id = dd.children(Jd),
        Gd = dd.node(Jd),
        vd = Gd ? Gd.borderLeft : void 0,
        xd = Gd ? Gd.borderRight : void 0,
        qd = {};
      vd && (Id = Id.filter((dd => dd !== vd && dd !== xd)));
      let Bd = function(dd) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Jd => {
          let kd = dd.inEdges(Jd);
          if (!kd || !kd.length) return {
            v: Jd
          };
          {
            let pd = kd.reduce(((Jd, kd) => {
              let pd = dd.edge(kd),
                Nd = dd.node(kd.v);
              return {
                sum: Jd.sum + pd.weight * Nd.order,
                weight: Jd.weight + pd.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Jd,
              barycenter: pd.sum / pd.weight,
              weight: pd.weight
            }
          }
        }))
      }(dd, Id);
      Bd.forEach((Jd => {
        if (dd.children(Jd.v).length) {
          let {
            result: pd
          } = Jk(dd, Jd.v, kd, ed, Rd);
          qd[Jd.v] = pd, Object.hasOwn(pd, "barycenter") && function(dd, Jd) {
            void 0 !== dd.barycenter ? (dd.barycenter = (dd.barycenter * dd.weight + Jd.barycenter * Jd.weight) / (dd.weight + Jd.weight), dd.weight += Jd.weight) : (dd.barycenter = Jd.barycenter, dd.weight = Jd.weight)
          }(Jd, pd)
        }
      }));
      let sd = wJ(Bd, kd);
      ! function(dd, Jd) {
        dd.forEach((dd => {
          dd.vs = dd.vs.flatMap((dd => Jd[dd] ? Jd[dd].vs : dd))
        }))
      }(sd, qd);
      let ad = {},
        Md = !1;
      for (let Yd = 0; Yd < sd.length; Yd++)
        for (let Jd = Yd + 1; Jd < sd.length; Jd++)
          if (sd[Yd] && sd[Jd] && null != (Wd = sd[Yd]) && Wd.barycenter && null != (Pd = sd[Jd]) && Pd.barycenter && (null == (Zd = sd[Yd]) ? void 0 : Zd.barycenter) === sd[Jd].barycenter) {
            let kd = null != (Cd = null == (gd = sd[Yd]) ? void 0 : gd.vs[0]) ? Cd : "",
              pd = null != (od = null == (Kd = sd[Jd]) ? void 0 : Kd.vs[0]) ? od : "",
              Nd = dd.node(kd),
              Wd = dd.node(pd);
            if ("edge" === Nd.dummy && "edge" === Wd.dummy && (null == (ld = Nd.edgeObj) ? void 0 : ld.v) === (null == (Qd = Wd.edgeObj) ? void 0 : Qd.v) && (null == (Ld = Nd.edgeObj) ? void 0 : Ld.w) === (null == (Od = Wd.edgeObj) ? void 0 : Od.w)) {
              if (Nd.edgeLabel.reversed) {
                ad[pd] = sd[Yd], sd.splice(Yd, 1), Yd--;
                break
              }
              ad[kd] = sd[Jd], sd.splice(Jd, 1), Jd--
            } else Md = !0
          } let Fd = AJ(sd, ad, ed, dd, Rd);
      if (vd && xd) {
        Fd.vs = [vd, Fd.vs, xd].flat(1);
        let Jd = dd.predecessors(vd);
        if (Jd && Jd.length) {
          let kd = dd.node(Jd[0]),
            pd = dd.predecessors(xd),
            Nd = dd.node(pd[0]);
          Object.hasOwn(Fd, "barycenter") || (Fd.barycenter = 0, Fd.weight = 0), Fd.barycenter = (Fd.barycenter * Fd.weight + kd.order + Nd.order) / (Fd.weight + 2), Fd.weight += 2
        }
      }
      return Object.defineProperty(Fd, "result", {
        value: Fd,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Fd, "usedBias", {
        value: Md,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Fd
    }

    function kk(dd, Jd, kd, pd) {
      pd || (pd = dd.nodes());
      let Nd = function(dd) {
          let Jd;
          for (; dd.hasNode(Jd = dJ("_root")););
          return Jd
        }(dd),
        Wd = new Td({
          compound: !0
        }).setGraph({
          root: Nd
        }).setDefaultNodeLabel((Jd => dd.node(Jd)));
      return pd.forEach((pd => {
        let Pd = dd.node(pd),
          Zd = dd.parent(pd);
        if (Pd.rank === Jd || Pd.minRank <= Jd && Jd <= Pd.maxRank) {
          Wd.setNode(pd), Wd.setParent(pd, Zd || Nd);
          let gd = dd[kd](pd);
          gd && gd.forEach((Jd => {
            let kd = Jd.v === pd ? Jd.w : Jd.v,
              Nd = Wd.edge(kd, pd),
              Pd = void 0 !== Nd ? Nd.weight : 0;
            Wd.setEdge(kd, pd, {
              weight: dd.edge(Jd).weight + Pd
            })
          })), Object.hasOwn(Pd, "minRank") && Wd.setNode(pd, {
            borderLeft: Pd.borderLeft[Jd],
            borderRight: Pd.borderRight[Jd]
          })
        }
      })), Wd
    }

    function pk(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Jd.customOrder) return void Jd.customOrder(dd, pk);
      let pd = zd(dd),
        Nd = Nk(dd, JJ(1, pd + 1), "inEdges"),
        Wd = Nk(dd, JJ(pd - 1, -1, -1), "outEdges"),
        Pd = VJ(dd, kd);
      if (Pk(dd, Pd), Jd.disableOptimalOrderHeuristic) return;
      let Zd, gd = Number.POSITIVE_INFINITY,
        Cd = Jd.constraints || [];
      for (let Kd = 0, od = 0; od < 4; ++Kd, ++od) {
        Wk(Kd % 2 ? Nd : Wd, Kd % 4 >= 2, Cd, kd), Pd = rd(dd);
        let Jd = zJ(dd, Pd);
        Jd < gd ? (od = 0, Zd = Object.assign({}, Pd), gd = Jd) : Jd === gd && (Zd = structuredClone(Pd))
      }
      Pk(dd, Zd)
    }

    function Nk(dd, Jd, kd) {
      let pd = new Map,
        Nd = (dd, Jd) => {
          pd.has(dd) || pd.set(dd, []), pd.get(dd).push(Jd)
        };
      for (let Wd of dd.nodes()) {
        let Jd = dd.node(Wd);
        if ("number" == typeof Jd.rank && Nd(Jd.rank, Wd), "number" == typeof Jd.minRank && "number" == typeof Jd.maxRank)
          for (let dd = Jd.minRank; dd <= Jd.maxRank; dd++) dd !== Jd.rank && Nd(dd, Wd)
      }
      return Jd.map((function(Jd) {
        return kk(dd, Jd, kd, pd.get(Jd) || [])
      }))
    }

    function Wk(dd, Jd, kd, pd) {
      let Nd = !0,
        Wd = new Td;
      dd.forEach((function(dd) {
        kd.forEach((dd => Wd.setEdge(dd.left, dd.right)));
        let Pd = dd.graph().root,
          {
            result: Zd,
            usedBias: gd
          } = Jk(dd, Pd, Wd, pd, Nd);
        Jd && gd && (Nd = !Nd), Zd.vs.forEach(((Jd, kd) => dd.node(Jd).order = kd)),
          function(dd, Jd, kd) {
            let pd, Nd = {};
            kd.forEach((kd => {
              let Wd, Pd, Zd = dd.parent(kd);
              for (; Zd;) {
                if (Wd = dd.parent(Zd), Wd ? (Pd = Nd[Wd], Nd[Wd] = Zd) : (Pd = pd, pd = Zd), Pd && Pd !== Zd) return void Jd.setEdge(Pd, Zd);
                Zd = Wd
              }
            }))
          }(dd, Wd, Zd.vs)
      }))
    }

    function Pk(dd, Jd) {
      Object.values(Jd).forEach((Jd => Jd.forEach(((Jd, kd) => dd.node(Jd).order = kd))))
    }

    function Zk(dd, Jd, kd) {
      if (Jd > kd) {
        let dd = Jd;
        Jd = kd, kd = dd
      }
      let pd = dd[Jd];
      pd || (dd[Jd] = pd = {}), pd[kd] = !0
    }

    function gk(dd, Jd, kd) {
      if (Jd > kd) {
        let dd = Jd;
        Jd = kd, kd = dd
      }
      let pd = dd[Jd];
      return void 0 !== pd && Object.hasOwn(pd, kd)
    }

    function Ck(dd, Jd, kd, pd) {
      let Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Wd = {},
        Pd = function(dd, Jd, kd, pd) {
          let Nd = new Td,
            Wd = dd.graph(),
            Pd = function(dd, Jd, kd) {
              return (pd, Nd, Wd) => {
                let Pd, Zd = pd.node(Nd),
                  gd = pd.node(Wd),
                  Cd = 0;
                if (Cd += Zd.width / 2, Object.hasOwn(Zd, "labelpos")) switch (Zd.labelpos.toLowerCase()) {
                  case "l":
                    Pd = -Zd.width / 2;
                    break;
                  case "r":
                    Pd = Zd.width / 2
                }
                if (Pd && (Cd += kd ? Pd : -Pd), Pd = void 0, Cd += (Zd.dummy ? Jd : dd) / 2, Cd += (gd.dummy ? Jd : dd) / 2, Cd += gd.width / 2, Object.hasOwn(gd, "labelpos")) switch (gd.labelpos.toLowerCase()) {
                  case "l":
                    Pd = gd.width / 2;
                    break;
                  case "r":
                    Pd = -gd.width / 2
                }
                return Pd && (Cd += kd ? Pd : -Pd), Cd
              }
            }(Wd.nodesep, Wd.edgesep, pd);
          return Jd.forEach((Jd => {
            let pd;
            Jd.forEach((Jd => {
              let Wd = kd[Jd];
              if (void 0 !== Wd) {
                if (Nd.setNode(Wd), void 0 !== pd) {
                  let Zd = kd[pd];
                  if (void 0 !== Zd) {
                    let kd = Nd.edge(Zd, Wd);
                    Nd.setEdge(Zd, Wd, Math.max(Pd(dd, Jd, pd), kd || 0))
                  }
                }
                pd = Jd
              }
            }))
          })), Nd
        }(dd, Jd, kd, Nd),
        Zd = Nd ? "borderLeft" : "borderRight";

      function gd(dd, Jd) {
        let kd = Pd.nodes().slice(),
          pd = {},
          Nd = kd.pop();
        for (; Nd;) {
          if (pd[Nd]) dd(Nd);
          else {
            pd[Nd] = !0, kd.push(Nd);
            for (let dd of Jd(Nd)) kd.push(dd)
          }
          Nd = kd.pop()
        }
      }
      return gd((function(dd) {
        let Jd = Pd.inEdges(dd);
        Wd[dd] = Jd ? Jd.reduce(((dd, Jd) => {
          var kd;
          let pd = null != (kd = Wd[Jd.v]) ? kd : 0,
            Nd = Pd.edge(Jd);
          return Math.max(dd, pd + (void 0 !== Nd ? Nd : 0))
        }), 0) : 0
      }), (function(dd) {
        return Pd.predecessors(dd) || []
      })), gd((function(Jd) {
        let kd = Pd.outEdges(Jd),
          pd = Number.POSITIVE_INFINITY;
        kd && (pd = kd.reduce(((dd, Jd) => {
          let kd = Wd[Jd.w],
            pd = Pd.edge(Jd);
          return Math.min(dd, (void 0 !== kd ? kd : 0) - (void 0 !== pd ? pd : 0))
        }), Number.POSITIVE_INFINITY));
        let Nd = dd.node(Jd);
        pd !== Number.POSITIVE_INFINITY && Nd.borderType !== Zd && (Wd[Jd] = Math.max(void 0 !== Wd[Jd] ? Wd[Jd] : 0, pd))
      }), (function(dd) {
        return Pd.successors(dd) || []
      })), Object.keys(pd).forEach((dd => {
        var Jd;
        let pd = kd[dd];
        void 0 !== pd && (Wd[dd] = null != (Jd = Wd[pd]) ? Jd : 0)
      })), Wd
    }

    function Kk(dd, Jd) {
      let kd, pd = rd(dd),
        Nd = Object.assign(function(dd, Jd) {
          let kd = {};
          return Jd.length && Jd.reduce((function(Jd, pd) {
            let Nd = 0,
              Wd = 0,
              Pd = Jd.length,
              Zd = pd[pd.length - 1];
            return pd.forEach(((Jd, gd) => {
              let Cd = function(dd, Jd) {
                  if (dd.node(Jd).dummy) {
                    let kd = dd.predecessors(Jd);
                    if (kd) return kd.find((Jd => dd.node(Jd).dummy))
                  }
                }(dd, Jd),
                Kd = Cd ? dd.node(Cd).order : Pd;
              (Cd || Jd === Zd) && (pd.slice(Wd, gd + 1).forEach((Jd => {
                let pd = dd.predecessors(Jd);
                pd && pd.forEach((pd => {
                  let Wd = dd.node(pd),
                    Pd = Wd.order;
                  (Pd < Nd || Kd < Pd) && (!Wd.dummy || !dd.node(Jd).dummy) && Zk(kd, pd, Jd)
                }))
              })), Wd = gd + 1, Nd = Kd)
            })), pd
          })), kd
        }(dd, pd), function(dd, Jd) {
          let kd = {};

          function pd(Jd, pd, Nd, Wd, Pd) {
            JJ(pd, Nd).forEach((pd => {
              let Nd = Jd[pd];
              if (void 0 !== Nd && dd.node(Nd).dummy) {
                let Jd = dd.predecessors(Nd);
                Jd && Jd.forEach((Jd => {
                  if (void 0 === Jd) return;
                  let pd = dd.node(Jd);
                  pd.dummy && (pd.order < Wd || pd.order > Pd) && Zk(kd, Jd, Nd)
                }))
              }
            }))
          }
          return Jd.length && Jd.reduce((function(Jd, kd) {
            let Nd = -1,
              Wd = -1,
              Pd = 0;
            return kd.forEach(((Zd, gd) => {
              if ("border" === dd.node(Zd).dummy) {
                let Jd = dd.predecessors(Zd);
                if (Jd && Jd.length) {
                  let Zd = Jd[0];
                  if (void 0 === Zd) return;
                  Wd = dd.node(Zd).order, pd(kd, Pd, gd, Nd, Wd), Pd = gd, Nd = Wd
                }
              }
              pd(kd, Pd, kd.length, Wd, Jd.length)
            })), kd
          })), kd
        }(dd, pd)),
        Wd = {};
      ["u", "d"].forEach((Pd => {
        kd = "u" === Pd ? pd : Object.values(pd).reverse(), ["l", "r"].forEach((pd => {
          "r" === pd && (kd = kd.map((dd => Object.values(dd).reverse())));
          let Zd = function(dd, Jd, kd, pd, Nd) {
              let Wd = {},
                Pd = {},
                Zd = {};
              return Jd.forEach((dd => {
                dd.forEach(((dd, Jd) => {
                  Wd[dd] = dd, Pd[dd] = dd, Zd[dd] = Jd
                }))
              })), Jd.forEach((Jd => {
                let gd = -1,
                  Cd = -1,
                  Kd = !1,
                  od = Jd,
                  ld = Jd.findIndex((Jd => (null == Nd ? void 0 : Nd.includes(Jd)) || lk(Jd, dd, Nd)));
                ld > 0 && (od = [Jd[ld], ...Jd.slice(0, ld), ...Jd.slice(ld + 1)], Kd = !0), od.forEach((Jd => {
                  var od;
                  let ld = pd(Jd);
                  if (ld && ld.length) {
                    null != Nd && Nd.includes(Jd) && (ld = ld.filter((Jd => lk(Jd, dd, Nd))));
                    let pd = ld.sort(((dd, Jd) => {
                        let kd = Zd[dd],
                          pd = Zd[Jd];
                        return (void 0 !== kd ? kd : 0) - (void 0 !== pd ? pd : 0)
                      })),
                      Qd = (pd.length - 1) / 2;
                    for (let dd = Math.floor(Qd), Nd = Math.ceil(Qd); dd <= Nd; ++dd) {
                      let Nd = pd[dd];
                      if (void 0 === Nd) continue;
                      let ld = Zd[Nd];
                      if (void 0 !== ld && Pd[Jd] === Jd && gd < ld && Zd[Nd] !== Cd && !gk(kd, Jd, Nd)) {
                        let dd = Wd[Nd];
                        void 0 !== dd && (Pd[Nd] = Jd, Pd[Jd] = Wd[Jd] = dd, gd = ld, Kd && (gd = -1, Cd = null != (od = Zd[Nd]) ? od : -1, Kd = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Wd,
                align: Pd
              }
            }(dd, kd, Nd, (Jd => ("u" === Pd ? dd.predecessors(Jd) : dd.successors(Jd)) || []), Jd),
            gd = Ck(dd, kd, Zd.root, Zd.align, "r" === pd);
          "r" === pd && (gd = pJ(gd, (dd => -dd))), Wd[Pd + pd] = gd
        }))
      }));
      let Pd = function(dd, Jd) {
        return Object.values(Jd).reduce(((Jd, kd) => {
          let pd = Number.NEGATIVE_INFINITY,
            Nd = Number.POSITIVE_INFINITY;
          Object.entries(kd).forEach((Jd => {
            let [kd, Wd] = Jd, Pd = function(dd, Jd) {
              return dd.node(Jd).width
            }(dd, kd) / 2;
            pd = Math.max(Wd + Pd, pd), Nd = Math.min(Wd - Pd, Nd)
          }));
          let Wd = pd - Nd;
          return Wd < Jd[0] && (Jd = [Wd, kd]), Jd
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(dd, Wd);
      return function(dd, Jd) {
          let kd = Object.values(Jd),
            pd = Vd(Math.min, kd),
            Nd = Vd(Math.max, kd);
          ["u", "d"].forEach((kd => {
            ["l", "r"].forEach((Wd => {
              let Pd = kd + Wd,
                Zd = dd[Pd];
              if (!Zd || Zd === Jd) return;
              let gd = Object.values(Zd),
                Cd = pd - Vd(Math.min, gd);
              "l" !== Wd && (Cd = Nd - Vd(Math.max, gd)), Cd && (dd[Pd] = pJ(Zd, (dd => dd + Cd)))
            }))
          }))
        }(Wd, Pd),
        function(dd) {
          let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            kd = dd.ul;
          return kd ? pJ(kd, ((kd, pd) => {
            var Nd, Wd;
            if (Jd) {
              let kd = Jd.toLowerCase(),
                Nd = dd[kd];
              if (Nd && void 0 !== Nd[pd]) return Nd[pd]
            }
            let Pd = Object.values(dd).map((dd => {
              let Jd = dd[pd];
              return void 0 !== Jd ? Jd : 0
            })).sort(((dd, Jd) => dd - Jd));
            return ((null != (Nd = Pd[1]) ? Nd : 0) + (null != (Wd = Pd[2]) ? Wd : 0)) / 2
          })) : {}
        }(Wd, dd.graph().align)
    }

    function lk(dd, Jd, kd) {
      var pd;
      if (!kd) return !1;
      let Nd = null == (pd = Jd.node(dd)) ? void 0 : pd.edgeObj;
      if (!Nd || Jd.node(dd).edgeLabel.reversed) return !1;
      let Wd = kd.indexOf(null == Nd ? void 0 : Nd.v),
        Pd = kd.indexOf(null == Nd ? void 0 : Nd.w);
      return -1 !== Wd && -1 !== Pd && Wd === (Pd + 1) % kd.length || Wd === (Pd - 1) % kd.length
    }

    function Qk(dd, Jd) {
      (function(dd) {
        let Jd = rd(dd),
          kd = dd.graph(),
          pd = kd.ranksep,
          Nd = kd.rankalign,
          Wd = 0;
        Jd.forEach((Jd => {
          let kd = Jd.reduce(((Jd, kd) => {
            var pd;
            let Nd = null != (pd = dd.node(kd).height) ? pd : 0;
            return Jd > Nd ? Jd : Nd
          }), 0);
          Jd.forEach((Jd => {
            let pd = dd.node(Jd);
            pd.y = "top" === Nd ? Wd + pd.height / 2 : "bottom" === Nd ? Wd + kd - pd.height / 2 : Wd + kd / 2
          })), Wd += kd + pd
        }))
      })(dd = cd(dd)), Object.entries(Kk(dd, Jd)).forEach((Jd => {
        let [kd, pd] = Jd;
        return dd.node(kd).x = pd
      }))
    }
    var Lk = new WeakMap;

    function Ok(dd) {
      return Rk(dd, wd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), dd
    }

    function ek(dd, Jd, kd) {
      let pd = Jd;
      for (; void 0 !== pd;) {
        let Jd = dd.parent(pd);
        if (Jd === kd) return pd;
        pd = Jd
      }
    }

    function Rk(dd, Jd, kd) {
      var pd;
      let Nd = dd.nodes().filter((Jd => dd.children(Jd).length)),
        Wd = {};
      Nd.forEach((pd => {
        let Nd = dd.node(pd);
        if (Nd && Nd.rankdir) {
          let Pd = new Td({
            multigraph: !0,
            compound: !0
          });
          Pd.setGraph({
            rankdir: Nd.rankdir
          });
          let Zd = dd.children(pd);
          Zd.forEach((Jd => {
            let kd = {
              ...dd.node(Jd)
            };
            Pd.setNode(Jd, kd);
            let Nd = dd.parent(Jd);
            Nd && Nd !== pd && Zd.includes(Nd) && Pd.setParent(Jd, Nd)
          }));
          let gd = new Set;
          dd.edges().forEach((Jd => {
            let kd = ek(dd, Jd.v, pd),
              Nd = ek(dd, Jd.w, pd);
            if (kd && Nd && kd !== Nd) {
              let pd = `${kd}\0${Nd}`;
              gd.has(pd) || (gd.add(pd), Pd.setEdge(kd, Nd, {
                ...dd.edge(Jd)
              }))
            }
          })), Rk(Pd, Jd, kd);
          let Cd = Fk(Pd);
          Ik(Cd, Jd, kd, null), Gk(Pd, Cd);
          let Kd = 1 / 0,
            od = 1 / 0,
            ld = -1 / 0,
            Qd = -1 / 0;
          Pd.nodes().forEach((dd => {
            if (dd === pd) return;
            let Jd = Pd.node(dd);
            Jd && "number" == typeof Jd.x && "number" == typeof Jd.y && "number" == typeof Jd.width && "number" == typeof Jd.height && (Kd = Math.min(Kd, Jd.x - Jd.width / 2), ld = Math.max(ld, Jd.x + Jd.width / 2), od = Math.min(od, Jd.y - Jd.height / 2), Qd = Math.max(Qd, Jd.y + Jd.height / 2))
          })), (!isFinite(Kd) || !isFinite(od) || !isFinite(ld) || !isFinite(Qd)) && (Kd = od = 0, ld = Qd = 0);
          let Ld = ld - Kd,
            Od = Qd - od;
          Wd[pd] = {
            minX: Kd,
            KW: od,
            maxX: ld,
            oW: Qd,
            width: Ld,
            height: Od,
            offsetX: Kd,
            offsetY: od
          }, Nd._dagreClusterSubgraph = Pd
        }
      }));
      let Pd = [],
        Zd = new Map;
      Nd.forEach((Jd => {
        let kd = dd.node(Jd);
        kd && kd.rankdir && Wd[Jd] && Zd.set(Jd, (dd.children(Jd) || []).filter((dd => dd !== Jd)))
      }));
      let gd = new Set([...Zd.values()].flat()),
        Cd = new Map;
      Zd.forEach(((Jd, kd) => {
        gd.has(kd) || Cd.set(kd, (Jd => {
          let kd = [],
            pd = (dd.children(Jd) || []).filter((dd => dd !== Jd));
          for (; pd.length > 0;) {
            let Jd = pd.shift();
            kd.push(Jd), (dd.children(Jd) || []).filter((dd => dd !== Jd)).forEach((dd => pd.push(dd)))
          }
          return kd
        })(kd))
      }));
      let Kd = new Set([...Cd.values()].flat()),
        od = dd => {
          for (let [Jd, kd] of Cd)
            if (kd.includes(dd)) return Jd;
          return dd
        },
        ld = [];
      dd.edges().forEach((Jd => {
        (Kd.has(Jd.v) || Kd.has(Jd.w)) && ld.push({
          edge: Jd,
          label: dd.edge(Jd)
        })
      }));
      let Qd = new Map;
      Kd.forEach((Jd => {
        let kd = dd.parent(Jd);
        Qd.set(Jd, "string" == typeof kd ? kd : void 0)
      })), Cd.forEach(((Jd, kd) => {
        let pd = dd.node(kd),
          Nd = [];
        Jd.forEach((Jd => {
          let kd = dd.node(Jd);
          kd && (Nd.push({
            id: Jd,
            node: kd,
            parent: Qd.get(Jd)
          }), dd.removeNode(Jd))
        }));
        let Zd = ld.filter((dd => {
            let {
              edge: kd
            } = dd;
            return Jd.includes(kd.v) || Jd.includes(kd.w)
          })),
          gd = Wd[kd];
        pd && (Pd.push({
          clusterId: kd,
          subgraph: pd._dagreClusterSubgraph,
          bounds: gd,
          children: Jd,
          removedNodes: Nd,
          removedEdges: Zd
        }), pd.width = gd.width, pd.height = gd.height)
      }));
      let Ld = new Set;
      ld.forEach((Jd => {
        let {
          edge: kd,
          label: pd
        } = Jd, Nd = od(kd.v), Wd = od(kd.w);
        if (Nd !== Wd && dd.hasNode(Nd) && dd.hasNode(Wd)) {
          let Jd = `${Nd}\0${Wd}`;
          Ld.has(Jd) || (Ld.add(Jd), dd.setEdge(Nd, Wd, {
            ...pd,
            width: 0,
            height: 0
          }))
        }
      }));
      let Od = Fk(dd),
        ed = Ik(Od, Jd, kd, null != (pd = Lk.get(dd)) ? pd : null);
      Lk.set(dd, ed), Gk(dd, Od), Ld.forEach((Jd => {
        let kd = Jd.indexOf("\0"),
          pd = Jd.slice(0, kd),
          Nd = Jd.slice(kd + 1);
        dd.hasEdge(pd, Nd) && dd.removeEdge(pd, Nd)
      })), Pd.forEach((Jd => {
        let {
          clusterId: kd,
          subgraph: pd,
          bounds: Nd,
          removedNodes: Wd,
          removedEdges: Pd
        } = Jd;
        var Zd, gd;
        let Cd = dd.node(kd),
          Kd = null != (Zd = null == Cd ? void 0 : Cd.x) ? Zd : 0,
          od = null != (gd = null == Cd ? void 0 : Cd.y) ? gd : 0,
          ld = (Nd.minX + Nd.maxX) / 2,
          Qd = (Nd.KW + Nd.oW) / 2;
        Wd.forEach((Jd => {
          let {
            id: kd,
            node: pd,
            parent: Nd
          } = Jd;
          dd.setNode(kd, pd), void 0 !== Nd && dd.setParent(kd, Nd)
        })), Pd.forEach((Jd => {
          let {
            edge: kd,
            label: pd
          } = Jd;
          dd.setEdge(kd, pd)
        })), pd.nodes().forEach((Jd => {
          if (Jd === kd) return;
          let Nd = pd.node(Jd),
            Wd = dd.node(Jd);
          Wd && Nd && "number" == typeof Nd.x && "number" == typeof Nd.y && (Wd.x = Kd + (Nd.x - ld), Wd.y = od + (Nd.y - Qd))
        })), delete Cd._dagreClusterSubgraph
      })), Nd.forEach((Jd => {
        var kd, pd;
        let Nd = dd.node(Jd),
          Pd = Wd[Jd];
        if (Nd && Nd.rankdir && Nd._dagreClusterSubgraph && Pd) {
          let Wd = Nd._dagreClusterSubgraph,
            Zd = null != (kd = Nd.x) ? kd : 0,
            gd = null != (pd = Nd.y) ? pd : 0,
            Cd = (Pd.minX + Pd.maxX) / 2,
            Kd = (Pd.KW + Pd.oW) / 2;
          Wd.nodes().forEach((kd => {
            if (kd === Jd) return;
            let pd = Wd.node(kd),
              Nd = dd.node(kd);
            if (Nd && pd && "number" == typeof pd.x && "number" == typeof pd.y) {
              let dd = pd.x - Cd,
                Jd = pd.y - Kd;
              Nd.x = Zd + dd, Nd.y = gd + Jd
            }
          })), delete Nd._dagreClusterSubgraph
        }
      }))
    }

    function Ik(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Nd, Wd;
      let Pd = !1 !== (null == kd ? void 0 : kd.useDynamic),
        Zd = Pd && null != (Nd = null == pd ? void 0 : pd.graph) ? Nd : null,
        gd = Pd && null != (Wd = null == pd ? void 0 : pd.rawNodes) ? Wd : null;
      Jd("    makeSpaceForEdgeLabels", (() => function(dd) {
        let Jd = dd.graph();
        Jd.ranksep /= 2, dd.edges().forEach((kd => {
          var pd;
          let Nd = dd.edge(kd);
          Nd.minlen *= 2, "c" !== (null != (pd = Nd.labelpos) ? pd : "r").toLowerCase() && ("TB" === Jd.rankdir || "BT" === Jd.rankdir ? Nd.width += Nd.labeloffset : Nd.height += Nd.labeloffset)
        }))
      }(dd))), Jd("    removeSelfEdges", (() => function(dd) {
        dd.edges().forEach((Jd => {
          if (Jd.v === Jd.w) {
            let kd = dd.node(Jd.v);
            kd.selfEdges || (kd.selfEdges = []), kd.selfEdges.push({
              e: Jd,
              label: dd.edge(Jd)
            }), dd.removeEdge(Jd)
          }
        }))
      }(dd))), Jd("    acyclic", (() => LJ(dd, Zd))), Jd("    nestingGraph.run", (() => yJ(dd))), Jd("    rank", (() => XJ(cd(dd)))), Jd("    injectEdgeLabelProxies", (() => function(dd) {
        dd.edges().forEach((Jd => {
          let kd = dd.edge(Jd);
          if (kd.width && kd.height) {
            let kd = dd.node(Jd.v),
              pd = {
                rank: (dd.node(Jd.w).rank - kd.rank) / 2 + kd.rank,
                e: Jd
              };
            Ed(dd, "edge-proxy", pd, "_ep")
          }
        }))
      }(dd))), Jd("    removeEmptyRanks", (() => function(dd) {
        let Jd = dd.nodes().map((Jd => dd.node(Jd).rank)).filter((dd => void 0 !== dd)),
          kd = Vd(Math.min, Jd),
          pd = [];
        dd.nodes().forEach((Jd => {
          let Nd = dd.node(Jd).rank - kd;
          pd[Nd] || (pd[Nd] = []), pd[Nd].push(Jd)
        }));
        let Nd = 0,
          Wd = dd.graph().nodeRankFactor;
        Array.from(pd).forEach(((Jd, kd) => {
          void 0 === Jd && kd % Wd !== 0 ? --Nd : void 0 !== Jd && Nd && Jd.forEach((Jd => dd.node(Jd).rank += Nd))
        }))
      }(dd))), Jd("    nestingGraph.cleanup", (() => function(dd) {
        let Jd = dd.graph();
        dd.removeNode(Jd.nestingRoot), delete Jd.nestingRoot, dd.edges().forEach((Jd => {
          dd.edge(Jd).nestingEdge && dd.removeEdge(Jd)
        }))
      }(dd))), Jd("    normalizeRanks", (() => function(dd) {
        let Jd = dd.nodes().map((Jd => {
            let kd = dd.node(Jd).rank;
            return void 0 === kd ? Number.MAX_VALUE : kd
          })),
          kd = Vd(Math.min, Jd);
        dd.nodes().forEach((Jd => {
          let pd = dd.node(Jd);
          Object.hasOwn(pd, "rank") && (pd.rank -= kd)
        }))
      }(dd))), Jd("    assignRankMinMax", (() => function(dd) {
        let Jd = 0;
        dd.nodes().forEach((kd => {
          let pd = dd.node(kd);
          pd.borderTop && (pd.minRank = dd.node(pd.borderTop).rank, pd.maxRank = dd.node(pd.borderBottom).rank, Jd = Math.max(Jd, pd.maxRank))
        })), dd.graph().maxRank = Jd
      }(dd))), Jd("    removeEdgeLabelProxies", (() => function(dd) {
        dd.nodes().forEach((Jd => {
          let kd = dd.node(Jd);
          if ("edge-proxy" === kd.dummy) {
            let pd = kd;
            dd.edge(pd.e).labelRank = kd.rank, dd.removeNode(Jd)
          }
        }))
      }(dd))), Jd("    normalize.run", (() => OJ(dd))), Jd("    parentDummyChains", (() => UJ(dd))), Jd("    addBorderSegments", (() => TJ(dd))), Jd("    order", (() => pk(dd, kd, gd))), Jd("    insertSelfEdges", (() => function(dd) {
        rd(dd).forEach((Jd => {
          let kd = 0;
          Jd.forEach(((Jd, pd) => {
            let Nd = dd.node(Jd);
            "number" != typeof Nd.rank && (Nd.rank = 0), Nd.order = pd + kd, (Nd.selfEdges || []).forEach((Jd => {
              Ed(dd, "selfedge", {
                width: Jd.label.width,
                height: Jd.label.height,
                rank: Nd.rank,
                order: pd + ++kd,
                e: Jd.e,
                edgeLabel: Jd.label
              }, "_se"), (!Array.isArray(Jd.label.points) || 7 !== Jd.label.points.length) && (Jd.label.points = [{
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
            })), delete Nd.selfEdges
          }))
        }))
      }(dd))), Jd("    adjustCoordinateSystem", (() => function(dd) {
        var Jd;
        let kd = null == (Jd = dd.graph().rankdir) ? void 0 : Jd.toLowerCase();
        ("lr" === kd || "rl" === kd) && hJ(dd)
      }(dd))), Jd("    position", (() => Qk(dd, kd.corePath))), Jd("    positionSelfEdges", (() => function(dd) {
        dd.nodes().forEach((Jd => {
          let kd = dd.node(Jd),
            pd = dd => "number" == typeof dd && isFinite(dd);
          if ("selfedge" === kd.dummy) {
            let Nd = kd,
              Wd = dd.node(Nd.e.v),
              Pd = pd(null == Wd ? void 0 : Wd.x) ? Wd.x : 0,
              Zd = pd(null == Wd ? void 0 : Wd.y) ? Wd.y : 0,
              gd = pd(null == Wd ? void 0 : Wd.width) ? Wd.width : 0,
              Cd = pd(null == Wd ? void 0 : Wd.height) ? Wd.height : 0,
              Kd = pd(kd.x) ? kd.x : Pd,
              od = pd(kd.y) ? kd.y : Zd,
              ld = gd / 2,
              Qd = Cd / 2;
            Nd.edgeLabel.points = [{
              x: Kd + ld,
              y: od - Qd
            }, {
              x: Kd + ld,
              y: od - Qd
            }, {
              x: Kd,
              y: od
            }, {
              x: Kd - ld,
              y: od + Qd
            }, {
              x: Kd - ld,
              y: od + Qd
            }, {
              x: Kd,
              y: od
            }, {
              x: Kd,
              y: od
            }], Nd.edgeLabel.x = Kd, Nd.edgeLabel.y = od, dd.setEdge(Nd.e, Nd.edgeLabel), dd.removeNode(Jd)
          } else kd && Array.isArray(kd.selfEdges) && kd.selfEdges.forEach((dd => {
            if (!Array.isArray(dd.label.points) || 7 !== dd.label.points.length) {
              let Jd = pd(kd.x) ? kd.x : 0,
                Nd = pd(kd.y) ? kd.y : 0,
                Wd = (pd(kd.width) ? kd.width : 0) / 2,
                Pd = (pd(kd.height) ? kd.height : 0) / 2;
              dd.label.points = [{
                x: Jd + Wd,
                y: Nd - Pd
              }, {
                x: Jd + Wd,
                y: Nd - Pd
              }, {
                x: Jd,
                y: Nd
              }, {
                x: Jd - Wd,
                y: Nd + Pd
              }, {
                x: Jd - Wd,
                y: Nd + Pd
              }, {
                x: Jd,
                y: Nd
              }, {
                x: Jd,
                y: Nd
              }]
            }
          }))
        }))
      }(dd)));
      let Cd = JSON.parse(JSON.stringify(dd._nodes));
      return Jd("    removeBorderNodes", (() => function(dd) {
        dd.nodes().forEach((Jd => {
          if (dd.children(Jd).length) {
            let kd = dd.node(Jd),
              pd = dd.node(kd.borderTop),
              Nd = dd.node(kd.borderBottom),
              Wd = dd.node(kd.borderLeft[kd.borderLeft.length - 1]),
              Pd = dd.node(kd.borderRight[kd.borderRight.length - 1]);
            kd.width = Math.abs(Pd.x - Wd.x), kd.height = Math.abs(Nd.y - pd.y), kd.x = Wd.x + kd.width / 2, kd.y = pd.y + kd.height / 2
          }
        })), dd.nodes().forEach((Jd => {
          "border" === dd.node(Jd).dummy && dd.removeNode(Jd)
        }))
      }(dd))), Jd("    normalize.undo", (() => function(dd) {
        dd.graph().dummyChains.forEach((Jd => {
          let kd, pd = dd.node(Jd),
            Nd = pd.edgeLabel;
          for (dd.setEdge(pd.edgeObj, Nd); pd.dummy;) kd = dd.successors(Jd)[0], dd.removeNode(Jd), Nd.points.push({
            x: pd.x,
            y: pd.y
          }), "edge-label" === pd.dummy && (Nd.x = pd.x, Nd.y = pd.y, Nd.width = pd.width, Nd.height = pd.height), Jd = kd, pd = dd.node(Jd)
        }))
      }(dd))), Jd("    fixupEdgeLabelCoords", (() => function(dd) {
        dd.edges().forEach((Jd => {
          let kd = dd.edge(Jd);
          if (Object.hasOwn(kd, "x")) switch (("l" === kd.labelpos || "r" === kd.labelpos) && (kd.width -= kd.labeloffset), kd.labelpos) {
            case "l":
              kd.x -= kd.width / 2 + kd.labeloffset;
              break;
            case "r":
              kd.x += kd.width / 2 + kd.labeloffset
          }
        }))
      }(dd))), Jd("    undoCoordinateSystem", (() => cJ(dd))), Jd("    translateGraph", (() => function(dd) {
        let Jd = Number.POSITIVE_INFINITY,
          kd = 0,
          pd = Number.POSITIVE_INFINITY,
          Nd = 0,
          Wd = dd.graph(),
          Pd = Wd.marginx || 0,
          Zd = Wd.marginy || 0;

        function gd(dd) {
          let Wd = dd.x,
            Pd = dd.y,
            Zd = dd.width,
            gd = dd.height;
          Jd = Math.min(Jd, Wd - Zd / 2), kd = Math.max(kd, Wd + Zd / 2), pd = Math.min(pd, Pd - gd / 2), Nd = Math.max(Nd, Pd + gd / 2)
        }
        dd.nodes().forEach((Jd => gd(dd.node(Jd)))), dd.edges().forEach((Jd => {
          let kd = dd.edge(Jd);
          Object.hasOwn(kd, "x") && gd(kd)
        })), Jd -= Pd, pd -= Zd, dd.nodes().forEach((kd => {
          let Nd = dd.node(kd);
          Nd.x -= Jd, Nd.y -= pd
        })), dd.edges().forEach((kd => {
          let Nd = dd.edge(kd);
          Nd.points.forEach((dd => {
            dd.x -= Jd, dd.y -= pd
          })), Object.hasOwn(Nd, "x") && (Nd.x -= Jd), Object.hasOwn(Nd, "y") && (Nd.y -= pd)
        })), Wd.width = kd - Jd + Pd, Wd.height = Nd - pd + Zd
      }(dd))), Jd("    assignNodeIntersects", (() => function(dd) {
        dd.edges().forEach((Jd => {
          if (Jd.v === Jd.w) return;
          let kd, pd, Nd = dd.edge(Jd),
            Wd = dd.node(Jd.v),
            Pd = dd.node(Jd.w);
          Nd.points ? (kd = Nd.points[0], pd = Nd.points[Nd.points.length - 1]) : (Nd.points = [], kd = Pd, pd = Wd), Nd.points.unshift(hd(Wd, kd)), Nd.points.push(hd(Pd, pd))
        }))
      }(dd))), Jd("    reversePoints", (() => function(dd) {
        dd.edges().forEach((Jd => {
          let kd = dd.edge(Jd);
          kd.reversed && kd.points.reverse()
        }))
      }(dd))), Jd("    acyclic.undo", (() => function(dd) {
        dd.edges().forEach((Jd => {
          let kd = dd.edge(Jd);
          if (kd.reversed) {
            dd.removeEdge(Jd);
            let pd = kd.forwardName;
            delete kd.reversed, delete kd.forwardName, dd.setEdge(Jd.w, Jd.v, kd, pd)
          }
        }))
      }(dd))), {
        graph: dd,
        rawNodes: Cd
      }
    }

    function Gk(dd, Jd) {
      dd.nodes().forEach((kd => {
        let pd = dd.node(kd),
          Nd = Jd.node(kd);
        pd && (pd.x = Nd.x, pd.y = Nd.y, pd.order = Nd.order, pd.rank = Nd.rank, Jd.children(kd).length && (pd.width = Nd.width, pd.height = Nd.height))
      })), dd.edges().forEach((kd => {
        let pd = dd.edge(kd),
          Nd = Jd.edge(kd);
        pd.points = Nd.points, Object.hasOwn(Nd, "x") && (pd.x = Nd.x, pd.y = Nd.y)
      })), dd.graph().width = Jd.graph().width, dd.graph().height = Jd.graph().height
    }
    var vk = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      xk = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      qk = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Bk = ["width", "height", "rank"],
      sk = {
        width: 0,
        height: 0
      },
      ik = ["minlen", "weight", "width", "height", "labeloffset"],
      ak = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Mk = ["labelpos"];

    function Fk(dd) {
      let Jd = new Td({
          multigraph: !0,
          compound: !0
        }),
        kd = mk(dd.graph());
      return Jd.setGraph(Object.assign({}, xk, Yk(kd, vk), kJ(kd, qk))), dd.nodes().forEach((kd => {
        let pd = Yk(mk(dd.node(kd)), Bk);
        Object.keys(sk).forEach((dd => {
          void 0 === pd[dd] && (pd[dd] = sk[dd])
        })), Jd.setNode(kd, pd);
        let Nd = dd.parent(kd);
        void 0 !== Nd && Jd.setParent(kd, Nd)
      })), dd.edges().forEach((kd => {
        let pd = mk(dd.edge(kd));
        Jd.setEdge(kd, Object.assign({}, ak, Yk(pd, ik), kJ(pd, Mk)))
      })), Jd
    }

    function Yk(dd, Jd) {
      return pJ(kJ(dd, Jd), Number)
    }

    function mk(dd) {
      let Jd = {};
      return dd && Object.entries(dd).forEach((dd => {
        let [kd, pd] = dd;
        "string" == typeof kd && (kd = kd.toLowerCase()), Jd[kd] = pd
      })), Jd
    }

    function bk(dd) {
      let Jd = rd(dd),
        kd = new Td({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return dd.nodes().forEach((Jd => {
        kd.setNode(Jd, {
          label: Jd
        }), kd.setParent(Jd, "layer" + dd.node(Jd).rank)
      })), dd.edges().forEach((dd => kd.setEdge(dd.v, dd.w, {}, dd.name))), Jd.forEach(((dd, Jd) => {
        let pd = "layer" + Jd;
        kd.setNode(pd, {
          rank: "same"
        }), dd.reduce(((dd, Jd) => (kd.setEdge(dd, Jd, {
          style: "invis"
        }), Jd)))
      })), kd
    }
    var Sk = {
        time: Hd,
        notime: wd
      },
      jk = {
        graphlib: Wd,
        version: PJ,
        layout: Ok,
        debug: bk,
        util: {
          time: Hd,
          notime: wd
        }
      }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);