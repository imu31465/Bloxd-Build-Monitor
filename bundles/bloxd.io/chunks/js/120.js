/*! For license information please see igzsf.120.579aafbf.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6623: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Graph: () => rt,
      debug: () => RV,
      default: () => PV,
      graphlib: () => Dt,
      layout: () => fV,
      util: () => IV,
      version: () => me
    });
    var Ot = Object.defineProperty,
      qt = (tt, et, Vt) => ((tt, et, Vt) => et in tt ? Ot(tt, et, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Vt
      }) : tt[et] = Vt)(tt, "symbol" != typeof et ? et + "" : et, Vt),
      Dt = {};
    ((tt, et) => {
      for (var Vt in et) Ot(tt, Vt, {
        get: et[Vt],
        enumerable: !0
      })
    })(Dt, {
      Graph: () => rt,
      alg: () => Nt
    });
    var mt = Object.defineProperty,
      dt = (tt, et) => {
        for (var Vt in et) mt(tt, Vt, {
          get: et[Vt],
          enumerable: !0
        })
      },
      jt = class {
        constructor(tt) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, tt && (this._isDirected = !("directed" in tt) || tt.directed, this._isMultigraph = "multigraph" in tt && tt.multigraph, this._isCompound = "compound" in tt && tt.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(tt) {
          return this._label = tt, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(tt) {
          return this._defaultNodeLabelFn = "function" != typeof tt ? () => tt : tt, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((tt => 0 === Object.keys(this._in[tt]).length))
        }
        sinks() {
          return this.nodes().filter((tt => 0 === Object.keys(this._out[tt]).length))
        }
        setNodes(tt, et) {
          return tt.forEach((tt => {
            void 0 !== et ? this.setNode(tt, et) : this.setNode(tt)
          })), this
        }
        setNode(tt, et) {
          return tt in this._nodes ? (arguments.length > 1 && (this._nodes[tt] = et), this) : (this._nodes[tt] = arguments.length > 1 ? et : this._defaultNodeLabelFn(tt), this._isCompound && (this._parent[tt] = "\0", this._children[tt] = {}, this._children["\0"][tt] = !0), this._in[tt] = {}, this._preds[tt] = {}, this._out[tt] = {}, this._sucs[tt] = {}, ++this._nodeCount, this)
        }
        node(tt) {
          return this._nodes[tt]
        }
        hasNode(tt) {
          return tt in this._nodes
        }
        removeNode(tt) {
          if (tt in this._nodes) {
            let et = tt => this.removeEdge(this._edgeObjs[tt]);
            delete this._nodes[tt], this._isCompound && (this._removeFromParentsChildList(tt), delete this._parent[tt], this.children(tt).forEach((tt => {
              this.setParent(tt)
            })), delete this._children[tt]), Object.keys(this._in[tt]).forEach(et), delete this._in[tt], delete this._preds[tt], Object.keys(this._out[tt]).forEach(et), delete this._out[tt], delete this._sucs[tt], --this._nodeCount
          }
          return this
        }
        setParent(tt, et) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === et) et = "\0";
          else {
            for (let Vt = et += ""; void 0 !== Vt; Vt = this.parent(Vt))
              if (Vt === tt) throw new Error("Setting " + et + " as parent of " + tt + " would create a cycle");
            this.setNode(et)
          }
          return this.setNode(tt), this._removeFromParentsChildList(tt), this._parent[tt] = et, this._children[et][tt] = !0, this
        }
        parent(tt) {
          if (this._isCompound) {
            let et = this._parent[tt];
            if ("\0" !== et) return et
          }
        }
        children() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let et = this._children[tt];
            if (et) return Object.keys(et)
          } else {
            if ("\0" === tt) return this.nodes();
            if (this.hasNode(tt)) return []
          }
          return []
        }
        predecessors(tt) {
          let et = this._preds[tt];
          if (et) return Object.keys(et)
        }
        successors(tt) {
          let et = this._sucs[tt];
          if (et) return Object.keys(et)
        }
        neighbors(tt) {
          let et = this.predecessors(tt);
          if (et) {
            let Vt = new Set(et),
              Ot = this.successors(tt);
            if (Ot)
              for (let tt of Ot) Vt.add(tt);
            return Array.from(Vt.values())
          }
        }
        isLeaf(tt) {
          var et;
          let Vt;
          return Vt = this.isDirected() ? this.successors(tt) : this.neighbors(tt), 0 === (null != (et = null == Vt ? void 0 : Vt.length) ? et : 0)
        }
        filterNodes(tt) {
          let et = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          et.setGraph(this.graph()), Object.entries(this._nodes).forEach((Vt => {
            let [Ot, qt] = Vt;
            tt(Ot) && et.setNode(Ot, qt)
          })), Object.values(this._edgeObjs).forEach((tt => {
            et.hasNode(tt.v) && et.hasNode(tt.w) && et.setEdge(tt, this.edge(tt))
          }));
          let Vt = {},
            Ot = tt => {
              let qt = this.parent(tt);
              return !qt || et.hasNode(qt) ? (Vt[tt] = qt, qt) : qt in Vt ? Vt[qt] : Ot(qt)
            };
          return this._isCompound && et.nodes().forEach((tt => et.setParent(tt, Ot(tt)))), et
        }
        setDefaultEdgeLabel(tt) {
          return this._defaultEdgeLabelFn = "function" != typeof tt ? () => tt : tt, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(tt, et) {
          return tt.reduce(((tt, Vt) => (void 0 !== et ? this.setEdge(tt, Vt, et) : this.setEdge(tt, Vt), Vt))), this
        }
        setEdge(tt, et, Vt, Ot) {
          let qt, Dt, mt, dt, jt = !1;
          "object" == typeof tt && null !== tt && "v" in tt ? (qt = tt.v, Dt = tt.w, mt = tt.name, 2 === arguments.length && (dt = et, jt = !0)) : (qt = tt, Dt = et, mt = Ot, arguments.length > 2 && (dt = Vt, jt = !0)), qt = "" + qt, Dt = "" + Dt, void 0 !== mt && (mt = "" + mt);
          let Xt = Qt(this._isDirected, qt, Dt, mt);
          if (Xt in this._edgeLabels) return jt && (this._edgeLabels[Xt] = dt), this;
          if (void 0 !== mt && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(qt), this.setNode(Dt), this._edgeLabels[Xt] = jt ? dt : this._defaultEdgeLabelFn(qt, Dt, mt);
          let lt = function(tt, et, Vt, Ot) {
            let qt = "" + et,
              Dt = "" + Vt;
            if (!tt && qt > Dt) {
              let tt = qt;
              qt = Dt, Dt = tt
            }
            let mt = {
              v: qt,
              w: Dt
            };
            return Ot && (mt.name = Ot), mt
          }(this._isDirected, qt, Dt, mt);
          return qt = lt.v, Dt = lt.w, Object.freeze(lt), this._edgeObjs[Xt] = lt, Ht(this._preds[Dt], qt), Ht(this._sucs[qt], Dt), this._in[Dt][Xt] = lt, this._out[qt][Xt] = lt, this._edgeCount++, this
        }
        edge(tt, et, Vt) {
          let Ot = 1 === arguments.length ? lt(this._isDirected, tt) : Qt(this._isDirected, tt, et, Vt);
          return this._edgeLabels[Ot]
        }
        edgeAsObj(tt, et, Vt) {
          let Ot = 1 === arguments.length ? this.edge(tt) : this.edge(tt, et, Vt);
          return "object" != typeof Ot || null === Ot ? {
            label: Ot
          } : Ot
        }
        hasEdge(tt, et, Vt) {
          return (1 === arguments.length ? lt(this._isDirected, tt) : Qt(this._isDirected, tt, et, Vt)) in this._edgeLabels
        }
        removeEdge(tt, et, Vt) {
          let Ot = 1 === arguments.length ? lt(this._isDirected, tt) : Qt(this._isDirected, tt, et, Vt),
            qt = this._edgeObjs[Ot];
          if (qt) {
            let tt = qt.v,
              et = qt.w;
            delete this._edgeLabels[Ot], delete this._edgeObjs[Ot], Xt(this._preds[et], tt), Xt(this._sucs[tt], et), delete this._in[et][Ot], delete this._out[tt][Ot], this._edgeCount--
          }
          return this
        }
        inEdges(tt, et) {
          return this.isDirected() ? this.filterEdges(this._in[tt], tt, et) : this.nodeEdges(tt, et)
        }
        outEdges(tt, et) {
          return this.isDirected() ? this.filterEdges(this._out[tt], tt, et) : this.nodeEdges(tt, et)
        }
        nodeEdges(tt, et) {
          if (tt in this._nodes) return this.filterEdges({
            ...this._in[tt],
            ...this._out[tt]
          }, tt, et)
        }
        _removeFromParentsChildList(tt) {
          delete this._children[this._parent[tt]][tt]
        }
        filterEdges(tt, et, Vt) {
          if (!tt) return;
          let Ot = Object.values(tt);
          return Vt ? Ot.filter((tt => tt.v === et && tt.w === Vt || tt.v === Vt && tt.w === et)) : Ot
        }
      };

    function Ht(tt, et) {
      tt[et] ? tt[et]++ : tt[et] = 1
    }

    function Xt(tt, et) {
      void 0 !== tt[et] && !--tt[et] && delete tt[et]
    }

    function Qt(tt, et, Vt, Ot) {
      let qt = "" + et,
        Dt = "" + Vt;
      if (!tt && qt > Dt) {
        let tt = qt;
        qt = Dt, Dt = tt
      }
      return qt + "\x01" + Dt + "\x01" + (void 0 === Ot ? "\0" : Ot)
    }

    function lt(tt, et) {
      return Qt(tt, et.v, et.w, et.name)
    }

    function Et(tt) {
      let et = {
          options: {
            directed: tt.isDirected(),
            multigraph: tt.isMultigraph(),
            compound: tt.isCompound()
          },
          nodes: ft(tt),
          edges: wt(tt)
        },
        Vt = tt.graph();
      return void 0 !== Vt && (et.value = structuredClone(Vt)), et
    }

    function ft(tt) {
      return tt.nodes().map((et => {
        let Vt = tt.node(et),
          Ot = tt.parent(et),
          qt = {
            v: et
          };
        return void 0 !== Vt && (qt.value = Vt), void 0 !== Ot && (qt.parent = Ot), qt
      }))
    }

    function wt(tt) {
      return tt.edges().map((et => {
        let Vt = tt.edge(et),
          Ot = {
            v: et.v,
            w: et.w
          };
        return void 0 !== et.name && (Ot.name = et.name), void 0 !== Vt && (Ot.value = Vt), Ot
      }))
    }

    function yt(tt) {
      let et = new jt(tt.options);
      return void 0 !== tt.value && et.setGraph(tt.value), tt.nodes.forEach((tt => {
        et.setNode(tt.v, tt.value), tt.parent && et.setParent(tt.v, tt.parent)
      })), tt.edges.forEach((tt => {
        et.setEdge({
          v: tt.v,
          w: tt.w,
          name: tt.name
        }, tt.value)
      })), et
    }
    dt({}, {
      read: () => yt,
      write: () => Et
    });
    var Nt = {};
    dt(Nt, {
      CycleException: () => Rt,
      bellmanFord: () => bt,
      components: () => Jt,
      dijkstra: () => Kt,
      dijkstraAll: () => ht,
      findCycles: () => Wt,
      floydWarshall: () => ct,
      isAcyclic: () => Pt,
      postorder: () => kt,
      preorder: () => Gt,
      prim: () => zt,
      shortestPaths: () => ot,
      tarjan: () => vt,
      topsort: () => It
    });
    var Mt = () => 1;

    function bt(tt, et, Vt, Ot) {
      return function(tt, et, Vt, Ot) {
        let qt, Dt = {},
          mt = 0,
          dt = tt.nodes(),
          jt = function(tt) {
            let et = Dt[tt.v],
              Ot = Dt[tt.w];
            if (!et || !Ot) return;
            let mt = Vt(tt);
            et.distance + mt < Ot.distance && (Dt[tt.w] = {
              distance: et.distance + mt,
              predecessor: tt.v
            }, qt = !0)
          },
          Ht = function() {
            dt.forEach((function(tt) {
              Ot(tt).forEach((function(et) {
                let Vt = et.v === tt ? et.v : et.w,
                  Ot = Vt === et.v ? et.w : et.v;
                jt({
                  v: Vt,
                  w: Ot
                })
              }))
            }))
          };
        dt.forEach((function(tt) {
          let Vt = tt === et ? 0 : Number.POSITIVE_INFINITY;
          Dt[tt] = {
            distance: Vt,
            predecessor: ""
          }
        }));
        let Xt = dt.length;
        for (let Qt = 1; Qt < Xt && (qt = !1, mt++, Ht(), qt); Qt++);
        if (mt === Xt - 1 && (qt = !1, Ht(), qt)) throw new Error("The graph contains a negative weight cycle");
        return Dt
      }(tt, String(et), Vt || Mt, Ot || function(et) {
        var Vt;
        return null != (Vt = tt.outEdges(et)) ? Vt : []
      })
    }

    function Jt(tt) {
      let et, Vt = {},
        Ot = [];

      function qt(Ot) {
        var Dt, mt;
        Ot in Vt || (Vt[Ot] = !0, et.push(Ot), null == (Dt = tt.successors(Ot)) || Dt.forEach(qt), null == (mt = tt.predecessors(Ot)) || mt.forEach(qt))
      }
      return tt.nodes().forEach((function(tt) {
        et = [], qt(tt), et.length && Ot.push(et)
      })), Ot
    }
    var Ct = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((tt => tt.key))
        }
        has(tt) {
          return tt in this._keyIndices
        }
        priority(tt) {
          let et = this._keyIndices[tt];
          if (void 0 !== et) return this._arr[et].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(tt, et) {
          let Vt = this._keyIndices,
            Ot = String(tt);
          if (!(Ot in Vt)) {
            let tt = this._arr,
              qt = tt.length;
            return Vt[Ot] = qt, tt.push({
              key: Ot,
              priority: et
            }), this._decrease(qt), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let tt = this._arr.pop();
          return delete this._keyIndices[tt.key], this._heapify(0), tt.key
        }
        decrease(tt, et) {
          let Vt = this._keyIndices[tt];
          if (void 0 === Vt) throw new Error(`Key not found: ${tt}`);
          let Ot = this._arr[Vt].priority;
          if (et > Ot) throw new Error(`New priority is greater than current priority. Key: ${tt} Old: ${Ot} New: ${et}`);
          this._arr[Vt].priority = et, this._decrease(Vt)
        }
        _heapify(tt) {
          let et = this._arr,
            Vt = 2 * tt,
            Ot = Vt + 1,
            qt = tt;
          Vt < et.length && (qt = et[Vt].priority < et[qt].priority ? Vt : qt, Ot < et.length && (qt = et[Ot].priority < et[qt].priority ? Ot : qt), qt !== tt && (this._swap(tt, qt), this._heapify(qt)))
        }
        _decrease(tt) {
          let et, Vt = this._arr,
            Ot = Vt[tt].priority;
          for (; 0 !== tt && (et = tt >> 1, !(Vt[et].priority < Ot));) this._swap(tt, et), tt = et
        }
        _swap(tt, et) {
          let Vt = this._arr,
            Ot = this._keyIndices,
            qt = Vt[tt],
            Dt = Vt[et];
          Vt[tt] = Dt, Vt[et] = qt, Ot[Dt.key] = tt, Ot[qt.key] = et
        }
      },
      ut = () => 1;

    function Kt(tt, et, Vt, Ot) {
      return function(tt, et, Vt, Ot) {
        let qt, Dt, mt = {},
          dt = new Ct,
          jt = function(tt) {
            let et = tt.v !== qt ? tt.v : tt.w,
              Ot = mt[et];
            if (!Ot) return;
            let jt = Vt(tt),
              Ht = Dt.distance + jt;
            if (jt < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + tt + " Weight: " + jt);
            Ht < Ot.distance && (Ot.distance = Ht, Ot.predecessor = qt, dt.decrease(et, Ht))
          };
        for (tt.nodes().forEach((function(tt) {
            let Vt = tt === et ? 0 : Number.POSITIVE_INFINITY;
            mt[tt] = {
              distance: Vt,
              predecessor: ""
            }, dt.add(tt, Vt)
          })); dt.size() > 0;) {
          qt = dt.removeMin();
          let tt = mt[qt];
          if (!tt || tt.distance === Number.POSITIVE_INFINITY) break;
          Dt = tt, Ot(qt).forEach(jt)
        }
        return mt
      }(tt, String(et), Vt || ut, Ot || function(et) {
        var Vt;
        return null != (Vt = tt.outEdges(et)) ? Vt : []
      })
    }

    function ht(tt, et, Vt) {
      return tt.nodes().reduce((function(Ot, qt) {
        return Ot[qt] = Kt(tt, qt, et, Vt), Ot
      }), {})
    }

    function vt(tt) {
      let et = 0,
        Vt = [],
        Ot = {},
        qt = [];

      function Dt(mt) {
        var dt;
        let jt = Ot[mt] = {
          onStack: !0,
          lowlink: et,
          index: et++
        };
        if (Vt.push(mt), null == (dt = tt.successors(mt)) || dt.forEach((function(tt) {
            if (tt in Ot) {
              let et = Ot[tt];
              null != et && et.onStack && (jt.lowlink = Math.min(jt.lowlink, et.index))
            } else {
              Dt(tt);
              let et = Ot[tt];
              et && (jt.lowlink = Math.min(jt.lowlink, et.lowlink))
            }
          })), jt.lowlink === jt.index) {
          let tt, et = [];
          do {
            tt = Vt.pop();
            let qt = Ot[tt];
            qt && (qt.onStack = !1), et.push(tt)
          } while (mt !== tt);
          qt.push(et)
        }
      }
      return tt.nodes().forEach((function(tt) {
        tt in Ot || Dt(tt)
      })), qt
    }

    function Wt(tt) {
      return vt(tt).filter((function(et) {
        var Vt;
        let Ot = et[0];
        return !!Ot && (et.length > 1 || 1 === et.length && (null != (Vt = tt.outEdges(Ot, Ot)) ? Vt : []).length > 0)
      }))
    }
    var St = () => 1;

    function ct(tt, et, Vt) {
      return function(tt, et, Vt) {
        let Ot = {},
          qt = tt.nodes();
        return qt.forEach((function(tt) {
          let Dt = {};
          Ot[tt] = Dt, Dt[tt] = {
            distance: 0,
            predecessor: ""
          }, qt.forEach((function(et) {
            tt !== et && (Dt[et] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Vt(tt).forEach((function(Vt) {
            let Ot = Vt.v === tt ? Vt.w : Vt.v,
              qt = et(Vt);
            Dt[Ot] = {
              distance: qt,
              predecessor: tt
            }
          }))
        })), qt.forEach((function(tt) {
          let et = Ot[tt];
          et && qt.forEach((function(Vt) {
            let Dt = Ot[Vt];
            Dt && qt.forEach((function(Vt) {
              let Ot = Dt[tt],
                qt = et[Vt],
                mt = Dt[Vt];
              if (Ot && qt && mt) {
                let tt = Ot.distance + qt.distance;
                tt < mt.distance && (mt.distance = tt, mt.predecessor = qt.predecessor)
              }
            }))
          }))
        })), Ot
      }(tt, et || St, Vt || function(et) {
        var Vt;
        return null != (Vt = tt.outEdges(et)) ? Vt : []
      })
    }
    var Rt = class extends Error {
      constructor(tt) {
        super(tt), this.name = "CycleException"
      }
    };

    function It(tt) {
      let et = {},
        Vt = {},
        Ot = [];
      if (tt.sinks().forEach((function qt(Dt) {
          var mt;
          if (Dt in Vt) throw new Rt;
          Dt in et || (Vt[Dt] = !0, et[Dt] = !0, null == (mt = tt.predecessors(Dt)) || mt.forEach(qt), delete Vt[Dt], Ot.push(Dt))
        })), Object.keys(et).length !== tt.nodeCount()) throw new Rt;
      return Ot
    }

    function Pt(tt) {
      try {
        It(tt)
      } catch (et) {
        if (et instanceof Rt) return !1;
        throw et
      }
      return !0
    }

    function Zt(tt, et, Vt, Ot, qt) {
      Array.isArray(et) || (et = [et]);
      let Dt = et => {
          var Vt;
          return null != (Vt = tt.isDirected() ? tt.successors(et) : tt.neighbors(et)) ? Vt : []
        },
        mt = {};
      return et.forEach((function(et) {
        if (!tt.hasNode(et)) throw new Error("Graph does not have node: " + et);
        qt = Lt(tt, et, "post" === Vt, mt, Dt, Ot, qt)
      })), qt
    }

    function Lt(tt, et, Vt, Ot, qt, Dt, mt) {
      return et in Ot || (Ot[et] = !0, Vt || (mt = Dt(mt, et)), qt(et).forEach((function(et) {
        mt = Lt(tt, et, Vt, Ot, qt, Dt, mt)
      })), Vt && (mt = Dt(mt, et))), mt
    }

    function Ft(tt, et, Vt) {
      return Zt(tt, et, Vt, (function(tt, et) {
        return tt.push(et), tt
      }), [])
    }

    function kt(tt, et) {
      return Ft(tt, et, "post")
    }

    function Gt(tt, et) {
      return Ft(tt, et, "pre")
    }

    function zt(tt, et) {
      var Vt;
      let Ot, qt = new jt,
        Dt = {},
        mt = new Ct;

      function dt(tt) {
        let Vt = tt.v === Ot ? tt.w : tt.v,
          qt = mt.priority(Vt);
        if (void 0 !== qt) {
          let dt = et(tt);
          dt < qt && (Dt[Vt] = Ot, mt.decrease(Vt, dt))
        }
      }
      if (0 === tt.nodeCount()) return qt;
      tt.nodes().forEach((function(tt) {
        mt.add(tt, Number.POSITIVE_INFINITY), qt.setNode(tt)
      }));
      let Ht = tt.nodes()[0];
      void 0 !== Ht && mt.decrease(Ht, 0);
      let Xt = !1;
      for (; mt.size() > 0;) {
        if (Ot = mt.removeMin(), Ot in Dt) qt.setEdge(Ot, Dt[Ot]);
        else {
          if (Xt) throw new Error("Input graph is not connected: " + tt);
          Xt = !0
        }
        null == (Vt = tt.nodeEdges(Ot)) || Vt.forEach(dt)
      }
      return qt
    }

    function ot(tt, et, Vt, Ot) {
      return function(tt, et, Vt, Ot) {
        if (void 0 === Vt) return Kt(tt, et, Vt, Ot);
        let qt = !1,
          Dt = tt.nodes();
        for (let mt = 0; mt < Dt.length; mt++) {
          let dt = Dt[mt];
          if (void 0 === dt) continue;
          let jt = Ot(dt);
          for (let tt = 0; tt < jt.length; tt++) {
            let et = jt[tt];
            if (!et) continue;
            let Ot = et.v === dt ? et.v : et.w;
            Vt({
              v: Ot,
              w: Ot === et.v ? et.w : et.v
            }) < 0 && (qt = !0)
          }
          if (qt) return bt(tt, et, Vt, Ot)
        }
        return Kt(tt, et, Vt, Ot)
      }(tt, et, Vt, null != Ot ? Ot : et => {
        var Vt;
        return null != (Vt = tt.outEdges(et)) ? Vt : []
      })
    }
    var rt = jt;

    function Ut(tt, et, Vt, Ot) {
      let qt = Ot;
      for (; tt.hasNode(qt);) qt = te(Ot);
      return Vt.dummy = et, tt.setNode(qt, Vt), qt
    }

    function At(tt) {
      let et = new rt({
        multigraph: tt.isMultigraph()
      }).setGraph(tt.graph());
      return tt.nodes().forEach((Vt => {
        tt.children(Vt).length || et.setNode(Vt, tt.node(Vt))
      })), tt.edges().forEach((Vt => {
        et.setEdge(Vt, tt.edge(Vt))
      })), et
    }

    function it(tt, et) {
      let Vt, Ot, qt = tt.x,
        Dt = tt.y,
        mt = et.x - qt,
        dt = et.y - Dt,
        jt = tt.width / 2,
        Ht = tt.height / 2;
      if (!mt && !dt) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(dt) * jt > Math.abs(mt) * Ht ? (dt < 0 && (Ht = -Ht), Vt = Ht * mt / dt, Ot = Ht) : (mt < 0 && (jt = -jt), Vt = jt, Ot = jt * dt / mt), {
        x: qt + Vt,
        y: Dt + Ot
      }
    }

    function Yt(tt) {
      let et = ee(Tt(tt) + 1).map((() => []));
      return tt.nodes().forEach((Vt => {
        let Ot = tt.node(Vt),
          qt = Ot.rank;
        void 0 !== qt && (et[qt] || (et[qt] = []), et[qt][Ot.order] = Vt)
      })), et
    }

    function Bt(tt, et, Vt, Ot) {
      let qt = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (qt.rank = Vt, qt.order = Ot), Ut(tt, "border", qt, et)
    }
    var pt = 65535;

    function xt(tt, et) {
      if (et.length > pt) {
        let Vt = function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pt,
            Vt = [];
          for (let Ot = 0; Ot < tt.length; Ot += et) {
            let qt = tt.slice(Ot, Ot + et);
            Vt.push(qt)
          }
          return Vt
        }(et);
        return tt(...Vt.map((et => tt(...et))))
      }
      return tt(...et)
    }

    function Tt(tt) {
      let et = tt.nodes().map((et => {
        let Vt = tt.node(et).rank;
        return void 0 === Vt ? Number.MIN_VALUE : Vt
      }));
      return xt(Math.max, et)
    }

    function gt(tt, et) {
      let Vt = Date.now();
      try {
        return et()
      } finally {
        console.log(tt + " time: " + (Date.now() - Vt) + "ms")
      }
    }

    function st(tt, et) {
      return et()
    }
    var nt = 0;

    function te(tt) {
      return tt + "" + ++nt
    }

    function ee(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == et && (et = tt, tt = 0);
      let Ot = tt => tt < et;
      Vt < 0 && (Ot = tt => et < tt);
      let qt = [];
      for (let Dt = tt; Ot(Dt); Dt += Vt) qt.push(Dt);
      return qt
    }

    function Ve(tt, et) {
      let Vt = {};
      for (let Ot of et) void 0 !== tt[Ot] && (Vt[Ot] = tt[Ot]);
      return Vt
    }

    function Oe(tt, et) {
      let Vt;
      return Vt = "string" == typeof et ? tt => tt[et] : et, Object.entries(tt).reduce(((tt, et) => {
        let [Ot, qt] = et;
        return tt[Ot] = Vt(qt, Ot), tt
      }), {})
    }
    var qe = "\0";

    function De(tt, et, Vt) {
      var Ot, qt, Dt, mt, dt, jt;
      if (!(tt && et && Vt && "edge" === et.dummy && "edge" === Vt.dummy && et.edgeObj && Vt.edgeObj && tt[et.edgeObj.v] && tt[Vt.edgeObj.v] && tt[et.edgeObj.w] && tt[Vt.edgeObj.w])) return 0;
      let Ht = !0;
      et.edgeObj.w === Vt.edgeObj.w && (Ht = !1);
      let Xt = Ht ? null != (qt = null == (Ot = tt[et.edgeObj.v]) ? void 0 : Ot.rank) ? qt : NaN : null != (mt = null == (Dt = tt[et.edgeObj.w]) ? void 0 : Dt.rank) ? mt : NaN,
        Qt = Object.entries(tt).find((tt => {
          var Vt, Ot;
          return (null == (Vt = tt[1].edgeObj) ? void 0 : Vt.v) === et.edgeObj.v && (null == (Ot = tt[1].edgeObj) ? void 0 : Ot.w) === et.edgeObj.w && tt[1].rank === Xt
        })),
        lt = Object.entries(tt).find((tt => {
          var et, Ot;
          return (null == (et = tt[1].edgeObj) ? void 0 : et.v) === Vt.edgeObj.v && (null == (Ot = tt[1].edgeObj) ? void 0 : Ot.w) === Vt.edgeObj.w && tt[1].rank === Xt
        }));
      if (!Qt || !lt) return 0;
      let Et = null != (dt = Qt[1].order) ? dt : NaN,
        ft = null != (jt = lt[1].order) ? jt : NaN;
      return isNaN(Et - ft) ? 0 : Et - ft
    }
    var me = "3.1.1";

    function de(tt) {
      tt._prev._next = tt._next, tt._next._prev = tt._prev, delete tt._next, delete tt._prev
    }

    function je(tt, et) {
      if ("_next" !== tt && "_prev" !== tt) return et
    }
    var He = class {
        constructor() {
          qt(this, "_sentinel");
          let tt = {};
          tt._next = tt._prev = tt, this._sentinel = tt
        }
        dequeue() {
          let tt = this._sentinel,
            et = tt._prev;
          if (et !== tt) return de(et), et
        }
        enqueue(tt) {
          let et = this._sentinel;
          tt._prev && tt._next && de(tt), tt._next = et._next, et._next._prev = tt, et._next = tt, tt._prev = et
        }
        toString() {
          let tt = [],
            et = this._sentinel,
            Vt = et._prev;
          for (; Vt !== et;) tt.push(JSON.stringify(Vt, je)), Vt = Vt._prev;
          return "[" + tt.join(", ") + "]"
        }
      },
      Xe = () => 1;

    function Qe(tt, et) {
      if (tt.nodeCount() <= 1) return [];
      let Vt = function(tt, et) {
        let Vt = new rt,
          Ot = 0,
          qt = 0;
        tt.nodes().forEach((tt => {
          Vt.setNode(tt, {
            v: tt,
            in: 0,
            out: 0
          })
        })), tt.edges().forEach((tt => {
          let Dt = Vt.edge(tt.v, tt.w) || 0,
            mt = et(tt),
            dt = Dt + mt;
          Vt.setEdge(tt.v, tt.w, dt);
          let jt = Vt.node(tt.v),
            Ht = Vt.node(tt.w);
          qt = Math.max(qt, jt.out += mt), Ot = Math.max(Ot, Ht.in += mt)
        }));
        let Dt = function(tt) {
            let et = [];
            for (let Vt = 0; Vt < tt; Vt++) et.push(Vt);
            return et
          }(qt + Ot + 3).map((() => new He)),
          mt = Ot + 1;
        return Vt.nodes().forEach((tt => {
          Ee(Dt, mt, Vt.node(tt))
        })), {
          graph: Vt,
          buckets: Dt,
          zeroIdx: mt
        }
      }(tt, et || Xe);
      return function(tt, et, Vt) {
        var Ot;
        let qt, Dt = [],
          mt = et[et.length - 1],
          dt = et[0];
        for (; tt.nodeCount();) {
          for (; qt = dt.dequeue();) le(tt, et, Vt, qt);
          for (; qt = mt.dequeue();) le(tt, et, Vt, qt);
          if (tt.nodeCount())
            for (let mt = et.length - 2; mt > 0; --mt)
              if (qt = null == (Ot = et[mt]) ? void 0 : Ot.dequeue(), qt) {
                Dt = Dt.concat(le(tt, et, Vt, qt, !0) || []);
                break
              }
        }
        return Dt
      }(Vt.graph, Vt.buckets, Vt.zeroIdx).flatMap((et => tt.outEdges(et.v, et.w) || []))
    }

    function le(tt, et, Vt, Ot, qt) {
      let Dt = [],
        mt = qt ? Dt : void 0;
      return (tt.inEdges(Ot.v) || []).forEach((Ot => {
        let mt = tt.edge(Ot),
          dt = tt.node(Ot.v);
        qt && Dt.push({
          v: Ot.v,
          w: Ot.w
        }), dt.out -= mt, Ee(et, Vt, dt)
      })), (tt.outEdges(Ot.v) || []).forEach((Ot => {
        let qt = tt.edge(Ot),
          Dt = Ot.w,
          mt = tt.node(Dt);
        mt.in -= qt, Ee(et, Vt, mt)
      })), tt.removeNode(Ot.v), mt
    }

    function Ee(tt, et, Vt) {
      var Ot, qt, Dt;
      Vt.out ? Vt.in ? null == (Dt = tt[Vt.out - Vt.in + et]) || Dt.enqueue(Vt) : null == (qt = tt[tt.length - 1]) || qt.enqueue(Vt) : null == (Ot = tt[0]) || Ot.enqueue(Vt)
    }

    function fe(tt, et) {
      var Vt;
      ("greedy" === tt.graph().acyclicer ? Qe(tt, (Vt = tt, tt => Vt.edge(tt).weight)) : function(tt, et) {
        let Vt = [],
          Ot = {},
          qt = {};

        function Dt(et) {
          Object.hasOwn(qt, et) || (qt[et] = !0, Ot[et] = !0, tt.outEdges(et).forEach((tt => {
            Object.hasOwn(Ot, tt.w) ? Vt.push(tt) : Dt(tt.w)
          })), delete Ot[et])
        }

        function mt(Dt) {
          var dt;
          Object.hasOwn(qt, Dt) || (qt[Dt] = !0, Ot[Dt] = !0, null == (dt = tt.outEdges(Dt)) || dt.forEach((qt => {
            var dt, jt;
            Object.hasOwn(Ot, qt.w) || (null == (dt = et.node(Dt)) ? void 0 : dt.rank) > (null == (jt = et.node(qt.w)) ? void 0 : jt.rank) && function(tt, et, Vt) {
              let Ot = new Set;

              function qt(et) {
                var Dt;
                if (tt.sources().includes(et)) return !0;
                Ot.add(et);
                for (let mt of null != (Dt = tt.inEdges(et)) ? Dt : [])
                  if ((mt.v !== Vt.v || mt.w !== Vt.w) && !Ot.has(mt.v) && qt(mt.v)) return !0;
                return !1
              }
              return qt(et)
            }(tt, qt.w, qt) ? Vt.push(qt) : mt(qt.w)
          })), delete Ot[Dt])
        }
        let dt = Dt;
        return et && "function" == typeof et.node && (dt = mt), tt.sources().forEach(dt), tt.nodes().forEach(dt), Vt
      }(tt, null != et ? et : null)).forEach((et => {
        let Vt = tt.edge(et);
        tt.removeEdge(et), Vt.forwardName = et.name, Vt.reversed = !0, tt.setEdge(et.w, et.v, Vt, te("rev"))
      }))
    }

    function we(tt) {
      tt.graph().dummyChains = [], tt.edges().forEach((et => function(tt, et) {
        let Vt, Ot, qt, Dt = et.v,
          mt = tt.node(Dt).rank,
          dt = et.w,
          jt = tt.node(dt).rank,
          Ht = et.name,
          Xt = tt.edge(et),
          Qt = Xt.labelRank;
        if (jt === mt + 1) return;
        for (tt.removeEdge(et), qt = 0, ++mt; mt < jt; ++qt, ++mt) Xt.points = [], Ot = {
          width: 0,
          height: 0,
          edgeLabel: Xt,
          edgeObj: et,
          rank: mt
        }, Vt = Ut(tt, "edge", Ot, "_d"), mt === Qt && (Ot.width = Xt.width, Ot.height = Xt.height, Ot.dummy = "edge-label", Ot.labelpos = Xt.labelpos), tt.setEdge(Dt, Vt, {
          weight: Xt.weight
        }, Ht), 0 === qt && tt.graph().dummyChains.push(Vt), Dt = Vt;
        tt.setEdge(Dt, dt, {
          weight: Xt.weight
        }, Ht)
      }(tt, et)))
    }

    function ye(tt) {
      let et = {};
      tt.sources().forEach((function Vt(Ot) {
        let qt = tt.node(Ot);
        if (Object.hasOwn(et, Ot)) return qt.rank;
        et[Ot] = !0;
        let Dt = tt.outEdges(Ot),
          mt = Dt ? Dt.map((et => null == et ? Number.POSITIVE_INFINITY : Vt(et.w) - tt.edge(et).minlen)) : [],
          dt = xt(Math.min, mt);
        return dt === Number.POSITIVE_INFINITY && (dt = 0), qt.rank = dt
      }))
    }

    function Ne(tt, et) {
      return tt.node(et.w).rank - tt.node(et.v).rank - tt.edge(et).minlen
    }
    var ae = function(tt) {
      let et = new rt({
          directed: !1
        }),
        Vt = tt.nodes();
      if (0 === Vt.length) throw new Error("Graph must have at least one node");
      let Ot, qt, Dt = Vt[0],
        mt = tt.nodeCount();
      for (et.setNode(Dt, {}); Me(et, tt) < mt && (Ot = be(et, tt), Ot);) qt = et.hasNode(Ot.v) ? Ne(tt, Ot) : -Ne(tt, Ot), Je(et, tt, qt);
      return et
    };

    function Me(tt, et) {
      return tt.nodes().forEach((function Vt(Ot) {
        let qt = et.nodeEdges(Ot);
        qt && qt.forEach((qt => {
          let Dt = qt.v,
            mt = Ot === Dt ? qt.w : Dt;
          !tt.hasNode(mt) && !Ne(et, qt) && (tt.setNode(mt, {}), tt.setEdge(Ot, mt, {}), Vt(mt))
        }))
      })), tt.nodeCount()
    }

    function be(tt, et) {
      return et.edges().reduce(((Vt, Ot) => {
        let qt = Number.POSITIVE_INFINITY;
        return tt.hasNode(Ot.v) !== tt.hasNode(Ot.w) && (qt = Ne(et, Ot)), qt < Vt[0] ? [qt, Ot] : Vt
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Je(tt, et, Vt) {
      tt.nodes().forEach((tt => et.node(tt).rank += Vt))
    }
    var {
      preorder: Ce,
      postorder: ue
    } = Nt, Ke = he;

    function he(tt) {
      tt = function(tt) {
        let et = (new rt).setGraph(tt.graph());
        return tt.nodes().forEach((Vt => et.setNode(Vt, tt.node(Vt)))), tt.edges().forEach((Vt => {
          let Ot = et.edge(Vt.v, Vt.w) || {
              weight: 0,
              minlen: 1
            },
            qt = tt.edge(Vt);
          et.setEdge(Vt.v, Vt.w, {
            weight: Ot.weight + qt.weight,
            minlen: Math.max(Ot.minlen, qt.minlen)
          })
        })), et
      }(tt), ye(tt);
      let et, Vt, Ot = ae(tt);
      for (Se(Ot), ve(Ot, tt); et = Re(Ot);) Vt = Ie(Ot, tt, et), Pe(Ot, tt, et, Vt)
    }

    function ve(tt, et) {
      let Vt = ue(tt, tt.nodes());
      Vt = Vt.slice(0, Vt.length - 1), Vt.forEach((Vt => function(tt, et, Vt) {
        let Ot = tt.node(Vt).parent,
          qt = tt.edge(Vt, Ot);
        qt.cutvalue = We(tt, et, Vt)
      }(tt, et, Vt)))
    }

    function We(tt, et, Vt) {
      let Ot = tt.node(Vt).parent,
        qt = !0,
        Dt = et.edge(Vt, Ot),
        mt = 0;
      Dt || (qt = !1, Dt = et.edge(Ot, Vt)), mt = Dt.weight;
      let dt = et.nodeEdges(Vt);
      return dt && dt.forEach((Dt => {
        let dt = Dt.v === Vt,
          jt = dt ? Dt.w : Dt.v;
        if (jt !== Ot) {
          let Ot = dt === qt,
            Ht = et.edge(Dt).weight;
          if (mt += Ot ? Ht : -Ht, function(tt, et, Vt) {
              return tt.hasEdge(et, Vt)
            }(tt, Vt, jt)) {
            let et = tt.edge(Vt, jt).cutvalue;
            mt += Ot ? -et : et
          }
        }
      })), mt
    }

    function Se(tt, et) {
      arguments.length < 2 && (et = tt.nodes()[0]), ce(tt, {}, 1, et)
    }

    function ce(tt, et, Vt, Ot, qt) {
      let Dt = Vt,
        mt = tt.node(Ot);
      et[Ot] = !0;
      let dt = tt.neighbors(Ot);
      return dt && dt.forEach((qt => {
        Object.hasOwn(et, qt) || (Vt = ce(tt, et, Vt, qt, Ot))
      })), mt.low = Dt, mt.lim = Vt++, qt ? mt.parent = qt : delete mt.parent, Vt
    }

    function Re(tt) {
      return tt.edges().find((et => tt.edge(et).cutvalue < 0))
    }

    function Ie(tt, et, Vt) {
      let Ot = Vt.v,
        qt = Vt.w;
      et.hasEdge(Ot, qt) || (Ot = Vt.w, qt = Vt.v);
      let Dt = tt.node(Ot),
        mt = tt.node(qt),
        dt = Dt,
        jt = !1;
      return Dt.lim > mt.lim && (dt = mt, jt = !0), et.edges().filter((et => jt === Ze(tt, tt.node(et.v), dt) && jt !== Ze(tt, tt.node(et.w), dt))).reduce(((tt, Vt) => Ne(et, Vt) < Ne(et, tt) ? Vt : tt))
    }

    function Pe(tt, et, Vt, Ot) {
      let qt = Vt.v,
        Dt = Vt.w;
      tt.removeEdge(qt, Dt), tt.setEdge(Ot.v, Ot.w, {}), Se(tt), ve(tt, et),
        function(tt, et) {
          let Vt = tt.nodes().find((et => !tt.node(et).parent));
          if (!Vt) return;
          let Ot = Ce(tt, [Vt]);
          Ot = Ot.slice(1), Ot.forEach((Vt => {
            let Ot = tt.node(Vt).parent,
              qt = et.edge(Vt, Ot),
              Dt = !1;
            qt || (qt = et.edge(Ot, Vt), Dt = !0), et.node(Vt).rank = et.node(Ot).rank + (Dt ? qt.minlen : -qt.minlen)
          }))
        }(tt, et)
    }

    function Ze(tt, et, Vt) {
      return Vt.low <= et.lim && et.lim <= Vt.lim
    }
    he.initLowLimValues = Se, he.initCutValues = ve, he.calcCutValue = We, he.leaveEdge = Re, he.enterEdge = Ie, he.exchangeEdges = Pe;
    var Le = function(tt) {
      let et = tt.graph().ranker;
      if ("function" == typeof et) return et(tt);
      switch (et) {
        case "network-simplex":
        default:
          ke(tt);
          break;
        case "tight-tree":
          ! function(tt) {
            ye(tt), ae(tt)
          }(tt);
          break;
        case "longest-path":
          Fe(tt);
        case "none":
      }
    };
    var Fe = ye;

    function ke(tt) {
      Ke(tt)
    }
    var Ge = function(tt) {
      let et = function(tt) {
          let et = {},
            Vt = 0;

          function Ot(qt) {
            let Dt = Vt;
            tt.children(qt).forEach(Ot), et[qt] = {
              low: Dt,
              lim: Vt++
            }
          }
          return tt.children(qe).forEach(Ot), et
        }(tt),
        Vt = tt.graph();
      if (!Array.isArray(Vt.dummyChains)) return;
      Vt.dummyChains.forEach((Vt => {
        let Ot = tt.node(Vt),
          qt = Ot.edgeObj,
          Dt = function(tt, et, Vt, Ot) {
            let qt, Dt = [],
              mt = [],
              dt = Math.min(et[Vt].low, et[Ot].low),
              jt = Math.max(et[Vt].lim, et[Ot].lim);
            qt = Vt;
            do {
              qt = tt.parent(qt), Dt.push(qt)
            } while (qt && (et[qt].low > dt || jt > et[qt].lim));
            let Ht = qt,
              Xt = Ot;
            for (;
              (Xt = tt.parent(Xt)) !== Ht;) mt.push(Xt);
            return {
              path: Dt.concat(mt.reverse()),
              lca: Ht
            }
          }(tt, et, qt.v, qt.w),
          mt = Dt.path,
          dt = Dt.lca,
          jt = 0,
          Ht = mt[jt],
          Xt = !0;
        for (; Vt !== qt.w;) {
          if (Ot = tt.node(Vt), Xt) {
            for (;
              (Ht = mt[jt]) !== dt && tt.node(Ht).maxRank < Ot.rank;) jt++;
            Ht === dt && (Xt = !1)
          }
          if (!Xt) {
            for (; jt < mt.length - 1 && tt.node(mt[jt + 1]).minRank <= Ot.rank;) jt++;
            Ht = mt[jt]
          }
          void 0 !== Ht && tt.setParent(Vt, Ht), Vt = tt.successors(Vt)[0]
        }
      }))
    };

    function ze(tt) {
      let et = Ut(tt, "root", {}, "_root"),
        Vt = function(tt) {
          let et = {};

          function Vt(Ot, qt) {
            let Dt = tt.children(Ot);
            Dt && Dt.length && Dt.forEach((tt => Vt(tt, qt + 1))), et[Ot] = qt
          }
          return tt.children(qe).forEach((tt => Vt(tt, 1))), et
        }(tt),
        Ot = Object.values(Vt),
        qt = xt(Math.max, Ot) - 1,
        Dt = 2 * qt + 1;
      tt.graph().nestingRoot = et, tt.edges().forEach((et => tt.edge(et).minlen *= Dt));
      let mt = function(tt) {
        return tt.edges().reduce(((et, Vt) => et + tt.edge(Vt).weight), 0)
      }(tt) + 1;
      tt.children(qe).forEach((Ot => {
        oe(tt, et, Dt, mt, qt, Vt, Ot)
      })), tt.graph().nodeRankFactor = Dt
    }

    function oe(tt, et, Vt, Ot, qt, Dt, mt) {
      var dt;
      let jt = tt.children(mt);
      if (!jt.length) return void(mt !== et && tt.setEdge(et, mt, {
        weight: 0,
        minlen: Vt
      }));
      let Ht = Bt(tt, "_bt"),
        Xt = Bt(tt, "_bb"),
        Qt = tt.node(mt);
      tt.setParent(Ht, mt), Qt.borderTop = Ht, tt.setParent(Xt, mt), Qt.borderBottom = Xt, jt.forEach((dt => {
        var jt;
        oe(tt, et, Vt, Ot, qt, Dt, dt);
        let Qt = tt.node(dt),
          lt = Qt.borderTop ? Qt.borderTop : dt,
          Et = Qt.borderBottom ? Qt.borderBottom : dt,
          ft = Qt.borderTop ? Ot : 2 * Ot,
          wt = lt !== Et ? 1 : qt - (null != (jt = Dt[mt]) ? jt : 0) + 1;
        tt.setEdge(Ht, lt, {
          weight: ft,
          minlen: wt,
          nestingEdge: !0
        }), tt.setEdge(Et, Xt, {
          weight: ft,
          minlen: wt,
          nestingEdge: !0
        })
      })), tt.parent(mt) || tt.setEdge(et, Ht, {
        weight: 0,
        minlen: qt + (null != (dt = Dt[mt]) ? dt : 0)
      })
    }
    var re = function(tt) {
      tt.children(qe).forEach((function et(Vt) {
        let Ot = tt.children(Vt),
          qt = tt.node(Vt);
        if (Ot.length && Ot.forEach(et), qt && Object.hasOwn(qt, "minRank")) {
          qt.borderLeft = [], qt.borderRight = [];
          for (let et = qt.minRank, Ot = qt.maxRank + 1; et < Ot; ++et) Ue(tt, "borderLeft", "_bl", Vt, qt, et), Ue(tt, "borderRight", "_br", Vt, qt, et)
        }
      }))
    };

    function Ue(tt, et, Vt, Ot, qt, Dt) {
      let mt = {
          width: 0,
          height: 0,
          rank: Dt,
          borderType: et
        },
        dt = qt[et][Dt - 1],
        jt = Ut(tt, "border", mt, Vt);
      qt[et][Dt] = jt, tt.setParent(jt, Ot), dt && tt.setEdge(dt, jt, {
        weight: 1
      })
    }

    function Ae(tt) {
      var et;
      let Vt = null == (et = tt.graph().rankdir) ? void 0 : et.toLowerCase();
      ("bt" === Vt || "rl" === Vt) && function(tt) {
        tt.nodes().forEach((et => Be(tt.node(et)))), tt.edges().forEach((et => {
          var Vt;
          let Ot = tt.edge(et);
          null == (Vt = Ot.points) || Vt.forEach(Be), Object.hasOwn(Ot, "y") && Be(Ot)
        }))
      }(tt), ("lr" === Vt || "rl" === Vt) && (function(tt) {
        tt.nodes().forEach((et => pe(tt.node(et)))), tt.edges().forEach((et => {
          var Vt;
          let Ot = tt.edge(et);
          null == (Vt = Ot.points) || Vt.forEach(pe), Object.hasOwn(Ot, "x") && pe(Ot)
        }))
      }(tt), ie(tt))
    }

    function ie(tt) {
      tt.nodes().forEach((et => Ye(tt.node(et)))), tt.edges().forEach((et => Ye(tt.edge(et))))
    }

    function Ye(tt) {
      let et = tt.width;
      tt.width = tt.height, tt.height = et
    }

    function Be(tt) {
      tt.y = -tt.y
    }

    function pe(tt) {
      let et = tt.x;
      tt.x = tt.y, tt.y = et
    }

    function xe(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Vt = {},
        Ot = tt.nodes().filter((et => !tt.children(et).length)),
        qt = Ot.map((et => tt.node(et).rank)),
        Dt = ee(xt(Math.max, qt) + 1).map((() => []));
      return Ot.sort(((et, Vt) => tt.node(et).rank - tt.node(Vt).rank)).forEach((function Ot(qt) {
        if (Vt[qt]) return;
        Vt[qt] = !0;
        let mt = tt.node(qt);
        Dt[mt.rank].push(qt);
        let dt = tt.successors(qt);
        dt && [...dt].sort(((Vt, Ot) => function(Vt, Ot) {
          let qt = tt.node(Vt),
            Dt = tt.node(Ot);
          return De(et, qt, Dt)
        }(Vt, Ot))).forEach(Ot)
      })), Dt
    }

    function Te(tt, et) {
      let Vt = 0;
      for (let Ot = 1; Ot < et.length; ++Ot) Vt += ge(tt, et[Ot - 1], et[Ot]);
      return Vt
    }

    function ge(tt, et, Vt) {
      let Ot = function(tt, et) {
          return tt.reduce(((tt, Vt, Ot) => (tt[Vt] = et[Ot], tt)), {})
        }(Vt, Vt.map(((tt, et) => et))),
        qt = et.flatMap((et => {
          let Vt = tt.outEdges(et);
          return Vt ? Vt.map((et => ({
            pos: Ot[et.w],
            weight: tt.edge(et).weight
          }))).sort(((tt, et) => tt.pos - et.pos)) : []
        })),
        Dt = 1;
      for (; Dt < Vt.length;) Dt <<= 1;
      let mt = 2 * Dt - 1;
      Dt -= 1;
      let dt = new Array(mt).fill(0),
        jt = 0;
      return qt.forEach((tt => {
        let et = tt.pos + Dt;
        dt[et] += tt.weight;
        let Vt = 0;
        for (; et > 0;) et % 2 && (Vt += dt[et + 1]), et = et - 1 >> 1, dt[et] += tt.weight;
        jt += tt.weight * Vt
      })), jt
    }

    function se(tt, et) {
      let Vt = {};
      return tt.forEach(((tt, et) => {
          let Ot = {
            indegree: 0,
            in: [],
            out: [],
            vs: [tt.v],
            i: et
          };
          void 0 !== tt.barycenter && (Ot.barycenter = tt.barycenter, Ot.weight = tt.weight), Vt[tt.v] = Ot
        })), et.edges().forEach((tt => {
          let et = Vt[tt.v],
            Ot = Vt[tt.w];
          void 0 !== et && void 0 !== Ot && (Ot.indegree++, et.out.push(Ot))
        })),
        function(tt) {
          let et = [];

          function Vt(tt) {
            return et => {
              et.merged || (void 0 === et.barycenter || void 0 === tt.barycenter || et.barycenter >= tt.barycenter) && function(tt, et) {
                let Vt = 0,
                  Ot = 0;
                tt.weight && (Vt += tt.barycenter * tt.weight, Ot += tt.weight), et.weight && (Vt += et.barycenter * et.weight, Ot += et.weight), tt.vs = et.vs.concat(tt.vs), tt.barycenter = Vt / Ot, tt.weight = Ot, tt.i = Math.min(et.i, tt.i), et.merged = !0
              }(tt, et)
            }
          }

          function Ot(et) {
            return Vt => {
              Vt.in.push(et), 0 === --Vt.indegree && tt.push(Vt)
            }
          }
          for (; tt.length;) {
            let qt = tt.pop();
            et.push(qt), qt.in.reverse().forEach(Vt(qt)), qt.out.forEach(Ot(qt))
          }
          return et.filter((tt => !tt.merged)).map((tt => Ve(tt, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Vt).filter((tt => !tt.indegree)))
    }

    function ne(tt, et, Vt, Ot, qt) {
      let Dt = {},
        mt = null,
        dt = null,
        jt = qt;
      "boolean" == typeof et ? (jt = et, Dt = {}) : et && (Dt = et, mt = null != Vt ? Vt : null, dt = null != Ot ? Ot : null);
      let Ht = function(tt, et) {
          let Vt = {
            lhs: [],
            rhs: []
          };
          return tt.forEach((tt => {
            et(tt) ? Vt.lhs.push(tt) : Vt.rhs.push(tt)
          })), Vt
        }(tt, (tt => Object.hasOwn(tt, "barycenter"))),
        Xt = Ht.lhs,
        Qt = Ht.rhs.sort(((tt, et) => et.i - tt.i)),
        lt = [],
        Et = 0,
        ft = 0,
        wt = 0;
      Xt.sort(function(tt, et, Vt) {
        return (Ot, qt) => {
          if (Ot.barycenter < qt.barycenter) return -1;
          if (Ot.barycenter > qt.barycenter) return 1;
          if (tt && ("string" == typeof Ot.vs[0] || "string" == typeof qt.vs[0])) {
            let Vt = tt.node(Ot.vs[0]),
              Dt = tt.node(qt.vs[0]),
              mt = De(et, Vt, Dt);
            if (0 !== mt) return mt
          }
          return Vt ? qt.i - Ot.i : Ot.i - qt.i
        }
      }(dt, mt, !!jt));
      for (let [Nt, Mt] of Object.entries(Dt)) {
        let tt = Xt.findIndex((tt => tt.vs[0] === Nt));
        Xt.splice(tt + 1, 0, Mt)
      }
      wt = tV(lt, Qt, wt), Xt.forEach((tt => {
        wt += tt.vs.length, lt.push(tt.vs), Et += tt.barycenter * tt.weight, ft += tt.weight, wt = tV(lt, Qt, wt)
      }));
      let yt = {
        vs: lt.flat(1)
      };
      return ft && (yt.barycenter = Et / ft, yt.weight = ft), yt
    }

    function tV(tt, et, Vt) {
      let Ot;
      for (; et.length && (Ot = et[et.length - 1]).i <= Vt;) et.pop(), tt.push(Ot.vs), Vt++;
      return Vt
    }

    function eV(tt, et, Vt, Ot, qt) {
      var Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt;
      let yt = null,
        Nt = qt;
      "boolean" == typeof Ot ? (Nt = Ot, yt = null) : void 0 !== Ot && (yt = Ot);
      let Mt = tt.children(et),
        bt = tt.node(et),
        Jt = bt ? bt.borderLeft : void 0,
        Ct = bt ? bt.borderRight : void 0,
        ut = {};
      Jt && (Mt = Mt.filter((tt => tt !== Jt && tt !== Ct)));
      let Kt = function(tt) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((et => {
          let Vt = tt.inEdges(et);
          if (!Vt || !Vt.length) return {
            v: et
          };
          {
            let Ot = Vt.reduce(((et, Vt) => {
              let Ot = tt.edge(Vt),
                qt = tt.node(Vt.v);
              return {
                sum: et.sum + Ot.weight * qt.order,
                weight: et.weight + Ot.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: et,
              barycenter: Ot.sum / Ot.weight,
              weight: Ot.weight
            }
          }
        }))
      }(tt, Mt);
      Kt.forEach((et => {
        if (tt.children(et.v).length) {
          let {
            result: Ot
          } = eV(tt, et.v, Vt, yt, Nt);
          ut[et.v] = Ot, Object.hasOwn(Ot, "barycenter") && function(tt, et) {
            void 0 !== tt.barycenter ? (tt.barycenter = (tt.barycenter * tt.weight + et.barycenter * et.weight) / (tt.weight + et.weight), tt.weight += et.weight) : (tt.barycenter = et.barycenter, tt.weight = et.weight)
          }(et, Ot)
        }
      }));
      let ht = se(Kt, Vt);
      ! function(tt, et) {
        tt.forEach((tt => {
          tt.vs = tt.vs.flatMap((tt => et[tt] ? et[tt].vs : tt))
        }))
      }(ht, ut);
      let vt = {},
        Wt = !1;
      for (let ct = 0; ct < ht.length; ct++)
        for (let et = ct + 1; et < ht.length; et++)
          if (ht[ct] && ht[et] && null != (Dt = ht[ct]) && Dt.barycenter && null != (mt = ht[et]) && mt.barycenter && (null == (dt = ht[ct]) ? void 0 : dt.barycenter) === ht[et].barycenter) {
            let Vt = null != (Ht = null == (jt = ht[ct]) ? void 0 : jt.vs[0]) ? Ht : "",
              Ot = null != (Qt = null == (Xt = ht[et]) ? void 0 : Xt.vs[0]) ? Qt : "",
              qt = tt.node(Vt),
              Dt = tt.node(Ot);
            if ("edge" === qt.dummy && "edge" === Dt.dummy && (null == (lt = qt.edgeObj) ? void 0 : lt.v) === (null == (Et = Dt.edgeObj) ? void 0 : Et.v) && (null == (ft = qt.edgeObj) ? void 0 : ft.w) === (null == (wt = Dt.edgeObj) ? void 0 : wt.w)) {
              if (qt.edgeLabel.reversed) {
                vt[Ot] = ht[ct], ht.splice(ct, 1), ct--;
                break
              }
              vt[Vt] = ht[et], ht.splice(et, 1), et--
            } else Wt = !0
          } let St = ne(ht, vt, yt, tt, Nt);
      if (Jt && Ct) {
        St.vs = [Jt, St.vs, Ct].flat(1);
        let et = tt.predecessors(Jt);
        if (et && et.length) {
          let Vt = tt.node(et[0]),
            Ot = tt.predecessors(Ct),
            qt = tt.node(Ot[0]);
          Object.hasOwn(St, "barycenter") || (St.barycenter = 0, St.weight = 0), St.barycenter = (St.barycenter * St.weight + Vt.order + qt.order) / (St.weight + 2), St.weight += 2
        }
      }
      return Object.defineProperty(St, "result", {
        value: St,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(St, "usedBias", {
        value: Wt,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), St
    }

    function VV(tt, et, Vt, Ot) {
      Ot || (Ot = tt.nodes());
      let qt = function(tt) {
          let et;
          for (; tt.hasNode(et = te("_root")););
          return et
        }(tt),
        Dt = new rt({
          compound: !0
        }).setGraph({
          root: qt
        }).setDefaultNodeLabel((et => tt.node(et)));
      return Ot.forEach((Ot => {
        let mt = tt.node(Ot),
          dt = tt.parent(Ot);
        if (mt.rank === et || mt.minRank <= et && et <= mt.maxRank) {
          Dt.setNode(Ot), Dt.setParent(Ot, dt || qt);
          let jt = tt[Vt](Ot);
          jt && jt.forEach((et => {
            let Vt = et.v === Ot ? et.w : et.v,
              qt = Dt.edge(Vt, Ot),
              mt = void 0 !== qt ? qt.weight : 0;
            Dt.setEdge(Vt, Ot, {
              weight: tt.edge(et).weight + mt
            })
          })), Object.hasOwn(mt, "minRank") && Dt.setNode(Ot, {
            borderLeft: mt.borderLeft[et],
            borderRight: mt.borderRight[et]
          })
        }
      })), Dt
    }

    function OV(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof et.customOrder) return void et.customOrder(tt, OV);
      let Ot = Tt(tt),
        qt = qV(tt, ee(1, Ot + 1), "inEdges"),
        Dt = qV(tt, ee(Ot - 1, -1, -1), "outEdges"),
        mt = xe(tt, Vt);
      if (mV(tt, mt), et.disableOptimalOrderHeuristic) return;
      let dt, jt = Number.POSITIVE_INFINITY,
        Ht = et.constraints || [];
      for (let Xt = 0, Qt = 0; Qt < 4; ++Xt, ++Qt) {
        DV(Xt % 2 ? qt : Dt, Xt % 4 >= 2, Ht, Vt), mt = Yt(tt);
        let et = Te(tt, mt);
        et < jt ? (Qt = 0, dt = Object.assign({}, mt), jt = et) : et === jt && (dt = structuredClone(mt))
      }
      mV(tt, dt)
    }

    function qV(tt, et, Vt) {
      let Ot = new Map,
        qt = (tt, et) => {
          Ot.has(tt) || Ot.set(tt, []), Ot.get(tt).push(et)
        };
      for (let Dt of tt.nodes()) {
        let et = tt.node(Dt);
        if ("number" == typeof et.rank && qt(et.rank, Dt), "number" == typeof et.minRank && "number" == typeof et.maxRank)
          for (let tt = et.minRank; tt <= et.maxRank; tt++) tt !== et.rank && qt(tt, Dt)
      }
      return et.map((function(et) {
        return VV(tt, et, Vt, Ot.get(et) || [])
      }))
    }

    function DV(tt, et, Vt, Ot) {
      let qt = !0,
        Dt = new rt;
      tt.forEach((function(tt) {
        Vt.forEach((tt => Dt.setEdge(tt.left, tt.right)));
        let mt = tt.graph().root,
          {
            result: dt,
            usedBias: jt
          } = eV(tt, mt, Dt, Ot, qt);
        et && jt && (qt = !qt), dt.vs.forEach(((et, Vt) => tt.node(et).order = Vt)),
          function(tt, et, Vt) {
            let Ot, qt = {};
            Vt.forEach((Vt => {
              let Dt, mt, dt = tt.parent(Vt);
              for (; dt;) {
                if (Dt = tt.parent(dt), Dt ? (mt = qt[Dt], qt[Dt] = dt) : (mt = Ot, Ot = dt), mt && mt !== dt) return void et.setEdge(mt, dt);
                dt = Dt
              }
            }))
          }(tt, Dt, dt.vs)
      }))
    }

    function mV(tt, et) {
      Object.values(et).forEach((et => et.forEach(((et, Vt) => tt.node(et).order = Vt))))
    }

    function dV(tt, et, Vt) {
      if (et > Vt) {
        let tt = et;
        et = Vt, Vt = tt
      }
      let Ot = tt[et];
      Ot || (tt[et] = Ot = {}), Ot[Vt] = !0
    }

    function jV(tt, et, Vt) {
      if (et > Vt) {
        let tt = et;
        et = Vt, Vt = tt
      }
      let Ot = tt[et];
      return void 0 !== Ot && Object.hasOwn(Ot, Vt)
    }

    function HV(tt, et, Vt, Ot) {
      let qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Dt = {},
        mt = function(tt, et, Vt, Ot) {
          let qt = new rt,
            Dt = tt.graph(),
            mt = function(tt, et, Vt) {
              return (Ot, qt, Dt) => {
                let mt, dt = Ot.node(qt),
                  jt = Ot.node(Dt),
                  Ht = 0;
                if (Ht += dt.width / 2, Object.hasOwn(dt, "labelpos")) switch (dt.labelpos.toLowerCase()) {
                  case "l":
                    mt = -dt.width / 2;
                    break;
                  case "r":
                    mt = dt.width / 2
                }
                if (mt && (Ht += Vt ? mt : -mt), mt = void 0, Ht += (dt.dummy ? et : tt) / 2, Ht += (jt.dummy ? et : tt) / 2, Ht += jt.width / 2, Object.hasOwn(jt, "labelpos")) switch (jt.labelpos.toLowerCase()) {
                  case "l":
                    mt = jt.width / 2;
                    break;
                  case "r":
                    mt = -jt.width / 2
                }
                return mt && (Ht += Vt ? mt : -mt), Ht
              }
            }(Dt.nodesep, Dt.edgesep, Ot);
          return et.forEach((et => {
            let Ot;
            et.forEach((et => {
              let Dt = Vt[et];
              if (void 0 !== Dt) {
                if (qt.setNode(Dt), void 0 !== Ot) {
                  let dt = Vt[Ot];
                  if (void 0 !== dt) {
                    let Vt = qt.edge(dt, Dt);
                    qt.setEdge(dt, Dt, Math.max(mt(tt, et, Ot), Vt || 0))
                  }
                }
                Ot = et
              }
            }))
          })), qt
        }(tt, et, Vt, qt),
        dt = qt ? "borderLeft" : "borderRight";

      function jt(tt, et) {
        let Vt = mt.nodes().slice(),
          Ot = {},
          qt = Vt.pop();
        for (; qt;) {
          if (Ot[qt]) tt(qt);
          else {
            Ot[qt] = !0, Vt.push(qt);
            for (let tt of et(qt)) Vt.push(tt)
          }
          qt = Vt.pop()
        }
      }
      return jt((function(tt) {
        let et = mt.inEdges(tt);
        Dt[tt] = et ? et.reduce(((tt, et) => {
          var Vt;
          let Ot = null != (Vt = Dt[et.v]) ? Vt : 0,
            qt = mt.edge(et);
          return Math.max(tt, Ot + (void 0 !== qt ? qt : 0))
        }), 0) : 0
      }), (function(tt) {
        return mt.predecessors(tt) || []
      })), jt((function(et) {
        let Vt = mt.outEdges(et),
          Ot = Number.POSITIVE_INFINITY;
        Vt && (Ot = Vt.reduce(((tt, et) => {
          let Vt = Dt[et.w],
            Ot = mt.edge(et);
          return Math.min(tt, (void 0 !== Vt ? Vt : 0) - (void 0 !== Ot ? Ot : 0))
        }), Number.POSITIVE_INFINITY));
        let qt = tt.node(et);
        Ot !== Number.POSITIVE_INFINITY && qt.borderType !== dt && (Dt[et] = Math.max(void 0 !== Dt[et] ? Dt[et] : 0, Ot))
      }), (function(tt) {
        return mt.successors(tt) || []
      })), Object.keys(Ot).forEach((tt => {
        var et;
        let Ot = Vt[tt];
        void 0 !== Ot && (Dt[tt] = null != (et = Dt[Ot]) ? et : 0)
      })), Dt
    }

    function XV(tt, et) {
      let Vt, Ot = Yt(tt),
        qt = Object.assign(function(tt, et) {
          let Vt = {};
          return et.length && et.reduce((function(et, Ot) {
            let qt = 0,
              Dt = 0,
              mt = et.length,
              dt = Ot[Ot.length - 1];
            return Ot.forEach(((et, jt) => {
              let Ht = function(tt, et) {
                  if (tt.node(et).dummy) {
                    let Vt = tt.predecessors(et);
                    if (Vt) return Vt.find((et => tt.node(et).dummy))
                  }
                }(tt, et),
                Xt = Ht ? tt.node(Ht).order : mt;
              (Ht || et === dt) && (Ot.slice(Dt, jt + 1).forEach((et => {
                let Ot = tt.predecessors(et);
                Ot && Ot.forEach((Ot => {
                  let Dt = tt.node(Ot),
                    mt = Dt.order;
                  (mt < qt || Xt < mt) && (!Dt.dummy || !tt.node(et).dummy) && dV(Vt, Ot, et)
                }))
              })), Dt = jt + 1, qt = Xt)
            })), Ot
          })), Vt
        }(tt, Ot), function(tt, et) {
          let Vt = {};

          function Ot(et, Ot, qt, Dt, mt) {
            ee(Ot, qt).forEach((Ot => {
              let qt = et[Ot];
              if (void 0 !== qt && tt.node(qt).dummy) {
                let et = tt.predecessors(qt);
                et && et.forEach((et => {
                  if (void 0 === et) return;
                  let Ot = tt.node(et);
                  Ot.dummy && (Ot.order < Dt || Ot.order > mt) && dV(Vt, et, qt)
                }))
              }
            }))
          }
          return et.length && et.reduce((function(et, Vt) {
            let qt = -1,
              Dt = -1,
              mt = 0;
            return Vt.forEach(((dt, jt) => {
              if ("border" === tt.node(dt).dummy) {
                let et = tt.predecessors(dt);
                if (et && et.length) {
                  let dt = et[0];
                  if (void 0 === dt) return;
                  Dt = tt.node(dt).order, Ot(Vt, mt, jt, qt, Dt), mt = jt, qt = Dt
                }
              }
              Ot(Vt, mt, Vt.length, Dt, et.length)
            })), Vt
          })), Vt
        }(tt, Ot)),
        Dt = {};
      ["u", "d"].forEach((mt => {
        Vt = "u" === mt ? Ot : Object.values(Ot).reverse(), ["l", "r"].forEach((Ot => {
          "r" === Ot && (Vt = Vt.map((tt => Object.values(tt).reverse())));
          let dt = function(tt, et, Vt, Ot, qt) {
              let Dt = {},
                mt = {},
                dt = {};
              return et.forEach((tt => {
                tt.forEach(((tt, et) => {
                  Dt[tt] = tt, mt[tt] = tt, dt[tt] = et
                }))
              })), et.forEach((et => {
                let jt = -1,
                  Ht = -1,
                  Xt = !1,
                  Qt = et,
                  lt = et.findIndex((et => (null == qt ? void 0 : qt.includes(et)) || QV(et, tt, qt)));
                lt > 0 && (Qt = [et[lt], ...et.slice(0, lt), ...et.slice(lt + 1)], Xt = !0), Qt.forEach((et => {
                  var Qt;
                  let lt = Ot(et);
                  if (lt && lt.length) {
                    null != qt && qt.includes(et) && (lt = lt.filter((et => QV(et, tt, qt))));
                    let Ot = lt.sort(((tt, et) => {
                        let Vt = dt[tt],
                          Ot = dt[et];
                        return (void 0 !== Vt ? Vt : 0) - (void 0 !== Ot ? Ot : 0)
                      })),
                      Et = (Ot.length - 1) / 2;
                    for (let tt = Math.floor(Et), qt = Math.ceil(Et); tt <= qt; ++tt) {
                      let qt = Ot[tt];
                      if (void 0 === qt) continue;
                      let lt = dt[qt];
                      if (void 0 !== lt && mt[et] === et && jt < lt && dt[qt] !== Ht && !jV(Vt, et, qt)) {
                        let tt = Dt[qt];
                        void 0 !== tt && (mt[qt] = et, mt[et] = Dt[et] = tt, jt = lt, Xt && (jt = -1, Ht = null != (Qt = dt[qt]) ? Qt : -1, Xt = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Dt,
                align: mt
              }
            }(tt, Vt, qt, (et => ("u" === mt ? tt.predecessors(et) : tt.successors(et)) || []), et),
            jt = HV(tt, Vt, dt.root, dt.align, "r" === Ot);
          "r" === Ot && (jt = Oe(jt, (tt => -tt))), Dt[mt + Ot] = jt
        }))
      }));
      let mt = function(tt, et) {
        return Object.values(et).reduce(((et, Vt) => {
          let Ot = Number.NEGATIVE_INFINITY,
            qt = Number.POSITIVE_INFINITY;
          Object.entries(Vt).forEach((et => {
            let [Vt, Dt] = et, mt = function(tt, et) {
              return tt.node(et).width
            }(tt, Vt) / 2;
            Ot = Math.max(Dt + mt, Ot), qt = Math.min(Dt - mt, qt)
          }));
          let Dt = Ot - qt;
          return Dt < et[0] && (et = [Dt, Vt]), et
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(tt, Dt);
      return function(tt, et) {
          let Vt = Object.values(et),
            Ot = xt(Math.min, Vt),
            qt = xt(Math.max, Vt);
          ["u", "d"].forEach((Vt => {
            ["l", "r"].forEach((Dt => {
              let mt = Vt + Dt,
                dt = tt[mt];
              if (!dt || dt === et) return;
              let jt = Object.values(dt),
                Ht = Ot - xt(Math.min, jt);
              "l" !== Dt && (Ht = qt - xt(Math.max, jt)), Ht && (tt[mt] = Oe(dt, (tt => tt + Ht)))
            }))
          }))
        }(Dt, mt),
        function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Vt = tt.ul;
          return Vt ? Oe(Vt, ((Vt, Ot) => {
            var qt, Dt;
            if (et) {
              let Vt = et.toLowerCase(),
                qt = tt[Vt];
              if (qt && void 0 !== qt[Ot]) return qt[Ot]
            }
            let mt = Object.values(tt).map((tt => {
              let et = tt[Ot];
              return void 0 !== et ? et : 0
            })).sort(((tt, et) => tt - et));
            return ((null != (qt = mt[1]) ? qt : 0) + (null != (Dt = mt[2]) ? Dt : 0)) / 2
          })) : {}
        }(Dt, tt.graph().align)
    }

    function QV(tt, et, Vt) {
      var Ot;
      if (!Vt) return !1;
      let qt = null == (Ot = et.node(tt)) ? void 0 : Ot.edgeObj;
      if (!qt || et.node(tt).edgeLabel.reversed) return !1;
      let Dt = Vt.indexOf(null == qt ? void 0 : qt.v),
        mt = Vt.indexOf(null == qt ? void 0 : qt.w);
      return -1 !== Dt && -1 !== mt && Dt === (mt + 1) % Vt.length || Dt === (mt - 1) % Vt.length
    }

    function lV(tt, et) {
      (function(tt) {
        let et = Yt(tt),
          Vt = tt.graph(),
          Ot = Vt.ranksep,
          qt = Vt.rankalign,
          Dt = 0;
        et.forEach((et => {
          let Vt = et.reduce(((et, Vt) => {
            var Ot;
            let qt = null != (Ot = tt.node(Vt).height) ? Ot : 0;
            return et > qt ? et : qt
          }), 0);
          et.forEach((et => {
            let Ot = tt.node(et);
            Ot.y = "top" === qt ? Dt + Ot.height / 2 : "bottom" === qt ? Dt + Vt - Ot.height / 2 : Dt + Vt / 2
          })), Dt += Vt + Ot
        }))
      })(tt = At(tt)), Object.entries(XV(tt, et)).forEach((et => {
        let [Vt, Ot] = et;
        return tt.node(Vt).x = Ot
      }))
    }
    var EV = new WeakMap;

    function fV(tt) {
      return yV(tt, st, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), tt
    }

    function wV(tt, et, Vt) {
      let Ot = et;
      for (; void 0 !== Ot;) {
        let et = tt.parent(Ot);
        if (et === Vt) return Ot;
        Ot = et
      }
    }

    function yV(tt, et, Vt) {
      var Ot;
      let qt = tt.nodes().filter((et => tt.children(et).length)),
        Dt = {};
      qt.forEach((Ot => {
        let qt = tt.node(Ot);
        if (qt && qt.rankdir) {
          let mt = new rt({
            multigraph: !0,
            compound: !0
          });
          mt.setGraph({
            rankdir: qt.rankdir
          });
          let dt = tt.children(Ot);
          dt.forEach((et => {
            let Vt = {
              ...tt.node(et)
            };
            mt.setNode(et, Vt);
            let qt = tt.parent(et);
            qt && qt !== Ot && dt.includes(qt) && mt.setParent(et, qt)
          }));
          let jt = new Set;
          tt.edges().forEach((et => {
            let Vt = wV(tt, et.v, Ot),
              qt = wV(tt, et.w, Ot);
            if (Vt && qt && Vt !== qt) {
              let Ot = `${Vt}\0${qt}`;
              jt.has(Ot) || (jt.add(Ot), mt.setEdge(Vt, qt, {
                ...tt.edge(et)
              }))
            }
          })), yV(mt, et, Vt);
          let Ht = WV(mt);
          NV(Ht, et, Vt, null), aV(mt, Ht);
          let Xt = 1 / 0,
            Qt = 1 / 0,
            lt = -1 / 0,
            Et = -1 / 0;
          mt.nodes().forEach((tt => {
            if (tt === Ot) return;
            let et = mt.node(tt);
            et && "number" == typeof et.x && "number" == typeof et.y && "number" == typeof et.width && "number" == typeof et.height && (Xt = Math.min(Xt, et.x - et.width / 2), lt = Math.max(lt, et.x + et.width / 2), Qt = Math.min(Qt, et.y - et.height / 2), Et = Math.max(Et, et.y + et.height / 2))
          })), (!isFinite(Xt) || !isFinite(Qt) || !isFinite(lt) || !isFinite(Et)) && (Xt = Qt = 0, lt = Et = 0);
          let ft = lt - Xt,
            wt = Et - Qt;
          Dt[Ot] = {
            minX: Xt,
            XO: Qt,
            maxX: lt,
            QO: Et,
            width: ft,
            height: wt,
            offsetX: Xt,
            offsetY: Qt
          }, qt._dagreClusterSubgraph = mt
        }
      }));
      let mt = [],
        dt = new Map;
      qt.forEach((et => {
        let Vt = tt.node(et);
        Vt && Vt.rankdir && Dt[et] && dt.set(et, (tt.children(et) || []).filter((tt => tt !== et)))
      }));
      let jt = new Set([...dt.values()].flat()),
        Ht = new Map;
      dt.forEach(((et, Vt) => {
        jt.has(Vt) || Ht.set(Vt, (et => {
          let Vt = [],
            Ot = (tt.children(et) || []).filter((tt => tt !== et));
          for (; Ot.length > 0;) {
            let et = Ot.shift();
            Vt.push(et), (tt.children(et) || []).filter((tt => tt !== et)).forEach((tt => Ot.push(tt)))
          }
          return Vt
        })(Vt))
      }));
      let Xt = new Set([...Ht.values()].flat()),
        Qt = tt => {
          for (let [et, Vt] of Ht)
            if (Vt.includes(tt)) return et;
          return tt
        },
        lt = [];
      tt.edges().forEach((et => {
        (Xt.has(et.v) || Xt.has(et.w)) && lt.push({
          edge: et,
          label: tt.edge(et)
        })
      }));
      let Et = new Map;
      Xt.forEach((et => {
        let Vt = tt.parent(et);
        Et.set(et, "string" == typeof Vt ? Vt : void 0)
      })), Ht.forEach(((et, Vt) => {
        let Ot = tt.node(Vt),
          qt = [];
        et.forEach((et => {
          let Vt = tt.node(et);
          Vt && (qt.push({
            id: et,
            node: Vt,
            parent: Et.get(et)
          }), tt.removeNode(et))
        }));
        let dt = lt.filter((tt => {
            let {
              edge: Vt
            } = tt;
            return et.includes(Vt.v) || et.includes(Vt.w)
          })),
          jt = Dt[Vt];
        Ot && (mt.push({
          clusterId: Vt,
          subgraph: Ot._dagreClusterSubgraph,
          bounds: jt,
          children: et,
          removedNodes: qt,
          removedEdges: dt
        }), Ot.width = jt.width, Ot.height = jt.height)
      }));
      let ft = new Set;
      lt.forEach((et => {
        let {
          edge: Vt,
          label: Ot
        } = et, qt = Qt(Vt.v), Dt = Qt(Vt.w);
        if (qt !== Dt && tt.hasNode(qt) && tt.hasNode(Dt)) {
          let et = `${qt}\0${Dt}`;
          ft.has(et) || (ft.add(et), tt.setEdge(qt, Dt, {
            ...Ot,
            width: 0,
            height: 0
          }))
        }
      }));
      let wt = WV(tt),
        yt = NV(wt, et, Vt, null != (Ot = EV.get(tt)) ? Ot : null);
      EV.set(tt, yt), aV(tt, wt), ft.forEach((et => {
        let Vt = et.indexOf("\0"),
          Ot = et.slice(0, Vt),
          qt = et.slice(Vt + 1);
        tt.hasEdge(Ot, qt) && tt.removeEdge(Ot, qt)
      })), mt.forEach((et => {
        let {
          clusterId: Vt,
          subgraph: Ot,
          bounds: qt,
          removedNodes: Dt,
          removedEdges: mt
        } = et;
        var dt, jt;
        let Ht = tt.node(Vt),
          Xt = null != (dt = null == Ht ? void 0 : Ht.x) ? dt : 0,
          Qt = null != (jt = null == Ht ? void 0 : Ht.y) ? jt : 0,
          lt = (qt.minX + qt.maxX) / 2,
          Et = (qt.XO + qt.QO) / 2;
        Dt.forEach((et => {
          let {
            id: Vt,
            node: Ot,
            parent: qt
          } = et;
          tt.setNode(Vt, Ot), void 0 !== qt && tt.setParent(Vt, qt)
        })), mt.forEach((et => {
          let {
            edge: Vt,
            label: Ot
          } = et;
          tt.setEdge(Vt, Ot)
        })), Ot.nodes().forEach((et => {
          if (et === Vt) return;
          let qt = Ot.node(et),
            Dt = tt.node(et);
          Dt && qt && "number" == typeof qt.x && "number" == typeof qt.y && (Dt.x = Xt + (qt.x - lt), Dt.y = Qt + (qt.y - Et))
        })), delete Ht._dagreClusterSubgraph
      })), qt.forEach((et => {
        var Vt, Ot;
        let qt = tt.node(et),
          mt = Dt[et];
        if (qt && qt.rankdir && qt._dagreClusterSubgraph && mt) {
          let Dt = qt._dagreClusterSubgraph,
            dt = null != (Vt = qt.x) ? Vt : 0,
            jt = null != (Ot = qt.y) ? Ot : 0,
            Ht = (mt.minX + mt.maxX) / 2,
            Xt = (mt.XO + mt.QO) / 2;
          Dt.nodes().forEach((Vt => {
            if (Vt === et) return;
            let Ot = Dt.node(Vt),
              qt = tt.node(Vt);
            if (qt && Ot && "number" == typeof Ot.x && "number" == typeof Ot.y) {
              let tt = Ot.x - Ht,
                et = Ot.y - Xt;
              qt.x = dt + tt, qt.y = jt + et
            }
          })), delete qt._dagreClusterSubgraph
        }
      }))
    }

    function NV(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var qt, Dt;
      let mt = !1 !== (null == Vt ? void 0 : Vt.useDynamic),
        dt = mt && null != (qt = null == Ot ? void 0 : Ot.graph) ? qt : null,
        jt = mt && null != (Dt = null == Ot ? void 0 : Ot.rawNodes) ? Dt : null;
      et("    makeSpaceForEdgeLabels", (() => function(tt) {
        let et = tt.graph();
        et.ranksep /= 2, tt.edges().forEach((Vt => {
          var Ot;
          let qt = tt.edge(Vt);
          qt.minlen *= 2, "c" !== (null != (Ot = qt.labelpos) ? Ot : "r").toLowerCase() && ("TB" === et.rankdir || "BT" === et.rankdir ? qt.width += qt.labeloffset : qt.height += qt.labeloffset)
        }))
      }(tt))), et("    removeSelfEdges", (() => function(tt) {
        tt.edges().forEach((et => {
          if (et.v === et.w) {
            let Vt = tt.node(et.v);
            Vt.selfEdges || (Vt.selfEdges = []), Vt.selfEdges.push({
              e: et,
              label: tt.edge(et)
            }), tt.removeEdge(et)
          }
        }))
      }(tt))), et("    acyclic", (() => fe(tt, dt))), et("    nestingGraph.run", (() => ze(tt))), et("    rank", (() => Le(At(tt)))), et("    injectEdgeLabelProxies", (() => function(tt) {
        tt.edges().forEach((et => {
          let Vt = tt.edge(et);
          if (Vt.width && Vt.height) {
            let Vt = tt.node(et.v),
              Ot = {
                rank: (tt.node(et.w).rank - Vt.rank) / 2 + Vt.rank,
                e: et
              };
            Ut(tt, "edge-proxy", Ot, "_ep")
          }
        }))
      }(tt))), et("    removeEmptyRanks", (() => function(tt) {
        let et = tt.nodes().map((et => tt.node(et).rank)).filter((tt => void 0 !== tt)),
          Vt = xt(Math.min, et),
          Ot = [];
        tt.nodes().forEach((et => {
          let qt = tt.node(et).rank - Vt;
          Ot[qt] || (Ot[qt] = []), Ot[qt].push(et)
        }));
        let qt = 0,
          Dt = tt.graph().nodeRankFactor;
        Array.from(Ot).forEach(((et, Vt) => {
          void 0 === et && Vt % Dt !== 0 ? --qt : void 0 !== et && qt && et.forEach((et => tt.node(et).rank += qt))
        }))
      }(tt))), et("    nestingGraph.cleanup", (() => function(tt) {
        let et = tt.graph();
        tt.removeNode(et.nestingRoot), delete et.nestingRoot, tt.edges().forEach((et => {
          tt.edge(et).nestingEdge && tt.removeEdge(et)
        }))
      }(tt))), et("    normalizeRanks", (() => function(tt) {
        let et = tt.nodes().map((et => {
            let Vt = tt.node(et).rank;
            return void 0 === Vt ? Number.MAX_VALUE : Vt
          })),
          Vt = xt(Math.min, et);
        tt.nodes().forEach((et => {
          let Ot = tt.node(et);
          Object.hasOwn(Ot, "rank") && (Ot.rank -= Vt)
        }))
      }(tt))), et("    assignRankMinMax", (() => function(tt) {
        let et = 0;
        tt.nodes().forEach((Vt => {
          let Ot = tt.node(Vt);
          Ot.borderTop && (Ot.minRank = tt.node(Ot.borderTop).rank, Ot.maxRank = tt.node(Ot.borderBottom).rank, et = Math.max(et, Ot.maxRank))
        })), tt.graph().maxRank = et
      }(tt))), et("    removeEdgeLabelProxies", (() => function(tt) {
        tt.nodes().forEach((et => {
          let Vt = tt.node(et);
          if ("edge-proxy" === Vt.dummy) {
            let Ot = Vt;
            tt.edge(Ot.e).labelRank = Vt.rank, tt.removeNode(et)
          }
        }))
      }(tt))), et("    normalize.run", (() => we(tt))), et("    parentDummyChains", (() => Ge(tt))), et("    addBorderSegments", (() => re(tt))), et("    order", (() => OV(tt, Vt, jt))), et("    insertSelfEdges", (() => function(tt) {
        Yt(tt).forEach((et => {
          let Vt = 0;
          et.forEach(((et, Ot) => {
            let qt = tt.node(et);
            "number" != typeof qt.rank && (qt.rank = 0), qt.order = Ot + Vt, (qt.selfEdges || []).forEach((et => {
              Ut(tt, "selfedge", {
                width: et.label.width,
                height: et.label.height,
                rank: qt.rank,
                order: Ot + ++Vt,
                e: et.e,
                edgeLabel: et.label
              }, "_se"), (!Array.isArray(et.label.points) || 7 !== et.label.points.length) && (et.label.points = [{
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
            })), delete qt.selfEdges
          }))
        }))
      }(tt))), et("    adjustCoordinateSystem", (() => function(tt) {
        var et;
        let Vt = null == (et = tt.graph().rankdir) ? void 0 : et.toLowerCase();
        ("lr" === Vt || "rl" === Vt) && ie(tt)
      }(tt))), et("    position", (() => lV(tt, Vt.corePath))), et("    positionSelfEdges", (() => function(tt) {
        tt.nodes().forEach((et => {
          let Vt = tt.node(et),
            Ot = tt => "number" == typeof tt && isFinite(tt);
          if ("selfedge" === Vt.dummy) {
            let qt = Vt,
              Dt = tt.node(qt.e.v),
              mt = Ot(null == Dt ? void 0 : Dt.x) ? Dt.x : 0,
              dt = Ot(null == Dt ? void 0 : Dt.y) ? Dt.y : 0,
              jt = Ot(null == Dt ? void 0 : Dt.width) ? Dt.width : 0,
              Ht = Ot(null == Dt ? void 0 : Dt.height) ? Dt.height : 0,
              Xt = Ot(Vt.x) ? Vt.x : mt,
              Qt = Ot(Vt.y) ? Vt.y : dt,
              lt = jt / 2,
              Et = Ht / 2;
            qt.edgeLabel.points = [{
              x: Xt + lt,
              y: Qt - Et
            }, {
              x: Xt + lt,
              y: Qt - Et
            }, {
              x: Xt,
              y: Qt
            }, {
              x: Xt - lt,
              y: Qt + Et
            }, {
              x: Xt - lt,
              y: Qt + Et
            }, {
              x: Xt,
              y: Qt
            }, {
              x: Xt,
              y: Qt
            }], qt.edgeLabel.x = Xt, qt.edgeLabel.y = Qt, tt.setEdge(qt.e, qt.edgeLabel), tt.removeNode(et)
          } else Vt && Array.isArray(Vt.selfEdges) && Vt.selfEdges.forEach((tt => {
            if (!Array.isArray(tt.label.points) || 7 !== tt.label.points.length) {
              let et = Ot(Vt.x) ? Vt.x : 0,
                qt = Ot(Vt.y) ? Vt.y : 0,
                Dt = (Ot(Vt.width) ? Vt.width : 0) / 2,
                mt = (Ot(Vt.height) ? Vt.height : 0) / 2;
              tt.label.points = [{
                x: et + Dt,
                y: qt - mt
              }, {
                x: et + Dt,
                y: qt - mt
              }, {
                x: et,
                y: qt
              }, {
                x: et - Dt,
                y: qt + mt
              }, {
                x: et - Dt,
                y: qt + mt
              }, {
                x: et,
                y: qt
              }, {
                x: et,
                y: qt
              }]
            }
          }))
        }))
      }(tt)));
      let Ht = JSON.parse(JSON.stringify(tt._nodes));
      return et("    removeBorderNodes", (() => function(tt) {
        tt.nodes().forEach((et => {
          if (tt.children(et).length) {
            let Vt = tt.node(et),
              Ot = tt.node(Vt.borderTop),
              qt = tt.node(Vt.borderBottom),
              Dt = tt.node(Vt.borderLeft[Vt.borderLeft.length - 1]),
              mt = tt.node(Vt.borderRight[Vt.borderRight.length - 1]);
            Vt.width = Math.abs(mt.x - Dt.x), Vt.height = Math.abs(qt.y - Ot.y), Vt.x = Dt.x + Vt.width / 2, Vt.y = Ot.y + Vt.height / 2
          }
        })), tt.nodes().forEach((et => {
          "border" === tt.node(et).dummy && tt.removeNode(et)
        }))
      }(tt))), et("    normalize.undo", (() => function(tt) {
        tt.graph().dummyChains.forEach((et => {
          let Vt, Ot = tt.node(et),
            qt = Ot.edgeLabel;
          for (tt.setEdge(Ot.edgeObj, qt); Ot.dummy;) Vt = tt.successors(et)[0], tt.removeNode(et), qt.points.push({
            x: Ot.x,
            y: Ot.y
          }), "edge-label" === Ot.dummy && (qt.x = Ot.x, qt.y = Ot.y, qt.width = Ot.width, qt.height = Ot.height), et = Vt, Ot = tt.node(et)
        }))
      }(tt))), et("    fixupEdgeLabelCoords", (() => function(tt) {
        tt.edges().forEach((et => {
          let Vt = tt.edge(et);
          if (Object.hasOwn(Vt, "x")) switch (("l" === Vt.labelpos || "r" === Vt.labelpos) && (Vt.width -= Vt.labeloffset), Vt.labelpos) {
            case "l":
              Vt.x -= Vt.width / 2 + Vt.labeloffset;
              break;
            case "r":
              Vt.x += Vt.width / 2 + Vt.labeloffset
          }
        }))
      }(tt))), et("    undoCoordinateSystem", (() => Ae(tt))), et("    translateGraph", (() => function(tt) {
        let et = Number.POSITIVE_INFINITY,
          Vt = 0,
          Ot = Number.POSITIVE_INFINITY,
          qt = 0,
          Dt = tt.graph(),
          mt = Dt.marginx || 0,
          dt = Dt.marginy || 0;

        function jt(tt) {
          let Dt = tt.x,
            mt = tt.y,
            dt = tt.width,
            jt = tt.height;
          et = Math.min(et, Dt - dt / 2), Vt = Math.max(Vt, Dt + dt / 2), Ot = Math.min(Ot, mt - jt / 2), qt = Math.max(qt, mt + jt / 2)
        }
        tt.nodes().forEach((et => jt(tt.node(et)))), tt.edges().forEach((et => {
          let Vt = tt.edge(et);
          Object.hasOwn(Vt, "x") && jt(Vt)
        })), et -= mt, Ot -= dt, tt.nodes().forEach((Vt => {
          let qt = tt.node(Vt);
          qt.x -= et, qt.y -= Ot
        })), tt.edges().forEach((Vt => {
          let qt = tt.edge(Vt);
          qt.points.forEach((tt => {
            tt.x -= et, tt.y -= Ot
          })), Object.hasOwn(qt, "x") && (qt.x -= et), Object.hasOwn(qt, "y") && (qt.y -= Ot)
        })), Dt.width = Vt - et + mt, Dt.height = qt - Ot + dt
      }(tt))), et("    assignNodeIntersects", (() => function(tt) {
        tt.edges().forEach((et => {
          if (et.v === et.w) return;
          let Vt, Ot, qt = tt.edge(et),
            Dt = tt.node(et.v),
            mt = tt.node(et.w);
          qt.points ? (Vt = qt.points[0], Ot = qt.points[qt.points.length - 1]) : (qt.points = [], Vt = mt, Ot = Dt), qt.points.unshift(it(Dt, Vt)), qt.points.push(it(mt, Ot))
        }))
      }(tt))), et("    reversePoints", (() => function(tt) {
        tt.edges().forEach((et => {
          let Vt = tt.edge(et);
          Vt.reversed && Vt.points.reverse()
        }))
      }(tt))), et("    acyclic.undo", (() => function(tt) {
        tt.edges().forEach((et => {
          let Vt = tt.edge(et);
          if (Vt.reversed) {
            tt.removeEdge(et);
            let Ot = Vt.forwardName;
            delete Vt.reversed, delete Vt.forwardName, tt.setEdge(et.w, et.v, Vt, Ot)
          }
        }))
      }(tt))), {
        graph: tt,
        rawNodes: Ht
      }
    }

    function aV(tt, et) {
      tt.nodes().forEach((Vt => {
        let Ot = tt.node(Vt),
          qt = et.node(Vt);
        Ot && (Ot.x = qt.x, Ot.y = qt.y, Ot.order = qt.order, Ot.rank = qt.rank, et.children(Vt).length && (Ot.width = qt.width, Ot.height = qt.height))
      })), tt.edges().forEach((Vt => {
        let Ot = tt.edge(Vt),
          qt = et.edge(Vt);
        Ot.points = qt.points, Object.hasOwn(qt, "x") && (Ot.x = qt.x, Ot.y = qt.y)
      })), tt.graph().width = et.graph().width, tt.graph().height = et.graph().height
    }
    var MV = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      bV = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      JV = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      CV = ["width", "height", "rank"],
      uV = {
        width: 0,
        height: 0
      },
      KV = ["minlen", "weight", "width", "height", "labeloffset"],
      hV = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      vV = ["labelpos"];

    function WV(tt) {
      let et = new rt({
          multigraph: !0,
          compound: !0
        }),
        Vt = cV(tt.graph());
      return et.setGraph(Object.assign({}, bV, SV(Vt, MV), Ve(Vt, JV))), tt.nodes().forEach((Vt => {
        let Ot = SV(cV(tt.node(Vt)), CV);
        Object.keys(uV).forEach((tt => {
          void 0 === Ot[tt] && (Ot[tt] = uV[tt])
        })), et.setNode(Vt, Ot);
        let qt = tt.parent(Vt);
        void 0 !== qt && et.setParent(Vt, qt)
      })), tt.edges().forEach((Vt => {
        let Ot = cV(tt.edge(Vt));
        et.setEdge(Vt, Object.assign({}, hV, SV(Ot, KV), Ve(Ot, vV)))
      })), et
    }

    function SV(tt, et) {
      return Oe(Ve(tt, et), Number)
    }

    function cV(tt) {
      let et = {};
      return tt && Object.entries(tt).forEach((tt => {
        let [Vt, Ot] = tt;
        "string" == typeof Vt && (Vt = Vt.toLowerCase()), et[Vt] = Ot
      })), et
    }

    function RV(tt) {
      let et = Yt(tt),
        Vt = new rt({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return tt.nodes().forEach((et => {
        Vt.setNode(et, {
          label: et
        }), Vt.setParent(et, "layer" + tt.node(et).rank)
      })), tt.edges().forEach((tt => Vt.setEdge(tt.v, tt.w, {}, tt.name))), et.forEach(((tt, et) => {
        let Ot = "layer" + et;
        Vt.setNode(Ot, {
          rank: "same"
        }), tt.reduce(((tt, et) => (Vt.setEdge(tt, et, {
          style: "invis"
        }), et)))
      })), Vt
    }
    var IV = {
        time: gt,
        notime: st
      },
      PV = {
        graphlib: Dt,
        version: me,
        layout: fV,
        debug: RV,
        util: {
          time: gt,
          notime: st
        }
      }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);