/*! For license information please see welxxc.141.40ba6f3f.chunk.js.LICENSE.txt */
export const id = 141;
export const ids = [141];
export const modules = {
  7602: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Graph: () => Qb,
      debug: () => YM,
      default: () => fM,
      graphlib: () => pb,
      layout: () => CM,
      util: () => ZM,
      version: () => pw
    });
    var eb = Object.defineProperty,
      Hb = (bb, wb, Mb) => ((bb, wb, Mb) => wb in bb ? eb(bb, wb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mb
      }) : bb[wb] = Mb)(bb, "symbol" != typeof wb ? wb + "" : wb, Mb),
      pb = {};
    ((bb, wb) => {
      for (var Mb in wb) eb(bb, Mb, {
        get: wb[Mb],
        enumerable: !0
      })
    })(pb, {
      Graph: () => Qb,
      alg: () => Bb
    });
    var Vb = Object.defineProperty,
      gb = (bb, wb) => {
        for (var Mb in wb) Vb(bb, Mb, {
          get: wb[Mb],
          enumerable: !0
        })
      },
      lb = class {
        constructor(bb) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, bb && (this._isDirected = !("directed" in bb) || bb.directed, this._isMultigraph = "multigraph" in bb && bb.multigraph, this._isCompound = "compound" in bb && bb.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(bb) {
          return this._label = bb, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(bb) {
          return this._defaultNodeLabelFn = "function" != typeof bb ? () => bb : bb, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((bb => 0 === Object.keys(this._in[bb]).length))
        }
        sinks() {
          return this.nodes().filter((bb => 0 === Object.keys(this._out[bb]).length))
        }
        setNodes(bb, wb) {
          return bb.forEach((bb => {
            void 0 !== wb ? this.setNode(bb, wb) : this.setNode(bb)
          })), this
        }
        setNode(bb, wb) {
          return bb in this._nodes ? (arguments.length > 1 && (this._nodes[bb] = wb), this) : (this._nodes[bb] = arguments.length > 1 ? wb : this._defaultNodeLabelFn(bb), this._isCompound && (this._parent[bb] = "\0", this._children[bb] = {}, this._children["\0"][bb] = !0), this._in[bb] = {}, this._preds[bb] = {}, this._out[bb] = {}, this._sucs[bb] = {}, ++this._nodeCount, this)
        }
        node(bb) {
          return this._nodes[bb]
        }
        hasNode(bb) {
          return bb in this._nodes
        }
        removeNode(bb) {
          if (bb in this._nodes) {
            let wb = bb => this.removeEdge(this._edgeObjs[bb]);
            delete this._nodes[bb], this._isCompound && (this._removeFromParentsChildList(bb), delete this._parent[bb], this.children(bb).forEach((bb => {
              this.setParent(bb)
            })), delete this._children[bb]), Object.keys(this._in[bb]).forEach(wb), delete this._in[bb], delete this._preds[bb], Object.keys(this._out[bb]).forEach(wb), delete this._out[bb], delete this._sucs[bb], --this._nodeCount
          }
          return this
        }
        setParent(bb, wb) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === wb) wb = "\0";
          else {
            for (let Mb = wb += ""; void 0 !== Mb; Mb = this.parent(Mb))
              if (Mb === bb) throw new Error("Setting " + wb + " as parent of " + bb + " would create a cycle");
            this.setNode(wb)
          }
          return this.setNode(bb), this._removeFromParentsChildList(bb), this._parent[bb] = wb, this._children[wb][bb] = !0, this
        }
        parent(bb) {
          if (this._isCompound) {
            let wb = this._parent[bb];
            if ("\0" !== wb) return wb
          }
        }
        children() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let wb = this._children[bb];
            if (wb) return Object.keys(wb)
          } else {
            if ("\0" === bb) return this.nodes();
            if (this.hasNode(bb)) return []
          }
          return []
        }
        predecessors(bb) {
          let wb = this._preds[bb];
          if (wb) return Object.keys(wb)
        }
        successors(bb) {
          let wb = this._sucs[bb];
          if (wb) return Object.keys(wb)
        }
        neighbors(bb) {
          let wb = this.predecessors(bb);
          if (wb) {
            let Mb = new Set(wb),
              eb = this.successors(bb);
            if (eb)
              for (let bb of eb) Mb.add(bb);
            return Array.from(Mb.values())
          }
        }
        isLeaf(bb) {
          var wb;
          let Mb;
          return Mb = this.isDirected() ? this.successors(bb) : this.neighbors(bb), 0 === (null != (wb = null == Mb ? void 0 : Mb.length) ? wb : 0)
        }
        filterNodes(bb) {
          let wb = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          wb.setGraph(this.graph()), Object.entries(this._nodes).forEach((Mb => {
            let [eb, Hb] = Mb;
            bb(eb) && wb.setNode(eb, Hb)
          })), Object.values(this._edgeObjs).forEach((bb => {
            wb.hasNode(bb.v) && wb.hasNode(bb.w) && wb.setEdge(bb, this.edge(bb))
          }));
          let Mb = {},
            eb = bb => {
              let Hb = this.parent(bb);
              return !Hb || wb.hasNode(Hb) ? (Mb[bb] = Hb, Hb) : Hb in Mb ? Mb[Hb] : eb(Hb)
            };
          return this._isCompound && wb.nodes().forEach((bb => wb.setParent(bb, eb(bb)))), wb
        }
        setDefaultEdgeLabel(bb) {
          return this._defaultEdgeLabelFn = "function" != typeof bb ? () => bb : bb, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(bb, wb) {
          return bb.reduce(((bb, Mb) => (void 0 !== wb ? this.setEdge(bb, Mb, wb) : this.setEdge(bb, Mb), Mb))), this
        }
        setEdge(bb, wb, Mb, eb) {
          let Hb, pb, Vb, gb, lb = !1;
          "object" == typeof bb && null !== bb && "v" in bb ? (Hb = bb.v, pb = bb.w, Vb = bb.name, 2 === arguments.length && (gb = wb, lb = !0)) : (Hb = bb, pb = wb, Vb = eb, arguments.length > 2 && (gb = Mb, lb = !0)), Hb = "" + Hb, pb = "" + pb, void 0 !== Vb && (Vb = "" + Vb);
          let Ib = Ob(this._isDirected, Hb, pb, Vb);
          if (Ib in this._edgeLabels) return lb && (this._edgeLabels[Ib] = gb), this;
          if (void 0 !== Vb && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Hb), this.setNode(pb), this._edgeLabels[Ib] = lb ? gb : this._defaultEdgeLabelFn(Hb, pb, Vb);
          let Ub = function(bb, wb, Mb, eb) {
            let Hb = "" + wb,
              pb = "" + Mb;
            if (!bb && Hb > pb) {
              let bb = Hb;
              Hb = pb, pb = bb
            }
            let Vb = {
              v: Hb,
              w: pb
            };
            return eb && (Vb.name = eb), Vb
          }(this._isDirected, Hb, pb, Vb);
          return Hb = Ub.v, pb = Ub.w, Object.freeze(Ub), this._edgeObjs[Ib] = Ub, Lb(this._preds[pb], Hb), Lb(this._sucs[Hb], pb), this._in[pb][Ib] = Ub, this._out[Hb][Ib] = Ub, this._edgeCount++, this
        }
        edge(bb, wb, Mb) {
          let eb = 1 === arguments.length ? Ub(this._isDirected, bb) : Ob(this._isDirected, bb, wb, Mb);
          return this._edgeLabels[eb]
        }
        edgeAsObj(bb, wb, Mb) {
          let eb = 1 === arguments.length ? this.edge(bb) : this.edge(bb, wb, Mb);
          return "object" != typeof eb || null === eb ? {
            label: eb
          } : eb
        }
        hasEdge(bb, wb, Mb) {
          return (1 === arguments.length ? Ub(this._isDirected, bb) : Ob(this._isDirected, bb, wb, Mb)) in this._edgeLabels
        }
        removeEdge(bb, wb, Mb) {
          let eb = 1 === arguments.length ? Ub(this._isDirected, bb) : Ob(this._isDirected, bb, wb, Mb),
            Hb = this._edgeObjs[eb];
          if (Hb) {
            let bb = Hb.v,
              wb = Hb.w;
            delete this._edgeLabels[eb], delete this._edgeObjs[eb], Ib(this._preds[wb], bb), Ib(this._sucs[bb], wb), delete this._in[wb][eb], delete this._out[bb][eb], this._edgeCount--
          }
          return this
        }
        inEdges(bb, wb) {
          return this.isDirected() ? this.filterEdges(this._in[bb], bb, wb) : this.nodeEdges(bb, wb)
        }
        outEdges(bb, wb) {
          return this.isDirected() ? this.filterEdges(this._out[bb], bb, wb) : this.nodeEdges(bb, wb)
        }
        nodeEdges(bb, wb) {
          if (bb in this._nodes) return this.filterEdges({
            ...this._in[bb],
            ...this._out[bb]
          }, bb, wb)
        }
        _removeFromParentsChildList(bb) {
          delete this._children[this._parent[bb]][bb]
        }
        filterEdges(bb, wb, Mb) {
          if (!bb) return;
          let eb = Object.values(bb);
          return Mb ? eb.filter((bb => bb.v === wb && bb.w === Mb || bb.v === Mb && bb.w === wb)) : eb
        }
      };

    function Lb(bb, wb) {
      bb[wb] ? bb[wb]++ : bb[wb] = 1
    }

    function Ib(bb, wb) {
      void 0 !== bb[wb] && !--bb[wb] && delete bb[wb]
    }

    function Ob(bb, wb, Mb, eb) {
      let Hb = "" + wb,
        pb = "" + Mb;
      if (!bb && Hb > pb) {
        let bb = Hb;
        Hb = pb, pb = bb
      }
      return Hb + "\x01" + pb + "\x01" + (void 0 === eb ? "\0" : eb)
    }

    function Ub(bb, wb) {
      return Ob(bb, wb.v, wb.w, wb.name)
    }

    function tb(bb) {
      let wb = {
          options: {
            directed: bb.isDirected(),
            multigraph: bb.isMultigraph(),
            compound: bb.isCompound()
          },
          nodes: Cb(bb),
          edges: Eb(bb)
        },
        Mb = bb.graph();
      return void 0 !== Mb && (wb.value = structuredClone(Mb)), wb
    }

    function Cb(bb) {
      return bb.nodes().map((wb => {
        let Mb = bb.node(wb),
          eb = bb.parent(wb),
          Hb = {
            v: wb
          };
        return void 0 !== Mb && (Hb.value = Mb), void 0 !== eb && (Hb.parent = eb), Hb
      }))
    }

    function Eb(bb) {
      return bb.edges().map((wb => {
        let Mb = bb.edge(wb),
          eb = {
            v: wb.v,
            w: wb.w
          };
        return void 0 !== wb.name && (eb.name = wb.name), void 0 !== Mb && (eb.value = Mb), eb
      }))
    }

    function Fb(bb) {
      let wb = new lb(bb.options);
      return void 0 !== bb.value && wb.setGraph(bb.value), bb.nodes.forEach((bb => {
        wb.setNode(bb.v, bb.value), bb.parent && wb.setParent(bb.v, bb.parent)
      })), bb.edges.forEach((bb => {
        wb.setEdge({
          v: bb.v,
          w: bb.w,
          name: bb.name
        }, bb.value)
      })), wb
    }
    gb({}, {
      read: () => Fb,
      write: () => tb
    });
    var Bb = {};
    gb(Bb, {
      CycleException: () => cb,
      bellmanFord: () => mb,
      components: () => hb,
      dijkstra: () => xb,
      dijkstraAll: () => jb,
      findCycles: () => rb,
      floydWarshall: () => Db,
      isAcyclic: () => Zb,
      postorder: () => Jb,
      preorder: () => Sb,
      prim: () => Nb,
      shortestPaths: () => vb,
      tarjan: () => Kb,
      topsort: () => Yb
    });
    var sb = () => 1;

    function mb(bb, wb, Mb, eb) {
      return function(bb, wb, Mb, eb) {
        let Hb, pb = {},
          Vb = 0,
          gb = bb.nodes(),
          lb = function(bb) {
            let wb = pb[bb.v],
              eb = pb[bb.w];
            if (!wb || !eb) return;
            let Vb = Mb(bb);
            wb.distance + Vb < eb.distance && (pb[bb.w] = {
              distance: wb.distance + Vb,
              predecessor: bb.v
            }, Hb = !0)
          },
          Lb = function() {
            gb.forEach((function(bb) {
              eb(bb).forEach((function(wb) {
                let Mb = wb.v === bb ? wb.v : wb.w,
                  eb = Mb === wb.v ? wb.w : wb.v;
                lb({
                  v: Mb,
                  w: eb
                })
              }))
            }))
          };
        gb.forEach((function(bb) {
          let Mb = bb === wb ? 0 : Number.POSITIVE_INFINITY;
          pb[bb] = {
            distance: Mb,
            predecessor: ""
          }
        }));
        let Ib = gb.length;
        for (let Ob = 1; Ob < Ib && (Hb = !1, Vb++, Lb(), Hb); Ob++);
        if (Vb === Ib - 1 && (Hb = !1, Lb(), Hb)) throw new Error("The graph contains a negative weight cycle");
        return pb
      }(bb, String(wb), Mb || sb, eb || function(wb) {
        var Mb;
        return null != (Mb = bb.outEdges(wb)) ? Mb : []
      })
    }

    function hb(bb) {
      let wb, Mb = {},
        eb = [];

      function Hb(eb) {
        var pb, Vb;
        eb in Mb || (Mb[eb] = !0, wb.push(eb), null == (pb = bb.successors(eb)) || pb.forEach(Hb), null == (Vb = bb.predecessors(eb)) || Vb.forEach(Hb))
      }
      return bb.nodes().forEach((function(bb) {
        wb = [], Hb(bb), wb.length && eb.push(wb)
      })), eb
    }
    var zb = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((bb => bb.key))
        }
        has(bb) {
          return bb in this._keyIndices
        }
        priority(bb) {
          let wb = this._keyIndices[bb];
          if (void 0 !== wb) return this._arr[wb].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(bb, wb) {
          let Mb = this._keyIndices,
            eb = String(bb);
          if (!(eb in Mb)) {
            let bb = this._arr,
              Hb = bb.length;
            return Mb[eb] = Hb, bb.push({
              key: eb,
              priority: wb
            }), this._decrease(Hb), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let bb = this._arr.pop();
          return delete this._keyIndices[bb.key], this._heapify(0), bb.key
        }
        decrease(bb, wb) {
          let Mb = this._keyIndices[bb];
          if (void 0 === Mb) throw new Error(`Key not found: ${bb}`);
          let eb = this._arr[Mb].priority;
          if (wb > eb) throw new Error(`New priority is greater than current priority. Key: ${bb} Old: ${eb} New: ${wb}`);
          this._arr[Mb].priority = wb, this._decrease(Mb)
        }
        _heapify(bb) {
          let wb = this._arr,
            Mb = 2 * bb,
            eb = Mb + 1,
            Hb = bb;
          Mb < wb.length && (Hb = wb[Mb].priority < wb[Hb].priority ? Mb : Hb, eb < wb.length && (Hb = wb[eb].priority < wb[Hb].priority ? eb : Hb), Hb !== bb && (this._swap(bb, Hb), this._heapify(Hb)))
        }
        _decrease(bb) {
          let wb, Mb = this._arr,
            eb = Mb[bb].priority;
          for (; 0 !== bb && (wb = bb >> 1, !(Mb[wb].priority < eb));) this._swap(bb, wb), bb = wb
        }
        _swap(bb, wb) {
          let Mb = this._arr,
            eb = this._keyIndices,
            Hb = Mb[bb],
            pb = Mb[wb];
          Mb[bb] = pb, Mb[wb] = Hb, eb[pb.key] = bb, eb[Hb.key] = wb
        }
      },
      Xb = () => 1;

    function xb(bb, wb, Mb, eb) {
      return function(bb, wb, Mb, eb) {
        let Hb, pb, Vb = {},
          gb = new zb,
          lb = function(bb) {
            let wb = bb.v !== Hb ? bb.v : bb.w,
              eb = Vb[wb];
            if (!eb) return;
            let lb = Mb(bb),
              Lb = pb.distance + lb;
            if (lb < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + bb + " Weight: " + lb);
            Lb < eb.distance && (eb.distance = Lb, eb.predecessor = Hb, gb.decrease(wb, Lb))
          };
        for (bb.nodes().forEach((function(bb) {
            let Mb = bb === wb ? 0 : Number.POSITIVE_INFINITY;
            Vb[bb] = {
              distance: Mb,
              predecessor: ""
            }, gb.add(bb, Mb)
          })); gb.size() > 0;) {
          Hb = gb.removeMin();
          let bb = Vb[Hb];
          if (!bb || bb.distance === Number.POSITIVE_INFINITY) break;
          pb = bb, eb(Hb).forEach(lb)
        }
        return Vb
      }(bb, String(wb), Mb || Xb, eb || function(wb) {
        var Mb;
        return null != (Mb = bb.outEdges(wb)) ? Mb : []
      })
    }

    function jb(bb, wb, Mb) {
      return bb.nodes().reduce((function(eb, Hb) {
        return eb[Hb] = xb(bb, Hb, wb, Mb), eb
      }), {})
    }

    function Kb(bb) {
      let wb = 0,
        Mb = [],
        eb = {},
        Hb = [];

      function pb(Vb) {
        var gb;
        let lb = eb[Vb] = {
          onStack: !0,
          lowlink: wb,
          index: wb++
        };
        if (Mb.push(Vb), null == (gb = bb.successors(Vb)) || gb.forEach((function(bb) {
            if (bb in eb) {
              let wb = eb[bb];
              null != wb && wb.onStack && (lb.lowlink = Math.min(lb.lowlink, wb.index))
            } else {
              pb(bb);
              let wb = eb[bb];
              wb && (lb.lowlink = Math.min(lb.lowlink, wb.lowlink))
            }
          })), lb.lowlink === lb.index) {
          let bb, wb = [];
          do {
            bb = Mb.pop();
            let Hb = eb[bb];
            Hb && (Hb.onStack = !1), wb.push(bb)
          } while (Vb !== bb);
          Hb.push(wb)
        }
      }
      return bb.nodes().forEach((function(bb) {
        bb in eb || pb(bb)
      })), Hb
    }

    function rb(bb) {
      return Kb(bb).filter((function(wb) {
        var Mb;
        let eb = wb[0];
        return !!eb && (wb.length > 1 || 1 === wb.length && (null != (Mb = bb.outEdges(eb, eb)) ? Mb : []).length > 0)
      }))
    }
    var Rb = () => 1;

    function Db(bb, wb, Mb) {
      return function(bb, wb, Mb) {
        let eb = {},
          Hb = bb.nodes();
        return Hb.forEach((function(bb) {
          let pb = {};
          eb[bb] = pb, pb[bb] = {
            distance: 0,
            predecessor: ""
          }, Hb.forEach((function(wb) {
            bb !== wb && (pb[wb] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Mb(bb).forEach((function(Mb) {
            let eb = Mb.v === bb ? Mb.w : Mb.v,
              Hb = wb(Mb);
            pb[eb] = {
              distance: Hb,
              predecessor: bb
            }
          }))
        })), Hb.forEach((function(bb) {
          let wb = eb[bb];
          wb && Hb.forEach((function(Mb) {
            let pb = eb[Mb];
            pb && Hb.forEach((function(Mb) {
              let eb = pb[bb],
                Hb = wb[Mb],
                Vb = pb[Mb];
              if (eb && Hb && Vb) {
                let bb = eb.distance + Hb.distance;
                bb < Vb.distance && (Vb.distance = bb, Vb.predecessor = Hb.predecessor)
              }
            }))
          }))
        })), eb
      }(bb, wb || Rb, Mb || function(wb) {
        var Mb;
        return null != (Mb = bb.outEdges(wb)) ? Mb : []
      })
    }
    var cb = class extends Error {
      constructor(bb) {
        super(bb), this.name = "CycleException"
      }
    };

    function Yb(bb) {
      let wb = {},
        Mb = {},
        eb = [];
      if (bb.sinks().forEach((function Hb(pb) {
          var Vb;
          if (pb in Mb) throw new cb;
          pb in wb || (Mb[pb] = !0, wb[pb] = !0, null == (Vb = bb.predecessors(pb)) || Vb.forEach(Hb), delete Mb[pb], eb.push(pb))
        })), Object.keys(wb).length !== bb.nodeCount()) throw new cb;
      return eb
    }

    function Zb(bb) {
      try {
        Yb(bb)
      } catch (wb) {
        if (wb instanceof cb) return !1;
        throw wb
      }
      return !0
    }

    function fb(bb, wb, Mb, eb, Hb) {
      Array.isArray(wb) || (wb = [wb]);
      let pb = wb => {
          var Mb;
          return null != (Mb = bb.isDirected() ? bb.successors(wb) : bb.neighbors(wb)) ? Mb : []
        },
        Vb = {};
      return wb.forEach((function(wb) {
        if (!bb.hasNode(wb)) throw new Error("Graph does not have node: " + wb);
        Hb = Ab(bb, wb, "post" === Mb, Vb, pb, eb, Hb)
      })), Hb
    }

    function Ab(bb, wb, Mb, eb, Hb, pb, Vb) {
      return wb in eb || (eb[wb] = !0, Mb || (Vb = pb(Vb, wb)), Hb(wb).forEach((function(wb) {
        Vb = Ab(bb, wb, Mb, eb, Hb, pb, Vb)
      })), Mb && (Vb = pb(Vb, wb))), Vb
    }

    function Wb(bb, wb, Mb) {
      return fb(bb, wb, Mb, (function(bb, wb) {
        return bb.push(wb), bb
      }), [])
    }

    function Jb(bb, wb) {
      return Wb(bb, wb, "post")
    }

    function Sb(bb, wb) {
      return Wb(bb, wb, "pre")
    }

    function Nb(bb, wb) {
      var Mb;
      let eb, Hb = new lb,
        pb = {},
        Vb = new zb;

      function gb(bb) {
        let Mb = bb.v === eb ? bb.w : bb.v,
          Hb = Vb.priority(Mb);
        if (void 0 !== Hb) {
          let gb = wb(bb);
          gb < Hb && (pb[Mb] = eb, Vb.decrease(Mb, gb))
        }
      }
      if (0 === bb.nodeCount()) return Hb;
      bb.nodes().forEach((function(bb) {
        Vb.add(bb, Number.POSITIVE_INFINITY), Hb.setNode(bb)
      }));
      let Lb = bb.nodes()[0];
      void 0 !== Lb && Vb.decrease(Lb, 0);
      let Ib = !1;
      for (; Vb.size() > 0;) {
        if (eb = Vb.removeMin(), eb in pb) Hb.setEdge(eb, pb[eb]);
        else {
          if (Ib) throw new Error("Input graph is not connected: " + bb);
          Ib = !0
        }
        null == (Mb = bb.nodeEdges(eb)) || Mb.forEach(gb)
      }
      return Hb
    }

    function vb(bb, wb, Mb, eb) {
      return function(bb, wb, Mb, eb) {
        if (void 0 === Mb) return xb(bb, wb, Mb, eb);
        let Hb = !1,
          pb = bb.nodes();
        for (let Vb = 0; Vb < pb.length; Vb++) {
          let gb = pb[Vb];
          if (void 0 === gb) continue;
          let lb = eb(gb);
          for (let bb = 0; bb < lb.length; bb++) {
            let wb = lb[bb];
            if (!wb) continue;
            let eb = wb.v === gb ? wb.v : wb.w;
            Mb({
              v: eb,
              w: eb === wb.v ? wb.w : wb.v
            }) < 0 && (Hb = !0)
          }
          if (Hb) return mb(bb, wb, Mb, eb)
        }
        return xb(bb, wb, Mb, eb)
      }(bb, wb, Mb, null != eb ? eb : wb => {
        var Mb;
        return null != (Mb = bb.outEdges(wb)) ? Mb : []
      })
    }
    var Qb = lb;

    function Gb(bb, wb, Mb, eb) {
      let Hb = eb;
      for (; bb.hasNode(Hb);) Hb = kb(eb);
      return Mb.dummy = wb, bb.setNode(Hb, Mb), Hb
    }

    function qb(bb) {
      let wb = new Qb({
        multigraph: bb.isMultigraph()
      }).setGraph(bb.graph());
      return bb.nodes().forEach((Mb => {
        bb.children(Mb).length || wb.setNode(Mb, bb.node(Mb))
      })), bb.edges().forEach((Mb => {
        wb.setEdge(Mb, bb.edge(Mb))
      })), wb
    }

    function ab(bb, wb) {
      let Mb, eb, Hb = bb.x,
        pb = bb.y,
        Vb = wb.x - Hb,
        gb = wb.y - pb,
        lb = bb.width / 2,
        Lb = bb.height / 2;
      if (!Vb && !gb) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(gb) * lb > Math.abs(Vb) * Lb ? (gb < 0 && (Lb = -Lb), Mb = Lb * Vb / gb, eb = Lb) : (Vb < 0 && (lb = -lb), Mb = lb, eb = lb * gb / Vb), {
        x: Hb + Mb,
        y: pb + eb
      }
    }

    function ib(bb) {
      let wb = bw(nb(bb) + 1).map((() => []));
      return bb.nodes().forEach((Mb => {
        let eb = bb.node(Mb),
          Hb = eb.rank;
        void 0 !== Hb && (wb[Hb] || (wb[Hb] = []), wb[Hb][eb.order] = Mb)
      })), wb
    }

    function ub(bb, wb, Mb, eb) {
      let Hb = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Hb.rank = Mb, Hb.order = eb), Gb(bb, "border", Hb, wb)
    }
    var db = 65535;

    function Pb(bb, wb) {
      if (wb.length > db) {
        let Mb = function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : db,
            Mb = [];
          for (let eb = 0; eb < bb.length; eb += wb) {
            let Hb = bb.slice(eb, eb + wb);
            Mb.push(Hb)
          }
          return Mb
        }(wb);
        return bb(...Mb.map((wb => bb(...wb))))
      }
      return bb(...wb)
    }

    function nb(bb) {
      let wb = bb.nodes().map((wb => {
        let Mb = bb.node(wb).rank;
        return void 0 === Mb ? Number.MIN_VALUE : Mb
      }));
      return Pb(Math.max, wb)
    }

    function yb(bb, wb) {
      let Mb = Date.now();
      try {
        return wb()
      } finally {
        console.log(bb + " time: " + (Date.now() - Mb) + "ms")
      }
    }

    function ob(bb, wb) {
      return wb()
    }
    var Tb = 0;

    function kb(bb) {
      return bb + "" + ++Tb
    }

    function bw(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == wb && (wb = bb, bb = 0);
      let eb = bb => bb < wb;
      Mb < 0 && (eb = bb => wb < bb);
      let Hb = [];
      for (let pb = bb; eb(pb); pb += Mb) Hb.push(pb);
      return Hb
    }

    function ww(bb, wb) {
      let Mb = {};
      for (let eb of wb) void 0 !== bb[eb] && (Mb[eb] = bb[eb]);
      return Mb
    }

    function Mw(bb, wb) {
      let Mb;
      return Mb = "string" == typeof wb ? bb => bb[wb] : wb, Object.entries(bb).reduce(((bb, wb) => {
        let [eb, Hb] = wb;
        return bb[eb] = Mb(Hb, eb), bb
      }), {})
    }
    var ew = "\0";

    function Hw(bb, wb, Mb) {
      var eb, Hb, pb, Vb, gb, lb;
      if (!(bb && wb && Mb && "edge" === wb.dummy && "edge" === Mb.dummy && wb.edgeObj && Mb.edgeObj && bb[wb.edgeObj.v] && bb[Mb.edgeObj.v] && bb[wb.edgeObj.w] && bb[Mb.edgeObj.w])) return 0;
      let Lb = !0;
      wb.edgeObj.w === Mb.edgeObj.w && (Lb = !1);
      let Ib = Lb ? null != (Hb = null == (eb = bb[wb.edgeObj.v]) ? void 0 : eb.rank) ? Hb : NaN : null != (Vb = null == (pb = bb[wb.edgeObj.w]) ? void 0 : pb.rank) ? Vb : NaN,
        Ob = Object.entries(bb).find((bb => {
          var Mb, eb;
          return (null == (Mb = bb[1].edgeObj) ? void 0 : Mb.v) === wb.edgeObj.v && (null == (eb = bb[1].edgeObj) ? void 0 : eb.w) === wb.edgeObj.w && bb[1].rank === Ib
        })),
        Ub = Object.entries(bb).find((bb => {
          var wb, eb;
          return (null == (wb = bb[1].edgeObj) ? void 0 : wb.v) === Mb.edgeObj.v && (null == (eb = bb[1].edgeObj) ? void 0 : eb.w) === Mb.edgeObj.w && bb[1].rank === Ib
        }));
      if (!Ob || !Ub) return 0;
      let tb = null != (gb = Ob[1].order) ? gb : NaN,
        Cb = null != (lb = Ub[1].order) ? lb : NaN;
      return isNaN(tb - Cb) ? 0 : tb - Cb
    }
    var pw = "3.1.1";

    function Vw(bb) {
      bb._prev._next = bb._next, bb._next._prev = bb._prev, delete bb._next, delete bb._prev
    }

    function gw(bb, wb) {
      if ("_next" !== bb && "_prev" !== bb) return wb
    }
    var lw = class {
        constructor() {
          Hb(this, "_sentinel");
          let bb = {};
          bb._next = bb._prev = bb, this._sentinel = bb
        }
        dequeue() {
          let bb = this._sentinel,
            wb = bb._prev;
          if (wb !== bb) return Vw(wb), wb
        }
        enqueue(bb) {
          let wb = this._sentinel;
          bb._prev && bb._next && Vw(bb), bb._next = wb._next, wb._next._prev = bb, wb._next = bb, bb._prev = wb
        }
        toString() {
          let bb = [],
            wb = this._sentinel,
            Mb = wb._prev;
          for (; Mb !== wb;) bb.push(JSON.stringify(Mb, gw)), Mb = Mb._prev;
          return "[" + bb.join(", ") + "]"
        }
      },
      Lw = () => 1;

    function Iw(bb, wb) {
      if (bb.nodeCount() <= 1) return [];
      let Mb = function(bb, wb) {
        let Mb = new Qb,
          eb = 0,
          Hb = 0;
        bb.nodes().forEach((bb => {
          Mb.setNode(bb, {
            v: bb,
            in: 0,
            out: 0
          })
        })), bb.edges().forEach((bb => {
          let pb = Mb.edge(bb.v, bb.w) || 0,
            Vb = wb(bb),
            gb = pb + Vb;
          Mb.setEdge(bb.v, bb.w, gb);
          let lb = Mb.node(bb.v),
            Lb = Mb.node(bb.w);
          Hb = Math.max(Hb, lb.out += Vb), eb = Math.max(eb, Lb.in += Vb)
        }));
        let pb = function(bb) {
            let wb = [];
            for (let Mb = 0; Mb < bb; Mb++) wb.push(Mb);
            return wb
          }(Hb + eb + 3).map((() => new lw)),
          Vb = eb + 1;
        return Mb.nodes().forEach((bb => {
          Uw(pb, Vb, Mb.node(bb))
        })), {
          graph: Mb,
          buckets: pb,
          zeroIdx: Vb
        }
      }(bb, wb || Lw);
      return function(bb, wb, Mb) {
        var eb;
        let Hb, pb = [],
          Vb = wb[wb.length - 1],
          gb = wb[0];
        for (; bb.nodeCount();) {
          for (; Hb = gb.dequeue();) Ow(bb, wb, Mb, Hb);
          for (; Hb = Vb.dequeue();) Ow(bb, wb, Mb, Hb);
          if (bb.nodeCount())
            for (let Vb = wb.length - 2; Vb > 0; --Vb)
              if (Hb = null == (eb = wb[Vb]) ? void 0 : eb.dequeue(), Hb) {
                pb = pb.concat(Ow(bb, wb, Mb, Hb, !0) || []);
                break
              }
        }
        return pb
      }(Mb.graph, Mb.buckets, Mb.zeroIdx).flatMap((wb => bb.outEdges(wb.v, wb.w) || []))
    }

    function Ow(bb, wb, Mb, eb, Hb) {
      let pb = [],
        Vb = Hb ? pb : void 0;
      return (bb.inEdges(eb.v) || []).forEach((eb => {
        let Vb = bb.edge(eb),
          gb = bb.node(eb.v);
        Hb && pb.push({
          v: eb.v,
          w: eb.w
        }), gb.out -= Vb, Uw(wb, Mb, gb)
      })), (bb.outEdges(eb.v) || []).forEach((eb => {
        let Hb = bb.edge(eb),
          pb = eb.w,
          Vb = bb.node(pb);
        Vb.in -= Hb, Uw(wb, Mb, Vb)
      })), bb.removeNode(eb.v), Vb
    }

    function Uw(bb, wb, Mb) {
      var eb, Hb, pb;
      Mb.out ? Mb.in ? null == (pb = bb[Mb.out - Mb.in + wb]) || pb.enqueue(Mb) : null == (Hb = bb[bb.length - 1]) || Hb.enqueue(Mb) : null == (eb = bb[0]) || eb.enqueue(Mb)
    }

    function tw(bb, wb) {
      var Mb;
      ("greedy" === bb.graph().acyclicer ? Iw(bb, (Mb = bb, bb => Mb.edge(bb).weight)) : function(bb, wb) {
        let Mb = [],
          eb = {},
          Hb = {};

        function pb(wb) {
          Object.hasOwn(Hb, wb) || (Hb[wb] = !0, eb[wb] = !0, bb.outEdges(wb).forEach((bb => {
            Object.hasOwn(eb, bb.w) ? Mb.push(bb) : pb(bb.w)
          })), delete eb[wb])
        }

        function Vb(pb) {
          var gb;
          Object.hasOwn(Hb, pb) || (Hb[pb] = !0, eb[pb] = !0, null == (gb = bb.outEdges(pb)) || gb.forEach((Hb => {
            var gb, lb;
            Object.hasOwn(eb, Hb.w) || (null == (gb = wb.node(pb)) ? void 0 : gb.rank) > (null == (lb = wb.node(Hb.w)) ? void 0 : lb.rank) && function(bb, wb, Mb) {
              let eb = new Set;

              function Hb(wb) {
                var pb;
                if (bb.sources().includes(wb)) return !0;
                eb.add(wb);
                for (let Vb of null != (pb = bb.inEdges(wb)) ? pb : [])
                  if ((Vb.v !== Mb.v || Vb.w !== Mb.w) && !eb.has(Vb.v) && Hb(Vb.v)) return !0;
                return !1
              }
              return Hb(wb)
            }(bb, Hb.w, Hb) ? Mb.push(Hb) : Vb(Hb.w)
          })), delete eb[pb])
        }
        let gb = pb;
        return wb && "function" == typeof wb.node && (gb = Vb), bb.sources().forEach(gb), bb.nodes().forEach(gb), Mb
      }(bb, null != wb ? wb : null)).forEach((wb => {
        let Mb = bb.edge(wb);
        bb.removeEdge(wb), Mb.forwardName = wb.name, Mb.reversed = !0, bb.setEdge(wb.w, wb.v, Mb, kb("rev"))
      }))
    }

    function Cw(bb) {
      bb.graph().dummyChains = [], bb.edges().forEach((wb => function(bb, wb) {
        let Mb, eb, Hb, pb = wb.v,
          Vb = bb.node(pb).rank,
          gb = wb.w,
          lb = bb.node(gb).rank,
          Lb = wb.name,
          Ib = bb.edge(wb),
          Ob = Ib.labelRank;
        if (lb === Vb + 1) return;
        for (bb.removeEdge(wb), Hb = 0, ++Vb; Vb < lb; ++Hb, ++Vb) Ib.points = [], eb = {
          width: 0,
          height: 0,
          edgeLabel: Ib,
          edgeObj: wb,
          rank: Vb
        }, Mb = Gb(bb, "edge", eb, "_d"), Vb === Ob && (eb.width = Ib.width, eb.height = Ib.height, eb.dummy = "edge-label", eb.labelpos = Ib.labelpos), bb.setEdge(pb, Mb, {
          weight: Ib.weight
        }, Lb), 0 === Hb && bb.graph().dummyChains.push(Mb), pb = Mb;
        bb.setEdge(pb, gb, {
          weight: Ib.weight
        }, Lb)
      }(bb, wb)))
    }

    function Ew(bb) {
      let wb = {};
      bb.sources().forEach((function Mb(eb) {
        let Hb = bb.node(eb);
        if (Object.hasOwn(wb, eb)) return Hb.rank;
        wb[eb] = !0;
        let pb = bb.outEdges(eb),
          Vb = pb ? pb.map((wb => null == wb ? Number.POSITIVE_INFINITY : Mb(wb.w) - bb.edge(wb).minlen)) : [],
          gb = Pb(Math.min, Vb);
        return gb === Number.POSITIVE_INFINITY && (gb = 0), Hb.rank = gb
      }))
    }

    function Fw(bb, wb) {
      return bb.node(wb.w).rank - bb.node(wb.v).rank - bb.edge(wb).minlen
    }
    var Bw = function(bb) {
      let wb = new Qb({
          directed: !1
        }),
        Mb = bb.nodes();
      if (0 === Mb.length) throw new Error("Graph must have at least one node");
      let eb, Hb, pb = Mb[0],
        Vb = bb.nodeCount();
      for (wb.setNode(pb, {}); sw(wb, bb) < Vb && (eb = mw(wb, bb), eb);) Hb = wb.hasNode(eb.v) ? Fw(bb, eb) : -Fw(bb, eb), hw(wb, bb, Hb);
      return wb
    };

    function sw(bb, wb) {
      return bb.nodes().forEach((function Mb(eb) {
        let Hb = wb.nodeEdges(eb);
        Hb && Hb.forEach((Hb => {
          let pb = Hb.v,
            Vb = eb === pb ? Hb.w : pb;
          !bb.hasNode(Vb) && !Fw(wb, Hb) && (bb.setNode(Vb, {}), bb.setEdge(eb, Vb, {}), Mb(Vb))
        }))
      })), bb.nodeCount()
    }

    function mw(bb, wb) {
      return wb.edges().reduce(((Mb, eb) => {
        let Hb = Number.POSITIVE_INFINITY;
        return bb.hasNode(eb.v) !== bb.hasNode(eb.w) && (Hb = Fw(wb, eb)), Hb < Mb[0] ? [Hb, eb] : Mb
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function hw(bb, wb, Mb) {
      bb.nodes().forEach((bb => wb.node(bb).rank += Mb))
    }
    var {
      preorder: zw,
      postorder: Xw
    } = Bb, xw = jw;

    function jw(bb) {
      bb = function(bb) {
        let wb = (new Qb).setGraph(bb.graph());
        return bb.nodes().forEach((Mb => wb.setNode(Mb, bb.node(Mb)))), bb.edges().forEach((Mb => {
          let eb = wb.edge(Mb.v, Mb.w) || {
              weight: 0,
              minlen: 1
            },
            Hb = bb.edge(Mb);
          wb.setEdge(Mb.v, Mb.w, {
            weight: eb.weight + Hb.weight,
            minlen: Math.max(eb.minlen, Hb.minlen)
          })
        })), wb
      }(bb), Ew(bb);
      let wb, Mb, eb = Bw(bb);
      for (Rw(eb), Kw(eb, bb); wb = Yw(eb);) Mb = Zw(eb, bb, wb), fw(eb, bb, wb, Mb)
    }

    function Kw(bb, wb) {
      let Mb = Xw(bb, bb.nodes());
      Mb = Mb.slice(0, Mb.length - 1), Mb.forEach((Mb => function(bb, wb, Mb) {
        let eb = bb.node(Mb).parent,
          Hb = bb.edge(Mb, eb);
        Hb.cutvalue = rw(bb, wb, Mb)
      }(bb, wb, Mb)))
    }

    function rw(bb, wb, Mb) {
      let eb = bb.node(Mb).parent,
        Hb = !0,
        pb = wb.edge(Mb, eb),
        Vb = 0;
      pb || (Hb = !1, pb = wb.edge(eb, Mb)), Vb = pb.weight;
      let gb = wb.nodeEdges(Mb);
      return gb && gb.forEach((pb => {
        let gb = pb.v === Mb,
          lb = gb ? pb.w : pb.v;
        if (lb !== eb) {
          let eb = gb === Hb,
            Lb = wb.edge(pb).weight;
          if (Vb += eb ? Lb : -Lb, function(bb, wb, Mb) {
              return bb.hasEdge(wb, Mb)
            }(bb, Mb, lb)) {
            let wb = bb.edge(Mb, lb).cutvalue;
            Vb += eb ? -wb : wb
          }
        }
      })), Vb
    }

    function Rw(bb, wb) {
      arguments.length < 2 && (wb = bb.nodes()[0]), Dw(bb, {}, 1, wb)
    }

    function Dw(bb, wb, Mb, eb, Hb) {
      let pb = Mb,
        Vb = bb.node(eb);
      wb[eb] = !0;
      let gb = bb.neighbors(eb);
      return gb && gb.forEach((Hb => {
        Object.hasOwn(wb, Hb) || (Mb = Dw(bb, wb, Mb, Hb, eb))
      })), Vb.low = pb, Vb.lim = Mb++, Hb ? Vb.parent = Hb : delete Vb.parent, Mb
    }

    function Yw(bb) {
      return bb.edges().find((wb => bb.edge(wb).cutvalue < 0))
    }

    function Zw(bb, wb, Mb) {
      let eb = Mb.v,
        Hb = Mb.w;
      wb.hasEdge(eb, Hb) || (eb = Mb.w, Hb = Mb.v);
      let pb = bb.node(eb),
        Vb = bb.node(Hb),
        gb = pb,
        lb = !1;
      return pb.lim > Vb.lim && (gb = Vb, lb = !0), wb.edges().filter((wb => lb === Aw(bb, bb.node(wb.v), gb) && lb !== Aw(bb, bb.node(wb.w), gb))).reduce(((bb, Mb) => Fw(wb, Mb) < Fw(wb, bb) ? Mb : bb))
    }

    function fw(bb, wb, Mb, eb) {
      let Hb = Mb.v,
        pb = Mb.w;
      bb.removeEdge(Hb, pb), bb.setEdge(eb.v, eb.w, {}), Rw(bb), Kw(bb, wb),
        function(bb, wb) {
          let Mb = bb.nodes().find((wb => !bb.node(wb).parent));
          if (!Mb) return;
          let eb = zw(bb, [Mb]);
          eb = eb.slice(1), eb.forEach((Mb => {
            let eb = bb.node(Mb).parent,
              Hb = wb.edge(Mb, eb),
              pb = !1;
            Hb || (Hb = wb.edge(eb, Mb), pb = !0), wb.node(Mb).rank = wb.node(eb).rank + (pb ? Hb.minlen : -Hb.minlen)
          }))
        }(bb, wb)
    }

    function Aw(bb, wb, Mb) {
      return Mb.low <= wb.lim && wb.lim <= Mb.lim
    }
    jw.initLowLimValues = Rw, jw.initCutValues = Kw, jw.calcCutValue = rw, jw.leaveEdge = Yw, jw.enterEdge = Zw, jw.exchangeEdges = fw;
    var Ww = function(bb) {
      let wb = bb.graph().ranker;
      if ("function" == typeof wb) return wb(bb);
      switch (wb) {
        case "network-simplex":
        default:
          Sw(bb);
          break;
        case "tight-tree":
          ! function(bb) {
            Ew(bb), Bw(bb)
          }(bb);
          break;
        case "longest-path":
          Jw(bb);
        case "none":
      }
    };
    var Jw = Ew;

    function Sw(bb) {
      xw(bb)
    }
    var Nw = function(bb) {
      let wb = function(bb) {
          let wb = {},
            Mb = 0;

          function eb(Hb) {
            let pb = Mb;
            bb.children(Hb).forEach(eb), wb[Hb] = {
              low: pb,
              lim: Mb++
            }
          }
          return bb.children(ew).forEach(eb), wb
        }(bb),
        Mb = bb.graph();
      if (!Array.isArray(Mb.dummyChains)) return;
      Mb.dummyChains.forEach((Mb => {
        let eb = bb.node(Mb),
          Hb = eb.edgeObj,
          pb = function(bb, wb, Mb, eb) {
            let Hb, pb = [],
              Vb = [],
              gb = Math.min(wb[Mb].low, wb[eb].low),
              lb = Math.max(wb[Mb].lim, wb[eb].lim);
            Hb = Mb;
            do {
              Hb = bb.parent(Hb), pb.push(Hb)
            } while (Hb && (wb[Hb].low > gb || lb > wb[Hb].lim));
            let Lb = Hb,
              Ib = eb;
            for (;
              (Ib = bb.parent(Ib)) !== Lb;) Vb.push(Ib);
            return {
              path: pb.concat(Vb.reverse()),
              lca: Lb
            }
          }(bb, wb, Hb.v, Hb.w),
          Vb = pb.path,
          gb = pb.lca,
          lb = 0,
          Lb = Vb[lb],
          Ib = !0;
        for (; Mb !== Hb.w;) {
          if (eb = bb.node(Mb), Ib) {
            for (;
              (Lb = Vb[lb]) !== gb && bb.node(Lb).maxRank < eb.rank;) lb++;
            Lb === gb && (Ib = !1)
          }
          if (!Ib) {
            for (; lb < Vb.length - 1 && bb.node(Vb[lb + 1]).minRank <= eb.rank;) lb++;
            Lb = Vb[lb]
          }
          void 0 !== Lb && bb.setParent(Mb, Lb), Mb = bb.successors(Mb)[0]
        }
      }))
    };

    function vw(bb) {
      let wb = Gb(bb, "root", {}, "_root"),
        Mb = function(bb) {
          let wb = {};

          function Mb(eb, Hb) {
            let pb = bb.children(eb);
            pb && pb.length && pb.forEach((bb => Mb(bb, Hb + 1))), wb[eb] = Hb
          }
          return bb.children(ew).forEach((bb => Mb(bb, 1))), wb
        }(bb),
        eb = Object.values(Mb),
        Hb = Pb(Math.max, eb) - 1,
        pb = 2 * Hb + 1;
      bb.graph().nestingRoot = wb, bb.edges().forEach((wb => bb.edge(wb).minlen *= pb));
      let Vb = function(bb) {
        return bb.edges().reduce(((wb, Mb) => wb + bb.edge(Mb).weight), 0)
      }(bb) + 1;
      bb.children(ew).forEach((eb => {
        Qw(bb, wb, pb, Vb, Hb, Mb, eb)
      })), bb.graph().nodeRankFactor = pb
    }

    function Qw(bb, wb, Mb, eb, Hb, pb, Vb) {
      var gb;
      let lb = bb.children(Vb);
      if (!lb.length) return void(Vb !== wb && bb.setEdge(wb, Vb, {
        weight: 0,
        minlen: Mb
      }));
      let Lb = ub(bb, "_bt"),
        Ib = ub(bb, "_bb"),
        Ob = bb.node(Vb);
      bb.setParent(Lb, Vb), Ob.borderTop = Lb, bb.setParent(Ib, Vb), Ob.borderBottom = Ib, lb.forEach((gb => {
        var lb;
        Qw(bb, wb, Mb, eb, Hb, pb, gb);
        let Ob = bb.node(gb),
          Ub = Ob.borderTop ? Ob.borderTop : gb,
          tb = Ob.borderBottom ? Ob.borderBottom : gb,
          Cb = Ob.borderTop ? eb : 2 * eb,
          Eb = Ub !== tb ? 1 : Hb - (null != (lb = pb[Vb]) ? lb : 0) + 1;
        bb.setEdge(Lb, Ub, {
          weight: Cb,
          minlen: Eb,
          nestingEdge: !0
        }), bb.setEdge(tb, Ib, {
          weight: Cb,
          minlen: Eb,
          nestingEdge: !0
        })
      })), bb.parent(Vb) || bb.setEdge(wb, Lb, {
        weight: 0,
        minlen: Hb + (null != (gb = pb[Vb]) ? gb : 0)
      })
    }
    var Gw = function(bb) {
      bb.children(ew).forEach((function wb(Mb) {
        let eb = bb.children(Mb),
          Hb = bb.node(Mb);
        if (eb.length && eb.forEach(wb), Hb && Object.hasOwn(Hb, "minRank")) {
          Hb.borderLeft = [], Hb.borderRight = [];
          for (let wb = Hb.minRank, eb = Hb.maxRank + 1; wb < eb; ++wb) qw(bb, "borderLeft", "_bl", Mb, Hb, wb), qw(bb, "borderRight", "_br", Mb, Hb, wb)
        }
      }))
    };

    function qw(bb, wb, Mb, eb, Hb, pb) {
      let Vb = {
          width: 0,
          height: 0,
          rank: pb,
          borderType: wb
        },
        gb = Hb[wb][pb - 1],
        lb = Gb(bb, "border", Vb, Mb);
      Hb[wb][pb] = lb, bb.setParent(lb, eb), gb && bb.setEdge(gb, lb, {
        weight: 1
      })
    }

    function aw(bb) {
      var wb;
      let Mb = null == (wb = bb.graph().rankdir) ? void 0 : wb.toLowerCase();
      ("bt" === Mb || "rl" === Mb) && function(bb) {
        bb.nodes().forEach((wb => dw(bb.node(wb)))), bb.edges().forEach((wb => {
          var Mb;
          let eb = bb.edge(wb);
          null == (Mb = eb.points) || Mb.forEach(dw), Object.hasOwn(eb, "y") && dw(eb)
        }))
      }(bb), ("lr" === Mb || "rl" === Mb) && (function(bb) {
        bb.nodes().forEach((wb => Pw(bb.node(wb)))), bb.edges().forEach((wb => {
          var Mb;
          let eb = bb.edge(wb);
          null == (Mb = eb.points) || Mb.forEach(Pw), Object.hasOwn(eb, "x") && Pw(eb)
        }))
      }(bb), iw(bb))
    }

    function iw(bb) {
      bb.nodes().forEach((wb => uw(bb.node(wb)))), bb.edges().forEach((wb => uw(bb.edge(wb))))
    }

    function uw(bb) {
      let wb = bb.width;
      bb.width = bb.height, bb.height = wb
    }

    function dw(bb) {
      bb.y = -bb.y
    }

    function Pw(bb) {
      let wb = bb.x;
      bb.x = bb.y, bb.y = wb
    }

    function nw(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Mb = {},
        eb = bb.nodes().filter((wb => !bb.children(wb).length)),
        Hb = eb.map((wb => bb.node(wb).rank)),
        pb = bw(Pb(Math.max, Hb) + 1).map((() => []));
      return eb.sort(((wb, Mb) => bb.node(wb).rank - bb.node(Mb).rank)).forEach((function eb(Hb) {
        if (Mb[Hb]) return;
        Mb[Hb] = !0;
        let Vb = bb.node(Hb);
        pb[Vb.rank].push(Hb);
        let gb = bb.successors(Hb);
        gb && [...gb].sort(((Mb, eb) => function(Mb, eb) {
          let Hb = bb.node(Mb),
            pb = bb.node(eb);
          return Hw(wb, Hb, pb)
        }(Mb, eb))).forEach(eb)
      })), pb
    }

    function yw(bb, wb) {
      let Mb = 0;
      for (let eb = 1; eb < wb.length; ++eb) Mb += ow(bb, wb[eb - 1], wb[eb]);
      return Mb
    }

    function ow(bb, wb, Mb) {
      let eb = function(bb, wb) {
          return bb.reduce(((bb, Mb, eb) => (bb[Mb] = wb[eb], bb)), {})
        }(Mb, Mb.map(((bb, wb) => wb))),
        Hb = wb.flatMap((wb => {
          let Mb = bb.outEdges(wb);
          return Mb ? Mb.map((wb => ({
            pos: eb[wb.w],
            weight: bb.edge(wb).weight
          }))).sort(((bb, wb) => bb.pos - wb.pos)) : []
        })),
        pb = 1;
      for (; pb < Mb.length;) pb <<= 1;
      let Vb = 2 * pb - 1;
      pb -= 1;
      let gb = new Array(Vb).fill(0),
        lb = 0;
      return Hb.forEach((bb => {
        let wb = bb.pos + pb;
        gb[wb] += bb.weight;
        let Mb = 0;
        for (; wb > 0;) wb % 2 && (Mb += gb[wb + 1]), wb = wb - 1 >> 1, gb[wb] += bb.weight;
        lb += bb.weight * Mb
      })), lb
    }

    function Tw(bb, wb) {
      let Mb = {};
      return bb.forEach(((bb, wb) => {
          let eb = {
            indegree: 0,
            in: [],
            out: [],
            vs: [bb.v],
            i: wb
          };
          void 0 !== bb.barycenter && (eb.barycenter = bb.barycenter, eb.weight = bb.weight), Mb[bb.v] = eb
        })), wb.edges().forEach((bb => {
          let wb = Mb[bb.v],
            eb = Mb[bb.w];
          void 0 !== wb && void 0 !== eb && (eb.indegree++, wb.out.push(eb))
        })),
        function(bb) {
          let wb = [];

          function Mb(bb) {
            return wb => {
              wb.merged || (void 0 === wb.barycenter || void 0 === bb.barycenter || wb.barycenter >= bb.barycenter) && function(bb, wb) {
                let Mb = 0,
                  eb = 0;
                bb.weight && (Mb += bb.barycenter * bb.weight, eb += bb.weight), wb.weight && (Mb += wb.barycenter * wb.weight, eb += wb.weight), bb.vs = wb.vs.concat(bb.vs), bb.barycenter = Mb / eb, bb.weight = eb, bb.i = Math.min(wb.i, bb.i), wb.merged = !0
              }(bb, wb)
            }
          }

          function eb(wb) {
            return Mb => {
              Mb.in.push(wb), 0 === --Mb.indegree && bb.push(Mb)
            }
          }
          for (; bb.length;) {
            let Hb = bb.pop();
            wb.push(Hb), Hb.in.reverse().forEach(Mb(Hb)), Hb.out.forEach(eb(Hb))
          }
          return wb.filter((bb => !bb.merged)).map((bb => ww(bb, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Mb).filter((bb => !bb.indegree)))
    }

    function kw(bb, wb, Mb, eb, Hb) {
      let pb = {},
        Vb = null,
        gb = null,
        lb = Hb;
      "boolean" == typeof wb ? (lb = wb, pb = {}) : wb && (pb = wb, Vb = null != Mb ? Mb : null, gb = null != eb ? eb : null);
      let Lb = function(bb, wb) {
          let Mb = {
            lhs: [],
            rhs: []
          };
          return bb.forEach((bb => {
            wb(bb) ? Mb.lhs.push(bb) : Mb.rhs.push(bb)
          })), Mb
        }(bb, (bb => Object.hasOwn(bb, "barycenter"))),
        Ib = Lb.lhs,
        Ob = Lb.rhs.sort(((bb, wb) => wb.i - bb.i)),
        Ub = [],
        tb = 0,
        Cb = 0,
        Eb = 0;
      Ib.sort(function(bb, wb, Mb) {
        return (eb, Hb) => {
          if (eb.barycenter < Hb.barycenter) return -1;
          if (eb.barycenter > Hb.barycenter) return 1;
          if (bb && ("string" == typeof eb.vs[0] || "string" == typeof Hb.vs[0])) {
            let Mb = bb.node(eb.vs[0]),
              pb = bb.node(Hb.vs[0]),
              Vb = Hw(wb, Mb, pb);
            if (0 !== Vb) return Vb
          }
          return Mb ? Hb.i - eb.i : eb.i - Hb.i
        }
      }(gb, Vb, !!lb));
      for (let [Bb, sb] of Object.entries(pb)) {
        let bb = Ib.findIndex((bb => bb.vs[0] === Bb));
        Ib.splice(bb + 1, 0, sb)
      }
      Eb = bM(Ub, Ob, Eb), Ib.forEach((bb => {
        Eb += bb.vs.length, Ub.push(bb.vs), tb += bb.barycenter * bb.weight, Cb += bb.weight, Eb = bM(Ub, Ob, Eb)
      }));
      let Fb = {
        vs: Ub.flat(1)
      };
      return Cb && (Fb.barycenter = tb / Cb, Fb.weight = Cb), Fb
    }

    function bM(bb, wb, Mb) {
      let eb;
      for (; wb.length && (eb = wb[wb.length - 1]).i <= Mb;) wb.pop(), bb.push(eb.vs), Mb++;
      return Mb
    }

    function wM(bb, wb, Mb, eb, Hb) {
      var pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb;
      let Fb = null,
        Bb = Hb;
      "boolean" == typeof eb ? (Bb = eb, Fb = null) : void 0 !== eb && (Fb = eb);
      let sb = bb.children(wb),
        mb = bb.node(wb),
        hb = mb ? mb.borderLeft : void 0,
        zb = mb ? mb.borderRight : void 0,
        Xb = {};
      hb && (sb = sb.filter((bb => bb !== hb && bb !== zb)));
      let xb = function(bb) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((wb => {
          let Mb = bb.inEdges(wb);
          if (!Mb || !Mb.length) return {
            v: wb
          };
          {
            let eb = Mb.reduce(((wb, Mb) => {
              let eb = bb.edge(Mb),
                Hb = bb.node(Mb.v);
              return {
                sum: wb.sum + eb.weight * Hb.order,
                weight: wb.weight + eb.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: wb,
              barycenter: eb.sum / eb.weight,
              weight: eb.weight
            }
          }
        }))
      }(bb, sb);
      xb.forEach((wb => {
        if (bb.children(wb.v).length) {
          let {
            result: eb
          } = wM(bb, wb.v, Mb, Fb, Bb);
          Xb[wb.v] = eb, Object.hasOwn(eb, "barycenter") && function(bb, wb) {
            void 0 !== bb.barycenter ? (bb.barycenter = (bb.barycenter * bb.weight + wb.barycenter * wb.weight) / (bb.weight + wb.weight), bb.weight += wb.weight) : (bb.barycenter = wb.barycenter, bb.weight = wb.weight)
          }(wb, eb)
        }
      }));
      let jb = Tw(xb, Mb);
      ! function(bb, wb) {
        bb.forEach((bb => {
          bb.vs = bb.vs.flatMap((bb => wb[bb] ? wb[bb].vs : bb))
        }))
      }(jb, Xb);
      let Kb = {},
        rb = !1;
      for (let Db = 0; Db < jb.length; Db++)
        for (let wb = Db + 1; wb < jb.length; wb++)
          if (jb[Db] && jb[wb] && null != (pb = jb[Db]) && pb.barycenter && null != (Vb = jb[wb]) && Vb.barycenter && (null == (gb = jb[Db]) ? void 0 : gb.barycenter) === jb[wb].barycenter) {
            let Mb = null != (Lb = null == (lb = jb[Db]) ? void 0 : lb.vs[0]) ? Lb : "",
              eb = null != (Ob = null == (Ib = jb[wb]) ? void 0 : Ib.vs[0]) ? Ob : "",
              Hb = bb.node(Mb),
              pb = bb.node(eb);
            if ("edge" === Hb.dummy && "edge" === pb.dummy && (null == (Ub = Hb.edgeObj) ? void 0 : Ub.v) === (null == (tb = pb.edgeObj) ? void 0 : tb.v) && (null == (Cb = Hb.edgeObj) ? void 0 : Cb.w) === (null == (Eb = pb.edgeObj) ? void 0 : Eb.w)) {
              if (Hb.edgeLabel.reversed) {
                Kb[eb] = jb[Db], jb.splice(Db, 1), Db--;
                break
              }
              Kb[Mb] = jb[wb], jb.splice(wb, 1), wb--
            } else rb = !0
          } let Rb = kw(jb, Kb, Fb, bb, Bb);
      if (hb && zb) {
        Rb.vs = [hb, Rb.vs, zb].flat(1);
        let wb = bb.predecessors(hb);
        if (wb && wb.length) {
          let Mb = bb.node(wb[0]),
            eb = bb.predecessors(zb),
            Hb = bb.node(eb[0]);
          Object.hasOwn(Rb, "barycenter") || (Rb.barycenter = 0, Rb.weight = 0), Rb.barycenter = (Rb.barycenter * Rb.weight + Mb.order + Hb.order) / (Rb.weight + 2), Rb.weight += 2
        }
      }
      return Object.defineProperty(Rb, "result", {
        value: Rb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Rb, "usedBias", {
        value: rb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Rb
    }

    function MM(bb, wb, Mb, eb) {
      eb || (eb = bb.nodes());
      let Hb = function(bb) {
          let wb;
          for (; bb.hasNode(wb = kb("_root")););
          return wb
        }(bb),
        pb = new Qb({
          compound: !0
        }).setGraph({
          root: Hb
        }).setDefaultNodeLabel((wb => bb.node(wb)));
      return eb.forEach((eb => {
        let Vb = bb.node(eb),
          gb = bb.parent(eb);
        if (Vb.rank === wb || Vb.minRank <= wb && wb <= Vb.maxRank) {
          pb.setNode(eb), pb.setParent(eb, gb || Hb);
          let lb = bb[Mb](eb);
          lb && lb.forEach((wb => {
            let Mb = wb.v === eb ? wb.w : wb.v,
              Hb = pb.edge(Mb, eb),
              Vb = void 0 !== Hb ? Hb.weight : 0;
            pb.setEdge(Mb, eb, {
              weight: bb.edge(wb).weight + Vb
            })
          })), Object.hasOwn(Vb, "minRank") && pb.setNode(eb, {
            borderLeft: Vb.borderLeft[wb],
            borderRight: Vb.borderRight[wb]
          })
        }
      })), pb
    }

    function eM(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof wb.customOrder) return void wb.customOrder(bb, eM);
      let eb = nb(bb),
        Hb = HM(bb, bw(1, eb + 1), "inEdges"),
        pb = HM(bb, bw(eb - 1, -1, -1), "outEdges"),
        Vb = nw(bb, Mb);
      if (VM(bb, Vb), wb.disableOptimalOrderHeuristic) return;
      let gb, lb = Number.POSITIVE_INFINITY,
        Lb = wb.constraints || [];
      for (let Ib = 0, Ob = 0; Ob < 4; ++Ib, ++Ob) {
        pM(Ib % 2 ? Hb : pb, Ib % 4 >= 2, Lb, Mb), Vb = ib(bb);
        let wb = yw(bb, Vb);
        wb < lb ? (Ob = 0, gb = Object.assign({}, Vb), lb = wb) : wb === lb && (gb = structuredClone(Vb))
      }
      VM(bb, gb)
    }

    function HM(bb, wb, Mb) {
      let eb = new Map,
        Hb = (bb, wb) => {
          eb.has(bb) || eb.set(bb, []), eb.get(bb).push(wb)
        };
      for (let pb of bb.nodes()) {
        let wb = bb.node(pb);
        if ("number" == typeof wb.rank && Hb(wb.rank, pb), "number" == typeof wb.minRank && "number" == typeof wb.maxRank)
          for (let bb = wb.minRank; bb <= wb.maxRank; bb++) bb !== wb.rank && Hb(bb, pb)
      }
      return wb.map((function(wb) {
        return MM(bb, wb, Mb, eb.get(wb) || [])
      }))
    }

    function pM(bb, wb, Mb, eb) {
      let Hb = !0,
        pb = new Qb;
      bb.forEach((function(bb) {
        Mb.forEach((bb => pb.setEdge(bb.left, bb.right)));
        let Vb = bb.graph().root,
          {
            result: gb,
            usedBias: lb
          } = wM(bb, Vb, pb, eb, Hb);
        wb && lb && (Hb = !Hb), gb.vs.forEach(((wb, Mb) => bb.node(wb).order = Mb)),
          function(bb, wb, Mb) {
            let eb, Hb = {};
            Mb.forEach((Mb => {
              let pb, Vb, gb = bb.parent(Mb);
              for (; gb;) {
                if (pb = bb.parent(gb), pb ? (Vb = Hb[pb], Hb[pb] = gb) : (Vb = eb, eb = gb), Vb && Vb !== gb) return void wb.setEdge(Vb, gb);
                gb = pb
              }
            }))
          }(bb, pb, gb.vs)
      }))
    }

    function VM(bb, wb) {
      Object.values(wb).forEach((wb => wb.forEach(((wb, Mb) => bb.node(wb).order = Mb))))
    }

    function gM(bb, wb, Mb) {
      if (wb > Mb) {
        let bb = wb;
        wb = Mb, Mb = bb
      }
      let eb = bb[wb];
      eb || (bb[wb] = eb = {}), eb[Mb] = !0
    }

    function lM(bb, wb, Mb) {
      if (wb > Mb) {
        let bb = wb;
        wb = Mb, Mb = bb
      }
      let eb = bb[wb];
      return void 0 !== eb && Object.hasOwn(eb, Mb)
    }

    function LM(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        pb = {},
        Vb = function(bb, wb, Mb, eb) {
          let Hb = new Qb,
            pb = bb.graph(),
            Vb = function(bb, wb, Mb) {
              return (eb, Hb, pb) => {
                let Vb, gb = eb.node(Hb),
                  lb = eb.node(pb),
                  Lb = 0;
                if (Lb += gb.width / 2, Object.hasOwn(gb, "labelpos")) switch (gb.labelpos.toLowerCase()) {
                  case "l":
                    Vb = -gb.width / 2;
                    break;
                  case "r":
                    Vb = gb.width / 2
                }
                if (Vb && (Lb += Mb ? Vb : -Vb), Vb = void 0, Lb += (gb.dummy ? wb : bb) / 2, Lb += (lb.dummy ? wb : bb) / 2, Lb += lb.width / 2, Object.hasOwn(lb, "labelpos")) switch (lb.labelpos.toLowerCase()) {
                  case "l":
                    Vb = lb.width / 2;
                    break;
                  case "r":
                    Vb = -lb.width / 2
                }
                return Vb && (Lb += Mb ? Vb : -Vb), Lb
              }
            }(pb.nodesep, pb.edgesep, eb);
          return wb.forEach((wb => {
            let eb;
            wb.forEach((wb => {
              let pb = Mb[wb];
              if (void 0 !== pb) {
                if (Hb.setNode(pb), void 0 !== eb) {
                  let gb = Mb[eb];
                  if (void 0 !== gb) {
                    let Mb = Hb.edge(gb, pb);
                    Hb.setEdge(gb, pb, Math.max(Vb(bb, wb, eb), Mb || 0))
                  }
                }
                eb = wb
              }
            }))
          })), Hb
        }(bb, wb, Mb, Hb),
        gb = Hb ? "borderLeft" : "borderRight";

      function lb(bb, wb) {
        let Mb = Vb.nodes().slice(),
          eb = {},
          Hb = Mb.pop();
        for (; Hb;) {
          if (eb[Hb]) bb(Hb);
          else {
            eb[Hb] = !0, Mb.push(Hb);
            for (let bb of wb(Hb)) Mb.push(bb)
          }
          Hb = Mb.pop()
        }
      }
      return lb((function(bb) {
        let wb = Vb.inEdges(bb);
        pb[bb] = wb ? wb.reduce(((bb, wb) => {
          var Mb;
          let eb = null != (Mb = pb[wb.v]) ? Mb : 0,
            Hb = Vb.edge(wb);
          return Math.max(bb, eb + (void 0 !== Hb ? Hb : 0))
        }), 0) : 0
      }), (function(bb) {
        return Vb.predecessors(bb) || []
      })), lb((function(wb) {
        let Mb = Vb.outEdges(wb),
          eb = Number.POSITIVE_INFINITY;
        Mb && (eb = Mb.reduce(((bb, wb) => {
          let Mb = pb[wb.w],
            eb = Vb.edge(wb);
          return Math.min(bb, (void 0 !== Mb ? Mb : 0) - (void 0 !== eb ? eb : 0))
        }), Number.POSITIVE_INFINITY));
        let Hb = bb.node(wb);
        eb !== Number.POSITIVE_INFINITY && Hb.borderType !== gb && (pb[wb] = Math.max(void 0 !== pb[wb] ? pb[wb] : 0, eb))
      }), (function(bb) {
        return Vb.successors(bb) || []
      })), Object.keys(eb).forEach((bb => {
        var wb;
        let eb = Mb[bb];
        void 0 !== eb && (pb[bb] = null != (wb = pb[eb]) ? wb : 0)
      })), pb
    }

    function IM(bb, wb) {
      let Mb, eb = ib(bb),
        Hb = Object.assign(function(bb, wb) {
          let Mb = {};
          return wb.length && wb.reduce((function(wb, eb) {
            let Hb = 0,
              pb = 0,
              Vb = wb.length,
              gb = eb[eb.length - 1];
            return eb.forEach(((wb, lb) => {
              let Lb = function(bb, wb) {
                  if (bb.node(wb).dummy) {
                    let Mb = bb.predecessors(wb);
                    if (Mb) return Mb.find((wb => bb.node(wb).dummy))
                  }
                }(bb, wb),
                Ib = Lb ? bb.node(Lb).order : Vb;
              (Lb || wb === gb) && (eb.slice(pb, lb + 1).forEach((wb => {
                let eb = bb.predecessors(wb);
                eb && eb.forEach((eb => {
                  let pb = bb.node(eb),
                    Vb = pb.order;
                  (Vb < Hb || Ib < Vb) && (!pb.dummy || !bb.node(wb).dummy) && gM(Mb, eb, wb)
                }))
              })), pb = lb + 1, Hb = Ib)
            })), eb
          })), Mb
        }(bb, eb), function(bb, wb) {
          let Mb = {};

          function eb(wb, eb, Hb, pb, Vb) {
            bw(eb, Hb).forEach((eb => {
              let Hb = wb[eb];
              if (void 0 !== Hb && bb.node(Hb).dummy) {
                let wb = bb.predecessors(Hb);
                wb && wb.forEach((wb => {
                  if (void 0 === wb) return;
                  let eb = bb.node(wb);
                  eb.dummy && (eb.order < pb || eb.order > Vb) && gM(Mb, wb, Hb)
                }))
              }
            }))
          }
          return wb.length && wb.reduce((function(wb, Mb) {
            let Hb = -1,
              pb = -1,
              Vb = 0;
            return Mb.forEach(((gb, lb) => {
              if ("border" === bb.node(gb).dummy) {
                let wb = bb.predecessors(gb);
                if (wb && wb.length) {
                  let gb = wb[0];
                  if (void 0 === gb) return;
                  pb = bb.node(gb).order, eb(Mb, Vb, lb, Hb, pb), Vb = lb, Hb = pb
                }
              }
              eb(Mb, Vb, Mb.length, pb, wb.length)
            })), Mb
          })), Mb
        }(bb, eb)),
        pb = {};
      ["u", "d"].forEach((Vb => {
        Mb = "u" === Vb ? eb : Object.values(eb).reverse(), ["l", "r"].forEach((eb => {
          "r" === eb && (Mb = Mb.map((bb => Object.values(bb).reverse())));
          let gb = function(bb, wb, Mb, eb, Hb) {
              let pb = {},
                Vb = {},
                gb = {};
              return wb.forEach((bb => {
                bb.forEach(((bb, wb) => {
                  pb[bb] = bb, Vb[bb] = bb, gb[bb] = wb
                }))
              })), wb.forEach((wb => {
                let lb = -1,
                  Lb = -1,
                  Ib = !1,
                  Ob = wb,
                  Ub = wb.findIndex((wb => (null == Hb ? void 0 : Hb.includes(wb)) || OM(wb, bb, Hb)));
                Ub > 0 && (Ob = [wb[Ub], ...wb.slice(0, Ub), ...wb.slice(Ub + 1)], Ib = !0), Ob.forEach((wb => {
                  var Ob;
                  let Ub = eb(wb);
                  if (Ub && Ub.length) {
                    null != Hb && Hb.includes(wb) && (Ub = Ub.filter((wb => OM(wb, bb, Hb))));
                    let eb = Ub.sort(((bb, wb) => {
                        let Mb = gb[bb],
                          eb = gb[wb];
                        return (void 0 !== Mb ? Mb : 0) - (void 0 !== eb ? eb : 0)
                      })),
                      tb = (eb.length - 1) / 2;
                    for (let bb = Math.floor(tb), Hb = Math.ceil(tb); bb <= Hb; ++bb) {
                      let Hb = eb[bb];
                      if (void 0 === Hb) continue;
                      let Ub = gb[Hb];
                      if (void 0 !== Ub && Vb[wb] === wb && lb < Ub && gb[Hb] !== Lb && !lM(Mb, wb, Hb)) {
                        let bb = pb[Hb];
                        void 0 !== bb && (Vb[Hb] = wb, Vb[wb] = pb[wb] = bb, lb = Ub, Ib && (lb = -1, Lb = null != (Ob = gb[Hb]) ? Ob : -1, Ib = !1))
                      }
                    }
                  }
                }))
              })), {
                root: pb,
                align: Vb
              }
            }(bb, Mb, Hb, (wb => ("u" === Vb ? bb.predecessors(wb) : bb.successors(wb)) || []), wb),
            lb = LM(bb, Mb, gb.root, gb.align, "r" === eb);
          "r" === eb && (lb = Mw(lb, (bb => -bb))), pb[Vb + eb] = lb
        }))
      }));
      let Vb = function(bb, wb) {
        return Object.values(wb).reduce(((wb, Mb) => {
          let eb = Number.NEGATIVE_INFINITY,
            Hb = Number.POSITIVE_INFINITY;
          Object.entries(Mb).forEach((wb => {
            let [Mb, pb] = wb, Vb = function(bb, wb) {
              return bb.node(wb).width
            }(bb, Mb) / 2;
            eb = Math.max(pb + Vb, eb), Hb = Math.min(pb - Vb, Hb)
          }));
          let pb = eb - Hb;
          return pb < wb[0] && (wb = [pb, Mb]), wb
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(bb, pb);
      return function(bb, wb) {
          let Mb = Object.values(wb),
            eb = Pb(Math.min, Mb),
            Hb = Pb(Math.max, Mb);
          ["u", "d"].forEach((Mb => {
            ["l", "r"].forEach((pb => {
              let Vb = Mb + pb,
                gb = bb[Vb];
              if (!gb || gb === wb) return;
              let lb = Object.values(gb),
                Lb = eb - Pb(Math.min, lb);
              "l" !== pb && (Lb = Hb - Pb(Math.max, lb)), Lb && (bb[Vb] = Mw(gb, (bb => bb + Lb)))
            }))
          }))
        }(pb, Vb),
        function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Mb = bb.ul;
          return Mb ? Mw(Mb, ((Mb, eb) => {
            var Hb, pb;
            if (wb) {
              let Mb = wb.toLowerCase(),
                Hb = bb[Mb];
              if (Hb && void 0 !== Hb[eb]) return Hb[eb]
            }
            let Vb = Object.values(bb).map((bb => {
              let wb = bb[eb];
              return void 0 !== wb ? wb : 0
            })).sort(((bb, wb) => bb - wb));
            return ((null != (Hb = Vb[1]) ? Hb : 0) + (null != (pb = Vb[2]) ? pb : 0)) / 2
          })) : {}
        }(pb, bb.graph().align)
    }

    function OM(bb, wb, Mb) {
      var eb;
      if (!Mb) return !1;
      let Hb = null == (eb = wb.node(bb)) ? void 0 : eb.edgeObj;
      if (!Hb || wb.node(bb).edgeLabel.reversed) return !1;
      let pb = Mb.indexOf(null == Hb ? void 0 : Hb.v),
        Vb = Mb.indexOf(null == Hb ? void 0 : Hb.w);
      return -1 !== pb && -1 !== Vb && pb === (Vb + 1) % Mb.length || pb === (Vb - 1) % Mb.length
    }

    function UM(bb, wb) {
      (function(bb) {
        let wb = ib(bb),
          Mb = bb.graph(),
          eb = Mb.ranksep,
          Hb = Mb.rankalign,
          pb = 0;
        wb.forEach((wb => {
          let Mb = wb.reduce(((wb, Mb) => {
            var eb;
            let Hb = null != (eb = bb.node(Mb).height) ? eb : 0;
            return wb > Hb ? wb : Hb
          }), 0);
          wb.forEach((wb => {
            let eb = bb.node(wb);
            eb.y = "top" === Hb ? pb + eb.height / 2 : "bottom" === Hb ? pb + Mb - eb.height / 2 : pb + Mb / 2
          })), pb += Mb + eb
        }))
      })(bb = qb(bb)), Object.entries(IM(bb, wb)).forEach((wb => {
        let [Mb, eb] = wb;
        return bb.node(Mb).x = eb
      }))
    }
    var tM = new WeakMap;

    function CM(bb) {
      return FM(bb, ob, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), bb
    }

    function EM(bb, wb, Mb) {
      let eb = wb;
      for (; void 0 !== eb;) {
        let wb = bb.parent(eb);
        if (wb === Mb) return eb;
        eb = wb
      }
    }

    function FM(bb, wb, Mb) {
      var eb;
      let Hb = bb.nodes().filter((wb => bb.children(wb).length)),
        pb = {};
      Hb.forEach((eb => {
        let Hb = bb.node(eb);
        if (Hb && Hb.rankdir) {
          let Vb = new Qb({
            multigraph: !0,
            compound: !0
          });
          Vb.setGraph({
            rankdir: Hb.rankdir
          });
          let gb = bb.children(eb);
          gb.forEach((wb => {
            let Mb = {
              ...bb.node(wb)
            };
            Vb.setNode(wb, Mb);
            let Hb = bb.parent(wb);
            Hb && Hb !== eb && gb.includes(Hb) && Vb.setParent(wb, Hb)
          }));
          let lb = new Set;
          bb.edges().forEach((wb => {
            let Mb = EM(bb, wb.v, eb),
              Hb = EM(bb, wb.w, eb);
            if (Mb && Hb && Mb !== Hb) {
              let eb = `${Mb}\0${Hb}`;
              lb.has(eb) || (lb.add(eb), Vb.setEdge(Mb, Hb, {
                ...bb.edge(wb)
              }))
            }
          })), FM(Vb, wb, Mb);
          let Lb = RM(Vb);
          BM(Lb, wb, Mb, null), sM(Vb, Lb);
          let Ib = 1 / 0,
            Ob = 1 / 0,
            Ub = -1 / 0,
            tb = -1 / 0;
          Vb.nodes().forEach((bb => {
            if (bb === eb) return;
            let wb = Vb.node(bb);
            wb && "number" == typeof wb.x && "number" == typeof wb.y && "number" == typeof wb.width && "number" == typeof wb.height && (Ib = Math.min(Ib, wb.x - wb.width / 2), Ub = Math.max(Ub, wb.x + wb.width / 2), Ob = Math.min(Ob, wb.y - wb.height / 2), tb = Math.max(tb, wb.y + wb.height / 2))
          })), (!isFinite(Ib) || !isFinite(Ob) || !isFinite(Ub) || !isFinite(tb)) && (Ib = Ob = 0, Ub = tb = 0);
          let Cb = Ub - Ib,
            Eb = tb - Ob;
          pb[eb] = {
            minX: Ib,
            te: Ob,
            maxX: Ub,
            Ce: tb,
            width: Cb,
            height: Eb,
            offsetX: Ib,
            offsetY: Ob
          }, Hb._dagreClusterSubgraph = Vb
        }
      }));
      let Vb = [],
        gb = new Map;
      Hb.forEach((wb => {
        let Mb = bb.node(wb);
        Mb && Mb.rankdir && pb[wb] && gb.set(wb, (bb.children(wb) || []).filter((bb => bb !== wb)))
      }));
      let lb = new Set([...gb.values()].flat()),
        Lb = new Map;
      gb.forEach(((wb, Mb) => {
        lb.has(Mb) || Lb.set(Mb, (wb => {
          let Mb = [],
            eb = (bb.children(wb) || []).filter((bb => bb !== wb));
          for (; eb.length > 0;) {
            let wb = eb.shift();
            Mb.push(wb), (bb.children(wb) || []).filter((bb => bb !== wb)).forEach((bb => eb.push(bb)))
          }
          return Mb
        })(Mb))
      }));
      let Ib = new Set([...Lb.values()].flat()),
        Ob = bb => {
          for (let [wb, Mb] of Lb)
            if (Mb.includes(bb)) return wb;
          return bb
        },
        Ub = [];
      bb.edges().forEach((wb => {
        (Ib.has(wb.v) || Ib.has(wb.w)) && Ub.push({
          edge: wb,
          label: bb.edge(wb)
        })
      }));
      let tb = new Map;
      Ib.forEach((wb => {
        let Mb = bb.parent(wb);
        tb.set(wb, "string" == typeof Mb ? Mb : void 0)
      })), Lb.forEach(((wb, Mb) => {
        let eb = bb.node(Mb),
          Hb = [];
        wb.forEach((wb => {
          let Mb = bb.node(wb);
          Mb && (Hb.push({
            id: wb,
            node: Mb,
            parent: tb.get(wb)
          }), bb.removeNode(wb))
        }));
        let gb = Ub.filter((bb => {
            let {
              edge: Mb
            } = bb;
            return wb.includes(Mb.v) || wb.includes(Mb.w)
          })),
          lb = pb[Mb];
        eb && (Vb.push({
          clusterId: Mb,
          subgraph: eb._dagreClusterSubgraph,
          bounds: lb,
          children: wb,
          removedNodes: Hb,
          removedEdges: gb
        }), eb.width = lb.width, eb.height = lb.height)
      }));
      let Cb = new Set;
      Ub.forEach((wb => {
        let {
          edge: Mb,
          label: eb
        } = wb, Hb = Ob(Mb.v), pb = Ob(Mb.w);
        if (Hb !== pb && bb.hasNode(Hb) && bb.hasNode(pb)) {
          let wb = `${Hb}\0${pb}`;
          Cb.has(wb) || (Cb.add(wb), bb.setEdge(Hb, pb, {
            ...eb,
            width: 0,
            height: 0
          }))
        }
      }));
      let Eb = RM(bb),
        Fb = BM(Eb, wb, Mb, null != (eb = tM.get(bb)) ? eb : null);
      tM.set(bb, Fb), sM(bb, Eb), Cb.forEach((wb => {
        let Mb = wb.indexOf("\0"),
          eb = wb.slice(0, Mb),
          Hb = wb.slice(Mb + 1);
        bb.hasEdge(eb, Hb) && bb.removeEdge(eb, Hb)
      })), Vb.forEach((wb => {
        let {
          clusterId: Mb,
          subgraph: eb,
          bounds: Hb,
          removedNodes: pb,
          removedEdges: Vb
        } = wb;
        var gb, lb;
        let Lb = bb.node(Mb),
          Ib = null != (gb = null == Lb ? void 0 : Lb.x) ? gb : 0,
          Ob = null != (lb = null == Lb ? void 0 : Lb.y) ? lb : 0,
          Ub = (Hb.minX + Hb.maxX) / 2,
          tb = (Hb.te + Hb.Ce) / 2;
        pb.forEach((wb => {
          let {
            id: Mb,
            node: eb,
            parent: Hb
          } = wb;
          bb.setNode(Mb, eb), void 0 !== Hb && bb.setParent(Mb, Hb)
        })), Vb.forEach((wb => {
          let {
            edge: Mb,
            label: eb
          } = wb;
          bb.setEdge(Mb, eb)
        })), eb.nodes().forEach((wb => {
          if (wb === Mb) return;
          let Hb = eb.node(wb),
            pb = bb.node(wb);
          pb && Hb && "number" == typeof Hb.x && "number" == typeof Hb.y && (pb.x = Ib + (Hb.x - Ub), pb.y = Ob + (Hb.y - tb))
        })), delete Lb._dagreClusterSubgraph
      })), Hb.forEach((wb => {
        var Mb, eb;
        let Hb = bb.node(wb),
          Vb = pb[wb];
        if (Hb && Hb.rankdir && Hb._dagreClusterSubgraph && Vb) {
          let pb = Hb._dagreClusterSubgraph,
            gb = null != (Mb = Hb.x) ? Mb : 0,
            lb = null != (eb = Hb.y) ? eb : 0,
            Lb = (Vb.minX + Vb.maxX) / 2,
            Ib = (Vb.te + Vb.Ce) / 2;
          pb.nodes().forEach((Mb => {
            if (Mb === wb) return;
            let eb = pb.node(Mb),
              Hb = bb.node(Mb);
            if (Hb && eb && "number" == typeof eb.x && "number" == typeof eb.y) {
              let bb = eb.x - Lb,
                wb = eb.y - Ib;
              Hb.x = gb + bb, Hb.y = lb + wb
            }
          })), delete Hb._dagreClusterSubgraph
        }
      }))
    }

    function BM(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Hb, pb;
      let Vb = !1 !== (null == Mb ? void 0 : Mb.useDynamic),
        gb = Vb && null != (Hb = null == eb ? void 0 : eb.graph) ? Hb : null,
        lb = Vb && null != (pb = null == eb ? void 0 : eb.rawNodes) ? pb : null;
      wb("    makeSpaceForEdgeLabels", (() => function(bb) {
        let wb = bb.graph();
        wb.ranksep /= 2, bb.edges().forEach((Mb => {
          var eb;
          let Hb = bb.edge(Mb);
          Hb.minlen *= 2, "c" !== (null != (eb = Hb.labelpos) ? eb : "r").toLowerCase() && ("TB" === wb.rankdir || "BT" === wb.rankdir ? Hb.width += Hb.labeloffset : Hb.height += Hb.labeloffset)
        }))
      }(bb))), wb("    removeSelfEdges", (() => function(bb) {
        bb.edges().forEach((wb => {
          if (wb.v === wb.w) {
            let Mb = bb.node(wb.v);
            Mb.selfEdges || (Mb.selfEdges = []), Mb.selfEdges.push({
              e: wb,
              label: bb.edge(wb)
            }), bb.removeEdge(wb)
          }
        }))
      }(bb))), wb("    acyclic", (() => tw(bb, gb))), wb("    nestingGraph.run", (() => vw(bb))), wb("    rank", (() => Ww(qb(bb)))), wb("    injectEdgeLabelProxies", (() => function(bb) {
        bb.edges().forEach((wb => {
          let Mb = bb.edge(wb);
          if (Mb.width && Mb.height) {
            let Mb = bb.node(wb.v),
              eb = {
                rank: (bb.node(wb.w).rank - Mb.rank) / 2 + Mb.rank,
                e: wb
              };
            Gb(bb, "edge-proxy", eb, "_ep")
          }
        }))
      }(bb))), wb("    removeEmptyRanks", (() => function(bb) {
        let wb = bb.nodes().map((wb => bb.node(wb).rank)).filter((bb => void 0 !== bb)),
          Mb = Pb(Math.min, wb),
          eb = [];
        bb.nodes().forEach((wb => {
          let Hb = bb.node(wb).rank - Mb;
          eb[Hb] || (eb[Hb] = []), eb[Hb].push(wb)
        }));
        let Hb = 0,
          pb = bb.graph().nodeRankFactor;
        Array.from(eb).forEach(((wb, Mb) => {
          void 0 === wb && Mb % pb !== 0 ? --Hb : void 0 !== wb && Hb && wb.forEach((wb => bb.node(wb).rank += Hb))
        }))
      }(bb))), wb("    nestingGraph.cleanup", (() => function(bb) {
        let wb = bb.graph();
        bb.removeNode(wb.nestingRoot), delete wb.nestingRoot, bb.edges().forEach((wb => {
          bb.edge(wb).nestingEdge && bb.removeEdge(wb)
        }))
      }(bb))), wb("    normalizeRanks", (() => function(bb) {
        let wb = bb.nodes().map((wb => {
            let Mb = bb.node(wb).rank;
            return void 0 === Mb ? Number.MAX_VALUE : Mb
          })),
          Mb = Pb(Math.min, wb);
        bb.nodes().forEach((wb => {
          let eb = bb.node(wb);
          Object.hasOwn(eb, "rank") && (eb.rank -= Mb)
        }))
      }(bb))), wb("    assignRankMinMax", (() => function(bb) {
        let wb = 0;
        bb.nodes().forEach((Mb => {
          let eb = bb.node(Mb);
          eb.borderTop && (eb.minRank = bb.node(eb.borderTop).rank, eb.maxRank = bb.node(eb.borderBottom).rank, wb = Math.max(wb, eb.maxRank))
        })), bb.graph().maxRank = wb
      }(bb))), wb("    removeEdgeLabelProxies", (() => function(bb) {
        bb.nodes().forEach((wb => {
          let Mb = bb.node(wb);
          if ("edge-proxy" === Mb.dummy) {
            let eb = Mb;
            bb.edge(eb.e).labelRank = Mb.rank, bb.removeNode(wb)
          }
        }))
      }(bb))), wb("    normalize.run", (() => Cw(bb))), wb("    parentDummyChains", (() => Nw(bb))), wb("    addBorderSegments", (() => Gw(bb))), wb("    order", (() => eM(bb, Mb, lb))), wb("    insertSelfEdges", (() => function(bb) {
        ib(bb).forEach((wb => {
          let Mb = 0;
          wb.forEach(((wb, eb) => {
            let Hb = bb.node(wb);
            "number" != typeof Hb.rank && (Hb.rank = 0), Hb.order = eb + Mb, (Hb.selfEdges || []).forEach((wb => {
              Gb(bb, "selfedge", {
                width: wb.label.width,
                height: wb.label.height,
                rank: Hb.rank,
                order: eb + ++Mb,
                e: wb.e,
                edgeLabel: wb.label
              }, "_se"), (!Array.isArray(wb.label.points) || 7 !== wb.label.points.length) && (wb.label.points = [{
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
            })), delete Hb.selfEdges
          }))
        }))
      }(bb))), wb("    adjustCoordinateSystem", (() => function(bb) {
        var wb;
        let Mb = null == (wb = bb.graph().rankdir) ? void 0 : wb.toLowerCase();
        ("lr" === Mb || "rl" === Mb) && iw(bb)
      }(bb))), wb("    position", (() => UM(bb, Mb.corePath))), wb("    positionSelfEdges", (() => function(bb) {
        bb.nodes().forEach((wb => {
          let Mb = bb.node(wb),
            eb = bb => "number" == typeof bb && isFinite(bb);
          if ("selfedge" === Mb.dummy) {
            let Hb = Mb,
              pb = bb.node(Hb.e.v),
              Vb = eb(null == pb ? void 0 : pb.x) ? pb.x : 0,
              gb = eb(null == pb ? void 0 : pb.y) ? pb.y : 0,
              lb = eb(null == pb ? void 0 : pb.width) ? pb.width : 0,
              Lb = eb(null == pb ? void 0 : pb.height) ? pb.height : 0,
              Ib = eb(Mb.x) ? Mb.x : Vb,
              Ob = eb(Mb.y) ? Mb.y : gb,
              Ub = lb / 2,
              tb = Lb / 2;
            Hb.edgeLabel.points = [{
              x: Ib + Ub,
              y: Ob - tb
            }, {
              x: Ib + Ub,
              y: Ob - tb
            }, {
              x: Ib,
              y: Ob
            }, {
              x: Ib - Ub,
              y: Ob + tb
            }, {
              x: Ib - Ub,
              y: Ob + tb
            }, {
              x: Ib,
              y: Ob
            }, {
              x: Ib,
              y: Ob
            }], Hb.edgeLabel.x = Ib, Hb.edgeLabel.y = Ob, bb.setEdge(Hb.e, Hb.edgeLabel), bb.removeNode(wb)
          } else Mb && Array.isArray(Mb.selfEdges) && Mb.selfEdges.forEach((bb => {
            if (!Array.isArray(bb.label.points) || 7 !== bb.label.points.length) {
              let wb = eb(Mb.x) ? Mb.x : 0,
                Hb = eb(Mb.y) ? Mb.y : 0,
                pb = (eb(Mb.width) ? Mb.width : 0) / 2,
                Vb = (eb(Mb.height) ? Mb.height : 0) / 2;
              bb.label.points = [{
                x: wb + pb,
                y: Hb - Vb
              }, {
                x: wb + pb,
                y: Hb - Vb
              }, {
                x: wb,
                y: Hb
              }, {
                x: wb - pb,
                y: Hb + Vb
              }, {
                x: wb - pb,
                y: Hb + Vb
              }, {
                x: wb,
                y: Hb
              }, {
                x: wb,
                y: Hb
              }]
            }
          }))
        }))
      }(bb)));
      let Lb = JSON.parse(JSON.stringify(bb._nodes));
      return wb("    removeBorderNodes", (() => function(bb) {
        bb.nodes().forEach((wb => {
          if (bb.children(wb).length) {
            let Mb = bb.node(wb),
              eb = bb.node(Mb.borderTop),
              Hb = bb.node(Mb.borderBottom),
              pb = bb.node(Mb.borderLeft[Mb.borderLeft.length - 1]),
              Vb = bb.node(Mb.borderRight[Mb.borderRight.length - 1]);
            Mb.width = Math.abs(Vb.x - pb.x), Mb.height = Math.abs(Hb.y - eb.y), Mb.x = pb.x + Mb.width / 2, Mb.y = eb.y + Mb.height / 2
          }
        })), bb.nodes().forEach((wb => {
          "border" === bb.node(wb).dummy && bb.removeNode(wb)
        }))
      }(bb))), wb("    normalize.undo", (() => function(bb) {
        bb.graph().dummyChains.forEach((wb => {
          let Mb, eb = bb.node(wb),
            Hb = eb.edgeLabel;
          for (bb.setEdge(eb.edgeObj, Hb); eb.dummy;) Mb = bb.successors(wb)[0], bb.removeNode(wb), Hb.points.push({
            x: eb.x,
            y: eb.y
          }), "edge-label" === eb.dummy && (Hb.x = eb.x, Hb.y = eb.y, Hb.width = eb.width, Hb.height = eb.height), wb = Mb, eb = bb.node(wb)
        }))
      }(bb))), wb("    fixupEdgeLabelCoords", (() => function(bb) {
        bb.edges().forEach((wb => {
          let Mb = bb.edge(wb);
          if (Object.hasOwn(Mb, "x")) switch (("l" === Mb.labelpos || "r" === Mb.labelpos) && (Mb.width -= Mb.labeloffset), Mb.labelpos) {
            case "l":
              Mb.x -= Mb.width / 2 + Mb.labeloffset;
              break;
            case "r":
              Mb.x += Mb.width / 2 + Mb.labeloffset
          }
        }))
      }(bb))), wb("    undoCoordinateSystem", (() => aw(bb))), wb("    translateGraph", (() => function(bb) {
        let wb = Number.POSITIVE_INFINITY,
          Mb = 0,
          eb = Number.POSITIVE_INFINITY,
          Hb = 0,
          pb = bb.graph(),
          Vb = pb.marginx || 0,
          gb = pb.marginy || 0;

        function lb(bb) {
          let pb = bb.x,
            Vb = bb.y,
            gb = bb.width,
            lb = bb.height;
          wb = Math.min(wb, pb - gb / 2), Mb = Math.max(Mb, pb + gb / 2), eb = Math.min(eb, Vb - lb / 2), Hb = Math.max(Hb, Vb + lb / 2)
        }
        bb.nodes().forEach((wb => lb(bb.node(wb)))), bb.edges().forEach((wb => {
          let Mb = bb.edge(wb);
          Object.hasOwn(Mb, "x") && lb(Mb)
        })), wb -= Vb, eb -= gb, bb.nodes().forEach((Mb => {
          let Hb = bb.node(Mb);
          Hb.x -= wb, Hb.y -= eb
        })), bb.edges().forEach((Mb => {
          let Hb = bb.edge(Mb);
          Hb.points.forEach((bb => {
            bb.x -= wb, bb.y -= eb
          })), Object.hasOwn(Hb, "x") && (Hb.x -= wb), Object.hasOwn(Hb, "y") && (Hb.y -= eb)
        })), pb.width = Mb - wb + Vb, pb.height = Hb - eb + gb
      }(bb))), wb("    assignNodeIntersects", (() => function(bb) {
        bb.edges().forEach((wb => {
          if (wb.v === wb.w) return;
          let Mb, eb, Hb = bb.edge(wb),
            pb = bb.node(wb.v),
            Vb = bb.node(wb.w);
          Hb.points ? (Mb = Hb.points[0], eb = Hb.points[Hb.points.length - 1]) : (Hb.points = [], Mb = Vb, eb = pb), Hb.points.unshift(ab(pb, Mb)), Hb.points.push(ab(Vb, eb))
        }))
      }(bb))), wb("    reversePoints", (() => function(bb) {
        bb.edges().forEach((wb => {
          let Mb = bb.edge(wb);
          Mb.reversed && Mb.points.reverse()
        }))
      }(bb))), wb("    acyclic.undo", (() => function(bb) {
        bb.edges().forEach((wb => {
          let Mb = bb.edge(wb);
          if (Mb.reversed) {
            bb.removeEdge(wb);
            let eb = Mb.forwardName;
            delete Mb.reversed, delete Mb.forwardName, bb.setEdge(wb.w, wb.v, Mb, eb)
          }
        }))
      }(bb))), {
        graph: bb,
        rawNodes: Lb
      }
    }

    function sM(bb, wb) {
      bb.nodes().forEach((Mb => {
        let eb = bb.node(Mb),
          Hb = wb.node(Mb);
        eb && (eb.x = Hb.x, eb.y = Hb.y, eb.order = Hb.order, eb.rank = Hb.rank, wb.children(Mb).length && (eb.width = Hb.width, eb.height = Hb.height))
      })), bb.edges().forEach((Mb => {
        let eb = bb.edge(Mb),
          Hb = wb.edge(Mb);
        eb.points = Hb.points, Object.hasOwn(Hb, "x") && (eb.x = Hb.x, eb.y = Hb.y)
      })), bb.graph().width = wb.graph().width, bb.graph().height = wb.graph().height
    }
    var mM = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      hM = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      zM = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      XM = ["width", "height", "rank"],
      xM = {
        width: 0,
        height: 0
      },
      jM = ["minlen", "weight", "width", "height", "labeloffset"],
      KM = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      rM = ["labelpos"];

    function RM(bb) {
      let wb = new Qb({
          multigraph: !0,
          compound: !0
        }),
        Mb = cM(bb.graph());
      return wb.setGraph(Object.assign({}, hM, DM(Mb, mM), ww(Mb, zM))), bb.nodes().forEach((Mb => {
        let eb = DM(cM(bb.node(Mb)), XM);
        Object.keys(xM).forEach((bb => {
          void 0 === eb[bb] && (eb[bb] = xM[bb])
        })), wb.setNode(Mb, eb);
        let Hb = bb.parent(Mb);
        void 0 !== Hb && wb.setParent(Mb, Hb)
      })), bb.edges().forEach((Mb => {
        let eb = cM(bb.edge(Mb));
        wb.setEdge(Mb, Object.assign({}, KM, DM(eb, jM), ww(eb, rM)))
      })), wb
    }

    function DM(bb, wb) {
      return Mw(ww(bb, wb), Number)
    }

    function cM(bb) {
      let wb = {};
      return bb && Object.entries(bb).forEach((bb => {
        let [Mb, eb] = bb;
        "string" == typeof Mb && (Mb = Mb.toLowerCase()), wb[Mb] = eb
      })), wb
    }

    function YM(bb) {
      let wb = ib(bb),
        Mb = new Qb({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return bb.nodes().forEach((wb => {
        Mb.setNode(wb, {
          label: wb
        }), Mb.setParent(wb, "layer" + bb.node(wb).rank)
      })), bb.edges().forEach((bb => Mb.setEdge(bb.v, bb.w, {}, bb.name))), wb.forEach(((bb, wb) => {
        let eb = "layer" + wb;
        Mb.setNode(eb, {
          rank: "same"
        }), bb.reduce(((bb, wb) => (Mb.setEdge(bb, wb, {
          style: "invis"
        }), wb)))
      })), Mb
    }
    var ZM = {
        time: yb,
        notime: ob
      },
      fM = {
        graphlib: pb,
        version: pw,
        layout: CM,
        debug: YM,
        util: {
          time: yb,
          notime: ob
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);