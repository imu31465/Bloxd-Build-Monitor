/*! For license information please see teusab.111.e0a3bae5.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6044: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Graph: () => ob,
      debug: () => IU,
      default: () => FU,
      graphlib: () => Tb,
      layout: () => XU,
      util: () => dU,
      version: () => Ta
    });
    var Ab = Object.defineProperty,
      Mb = (bb, ab, Ub) => ((bb, ab, Ub) => ab in bb ? Ab(bb, ab, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ub
      }) : bb[ab] = Ub)(bb, "symbol" != typeof ab ? ab + "" : ab, Ub),
      Tb = {};
    ((bb, ab) => {
      for (var Ub in ab) Ab(bb, Ub, {
        get: ab[Ub],
        enumerable: !0
      })
    })(Tb, {
      Graph: () => ob,
      alg: () => yb
    });
    var Eb = Object.defineProperty,
      Yb = (bb, ab) => {
        for (var Ub in ab) Eb(bb, Ub, {
          get: ab[Ub],
          enumerable: !0
        })
      },
      Bb = class {
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
        setNodes(bb, ab) {
          return bb.forEach((bb => {
            void 0 !== ab ? this.setNode(bb, ab) : this.setNode(bb)
          })), this
        }
        setNode(bb, ab) {
          return bb in this._nodes ? (arguments.length > 1 && (this._nodes[bb] = ab), this) : (this._nodes[bb] = arguments.length > 1 ? ab : this._defaultNodeLabelFn(bb), this._isCompound && (this._parent[bb] = "\0", this._children[bb] = {}, this._children["\0"][bb] = !0), this._in[bb] = {}, this._preds[bb] = {}, this._out[bb] = {}, this._sucs[bb] = {}, ++this._nodeCount, this)
        }
        node(bb) {
          return this._nodes[bb]
        }
        hasNode(bb) {
          return bb in this._nodes
        }
        removeNode(bb) {
          if (bb in this._nodes) {
            let ab = bb => this.removeEdge(this._edgeObjs[bb]);
            delete this._nodes[bb], this._isCompound && (this._removeFromParentsChildList(bb), delete this._parent[bb], this.children(bb).forEach((bb => {
              this.setParent(bb)
            })), delete this._children[bb]), Object.keys(this._in[bb]).forEach(ab), delete this._in[bb], delete this._preds[bb], Object.keys(this._out[bb]).forEach(ab), delete this._out[bb], delete this._sucs[bb], --this._nodeCount
          }
          return this
        }
        setParent(bb, ab) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === ab) ab = "\0";
          else {
            for (let Ub = ab += ""; void 0 !== Ub; Ub = this.parent(Ub))
              if (Ub === bb) throw new Error("Setting " + ab + " as parent of " + bb + " would create a cycle");
            this.setNode(ab)
          }
          return this.setNode(bb), this._removeFromParentsChildList(bb), this._parent[bb] = ab, this._children[ab][bb] = !0, this
        }
        parent(bb) {
          if (this._isCompound) {
            let ab = this._parent[bb];
            if ("\0" !== ab) return ab
          }
        }
        children() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let ab = this._children[bb];
            if (ab) return Object.keys(ab)
          } else {
            if ("\0" === bb) return this.nodes();
            if (this.hasNode(bb)) return []
          }
          return []
        }
        predecessors(bb) {
          let ab = this._preds[bb];
          if (ab) return Object.keys(ab)
        }
        successors(bb) {
          let ab = this._sucs[bb];
          if (ab) return Object.keys(ab)
        }
        neighbors(bb) {
          let ab = this.predecessors(bb);
          if (ab) {
            let Ub = new Set(ab),
              Ab = this.successors(bb);
            if (Ab)
              for (let bb of Ab) Ub.add(bb);
            return Array.from(Ub.values())
          }
        }
        isLeaf(bb) {
          var ab;
          let Ub;
          return Ub = this.isDirected() ? this.successors(bb) : this.neighbors(bb), 0 === (null != (ab = null == Ub ? void 0 : Ub.length) ? ab : 0)
        }
        filterNodes(bb) {
          let ab = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          ab.setGraph(this.graph()), Object.entries(this._nodes).forEach((Ub => {
            let [Ab, Mb] = Ub;
            bb(Ab) && ab.setNode(Ab, Mb)
          })), Object.values(this._edgeObjs).forEach((bb => {
            ab.hasNode(bb.v) && ab.hasNode(bb.w) && ab.setEdge(bb, this.edge(bb))
          }));
          let Ub = {},
            Ab = bb => {
              let Mb = this.parent(bb);
              return !Mb || ab.hasNode(Mb) ? (Ub[bb] = Mb, Mb) : Mb in Ub ? Ub[Mb] : Ab(Mb)
            };
          return this._isCompound && ab.nodes().forEach((bb => ab.setParent(bb, Ab(bb)))), ab
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
        setPath(bb, ab) {
          return bb.reduce(((bb, Ub) => (void 0 !== ab ? this.setEdge(bb, Ub, ab) : this.setEdge(bb, Ub), Ub))), this
        }
        setEdge(bb, ab, Ub, Ab) {
          let Mb, Tb, Eb, Yb, Bb = !1;
          "object" == typeof bb && null !== bb && "v" in bb ? (Mb = bb.v, Tb = bb.w, Eb = bb.name, 2 === arguments.length && (Yb = ab, Bb = !0)) : (Mb = bb, Tb = ab, Eb = Ab, arguments.length > 2 && (Yb = Ub, Bb = !0)), Mb = "" + Mb, Tb = "" + Tb, void 0 !== Eb && (Eb = "" + Eb);
          let vb = Lb(this._isDirected, Mb, Tb, Eb);
          if (vb in this._edgeLabels) return Bb && (this._edgeLabels[vb] = Yb), this;
          if (void 0 !== Eb && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Mb), this.setNode(Tb), this._edgeLabels[vb] = Bb ? Yb : this._defaultEdgeLabelFn(Mb, Tb, Eb);
          let Pb = function(bb, ab, Ub, Ab) {
            let Mb = "" + ab,
              Tb = "" + Ub;
            if (!bb && Mb > Tb) {
              let bb = Mb;
              Mb = Tb, Tb = bb
            }
            let Eb = {
              v: Mb,
              w: Tb
            };
            return Ab && (Eb.name = Ab), Eb
          }(this._isDirected, Mb, Tb, Eb);
          return Mb = Pb.v, Tb = Pb.w, Object.freeze(Pb), this._edgeObjs[vb] = Pb, eb(this._preds[Tb], Mb), eb(this._sucs[Mb], Tb), this._in[Tb][vb] = Pb, this._out[Mb][vb] = Pb, this._edgeCount++, this
        }
        edge(bb, ab, Ub) {
          let Ab = 1 === arguments.length ? Pb(this._isDirected, bb) : Lb(this._isDirected, bb, ab, Ub);
          return this._edgeLabels[Ab]
        }
        edgeAsObj(bb, ab, Ub) {
          let Ab = 1 === arguments.length ? this.edge(bb) : this.edge(bb, ab, Ub);
          return "object" != typeof Ab || null === Ab ? {
            label: Ab
          } : Ab
        }
        hasEdge(bb, ab, Ub) {
          return (1 === arguments.length ? Pb(this._isDirected, bb) : Lb(this._isDirected, bb, ab, Ub)) in this._edgeLabels
        }
        removeEdge(bb, ab, Ub) {
          let Ab = 1 === arguments.length ? Pb(this._isDirected, bb) : Lb(this._isDirected, bb, ab, Ub),
            Mb = this._edgeObjs[Ab];
          if (Mb) {
            let bb = Mb.v,
              ab = Mb.w;
            delete this._edgeLabels[Ab], delete this._edgeObjs[Ab], vb(this._preds[ab], bb), vb(this._sucs[bb], ab), delete this._in[ab][Ab], delete this._out[bb][Ab], this._edgeCount--
          }
          return this
        }
        inEdges(bb, ab) {
          return this.isDirected() ? this.filterEdges(this._in[bb], bb, ab) : this.nodeEdges(bb, ab)
        }
        outEdges(bb, ab) {
          return this.isDirected() ? this.filterEdges(this._out[bb], bb, ab) : this.nodeEdges(bb, ab)
        }
        nodeEdges(bb, ab) {
          if (bb in this._nodes) return this.filterEdges({
            ...this._in[bb],
            ...this._out[bb]
          }, bb, ab)
        }
        _removeFromParentsChildList(bb) {
          delete this._children[this._parent[bb]][bb]
        }
        filterEdges(bb, ab, Ub) {
          if (!bb) return;
          let Ab = Object.values(bb);
          return Ub ? Ab.filter((bb => bb.v === ab && bb.w === Ub || bb.v === Ub && bb.w === ab)) : Ab
        }
      };

    function eb(bb, ab) {
      bb[ab] ? bb[ab]++ : bb[ab] = 1
    }

    function vb(bb, ab) {
      void 0 !== bb[ab] && !--bb[ab] && delete bb[ab]
    }

    function Lb(bb, ab, Ub, Ab) {
      let Mb = "" + ab,
        Tb = "" + Ub;
      if (!bb && Mb > Tb) {
        let bb = Mb;
        Mb = Tb, Tb = bb
      }
      return Mb + "\x01" + Tb + "\x01" + (void 0 === Ab ? "\0" : Ab)
    }

    function Pb(bb, ab) {
      return Lb(bb, ab.v, ab.w, ab.name)
    }

    function Xb(bb) {
      let ab = {
          options: {
            directed: bb.isDirected(),
            multigraph: bb.isMultigraph(),
            compound: bb.isCompound()
          },
          nodes: jb(bb),
          edges: Rb(bb)
        },
        Ub = bb.graph();
      return void 0 !== Ub && (ab.value = structuredClone(Ub)), ab
    }

    function jb(bb) {
      return bb.nodes().map((ab => {
        let Ub = bb.node(ab),
          Ab = bb.parent(ab),
          Mb = {
            v: ab
          };
        return void 0 !== Ub && (Mb.value = Ub), void 0 !== Ab && (Mb.parent = Ab), Mb
      }))
    }

    function Rb(bb) {
      return bb.edges().map((ab => {
        let Ub = bb.edge(ab),
          Ab = {
            v: ab.v,
            w: ab.w
          };
        return void 0 !== ab.name && (Ab.name = ab.name), void 0 !== Ub && (Ab.value = Ub), Ab
      }))
    }

    function kb(bb) {
      let ab = new Bb(bb.options);
      return void 0 !== bb.value && ab.setGraph(bb.value), bb.nodes.forEach((bb => {
        ab.setNode(bb.v, bb.value), bb.parent && ab.setParent(bb.v, bb.parent)
      })), bb.edges.forEach((bb => {
        ab.setEdge({
          v: bb.v,
          w: bb.w,
          name: bb.name
        }, bb.value)
      })), ab
    }
    Yb({}, {
      read: () => kb,
      write: () => Xb
    });
    var yb = {};
    Yb(yb, {
      CycleException: () => Ib,
      bellmanFord: () => Db,
      components: () => zb,
      dijkstra: () => fb,
      dijkstraAll: () => mb,
      findCycles: () => Nb,
      floydWarshall: () => Hb,
      isAcyclic: () => Fb,
      postorder: () => qb,
      preorder: () => ub,
      prim: () => rb,
      shortestPaths: () => Kb,
      tarjan: () => pb,
      topsort: () => db
    });
    var Zb = () => 1;

    function Db(bb, ab, Ub, Ab) {
      return function(bb, ab, Ub, Ab) {
        let Mb, Tb = {},
          Eb = 0,
          Yb = bb.nodes(),
          Bb = function(bb) {
            let ab = Tb[bb.v],
              Ab = Tb[bb.w];
            if (!ab || !Ab) return;
            let Eb = Ub(bb);
            ab.distance + Eb < Ab.distance && (Tb[bb.w] = {
              distance: ab.distance + Eb,
              predecessor: bb.v
            }, Mb = !0)
          },
          eb = function() {
            Yb.forEach((function(bb) {
              Ab(bb).forEach((function(ab) {
                let Ub = ab.v === bb ? ab.v : ab.w,
                  Ab = Ub === ab.v ? ab.w : ab.v;
                Bb({
                  v: Ub,
                  w: Ab
                })
              }))
            }))
          };
        Yb.forEach((function(bb) {
          let Ub = bb === ab ? 0 : Number.POSITIVE_INFINITY;
          Tb[bb] = {
            distance: Ub,
            predecessor: ""
          }
        }));
        let vb = Yb.length;
        for (let Lb = 1; Lb < vb && (Mb = !1, Eb++, eb(), Mb); Lb++);
        if (Eb === vb - 1 && (Mb = !1, eb(), Mb)) throw new Error("The graph contains a negative weight cycle");
        return Tb
      }(bb, String(ab), Ub || Zb, Ab || function(ab) {
        var Ub;
        return null != (Ub = bb.outEdges(ab)) ? Ub : []
      })
    }

    function zb(bb) {
      let ab, Ub = {},
        Ab = [];

      function Mb(Ab) {
        var Tb, Eb;
        Ab in Ub || (Ub[Ab] = !0, ab.push(Ab), null == (Tb = bb.successors(Ab)) || Tb.forEach(Mb), null == (Eb = bb.predecessors(Ab)) || Eb.forEach(Mb))
      }
      return bb.nodes().forEach((function(bb) {
        ab = [], Mb(bb), ab.length && Ab.push(ab)
      })), Ab
    }
    var xb = class {
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
          let ab = this._keyIndices[bb];
          if (void 0 !== ab) return this._arr[ab].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(bb, ab) {
          let Ub = this._keyIndices,
            Ab = String(bb);
          if (!(Ab in Ub)) {
            let bb = this._arr,
              Mb = bb.length;
            return Ub[Ab] = Mb, bb.push({
              key: Ab,
              priority: ab
            }), this._decrease(Mb), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let bb = this._arr.pop();
          return delete this._keyIndices[bb.key], this._heapify(0), bb.key
        }
        decrease(bb, ab) {
          let Ub = this._keyIndices[bb];
          if (void 0 === Ub) throw new Error(`Key not found: ${bb}`);
          let Ab = this._arr[Ub].priority;
          if (ab > Ab) throw new Error(`New priority is greater than current priority. Key: ${bb} Old: ${Ab} New: ${ab}`);
          this._arr[Ub].priority = ab, this._decrease(Ub)
        }
        _heapify(bb) {
          let ab = this._arr,
            Ub = 2 * bb,
            Ab = Ub + 1,
            Mb = bb;
          Ub < ab.length && (Mb = ab[Ub].priority < ab[Mb].priority ? Ub : Mb, Ab < ab.length && (Mb = ab[Ab].priority < ab[Mb].priority ? Ab : Mb), Mb !== bb && (this._swap(bb, Mb), this._heapify(Mb)))
        }
        _decrease(bb) {
          let ab, Ub = this._arr,
            Ab = Ub[bb].priority;
          for (; 0 !== bb && (ab = bb >> 1, !(Ub[ab].priority < Ab));) this._swap(bb, ab), bb = ab
        }
        _swap(bb, ab) {
          let Ub = this._arr,
            Ab = this._keyIndices,
            Mb = Ub[bb],
            Tb = Ub[ab];
          Ub[bb] = Tb, Ub[ab] = Mb, Ab[Tb.key] = bb, Ab[Mb.key] = ab
        }
      },
      ib = () => 1;

    function fb(bb, ab, Ub, Ab) {
      return function(bb, ab, Ub, Ab) {
        let Mb, Tb, Eb = {},
          Yb = new xb,
          Bb = function(bb) {
            let ab = bb.v !== Mb ? bb.v : bb.w,
              Ab = Eb[ab];
            if (!Ab) return;
            let Bb = Ub(bb),
              eb = Tb.distance + Bb;
            if (Bb < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + bb + " Weight: " + Bb);
            eb < Ab.distance && (Ab.distance = eb, Ab.predecessor = Mb, Yb.decrease(ab, eb))
          };
        for (bb.nodes().forEach((function(bb) {
            let Ub = bb === ab ? 0 : Number.POSITIVE_INFINITY;
            Eb[bb] = {
              distance: Ub,
              predecessor: ""
            }, Yb.add(bb, Ub)
          })); Yb.size() > 0;) {
          Mb = Yb.removeMin();
          let bb = Eb[Mb];
          if (!bb || bb.distance === Number.POSITIVE_INFINITY) break;
          Tb = bb, Ab(Mb).forEach(Bb)
        }
        return Eb
      }(bb, String(ab), Ub || ib, Ab || function(ab) {
        var Ub;
        return null != (Ub = bb.outEdges(ab)) ? Ub : []
      })
    }

    function mb(bb, ab, Ub) {
      return bb.nodes().reduce((function(Ab, Mb) {
        return Ab[Mb] = fb(bb, Mb, ab, Ub), Ab
      }), {})
    }

    function pb(bb) {
      let ab = 0,
        Ub = [],
        Ab = {},
        Mb = [];

      function Tb(Eb) {
        var Yb;
        let Bb = Ab[Eb] = {
          onStack: !0,
          lowlink: ab,
          index: ab++
        };
        if (Ub.push(Eb), null == (Yb = bb.successors(Eb)) || Yb.forEach((function(bb) {
            if (bb in Ab) {
              let ab = Ab[bb];
              null != ab && ab.onStack && (Bb.lowlink = Math.min(Bb.lowlink, ab.index))
            } else {
              Tb(bb);
              let ab = Ab[bb];
              ab && (Bb.lowlink = Math.min(Bb.lowlink, ab.lowlink))
            }
          })), Bb.lowlink === Bb.index) {
          let bb, ab = [];
          do {
            bb = Ub.pop();
            let Mb = Ab[bb];
            Mb && (Mb.onStack = !1), ab.push(bb)
          } while (Eb !== bb);
          Mb.push(ab)
        }
      }
      return bb.nodes().forEach((function(bb) {
        bb in Ab || Tb(bb)
      })), Mb
    }

    function Nb(bb) {
      return pb(bb).filter((function(ab) {
        var Ub;
        let Ab = ab[0];
        return !!Ab && (ab.length > 1 || 1 === ab.length && (null != (Ub = bb.outEdges(Ab, Ab)) ? Ub : []).length > 0)
      }))
    }
    var Wb = () => 1;

    function Hb(bb, ab, Ub) {
      return function(bb, ab, Ub) {
        let Ab = {},
          Mb = bb.nodes();
        return Mb.forEach((function(bb) {
          let Tb = {};
          Ab[bb] = Tb, Tb[bb] = {
            distance: 0,
            predecessor: ""
          }, Mb.forEach((function(ab) {
            bb !== ab && (Tb[ab] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Ub(bb).forEach((function(Ub) {
            let Ab = Ub.v === bb ? Ub.w : Ub.v,
              Mb = ab(Ub);
            Tb[Ab] = {
              distance: Mb,
              predecessor: bb
            }
          }))
        })), Mb.forEach((function(bb) {
          let ab = Ab[bb];
          ab && Mb.forEach((function(Ub) {
            let Tb = Ab[Ub];
            Tb && Mb.forEach((function(Ub) {
              let Ab = Tb[bb],
                Mb = ab[Ub],
                Eb = Tb[Ub];
              if (Ab && Mb && Eb) {
                let bb = Ab.distance + Mb.distance;
                bb < Eb.distance && (Eb.distance = bb, Eb.predecessor = Mb.predecessor)
              }
            }))
          }))
        })), Ab
      }(bb, ab || Wb, Ub || function(ab) {
        var Ub;
        return null != (Ub = bb.outEdges(ab)) ? Ub : []
      })
    }
    var Ib = class extends Error {
      constructor(bb) {
        super(bb), this.name = "CycleException"
      }
    };

    function db(bb) {
      let ab = {},
        Ub = {},
        Ab = [];
      if (bb.sinks().forEach((function Mb(Tb) {
          var Eb;
          if (Tb in Ub) throw new Ib;
          Tb in ab || (Ub[Tb] = !0, ab[Tb] = !0, null == (Eb = bb.predecessors(Tb)) || Eb.forEach(Mb), delete Ub[Tb], Ab.push(Tb))
        })), Object.keys(ab).length !== bb.nodeCount()) throw new Ib;
      return Ab
    }

    function Fb(bb) {
      try {
        db(bb)
      } catch (ab) {
        if (ab instanceof Ib) return !1;
        throw ab
      }
      return !0
    }

    function hb(bb, ab, Ub, Ab, Mb) {
      Array.isArray(ab) || (ab = [ab]);
      let Tb = ab => {
          var Ub;
          return null != (Ub = bb.isDirected() ? bb.successors(ab) : bb.neighbors(ab)) ? Ub : []
        },
        Eb = {};
      return ab.forEach((function(ab) {
        if (!bb.hasNode(ab)) throw new Error("Graph does not have node: " + ab);
        Mb = Gb(bb, ab, "post" === Ub, Eb, Tb, Ab, Mb)
      })), Mb
    }

    function Gb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      return ab in Ab || (Ab[ab] = !0, Ub || (Eb = Tb(Eb, ab)), Mb(ab).forEach((function(ab) {
        Eb = Gb(bb, ab, Ub, Ab, Mb, Tb, Eb)
      })), Ub && (Eb = Tb(Eb, ab))), Eb
    }

    function Qb(bb, ab, Ub) {
      return hb(bb, ab, Ub, (function(bb, ab) {
        return bb.push(ab), bb
      }), [])
    }

    function qb(bb, ab) {
      return Qb(bb, ab, "post")
    }

    function ub(bb, ab) {
      return Qb(bb, ab, "pre")
    }

    function rb(bb, ab) {
      var Ub;
      let Ab, Mb = new Bb,
        Tb = {},
        Eb = new xb;

      function Yb(bb) {
        let Ub = bb.v === Ab ? bb.w : bb.v,
          Mb = Eb.priority(Ub);
        if (void 0 !== Mb) {
          let Yb = ab(bb);
          Yb < Mb && (Tb[Ub] = Ab, Eb.decrease(Ub, Yb))
        }
      }
      if (0 === bb.nodeCount()) return Mb;
      bb.nodes().forEach((function(bb) {
        Eb.add(bb, Number.POSITIVE_INFINITY), Mb.setNode(bb)
      }));
      let eb = bb.nodes()[0];
      void 0 !== eb && Eb.decrease(eb, 0);
      let vb = !1;
      for (; Eb.size() > 0;) {
        if (Ab = Eb.removeMin(), Ab in Tb) Mb.setEdge(Ab, Tb[Ab]);
        else {
          if (vb) throw new Error("Input graph is not connected: " + bb);
          vb = !0
        }
        null == (Ub = bb.nodeEdges(Ab)) || Ub.forEach(Yb)
      }
      return Mb
    }

    function Kb(bb, ab, Ub, Ab) {
      return function(bb, ab, Ub, Ab) {
        if (void 0 === Ub) return fb(bb, ab, Ub, Ab);
        let Mb = !1,
          Tb = bb.nodes();
        for (let Eb = 0; Eb < Tb.length; Eb++) {
          let Yb = Tb[Eb];
          if (void 0 === Yb) continue;
          let Bb = Ab(Yb);
          for (let bb = 0; bb < Bb.length; bb++) {
            let ab = Bb[bb];
            if (!ab) continue;
            let Ab = ab.v === Yb ? ab.v : ab.w;
            Ub({
              v: Ab,
              w: Ab === ab.v ? ab.w : ab.v
            }) < 0 && (Mb = !0)
          }
          if (Mb) return Db(bb, ab, Ub, Ab)
        }
        return fb(bb, ab, Ub, Ab)
      }(bb, ab, Ub, null != Ab ? Ab : ab => {
        var Ub;
        return null != (Ub = bb.outEdges(ab)) ? Ub : []
      })
    }
    var ob = Bb;

    function lb(bb, ab, Ub, Ab) {
      let Mb = Ab;
      for (; bb.hasNode(Mb);) Mb = Sb(Ab);
      return Ub.dummy = ab, bb.setNode(Mb, Ub), Mb
    }

    function tb(bb) {
      let ab = new ob({
        multigraph: bb.isMultigraph()
      }).setGraph(bb.graph());
      return bb.nodes().forEach((Ub => {
        bb.children(Ub).length || ab.setNode(Ub, bb.node(Ub))
      })), bb.edges().forEach((Ub => {
        ab.setEdge(Ub, bb.edge(Ub))
      })), ab
    }

    function wb(bb, ab) {
      let Ub, Ab, Mb = bb.x,
        Tb = bb.y,
        Eb = ab.x - Mb,
        Yb = ab.y - Tb,
        Bb = bb.width / 2,
        eb = bb.height / 2;
      if (!Eb && !Yb) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Yb) * Bb > Math.abs(Eb) * eb ? (Yb < 0 && (eb = -eb), Ub = eb * Eb / Yb, Ab = eb) : (Eb < 0 && (Bb = -Bb), Ub = Bb, Ab = Bb * Yb / Eb), {
        x: Mb + Ub,
        y: Tb + Ab
      }
    }

    function sb(bb) {
      let ab = ba(Ob(bb) + 1).map((() => []));
      return bb.nodes().forEach((Ub => {
        let Ab = bb.node(Ub),
          Mb = Ab.rank;
        void 0 !== Mb && (ab[Mb] || (ab[Mb] = []), ab[Mb][Ab.order] = Ub)
      })), ab
    }

    function gb(bb, ab, Ub, Ab) {
      let Mb = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Mb.rank = Ub, Mb.order = Ab), lb(bb, "border", Mb, ab)
    }
    var Cb = 65535;

    function Vb(bb, ab) {
      if (ab.length > Cb) {
        let Ub = function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cb,
            Ub = [];
          for (let Ab = 0; Ab < bb.length; Ab += ab) {
            let Mb = bb.slice(Ab, Ab + ab);
            Ub.push(Mb)
          }
          return Ub
        }(ab);
        return bb(...Ub.map((ab => bb(...ab))))
      }
      return bb(...ab)
    }

    function Ob(bb) {
      let ab = bb.nodes().map((ab => {
        let Ub = bb.node(ab).rank;
        return void 0 === Ub ? Number.MIN_VALUE : Ub
      }));
      return Vb(Math.max, ab)
    }

    function cb(bb, ab) {
      let Ub = Date.now();
      try {
        return ab()
      } finally {
        console.log(bb + " time: " + (Date.now() - Ub) + "ms")
      }
    }

    function Jb(bb, ab) {
      return ab()
    }
    var nb = 0;

    function Sb(bb) {
      return bb + "" + ++nb
    }

    function ba(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == ab && (ab = bb, bb = 0);
      let Ab = bb => bb < ab;
      Ub < 0 && (Ab = bb => ab < bb);
      let Mb = [];
      for (let Tb = bb; Ab(Tb); Tb += Ub) Mb.push(Tb);
      return Mb
    }

    function aa(bb, ab) {
      let Ub = {};
      for (let Ab of ab) void 0 !== bb[Ab] && (Ub[Ab] = bb[Ab]);
      return Ub
    }

    function Ua(bb, ab) {
      let Ub;
      return Ub = "string" == typeof ab ? bb => bb[ab] : ab, Object.entries(bb).reduce(((bb, ab) => {
        let [Ab, Mb] = ab;
        return bb[Ab] = Ub(Mb, Ab), bb
      }), {})
    }
    var Aa = "\0";

    function Ma(bb, ab, Ub) {
      var Ab, Mb, Tb, Eb, Yb, Bb;
      if (!(bb && ab && Ub && "edge" === ab.dummy && "edge" === Ub.dummy && ab.edgeObj && Ub.edgeObj && bb[ab.edgeObj.v] && bb[Ub.edgeObj.v] && bb[ab.edgeObj.w] && bb[Ub.edgeObj.w])) return 0;
      let eb = !0;
      ab.edgeObj.w === Ub.edgeObj.w && (eb = !1);
      let vb = eb ? null != (Mb = null == (Ab = bb[ab.edgeObj.v]) ? void 0 : Ab.rank) ? Mb : NaN : null != (Eb = null == (Tb = bb[ab.edgeObj.w]) ? void 0 : Tb.rank) ? Eb : NaN,
        Lb = Object.entries(bb).find((bb => {
          var Ub, Ab;
          return (null == (Ub = bb[1].edgeObj) ? void 0 : Ub.v) === ab.edgeObj.v && (null == (Ab = bb[1].edgeObj) ? void 0 : Ab.w) === ab.edgeObj.w && bb[1].rank === vb
        })),
        Pb = Object.entries(bb).find((bb => {
          var ab, Ab;
          return (null == (ab = bb[1].edgeObj) ? void 0 : ab.v) === Ub.edgeObj.v && (null == (Ab = bb[1].edgeObj) ? void 0 : Ab.w) === Ub.edgeObj.w && bb[1].rank === vb
        }));
      if (!Lb || !Pb) return 0;
      let Xb = null != (Yb = Lb[1].order) ? Yb : NaN,
        jb = null != (Bb = Pb[1].order) ? Bb : NaN;
      return isNaN(Xb - jb) ? 0 : Xb - jb
    }
    var Ta = "3.1.1";

    function Ea(bb) {
      bb._prev._next = bb._next, bb._next._prev = bb._prev, delete bb._next, delete bb._prev
    }

    function Ya(bb, ab) {
      if ("_next" !== bb && "_prev" !== bb) return ab
    }
    var Ba = class {
        constructor() {
          Mb(this, "_sentinel");
          let bb = {};
          bb._next = bb._prev = bb, this._sentinel = bb
        }
        dequeue() {
          let bb = this._sentinel,
            ab = bb._prev;
          if (ab !== bb) return Ea(ab), ab
        }
        enqueue(bb) {
          let ab = this._sentinel;
          bb._prev && bb._next && Ea(bb), bb._next = ab._next, ab._next._prev = bb, ab._next = bb, bb._prev = ab
        }
        toString() {
          let bb = [],
            ab = this._sentinel,
            Ub = ab._prev;
          for (; Ub !== ab;) bb.push(JSON.stringify(Ub, Ya)), Ub = Ub._prev;
          return "[" + bb.join(", ") + "]"
        }
      },
      ea = () => 1;

    function va(bb, ab) {
      if (bb.nodeCount() <= 1) return [];
      let Ub = function(bb, ab) {
        let Ub = new ob,
          Ab = 0,
          Mb = 0;
        bb.nodes().forEach((bb => {
          Ub.setNode(bb, {
            v: bb,
            in: 0,
            out: 0
          })
        })), bb.edges().forEach((bb => {
          let Tb = Ub.edge(bb.v, bb.w) || 0,
            Eb = ab(bb),
            Yb = Tb + Eb;
          Ub.setEdge(bb.v, bb.w, Yb);
          let Bb = Ub.node(bb.v),
            eb = Ub.node(bb.w);
          Mb = Math.max(Mb, Bb.out += Eb), Ab = Math.max(Ab, eb.in += Eb)
        }));
        let Tb = function(bb) {
            let ab = [];
            for (let Ub = 0; Ub < bb; Ub++) ab.push(Ub);
            return ab
          }(Mb + Ab + 3).map((() => new Ba)),
          Eb = Ab + 1;
        return Ub.nodes().forEach((bb => {
          Pa(Tb, Eb, Ub.node(bb))
        })), {
          graph: Ub,
          buckets: Tb,
          zeroIdx: Eb
        }
      }(bb, ab || ea);
      return function(bb, ab, Ub) {
        var Ab;
        let Mb, Tb = [],
          Eb = ab[ab.length - 1],
          Yb = ab[0];
        for (; bb.nodeCount();) {
          for (; Mb = Yb.dequeue();) La(bb, ab, Ub, Mb);
          for (; Mb = Eb.dequeue();) La(bb, ab, Ub, Mb);
          if (bb.nodeCount())
            for (let Eb = ab.length - 2; Eb > 0; --Eb)
              if (Mb = null == (Ab = ab[Eb]) ? void 0 : Ab.dequeue(), Mb) {
                Tb = Tb.concat(La(bb, ab, Ub, Mb, !0) || []);
                break
              }
        }
        return Tb
      }(Ub.graph, Ub.buckets, Ub.zeroIdx).flatMap((ab => bb.outEdges(ab.v, ab.w) || []))
    }

    function La(bb, ab, Ub, Ab, Mb) {
      let Tb = [],
        Eb = Mb ? Tb : void 0;
      return (bb.inEdges(Ab.v) || []).forEach((Ab => {
        let Eb = bb.edge(Ab),
          Yb = bb.node(Ab.v);
        Mb && Tb.push({
          v: Ab.v,
          w: Ab.w
        }), Yb.out -= Eb, Pa(ab, Ub, Yb)
      })), (bb.outEdges(Ab.v) || []).forEach((Ab => {
        let Mb = bb.edge(Ab),
          Tb = Ab.w,
          Eb = bb.node(Tb);
        Eb.in -= Mb, Pa(ab, Ub, Eb)
      })), bb.removeNode(Ab.v), Eb
    }

    function Pa(bb, ab, Ub) {
      var Ab, Mb, Tb;
      Ub.out ? Ub.in ? null == (Tb = bb[Ub.out - Ub.in + ab]) || Tb.enqueue(Ub) : null == (Mb = bb[bb.length - 1]) || Mb.enqueue(Ub) : null == (Ab = bb[0]) || Ab.enqueue(Ub)
    }

    function Xa(bb, ab) {
      var Ub;
      ("greedy" === bb.graph().acyclicer ? va(bb, (Ub = bb, bb => Ub.edge(bb).weight)) : function(bb, ab) {
        let Ub = [],
          Ab = {},
          Mb = {};

        function Tb(ab) {
          Object.hasOwn(Mb, ab) || (Mb[ab] = !0, Ab[ab] = !0, bb.outEdges(ab).forEach((bb => {
            Object.hasOwn(Ab, bb.w) ? Ub.push(bb) : Tb(bb.w)
          })), delete Ab[ab])
        }

        function Eb(Tb) {
          var Yb;
          Object.hasOwn(Mb, Tb) || (Mb[Tb] = !0, Ab[Tb] = !0, null == (Yb = bb.outEdges(Tb)) || Yb.forEach((Mb => {
            var Yb, Bb;
            Object.hasOwn(Ab, Mb.w) || (null == (Yb = ab.node(Tb)) ? void 0 : Yb.rank) > (null == (Bb = ab.node(Mb.w)) ? void 0 : Bb.rank) && function(bb, ab, Ub) {
              let Ab = new Set;

              function Mb(ab) {
                var Tb;
                if (bb.sources().includes(ab)) return !0;
                Ab.add(ab);
                for (let Eb of null != (Tb = bb.inEdges(ab)) ? Tb : [])
                  if ((Eb.v !== Ub.v || Eb.w !== Ub.w) && !Ab.has(Eb.v) && Mb(Eb.v)) return !0;
                return !1
              }
              return Mb(ab)
            }(bb, Mb.w, Mb) ? Ub.push(Mb) : Eb(Mb.w)
          })), delete Ab[Tb])
        }
        let Yb = Tb;
        return ab && "function" == typeof ab.node && (Yb = Eb), bb.sources().forEach(Yb), bb.nodes().forEach(Yb), Ub
      }(bb, null != ab ? ab : null)).forEach((ab => {
        let Ub = bb.edge(ab);
        bb.removeEdge(ab), Ub.forwardName = ab.name, Ub.reversed = !0, bb.setEdge(ab.w, ab.v, Ub, Sb("rev"))
      }))
    }

    function ja(bb) {
      bb.graph().dummyChains = [], bb.edges().forEach((ab => function(bb, ab) {
        let Ub, Ab, Mb, Tb = ab.v,
          Eb = bb.node(Tb).rank,
          Yb = ab.w,
          Bb = bb.node(Yb).rank,
          eb = ab.name,
          vb = bb.edge(ab),
          Lb = vb.labelRank;
        if (Bb === Eb + 1) return;
        for (bb.removeEdge(ab), Mb = 0, ++Eb; Eb < Bb; ++Mb, ++Eb) vb.points = [], Ab = {
          width: 0,
          height: 0,
          edgeLabel: vb,
          edgeObj: ab,
          rank: Eb
        }, Ub = lb(bb, "edge", Ab, "_d"), Eb === Lb && (Ab.width = vb.width, Ab.height = vb.height, Ab.dummy = "edge-label", Ab.labelpos = vb.labelpos), bb.setEdge(Tb, Ub, {
          weight: vb.weight
        }, eb), 0 === Mb && bb.graph().dummyChains.push(Ub), Tb = Ub;
        bb.setEdge(Tb, Yb, {
          weight: vb.weight
        }, eb)
      }(bb, ab)))
    }

    function Ra(bb) {
      let ab = {};
      bb.sources().forEach((function Ub(Ab) {
        let Mb = bb.node(Ab);
        if (Object.hasOwn(ab, Ab)) return Mb.rank;
        ab[Ab] = !0;
        let Tb = bb.outEdges(Ab),
          Eb = Tb ? Tb.map((ab => null == ab ? Number.POSITIVE_INFINITY : Ub(ab.w) - bb.edge(ab).minlen)) : [],
          Yb = Vb(Math.min, Eb);
        return Yb === Number.POSITIVE_INFINITY && (Yb = 0), Mb.rank = Yb
      }))
    }

    function ka(bb, ab) {
      return bb.node(ab.w).rank - bb.node(ab.v).rank - bb.edge(ab).minlen
    }
    var ya = function(bb) {
      let ab = new ob({
          directed: !1
        }),
        Ub = bb.nodes();
      if (0 === Ub.length) throw new Error("Graph must have at least one node");
      let Ab, Mb, Tb = Ub[0],
        Eb = bb.nodeCount();
      for (ab.setNode(Tb, {}); Za(ab, bb) < Eb && (Ab = Da(ab, bb), Ab);) Mb = ab.hasNode(Ab.v) ? ka(bb, Ab) : -ka(bb, Ab), za(ab, bb, Mb);
      return ab
    };

    function Za(bb, ab) {
      return bb.nodes().forEach((function Ub(Ab) {
        let Mb = ab.nodeEdges(Ab);
        Mb && Mb.forEach((Mb => {
          let Tb = Mb.v,
            Eb = Ab === Tb ? Mb.w : Tb;
          !bb.hasNode(Eb) && !ka(ab, Mb) && (bb.setNode(Eb, {}), bb.setEdge(Ab, Eb, {}), Ub(Eb))
        }))
      })), bb.nodeCount()
    }

    function Da(bb, ab) {
      return ab.edges().reduce(((Ub, Ab) => {
        let Mb = Number.POSITIVE_INFINITY;
        return bb.hasNode(Ab.v) !== bb.hasNode(Ab.w) && (Mb = ka(ab, Ab)), Mb < Ub[0] ? [Mb, Ab] : Ub
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function za(bb, ab, Ub) {
      bb.nodes().forEach((bb => ab.node(bb).rank += Ub))
    }
    var {
      preorder: xa,
      postorder: ia
    } = yb, fa = ma;

    function ma(bb) {
      bb = function(bb) {
        let ab = (new ob).setGraph(bb.graph());
        return bb.nodes().forEach((Ub => ab.setNode(Ub, bb.node(Ub)))), bb.edges().forEach((Ub => {
          let Ab = ab.edge(Ub.v, Ub.w) || {
              weight: 0,
              minlen: 1
            },
            Mb = bb.edge(Ub);
          ab.setEdge(Ub.v, Ub.w, {
            weight: Ab.weight + Mb.weight,
            minlen: Math.max(Ab.minlen, Mb.minlen)
          })
        })), ab
      }(bb), Ra(bb);
      let ab, Ub, Ab = ya(bb);
      for (Wa(Ab), pa(Ab, bb); ab = Ia(Ab);) Ub = da(Ab, bb, ab), Fa(Ab, bb, ab, Ub)
    }

    function pa(bb, ab) {
      let Ub = ia(bb, bb.nodes());
      Ub = Ub.slice(0, Ub.length - 1), Ub.forEach((Ub => function(bb, ab, Ub) {
        let Ab = bb.node(Ub).parent,
          Mb = bb.edge(Ub, Ab);
        Mb.cutvalue = Na(bb, ab, Ub)
      }(bb, ab, Ub)))
    }

    function Na(bb, ab, Ub) {
      let Ab = bb.node(Ub).parent,
        Mb = !0,
        Tb = ab.edge(Ub, Ab),
        Eb = 0;
      Tb || (Mb = !1, Tb = ab.edge(Ab, Ub)), Eb = Tb.weight;
      let Yb = ab.nodeEdges(Ub);
      return Yb && Yb.forEach((Tb => {
        let Yb = Tb.v === Ub,
          Bb = Yb ? Tb.w : Tb.v;
        if (Bb !== Ab) {
          let Ab = Yb === Mb,
            eb = ab.edge(Tb).weight;
          if (Eb += Ab ? eb : -eb, function(bb, ab, Ub) {
              return bb.hasEdge(ab, Ub)
            }(bb, Ub, Bb)) {
            let ab = bb.edge(Ub, Bb).cutvalue;
            Eb += Ab ? -ab : ab
          }
        }
      })), Eb
    }

    function Wa(bb, ab) {
      arguments.length < 2 && (ab = bb.nodes()[0]), Ha(bb, {}, 1, ab)
    }

    function Ha(bb, ab, Ub, Ab, Mb) {
      let Tb = Ub,
        Eb = bb.node(Ab);
      ab[Ab] = !0;
      let Yb = bb.neighbors(Ab);
      return Yb && Yb.forEach((Mb => {
        Object.hasOwn(ab, Mb) || (Ub = Ha(bb, ab, Ub, Mb, Ab))
      })), Eb.low = Tb, Eb.lim = Ub++, Mb ? Eb.parent = Mb : delete Eb.parent, Ub
    }

    function Ia(bb) {
      return bb.edges().find((ab => bb.edge(ab).cutvalue < 0))
    }

    function da(bb, ab, Ub) {
      let Ab = Ub.v,
        Mb = Ub.w;
      ab.hasEdge(Ab, Mb) || (Ab = Ub.w, Mb = Ub.v);
      let Tb = bb.node(Ab),
        Eb = bb.node(Mb),
        Yb = Tb,
        Bb = !1;
      return Tb.lim > Eb.lim && (Yb = Eb, Bb = !0), ab.edges().filter((ab => Bb === ha(bb, bb.node(ab.v), Yb) && Bb !== ha(bb, bb.node(ab.w), Yb))).reduce(((bb, Ub) => ka(ab, Ub) < ka(ab, bb) ? Ub : bb))
    }

    function Fa(bb, ab, Ub, Ab) {
      let Mb = Ub.v,
        Tb = Ub.w;
      bb.removeEdge(Mb, Tb), bb.setEdge(Ab.v, Ab.w, {}), Wa(bb), pa(bb, ab),
        function(bb, ab) {
          let Ub = bb.nodes().find((ab => !bb.node(ab).parent));
          if (!Ub) return;
          let Ab = xa(bb, [Ub]);
          Ab = Ab.slice(1), Ab.forEach((Ub => {
            let Ab = bb.node(Ub).parent,
              Mb = ab.edge(Ub, Ab),
              Tb = !1;
            Mb || (Mb = ab.edge(Ab, Ub), Tb = !0), ab.node(Ub).rank = ab.node(Ab).rank + (Tb ? Mb.minlen : -Mb.minlen)
          }))
        }(bb, ab)
    }

    function ha(bb, ab, Ub) {
      return Ub.low <= ab.lim && ab.lim <= Ub.lim
    }
    ma.initLowLimValues = Wa, ma.initCutValues = pa, ma.calcCutValue = Na, ma.leaveEdge = Ia, ma.enterEdge = da, ma.exchangeEdges = Fa;
    var Ga = function(bb) {
      let ab = bb.graph().ranker;
      if ("function" == typeof ab) return ab(bb);
      switch (ab) {
        case "network-simplex":
        default:
          qa(bb);
          break;
        case "tight-tree":
          ! function(bb) {
            Ra(bb), ya(bb)
          }(bb);
          break;
        case "longest-path":
          Qa(bb);
        case "none":
      }
    };
    var Qa = Ra;

    function qa(bb) {
      fa(bb)
    }
    var ua = function(bb) {
      let ab = function(bb) {
          let ab = {},
            Ub = 0;

          function Ab(Mb) {
            let Tb = Ub;
            bb.children(Mb).forEach(Ab), ab[Mb] = {
              low: Tb,
              lim: Ub++
            }
          }
          return bb.children(Aa).forEach(Ab), ab
        }(bb),
        Ub = bb.graph();
      if (!Array.isArray(Ub.dummyChains)) return;
      Ub.dummyChains.forEach((Ub => {
        let Ab = bb.node(Ub),
          Mb = Ab.edgeObj,
          Tb = function(bb, ab, Ub, Ab) {
            let Mb, Tb = [],
              Eb = [],
              Yb = Math.min(ab[Ub].low, ab[Ab].low),
              Bb = Math.max(ab[Ub].lim, ab[Ab].lim);
            Mb = Ub;
            do {
              Mb = bb.parent(Mb), Tb.push(Mb)
            } while (Mb && (ab[Mb].low > Yb || Bb > ab[Mb].lim));
            let eb = Mb,
              vb = Ab;
            for (;
              (vb = bb.parent(vb)) !== eb;) Eb.push(vb);
            return {
              path: Tb.concat(Eb.reverse()),
              lca: eb
            }
          }(bb, ab, Mb.v, Mb.w),
          Eb = Tb.path,
          Yb = Tb.lca,
          Bb = 0,
          eb = Eb[Bb],
          vb = !0;
        for (; Ub !== Mb.w;) {
          if (Ab = bb.node(Ub), vb) {
            for (;
              (eb = Eb[Bb]) !== Yb && bb.node(eb).maxRank < Ab.rank;) Bb++;
            eb === Yb && (vb = !1)
          }
          if (!vb) {
            for (; Bb < Eb.length - 1 && bb.node(Eb[Bb + 1]).minRank <= Ab.rank;) Bb++;
            eb = Eb[Bb]
          }
          void 0 !== eb && bb.setParent(Ub, eb), Ub = bb.successors(Ub)[0]
        }
      }))
    };

    function ra(bb) {
      let ab = lb(bb, "root", {}, "_root"),
        Ub = function(bb) {
          let ab = {};

          function Ub(Ab, Mb) {
            let Tb = bb.children(Ab);
            Tb && Tb.length && Tb.forEach((bb => Ub(bb, Mb + 1))), ab[Ab] = Mb
          }
          return bb.children(Aa).forEach((bb => Ub(bb, 1))), ab
        }(bb),
        Ab = Object.values(Ub),
        Mb = Vb(Math.max, Ab) - 1,
        Tb = 2 * Mb + 1;
      bb.graph().nestingRoot = ab, bb.edges().forEach((ab => bb.edge(ab).minlen *= Tb));
      let Eb = function(bb) {
        return bb.edges().reduce(((ab, Ub) => ab + bb.edge(Ub).weight), 0)
      }(bb) + 1;
      bb.children(Aa).forEach((Ab => {
        Ka(bb, ab, Tb, Eb, Mb, Ub, Ab)
      })), bb.graph().nodeRankFactor = Tb
    }

    function Ka(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      var Yb;
      let Bb = bb.children(Eb);
      if (!Bb.length) return void(Eb !== ab && bb.setEdge(ab, Eb, {
        weight: 0,
        minlen: Ub
      }));
      let eb = gb(bb, "_bt"),
        vb = gb(bb, "_bb"),
        Lb = bb.node(Eb);
      bb.setParent(eb, Eb), Lb.borderTop = eb, bb.setParent(vb, Eb), Lb.borderBottom = vb, Bb.forEach((Yb => {
        var Bb;
        Ka(bb, ab, Ub, Ab, Mb, Tb, Yb);
        let Lb = bb.node(Yb),
          Pb = Lb.borderTop ? Lb.borderTop : Yb,
          Xb = Lb.borderBottom ? Lb.borderBottom : Yb,
          jb = Lb.borderTop ? Ab : 2 * Ab,
          Rb = Pb !== Xb ? 1 : Mb - (null != (Bb = Tb[Eb]) ? Bb : 0) + 1;
        bb.setEdge(eb, Pb, {
          weight: jb,
          minlen: Rb,
          nestingEdge: !0
        }), bb.setEdge(Xb, vb, {
          weight: jb,
          minlen: Rb,
          nestingEdge: !0
        })
      })), bb.parent(Eb) || bb.setEdge(ab, eb, {
        weight: 0,
        minlen: Mb + (null != (Yb = Tb[Eb]) ? Yb : 0)
      })
    }
    var oa = function(bb) {
      bb.children(Aa).forEach((function ab(Ub) {
        let Ab = bb.children(Ub),
          Mb = bb.node(Ub);
        if (Ab.length && Ab.forEach(ab), Mb && Object.hasOwn(Mb, "minRank")) {
          Mb.borderLeft = [], Mb.borderRight = [];
          for (let ab = Mb.minRank, Ab = Mb.maxRank + 1; ab < Ab; ++ab) la(bb, "borderLeft", "_bl", Ub, Mb, ab), la(bb, "borderRight", "_br", Ub, Mb, ab)
        }
      }))
    };

    function la(bb, ab, Ub, Ab, Mb, Tb) {
      let Eb = {
          width: 0,
          height: 0,
          rank: Tb,
          borderType: ab
        },
        Yb = Mb[ab][Tb - 1],
        Bb = lb(bb, "border", Eb, Ub);
      Mb[ab][Tb] = Bb, bb.setParent(Bb, Ab), Yb && bb.setEdge(Yb, Bb, {
        weight: 1
      })
    }

    function ta(bb) {
      var ab;
      let Ub = null == (ab = bb.graph().rankdir) ? void 0 : ab.toLowerCase();
      ("bt" === Ub || "rl" === Ub) && function(bb) {
        bb.nodes().forEach((ab => ga(bb.node(ab)))), bb.edges().forEach((ab => {
          var Ub;
          let Ab = bb.edge(ab);
          null == (Ub = Ab.points) || Ub.forEach(ga), Object.hasOwn(Ab, "y") && ga(Ab)
        }))
      }(bb), ("lr" === Ub || "rl" === Ub) && (function(bb) {
        bb.nodes().forEach((ab => Ca(bb.node(ab)))), bb.edges().forEach((ab => {
          var Ub;
          let Ab = bb.edge(ab);
          null == (Ub = Ab.points) || Ub.forEach(Ca), Object.hasOwn(Ab, "x") && Ca(Ab)
        }))
      }(bb), wa(bb))
    }

    function wa(bb) {
      bb.nodes().forEach((ab => sa(bb.node(ab)))), bb.edges().forEach((ab => sa(bb.edge(ab))))
    }

    function sa(bb) {
      let ab = bb.width;
      bb.width = bb.height, bb.height = ab
    }

    function ga(bb) {
      bb.y = -bb.y
    }

    function Ca(bb) {
      let ab = bb.x;
      bb.x = bb.y, bb.y = ab
    }

    function Va(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Ub = {},
        Ab = bb.nodes().filter((ab => !bb.children(ab).length)),
        Mb = Ab.map((ab => bb.node(ab).rank)),
        Tb = ba(Vb(Math.max, Mb) + 1).map((() => []));
      return Ab.sort(((ab, Ub) => bb.node(ab).rank - bb.node(Ub).rank)).forEach((function Ab(Mb) {
        if (Ub[Mb]) return;
        Ub[Mb] = !0;
        let Eb = bb.node(Mb);
        Tb[Eb.rank].push(Mb);
        let Yb = bb.successors(Mb);
        Yb && [...Yb].sort(((Ub, Ab) => function(Ub, Ab) {
          let Mb = bb.node(Ub),
            Tb = bb.node(Ab);
          return Ma(ab, Mb, Tb)
        }(Ub, Ab))).forEach(Ab)
      })), Tb
    }

    function Oa(bb, ab) {
      let Ub = 0;
      for (let Ab = 1; Ab < ab.length; ++Ab) Ub += ca(bb, ab[Ab - 1], ab[Ab]);
      return Ub
    }

    function ca(bb, ab, Ub) {
      let Ab = function(bb, ab) {
          return bb.reduce(((bb, Ub, Ab) => (bb[Ub] = ab[Ab], bb)), {})
        }(Ub, Ub.map(((bb, ab) => ab))),
        Mb = ab.flatMap((ab => {
          let Ub = bb.outEdges(ab);
          return Ub ? Ub.map((ab => ({
            pos: Ab[ab.w],
            weight: bb.edge(ab).weight
          }))).sort(((bb, ab) => bb.pos - ab.pos)) : []
        })),
        Tb = 1;
      for (; Tb < Ub.length;) Tb <<= 1;
      let Eb = 2 * Tb - 1;
      Tb -= 1;
      let Yb = new Array(Eb).fill(0),
        Bb = 0;
      return Mb.forEach((bb => {
        let ab = bb.pos + Tb;
        Yb[ab] += bb.weight;
        let Ub = 0;
        for (; ab > 0;) ab % 2 && (Ub += Yb[ab + 1]), ab = ab - 1 >> 1, Yb[ab] += bb.weight;
        Bb += bb.weight * Ub
      })), Bb
    }

    function Ja(bb, ab) {
      let Ub = {};
      return bb.forEach(((bb, ab) => {
          let Ab = {
            indegree: 0,
            in: [],
            out: [],
            vs: [bb.v],
            i: ab
          };
          void 0 !== bb.barycenter && (Ab.barycenter = bb.barycenter, Ab.weight = bb.weight), Ub[bb.v] = Ab
        })), ab.edges().forEach((bb => {
          let ab = Ub[bb.v],
            Ab = Ub[bb.w];
          void 0 !== ab && void 0 !== Ab && (Ab.indegree++, ab.out.push(Ab))
        })),
        function(bb) {
          let ab = [];

          function Ub(bb) {
            return ab => {
              ab.merged || (void 0 === ab.barycenter || void 0 === bb.barycenter || ab.barycenter >= bb.barycenter) && function(bb, ab) {
                let Ub = 0,
                  Ab = 0;
                bb.weight && (Ub += bb.barycenter * bb.weight, Ab += bb.weight), ab.weight && (Ub += ab.barycenter * ab.weight, Ab += ab.weight), bb.vs = ab.vs.concat(bb.vs), bb.barycenter = Ub / Ab, bb.weight = Ab, bb.i = Math.min(ab.i, bb.i), ab.merged = !0
              }(bb, ab)
            }
          }

          function Ab(ab) {
            return Ub => {
              Ub.in.push(ab), 0 === --Ub.indegree && bb.push(Ub)
            }
          }
          for (; bb.length;) {
            let Mb = bb.pop();
            ab.push(Mb), Mb.in.reverse().forEach(Ub(Mb)), Mb.out.forEach(Ab(Mb))
          }
          return ab.filter((bb => !bb.merged)).map((bb => aa(bb, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Ub).filter((bb => !bb.indegree)))
    }

    function na(bb, ab, Ub, Ab, Mb) {
      let Tb = {},
        Eb = null,
        Yb = null,
        Bb = Mb;
      "boolean" == typeof ab ? (Bb = ab, Tb = {}) : ab && (Tb = ab, Eb = null != Ub ? Ub : null, Yb = null != Ab ? Ab : null);
      let eb = function(bb, ab) {
          let Ub = {
            lhs: [],
            rhs: []
          };
          return bb.forEach((bb => {
            ab(bb) ? Ub.lhs.push(bb) : Ub.rhs.push(bb)
          })), Ub
        }(bb, (bb => Object.hasOwn(bb, "barycenter"))),
        vb = eb.lhs,
        Lb = eb.rhs.sort(((bb, ab) => ab.i - bb.i)),
        Pb = [],
        Xb = 0,
        jb = 0,
        Rb = 0;
      vb.sort(function(bb, ab, Ub) {
        return (Ab, Mb) => {
          if (Ab.barycenter < Mb.barycenter) return -1;
          if (Ab.barycenter > Mb.barycenter) return 1;
          if (bb && ("string" == typeof Ab.vs[0] || "string" == typeof Mb.vs[0])) {
            let Ub = bb.node(Ab.vs[0]),
              Tb = bb.node(Mb.vs[0]),
              Eb = Ma(ab, Ub, Tb);
            if (0 !== Eb) return Eb
          }
          return Ub ? Mb.i - Ab.i : Ab.i - Mb.i
        }
      }(Yb, Eb, !!Bb));
      for (let [yb, Zb] of Object.entries(Tb)) {
        let bb = vb.findIndex((bb => bb.vs[0] === yb));
        vb.splice(bb + 1, 0, Zb)
      }
      Rb = Sa(Pb, Lb, Rb), vb.forEach((bb => {
        Rb += bb.vs.length, Pb.push(bb.vs), Xb += bb.barycenter * bb.weight, jb += bb.weight, Rb = Sa(Pb, Lb, Rb)
      }));
      let kb = {
        vs: Pb.flat(1)
      };
      return jb && (kb.barycenter = Xb / jb, kb.weight = jb), kb
    }

    function Sa(bb, ab, Ub) {
      let Ab;
      for (; ab.length && (Ab = ab[ab.length - 1]).i <= Ub;) ab.pop(), bb.push(Ab.vs), Ub++;
      return Ub
    }

    function bU(bb, ab, Ub, Ab, Mb) {
      var Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb;
      let kb = null,
        yb = Mb;
      "boolean" == typeof Ab ? (yb = Ab, kb = null) : void 0 !== Ab && (kb = Ab);
      let Zb = bb.children(ab),
        Db = bb.node(ab),
        zb = Db ? Db.borderLeft : void 0,
        xb = Db ? Db.borderRight : void 0,
        ib = {};
      zb && (Zb = Zb.filter((bb => bb !== zb && bb !== xb)));
      let fb = function(bb) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((ab => {
          let Ub = bb.inEdges(ab);
          if (!Ub || !Ub.length) return {
            v: ab
          };
          {
            let Ab = Ub.reduce(((ab, Ub) => {
              let Ab = bb.edge(Ub),
                Mb = bb.node(Ub.v);
              return {
                sum: ab.sum + Ab.weight * Mb.order,
                weight: ab.weight + Ab.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: ab,
              barycenter: Ab.sum / Ab.weight,
              weight: Ab.weight
            }
          }
        }))
      }(bb, Zb);
      fb.forEach((ab => {
        if (bb.children(ab.v).length) {
          let {
            result: Ab
          } = bU(bb, ab.v, Ub, kb, yb);
          ib[ab.v] = Ab, Object.hasOwn(Ab, "barycenter") && function(bb, ab) {
            void 0 !== bb.barycenter ? (bb.barycenter = (bb.barycenter * bb.weight + ab.barycenter * ab.weight) / (bb.weight + ab.weight), bb.weight += ab.weight) : (bb.barycenter = ab.barycenter, bb.weight = ab.weight)
          }(ab, Ab)
        }
      }));
      let mb = Ja(fb, Ub);
      ! function(bb, ab) {
        bb.forEach((bb => {
          bb.vs = bb.vs.flatMap((bb => ab[bb] ? ab[bb].vs : bb))
        }))
      }(mb, ib);
      let pb = {},
        Nb = !1;
      for (let Hb = 0; Hb < mb.length; Hb++)
        for (let ab = Hb + 1; ab < mb.length; ab++)
          if (mb[Hb] && mb[ab] && null != (Tb = mb[Hb]) && Tb.barycenter && null != (Eb = mb[ab]) && Eb.barycenter && (null == (Yb = mb[Hb]) ? void 0 : Yb.barycenter) === mb[ab].barycenter) {
            let Ub = null != (eb = null == (Bb = mb[Hb]) ? void 0 : Bb.vs[0]) ? eb : "",
              Ab = null != (Lb = null == (vb = mb[ab]) ? void 0 : vb.vs[0]) ? Lb : "",
              Mb = bb.node(Ub),
              Tb = bb.node(Ab);
            if ("edge" === Mb.dummy && "edge" === Tb.dummy && (null == (Pb = Mb.edgeObj) ? void 0 : Pb.v) === (null == (Xb = Tb.edgeObj) ? void 0 : Xb.v) && (null == (jb = Mb.edgeObj) ? void 0 : jb.w) === (null == (Rb = Tb.edgeObj) ? void 0 : Rb.w)) {
              if (Mb.edgeLabel.reversed) {
                pb[Ab] = mb[Hb], mb.splice(Hb, 1), Hb--;
                break
              }
              pb[Ub] = mb[ab], mb.splice(ab, 1), ab--
            } else Nb = !0
          } let Wb = na(mb, pb, kb, bb, yb);
      if (zb && xb) {
        Wb.vs = [zb, Wb.vs, xb].flat(1);
        let ab = bb.predecessors(zb);
        if (ab && ab.length) {
          let Ub = bb.node(ab[0]),
            Ab = bb.predecessors(xb),
            Mb = bb.node(Ab[0]);
          Object.hasOwn(Wb, "barycenter") || (Wb.barycenter = 0, Wb.weight = 0), Wb.barycenter = (Wb.barycenter * Wb.weight + Ub.order + Mb.order) / (Wb.weight + 2), Wb.weight += 2
        }
      }
      return Object.defineProperty(Wb, "result", {
        value: Wb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Wb, "usedBias", {
        value: Nb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Wb
    }

    function aU(bb, ab, Ub, Ab) {
      Ab || (Ab = bb.nodes());
      let Mb = function(bb) {
          let ab;
          for (; bb.hasNode(ab = Sb("_root")););
          return ab
        }(bb),
        Tb = new ob({
          compound: !0
        }).setGraph({
          root: Mb
        }).setDefaultNodeLabel((ab => bb.node(ab)));
      return Ab.forEach((Ab => {
        let Eb = bb.node(Ab),
          Yb = bb.parent(Ab);
        if (Eb.rank === ab || Eb.minRank <= ab && ab <= Eb.maxRank) {
          Tb.setNode(Ab), Tb.setParent(Ab, Yb || Mb);
          let Bb = bb[Ub](Ab);
          Bb && Bb.forEach((ab => {
            let Ub = ab.v === Ab ? ab.w : ab.v,
              Mb = Tb.edge(Ub, Ab),
              Eb = void 0 !== Mb ? Mb.weight : 0;
            Tb.setEdge(Ub, Ab, {
              weight: bb.edge(ab).weight + Eb
            })
          })), Object.hasOwn(Eb, "minRank") && Tb.setNode(Ab, {
            borderLeft: Eb.borderLeft[ab],
            borderRight: Eb.borderRight[ab]
          })
        }
      })), Tb
    }

    function UU(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof ab.customOrder) return void ab.customOrder(bb, UU);
      let Ab = Ob(bb),
        Mb = AU(bb, ba(1, Ab + 1), "inEdges"),
        Tb = AU(bb, ba(Ab - 1, -1, -1), "outEdges"),
        Eb = Va(bb, Ub);
      if (TU(bb, Eb), ab.disableOptimalOrderHeuristic) return;
      let Yb, Bb = Number.POSITIVE_INFINITY,
        eb = ab.constraints || [];
      for (let vb = 0, Lb = 0; Lb < 4; ++vb, ++Lb) {
        MU(vb % 2 ? Mb : Tb, vb % 4 >= 2, eb, Ub), Eb = sb(bb);
        let ab = Oa(bb, Eb);
        ab < Bb ? (Lb = 0, Yb = Object.assign({}, Eb), Bb = ab) : ab === Bb && (Yb = structuredClone(Eb))
      }
      TU(bb, Yb)
    }

    function AU(bb, ab, Ub) {
      let Ab = new Map,
        Mb = (bb, ab) => {
          Ab.has(bb) || Ab.set(bb, []), Ab.get(bb).push(ab)
        };
      for (let Tb of bb.nodes()) {
        let ab = bb.node(Tb);
        if ("number" == typeof ab.rank && Mb(ab.rank, Tb), "number" == typeof ab.minRank && "number" == typeof ab.maxRank)
          for (let bb = ab.minRank; bb <= ab.maxRank; bb++) bb !== ab.rank && Mb(bb, Tb)
      }
      return ab.map((function(ab) {
        return aU(bb, ab, Ub, Ab.get(ab) || [])
      }))
    }

    function MU(bb, ab, Ub, Ab) {
      let Mb = !0,
        Tb = new ob;
      bb.forEach((function(bb) {
        Ub.forEach((bb => Tb.setEdge(bb.left, bb.right)));
        let Eb = bb.graph().root,
          {
            result: Yb,
            usedBias: Bb
          } = bU(bb, Eb, Tb, Ab, Mb);
        ab && Bb && (Mb = !Mb), Yb.vs.forEach(((ab, Ub) => bb.node(ab).order = Ub)),
          function(bb, ab, Ub) {
            let Ab, Mb = {};
            Ub.forEach((Ub => {
              let Tb, Eb, Yb = bb.parent(Ub);
              for (; Yb;) {
                if (Tb = bb.parent(Yb), Tb ? (Eb = Mb[Tb], Mb[Tb] = Yb) : (Eb = Ab, Ab = Yb), Eb && Eb !== Yb) return void ab.setEdge(Eb, Yb);
                Yb = Tb
              }
            }))
          }(bb, Tb, Yb.vs)
      }))
    }

    function TU(bb, ab) {
      Object.values(ab).forEach((ab => ab.forEach(((ab, Ub) => bb.node(ab).order = Ub))))
    }

    function EU(bb, ab, Ub) {
      if (ab > Ub) {
        let bb = ab;
        ab = Ub, Ub = bb
      }
      let Ab = bb[ab];
      Ab || (bb[ab] = Ab = {}), Ab[Ub] = !0
    }

    function YU(bb, ab, Ub) {
      if (ab > Ub) {
        let bb = ab;
        ab = Ub, Ub = bb
      }
      let Ab = bb[ab];
      return void 0 !== Ab && Object.hasOwn(Ab, Ub)
    }

    function BU(bb, ab, Ub, Ab) {
      let Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Tb = {},
        Eb = function(bb, ab, Ub, Ab) {
          let Mb = new ob,
            Tb = bb.graph(),
            Eb = function(bb, ab, Ub) {
              return (Ab, Mb, Tb) => {
                let Eb, Yb = Ab.node(Mb),
                  Bb = Ab.node(Tb),
                  eb = 0;
                if (eb += Yb.width / 2, Object.hasOwn(Yb, "labelpos")) switch (Yb.labelpos.toLowerCase()) {
                  case "l":
                    Eb = -Yb.width / 2;
                    break;
                  case "r":
                    Eb = Yb.width / 2
                }
                if (Eb && (eb += Ub ? Eb : -Eb), Eb = void 0, eb += (Yb.dummy ? ab : bb) / 2, eb += (Bb.dummy ? ab : bb) / 2, eb += Bb.width / 2, Object.hasOwn(Bb, "labelpos")) switch (Bb.labelpos.toLowerCase()) {
                  case "l":
                    Eb = Bb.width / 2;
                    break;
                  case "r":
                    Eb = -Bb.width / 2
                }
                return Eb && (eb += Ub ? Eb : -Eb), eb
              }
            }(Tb.nodesep, Tb.edgesep, Ab);
          return ab.forEach((ab => {
            let Ab;
            ab.forEach((ab => {
              let Tb = Ub[ab];
              if (void 0 !== Tb) {
                if (Mb.setNode(Tb), void 0 !== Ab) {
                  let Yb = Ub[Ab];
                  if (void 0 !== Yb) {
                    let Ub = Mb.edge(Yb, Tb);
                    Mb.setEdge(Yb, Tb, Math.max(Eb(bb, ab, Ab), Ub || 0))
                  }
                }
                Ab = ab
              }
            }))
          })), Mb
        }(bb, ab, Ub, Mb),
        Yb = Mb ? "borderLeft" : "borderRight";

      function Bb(bb, ab) {
        let Ub = Eb.nodes().slice(),
          Ab = {},
          Mb = Ub.pop();
        for (; Mb;) {
          if (Ab[Mb]) bb(Mb);
          else {
            Ab[Mb] = !0, Ub.push(Mb);
            for (let bb of ab(Mb)) Ub.push(bb)
          }
          Mb = Ub.pop()
        }
      }
      return Bb((function(bb) {
        let ab = Eb.inEdges(bb);
        Tb[bb] = ab ? ab.reduce(((bb, ab) => {
          var Ub;
          let Ab = null != (Ub = Tb[ab.v]) ? Ub : 0,
            Mb = Eb.edge(ab);
          return Math.max(bb, Ab + (void 0 !== Mb ? Mb : 0))
        }), 0) : 0
      }), (function(bb) {
        return Eb.predecessors(bb) || []
      })), Bb((function(ab) {
        let Ub = Eb.outEdges(ab),
          Ab = Number.POSITIVE_INFINITY;
        Ub && (Ab = Ub.reduce(((bb, ab) => {
          let Ub = Tb[ab.w],
            Ab = Eb.edge(ab);
          return Math.min(bb, (void 0 !== Ub ? Ub : 0) - (void 0 !== Ab ? Ab : 0))
        }), Number.POSITIVE_INFINITY));
        let Mb = bb.node(ab);
        Ab !== Number.POSITIVE_INFINITY && Mb.borderType !== Yb && (Tb[ab] = Math.max(void 0 !== Tb[ab] ? Tb[ab] : 0, Ab))
      }), (function(bb) {
        return Eb.successors(bb) || []
      })), Object.keys(Ab).forEach((bb => {
        var ab;
        let Ab = Ub[bb];
        void 0 !== Ab && (Tb[bb] = null != (ab = Tb[Ab]) ? ab : 0)
      })), Tb
    }

    function eU(bb, ab) {
      let Ub, Ab = sb(bb),
        Mb = Object.assign(function(bb, ab) {
          let Ub = {};
          return ab.length && ab.reduce((function(ab, Ab) {
            let Mb = 0,
              Tb = 0,
              Eb = ab.length,
              Yb = Ab[Ab.length - 1];
            return Ab.forEach(((ab, Bb) => {
              let eb = function(bb, ab) {
                  if (bb.node(ab).dummy) {
                    let Ub = bb.predecessors(ab);
                    if (Ub) return Ub.find((ab => bb.node(ab).dummy))
                  }
                }(bb, ab),
                vb = eb ? bb.node(eb).order : Eb;
              (eb || ab === Yb) && (Ab.slice(Tb, Bb + 1).forEach((ab => {
                let Ab = bb.predecessors(ab);
                Ab && Ab.forEach((Ab => {
                  let Tb = bb.node(Ab),
                    Eb = Tb.order;
                  (Eb < Mb || vb < Eb) && (!Tb.dummy || !bb.node(ab).dummy) && EU(Ub, Ab, ab)
                }))
              })), Tb = Bb + 1, Mb = vb)
            })), Ab
          })), Ub
        }(bb, Ab), function(bb, ab) {
          let Ub = {};

          function Ab(ab, Ab, Mb, Tb, Eb) {
            ba(Ab, Mb).forEach((Ab => {
              let Mb = ab[Ab];
              if (void 0 !== Mb && bb.node(Mb).dummy) {
                let ab = bb.predecessors(Mb);
                ab && ab.forEach((ab => {
                  if (void 0 === ab) return;
                  let Ab = bb.node(ab);
                  Ab.dummy && (Ab.order < Tb || Ab.order > Eb) && EU(Ub, ab, Mb)
                }))
              }
            }))
          }
          return ab.length && ab.reduce((function(ab, Ub) {
            let Mb = -1,
              Tb = -1,
              Eb = 0;
            return Ub.forEach(((Yb, Bb) => {
              if ("border" === bb.node(Yb).dummy) {
                let ab = bb.predecessors(Yb);
                if (ab && ab.length) {
                  let Yb = ab[0];
                  if (void 0 === Yb) return;
                  Tb = bb.node(Yb).order, Ab(Ub, Eb, Bb, Mb, Tb), Eb = Bb, Mb = Tb
                }
              }
              Ab(Ub, Eb, Ub.length, Tb, ab.length)
            })), Ub
          })), Ub
        }(bb, Ab)),
        Tb = {};
      ["u", "d"].forEach((Eb => {
        Ub = "u" === Eb ? Ab : Object.values(Ab).reverse(), ["l", "r"].forEach((Ab => {
          "r" === Ab && (Ub = Ub.map((bb => Object.values(bb).reverse())));
          let Yb = function(bb, ab, Ub, Ab, Mb) {
              let Tb = {},
                Eb = {},
                Yb = {};
              return ab.forEach((bb => {
                bb.forEach(((bb, ab) => {
                  Tb[bb] = bb, Eb[bb] = bb, Yb[bb] = ab
                }))
              })), ab.forEach((ab => {
                let Bb = -1,
                  eb = -1,
                  vb = !1,
                  Lb = ab,
                  Pb = ab.findIndex((ab => (null == Mb ? void 0 : Mb.includes(ab)) || vU(ab, bb, Mb)));
                Pb > 0 && (Lb = [ab[Pb], ...ab.slice(0, Pb), ...ab.slice(Pb + 1)], vb = !0), Lb.forEach((ab => {
                  var Lb;
                  let Pb = Ab(ab);
                  if (Pb && Pb.length) {
                    null != Mb && Mb.includes(ab) && (Pb = Pb.filter((ab => vU(ab, bb, Mb))));
                    let Ab = Pb.sort(((bb, ab) => {
                        let Ub = Yb[bb],
                          Ab = Yb[ab];
                        return (void 0 !== Ub ? Ub : 0) - (void 0 !== Ab ? Ab : 0)
                      })),
                      Xb = (Ab.length - 1) / 2;
                    for (let bb = Math.floor(Xb), Mb = Math.ceil(Xb); bb <= Mb; ++bb) {
                      let Mb = Ab[bb];
                      if (void 0 === Mb) continue;
                      let Pb = Yb[Mb];
                      if (void 0 !== Pb && Eb[ab] === ab && Bb < Pb && Yb[Mb] !== eb && !YU(Ub, ab, Mb)) {
                        let bb = Tb[Mb];
                        void 0 !== bb && (Eb[Mb] = ab, Eb[ab] = Tb[ab] = bb, Bb = Pb, vb && (Bb = -1, eb = null != (Lb = Yb[Mb]) ? Lb : -1, vb = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Tb,
                align: Eb
              }
            }(bb, Ub, Mb, (ab => ("u" === Eb ? bb.predecessors(ab) : bb.successors(ab)) || []), ab),
            Bb = BU(bb, Ub, Yb.root, Yb.align, "r" === Ab);
          "r" === Ab && (Bb = Ua(Bb, (bb => -bb))), Tb[Eb + Ab] = Bb
        }))
      }));
      let Eb = function(bb, ab) {
        return Object.values(ab).reduce(((ab, Ub) => {
          let Ab = Number.NEGATIVE_INFINITY,
            Mb = Number.POSITIVE_INFINITY;
          Object.entries(Ub).forEach((ab => {
            let [Ub, Tb] = ab, Eb = function(bb, ab) {
              return bb.node(ab).width
            }(bb, Ub) / 2;
            Ab = Math.max(Tb + Eb, Ab), Mb = Math.min(Tb - Eb, Mb)
          }));
          let Tb = Ab - Mb;
          return Tb < ab[0] && (ab = [Tb, Ub]), ab
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(bb, Tb);
      return function(bb, ab) {
          let Ub = Object.values(ab),
            Ab = Vb(Math.min, Ub),
            Mb = Vb(Math.max, Ub);
          ["u", "d"].forEach((Ub => {
            ["l", "r"].forEach((Tb => {
              let Eb = Ub + Tb,
                Yb = bb[Eb];
              if (!Yb || Yb === ab) return;
              let Bb = Object.values(Yb),
                eb = Ab - Vb(Math.min, Bb);
              "l" !== Tb && (eb = Mb - Vb(Math.max, Bb)), eb && (bb[Eb] = Ua(Yb, (bb => bb + eb)))
            }))
          }))
        }(Tb, Eb),
        function(bb) {
          let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Ub = bb.ul;
          return Ub ? Ua(Ub, ((Ub, Ab) => {
            var Mb, Tb;
            if (ab) {
              let Ub = ab.toLowerCase(),
                Mb = bb[Ub];
              if (Mb && void 0 !== Mb[Ab]) return Mb[Ab]
            }
            let Eb = Object.values(bb).map((bb => {
              let ab = bb[Ab];
              return void 0 !== ab ? ab : 0
            })).sort(((bb, ab) => bb - ab));
            return ((null != (Mb = Eb[1]) ? Mb : 0) + (null != (Tb = Eb[2]) ? Tb : 0)) / 2
          })) : {}
        }(Tb, bb.graph().align)
    }

    function vU(bb, ab, Ub) {
      var Ab;
      if (!Ub) return !1;
      let Mb = null == (Ab = ab.node(bb)) ? void 0 : Ab.edgeObj;
      if (!Mb || ab.node(bb).edgeLabel.reversed) return !1;
      let Tb = Ub.indexOf(null == Mb ? void 0 : Mb.v),
        Eb = Ub.indexOf(null == Mb ? void 0 : Mb.w);
      return -1 !== Tb && -1 !== Eb && Tb === (Eb + 1) % Ub.length || Tb === (Eb - 1) % Ub.length
    }

    function LU(bb, ab) {
      (function(bb) {
        let ab = sb(bb),
          Ub = bb.graph(),
          Ab = Ub.ranksep,
          Mb = Ub.rankalign,
          Tb = 0;
        ab.forEach((ab => {
          let Ub = ab.reduce(((ab, Ub) => {
            var Ab;
            let Mb = null != (Ab = bb.node(Ub).height) ? Ab : 0;
            return ab > Mb ? ab : Mb
          }), 0);
          ab.forEach((ab => {
            let Ab = bb.node(ab);
            Ab.y = "top" === Mb ? Tb + Ab.height / 2 : "bottom" === Mb ? Tb + Ub - Ab.height / 2 : Tb + Ub / 2
          })), Tb += Ub + Ab
        }))
      })(bb = tb(bb)), Object.entries(eU(bb, ab)).forEach((ab => {
        let [Ub, Ab] = ab;
        return bb.node(Ub).x = Ab
      }))
    }
    var PU = new WeakMap;

    function XU(bb) {
      return RU(bb, Jb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), bb
    }

    function jU(bb, ab, Ub) {
      let Ab = ab;
      for (; void 0 !== Ab;) {
        let ab = bb.parent(Ab);
        if (ab === Ub) return Ab;
        Ab = ab
      }
    }

    function RU(bb, ab, Ub) {
      var Ab;
      let Mb = bb.nodes().filter((ab => bb.children(ab).length)),
        Tb = {};
      Mb.forEach((Ab => {
        let Mb = bb.node(Ab);
        if (Mb && Mb.rankdir) {
          let Eb = new ob({
            multigraph: !0,
            compound: !0
          });
          Eb.setGraph({
            rankdir: Mb.rankdir
          });
          let Yb = bb.children(Ab);
          Yb.forEach((ab => {
            let Ub = {
              ...bb.node(ab)
            };
            Eb.setNode(ab, Ub);
            let Mb = bb.parent(ab);
            Mb && Mb !== Ab && Yb.includes(Mb) && Eb.setParent(ab, Mb)
          }));
          let Bb = new Set;
          bb.edges().forEach((ab => {
            let Ub = jU(bb, ab.v, Ab),
              Mb = jU(bb, ab.w, Ab);
            if (Ub && Mb && Ub !== Mb) {
              let Ab = `${Ub}\0${Mb}`;
              Bb.has(Ab) || (Bb.add(Ab), Eb.setEdge(Ub, Mb, {
                ...bb.edge(ab)
              }))
            }
          })), RU(Eb, ab, Ub);
          let eb = NU(Eb);
          kU(eb, ab, Ub, null), yU(Eb, eb);
          let vb = 1 / 0,
            Lb = 1 / 0,
            Pb = -1 / 0,
            Xb = -1 / 0;
          Eb.nodes().forEach((bb => {
            if (bb === Ab) return;
            let ab = Eb.node(bb);
            ab && "number" == typeof ab.x && "number" == typeof ab.y && "number" == typeof ab.width && "number" == typeof ab.height && (vb = Math.min(vb, ab.x - ab.width / 2), Pb = Math.max(Pb, ab.x + ab.width / 2), Lb = Math.min(Lb, ab.y - ab.height / 2), Xb = Math.max(Xb, ab.y + ab.height / 2))
          })), (!isFinite(vb) || !isFinite(Lb) || !isFinite(Pb) || !isFinite(Xb)) && (vb = Lb = 0, Pb = Xb = 0);
          let jb = Pb - vb,
            Rb = Xb - Lb;
          Tb[Ab] = {
            minX: vb,
            pA: Lb,
            maxX: Pb,
            NA: Xb,
            width: jb,
            height: Rb,
            offsetX: vb,
            offsetY: Lb
          }, Mb._dagreClusterSubgraph = Eb
        }
      }));
      let Eb = [],
        Yb = new Map;
      Mb.forEach((ab => {
        let Ub = bb.node(ab);
        Ub && Ub.rankdir && Tb[ab] && Yb.set(ab, (bb.children(ab) || []).filter((bb => bb !== ab)))
      }));
      let Bb = new Set([...Yb.values()].flat()),
        eb = new Map;
      Yb.forEach(((ab, Ub) => {
        Bb.has(Ub) || eb.set(Ub, (ab => {
          let Ub = [],
            Ab = (bb.children(ab) || []).filter((bb => bb !== ab));
          for (; Ab.length > 0;) {
            let ab = Ab.shift();
            Ub.push(ab), (bb.children(ab) || []).filter((bb => bb !== ab)).forEach((bb => Ab.push(bb)))
          }
          return Ub
        })(Ub))
      }));
      let vb = new Set([...eb.values()].flat()),
        Lb = bb => {
          for (let [ab, Ub] of eb)
            if (Ub.includes(bb)) return ab;
          return bb
        },
        Pb = [];
      bb.edges().forEach((ab => {
        (vb.has(ab.v) || vb.has(ab.w)) && Pb.push({
          edge: ab,
          label: bb.edge(ab)
        })
      }));
      let Xb = new Map;
      vb.forEach((ab => {
        let Ub = bb.parent(ab);
        Xb.set(ab, "string" == typeof Ub ? Ub : void 0)
      })), eb.forEach(((ab, Ub) => {
        let Ab = bb.node(Ub),
          Mb = [];
        ab.forEach((ab => {
          let Ub = bb.node(ab);
          Ub && (Mb.push({
            id: ab,
            node: Ub,
            parent: Xb.get(ab)
          }), bb.removeNode(ab))
        }));
        let Yb = Pb.filter((bb => {
            let {
              edge: Ub
            } = bb;
            return ab.includes(Ub.v) || ab.includes(Ub.w)
          })),
          Bb = Tb[Ub];
        Ab && (Eb.push({
          clusterId: Ub,
          subgraph: Ab._dagreClusterSubgraph,
          bounds: Bb,
          children: ab,
          removedNodes: Mb,
          removedEdges: Yb
        }), Ab.width = Bb.width, Ab.height = Bb.height)
      }));
      let jb = new Set;
      Pb.forEach((ab => {
        let {
          edge: Ub,
          label: Ab
        } = ab, Mb = Lb(Ub.v), Tb = Lb(Ub.w);
        if (Mb !== Tb && bb.hasNode(Mb) && bb.hasNode(Tb)) {
          let ab = `${Mb}\0${Tb}`;
          jb.has(ab) || (jb.add(ab), bb.setEdge(Mb, Tb, {
            ...Ab,
            width: 0,
            height: 0
          }))
        }
      }));
      let Rb = NU(bb),
        kb = kU(Rb, ab, Ub, null != (Ab = PU.get(bb)) ? Ab : null);
      PU.set(bb, kb), yU(bb, Rb), jb.forEach((ab => {
        let Ub = ab.indexOf("\0"),
          Ab = ab.slice(0, Ub),
          Mb = ab.slice(Ub + 1);
        bb.hasEdge(Ab, Mb) && bb.removeEdge(Ab, Mb)
      })), Eb.forEach((ab => {
        let {
          clusterId: Ub,
          subgraph: Ab,
          bounds: Mb,
          removedNodes: Tb,
          removedEdges: Eb
        } = ab;
        var Yb, Bb;
        let eb = bb.node(Ub),
          vb = null != (Yb = null == eb ? void 0 : eb.x) ? Yb : 0,
          Lb = null != (Bb = null == eb ? void 0 : eb.y) ? Bb : 0,
          Pb = (Mb.minX + Mb.maxX) / 2,
          Xb = (Mb.pA + Mb.NA) / 2;
        Tb.forEach((ab => {
          let {
            id: Ub,
            node: Ab,
            parent: Mb
          } = ab;
          bb.setNode(Ub, Ab), void 0 !== Mb && bb.setParent(Ub, Mb)
        })), Eb.forEach((ab => {
          let {
            edge: Ub,
            label: Ab
          } = ab;
          bb.setEdge(Ub, Ab)
        })), Ab.nodes().forEach((ab => {
          if (ab === Ub) return;
          let Mb = Ab.node(ab),
            Tb = bb.node(ab);
          Tb && Mb && "number" == typeof Mb.x && "number" == typeof Mb.y && (Tb.x = vb + (Mb.x - Pb), Tb.y = Lb + (Mb.y - Xb))
        })), delete eb._dagreClusterSubgraph
      })), Mb.forEach((ab => {
        var Ub, Ab;
        let Mb = bb.node(ab),
          Eb = Tb[ab];
        if (Mb && Mb.rankdir && Mb._dagreClusterSubgraph && Eb) {
          let Tb = Mb._dagreClusterSubgraph,
            Yb = null != (Ub = Mb.x) ? Ub : 0,
            Bb = null != (Ab = Mb.y) ? Ab : 0,
            eb = (Eb.minX + Eb.maxX) / 2,
            vb = (Eb.pA + Eb.NA) / 2;
          Tb.nodes().forEach((Ub => {
            if (Ub === ab) return;
            let Ab = Tb.node(Ub),
              Mb = bb.node(Ub);
            if (Mb && Ab && "number" == typeof Ab.x && "number" == typeof Ab.y) {
              let bb = Ab.x - eb,
                ab = Ab.y - vb;
              Mb.x = Yb + bb, Mb.y = Bb + ab
            }
          })), delete Mb._dagreClusterSubgraph
        }
      }))
    }

    function kU(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Mb, Tb;
      let Eb = !1 !== (null == Ub ? void 0 : Ub.useDynamic),
        Yb = Eb && null != (Mb = null == Ab ? void 0 : Ab.graph) ? Mb : null,
        Bb = Eb && null != (Tb = null == Ab ? void 0 : Ab.rawNodes) ? Tb : null;
      ab("    makeSpaceForEdgeLabels", (() => function(bb) {
        let ab = bb.graph();
        ab.ranksep /= 2, bb.edges().forEach((Ub => {
          var Ab;
          let Mb = bb.edge(Ub);
          Mb.minlen *= 2, "c" !== (null != (Ab = Mb.labelpos) ? Ab : "r").toLowerCase() && ("TB" === ab.rankdir || "BT" === ab.rankdir ? Mb.width += Mb.labeloffset : Mb.height += Mb.labeloffset)
        }))
      }(bb))), ab("    removeSelfEdges", (() => function(bb) {
        bb.edges().forEach((ab => {
          if (ab.v === ab.w) {
            let Ub = bb.node(ab.v);
            Ub.selfEdges || (Ub.selfEdges = []), Ub.selfEdges.push({
              e: ab,
              label: bb.edge(ab)
            }), bb.removeEdge(ab)
          }
        }))
      }(bb))), ab("    acyclic", (() => Xa(bb, Yb))), ab("    nestingGraph.run", (() => ra(bb))), ab("    rank", (() => Ga(tb(bb)))), ab("    injectEdgeLabelProxies", (() => function(bb) {
        bb.edges().forEach((ab => {
          let Ub = bb.edge(ab);
          if (Ub.width && Ub.height) {
            let Ub = bb.node(ab.v),
              Ab = {
                rank: (bb.node(ab.w).rank - Ub.rank) / 2 + Ub.rank,
                e: ab
              };
            lb(bb, "edge-proxy", Ab, "_ep")
          }
        }))
      }(bb))), ab("    removeEmptyRanks", (() => function(bb) {
        let ab = bb.nodes().map((ab => bb.node(ab).rank)).filter((bb => void 0 !== bb)),
          Ub = Vb(Math.min, ab),
          Ab = [];
        bb.nodes().forEach((ab => {
          let Mb = bb.node(ab).rank - Ub;
          Ab[Mb] || (Ab[Mb] = []), Ab[Mb].push(ab)
        }));
        let Mb = 0,
          Tb = bb.graph().nodeRankFactor;
        Array.from(Ab).forEach(((ab, Ub) => {
          void 0 === ab && Ub % Tb !== 0 ? --Mb : void 0 !== ab && Mb && ab.forEach((ab => bb.node(ab).rank += Mb))
        }))
      }(bb))), ab("    nestingGraph.cleanup", (() => function(bb) {
        let ab = bb.graph();
        bb.removeNode(ab.nestingRoot), delete ab.nestingRoot, bb.edges().forEach((ab => {
          bb.edge(ab).nestingEdge && bb.removeEdge(ab)
        }))
      }(bb))), ab("    normalizeRanks", (() => function(bb) {
        let ab = bb.nodes().map((ab => {
            let Ub = bb.node(ab).rank;
            return void 0 === Ub ? Number.MAX_VALUE : Ub
          })),
          Ub = Vb(Math.min, ab);
        bb.nodes().forEach((ab => {
          let Ab = bb.node(ab);
          Object.hasOwn(Ab, "rank") && (Ab.rank -= Ub)
        }))
      }(bb))), ab("    assignRankMinMax", (() => function(bb) {
        let ab = 0;
        bb.nodes().forEach((Ub => {
          let Ab = bb.node(Ub);
          Ab.borderTop && (Ab.minRank = bb.node(Ab.borderTop).rank, Ab.maxRank = bb.node(Ab.borderBottom).rank, ab = Math.max(ab, Ab.maxRank))
        })), bb.graph().maxRank = ab
      }(bb))), ab("    removeEdgeLabelProxies", (() => function(bb) {
        bb.nodes().forEach((ab => {
          let Ub = bb.node(ab);
          if ("edge-proxy" === Ub.dummy) {
            let Ab = Ub;
            bb.edge(Ab.e).labelRank = Ub.rank, bb.removeNode(ab)
          }
        }))
      }(bb))), ab("    normalize.run", (() => ja(bb))), ab("    parentDummyChains", (() => ua(bb))), ab("    addBorderSegments", (() => oa(bb))), ab("    order", (() => UU(bb, Ub, Bb))), ab("    insertSelfEdges", (() => function(bb) {
        sb(bb).forEach((ab => {
          let Ub = 0;
          ab.forEach(((ab, Ab) => {
            let Mb = bb.node(ab);
            "number" != typeof Mb.rank && (Mb.rank = 0), Mb.order = Ab + Ub, (Mb.selfEdges || []).forEach((ab => {
              lb(bb, "selfedge", {
                width: ab.label.width,
                height: ab.label.height,
                rank: Mb.rank,
                order: Ab + ++Ub,
                e: ab.e,
                edgeLabel: ab.label
              }, "_se"), (!Array.isArray(ab.label.points) || 7 !== ab.label.points.length) && (ab.label.points = [{
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
            })), delete Mb.selfEdges
          }))
        }))
      }(bb))), ab("    adjustCoordinateSystem", (() => function(bb) {
        var ab;
        let Ub = null == (ab = bb.graph().rankdir) ? void 0 : ab.toLowerCase();
        ("lr" === Ub || "rl" === Ub) && wa(bb)
      }(bb))), ab("    position", (() => LU(bb, Ub.corePath))), ab("    positionSelfEdges", (() => function(bb) {
        bb.nodes().forEach((ab => {
          let Ub = bb.node(ab),
            Ab = bb => "number" == typeof bb && isFinite(bb);
          if ("selfedge" === Ub.dummy) {
            let Mb = Ub,
              Tb = bb.node(Mb.e.v),
              Eb = Ab(null == Tb ? void 0 : Tb.x) ? Tb.x : 0,
              Yb = Ab(null == Tb ? void 0 : Tb.y) ? Tb.y : 0,
              Bb = Ab(null == Tb ? void 0 : Tb.width) ? Tb.width : 0,
              eb = Ab(null == Tb ? void 0 : Tb.height) ? Tb.height : 0,
              vb = Ab(Ub.x) ? Ub.x : Eb,
              Lb = Ab(Ub.y) ? Ub.y : Yb,
              Pb = Bb / 2,
              Xb = eb / 2;
            Mb.edgeLabel.points = [{
              x: vb + Pb,
              y: Lb - Xb
            }, {
              x: vb + Pb,
              y: Lb - Xb
            }, {
              x: vb,
              y: Lb
            }, {
              x: vb - Pb,
              y: Lb + Xb
            }, {
              x: vb - Pb,
              y: Lb + Xb
            }, {
              x: vb,
              y: Lb
            }, {
              x: vb,
              y: Lb
            }], Mb.edgeLabel.x = vb, Mb.edgeLabel.y = Lb, bb.setEdge(Mb.e, Mb.edgeLabel), bb.removeNode(ab)
          } else Ub && Array.isArray(Ub.selfEdges) && Ub.selfEdges.forEach((bb => {
            if (!Array.isArray(bb.label.points) || 7 !== bb.label.points.length) {
              let ab = Ab(Ub.x) ? Ub.x : 0,
                Mb = Ab(Ub.y) ? Ub.y : 0,
                Tb = (Ab(Ub.width) ? Ub.width : 0) / 2,
                Eb = (Ab(Ub.height) ? Ub.height : 0) / 2;
              bb.label.points = [{
                x: ab + Tb,
                y: Mb - Eb
              }, {
                x: ab + Tb,
                y: Mb - Eb
              }, {
                x: ab,
                y: Mb
              }, {
                x: ab - Tb,
                y: Mb + Eb
              }, {
                x: ab - Tb,
                y: Mb + Eb
              }, {
                x: ab,
                y: Mb
              }, {
                x: ab,
                y: Mb
              }]
            }
          }))
        }))
      }(bb)));
      let eb = JSON.parse(JSON.stringify(bb._nodes));
      return ab("    removeBorderNodes", (() => function(bb) {
        bb.nodes().forEach((ab => {
          if (bb.children(ab).length) {
            let Ub = bb.node(ab),
              Ab = bb.node(Ub.borderTop),
              Mb = bb.node(Ub.borderBottom),
              Tb = bb.node(Ub.borderLeft[Ub.borderLeft.length - 1]),
              Eb = bb.node(Ub.borderRight[Ub.borderRight.length - 1]);
            Ub.width = Math.abs(Eb.x - Tb.x), Ub.height = Math.abs(Mb.y - Ab.y), Ub.x = Tb.x + Ub.width / 2, Ub.y = Ab.y + Ub.height / 2
          }
        })), bb.nodes().forEach((ab => {
          "border" === bb.node(ab).dummy && bb.removeNode(ab)
        }))
      }(bb))), ab("    normalize.undo", (() => function(bb) {
        bb.graph().dummyChains.forEach((ab => {
          let Ub, Ab = bb.node(ab),
            Mb = Ab.edgeLabel;
          for (bb.setEdge(Ab.edgeObj, Mb); Ab.dummy;) Ub = bb.successors(ab)[0], bb.removeNode(ab), Mb.points.push({
            x: Ab.x,
            y: Ab.y
          }), "edge-label" === Ab.dummy && (Mb.x = Ab.x, Mb.y = Ab.y, Mb.width = Ab.width, Mb.height = Ab.height), ab = Ub, Ab = bb.node(ab)
        }))
      }(bb))), ab("    fixupEdgeLabelCoords", (() => function(bb) {
        bb.edges().forEach((ab => {
          let Ub = bb.edge(ab);
          if (Object.hasOwn(Ub, "x")) switch (("l" === Ub.labelpos || "r" === Ub.labelpos) && (Ub.width -= Ub.labeloffset), Ub.labelpos) {
            case "l":
              Ub.x -= Ub.width / 2 + Ub.labeloffset;
              break;
            case "r":
              Ub.x += Ub.width / 2 + Ub.labeloffset
          }
        }))
      }(bb))), ab("    undoCoordinateSystem", (() => ta(bb))), ab("    translateGraph", (() => function(bb) {
        let ab = Number.POSITIVE_INFINITY,
          Ub = 0,
          Ab = Number.POSITIVE_INFINITY,
          Mb = 0,
          Tb = bb.graph(),
          Eb = Tb.marginx || 0,
          Yb = Tb.marginy || 0;

        function Bb(bb) {
          let Tb = bb.x,
            Eb = bb.y,
            Yb = bb.width,
            Bb = bb.height;
          ab = Math.min(ab, Tb - Yb / 2), Ub = Math.max(Ub, Tb + Yb / 2), Ab = Math.min(Ab, Eb - Bb / 2), Mb = Math.max(Mb, Eb + Bb / 2)
        }
        bb.nodes().forEach((ab => Bb(bb.node(ab)))), bb.edges().forEach((ab => {
          let Ub = bb.edge(ab);
          Object.hasOwn(Ub, "x") && Bb(Ub)
        })), ab -= Eb, Ab -= Yb, bb.nodes().forEach((Ub => {
          let Mb = bb.node(Ub);
          Mb.x -= ab, Mb.y -= Ab
        })), bb.edges().forEach((Ub => {
          let Mb = bb.edge(Ub);
          Mb.points.forEach((bb => {
            bb.x -= ab, bb.y -= Ab
          })), Object.hasOwn(Mb, "x") && (Mb.x -= ab), Object.hasOwn(Mb, "y") && (Mb.y -= Ab)
        })), Tb.width = Ub - ab + Eb, Tb.height = Mb - Ab + Yb
      }(bb))), ab("    assignNodeIntersects", (() => function(bb) {
        bb.edges().forEach((ab => {
          if (ab.v === ab.w) return;
          let Ub, Ab, Mb = bb.edge(ab),
            Tb = bb.node(ab.v),
            Eb = bb.node(ab.w);
          Mb.points ? (Ub = Mb.points[0], Ab = Mb.points[Mb.points.length - 1]) : (Mb.points = [], Ub = Eb, Ab = Tb), Mb.points.unshift(wb(Tb, Ub)), Mb.points.push(wb(Eb, Ab))
        }))
      }(bb))), ab("    reversePoints", (() => function(bb) {
        bb.edges().forEach((ab => {
          let Ub = bb.edge(ab);
          Ub.reversed && Ub.points.reverse()
        }))
      }(bb))), ab("    acyclic.undo", (() => function(bb) {
        bb.edges().forEach((ab => {
          let Ub = bb.edge(ab);
          if (Ub.reversed) {
            bb.removeEdge(ab);
            let Ab = Ub.forwardName;
            delete Ub.reversed, delete Ub.forwardName, bb.setEdge(ab.w, ab.v, Ub, Ab)
          }
        }))
      }(bb))), {
        graph: bb,
        rawNodes: eb
      }
    }

    function yU(bb, ab) {
      bb.nodes().forEach((Ub => {
        let Ab = bb.node(Ub),
          Mb = ab.node(Ub);
        Ab && (Ab.x = Mb.x, Ab.y = Mb.y, Ab.order = Mb.order, Ab.rank = Mb.rank, ab.children(Ub).length && (Ab.width = Mb.width, Ab.height = Mb.height))
      })), bb.edges().forEach((Ub => {
        let Ab = bb.edge(Ub),
          Mb = ab.edge(Ub);
        Ab.points = Mb.points, Object.hasOwn(Mb, "x") && (Ab.x = Mb.x, Ab.y = Mb.y)
      })), bb.graph().width = ab.graph().width, bb.graph().height = ab.graph().height
    }
    var ZU = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      DU = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      zU = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      xU = ["width", "height", "rank"],
      iU = {
        width: 0,
        height: 0
      },
      fU = ["minlen", "weight", "width", "height", "labeloffset"],
      mU = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      pU = ["labelpos"];

    function NU(bb) {
      let ab = new ob({
          multigraph: !0,
          compound: !0
        }),
        Ub = HU(bb.graph());
      return ab.setGraph(Object.assign({}, DU, WU(Ub, ZU), aa(Ub, zU))), bb.nodes().forEach((Ub => {
        let Ab = WU(HU(bb.node(Ub)), xU);
        Object.keys(iU).forEach((bb => {
          void 0 === Ab[bb] && (Ab[bb] = iU[bb])
        })), ab.setNode(Ub, Ab);
        let Mb = bb.parent(Ub);
        void 0 !== Mb && ab.setParent(Ub, Mb)
      })), bb.edges().forEach((Ub => {
        let Ab = HU(bb.edge(Ub));
        ab.setEdge(Ub, Object.assign({}, mU, WU(Ab, fU), aa(Ab, pU)))
      })), ab
    }

    function WU(bb, ab) {
      return Ua(aa(bb, ab), Number)
    }

    function HU(bb) {
      let ab = {};
      return bb && Object.entries(bb).forEach((bb => {
        let [Ub, Ab] = bb;
        "string" == typeof Ub && (Ub = Ub.toLowerCase()), ab[Ub] = Ab
      })), ab
    }

    function IU(bb) {
      let ab = sb(bb),
        Ub = new ob({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return bb.nodes().forEach((ab => {
        Ub.setNode(ab, {
          label: ab
        }), Ub.setParent(ab, "layer" + bb.node(ab).rank)
      })), bb.edges().forEach((bb => Ub.setEdge(bb.v, bb.w, {}, bb.name))), ab.forEach(((bb, ab) => {
        let Ab = "layer" + ab;
        Ub.setNode(Ab, {
          rank: "same"
        }), bb.reduce(((bb, ab) => (Ub.setEdge(bb, ab, {
          style: "invis"
        }), ab)))
      })), Ub
    }
    var dU = {
        time: cb,
        notime: Jb
      },
      FU = {
        graphlib: Tb,
        version: Ta,
        layout: XU,
        debug: IU,
        util: {
          time: cb,
          notime: Jb
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);