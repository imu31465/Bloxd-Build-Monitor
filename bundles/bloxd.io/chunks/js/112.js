/*! For license information please see halsg.112.01650bdd.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6166: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Graph: () => Ib,
      debug: () => gh,
      default: () => vh,
      graphlib: () => Gb,
      layout: () => Zh,
      util: () => ih,
      version: () => Gu
    });
    var Bb = Object.defineProperty,
      Ob = (bb, ub, hb) => ((bb, ub, hb) => ub in bb ? Bb(bb, ub, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: hb
      }) : bb[ub] = hb)(bb, "symbol" != typeof ub ? ub + "" : ub, hb),
      Gb = {};
    ((bb, ub) => {
      for (var hb in ub) Bb(bb, hb, {
        get: ub[hb],
        enumerable: !0
      })
    })(Gb, {
      Graph: () => Ib,
      alg: () => Ab
    });
    var Ub = Object.defineProperty,
      Lb = (bb, ub) => {
        for (var hb in ub) Ub(bb, hb, {
          get: ub[hb],
          enumerable: !0
        })
      },
      Yb = class {
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
        setNodes(bb, ub) {
          return bb.forEach((bb => {
            void 0 !== ub ? this.setNode(bb, ub) : this.setNode(bb)
          })), this
        }
        setNode(bb, ub) {
          return bb in this._nodes ? (arguments.length > 1 && (this._nodes[bb] = ub), this) : (this._nodes[bb] = arguments.length > 1 ? ub : this._defaultNodeLabelFn(bb), this._isCompound && (this._parent[bb] = "\0", this._children[bb] = {}, this._children["\0"][bb] = !0), this._in[bb] = {}, this._preds[bb] = {}, this._out[bb] = {}, this._sucs[bb] = {}, ++this._nodeCount, this)
        }
        node(bb) {
          return this._nodes[bb]
        }
        hasNode(bb) {
          return bb in this._nodes
        }
        removeNode(bb) {
          if (bb in this._nodes) {
            let ub = bb => this.removeEdge(this._edgeObjs[bb]);
            delete this._nodes[bb], this._isCompound && (this._removeFromParentsChildList(bb), delete this._parent[bb], this.children(bb).forEach((bb => {
              this.setParent(bb)
            })), delete this._children[bb]), Object.keys(this._in[bb]).forEach(ub), delete this._in[bb], delete this._preds[bb], Object.keys(this._out[bb]).forEach(ub), delete this._out[bb], delete this._sucs[bb], --this._nodeCount
          }
          return this
        }
        setParent(bb, ub) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === ub) ub = "\0";
          else {
            for (let hb = ub += ""; void 0 !== hb; hb = this.parent(hb))
              if (hb === bb) throw new Error("Setting " + ub + " as parent of " + bb + " would create a cycle");
            this.setNode(ub)
          }
          return this.setNode(bb), this._removeFromParentsChildList(bb), this._parent[bb] = ub, this._children[ub][bb] = !0, this
        }
        parent(bb) {
          if (this._isCompound) {
            let ub = this._parent[bb];
            if ("\0" !== ub) return ub
          }
        }
        children() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let ub = this._children[bb];
            if (ub) return Object.keys(ub)
          } else {
            if ("\0" === bb) return this.nodes();
            if (this.hasNode(bb)) return []
          }
          return []
        }
        predecessors(bb) {
          let ub = this._preds[bb];
          if (ub) return Object.keys(ub)
        }
        successors(bb) {
          let ub = this._sucs[bb];
          if (ub) return Object.keys(ub)
        }
        neighbors(bb) {
          let ub = this.predecessors(bb);
          if (ub) {
            let hb = new Set(ub),
              Bb = this.successors(bb);
            if (Bb)
              for (let bb of Bb) hb.add(bb);
            return Array.from(hb.values())
          }
        }
        isLeaf(bb) {
          var ub;
          let hb;
          return hb = this.isDirected() ? this.successors(bb) : this.neighbors(bb), 0 === (null != (ub = null == hb ? void 0 : hb.length) ? ub : 0)
        }
        filterNodes(bb) {
          let ub = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          ub.setGraph(this.graph()), Object.entries(this._nodes).forEach((hb => {
            let [Bb, Ob] = hb;
            bb(Bb) && ub.setNode(Bb, Ob)
          })), Object.values(this._edgeObjs).forEach((bb => {
            ub.hasNode(bb.v) && ub.hasNode(bb.w) && ub.setEdge(bb, this.edge(bb))
          }));
          let hb = {},
            Bb = bb => {
              let Ob = this.parent(bb);
              return !Ob || ub.hasNode(Ob) ? (hb[bb] = Ob, Ob) : Ob in hb ? hb[Ob] : Bb(Ob)
            };
          return this._isCompound && ub.nodes().forEach((bb => ub.setParent(bb, Bb(bb)))), ub
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
        setPath(bb, ub) {
          return bb.reduce(((bb, hb) => (void 0 !== ub ? this.setEdge(bb, hb, ub) : this.setEdge(bb, hb), hb))), this
        }
        setEdge(bb, ub, hb, Bb) {
          let Ob, Gb, Ub, Lb, Yb = !1;
          "object" == typeof bb && null !== bb && "v" in bb ? (Ob = bb.v, Gb = bb.w, Ub = bb.name, 2 === arguments.length && (Lb = ub, Yb = !0)) : (Ob = bb, Gb = ub, Ub = Bb, arguments.length > 2 && (Lb = hb, Yb = !0)), Ob = "" + Ob, Gb = "" + Gb, void 0 !== Ub && (Ub = "" + Ub);
          let ab = Hb(this._isDirected, Ob, Gb, Ub);
          if (ab in this._edgeLabels) return Yb && (this._edgeLabels[ab] = Lb), this;
          if (void 0 !== Ub && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Ob), this.setNode(Gb), this._edgeLabels[ab] = Yb ? Lb : this._defaultEdgeLabelFn(Ob, Gb, Ub);
          let wb = function(bb, ub, hb, Bb) {
            let Ob = "" + ub,
              Gb = "" + hb;
            if (!bb && Ob > Gb) {
              let bb = Ob;
              Ob = Gb, Gb = bb
            }
            let Ub = {
              v: Ob,
              w: Gb
            };
            return Bb && (Ub.name = Bb), Ub
          }(this._isDirected, Ob, Gb, Ub);
          return Ob = wb.v, Gb = wb.w, Object.freeze(wb), this._edgeObjs[ab] = wb, Sb(this._preds[Gb], Ob), Sb(this._sucs[Ob], Gb), this._in[Gb][ab] = wb, this._out[Ob][ab] = wb, this._edgeCount++, this
        }
        edge(bb, ub, hb) {
          let Bb = 1 === arguments.length ? wb(this._isDirected, bb) : Hb(this._isDirected, bb, ub, hb);
          return this._edgeLabels[Bb]
        }
        edgeAsObj(bb, ub, hb) {
          let Bb = 1 === arguments.length ? this.edge(bb) : this.edge(bb, ub, hb);
          return "object" != typeof Bb || null === Bb ? {
            label: Bb
          } : Bb
        }
        hasEdge(bb, ub, hb) {
          return (1 === arguments.length ? wb(this._isDirected, bb) : Hb(this._isDirected, bb, ub, hb)) in this._edgeLabels
        }
        removeEdge(bb, ub, hb) {
          let Bb = 1 === arguments.length ? wb(this._isDirected, bb) : Hb(this._isDirected, bb, ub, hb),
            Ob = this._edgeObjs[Bb];
          if (Ob) {
            let bb = Ob.v,
              ub = Ob.w;
            delete this._edgeLabels[Bb], delete this._edgeObjs[Bb], ab(this._preds[ub], bb), ab(this._sucs[bb], ub), delete this._in[ub][Bb], delete this._out[bb][Bb], this._edgeCount--
          }
          return this
        }
        inEdges(bb, ub) {
          return this.isDirected() ? this.filterEdges(this._in[bb], bb, ub) : this.nodeEdges(bb, ub)
        }
        outEdges(bb, ub) {
          return this.isDirected() ? this.filterEdges(this._out[bb], bb, ub) : this.nodeEdges(bb, ub)
        }
        nodeEdges(bb, ub) {
          if (bb in this._nodes) return this.filterEdges({
            ...this._in[bb],
            ...this._out[bb]
          }, bb, ub)
        }
        _removeFromParentsChildList(bb) {
          delete this._children[this._parent[bb]][bb]
        }
        filterEdges(bb, ub, hb) {
          if (!bb) return;
          let Bb = Object.values(bb);
          return hb ? Bb.filter((bb => bb.v === ub && bb.w === hb || bb.v === hb && bb.w === ub)) : Bb
        }
      };

    function Sb(bb, ub) {
      bb[ub] ? bb[ub]++ : bb[ub] = 1
    }

    function ab(bb, ub) {
      void 0 !== bb[ub] && !--bb[ub] && delete bb[ub]
    }

    function Hb(bb, ub, hb, Bb) {
      let Ob = "" + ub,
        Gb = "" + hb;
      if (!bb && Ob > Gb) {
        let bb = Ob;
        Ob = Gb, Gb = bb
      }
      return Ob + "\x01" + Gb + "\x01" + (void 0 === Bb ? "\0" : Bb)
    }

    function wb(bb, ub) {
      return Hb(bb, ub.v, ub.w, ub.name)
    }

    function Zb(bb) {
      let ub = {
          options: {
            directed: bb.isDirected(),
            multigraph: bb.isMultigraph(),
            compound: bb.isCompound()
          },
          nodes: Xb(bb),
          edges: pb(bb)
        },
        hb = bb.graph();
      return void 0 !== hb && (ub.value = structuredClone(hb)), ub
    }

    function Xb(bb) {
      return bb.nodes().map((ub => {
        let hb = bb.node(ub),
          Bb = bb.parent(ub),
          Ob = {
            v: ub
          };
        return void 0 !== hb && (Ob.value = hb), void 0 !== Bb && (Ob.parent = Bb), Ob
      }))
    }

    function pb(bb) {
      return bb.edges().map((ub => {
        let hb = bb.edge(ub),
          Bb = {
            v: ub.v,
            w: ub.w
          };
        return void 0 !== ub.name && (Bb.name = ub.name), void 0 !== hb && (Bb.value = hb), Bb
      }))
    }

    function ob(bb) {
      let ub = new Yb(bb.options);
      return void 0 !== bb.value && ub.setGraph(bb.value), bb.nodes.forEach((bb => {
        ub.setNode(bb.v, bb.value), bb.parent && ub.setParent(bb.v, bb.parent)
      })), bb.edges.forEach((bb => {
        ub.setEdge({
          v: bb.v,
          w: bb.w,
          name: bb.name
        }, bb.value)
      })), ub
    }
    Lb({}, {
      read: () => ob,
      write: () => Zb
    });
    var Ab = {};
    Lb(Ab, {
      CycleException: () => gb,
      bellmanFord: () => Kb,
      components: () => Wb,
      dijkstra: () => rb,
      dijkstraAll: () => jb,
      findCycles: () => Db,
      floydWarshall: () => zb,
      isAcyclic: () => vb,
      postorder: () => Nb,
      preorder: () => sb,
      prim: () => Mb,
      shortestPaths: () => mb,
      tarjan: () => nb,
      topsort: () => ib
    });
    var lb = () => 1;

    function Kb(bb, ub, hb, Bb) {
      return function(bb, ub, hb, Bb) {
        let Ob, Gb = {},
          Ub = 0,
          Lb = bb.nodes(),
          Yb = function(bb) {
            let ub = Gb[bb.v],
              Bb = Gb[bb.w];
            if (!ub || !Bb) return;
            let Ub = hb(bb);
            ub.distance + Ub < Bb.distance && (Gb[bb.w] = {
              distance: ub.distance + Ub,
              predecessor: bb.v
            }, Ob = !0)
          },
          Sb = function() {
            Lb.forEach((function(bb) {
              Bb(bb).forEach((function(ub) {
                let hb = ub.v === bb ? ub.v : ub.w,
                  Bb = hb === ub.v ? ub.w : ub.v;
                Yb({
                  v: hb,
                  w: Bb
                })
              }))
            }))
          };
        Lb.forEach((function(bb) {
          let hb = bb === ub ? 0 : Number.POSITIVE_INFINITY;
          Gb[bb] = {
            distance: hb,
            predecessor: ""
          }
        }));
        let ab = Lb.length;
        for (let Hb = 1; Hb < ab && (Ob = !1, Ub++, Sb(), Ob); Hb++);
        if (Ub === ab - 1 && (Ob = !1, Sb(), Ob)) throw new Error("The graph contains a negative weight cycle");
        return Gb
      }(bb, String(ub), hb || lb, Bb || function(ub) {
        var hb;
        return null != (hb = bb.outEdges(ub)) ? hb : []
      })
    }

    function Wb(bb) {
      let ub, hb = {},
        Bb = [];

      function Ob(Bb) {
        var Gb, Ub;
        Bb in hb || (hb[Bb] = !0, ub.push(Bb), null == (Gb = bb.successors(Bb)) || Gb.forEach(Ob), null == (Ub = bb.predecessors(Bb)) || Ub.forEach(Ob))
      }
      return bb.nodes().forEach((function(bb) {
        ub = [], Ob(bb), ub.length && Bb.push(ub)
      })), Bb
    }
    var Cb = class {
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
          let ub = this._keyIndices[bb];
          if (void 0 !== ub) return this._arr[ub].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(bb, ub) {
          let hb = this._keyIndices,
            Bb = String(bb);
          if (!(Bb in hb)) {
            let bb = this._arr,
              Ob = bb.length;
            return hb[Bb] = Ob, bb.push({
              key: Bb,
              priority: ub
            }), this._decrease(Ob), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let bb = this._arr.pop();
          return delete this._keyIndices[bb.key], this._heapify(0), bb.key
        }
        decrease(bb, ub) {
          let hb = this._keyIndices[bb];
          if (void 0 === hb) throw new Error(`Key not found: ${bb}`);
          let Bb = this._arr[hb].priority;
          if (ub > Bb) throw new Error(`New priority is greater than current priority. Key: ${bb} Old: ${Bb} New: ${ub}`);
          this._arr[hb].priority = ub, this._decrease(hb)
        }
        _heapify(bb) {
          let ub = this._arr,
            hb = 2 * bb,
            Bb = hb + 1,
            Ob = bb;
          hb < ub.length && (Ob = ub[hb].priority < ub[Ob].priority ? hb : Ob, Bb < ub.length && (Ob = ub[Bb].priority < ub[Ob].priority ? Bb : Ob), Ob !== bb && (this._swap(bb, Ob), this._heapify(Ob)))
        }
        _decrease(bb) {
          let ub, hb = this._arr,
            Bb = hb[bb].priority;
          for (; 0 !== bb && (ub = bb >> 1, !(hb[ub].priority < Bb));) this._swap(bb, ub), bb = ub
        }
        _swap(bb, ub) {
          let hb = this._arr,
            Bb = this._keyIndices,
            Ob = hb[bb],
            Gb = hb[ub];
          hb[bb] = Gb, hb[ub] = Ob, Bb[Gb.key] = bb, Bb[Ob.key] = ub
        }
      },
      db = () => 1;

    function rb(bb, ub, hb, Bb) {
      return function(bb, ub, hb, Bb) {
        let Ob, Gb, Ub = {},
          Lb = new Cb,
          Yb = function(bb) {
            let ub = bb.v !== Ob ? bb.v : bb.w,
              Bb = Ub[ub];
            if (!Bb) return;
            let Yb = hb(bb),
              Sb = Gb.distance + Yb;
            if (Yb < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + bb + " Weight: " + Yb);
            Sb < Bb.distance && (Bb.distance = Sb, Bb.predecessor = Ob, Lb.decrease(ub, Sb))
          };
        for (bb.nodes().forEach((function(bb) {
            let hb = bb === ub ? 0 : Number.POSITIVE_INFINITY;
            Ub[bb] = {
              distance: hb,
              predecessor: ""
            }, Lb.add(bb, hb)
          })); Lb.size() > 0;) {
          Ob = Lb.removeMin();
          let bb = Ub[Ob];
          if (!bb || bb.distance === Number.POSITIVE_INFINITY) break;
          Gb = bb, Bb(Ob).forEach(Yb)
        }
        return Ub
      }(bb, String(ub), hb || db, Bb || function(ub) {
        var hb;
        return null != (hb = bb.outEdges(ub)) ? hb : []
      })
    }

    function jb(bb, ub, hb) {
      return bb.nodes().reduce((function(Bb, Ob) {
        return Bb[Ob] = rb(bb, Ob, ub, hb), Bb
      }), {})
    }

    function nb(bb) {
      let ub = 0,
        hb = [],
        Bb = {},
        Ob = [];

      function Gb(Ub) {
        var Lb;
        let Yb = Bb[Ub] = {
          onStack: !0,
          lowlink: ub,
          index: ub++
        };
        if (hb.push(Ub), null == (Lb = bb.successors(Ub)) || Lb.forEach((function(bb) {
            if (bb in Bb) {
              let ub = Bb[bb];
              null != ub && ub.onStack && (Yb.lowlink = Math.min(Yb.lowlink, ub.index))
            } else {
              Gb(bb);
              let ub = Bb[bb];
              ub && (Yb.lowlink = Math.min(Yb.lowlink, ub.lowlink))
            }
          })), Yb.lowlink === Yb.index) {
          let bb, ub = [];
          do {
            bb = hb.pop();
            let Ob = Bb[bb];
            Ob && (Ob.onStack = !1), ub.push(bb)
          } while (Ub !== bb);
          Ob.push(ub)
        }
      }
      return bb.nodes().forEach((function(bb) {
        bb in Bb || Gb(bb)
      })), Ob
    }

    function Db(bb) {
      return nb(bb).filter((function(ub) {
        var hb;
        let Bb = ub[0];
        return !!Bb && (ub.length > 1 || 1 === ub.length && (null != (hb = bb.outEdges(Bb, Bb)) ? hb : []).length > 0)
      }))
    }
    var xb = () => 1;

    function zb(bb, ub, hb) {
      return function(bb, ub, hb) {
        let Bb = {},
          Ob = bb.nodes();
        return Ob.forEach((function(bb) {
          let Gb = {};
          Bb[bb] = Gb, Gb[bb] = {
            distance: 0,
            predecessor: ""
          }, Ob.forEach((function(ub) {
            bb !== ub && (Gb[ub] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), hb(bb).forEach((function(hb) {
            let Bb = hb.v === bb ? hb.w : hb.v,
              Ob = ub(hb);
            Gb[Bb] = {
              distance: Ob,
              predecessor: bb
            }
          }))
        })), Ob.forEach((function(bb) {
          let ub = Bb[bb];
          ub && Ob.forEach((function(hb) {
            let Gb = Bb[hb];
            Gb && Ob.forEach((function(hb) {
              let Bb = Gb[bb],
                Ob = ub[hb],
                Ub = Gb[hb];
              if (Bb && Ob && Ub) {
                let bb = Bb.distance + Ob.distance;
                bb < Ub.distance && (Ub.distance = bb, Ub.predecessor = Ob.predecessor)
              }
            }))
          }))
        })), Bb
      }(bb, ub || xb, hb || function(ub) {
        var hb;
        return null != (hb = bb.outEdges(ub)) ? hb : []
      })
    }
    var gb = class extends Error {
      constructor(bb) {
        super(bb), this.name = "CycleException"
      }
    };

    function ib(bb) {
      let ub = {},
        hb = {},
        Bb = [];
      if (bb.sinks().forEach((function Ob(Gb) {
          var Ub;
          if (Gb in hb) throw new gb;
          Gb in ub || (hb[Gb] = !0, ub[Gb] = !0, null == (Ub = bb.predecessors(Gb)) || Ub.forEach(Ob), delete hb[Gb], Bb.push(Gb))
        })), Object.keys(ub).length !== bb.nodeCount()) throw new gb;
      return Bb
    }

    function vb(bb) {
      try {
        ib(bb)
      } catch (ub) {
        if (ub instanceof gb) return !1;
        throw ub
      }
      return !0
    }

    function tb(bb, ub, hb, Bb, Ob) {
      Array.isArray(ub) || (ub = [ub]);
      let Gb = ub => {
          var hb;
          return null != (hb = bb.isDirected() ? bb.successors(ub) : bb.neighbors(ub)) ? hb : []
        },
        Ub = {};
      return ub.forEach((function(ub) {
        if (!bb.hasNode(ub)) throw new Error("Graph does not have node: " + ub);
        Ob = Jb(bb, ub, "post" === hb, Ub, Gb, Bb, Ob)
      })), Ob
    }

    function Jb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return ub in Bb || (Bb[ub] = !0, hb || (Ub = Gb(Ub, ub)), Ob(ub).forEach((function(ub) {
        Ub = Jb(bb, ub, hb, Bb, Ob, Gb, Ub)
      })), hb && (Ub = Gb(Ub, ub))), Ub
    }

    function eb(bb, ub, hb) {
      return tb(bb, ub, hb, (function(bb, ub) {
        return bb.push(ub), bb
      }), [])
    }

    function Nb(bb, ub) {
      return eb(bb, ub, "post")
    }

    function sb(bb, ub) {
      return eb(bb, ub, "pre")
    }

    function Mb(bb, ub) {
      var hb;
      let Bb, Ob = new Yb,
        Gb = {},
        Ub = new Cb;

      function Lb(bb) {
        let hb = bb.v === Bb ? bb.w : bb.v,
          Ob = Ub.priority(hb);
        if (void 0 !== Ob) {
          let Lb = ub(bb);
          Lb < Ob && (Gb[hb] = Bb, Ub.decrease(hb, Lb))
        }
      }
      if (0 === bb.nodeCount()) return Ob;
      bb.nodes().forEach((function(bb) {
        Ub.add(bb, Number.POSITIVE_INFINITY), Ob.setNode(bb)
      }));
      let Sb = bb.nodes()[0];
      void 0 !== Sb && Ub.decrease(Sb, 0);
      let ab = !1;
      for (; Ub.size() > 0;) {
        if (Bb = Ub.removeMin(), Bb in Gb) Ob.setEdge(Bb, Gb[Bb]);
        else {
          if (ab) throw new Error("Input graph is not connected: " + bb);
          ab = !0
        }
        null == (hb = bb.nodeEdges(Bb)) || hb.forEach(Lb)
      }
      return Ob
    }

    function mb(bb, ub, hb, Bb) {
      return function(bb, ub, hb, Bb) {
        if (void 0 === hb) return rb(bb, ub, hb, Bb);
        let Ob = !1,
          Gb = bb.nodes();
        for (let Ub = 0; Ub < Gb.length; Ub++) {
          let Lb = Gb[Ub];
          if (void 0 === Lb) continue;
          let Yb = Bb(Lb);
          for (let bb = 0; bb < Yb.length; bb++) {
            let ub = Yb[bb];
            if (!ub) continue;
            let Bb = ub.v === Lb ? ub.v : ub.w;
            hb({
              v: Bb,
              w: Bb === ub.v ? ub.w : ub.v
            }) < 0 && (Ob = !0)
          }
          if (Ob) return Kb(bb, ub, hb, Bb)
        }
        return rb(bb, ub, hb, Bb)
      }(bb, ub, hb, null != Bb ? Bb : ub => {
        var hb;
        return null != (hb = bb.outEdges(ub)) ? hb : []
      })
    }
    var Ib = Yb;

    function Pb(bb, ub, hb, Bb) {
      let Ob = Bb;
      for (; bb.hasNode(Ob);) Ob = Rb(Bb);
      return hb.dummy = ub, bb.setNode(Ob, hb), Ob
    }

    function qb(bb) {
      let ub = new Ib({
        multigraph: bb.isMultigraph()
      }).setGraph(bb.graph());
      return bb.nodes().forEach((hb => {
        bb.children(hb).length || ub.setNode(hb, bb.node(hb))
      })), bb.edges().forEach((hb => {
        ub.setEdge(hb, bb.edge(hb))
      })), ub
    }

    function Eb(bb, ub) {
      let hb, Bb, Ob = bb.x,
        Gb = bb.y,
        Ub = ub.x - Ob,
        Lb = ub.y - Gb,
        Yb = bb.width / 2,
        Sb = bb.height / 2;
      if (!Ub && !Lb) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Lb) * Yb > Math.abs(Ub) * Sb ? (Lb < 0 && (Sb = -Sb), hb = Sb * Ub / Lb, Bb = Sb) : (Ub < 0 && (Yb = -Yb), hb = Yb, Bb = Yb * Lb / Ub), {
        x: Ob + hb,
        y: Gb + Bb
      }
    }

    function yb(bb) {
      let ub = bu(kb(bb) + 1).map((() => []));
      return bb.nodes().forEach((hb => {
        let Bb = bb.node(hb),
          Ob = Bb.rank;
        void 0 !== Ob && (ub[Ob] || (ub[Ob] = []), ub[Ob][Bb.order] = hb)
      })), ub
    }

    function Vb(bb, ub, hb, Bb) {
      let Ob = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Ob.rank = hb, Ob.order = Bb), Pb(bb, "border", Ob, ub)
    }
    var Fb = 65535;

    function fb(bb, ub) {
      if (ub.length > Fb) {
        let hb = function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fb,
            hb = [];
          for (let Bb = 0; Bb < bb.length; Bb += ub) {
            let Ob = bb.slice(Bb, Bb + ub);
            hb.push(Ob)
          }
          return hb
        }(ub);
        return bb(...hb.map((ub => bb(...ub))))
      }
      return bb(...ub)
    }

    function kb(bb) {
      let ub = bb.nodes().map((ub => {
        let hb = bb.node(ub).rank;
        return void 0 === hb ? Number.MIN_VALUE : hb
      }));
      return fb(Math.max, ub)
    }

    function Tb(bb, ub) {
      let hb = Date.now();
      try {
        return ub()
      } finally {
        console.log(bb + " time: " + (Date.now() - hb) + "ms")
      }
    }

    function cb(bb, ub) {
      return ub()
    }
    var Qb = 0;

    function Rb(bb) {
      return bb + "" + ++Qb
    }

    function bu(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == ub && (ub = bb, bb = 0);
      let Bb = bb => bb < ub;
      hb < 0 && (Bb = bb => ub < bb);
      let Ob = [];
      for (let Gb = bb; Bb(Gb); Gb += hb) Ob.push(Gb);
      return Ob
    }

    function uu(bb, ub) {
      let hb = {};
      for (let Bb of ub) void 0 !== bb[Bb] && (hb[Bb] = bb[Bb]);
      return hb
    }

    function hu(bb, ub) {
      let hb;
      return hb = "string" == typeof ub ? bb => bb[ub] : ub, Object.entries(bb).reduce(((bb, ub) => {
        let [Bb, Ob] = ub;
        return bb[Bb] = hb(Ob, Bb), bb
      }), {})
    }
    var Bu = "\0";

    function Ou(bb, ub, hb) {
      var Bb, Ob, Gb, Ub, Lb, Yb;
      if (!(bb && ub && hb && "edge" === ub.dummy && "edge" === hb.dummy && ub.edgeObj && hb.edgeObj && bb[ub.edgeObj.v] && bb[hb.edgeObj.v] && bb[ub.edgeObj.w] && bb[hb.edgeObj.w])) return 0;
      let Sb = !0;
      ub.edgeObj.w === hb.edgeObj.w && (Sb = !1);
      let ab = Sb ? null != (Ob = null == (Bb = bb[ub.edgeObj.v]) ? void 0 : Bb.rank) ? Ob : NaN : null != (Ub = null == (Gb = bb[ub.edgeObj.w]) ? void 0 : Gb.rank) ? Ub : NaN,
        Hb = Object.entries(bb).find((bb => {
          var hb, Bb;
          return (null == (hb = bb[1].edgeObj) ? void 0 : hb.v) === ub.edgeObj.v && (null == (Bb = bb[1].edgeObj) ? void 0 : Bb.w) === ub.edgeObj.w && bb[1].rank === ab
        })),
        wb = Object.entries(bb).find((bb => {
          var ub, Bb;
          return (null == (ub = bb[1].edgeObj) ? void 0 : ub.v) === hb.edgeObj.v && (null == (Bb = bb[1].edgeObj) ? void 0 : Bb.w) === hb.edgeObj.w && bb[1].rank === ab
        }));
      if (!Hb || !wb) return 0;
      let Zb = null != (Lb = Hb[1].order) ? Lb : NaN,
        Xb = null != (Yb = wb[1].order) ? Yb : NaN;
      return isNaN(Zb - Xb) ? 0 : Zb - Xb
    }
    var Gu = "3.1.1";

    function Uu(bb) {
      bb._prev._next = bb._next, bb._next._prev = bb._prev, delete bb._next, delete bb._prev
    }

    function Lu(bb, ub) {
      if ("_next" !== bb && "_prev" !== bb) return ub
    }
    var Yu = class {
        constructor() {
          Ob(this, "_sentinel");
          let bb = {};
          bb._next = bb._prev = bb, this._sentinel = bb
        }
        dequeue() {
          let bb = this._sentinel,
            ub = bb._prev;
          if (ub !== bb) return Uu(ub), ub
        }
        enqueue(bb) {
          let ub = this._sentinel;
          bb._prev && bb._next && Uu(bb), bb._next = ub._next, ub._next._prev = bb, ub._next = bb, bb._prev = ub
        }
        toString() {
          let bb = [],
            ub = this._sentinel,
            hb = ub._prev;
          for (; hb !== ub;) bb.push(JSON.stringify(hb, Lu)), hb = hb._prev;
          return "[" + bb.join(", ") + "]"
        }
      },
      Su = () => 1;

    function au(bb, ub) {
      if (bb.nodeCount() <= 1) return [];
      let hb = function(bb, ub) {
        let hb = new Ib,
          Bb = 0,
          Ob = 0;
        bb.nodes().forEach((bb => {
          hb.setNode(bb, {
            v: bb,
            in: 0,
            out: 0
          })
        })), bb.edges().forEach((bb => {
          let Gb = hb.edge(bb.v, bb.w) || 0,
            Ub = ub(bb),
            Lb = Gb + Ub;
          hb.setEdge(bb.v, bb.w, Lb);
          let Yb = hb.node(bb.v),
            Sb = hb.node(bb.w);
          Ob = Math.max(Ob, Yb.out += Ub), Bb = Math.max(Bb, Sb.in += Ub)
        }));
        let Gb = function(bb) {
            let ub = [];
            for (let hb = 0; hb < bb; hb++) ub.push(hb);
            return ub
          }(Ob + Bb + 3).map((() => new Yu)),
          Ub = Bb + 1;
        return hb.nodes().forEach((bb => {
          wu(Gb, Ub, hb.node(bb))
        })), {
          graph: hb,
          buckets: Gb,
          zeroIdx: Ub
        }
      }(bb, ub || Su);
      return function(bb, ub, hb) {
        var Bb;
        let Ob, Gb = [],
          Ub = ub[ub.length - 1],
          Lb = ub[0];
        for (; bb.nodeCount();) {
          for (; Ob = Lb.dequeue();) Hu(bb, ub, hb, Ob);
          for (; Ob = Ub.dequeue();) Hu(bb, ub, hb, Ob);
          if (bb.nodeCount())
            for (let Ub = ub.length - 2; Ub > 0; --Ub)
              if (Ob = null == (Bb = ub[Ub]) ? void 0 : Bb.dequeue(), Ob) {
                Gb = Gb.concat(Hu(bb, ub, hb, Ob, !0) || []);
                break
              }
        }
        return Gb
      }(hb.graph, hb.buckets, hb.zeroIdx).flatMap((ub => bb.outEdges(ub.v, ub.w) || []))
    }

    function Hu(bb, ub, hb, Bb, Ob) {
      let Gb = [],
        Ub = Ob ? Gb : void 0;
      return (bb.inEdges(Bb.v) || []).forEach((Bb => {
        let Ub = bb.edge(Bb),
          Lb = bb.node(Bb.v);
        Ob && Gb.push({
          v: Bb.v,
          w: Bb.w
        }), Lb.out -= Ub, wu(ub, hb, Lb)
      })), (bb.outEdges(Bb.v) || []).forEach((Bb => {
        let Ob = bb.edge(Bb),
          Gb = Bb.w,
          Ub = bb.node(Gb);
        Ub.in -= Ob, wu(ub, hb, Ub)
      })), bb.removeNode(Bb.v), Ub
    }

    function wu(bb, ub, hb) {
      var Bb, Ob, Gb;
      hb.out ? hb.in ? null == (Gb = bb[hb.out - hb.in + ub]) || Gb.enqueue(hb) : null == (Ob = bb[bb.length - 1]) || Ob.enqueue(hb) : null == (Bb = bb[0]) || Bb.enqueue(hb)
    }

    function Zu(bb, ub) {
      var hb;
      ("greedy" === bb.graph().acyclicer ? au(bb, (hb = bb, bb => hb.edge(bb).weight)) : function(bb, ub) {
        let hb = [],
          Bb = {},
          Ob = {};

        function Gb(ub) {
          Object.hasOwn(Ob, ub) || (Ob[ub] = !0, Bb[ub] = !0, bb.outEdges(ub).forEach((bb => {
            Object.hasOwn(Bb, bb.w) ? hb.push(bb) : Gb(bb.w)
          })), delete Bb[ub])
        }

        function Ub(Gb) {
          var Lb;
          Object.hasOwn(Ob, Gb) || (Ob[Gb] = !0, Bb[Gb] = !0, null == (Lb = bb.outEdges(Gb)) || Lb.forEach((Ob => {
            var Lb, Yb;
            Object.hasOwn(Bb, Ob.w) || (null == (Lb = ub.node(Gb)) ? void 0 : Lb.rank) > (null == (Yb = ub.node(Ob.w)) ? void 0 : Yb.rank) && function(bb, ub, hb) {
              let Bb = new Set;

              function Ob(ub) {
                var Gb;
                if (bb.sources().includes(ub)) return !0;
                Bb.add(ub);
                for (let Ub of null != (Gb = bb.inEdges(ub)) ? Gb : [])
                  if ((Ub.v !== hb.v || Ub.w !== hb.w) && !Bb.has(Ub.v) && Ob(Ub.v)) return !0;
                return !1
              }
              return Ob(ub)
            }(bb, Ob.w, Ob) ? hb.push(Ob) : Ub(Ob.w)
          })), delete Bb[Gb])
        }
        let Lb = Gb;
        return ub && "function" == typeof ub.node && (Lb = Ub), bb.sources().forEach(Lb), bb.nodes().forEach(Lb), hb
      }(bb, null != ub ? ub : null)).forEach((ub => {
        let hb = bb.edge(ub);
        bb.removeEdge(ub), hb.forwardName = ub.name, hb.reversed = !0, bb.setEdge(ub.w, ub.v, hb, Rb("rev"))
      }))
    }

    function Xu(bb) {
      bb.graph().dummyChains = [], bb.edges().forEach((ub => function(bb, ub) {
        let hb, Bb, Ob, Gb = ub.v,
          Ub = bb.node(Gb).rank,
          Lb = ub.w,
          Yb = bb.node(Lb).rank,
          Sb = ub.name,
          ab = bb.edge(ub),
          Hb = ab.labelRank;
        if (Yb === Ub + 1) return;
        for (bb.removeEdge(ub), Ob = 0, ++Ub; Ub < Yb; ++Ob, ++Ub) ab.points = [], Bb = {
          width: 0,
          height: 0,
          edgeLabel: ab,
          edgeObj: ub,
          rank: Ub
        }, hb = Pb(bb, "edge", Bb, "_d"), Ub === Hb && (Bb.width = ab.width, Bb.height = ab.height, Bb.dummy = "edge-label", Bb.labelpos = ab.labelpos), bb.setEdge(Gb, hb, {
          weight: ab.weight
        }, Sb), 0 === Ob && bb.graph().dummyChains.push(hb), Gb = hb;
        bb.setEdge(Gb, Lb, {
          weight: ab.weight
        }, Sb)
      }(bb, ub)))
    }

    function pu(bb) {
      let ub = {};
      bb.sources().forEach((function hb(Bb) {
        let Ob = bb.node(Bb);
        if (Object.hasOwn(ub, Bb)) return Ob.rank;
        ub[Bb] = !0;
        let Gb = bb.outEdges(Bb),
          Ub = Gb ? Gb.map((ub => null == ub ? Number.POSITIVE_INFINITY : hb(ub.w) - bb.edge(ub).minlen)) : [],
          Lb = fb(Math.min, Ub);
        return Lb === Number.POSITIVE_INFINITY && (Lb = 0), Ob.rank = Lb
      }))
    }

    function ou(bb, ub) {
      return bb.node(ub.w).rank - bb.node(ub.v).rank - bb.edge(ub).minlen
    }
    var Au = function(bb) {
      let ub = new Ib({
          directed: !1
        }),
        hb = bb.nodes();
      if (0 === hb.length) throw new Error("Graph must have at least one node");
      let Bb, Ob, Gb = hb[0],
        Ub = bb.nodeCount();
      for (ub.setNode(Gb, {}); lu(ub, bb) < Ub && (Bb = Ku(ub, bb), Bb);) Ob = ub.hasNode(Bb.v) ? ou(bb, Bb) : -ou(bb, Bb), Wu(ub, bb, Ob);
      return ub
    };

    function lu(bb, ub) {
      return bb.nodes().forEach((function hb(Bb) {
        let Ob = ub.nodeEdges(Bb);
        Ob && Ob.forEach((Ob => {
          let Gb = Ob.v,
            Ub = Bb === Gb ? Ob.w : Gb;
          !bb.hasNode(Ub) && !ou(ub, Ob) && (bb.setNode(Ub, {}), bb.setEdge(Bb, Ub, {}), hb(Ub))
        }))
      })), bb.nodeCount()
    }

    function Ku(bb, ub) {
      return ub.edges().reduce(((hb, Bb) => {
        let Ob = Number.POSITIVE_INFINITY;
        return bb.hasNode(Bb.v) !== bb.hasNode(Bb.w) && (Ob = ou(ub, Bb)), Ob < hb[0] ? [Ob, Bb] : hb
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Wu(bb, ub, hb) {
      bb.nodes().forEach((bb => ub.node(bb).rank += hb))
    }
    var {
      preorder: Cu,
      postorder: du
    } = Ab, ru = ju;

    function ju(bb) {
      bb = function(bb) {
        let ub = (new Ib).setGraph(bb.graph());
        return bb.nodes().forEach((hb => ub.setNode(hb, bb.node(hb)))), bb.edges().forEach((hb => {
          let Bb = ub.edge(hb.v, hb.w) || {
              weight: 0,
              minlen: 1
            },
            Ob = bb.edge(hb);
          ub.setEdge(hb.v, hb.w, {
            weight: Bb.weight + Ob.weight,
            minlen: Math.max(Bb.minlen, Ob.minlen)
          })
        })), ub
      }(bb), pu(bb);
      let ub, hb, Bb = Au(bb);
      for (xu(Bb), nu(Bb, bb); ub = gu(Bb);) hb = iu(Bb, bb, ub), vu(Bb, bb, ub, hb)
    }

    function nu(bb, ub) {
      let hb = du(bb, bb.nodes());
      hb = hb.slice(0, hb.length - 1), hb.forEach((hb => function(bb, ub, hb) {
        let Bb = bb.node(hb).parent,
          Ob = bb.edge(hb, Bb);
        Ob.cutvalue = Du(bb, ub, hb)
      }(bb, ub, hb)))
    }

    function Du(bb, ub, hb) {
      let Bb = bb.node(hb).parent,
        Ob = !0,
        Gb = ub.edge(hb, Bb),
        Ub = 0;
      Gb || (Ob = !1, Gb = ub.edge(Bb, hb)), Ub = Gb.weight;
      let Lb = ub.nodeEdges(hb);
      return Lb && Lb.forEach((Gb => {
        let Lb = Gb.v === hb,
          Yb = Lb ? Gb.w : Gb.v;
        if (Yb !== Bb) {
          let Bb = Lb === Ob,
            Sb = ub.edge(Gb).weight;
          if (Ub += Bb ? Sb : -Sb, function(bb, ub, hb) {
              return bb.hasEdge(ub, hb)
            }(bb, hb, Yb)) {
            let ub = bb.edge(hb, Yb).cutvalue;
            Ub += Bb ? -ub : ub
          }
        }
      })), Ub
    }

    function xu(bb, ub) {
      arguments.length < 2 && (ub = bb.nodes()[0]), zu(bb, {}, 1, ub)
    }

    function zu(bb, ub, hb, Bb, Ob) {
      let Gb = hb,
        Ub = bb.node(Bb);
      ub[Bb] = !0;
      let Lb = bb.neighbors(Bb);
      return Lb && Lb.forEach((Ob => {
        Object.hasOwn(ub, Ob) || (hb = zu(bb, ub, hb, Ob, Bb))
      })), Ub.low = Gb, Ub.lim = hb++, Ob ? Ub.parent = Ob : delete Ub.parent, hb
    }

    function gu(bb) {
      return bb.edges().find((ub => bb.edge(ub).cutvalue < 0))
    }

    function iu(bb, ub, hb) {
      let Bb = hb.v,
        Ob = hb.w;
      ub.hasEdge(Bb, Ob) || (Bb = hb.w, Ob = hb.v);
      let Gb = bb.node(Bb),
        Ub = bb.node(Ob),
        Lb = Gb,
        Yb = !1;
      return Gb.lim > Ub.lim && (Lb = Ub, Yb = !0), ub.edges().filter((ub => Yb === tu(bb, bb.node(ub.v), Lb) && Yb !== tu(bb, bb.node(ub.w), Lb))).reduce(((bb, hb) => ou(ub, hb) < ou(ub, bb) ? hb : bb))
    }

    function vu(bb, ub, hb, Bb) {
      let Ob = hb.v,
        Gb = hb.w;
      bb.removeEdge(Ob, Gb), bb.setEdge(Bb.v, Bb.w, {}), xu(bb), nu(bb, ub),
        function(bb, ub) {
          let hb = bb.nodes().find((ub => !bb.node(ub).parent));
          if (!hb) return;
          let Bb = Cu(bb, [hb]);
          Bb = Bb.slice(1), Bb.forEach((hb => {
            let Bb = bb.node(hb).parent,
              Ob = ub.edge(hb, Bb),
              Gb = !1;
            Ob || (Ob = ub.edge(Bb, hb), Gb = !0), ub.node(hb).rank = ub.node(Bb).rank + (Gb ? Ob.minlen : -Ob.minlen)
          }))
        }(bb, ub)
    }

    function tu(bb, ub, hb) {
      return hb.low <= ub.lim && ub.lim <= hb.lim
    }
    ju.initLowLimValues = xu, ju.initCutValues = nu, ju.calcCutValue = Du, ju.leaveEdge = gu, ju.enterEdge = iu, ju.exchangeEdges = vu;
    var Ju = function(bb) {
      let ub = bb.graph().ranker;
      if ("function" == typeof ub) return ub(bb);
      switch (ub) {
        case "network-simplex":
        default:
          Nu(bb);
          break;
        case "tight-tree":
          ! function(bb) {
            pu(bb), Au(bb)
          }(bb);
          break;
        case "longest-path":
          eu(bb);
        case "none":
      }
    };
    var eu = pu;

    function Nu(bb) {
      ru(bb)
    }
    var su = function(bb) {
      let ub = function(bb) {
          let ub = {},
            hb = 0;

          function Bb(Ob) {
            let Gb = hb;
            bb.children(Ob).forEach(Bb), ub[Ob] = {
              low: Gb,
              lim: hb++
            }
          }
          return bb.children(Bu).forEach(Bb), ub
        }(bb),
        hb = bb.graph();
      if (!Array.isArray(hb.dummyChains)) return;
      hb.dummyChains.forEach((hb => {
        let Bb = bb.node(hb),
          Ob = Bb.edgeObj,
          Gb = function(bb, ub, hb, Bb) {
            let Ob, Gb = [],
              Ub = [],
              Lb = Math.min(ub[hb].low, ub[Bb].low),
              Yb = Math.max(ub[hb].lim, ub[Bb].lim);
            Ob = hb;
            do {
              Ob = bb.parent(Ob), Gb.push(Ob)
            } while (Ob && (ub[Ob].low > Lb || Yb > ub[Ob].lim));
            let Sb = Ob,
              ab = Bb;
            for (;
              (ab = bb.parent(ab)) !== Sb;) Ub.push(ab);
            return {
              path: Gb.concat(Ub.reverse()),
              lca: Sb
            }
          }(bb, ub, Ob.v, Ob.w),
          Ub = Gb.path,
          Lb = Gb.lca,
          Yb = 0,
          Sb = Ub[Yb],
          ab = !0;
        for (; hb !== Ob.w;) {
          if (Bb = bb.node(hb), ab) {
            for (;
              (Sb = Ub[Yb]) !== Lb && bb.node(Sb).maxRank < Bb.rank;) Yb++;
            Sb === Lb && (ab = !1)
          }
          if (!ab) {
            for (; Yb < Ub.length - 1 && bb.node(Ub[Yb + 1]).minRank <= Bb.rank;) Yb++;
            Sb = Ub[Yb]
          }
          void 0 !== Sb && bb.setParent(hb, Sb), hb = bb.successors(hb)[0]
        }
      }))
    };

    function Mu(bb) {
      let ub = Pb(bb, "root", {}, "_root"),
        hb = function(bb) {
          let ub = {};

          function hb(Bb, Ob) {
            let Gb = bb.children(Bb);
            Gb && Gb.length && Gb.forEach((bb => hb(bb, Ob + 1))), ub[Bb] = Ob
          }
          return bb.children(Bu).forEach((bb => hb(bb, 1))), ub
        }(bb),
        Bb = Object.values(hb),
        Ob = fb(Math.max, Bb) - 1,
        Gb = 2 * Ob + 1;
      bb.graph().nestingRoot = ub, bb.edges().forEach((ub => bb.edge(ub).minlen *= Gb));
      let Ub = function(bb) {
        return bb.edges().reduce(((ub, hb) => ub + bb.edge(hb).weight), 0)
      }(bb) + 1;
      bb.children(Bu).forEach((Bb => {
        mu(bb, ub, Gb, Ub, Ob, hb, Bb)
      })), bb.graph().nodeRankFactor = Gb
    }

    function mu(bb, ub, hb, Bb, Ob, Gb, Ub) {
      var Lb;
      let Yb = bb.children(Ub);
      if (!Yb.length) return void(Ub !== ub && bb.setEdge(ub, Ub, {
        weight: 0,
        minlen: hb
      }));
      let Sb = Vb(bb, "_bt"),
        ab = Vb(bb, "_bb"),
        Hb = bb.node(Ub);
      bb.setParent(Sb, Ub), Hb.borderTop = Sb, bb.setParent(ab, Ub), Hb.borderBottom = ab, Yb.forEach((Lb => {
        var Yb;
        mu(bb, ub, hb, Bb, Ob, Gb, Lb);
        let Hb = bb.node(Lb),
          wb = Hb.borderTop ? Hb.borderTop : Lb,
          Zb = Hb.borderBottom ? Hb.borderBottom : Lb,
          Xb = Hb.borderTop ? Bb : 2 * Bb,
          pb = wb !== Zb ? 1 : Ob - (null != (Yb = Gb[Ub]) ? Yb : 0) + 1;
        bb.setEdge(Sb, wb, {
          weight: Xb,
          minlen: pb,
          nestingEdge: !0
        }), bb.setEdge(Zb, ab, {
          weight: Xb,
          minlen: pb,
          nestingEdge: !0
        })
      })), bb.parent(Ub) || bb.setEdge(ub, Sb, {
        weight: 0,
        minlen: Ob + (null != (Lb = Gb[Ub]) ? Lb : 0)
      })
    }
    var Iu = function(bb) {
      bb.children(Bu).forEach((function ub(hb) {
        let Bb = bb.children(hb),
          Ob = bb.node(hb);
        if (Bb.length && Bb.forEach(ub), Ob && Object.hasOwn(Ob, "minRank")) {
          Ob.borderLeft = [], Ob.borderRight = [];
          for (let ub = Ob.minRank, Bb = Ob.maxRank + 1; ub < Bb; ++ub) Pu(bb, "borderLeft", "_bl", hb, Ob, ub), Pu(bb, "borderRight", "_br", hb, Ob, ub)
        }
      }))
    };

    function Pu(bb, ub, hb, Bb, Ob, Gb) {
      let Ub = {
          width: 0,
          height: 0,
          rank: Gb,
          borderType: ub
        },
        Lb = Ob[ub][Gb - 1],
        Yb = Pb(bb, "border", Ub, hb);
      Ob[ub][Gb] = Yb, bb.setParent(Yb, Bb), Lb && bb.setEdge(Lb, Yb, {
        weight: 1
      })
    }

    function qu(bb) {
      var ub;
      let hb = null == (ub = bb.graph().rankdir) ? void 0 : ub.toLowerCase();
      ("bt" === hb || "rl" === hb) && function(bb) {
        bb.nodes().forEach((ub => Vu(bb.node(ub)))), bb.edges().forEach((ub => {
          var hb;
          let Bb = bb.edge(ub);
          null == (hb = Bb.points) || hb.forEach(Vu), Object.hasOwn(Bb, "y") && Vu(Bb)
        }))
      }(bb), ("lr" === hb || "rl" === hb) && (function(bb) {
        bb.nodes().forEach((ub => Fu(bb.node(ub)))), bb.edges().forEach((ub => {
          var hb;
          let Bb = bb.edge(ub);
          null == (hb = Bb.points) || hb.forEach(Fu), Object.hasOwn(Bb, "x") && Fu(Bb)
        }))
      }(bb), Eu(bb))
    }

    function Eu(bb) {
      bb.nodes().forEach((ub => yu(bb.node(ub)))), bb.edges().forEach((ub => yu(bb.edge(ub))))
    }

    function yu(bb) {
      let ub = bb.width;
      bb.width = bb.height, bb.height = ub
    }

    function Vu(bb) {
      bb.y = -bb.y
    }

    function Fu(bb) {
      let ub = bb.x;
      bb.x = bb.y, bb.y = ub
    }

    function fu(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        hb = {},
        Bb = bb.nodes().filter((ub => !bb.children(ub).length)),
        Ob = Bb.map((ub => bb.node(ub).rank)),
        Gb = bu(fb(Math.max, Ob) + 1).map((() => []));
      return Bb.sort(((ub, hb) => bb.node(ub).rank - bb.node(hb).rank)).forEach((function Bb(Ob) {
        if (hb[Ob]) return;
        hb[Ob] = !0;
        let Ub = bb.node(Ob);
        Gb[Ub.rank].push(Ob);
        let Lb = bb.successors(Ob);
        Lb && [...Lb].sort(((hb, Bb) => function(hb, Bb) {
          let Ob = bb.node(hb),
            Gb = bb.node(Bb);
          return Ou(ub, Ob, Gb)
        }(hb, Bb))).forEach(Bb)
      })), Gb
    }

    function ku(bb, ub) {
      let hb = 0;
      for (let Bb = 1; Bb < ub.length; ++Bb) hb += Tu(bb, ub[Bb - 1], ub[Bb]);
      return hb
    }

    function Tu(bb, ub, hb) {
      let Bb = function(bb, ub) {
          return bb.reduce(((bb, hb, Bb) => (bb[hb] = ub[Bb], bb)), {})
        }(hb, hb.map(((bb, ub) => ub))),
        Ob = ub.flatMap((ub => {
          let hb = bb.outEdges(ub);
          return hb ? hb.map((ub => ({
            pos: Bb[ub.w],
            weight: bb.edge(ub).weight
          }))).sort(((bb, ub) => bb.pos - ub.pos)) : []
        })),
        Gb = 1;
      for (; Gb < hb.length;) Gb <<= 1;
      let Ub = 2 * Gb - 1;
      Gb -= 1;
      let Lb = new Array(Ub).fill(0),
        Yb = 0;
      return Ob.forEach((bb => {
        let ub = bb.pos + Gb;
        Lb[ub] += bb.weight;
        let hb = 0;
        for (; ub > 0;) ub % 2 && (hb += Lb[ub + 1]), ub = ub - 1 >> 1, Lb[ub] += bb.weight;
        Yb += bb.weight * hb
      })), Yb
    }

    function cu(bb, ub) {
      let hb = {};
      return bb.forEach(((bb, ub) => {
          let Bb = {
            indegree: 0,
            in: [],
            out: [],
            vs: [bb.v],
            i: ub
          };
          void 0 !== bb.barycenter && (Bb.barycenter = bb.barycenter, Bb.weight = bb.weight), hb[bb.v] = Bb
        })), ub.edges().forEach((bb => {
          let ub = hb[bb.v],
            Bb = hb[bb.w];
          void 0 !== ub && void 0 !== Bb && (Bb.indegree++, ub.out.push(Bb))
        })),
        function(bb) {
          let ub = [];

          function hb(bb) {
            return ub => {
              ub.merged || (void 0 === ub.barycenter || void 0 === bb.barycenter || ub.barycenter >= bb.barycenter) && function(bb, ub) {
                let hb = 0,
                  Bb = 0;
                bb.weight && (hb += bb.barycenter * bb.weight, Bb += bb.weight), ub.weight && (hb += ub.barycenter * ub.weight, Bb += ub.weight), bb.vs = ub.vs.concat(bb.vs), bb.barycenter = hb / Bb, bb.weight = Bb, bb.i = Math.min(ub.i, bb.i), ub.merged = !0
              }(bb, ub)
            }
          }

          function Bb(ub) {
            return hb => {
              hb.in.push(ub), 0 === --hb.indegree && bb.push(hb)
            }
          }
          for (; bb.length;) {
            let Ob = bb.pop();
            ub.push(Ob), Ob.in.reverse().forEach(hb(Ob)), Ob.out.forEach(Bb(Ob))
          }
          return ub.filter((bb => !bb.merged)).map((bb => uu(bb, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(hb).filter((bb => !bb.indegree)))
    }

    function Qu(bb, ub, hb, Bb, Ob) {
      let Gb = {},
        Ub = null,
        Lb = null,
        Yb = Ob;
      "boolean" == typeof ub ? (Yb = ub, Gb = {}) : ub && (Gb = ub, Ub = null != hb ? hb : null, Lb = null != Bb ? Bb : null);
      let Sb = function(bb, ub) {
          let hb = {
            lhs: [],
            rhs: []
          };
          return bb.forEach((bb => {
            ub(bb) ? hb.lhs.push(bb) : hb.rhs.push(bb)
          })), hb
        }(bb, (bb => Object.hasOwn(bb, "barycenter"))),
        ab = Sb.lhs,
        Hb = Sb.rhs.sort(((bb, ub) => ub.i - bb.i)),
        wb = [],
        Zb = 0,
        Xb = 0,
        pb = 0;
      ab.sort(function(bb, ub, hb) {
        return (Bb, Ob) => {
          if (Bb.barycenter < Ob.barycenter) return -1;
          if (Bb.barycenter > Ob.barycenter) return 1;
          if (bb && ("string" == typeof Bb.vs[0] || "string" == typeof Ob.vs[0])) {
            let hb = bb.node(Bb.vs[0]),
              Gb = bb.node(Ob.vs[0]),
              Ub = Ou(ub, hb, Gb);
            if (0 !== Ub) return Ub
          }
          return hb ? Ob.i - Bb.i : Bb.i - Ob.i
        }
      }(Lb, Ub, !!Yb));
      for (let [Ab, lb] of Object.entries(Gb)) {
        let bb = ab.findIndex((bb => bb.vs[0] === Ab));
        ab.splice(bb + 1, 0, lb)
      }
      pb = Ru(wb, Hb, pb), ab.forEach((bb => {
        pb += bb.vs.length, wb.push(bb.vs), Zb += bb.barycenter * bb.weight, Xb += bb.weight, pb = Ru(wb, Hb, pb)
      }));
      let ob = {
        vs: wb.flat(1)
      };
      return Xb && (ob.barycenter = Zb / Xb, ob.weight = Xb), ob
    }

    function Ru(bb, ub, hb) {
      let Bb;
      for (; ub.length && (Bb = ub[ub.length - 1]).i <= hb;) ub.pop(), bb.push(Bb.vs), hb++;
      return hb
    }

    function bh(bb, ub, hb, Bb, Ob) {
      var Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb;
      let ob = null,
        Ab = Ob;
      "boolean" == typeof Bb ? (Ab = Bb, ob = null) : void 0 !== Bb && (ob = Bb);
      let lb = bb.children(ub),
        Kb = bb.node(ub),
        Wb = Kb ? Kb.borderLeft : void 0,
        Cb = Kb ? Kb.borderRight : void 0,
        db = {};
      Wb && (lb = lb.filter((bb => bb !== Wb && bb !== Cb)));
      let rb = function(bb) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((ub => {
          let hb = bb.inEdges(ub);
          if (!hb || !hb.length) return {
            v: ub
          };
          {
            let Bb = hb.reduce(((ub, hb) => {
              let Bb = bb.edge(hb),
                Ob = bb.node(hb.v);
              return {
                sum: ub.sum + Bb.weight * Ob.order,
                weight: ub.weight + Bb.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: ub,
              barycenter: Bb.sum / Bb.weight,
              weight: Bb.weight
            }
          }
        }))
      }(bb, lb);
      rb.forEach((ub => {
        if (bb.children(ub.v).length) {
          let {
            result: Bb
          } = bh(bb, ub.v, hb, ob, Ab);
          db[ub.v] = Bb, Object.hasOwn(Bb, "barycenter") && function(bb, ub) {
            void 0 !== bb.barycenter ? (bb.barycenter = (bb.barycenter * bb.weight + ub.barycenter * ub.weight) / (bb.weight + ub.weight), bb.weight += ub.weight) : (bb.barycenter = ub.barycenter, bb.weight = ub.weight)
          }(ub, Bb)
        }
      }));
      let jb = cu(rb, hb);
      ! function(bb, ub) {
        bb.forEach((bb => {
          bb.vs = bb.vs.flatMap((bb => ub[bb] ? ub[bb].vs : bb))
        }))
      }(jb, db);
      let nb = {},
        Db = !1;
      for (let zb = 0; zb < jb.length; zb++)
        for (let ub = zb + 1; ub < jb.length; ub++)
          if (jb[zb] && jb[ub] && null != (Gb = jb[zb]) && Gb.barycenter && null != (Ub = jb[ub]) && Ub.barycenter && (null == (Lb = jb[zb]) ? void 0 : Lb.barycenter) === jb[ub].barycenter) {
            let hb = null != (Sb = null == (Yb = jb[zb]) ? void 0 : Yb.vs[0]) ? Sb : "",
              Bb = null != (Hb = null == (ab = jb[ub]) ? void 0 : ab.vs[0]) ? Hb : "",
              Ob = bb.node(hb),
              Gb = bb.node(Bb);
            if ("edge" === Ob.dummy && "edge" === Gb.dummy && (null == (wb = Ob.edgeObj) ? void 0 : wb.v) === (null == (Zb = Gb.edgeObj) ? void 0 : Zb.v) && (null == (Xb = Ob.edgeObj) ? void 0 : Xb.w) === (null == (pb = Gb.edgeObj) ? void 0 : pb.w)) {
              if (Ob.edgeLabel.reversed) {
                nb[Bb] = jb[zb], jb.splice(zb, 1), zb--;
                break
              }
              nb[hb] = jb[ub], jb.splice(ub, 1), ub--
            } else Db = !0
          } let xb = Qu(jb, nb, ob, bb, Ab);
      if (Wb && Cb) {
        xb.vs = [Wb, xb.vs, Cb].flat(1);
        let ub = bb.predecessors(Wb);
        if (ub && ub.length) {
          let hb = bb.node(ub[0]),
            Bb = bb.predecessors(Cb),
            Ob = bb.node(Bb[0]);
          Object.hasOwn(xb, "barycenter") || (xb.barycenter = 0, xb.weight = 0), xb.barycenter = (xb.barycenter * xb.weight + hb.order + Ob.order) / (xb.weight + 2), xb.weight += 2
        }
      }
      return Object.defineProperty(xb, "result", {
        value: xb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(xb, "usedBias", {
        value: Db,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), xb
    }

    function uh(bb, ub, hb, Bb) {
      Bb || (Bb = bb.nodes());
      let Ob = function(bb) {
          let ub;
          for (; bb.hasNode(ub = Rb("_root")););
          return ub
        }(bb),
        Gb = new Ib({
          compound: !0
        }).setGraph({
          root: Ob
        }).setDefaultNodeLabel((ub => bb.node(ub)));
      return Bb.forEach((Bb => {
        let Ub = bb.node(Bb),
          Lb = bb.parent(Bb);
        if (Ub.rank === ub || Ub.minRank <= ub && ub <= Ub.maxRank) {
          Gb.setNode(Bb), Gb.setParent(Bb, Lb || Ob);
          let Yb = bb[hb](Bb);
          Yb && Yb.forEach((ub => {
            let hb = ub.v === Bb ? ub.w : ub.v,
              Ob = Gb.edge(hb, Bb),
              Ub = void 0 !== Ob ? Ob.weight : 0;
            Gb.setEdge(hb, Bb, {
              weight: bb.edge(ub).weight + Ub
            })
          })), Object.hasOwn(Ub, "minRank") && Gb.setNode(Bb, {
            borderLeft: Ub.borderLeft[ub],
            borderRight: Ub.borderRight[ub]
          })
        }
      })), Gb
    }

    function hh(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof ub.customOrder) return void ub.customOrder(bb, hh);
      let Bb = kb(bb),
        Ob = Bh(bb, bu(1, Bb + 1), "inEdges"),
        Gb = Bh(bb, bu(Bb - 1, -1, -1), "outEdges"),
        Ub = fu(bb, hb);
      if (Gh(bb, Ub), ub.disableOptimalOrderHeuristic) return;
      let Lb, Yb = Number.POSITIVE_INFINITY,
        Sb = ub.constraints || [];
      for (let ab = 0, Hb = 0; Hb < 4; ++ab, ++Hb) {
        Oh(ab % 2 ? Ob : Gb, ab % 4 >= 2, Sb, hb), Ub = yb(bb);
        let ub = ku(bb, Ub);
        ub < Yb ? (Hb = 0, Lb = Object.assign({}, Ub), Yb = ub) : ub === Yb && (Lb = structuredClone(Ub))
      }
      Gh(bb, Lb)
    }

    function Bh(bb, ub, hb) {
      let Bb = new Map,
        Ob = (bb, ub) => {
          Bb.has(bb) || Bb.set(bb, []), Bb.get(bb).push(ub)
        };
      for (let Gb of bb.nodes()) {
        let ub = bb.node(Gb);
        if ("number" == typeof ub.rank && Ob(ub.rank, Gb), "number" == typeof ub.minRank && "number" == typeof ub.maxRank)
          for (let bb = ub.minRank; bb <= ub.maxRank; bb++) bb !== ub.rank && Ob(bb, Gb)
      }
      return ub.map((function(ub) {
        return uh(bb, ub, hb, Bb.get(ub) || [])
      }))
    }

    function Oh(bb, ub, hb, Bb) {
      let Ob = !0,
        Gb = new Ib;
      bb.forEach((function(bb) {
        hb.forEach((bb => Gb.setEdge(bb.left, bb.right)));
        let Ub = bb.graph().root,
          {
            result: Lb,
            usedBias: Yb
          } = bh(bb, Ub, Gb, Bb, Ob);
        ub && Yb && (Ob = !Ob), Lb.vs.forEach(((ub, hb) => bb.node(ub).order = hb)),
          function(bb, ub, hb) {
            let Bb, Ob = {};
            hb.forEach((hb => {
              let Gb, Ub, Lb = bb.parent(hb);
              for (; Lb;) {
                if (Gb = bb.parent(Lb), Gb ? (Ub = Ob[Gb], Ob[Gb] = Lb) : (Ub = Bb, Bb = Lb), Ub && Ub !== Lb) return void ub.setEdge(Ub, Lb);
                Lb = Gb
              }
            }))
          }(bb, Gb, Lb.vs)
      }))
    }

    function Gh(bb, ub) {
      Object.values(ub).forEach((ub => ub.forEach(((ub, hb) => bb.node(ub).order = hb))))
    }

    function Uh(bb, ub, hb) {
      if (ub > hb) {
        let bb = ub;
        ub = hb, hb = bb
      }
      let Bb = bb[ub];
      Bb || (bb[ub] = Bb = {}), Bb[hb] = !0
    }

    function Lh(bb, ub, hb) {
      if (ub > hb) {
        let bb = ub;
        ub = hb, hb = bb
      }
      let Bb = bb[ub];
      return void 0 !== Bb && Object.hasOwn(Bb, hb)
    }

    function Yh(bb, ub, hb, Bb) {
      let Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Gb = {},
        Ub = function(bb, ub, hb, Bb) {
          let Ob = new Ib,
            Gb = bb.graph(),
            Ub = function(bb, ub, hb) {
              return (Bb, Ob, Gb) => {
                let Ub, Lb = Bb.node(Ob),
                  Yb = Bb.node(Gb),
                  Sb = 0;
                if (Sb += Lb.width / 2, Object.hasOwn(Lb, "labelpos")) switch (Lb.labelpos.toLowerCase()) {
                  case "l":
                    Ub = -Lb.width / 2;
                    break;
                  case "r":
                    Ub = Lb.width / 2
                }
                if (Ub && (Sb += hb ? Ub : -Ub), Ub = void 0, Sb += (Lb.dummy ? ub : bb) / 2, Sb += (Yb.dummy ? ub : bb) / 2, Sb += Yb.width / 2, Object.hasOwn(Yb, "labelpos")) switch (Yb.labelpos.toLowerCase()) {
                  case "l":
                    Ub = Yb.width / 2;
                    break;
                  case "r":
                    Ub = -Yb.width / 2
                }
                return Ub && (Sb += hb ? Ub : -Ub), Sb
              }
            }(Gb.nodesep, Gb.edgesep, Bb);
          return ub.forEach((ub => {
            let Bb;
            ub.forEach((ub => {
              let Gb = hb[ub];
              if (void 0 !== Gb) {
                if (Ob.setNode(Gb), void 0 !== Bb) {
                  let Lb = hb[Bb];
                  if (void 0 !== Lb) {
                    let hb = Ob.edge(Lb, Gb);
                    Ob.setEdge(Lb, Gb, Math.max(Ub(bb, ub, Bb), hb || 0))
                  }
                }
                Bb = ub
              }
            }))
          })), Ob
        }(bb, ub, hb, Ob),
        Lb = Ob ? "borderLeft" : "borderRight";

      function Yb(bb, ub) {
        let hb = Ub.nodes().slice(),
          Bb = {},
          Ob = hb.pop();
        for (; Ob;) {
          if (Bb[Ob]) bb(Ob);
          else {
            Bb[Ob] = !0, hb.push(Ob);
            for (let bb of ub(Ob)) hb.push(bb)
          }
          Ob = hb.pop()
        }
      }
      return Yb((function(bb) {
        let ub = Ub.inEdges(bb);
        Gb[bb] = ub ? ub.reduce(((bb, ub) => {
          var hb;
          let Bb = null != (hb = Gb[ub.v]) ? hb : 0,
            Ob = Ub.edge(ub);
          return Math.max(bb, Bb + (void 0 !== Ob ? Ob : 0))
        }), 0) : 0
      }), (function(bb) {
        return Ub.predecessors(bb) || []
      })), Yb((function(ub) {
        let hb = Ub.outEdges(ub),
          Bb = Number.POSITIVE_INFINITY;
        hb && (Bb = hb.reduce(((bb, ub) => {
          let hb = Gb[ub.w],
            Bb = Ub.edge(ub);
          return Math.min(bb, (void 0 !== hb ? hb : 0) - (void 0 !== Bb ? Bb : 0))
        }), Number.POSITIVE_INFINITY));
        let Ob = bb.node(ub);
        Bb !== Number.POSITIVE_INFINITY && Ob.borderType !== Lb && (Gb[ub] = Math.max(void 0 !== Gb[ub] ? Gb[ub] : 0, Bb))
      }), (function(bb) {
        return Ub.successors(bb) || []
      })), Object.keys(Bb).forEach((bb => {
        var ub;
        let Bb = hb[bb];
        void 0 !== Bb && (Gb[bb] = null != (ub = Gb[Bb]) ? ub : 0)
      })), Gb
    }

    function Sh(bb, ub) {
      let hb, Bb = yb(bb),
        Ob = Object.assign(function(bb, ub) {
          let hb = {};
          return ub.length && ub.reduce((function(ub, Bb) {
            let Ob = 0,
              Gb = 0,
              Ub = ub.length,
              Lb = Bb[Bb.length - 1];
            return Bb.forEach(((ub, Yb) => {
              let Sb = function(bb, ub) {
                  if (bb.node(ub).dummy) {
                    let hb = bb.predecessors(ub);
                    if (hb) return hb.find((ub => bb.node(ub).dummy))
                  }
                }(bb, ub),
                ab = Sb ? bb.node(Sb).order : Ub;
              (Sb || ub === Lb) && (Bb.slice(Gb, Yb + 1).forEach((ub => {
                let Bb = bb.predecessors(ub);
                Bb && Bb.forEach((Bb => {
                  let Gb = bb.node(Bb),
                    Ub = Gb.order;
                  (Ub < Ob || ab < Ub) && (!Gb.dummy || !bb.node(ub).dummy) && Uh(hb, Bb, ub)
                }))
              })), Gb = Yb + 1, Ob = ab)
            })), Bb
          })), hb
        }(bb, Bb), function(bb, ub) {
          let hb = {};

          function Bb(ub, Bb, Ob, Gb, Ub) {
            bu(Bb, Ob).forEach((Bb => {
              let Ob = ub[Bb];
              if (void 0 !== Ob && bb.node(Ob).dummy) {
                let ub = bb.predecessors(Ob);
                ub && ub.forEach((ub => {
                  if (void 0 === ub) return;
                  let Bb = bb.node(ub);
                  Bb.dummy && (Bb.order < Gb || Bb.order > Ub) && Uh(hb, ub, Ob)
                }))
              }
            }))
          }
          return ub.length && ub.reduce((function(ub, hb) {
            let Ob = -1,
              Gb = -1,
              Ub = 0;
            return hb.forEach(((Lb, Yb) => {
              if ("border" === bb.node(Lb).dummy) {
                let ub = bb.predecessors(Lb);
                if (ub && ub.length) {
                  let Lb = ub[0];
                  if (void 0 === Lb) return;
                  Gb = bb.node(Lb).order, Bb(hb, Ub, Yb, Ob, Gb), Ub = Yb, Ob = Gb
                }
              }
              Bb(hb, Ub, hb.length, Gb, ub.length)
            })), hb
          })), hb
        }(bb, Bb)),
        Gb = {};
      ["u", "d"].forEach((Ub => {
        hb = "u" === Ub ? Bb : Object.values(Bb).reverse(), ["l", "r"].forEach((Bb => {
          "r" === Bb && (hb = hb.map((bb => Object.values(bb).reverse())));
          let Lb = function(bb, ub, hb, Bb, Ob) {
              let Gb = {},
                Ub = {},
                Lb = {};
              return ub.forEach((bb => {
                bb.forEach(((bb, ub) => {
                  Gb[bb] = bb, Ub[bb] = bb, Lb[bb] = ub
                }))
              })), ub.forEach((ub => {
                let Yb = -1,
                  Sb = -1,
                  ab = !1,
                  Hb = ub,
                  wb = ub.findIndex((ub => (null == Ob ? void 0 : Ob.includes(ub)) || ah(ub, bb, Ob)));
                wb > 0 && (Hb = [ub[wb], ...ub.slice(0, wb), ...ub.slice(wb + 1)], ab = !0), Hb.forEach((ub => {
                  var Hb;
                  let wb = Bb(ub);
                  if (wb && wb.length) {
                    null != Ob && Ob.includes(ub) && (wb = wb.filter((ub => ah(ub, bb, Ob))));
                    let Bb = wb.sort(((bb, ub) => {
                        let hb = Lb[bb],
                          Bb = Lb[ub];
                        return (void 0 !== hb ? hb : 0) - (void 0 !== Bb ? Bb : 0)
                      })),
                      Zb = (Bb.length - 1) / 2;
                    for (let bb = Math.floor(Zb), Ob = Math.ceil(Zb); bb <= Ob; ++bb) {
                      let Ob = Bb[bb];
                      if (void 0 === Ob) continue;
                      let wb = Lb[Ob];
                      if (void 0 !== wb && Ub[ub] === ub && Yb < wb && Lb[Ob] !== Sb && !Lh(hb, ub, Ob)) {
                        let bb = Gb[Ob];
                        void 0 !== bb && (Ub[Ob] = ub, Ub[ub] = Gb[ub] = bb, Yb = wb, ab && (Yb = -1, Sb = null != (Hb = Lb[Ob]) ? Hb : -1, ab = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Gb,
                align: Ub
              }
            }(bb, hb, Ob, (ub => ("u" === Ub ? bb.predecessors(ub) : bb.successors(ub)) || []), ub),
            Yb = Yh(bb, hb, Lb.root, Lb.align, "r" === Bb);
          "r" === Bb && (Yb = hu(Yb, (bb => -bb))), Gb[Ub + Bb] = Yb
        }))
      }));
      let Ub = function(bb, ub) {
        return Object.values(ub).reduce(((ub, hb) => {
          let Bb = Number.NEGATIVE_INFINITY,
            Ob = Number.POSITIVE_INFINITY;
          Object.entries(hb).forEach((ub => {
            let [hb, Gb] = ub, Ub = function(bb, ub) {
              return bb.node(ub).width
            }(bb, hb) / 2;
            Bb = Math.max(Gb + Ub, Bb), Ob = Math.min(Gb - Ub, Ob)
          }));
          let Gb = Bb - Ob;
          return Gb < ub[0] && (ub = [Gb, hb]), ub
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(bb, Gb);
      return function(bb, ub) {
          let hb = Object.values(ub),
            Bb = fb(Math.min, hb),
            Ob = fb(Math.max, hb);
          ["u", "d"].forEach((hb => {
            ["l", "r"].forEach((Gb => {
              let Ub = hb + Gb,
                Lb = bb[Ub];
              if (!Lb || Lb === ub) return;
              let Yb = Object.values(Lb),
                Sb = Bb - fb(Math.min, Yb);
              "l" !== Gb && (Sb = Ob - fb(Math.max, Yb)), Sb && (bb[Ub] = hu(Lb, (bb => bb + Sb)))
            }))
          }))
        }(Gb, Ub),
        function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            hb = bb.ul;
          return hb ? hu(hb, ((hb, Bb) => {
            var Ob, Gb;
            if (ub) {
              let hb = ub.toLowerCase(),
                Ob = bb[hb];
              if (Ob && void 0 !== Ob[Bb]) return Ob[Bb]
            }
            let Ub = Object.values(bb).map((bb => {
              let ub = bb[Bb];
              return void 0 !== ub ? ub : 0
            })).sort(((bb, ub) => bb - ub));
            return ((null != (Ob = Ub[1]) ? Ob : 0) + (null != (Gb = Ub[2]) ? Gb : 0)) / 2
          })) : {}
        }(Gb, bb.graph().align)
    }

    function ah(bb, ub, hb) {
      var Bb;
      if (!hb) return !1;
      let Ob = null == (Bb = ub.node(bb)) ? void 0 : Bb.edgeObj;
      if (!Ob || ub.node(bb).edgeLabel.reversed) return !1;
      let Gb = hb.indexOf(null == Ob ? void 0 : Ob.v),
        Ub = hb.indexOf(null == Ob ? void 0 : Ob.w);
      return -1 !== Gb && -1 !== Ub && Gb === (Ub + 1) % hb.length || Gb === (Ub - 1) % hb.length
    }

    function Hh(bb, ub) {
      (function(bb) {
        let ub = yb(bb),
          hb = bb.graph(),
          Bb = hb.ranksep,
          Ob = hb.rankalign,
          Gb = 0;
        ub.forEach((ub => {
          let hb = ub.reduce(((ub, hb) => {
            var Bb;
            let Ob = null != (Bb = bb.node(hb).height) ? Bb : 0;
            return ub > Ob ? ub : Ob
          }), 0);
          ub.forEach((ub => {
            let Bb = bb.node(ub);
            Bb.y = "top" === Ob ? Gb + Bb.height / 2 : "bottom" === Ob ? Gb + hb - Bb.height / 2 : Gb + hb / 2
          })), Gb += hb + Bb
        }))
      })(bb = qb(bb)), Object.entries(Sh(bb, ub)).forEach((ub => {
        let [hb, Bb] = ub;
        return bb.node(hb).x = Bb
      }))
    }
    var wh = new WeakMap;

    function Zh(bb) {
      return ph(bb, cb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), bb
    }

    function Xh(bb, ub, hb) {
      let Bb = ub;
      for (; void 0 !== Bb;) {
        let ub = bb.parent(Bb);
        if (ub === hb) return Bb;
        Bb = ub
      }
    }

    function ph(bb, ub, hb) {
      var Bb;
      let Ob = bb.nodes().filter((ub => bb.children(ub).length)),
        Gb = {};
      Ob.forEach((Bb => {
        let Ob = bb.node(Bb);
        if (Ob && Ob.rankdir) {
          let Ub = new Ib({
            multigraph: !0,
            compound: !0
          });
          Ub.setGraph({
            rankdir: Ob.rankdir
          });
          let Lb = bb.children(Bb);
          Lb.forEach((ub => {
            let hb = {
              ...bb.node(ub)
            };
            Ub.setNode(ub, hb);
            let Ob = bb.parent(ub);
            Ob && Ob !== Bb && Lb.includes(Ob) && Ub.setParent(ub, Ob)
          }));
          let Yb = new Set;
          bb.edges().forEach((ub => {
            let hb = Xh(bb, ub.v, Bb),
              Ob = Xh(bb, ub.w, Bb);
            if (hb && Ob && hb !== Ob) {
              let Bb = `${hb}\0${Ob}`;
              Yb.has(Bb) || (Yb.add(Bb), Ub.setEdge(hb, Ob, {
                ...bb.edge(ub)
              }))
            }
          })), ph(Ub, ub, hb);
          let Sb = Dh(Ub);
          oh(Sb, ub, hb, null), Ah(Ub, Sb);
          let ab = 1 / 0,
            Hb = 1 / 0,
            wb = -1 / 0,
            Zb = -1 / 0;
          Ub.nodes().forEach((bb => {
            if (bb === Bb) return;
            let ub = Ub.node(bb);
            ub && "number" == typeof ub.x && "number" == typeof ub.y && "number" == typeof ub.width && "number" == typeof ub.height && (ab = Math.min(ab, ub.x - ub.width / 2), wb = Math.max(wb, ub.x + ub.width / 2), Hb = Math.min(Hb, ub.y - ub.height / 2), Zb = Math.max(Zb, ub.y + ub.height / 2))
          })), (!isFinite(ab) || !isFinite(Hb) || !isFinite(wb) || !isFinite(Zb)) && (ab = Hb = 0, wb = Zb = 0);
          let Xb = wb - ab,
            pb = Zb - Hb;
          Gb[Bb] = {
            minX: ab,
            UG: Hb,
            maxX: wb,
            LG: Zb,
            width: Xb,
            height: pb,
            offsetX: ab,
            offsetY: Hb
          }, Ob._dagreClusterSubgraph = Ub
        }
      }));
      let Ub = [],
        Lb = new Map;
      Ob.forEach((ub => {
        let hb = bb.node(ub);
        hb && hb.rankdir && Gb[ub] && Lb.set(ub, (bb.children(ub) || []).filter((bb => bb !== ub)))
      }));
      let Yb = new Set([...Lb.values()].flat()),
        Sb = new Map;
      Lb.forEach(((ub, hb) => {
        Yb.has(hb) || Sb.set(hb, (ub => {
          let hb = [],
            Bb = (bb.children(ub) || []).filter((bb => bb !== ub));
          for (; Bb.length > 0;) {
            let ub = Bb.shift();
            hb.push(ub), (bb.children(ub) || []).filter((bb => bb !== ub)).forEach((bb => Bb.push(bb)))
          }
          return hb
        })(hb))
      }));
      let ab = new Set([...Sb.values()].flat()),
        Hb = bb => {
          for (let [ub, hb] of Sb)
            if (hb.includes(bb)) return ub;
          return bb
        },
        wb = [];
      bb.edges().forEach((ub => {
        (ab.has(ub.v) || ab.has(ub.w)) && wb.push({
          edge: ub,
          label: bb.edge(ub)
        })
      }));
      let Zb = new Map;
      ab.forEach((ub => {
        let hb = bb.parent(ub);
        Zb.set(ub, "string" == typeof hb ? hb : void 0)
      })), Sb.forEach(((ub, hb) => {
        let Bb = bb.node(hb),
          Ob = [];
        ub.forEach((ub => {
          let hb = bb.node(ub);
          hb && (Ob.push({
            id: ub,
            node: hb,
            parent: Zb.get(ub)
          }), bb.removeNode(ub))
        }));
        let Lb = wb.filter((bb => {
            let {
              edge: hb
            } = bb;
            return ub.includes(hb.v) || ub.includes(hb.w)
          })),
          Yb = Gb[hb];
        Bb && (Ub.push({
          clusterId: hb,
          subgraph: Bb._dagreClusterSubgraph,
          bounds: Yb,
          children: ub,
          removedNodes: Ob,
          removedEdges: Lb
        }), Bb.width = Yb.width, Bb.height = Yb.height)
      }));
      let Xb = new Set;
      wb.forEach((ub => {
        let {
          edge: hb,
          label: Bb
        } = ub, Ob = Hb(hb.v), Gb = Hb(hb.w);
        if (Ob !== Gb && bb.hasNode(Ob) && bb.hasNode(Gb)) {
          let ub = `${Ob}\0${Gb}`;
          Xb.has(ub) || (Xb.add(ub), bb.setEdge(Ob, Gb, {
            ...Bb,
            width: 0,
            height: 0
          }))
        }
      }));
      let pb = Dh(bb),
        ob = oh(pb, ub, hb, null != (Bb = wh.get(bb)) ? Bb : null);
      wh.set(bb, ob), Ah(bb, pb), Xb.forEach((ub => {
        let hb = ub.indexOf("\0"),
          Bb = ub.slice(0, hb),
          Ob = ub.slice(hb + 1);
        bb.hasEdge(Bb, Ob) && bb.removeEdge(Bb, Ob)
      })), Ub.forEach((ub => {
        let {
          clusterId: hb,
          subgraph: Bb,
          bounds: Ob,
          removedNodes: Gb,
          removedEdges: Ub
        } = ub;
        var Lb, Yb;
        let Sb = bb.node(hb),
          ab = null != (Lb = null == Sb ? void 0 : Sb.x) ? Lb : 0,
          Hb = null != (Yb = null == Sb ? void 0 : Sb.y) ? Yb : 0,
          wb = (Ob.minX + Ob.maxX) / 2,
          Zb = (Ob.UG + Ob.LG) / 2;
        Gb.forEach((ub => {
          let {
            id: hb,
            node: Bb,
            parent: Ob
          } = ub;
          bb.setNode(hb, Bb), void 0 !== Ob && bb.setParent(hb, Ob)
        })), Ub.forEach((ub => {
          let {
            edge: hb,
            label: Bb
          } = ub;
          bb.setEdge(hb, Bb)
        })), Bb.nodes().forEach((ub => {
          if (ub === hb) return;
          let Ob = Bb.node(ub),
            Gb = bb.node(ub);
          Gb && Ob && "number" == typeof Ob.x && "number" == typeof Ob.y && (Gb.x = ab + (Ob.x - wb), Gb.y = Hb + (Ob.y - Zb))
        })), delete Sb._dagreClusterSubgraph
      })), Ob.forEach((ub => {
        var hb, Bb;
        let Ob = bb.node(ub),
          Ub = Gb[ub];
        if (Ob && Ob.rankdir && Ob._dagreClusterSubgraph && Ub) {
          let Gb = Ob._dagreClusterSubgraph,
            Lb = null != (hb = Ob.x) ? hb : 0,
            Yb = null != (Bb = Ob.y) ? Bb : 0,
            Sb = (Ub.minX + Ub.maxX) / 2,
            ab = (Ub.UG + Ub.LG) / 2;
          Gb.nodes().forEach((hb => {
            if (hb === ub) return;
            let Bb = Gb.node(hb),
              Ob = bb.node(hb);
            if (Ob && Bb && "number" == typeof Bb.x && "number" == typeof Bb.y) {
              let bb = Bb.x - Sb,
                ub = Bb.y - ab;
              Ob.x = Lb + bb, Ob.y = Yb + ub
            }
          })), delete Ob._dagreClusterSubgraph
        }
      }))
    }

    function oh(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Ob, Gb;
      let Ub = !1 !== (null == hb ? void 0 : hb.useDynamic),
        Lb = Ub && null != (Ob = null == Bb ? void 0 : Bb.graph) ? Ob : null,
        Yb = Ub && null != (Gb = null == Bb ? void 0 : Bb.rawNodes) ? Gb : null;
      ub("    makeSpaceForEdgeLabels", (() => function(bb) {
        let ub = bb.graph();
        ub.ranksep /= 2, bb.edges().forEach((hb => {
          var Bb;
          let Ob = bb.edge(hb);
          Ob.minlen *= 2, "c" !== (null != (Bb = Ob.labelpos) ? Bb : "r").toLowerCase() && ("TB" === ub.rankdir || "BT" === ub.rankdir ? Ob.width += Ob.labeloffset : Ob.height += Ob.labeloffset)
        }))
      }(bb))), ub("    removeSelfEdges", (() => function(bb) {
        bb.edges().forEach((ub => {
          if (ub.v === ub.w) {
            let hb = bb.node(ub.v);
            hb.selfEdges || (hb.selfEdges = []), hb.selfEdges.push({
              e: ub,
              label: bb.edge(ub)
            }), bb.removeEdge(ub)
          }
        }))
      }(bb))), ub("    acyclic", (() => Zu(bb, Lb))), ub("    nestingGraph.run", (() => Mu(bb))), ub("    rank", (() => Ju(qb(bb)))), ub("    injectEdgeLabelProxies", (() => function(bb) {
        bb.edges().forEach((ub => {
          let hb = bb.edge(ub);
          if (hb.width && hb.height) {
            let hb = bb.node(ub.v),
              Bb = {
                rank: (bb.node(ub.w).rank - hb.rank) / 2 + hb.rank,
                e: ub
              };
            Pb(bb, "edge-proxy", Bb, "_ep")
          }
        }))
      }(bb))), ub("    removeEmptyRanks", (() => function(bb) {
        let ub = bb.nodes().map((ub => bb.node(ub).rank)).filter((bb => void 0 !== bb)),
          hb = fb(Math.min, ub),
          Bb = [];
        bb.nodes().forEach((ub => {
          let Ob = bb.node(ub).rank - hb;
          Bb[Ob] || (Bb[Ob] = []), Bb[Ob].push(ub)
        }));
        let Ob = 0,
          Gb = bb.graph().nodeRankFactor;
        Array.from(Bb).forEach(((ub, hb) => {
          void 0 === ub && hb % Gb !== 0 ? --Ob : void 0 !== ub && Ob && ub.forEach((ub => bb.node(ub).rank += Ob))
        }))
      }(bb))), ub("    nestingGraph.cleanup", (() => function(bb) {
        let ub = bb.graph();
        bb.removeNode(ub.nestingRoot), delete ub.nestingRoot, bb.edges().forEach((ub => {
          bb.edge(ub).nestingEdge && bb.removeEdge(ub)
        }))
      }(bb))), ub("    normalizeRanks", (() => function(bb) {
        let ub = bb.nodes().map((ub => {
            let hb = bb.node(ub).rank;
            return void 0 === hb ? Number.MAX_VALUE : hb
          })),
          hb = fb(Math.min, ub);
        bb.nodes().forEach((ub => {
          let Bb = bb.node(ub);
          Object.hasOwn(Bb, "rank") && (Bb.rank -= hb)
        }))
      }(bb))), ub("    assignRankMinMax", (() => function(bb) {
        let ub = 0;
        bb.nodes().forEach((hb => {
          let Bb = bb.node(hb);
          Bb.borderTop && (Bb.minRank = bb.node(Bb.borderTop).rank, Bb.maxRank = bb.node(Bb.borderBottom).rank, ub = Math.max(ub, Bb.maxRank))
        })), bb.graph().maxRank = ub
      }(bb))), ub("    removeEdgeLabelProxies", (() => function(bb) {
        bb.nodes().forEach((ub => {
          let hb = bb.node(ub);
          if ("edge-proxy" === hb.dummy) {
            let Bb = hb;
            bb.edge(Bb.e).labelRank = hb.rank, bb.removeNode(ub)
          }
        }))
      }(bb))), ub("    normalize.run", (() => Xu(bb))), ub("    parentDummyChains", (() => su(bb))), ub("    addBorderSegments", (() => Iu(bb))), ub("    order", (() => hh(bb, hb, Yb))), ub("    insertSelfEdges", (() => function(bb) {
        yb(bb).forEach((ub => {
          let hb = 0;
          ub.forEach(((ub, Bb) => {
            let Ob = bb.node(ub);
            "number" != typeof Ob.rank && (Ob.rank = 0), Ob.order = Bb + hb, (Ob.selfEdges || []).forEach((ub => {
              Pb(bb, "selfedge", {
                width: ub.label.width,
                height: ub.label.height,
                rank: Ob.rank,
                order: Bb + ++hb,
                e: ub.e,
                edgeLabel: ub.label
              }, "_se"), (!Array.isArray(ub.label.points) || 7 !== ub.label.points.length) && (ub.label.points = [{
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
            })), delete Ob.selfEdges
          }))
        }))
      }(bb))), ub("    adjustCoordinateSystem", (() => function(bb) {
        var ub;
        let hb = null == (ub = bb.graph().rankdir) ? void 0 : ub.toLowerCase();
        ("lr" === hb || "rl" === hb) && Eu(bb)
      }(bb))), ub("    position", (() => Hh(bb, hb.corePath))), ub("    positionSelfEdges", (() => function(bb) {
        bb.nodes().forEach((ub => {
          let hb = bb.node(ub),
            Bb = bb => "number" == typeof bb && isFinite(bb);
          if ("selfedge" === hb.dummy) {
            let Ob = hb,
              Gb = bb.node(Ob.e.v),
              Ub = Bb(null == Gb ? void 0 : Gb.x) ? Gb.x : 0,
              Lb = Bb(null == Gb ? void 0 : Gb.y) ? Gb.y : 0,
              Yb = Bb(null == Gb ? void 0 : Gb.width) ? Gb.width : 0,
              Sb = Bb(null == Gb ? void 0 : Gb.height) ? Gb.height : 0,
              ab = Bb(hb.x) ? hb.x : Ub,
              Hb = Bb(hb.y) ? hb.y : Lb,
              wb = Yb / 2,
              Zb = Sb / 2;
            Ob.edgeLabel.points = [{
              x: ab + wb,
              y: Hb - Zb
            }, {
              x: ab + wb,
              y: Hb - Zb
            }, {
              x: ab,
              y: Hb
            }, {
              x: ab - wb,
              y: Hb + Zb
            }, {
              x: ab - wb,
              y: Hb + Zb
            }, {
              x: ab,
              y: Hb
            }, {
              x: ab,
              y: Hb
            }], Ob.edgeLabel.x = ab, Ob.edgeLabel.y = Hb, bb.setEdge(Ob.e, Ob.edgeLabel), bb.removeNode(ub)
          } else hb && Array.isArray(hb.selfEdges) && hb.selfEdges.forEach((bb => {
            if (!Array.isArray(bb.label.points) || 7 !== bb.label.points.length) {
              let ub = Bb(hb.x) ? hb.x : 0,
                Ob = Bb(hb.y) ? hb.y : 0,
                Gb = (Bb(hb.width) ? hb.width : 0) / 2,
                Ub = (Bb(hb.height) ? hb.height : 0) / 2;
              bb.label.points = [{
                x: ub + Gb,
                y: Ob - Ub
              }, {
                x: ub + Gb,
                y: Ob - Ub
              }, {
                x: ub,
                y: Ob
              }, {
                x: ub - Gb,
                y: Ob + Ub
              }, {
                x: ub - Gb,
                y: Ob + Ub
              }, {
                x: ub,
                y: Ob
              }, {
                x: ub,
                y: Ob
              }]
            }
          }))
        }))
      }(bb)));
      let Sb = JSON.parse(JSON.stringify(bb._nodes));
      return ub("    removeBorderNodes", (() => function(bb) {
        bb.nodes().forEach((ub => {
          if (bb.children(ub).length) {
            let hb = bb.node(ub),
              Bb = bb.node(hb.borderTop),
              Ob = bb.node(hb.borderBottom),
              Gb = bb.node(hb.borderLeft[hb.borderLeft.length - 1]),
              Ub = bb.node(hb.borderRight[hb.borderRight.length - 1]);
            hb.width = Math.abs(Ub.x - Gb.x), hb.height = Math.abs(Ob.y - Bb.y), hb.x = Gb.x + hb.width / 2, hb.y = Bb.y + hb.height / 2
          }
        })), bb.nodes().forEach((ub => {
          "border" === bb.node(ub).dummy && bb.removeNode(ub)
        }))
      }(bb))), ub("    normalize.undo", (() => function(bb) {
        bb.graph().dummyChains.forEach((ub => {
          let hb, Bb = bb.node(ub),
            Ob = Bb.edgeLabel;
          for (bb.setEdge(Bb.edgeObj, Ob); Bb.dummy;) hb = bb.successors(ub)[0], bb.removeNode(ub), Ob.points.push({
            x: Bb.x,
            y: Bb.y
          }), "edge-label" === Bb.dummy && (Ob.x = Bb.x, Ob.y = Bb.y, Ob.width = Bb.width, Ob.height = Bb.height), ub = hb, Bb = bb.node(ub)
        }))
      }(bb))), ub("    fixupEdgeLabelCoords", (() => function(bb) {
        bb.edges().forEach((ub => {
          let hb = bb.edge(ub);
          if (Object.hasOwn(hb, "x")) switch (("l" === hb.labelpos || "r" === hb.labelpos) && (hb.width -= hb.labeloffset), hb.labelpos) {
            case "l":
              hb.x -= hb.width / 2 + hb.labeloffset;
              break;
            case "r":
              hb.x += hb.width / 2 + hb.labeloffset
          }
        }))
      }(bb))), ub("    undoCoordinateSystem", (() => qu(bb))), ub("    translateGraph", (() => function(bb) {
        let ub = Number.POSITIVE_INFINITY,
          hb = 0,
          Bb = Number.POSITIVE_INFINITY,
          Ob = 0,
          Gb = bb.graph(),
          Ub = Gb.marginx || 0,
          Lb = Gb.marginy || 0;

        function Yb(bb) {
          let Gb = bb.x,
            Ub = bb.y,
            Lb = bb.width,
            Yb = bb.height;
          ub = Math.min(ub, Gb - Lb / 2), hb = Math.max(hb, Gb + Lb / 2), Bb = Math.min(Bb, Ub - Yb / 2), Ob = Math.max(Ob, Ub + Yb / 2)
        }
        bb.nodes().forEach((ub => Yb(bb.node(ub)))), bb.edges().forEach((ub => {
          let hb = bb.edge(ub);
          Object.hasOwn(hb, "x") && Yb(hb)
        })), ub -= Ub, Bb -= Lb, bb.nodes().forEach((hb => {
          let Ob = bb.node(hb);
          Ob.x -= ub, Ob.y -= Bb
        })), bb.edges().forEach((hb => {
          let Ob = bb.edge(hb);
          Ob.points.forEach((bb => {
            bb.x -= ub, bb.y -= Bb
          })), Object.hasOwn(Ob, "x") && (Ob.x -= ub), Object.hasOwn(Ob, "y") && (Ob.y -= Bb)
        })), Gb.width = hb - ub + Ub, Gb.height = Ob - Bb + Lb
      }(bb))), ub("    assignNodeIntersects", (() => function(bb) {
        bb.edges().forEach((ub => {
          if (ub.v === ub.w) return;
          let hb, Bb, Ob = bb.edge(ub),
            Gb = bb.node(ub.v),
            Ub = bb.node(ub.w);
          Ob.points ? (hb = Ob.points[0], Bb = Ob.points[Ob.points.length - 1]) : (Ob.points = [], hb = Ub, Bb = Gb), Ob.points.unshift(Eb(Gb, hb)), Ob.points.push(Eb(Ub, Bb))
        }))
      }(bb))), ub("    reversePoints", (() => function(bb) {
        bb.edges().forEach((ub => {
          let hb = bb.edge(ub);
          hb.reversed && hb.points.reverse()
        }))
      }(bb))), ub("    acyclic.undo", (() => function(bb) {
        bb.edges().forEach((ub => {
          let hb = bb.edge(ub);
          if (hb.reversed) {
            bb.removeEdge(ub);
            let Bb = hb.forwardName;
            delete hb.reversed, delete hb.forwardName, bb.setEdge(ub.w, ub.v, hb, Bb)
          }
        }))
      }(bb))), {
        graph: bb,
        rawNodes: Sb
      }
    }

    function Ah(bb, ub) {
      bb.nodes().forEach((hb => {
        let Bb = bb.node(hb),
          Ob = ub.node(hb);
        Bb && (Bb.x = Ob.x, Bb.y = Ob.y, Bb.order = Ob.order, Bb.rank = Ob.rank, ub.children(hb).length && (Bb.width = Ob.width, Bb.height = Ob.height))
      })), bb.edges().forEach((hb => {
        let Bb = bb.edge(hb),
          Ob = ub.edge(hb);
        Bb.points = Ob.points, Object.hasOwn(Ob, "x") && (Bb.x = Ob.x, Bb.y = Ob.y)
      })), bb.graph().width = ub.graph().width, bb.graph().height = ub.graph().height
    }
    var lh = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Kh = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Wh = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Ch = ["width", "height", "rank"],
      dh = {
        width: 0,
        height: 0
      },
      rh = ["minlen", "weight", "width", "height", "labeloffset"],
      jh = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      nh = ["labelpos"];

    function Dh(bb) {
      let ub = new Ib({
          multigraph: !0,
          compound: !0
        }),
        hb = zh(bb.graph());
      return ub.setGraph(Object.assign({}, Kh, xh(hb, lh), uu(hb, Wh))), bb.nodes().forEach((hb => {
        let Bb = xh(zh(bb.node(hb)), Ch);
        Object.keys(dh).forEach((bb => {
          void 0 === Bb[bb] && (Bb[bb] = dh[bb])
        })), ub.setNode(hb, Bb);
        let Ob = bb.parent(hb);
        void 0 !== Ob && ub.setParent(hb, Ob)
      })), bb.edges().forEach((hb => {
        let Bb = zh(bb.edge(hb));
        ub.setEdge(hb, Object.assign({}, jh, xh(Bb, rh), uu(Bb, nh)))
      })), ub
    }

    function xh(bb, ub) {
      return hu(uu(bb, ub), Number)
    }

    function zh(bb) {
      let ub = {};
      return bb && Object.entries(bb).forEach((bb => {
        let [hb, Bb] = bb;
        "string" == typeof hb && (hb = hb.toLowerCase()), ub[hb] = Bb
      })), ub
    }

    function gh(bb) {
      let ub = yb(bb),
        hb = new Ib({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return bb.nodes().forEach((ub => {
        hb.setNode(ub, {
          label: ub
        }), hb.setParent(ub, "layer" + bb.node(ub).rank)
      })), bb.edges().forEach((bb => hb.setEdge(bb.v, bb.w, {}, bb.name))), ub.forEach(((bb, ub) => {
        let Bb = "layer" + ub;
        hb.setNode(Bb, {
          rank: "same"
        }), bb.reduce(((bb, ub) => (hb.setEdge(bb, ub, {
          style: "invis"
        }), ub)))
      })), hb
    }
    var ih = {
        time: Tb,
        notime: cb
      },
      vh = {
        graphlib: Gb,
        version: Gu,
        layout: Zh,
        debug: gh,
        util: {
          time: Tb,
          notime: cb
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);