/*! For license information please see fsa8nn.111.1a1eed78.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6099: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Graph: () => qb,
      debug: () => Ps,
      default: () => Es,
      graphlib: () => ab,
      layout: () => ns,
      util: () => Ds,
      version: () => ac
    });
    var kb = Object.defineProperty,
      Wb = (bb, cb, sb) => ((bb, cb, sb) => cb in bb ? kb(bb, cb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: sb
      }) : bb[cb] = sb)(bb, "symbol" != typeof cb ? cb + "" : cb, sb),
      ab = {};
    ((bb, cb) => {
      for (var sb in cb) kb(bb, sb, {
        get: cb[sb],
        enumerable: !0
      })
    })(ab, {
      Graph: () => qb,
      alg: () => eb
    });
    var Tb = Object.defineProperty,
      Ub = (bb, cb) => {
        for (var sb in cb) Tb(bb, sb, {
          get: cb[sb],
          enumerable: !0
        })
      },
      Ib = class {
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
        setNodes(bb, cb) {
          return bb.forEach((bb => {
            void 0 !== cb ? this.setNode(bb, cb) : this.setNode(bb)
          })), this
        }
        setNode(bb, cb) {
          return bb in this._nodes ? (arguments.length > 1 && (this._nodes[bb] = cb), this) : (this._nodes[bb] = arguments.length > 1 ? cb : this._defaultNodeLabelFn(bb), this._isCompound && (this._parent[bb] = "\0", this._children[bb] = {}, this._children["\0"][bb] = !0), this._in[bb] = {}, this._preds[bb] = {}, this._out[bb] = {}, this._sucs[bb] = {}, ++this._nodeCount, this)
        }
        node(bb) {
          return this._nodes[bb]
        }
        hasNode(bb) {
          return bb in this._nodes
        }
        removeNode(bb) {
          if (bb in this._nodes) {
            let cb = bb => this.removeEdge(this._edgeObjs[bb]);
            delete this._nodes[bb], this._isCompound && (this._removeFromParentsChildList(bb), delete this._parent[bb], this.children(bb).forEach((bb => {
              this.setParent(bb)
            })), delete this._children[bb]), Object.keys(this._in[bb]).forEach(cb), delete this._in[bb], delete this._preds[bb], Object.keys(this._out[bb]).forEach(cb), delete this._out[bb], delete this._sucs[bb], --this._nodeCount
          }
          return this
        }
        setParent(bb, cb) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === cb) cb = "\0";
          else {
            for (let sb = cb += ""; void 0 !== sb; sb = this.parent(sb))
              if (sb === bb) throw new Error("Setting " + cb + " as parent of " + bb + " would create a cycle");
            this.setNode(cb)
          }
          return this.setNode(bb), this._removeFromParentsChildList(bb), this._parent[bb] = cb, this._children[cb][bb] = !0, this
        }
        parent(bb) {
          if (this._isCompound) {
            let cb = this._parent[bb];
            if ("\0" !== cb) return cb
          }
        }
        children() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let cb = this._children[bb];
            if (cb) return Object.keys(cb)
          } else {
            if ("\0" === bb) return this.nodes();
            if (this.hasNode(bb)) return []
          }
          return []
        }
        predecessors(bb) {
          let cb = this._preds[bb];
          if (cb) return Object.keys(cb)
        }
        successors(bb) {
          let cb = this._sucs[bb];
          if (cb) return Object.keys(cb)
        }
        neighbors(bb) {
          let cb = this.predecessors(bb);
          if (cb) {
            let sb = new Set(cb),
              kb = this.successors(bb);
            if (kb)
              for (let bb of kb) sb.add(bb);
            return Array.from(sb.values())
          }
        }
        isLeaf(bb) {
          var cb;
          let sb;
          return sb = this.isDirected() ? this.successors(bb) : this.neighbors(bb), 0 === (null != (cb = null == sb ? void 0 : sb.length) ? cb : 0)
        }
        filterNodes(bb) {
          let cb = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          cb.setGraph(this.graph()), Object.entries(this._nodes).forEach((sb => {
            let [kb, Wb] = sb;
            bb(kb) && cb.setNode(kb, Wb)
          })), Object.values(this._edgeObjs).forEach((bb => {
            cb.hasNode(bb.v) && cb.hasNode(bb.w) && cb.setEdge(bb, this.edge(bb))
          }));
          let sb = {},
            kb = bb => {
              let Wb = this.parent(bb);
              return !Wb || cb.hasNode(Wb) ? (sb[bb] = Wb, Wb) : Wb in sb ? sb[Wb] : kb(Wb)
            };
          return this._isCompound && cb.nodes().forEach((bb => cb.setParent(bb, kb(bb)))), cb
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
        setPath(bb, cb) {
          return bb.reduce(((bb, sb) => (void 0 !== cb ? this.setEdge(bb, sb, cb) : this.setEdge(bb, sb), sb))), this
        }
        setEdge(bb, cb, sb, kb) {
          let Wb, ab, Tb, Ub, Ib = !1;
          "object" == typeof bb && null !== bb && "v" in bb ? (Wb = bb.v, ab = bb.w, Tb = bb.name, 2 === arguments.length && (Ub = cb, Ib = !0)) : (Wb = bb, ab = cb, Tb = kb, arguments.length > 2 && (Ub = sb, Ib = !0)), Wb = "" + Wb, ab = "" + ab, void 0 !== Tb && (Tb = "" + Tb);
          let fb = Mb(this._isDirected, Wb, ab, Tb);
          if (fb in this._edgeLabels) return Ib && (this._edgeLabels[fb] = Ub), this;
          if (void 0 !== Tb && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Wb), this.setNode(ab), this._edgeLabels[fb] = Ib ? Ub : this._defaultEdgeLabelFn(Wb, ab, Tb);
          let Xb = function(bb, cb, sb, kb) {
            let Wb = "" + cb,
              ab = "" + sb;
            if (!bb && Wb > ab) {
              let bb = Wb;
              Wb = ab, ab = bb
            }
            let Tb = {
              v: Wb,
              w: ab
            };
            return kb && (Tb.name = kb), Tb
          }(this._isDirected, Wb, ab, Tb);
          return Wb = Xb.v, ab = Xb.w, Object.freeze(Xb), this._edgeObjs[fb] = Xb, Hb(this._preds[ab], Wb), Hb(this._sucs[Wb], ab), this._in[ab][fb] = Xb, this._out[Wb][fb] = Xb, this._edgeCount++, this
        }
        edge(bb, cb, sb) {
          let kb = 1 === arguments.length ? Xb(this._isDirected, bb) : Mb(this._isDirected, bb, cb, sb);
          return this._edgeLabels[kb]
        }
        edgeAsObj(bb, cb, sb) {
          let kb = 1 === arguments.length ? this.edge(bb) : this.edge(bb, cb, sb);
          return "object" != typeof kb || null === kb ? {
            label: kb
          } : kb
        }
        hasEdge(bb, cb, sb) {
          return (1 === arguments.length ? Xb(this._isDirected, bb) : Mb(this._isDirected, bb, cb, sb)) in this._edgeLabels
        }
        removeEdge(bb, cb, sb) {
          let kb = 1 === arguments.length ? Xb(this._isDirected, bb) : Mb(this._isDirected, bb, cb, sb),
            Wb = this._edgeObjs[kb];
          if (Wb) {
            let bb = Wb.v,
              cb = Wb.w;
            delete this._edgeLabels[kb], delete this._edgeObjs[kb], fb(this._preds[cb], bb), fb(this._sucs[bb], cb), delete this._in[cb][kb], delete this._out[bb][kb], this._edgeCount--
          }
          return this
        }
        inEdges(bb, cb) {
          return this.isDirected() ? this.filterEdges(this._in[bb], bb, cb) : this.nodeEdges(bb, cb)
        }
        outEdges(bb, cb) {
          return this.isDirected() ? this.filterEdges(this._out[bb], bb, cb) : this.nodeEdges(bb, cb)
        }
        nodeEdges(bb, cb) {
          if (bb in this._nodes) return this.filterEdges({
            ...this._in[bb],
            ...this._out[bb]
          }, bb, cb)
        }
        _removeFromParentsChildList(bb) {
          delete this._children[this._parent[bb]][bb]
        }
        filterEdges(bb, cb, sb) {
          if (!bb) return;
          let kb = Object.values(bb);
          return sb ? kb.filter((bb => bb.v === cb && bb.w === sb || bb.v === sb && bb.w === cb)) : kb
        }
      };

    function Hb(bb, cb) {
      bb[cb] ? bb[cb]++ : bb[cb] = 1
    }

    function fb(bb, cb) {
      void 0 !== bb[cb] && !--bb[cb] && delete bb[cb]
    }

    function Mb(bb, cb, sb, kb) {
      let Wb = "" + cb,
        ab = "" + sb;
      if (!bb && Wb > ab) {
        let bb = Wb;
        Wb = ab, ab = bb
      }
      return Wb + "\x01" + ab + "\x01" + (void 0 === kb ? "\0" : kb)
    }

    function Xb(bb, cb) {
      return Mb(bb, cb.v, cb.w, cb.name)
    }

    function nb(bb) {
      let cb = {
          options: {
            directed: bb.isDirected(),
            multigraph: bb.isMultigraph(),
            compound: bb.isCompound()
          },
          nodes: mb(bb),
          edges: lb(bb)
        },
        sb = bb.graph();
      return void 0 !== sb && (cb.value = structuredClone(sb)), cb
    }

    function mb(bb) {
      return bb.nodes().map((cb => {
        let sb = bb.node(cb),
          kb = bb.parent(cb),
          Wb = {
            v: cb
          };
        return void 0 !== sb && (Wb.value = sb), void 0 !== kb && (Wb.parent = kb), Wb
      }))
    }

    function lb(bb) {
      return bb.edges().map((cb => {
        let sb = bb.edge(cb),
          kb = {
            v: cb.v,
            w: cb.w
          };
        return void 0 !== cb.name && (kb.name = cb.name), void 0 !== sb && (kb.value = sb), kb
      }))
    }

    function Qb(bb) {
      let cb = new Ib(bb.options);
      return void 0 !== bb.value && cb.setGraph(bb.value), bb.nodes.forEach((bb => {
        cb.setNode(bb.v, bb.value), bb.parent && cb.setParent(bb.v, bb.parent)
      })), bb.edges.forEach((bb => {
        cb.setEdge({
          v: bb.v,
          w: bb.w,
          name: bb.name
        }, bb.value)
      })), cb
    }
    Ub({}, {
      read: () => Qb,
      write: () => nb
    });
    var eb = {};
    Ub(eb, {
      CycleException: () => yb,
      bellmanFord: () => Nb,
      components: () => Vb,
      dijkstra: () => Yb,
      dijkstraAll: () => hb,
      findCycles: () => gb,
      floydWarshall: () => tb,
      isAcyclic: () => Db,
      postorder: () => Gb,
      preorder: () => Kb,
      prim: () => Zb,
      shortestPaths: () => zb,
      tarjan: () => Jb,
      topsort: () => Pb
    });
    var Cb = () => 1;

    function Nb(bb, cb, sb, kb) {
      return function(bb, cb, sb, kb) {
        let Wb, ab = {},
          Tb = 0,
          Ub = bb.nodes(),
          Ib = function(bb) {
            let cb = ab[bb.v],
              kb = ab[bb.w];
            if (!cb || !kb) return;
            let Tb = sb(bb);
            cb.distance + Tb < kb.distance && (ab[bb.w] = {
              distance: cb.distance + Tb,
              predecessor: bb.v
            }, Wb = !0)
          },
          Hb = function() {
            Ub.forEach((function(bb) {
              kb(bb).forEach((function(cb) {
                let sb = cb.v === bb ? cb.v : cb.w,
                  kb = sb === cb.v ? cb.w : cb.v;
                Ib({
                  v: sb,
                  w: kb
                })
              }))
            }))
          };
        Ub.forEach((function(bb) {
          let sb = bb === cb ? 0 : Number.POSITIVE_INFINITY;
          ab[bb] = {
            distance: sb,
            predecessor: ""
          }
        }));
        let fb = Ub.length;
        for (let Mb = 1; Mb < fb && (Wb = !1, Tb++, Hb(), Wb); Mb++);
        if (Tb === fb - 1 && (Wb = !1, Hb(), Wb)) throw new Error("The graph contains a negative weight cycle");
        return ab
      }(bb, String(cb), sb || Cb, kb || function(cb) {
        var sb;
        return null != (sb = bb.outEdges(cb)) ? sb : []
      })
    }

    function Vb(bb) {
      let cb, sb = {},
        kb = [];

      function Wb(kb) {
        var ab, Tb;
        kb in sb || (sb[kb] = !0, cb.push(kb), null == (ab = bb.successors(kb)) || ab.forEach(Wb), null == (Tb = bb.predecessors(kb)) || Tb.forEach(Wb))
      }
      return bb.nodes().forEach((function(bb) {
        cb = [], Wb(bb), cb.length && kb.push(cb)
      })), kb
    }
    var Lb = class {
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
          let cb = this._keyIndices[bb];
          if (void 0 !== cb) return this._arr[cb].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(bb, cb) {
          let sb = this._keyIndices,
            kb = String(bb);
          if (!(kb in sb)) {
            let bb = this._arr,
              Wb = bb.length;
            return sb[kb] = Wb, bb.push({
              key: kb,
              priority: cb
            }), this._decrease(Wb), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let bb = this._arr.pop();
          return delete this._keyIndices[bb.key], this._heapify(0), bb.key
        }
        decrease(bb, cb) {
          let sb = this._keyIndices[bb];
          if (void 0 === sb) throw new Error(`Key not found: ${bb}`);
          let kb = this._arr[sb].priority;
          if (cb > kb) throw new Error(`New priority is greater than current priority. Key: ${bb} Old: ${kb} New: ${cb}`);
          this._arr[sb].priority = cb, this._decrease(sb)
        }
        _heapify(bb) {
          let cb = this._arr,
            sb = 2 * bb,
            kb = sb + 1,
            Wb = bb;
          sb < cb.length && (Wb = cb[sb].priority < cb[Wb].priority ? sb : Wb, kb < cb.length && (Wb = cb[kb].priority < cb[Wb].priority ? kb : Wb), Wb !== bb && (this._swap(bb, Wb), this._heapify(Wb)))
        }
        _decrease(bb) {
          let cb, sb = this._arr,
            kb = sb[bb].priority;
          for (; 0 !== bb && (cb = bb >> 1, !(sb[cb].priority < kb));) this._swap(bb, cb), bb = cb
        }
        _swap(bb, cb) {
          let sb = this._arr,
            kb = this._keyIndices,
            Wb = sb[bb],
            ab = sb[cb];
          sb[bb] = ab, sb[cb] = Wb, kb[ab.key] = bb, kb[Wb.key] = cb
        }
      },
      ub = () => 1;

    function Yb(bb, cb, sb, kb) {
      return function(bb, cb, sb, kb) {
        let Wb, ab, Tb = {},
          Ub = new Lb,
          Ib = function(bb) {
            let cb = bb.v !== Wb ? bb.v : bb.w,
              kb = Tb[cb];
            if (!kb) return;
            let Ib = sb(bb),
              Hb = ab.distance + Ib;
            if (Ib < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + bb + " Weight: " + Ib);
            Hb < kb.distance && (kb.distance = Hb, kb.predecessor = Wb, Ub.decrease(cb, Hb))
          };
        for (bb.nodes().forEach((function(bb) {
            let sb = bb === cb ? 0 : Number.POSITIVE_INFINITY;
            Tb[bb] = {
              distance: sb,
              predecessor: ""
            }, Ub.add(bb, sb)
          })); Ub.size() > 0;) {
          Wb = Ub.removeMin();
          let bb = Tb[Wb];
          if (!bb || bb.distance === Number.POSITIVE_INFINITY) break;
          ab = bb, kb(Wb).forEach(Ib)
        }
        return Tb
      }(bb, String(cb), sb || ub, kb || function(cb) {
        var sb;
        return null != (sb = bb.outEdges(cb)) ? sb : []
      })
    }

    function hb(bb, cb, sb) {
      return bb.nodes().reduce((function(kb, Wb) {
        return kb[Wb] = Yb(bb, Wb, cb, sb), kb
      }), {})
    }

    function Jb(bb) {
      let cb = 0,
        sb = [],
        kb = {},
        Wb = [];

      function ab(Tb) {
        var Ub;
        let Ib = kb[Tb] = {
          onStack: !0,
          lowlink: cb,
          index: cb++
        };
        if (sb.push(Tb), null == (Ub = bb.successors(Tb)) || Ub.forEach((function(bb) {
            if (bb in kb) {
              let cb = kb[bb];
              null != cb && cb.onStack && (Ib.lowlink = Math.min(Ib.lowlink, cb.index))
            } else {
              ab(bb);
              let cb = kb[bb];
              cb && (Ib.lowlink = Math.min(Ib.lowlink, cb.lowlink))
            }
          })), Ib.lowlink === Ib.index) {
          let bb, cb = [];
          do {
            bb = sb.pop();
            let Wb = kb[bb];
            Wb && (Wb.onStack = !1), cb.push(bb)
          } while (Tb !== bb);
          Wb.push(cb)
        }
      }
      return bb.nodes().forEach((function(bb) {
        bb in kb || ab(bb)
      })), Wb
    }

    function gb(bb) {
      return Jb(bb).filter((function(cb) {
        var sb;
        let kb = cb[0];
        return !!kb && (cb.length > 1 || 1 === cb.length && (null != (sb = bb.outEdges(kb, kb)) ? sb : []).length > 0)
      }))
    }
    var Bb = () => 1;

    function tb(bb, cb, sb) {
      return function(bb, cb, sb) {
        let kb = {},
          Wb = bb.nodes();
        return Wb.forEach((function(bb) {
          let ab = {};
          kb[bb] = ab, ab[bb] = {
            distance: 0,
            predecessor: ""
          }, Wb.forEach((function(cb) {
            bb !== cb && (ab[cb] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), sb(bb).forEach((function(sb) {
            let kb = sb.v === bb ? sb.w : sb.v,
              Wb = cb(sb);
            ab[kb] = {
              distance: Wb,
              predecessor: bb
            }
          }))
        })), Wb.forEach((function(bb) {
          let cb = kb[bb];
          cb && Wb.forEach((function(sb) {
            let ab = kb[sb];
            ab && Wb.forEach((function(sb) {
              let kb = ab[bb],
                Wb = cb[sb],
                Tb = ab[sb];
              if (kb && Wb && Tb) {
                let bb = kb.distance + Wb.distance;
                bb < Tb.distance && (Tb.distance = bb, Tb.predecessor = Wb.predecessor)
              }
            }))
          }))
        })), kb
      }(bb, cb || Bb, sb || function(cb) {
        var sb;
        return null != (sb = bb.outEdges(cb)) ? sb : []
      })
    }
    var yb = class extends Error {
      constructor(bb) {
        super(bb), this.name = "CycleException"
      }
    };

    function Pb(bb) {
      let cb = {},
        sb = {},
        kb = [];
      if (bb.sinks().forEach((function Wb(ab) {
          var Tb;
          if (ab in sb) throw new yb;
          ab in cb || (sb[ab] = !0, cb[ab] = !0, null == (Tb = bb.predecessors(ab)) || Tb.forEach(Wb), delete sb[ab], kb.push(ab))
        })), Object.keys(cb).length !== bb.nodeCount()) throw new yb;
      return kb
    }

    function Db(bb) {
      try {
        Pb(bb)
      } catch (cb) {
        if (cb instanceof yb) return !1;
        throw cb
      }
      return !0
    }

    function Eb(bb, cb, sb, kb, Wb) {
      Array.isArray(cb) || (cb = [cb]);
      let ab = cb => {
          var sb;
          return null != (sb = bb.isDirected() ? bb.successors(cb) : bb.neighbors(cb)) ? sb : []
        },
        Tb = {};
      return cb.forEach((function(cb) {
        if (!bb.hasNode(cb)) throw new Error("Graph does not have node: " + cb);
        Wb = ib(bb, cb, "post" === sb, Tb, ab, kb, Wb)
      })), Wb
    }

    function ib(bb, cb, sb, kb, Wb, ab, Tb) {
      return cb in kb || (kb[cb] = !0, sb || (Tb = ab(Tb, cb)), Wb(cb).forEach((function(cb) {
        Tb = ib(bb, cb, sb, kb, Wb, ab, Tb)
      })), sb && (Tb = ab(Tb, cb))), Tb
    }

    function Ob(bb, cb, sb) {
      return Eb(bb, cb, sb, (function(bb, cb) {
        return bb.push(cb), bb
      }), [])
    }

    function Gb(bb, cb) {
      return Ob(bb, cb, "post")
    }

    function Kb(bb, cb) {
      return Ob(bb, cb, "pre")
    }

    function Zb(bb, cb) {
      var sb;
      let kb, Wb = new Ib,
        ab = {},
        Tb = new Lb;

      function Ub(bb) {
        let sb = bb.v === kb ? bb.w : bb.v,
          Wb = Tb.priority(sb);
        if (void 0 !== Wb) {
          let Ub = cb(bb);
          Ub < Wb && (ab[sb] = kb, Tb.decrease(sb, Ub))
        }
      }
      if (0 === bb.nodeCount()) return Wb;
      bb.nodes().forEach((function(bb) {
        Tb.add(bb, Number.POSITIVE_INFINITY), Wb.setNode(bb)
      }));
      let Hb = bb.nodes()[0];
      void 0 !== Hb && Tb.decrease(Hb, 0);
      let fb = !1;
      for (; Tb.size() > 0;) {
        if (kb = Tb.removeMin(), kb in ab) Wb.setEdge(kb, ab[kb]);
        else {
          if (fb) throw new Error("Input graph is not connected: " + bb);
          fb = !0
        }
        null == (sb = bb.nodeEdges(kb)) || sb.forEach(Ub)
      }
      return Wb
    }

    function zb(bb, cb, sb, kb) {
      return function(bb, cb, sb, kb) {
        if (void 0 === sb) return Yb(bb, cb, sb, kb);
        let Wb = !1,
          ab = bb.nodes();
        for (let Tb = 0; Tb < ab.length; Tb++) {
          let Ub = ab[Tb];
          if (void 0 === Ub) continue;
          let Ib = kb(Ub);
          for (let bb = 0; bb < Ib.length; bb++) {
            let cb = Ib[bb];
            if (!cb) continue;
            let kb = cb.v === Ub ? cb.v : cb.w;
            sb({
              v: kb,
              w: kb === cb.v ? cb.w : cb.v
            }) < 0 && (Wb = !0)
          }
          if (Wb) return Nb(bb, cb, sb, kb)
        }
        return Yb(bb, cb, sb, kb)
      }(bb, cb, sb, null != kb ? kb : cb => {
        var sb;
        return null != (sb = bb.outEdges(cb)) ? sb : []
      })
    }
    var qb = Ib;

    function db(bb, cb, sb, kb) {
      let Wb = kb;
      for (; bb.hasNode(Wb);) Wb = pb(kb);
      return sb.dummy = cb, bb.setNode(Wb, sb), Wb
    }

    function Ab(bb) {
      let cb = new qb({
        multigraph: bb.isMultigraph()
      }).setGraph(bb.graph());
      return bb.nodes().forEach((sb => {
        bb.children(sb).length || cb.setNode(sb, bb.node(sb))
      })), bb.edges().forEach((sb => {
        cb.setEdge(sb, bb.edge(sb))
      })), cb
    }

    function wb(bb, cb) {
      let sb, kb, Wb = bb.x,
        ab = bb.y,
        Tb = cb.x - Wb,
        Ub = cb.y - ab,
        Ib = bb.width / 2,
        Hb = bb.height / 2;
      if (!Tb && !Ub) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Ub) * Ib > Math.abs(Tb) * Hb ? (Ub < 0 && (Hb = -Hb), sb = Hb * Tb / Ub, kb = Hb) : (Tb < 0 && (Ib = -Ib), sb = Ib, kb = Ib * Ub / Tb), {
        x: Wb + sb,
        y: ab + kb
      }
    }

    function rb(bb) {
      let cb = bc(vb(bb) + 1).map((() => []));
      return bb.nodes().forEach((sb => {
        let kb = bb.node(sb),
          Wb = kb.rank;
        void 0 !== Wb && (cb[Wb] || (cb[Wb] = []), cb[Wb][kb.order] = sb)
      })), cb
    }

    function ob(bb, cb, sb, kb) {
      let Wb = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Wb.rank = sb, Wb.order = kb), db(bb, "border", Wb, cb)
    }
    var Sb = 65535;

    function Rb(bb, cb) {
      if (cb.length > Sb) {
        let sb = function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sb,
            sb = [];
          for (let kb = 0; kb < bb.length; kb += cb) {
            let Wb = bb.slice(kb, kb + cb);
            sb.push(Wb)
          }
          return sb
        }(cb);
        return bb(...sb.map((cb => bb(...cb))))
      }
      return bb(...cb)
    }

    function vb(bb) {
      let cb = bb.nodes().map((cb => {
        let sb = bb.node(cb).rank;
        return void 0 === sb ? Number.MIN_VALUE : sb
      }));
      return Rb(Math.max, cb)
    }

    function Fb(bb, cb) {
      let sb = Date.now();
      try {
        return cb()
      } finally {
        console.log(bb + " time: " + (Date.now() - sb) + "ms")
      }
    }

    function xb(bb, cb) {
      return cb()
    }
    var jb = 0;

    function pb(bb) {
      return bb + "" + ++jb
    }

    function bc(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == cb && (cb = bb, bb = 0);
      let kb = bb => bb < cb;
      sb < 0 && (kb = bb => cb < bb);
      let Wb = [];
      for (let ab = bb; kb(ab); ab += sb) Wb.push(ab);
      return Wb
    }

    function cc(bb, cb) {
      let sb = {};
      for (let kb of cb) void 0 !== bb[kb] && (sb[kb] = bb[kb]);
      return sb
    }

    function sc(bb, cb) {
      let sb;
      return sb = "string" == typeof cb ? bb => bb[cb] : cb, Object.entries(bb).reduce(((bb, cb) => {
        let [kb, Wb] = cb;
        return bb[kb] = sb(Wb, kb), bb
      }), {})
    }
    var kc = "\0";

    function Wc(bb, cb, sb) {
      var kb, Wb, ab, Tb, Ub, Ib;
      if (!(bb && cb && sb && "edge" === cb.dummy && "edge" === sb.dummy && cb.edgeObj && sb.edgeObj && bb[cb.edgeObj.v] && bb[sb.edgeObj.v] && bb[cb.edgeObj.w] && bb[sb.edgeObj.w])) return 0;
      let Hb = !0;
      cb.edgeObj.w === sb.edgeObj.w && (Hb = !1);
      let fb = Hb ? null != (Wb = null == (kb = bb[cb.edgeObj.v]) ? void 0 : kb.rank) ? Wb : NaN : null != (Tb = null == (ab = bb[cb.edgeObj.w]) ? void 0 : ab.rank) ? Tb : NaN,
        Mb = Object.entries(bb).find((bb => {
          var sb, kb;
          return (null == (sb = bb[1].edgeObj) ? void 0 : sb.v) === cb.edgeObj.v && (null == (kb = bb[1].edgeObj) ? void 0 : kb.w) === cb.edgeObj.w && bb[1].rank === fb
        })),
        Xb = Object.entries(bb).find((bb => {
          var cb, kb;
          return (null == (cb = bb[1].edgeObj) ? void 0 : cb.v) === sb.edgeObj.v && (null == (kb = bb[1].edgeObj) ? void 0 : kb.w) === sb.edgeObj.w && bb[1].rank === fb
        }));
      if (!Mb || !Xb) return 0;
      let nb = null != (Ub = Mb[1].order) ? Ub : NaN,
        mb = null != (Ib = Xb[1].order) ? Ib : NaN;
      return isNaN(nb - mb) ? 0 : nb - mb
    }
    var ac = "3.1.1";

    function Tc(bb) {
      bb._prev._next = bb._next, bb._next._prev = bb._prev, delete bb._next, delete bb._prev
    }

    function Uc(bb, cb) {
      if ("_next" !== bb && "_prev" !== bb) return cb
    }
    var Ic = class {
        constructor() {
          Wb(this, "_sentinel");
          let bb = {};
          bb._next = bb._prev = bb, this._sentinel = bb
        }
        dequeue() {
          let bb = this._sentinel,
            cb = bb._prev;
          if (cb !== bb) return Tc(cb), cb
        }
        enqueue(bb) {
          let cb = this._sentinel;
          bb._prev && bb._next && Tc(bb), bb._next = cb._next, cb._next._prev = bb, cb._next = bb, bb._prev = cb
        }
        toString() {
          let bb = [],
            cb = this._sentinel,
            sb = cb._prev;
          for (; sb !== cb;) bb.push(JSON.stringify(sb, Uc)), sb = sb._prev;
          return "[" + bb.join(", ") + "]"
        }
      },
      Hc = () => 1;

    function fc(bb, cb) {
      if (bb.nodeCount() <= 1) return [];
      let sb = function(bb, cb) {
        let sb = new qb,
          kb = 0,
          Wb = 0;
        bb.nodes().forEach((bb => {
          sb.setNode(bb, {
            v: bb,
            in: 0,
            out: 0
          })
        })), bb.edges().forEach((bb => {
          let ab = sb.edge(bb.v, bb.w) || 0,
            Tb = cb(bb),
            Ub = ab + Tb;
          sb.setEdge(bb.v, bb.w, Ub);
          let Ib = sb.node(bb.v),
            Hb = sb.node(bb.w);
          Wb = Math.max(Wb, Ib.out += Tb), kb = Math.max(kb, Hb.in += Tb)
        }));
        let ab = function(bb) {
            let cb = [];
            for (let sb = 0; sb < bb; sb++) cb.push(sb);
            return cb
          }(Wb + kb + 3).map((() => new Ic)),
          Tb = kb + 1;
        return sb.nodes().forEach((bb => {
          Xc(ab, Tb, sb.node(bb))
        })), {
          graph: sb,
          buckets: ab,
          zeroIdx: Tb
        }
      }(bb, cb || Hc);
      return function(bb, cb, sb) {
        var kb;
        let Wb, ab = [],
          Tb = cb[cb.length - 1],
          Ub = cb[0];
        for (; bb.nodeCount();) {
          for (; Wb = Ub.dequeue();) Mc(bb, cb, sb, Wb);
          for (; Wb = Tb.dequeue();) Mc(bb, cb, sb, Wb);
          if (bb.nodeCount())
            for (let Tb = cb.length - 2; Tb > 0; --Tb)
              if (Wb = null == (kb = cb[Tb]) ? void 0 : kb.dequeue(), Wb) {
                ab = ab.concat(Mc(bb, cb, sb, Wb, !0) || []);
                break
              }
        }
        return ab
      }(sb.graph, sb.buckets, sb.zeroIdx).flatMap((cb => bb.outEdges(cb.v, cb.w) || []))
    }

    function Mc(bb, cb, sb, kb, Wb) {
      let ab = [],
        Tb = Wb ? ab : void 0;
      return (bb.inEdges(kb.v) || []).forEach((kb => {
        let Tb = bb.edge(kb),
          Ub = bb.node(kb.v);
        Wb && ab.push({
          v: kb.v,
          w: kb.w
        }), Ub.out -= Tb, Xc(cb, sb, Ub)
      })), (bb.outEdges(kb.v) || []).forEach((kb => {
        let Wb = bb.edge(kb),
          ab = kb.w,
          Tb = bb.node(ab);
        Tb.in -= Wb, Xc(cb, sb, Tb)
      })), bb.removeNode(kb.v), Tb
    }

    function Xc(bb, cb, sb) {
      var kb, Wb, ab;
      sb.out ? sb.in ? null == (ab = bb[sb.out - sb.in + cb]) || ab.enqueue(sb) : null == (Wb = bb[bb.length - 1]) || Wb.enqueue(sb) : null == (kb = bb[0]) || kb.enqueue(sb)
    }

    function nc(bb, cb) {
      var sb;
      ("greedy" === bb.graph().acyclicer ? fc(bb, (sb = bb, bb => sb.edge(bb).weight)) : function(bb, cb) {
        let sb = [],
          kb = {},
          Wb = {};

        function ab(cb) {
          Object.hasOwn(Wb, cb) || (Wb[cb] = !0, kb[cb] = !0, bb.outEdges(cb).forEach((bb => {
            Object.hasOwn(kb, bb.w) ? sb.push(bb) : ab(bb.w)
          })), delete kb[cb])
        }

        function Tb(ab) {
          var Ub;
          Object.hasOwn(Wb, ab) || (Wb[ab] = !0, kb[ab] = !0, null == (Ub = bb.outEdges(ab)) || Ub.forEach((Wb => {
            var Ub, Ib;
            Object.hasOwn(kb, Wb.w) || (null == (Ub = cb.node(ab)) ? void 0 : Ub.rank) > (null == (Ib = cb.node(Wb.w)) ? void 0 : Ib.rank) && function(bb, cb, sb) {
              let kb = new Set;

              function Wb(cb) {
                var ab;
                if (bb.sources().includes(cb)) return !0;
                kb.add(cb);
                for (let Tb of null != (ab = bb.inEdges(cb)) ? ab : [])
                  if ((Tb.v !== sb.v || Tb.w !== sb.w) && !kb.has(Tb.v) && Wb(Tb.v)) return !0;
                return !1
              }
              return Wb(cb)
            }(bb, Wb.w, Wb) ? sb.push(Wb) : Tb(Wb.w)
          })), delete kb[ab])
        }
        let Ub = ab;
        return cb && "function" == typeof cb.node && (Ub = Tb), bb.sources().forEach(Ub), bb.nodes().forEach(Ub), sb
      }(bb, null != cb ? cb : null)).forEach((cb => {
        let sb = bb.edge(cb);
        bb.removeEdge(cb), sb.forwardName = cb.name, sb.reversed = !0, bb.setEdge(cb.w, cb.v, sb, pb("rev"))
      }))
    }

    function mc(bb) {
      bb.graph().dummyChains = [], bb.edges().forEach((cb => function(bb, cb) {
        let sb, kb, Wb, ab = cb.v,
          Tb = bb.node(ab).rank,
          Ub = cb.w,
          Ib = bb.node(Ub).rank,
          Hb = cb.name,
          fb = bb.edge(cb),
          Mb = fb.labelRank;
        if (Ib === Tb + 1) return;
        for (bb.removeEdge(cb), Wb = 0, ++Tb; Tb < Ib; ++Wb, ++Tb) fb.points = [], kb = {
          width: 0,
          height: 0,
          edgeLabel: fb,
          edgeObj: cb,
          rank: Tb
        }, sb = db(bb, "edge", kb, "_d"), Tb === Mb && (kb.width = fb.width, kb.height = fb.height, kb.dummy = "edge-label", kb.labelpos = fb.labelpos), bb.setEdge(ab, sb, {
          weight: fb.weight
        }, Hb), 0 === Wb && bb.graph().dummyChains.push(sb), ab = sb;
        bb.setEdge(ab, Ub, {
          weight: fb.weight
        }, Hb)
      }(bb, cb)))
    }

    function lc(bb) {
      let cb = {};
      bb.sources().forEach((function sb(kb) {
        let Wb = bb.node(kb);
        if (Object.hasOwn(cb, kb)) return Wb.rank;
        cb[kb] = !0;
        let ab = bb.outEdges(kb),
          Tb = ab ? ab.map((cb => null == cb ? Number.POSITIVE_INFINITY : sb(cb.w) - bb.edge(cb).minlen)) : [],
          Ub = Rb(Math.min, Tb);
        return Ub === Number.POSITIVE_INFINITY && (Ub = 0), Wb.rank = Ub
      }))
    }

    function Qc(bb, cb) {
      return bb.node(cb.w).rank - bb.node(cb.v).rank - bb.edge(cb).minlen
    }
    var ec = function(bb) {
      let cb = new qb({
          directed: !1
        }),
        sb = bb.nodes();
      if (0 === sb.length) throw new Error("Graph must have at least one node");
      let kb, Wb, ab = sb[0],
        Tb = bb.nodeCount();
      for (cb.setNode(ab, {}); Cc(cb, bb) < Tb && (kb = Nc(cb, bb), kb);) Wb = cb.hasNode(kb.v) ? Qc(bb, kb) : -Qc(bb, kb), Vc(cb, bb, Wb);
      return cb
    };

    function Cc(bb, cb) {
      return bb.nodes().forEach((function sb(kb) {
        let Wb = cb.nodeEdges(kb);
        Wb && Wb.forEach((Wb => {
          let ab = Wb.v,
            Tb = kb === ab ? Wb.w : ab;
          !bb.hasNode(Tb) && !Qc(cb, Wb) && (bb.setNode(Tb, {}), bb.setEdge(kb, Tb, {}), sb(Tb))
        }))
      })), bb.nodeCount()
    }

    function Nc(bb, cb) {
      return cb.edges().reduce(((sb, kb) => {
        let Wb = Number.POSITIVE_INFINITY;
        return bb.hasNode(kb.v) !== bb.hasNode(kb.w) && (Wb = Qc(cb, kb)), Wb < sb[0] ? [Wb, kb] : sb
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Vc(bb, cb, sb) {
      bb.nodes().forEach((bb => cb.node(bb).rank += sb))
    }
    var {
      preorder: Lc,
      postorder: uc
    } = eb, Yc = hc;

    function hc(bb) {
      bb = function(bb) {
        let cb = (new qb).setGraph(bb.graph());
        return bb.nodes().forEach((sb => cb.setNode(sb, bb.node(sb)))), bb.edges().forEach((sb => {
          let kb = cb.edge(sb.v, sb.w) || {
              weight: 0,
              minlen: 1
            },
            Wb = bb.edge(sb);
          cb.setEdge(sb.v, sb.w, {
            weight: kb.weight + Wb.weight,
            minlen: Math.max(kb.minlen, Wb.minlen)
          })
        })), cb
      }(bb), lc(bb);
      let cb, sb, kb = ec(bb);
      for (Bc(kb), Jc(kb, bb); cb = yc(kb);) sb = Pc(kb, bb, cb), Dc(kb, bb, cb, sb)
    }

    function Jc(bb, cb) {
      let sb = uc(bb, bb.nodes());
      sb = sb.slice(0, sb.length - 1), sb.forEach((sb => function(bb, cb, sb) {
        let kb = bb.node(sb).parent,
          Wb = bb.edge(sb, kb);
        Wb.cutvalue = gc(bb, cb, sb)
      }(bb, cb, sb)))
    }

    function gc(bb, cb, sb) {
      let kb = bb.node(sb).parent,
        Wb = !0,
        ab = cb.edge(sb, kb),
        Tb = 0;
      ab || (Wb = !1, ab = cb.edge(kb, sb)), Tb = ab.weight;
      let Ub = cb.nodeEdges(sb);
      return Ub && Ub.forEach((ab => {
        let Ub = ab.v === sb,
          Ib = Ub ? ab.w : ab.v;
        if (Ib !== kb) {
          let kb = Ub === Wb,
            Hb = cb.edge(ab).weight;
          if (Tb += kb ? Hb : -Hb, function(bb, cb, sb) {
              return bb.hasEdge(cb, sb)
            }(bb, sb, Ib)) {
            let cb = bb.edge(sb, Ib).cutvalue;
            Tb += kb ? -cb : cb
          }
        }
      })), Tb
    }

    function Bc(bb, cb) {
      arguments.length < 2 && (cb = bb.nodes()[0]), tc(bb, {}, 1, cb)
    }

    function tc(bb, cb, sb, kb, Wb) {
      let ab = sb,
        Tb = bb.node(kb);
      cb[kb] = !0;
      let Ub = bb.neighbors(kb);
      return Ub && Ub.forEach((Wb => {
        Object.hasOwn(cb, Wb) || (sb = tc(bb, cb, sb, Wb, kb))
      })), Tb.low = ab, Tb.lim = sb++, Wb ? Tb.parent = Wb : delete Tb.parent, sb
    }

    function yc(bb) {
      return bb.edges().find((cb => bb.edge(cb).cutvalue < 0))
    }

    function Pc(bb, cb, sb) {
      let kb = sb.v,
        Wb = sb.w;
      cb.hasEdge(kb, Wb) || (kb = sb.w, Wb = sb.v);
      let ab = bb.node(kb),
        Tb = bb.node(Wb),
        Ub = ab,
        Ib = !1;
      return ab.lim > Tb.lim && (Ub = Tb, Ib = !0), cb.edges().filter((cb => Ib === Ec(bb, bb.node(cb.v), Ub) && Ib !== Ec(bb, bb.node(cb.w), Ub))).reduce(((bb, sb) => Qc(cb, sb) < Qc(cb, bb) ? sb : bb))
    }

    function Dc(bb, cb, sb, kb) {
      let Wb = sb.v,
        ab = sb.w;
      bb.removeEdge(Wb, ab), bb.setEdge(kb.v, kb.w, {}), Bc(bb), Jc(bb, cb),
        function(bb, cb) {
          let sb = bb.nodes().find((cb => !bb.node(cb).parent));
          if (!sb) return;
          let kb = Lc(bb, [sb]);
          kb = kb.slice(1), kb.forEach((sb => {
            let kb = bb.node(sb).parent,
              Wb = cb.edge(sb, kb),
              ab = !1;
            Wb || (Wb = cb.edge(kb, sb), ab = !0), cb.node(sb).rank = cb.node(kb).rank + (ab ? Wb.minlen : -Wb.minlen)
          }))
        }(bb, cb)
    }

    function Ec(bb, cb, sb) {
      return sb.low <= cb.lim && cb.lim <= sb.lim
    }
    hc.initLowLimValues = Bc, hc.initCutValues = Jc, hc.calcCutValue = gc, hc.leaveEdge = yc, hc.enterEdge = Pc, hc.exchangeEdges = Dc;
    var ic = function(bb) {
      let cb = bb.graph().ranker;
      if ("function" == typeof cb) return cb(bb);
      switch (cb) {
        case "network-simplex":
        default:
          Gc(bb);
          break;
        case "tight-tree":
          ! function(bb) {
            lc(bb), ec(bb)
          }(bb);
          break;
        case "longest-path":
          Oc(bb);
        case "none":
      }
    };
    var Oc = lc;

    function Gc(bb) {
      Yc(bb)
    }
    var Kc = function(bb) {
      let cb = function(bb) {
          let cb = {},
            sb = 0;

          function kb(Wb) {
            let ab = sb;
            bb.children(Wb).forEach(kb), cb[Wb] = {
              low: ab,
              lim: sb++
            }
          }
          return bb.children(kc).forEach(kb), cb
        }(bb),
        sb = bb.graph();
      if (!Array.isArray(sb.dummyChains)) return;
      sb.dummyChains.forEach((sb => {
        let kb = bb.node(sb),
          Wb = kb.edgeObj,
          ab = function(bb, cb, sb, kb) {
            let Wb, ab = [],
              Tb = [],
              Ub = Math.min(cb[sb].low, cb[kb].low),
              Ib = Math.max(cb[sb].lim, cb[kb].lim);
            Wb = sb;
            do {
              Wb = bb.parent(Wb), ab.push(Wb)
            } while (Wb && (cb[Wb].low > Ub || Ib > cb[Wb].lim));
            let Hb = Wb,
              fb = kb;
            for (;
              (fb = bb.parent(fb)) !== Hb;) Tb.push(fb);
            return {
              path: ab.concat(Tb.reverse()),
              lca: Hb
            }
          }(bb, cb, Wb.v, Wb.w),
          Tb = ab.path,
          Ub = ab.lca,
          Ib = 0,
          Hb = Tb[Ib],
          fb = !0;
        for (; sb !== Wb.w;) {
          if (kb = bb.node(sb), fb) {
            for (;
              (Hb = Tb[Ib]) !== Ub && bb.node(Hb).maxRank < kb.rank;) Ib++;
            Hb === Ub && (fb = !1)
          }
          if (!fb) {
            for (; Ib < Tb.length - 1 && bb.node(Tb[Ib + 1]).minRank <= kb.rank;) Ib++;
            Hb = Tb[Ib]
          }
          void 0 !== Hb && bb.setParent(sb, Hb), sb = bb.successors(sb)[0]
        }
      }))
    };

    function Zc(bb) {
      let cb = db(bb, "root", {}, "_root"),
        sb = function(bb) {
          let cb = {};

          function sb(kb, Wb) {
            let ab = bb.children(kb);
            ab && ab.length && ab.forEach((bb => sb(bb, Wb + 1))), cb[kb] = Wb
          }
          return bb.children(kc).forEach((bb => sb(bb, 1))), cb
        }(bb),
        kb = Object.values(sb),
        Wb = Rb(Math.max, kb) - 1,
        ab = 2 * Wb + 1;
      bb.graph().nestingRoot = cb, bb.edges().forEach((cb => bb.edge(cb).minlen *= ab));
      let Tb = function(bb) {
        return bb.edges().reduce(((cb, sb) => cb + bb.edge(sb).weight), 0)
      }(bb) + 1;
      bb.children(kc).forEach((kb => {
        zc(bb, cb, ab, Tb, Wb, sb, kb)
      })), bb.graph().nodeRankFactor = ab
    }

    function zc(bb, cb, sb, kb, Wb, ab, Tb) {
      var Ub;
      let Ib = bb.children(Tb);
      if (!Ib.length) return void(Tb !== cb && bb.setEdge(cb, Tb, {
        weight: 0,
        minlen: sb
      }));
      let Hb = ob(bb, "_bt"),
        fb = ob(bb, "_bb"),
        Mb = bb.node(Tb);
      bb.setParent(Hb, Tb), Mb.borderTop = Hb, bb.setParent(fb, Tb), Mb.borderBottom = fb, Ib.forEach((Ub => {
        var Ib;
        zc(bb, cb, sb, kb, Wb, ab, Ub);
        let Mb = bb.node(Ub),
          Xb = Mb.borderTop ? Mb.borderTop : Ub,
          nb = Mb.borderBottom ? Mb.borderBottom : Ub,
          mb = Mb.borderTop ? kb : 2 * kb,
          lb = Xb !== nb ? 1 : Wb - (null != (Ib = ab[Tb]) ? Ib : 0) + 1;
        bb.setEdge(Hb, Xb, {
          weight: mb,
          minlen: lb,
          nestingEdge: !0
        }), bb.setEdge(nb, fb, {
          weight: mb,
          minlen: lb,
          nestingEdge: !0
        })
      })), bb.parent(Tb) || bb.setEdge(cb, Hb, {
        weight: 0,
        minlen: Wb + (null != (Ub = ab[Tb]) ? Ub : 0)
      })
    }
    var qc = function(bb) {
      bb.children(kc).forEach((function cb(sb) {
        let kb = bb.children(sb),
          Wb = bb.node(sb);
        if (kb.length && kb.forEach(cb), Wb && Object.hasOwn(Wb, "minRank")) {
          Wb.borderLeft = [], Wb.borderRight = [];
          for (let cb = Wb.minRank, kb = Wb.maxRank + 1; cb < kb; ++cb) dc(bb, "borderLeft", "_bl", sb, Wb, cb), dc(bb, "borderRight", "_br", sb, Wb, cb)
        }
      }))
    };

    function dc(bb, cb, sb, kb, Wb, ab) {
      let Tb = {
          width: 0,
          height: 0,
          rank: ab,
          borderType: cb
        },
        Ub = Wb[cb][ab - 1],
        Ib = db(bb, "border", Tb, sb);
      Wb[cb][ab] = Ib, bb.setParent(Ib, kb), Ub && bb.setEdge(Ub, Ib, {
        weight: 1
      })
    }

    function Ac(bb) {
      var cb;
      let sb = null == (cb = bb.graph().rankdir) ? void 0 : cb.toLowerCase();
      ("bt" === sb || "rl" === sb) && function(bb) {
        bb.nodes().forEach((cb => oc(bb.node(cb)))), bb.edges().forEach((cb => {
          var sb;
          let kb = bb.edge(cb);
          null == (sb = kb.points) || sb.forEach(oc), Object.hasOwn(kb, "y") && oc(kb)
        }))
      }(bb), ("lr" === sb || "rl" === sb) && (function(bb) {
        bb.nodes().forEach((cb => Sc(bb.node(cb)))), bb.edges().forEach((cb => {
          var sb;
          let kb = bb.edge(cb);
          null == (sb = kb.points) || sb.forEach(Sc), Object.hasOwn(kb, "x") && Sc(kb)
        }))
      }(bb), wc(bb))
    }

    function wc(bb) {
      bb.nodes().forEach((cb => rc(bb.node(cb)))), bb.edges().forEach((cb => rc(bb.edge(cb))))
    }

    function rc(bb) {
      let cb = bb.width;
      bb.width = bb.height, bb.height = cb
    }

    function oc(bb) {
      bb.y = -bb.y
    }

    function Sc(bb) {
      let cb = bb.x;
      bb.x = bb.y, bb.y = cb
    }

    function Rc(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        sb = {},
        kb = bb.nodes().filter((cb => !bb.children(cb).length)),
        Wb = kb.map((cb => bb.node(cb).rank)),
        ab = bc(Rb(Math.max, Wb) + 1).map((() => []));
      return kb.sort(((cb, sb) => bb.node(cb).rank - bb.node(sb).rank)).forEach((function kb(Wb) {
        if (sb[Wb]) return;
        sb[Wb] = !0;
        let Tb = bb.node(Wb);
        ab[Tb.rank].push(Wb);
        let Ub = bb.successors(Wb);
        Ub && [...Ub].sort(((sb, kb) => function(sb, kb) {
          let Wb = bb.node(sb),
            ab = bb.node(kb);
          return Wc(cb, Wb, ab)
        }(sb, kb))).forEach(kb)
      })), ab
    }

    function vc(bb, cb) {
      let sb = 0;
      for (let kb = 1; kb < cb.length; ++kb) sb += Fc(bb, cb[kb - 1], cb[kb]);
      return sb
    }

    function Fc(bb, cb, sb) {
      let kb = function(bb, cb) {
          return bb.reduce(((bb, sb, kb) => (bb[sb] = cb[kb], bb)), {})
        }(sb, sb.map(((bb, cb) => cb))),
        Wb = cb.flatMap((cb => {
          let sb = bb.outEdges(cb);
          return sb ? sb.map((cb => ({
            pos: kb[cb.w],
            weight: bb.edge(cb).weight
          }))).sort(((bb, cb) => bb.pos - cb.pos)) : []
        })),
        ab = 1;
      for (; ab < sb.length;) ab <<= 1;
      let Tb = 2 * ab - 1;
      ab -= 1;
      let Ub = new Array(Tb).fill(0),
        Ib = 0;
      return Wb.forEach((bb => {
        let cb = bb.pos + ab;
        Ub[cb] += bb.weight;
        let sb = 0;
        for (; cb > 0;) cb % 2 && (sb += Ub[cb + 1]), cb = cb - 1 >> 1, Ub[cb] += bb.weight;
        Ib += bb.weight * sb
      })), Ib
    }

    function xc(bb, cb) {
      let sb = {};
      return bb.forEach(((bb, cb) => {
          let kb = {
            indegree: 0,
            in: [],
            out: [],
            vs: [bb.v],
            i: cb
          };
          void 0 !== bb.barycenter && (kb.barycenter = bb.barycenter, kb.weight = bb.weight), sb[bb.v] = kb
        })), cb.edges().forEach((bb => {
          let cb = sb[bb.v],
            kb = sb[bb.w];
          void 0 !== cb && void 0 !== kb && (kb.indegree++, cb.out.push(kb))
        })),
        function(bb) {
          let cb = [];

          function sb(bb) {
            return cb => {
              cb.merged || (void 0 === cb.barycenter || void 0 === bb.barycenter || cb.barycenter >= bb.barycenter) && function(bb, cb) {
                let sb = 0,
                  kb = 0;
                bb.weight && (sb += bb.barycenter * bb.weight, kb += bb.weight), cb.weight && (sb += cb.barycenter * cb.weight, kb += cb.weight), bb.vs = cb.vs.concat(bb.vs), bb.barycenter = sb / kb, bb.weight = kb, bb.i = Math.min(cb.i, bb.i), cb.merged = !0
              }(bb, cb)
            }
          }

          function kb(cb) {
            return sb => {
              sb.in.push(cb), 0 === --sb.indegree && bb.push(sb)
            }
          }
          for (; bb.length;) {
            let Wb = bb.pop();
            cb.push(Wb), Wb.in.reverse().forEach(sb(Wb)), Wb.out.forEach(kb(Wb))
          }
          return cb.filter((bb => !bb.merged)).map((bb => cc(bb, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(sb).filter((bb => !bb.indegree)))
    }

    function jc(bb, cb, sb, kb, Wb) {
      let ab = {},
        Tb = null,
        Ub = null,
        Ib = Wb;
      "boolean" == typeof cb ? (Ib = cb, ab = {}) : cb && (ab = cb, Tb = null != sb ? sb : null, Ub = null != kb ? kb : null);
      let Hb = function(bb, cb) {
          let sb = {
            lhs: [],
            rhs: []
          };
          return bb.forEach((bb => {
            cb(bb) ? sb.lhs.push(bb) : sb.rhs.push(bb)
          })), sb
        }(bb, (bb => Object.hasOwn(bb, "barycenter"))),
        fb = Hb.lhs,
        Mb = Hb.rhs.sort(((bb, cb) => cb.i - bb.i)),
        Xb = [],
        nb = 0,
        mb = 0,
        lb = 0;
      fb.sort(function(bb, cb, sb) {
        return (kb, Wb) => {
          if (kb.barycenter < Wb.barycenter) return -1;
          if (kb.barycenter > Wb.barycenter) return 1;
          if (bb && ("string" == typeof kb.vs[0] || "string" == typeof Wb.vs[0])) {
            let sb = bb.node(kb.vs[0]),
              ab = bb.node(Wb.vs[0]),
              Tb = Wc(cb, sb, ab);
            if (0 !== Tb) return Tb
          }
          return sb ? Wb.i - kb.i : kb.i - Wb.i
        }
      }(Ub, Tb, !!Ib));
      for (let [eb, Cb] of Object.entries(ab)) {
        let bb = fb.findIndex((bb => bb.vs[0] === eb));
        fb.splice(bb + 1, 0, Cb)
      }
      lb = pc(Xb, Mb, lb), fb.forEach((bb => {
        lb += bb.vs.length, Xb.push(bb.vs), nb += bb.barycenter * bb.weight, mb += bb.weight, lb = pc(Xb, Mb, lb)
      }));
      let Qb = {
        vs: Xb.flat(1)
      };
      return mb && (Qb.barycenter = nb / mb, Qb.weight = mb), Qb
    }

    function pc(bb, cb, sb) {
      let kb;
      for (; cb.length && (kb = cb[cb.length - 1]).i <= sb;) cb.pop(), bb.push(kb.vs), sb++;
      return sb
    }

    function bs(bb, cb, sb, kb, Wb) {
      var ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb;
      let Qb = null,
        eb = Wb;
      "boolean" == typeof kb ? (eb = kb, Qb = null) : void 0 !== kb && (Qb = kb);
      let Cb = bb.children(cb),
        Nb = bb.node(cb),
        Vb = Nb ? Nb.borderLeft : void 0,
        Lb = Nb ? Nb.borderRight : void 0,
        ub = {};
      Vb && (Cb = Cb.filter((bb => bb !== Vb && bb !== Lb)));
      let Yb = function(bb) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((cb => {
          let sb = bb.inEdges(cb);
          if (!sb || !sb.length) return {
            v: cb
          };
          {
            let kb = sb.reduce(((cb, sb) => {
              let kb = bb.edge(sb),
                Wb = bb.node(sb.v);
              return {
                sum: cb.sum + kb.weight * Wb.order,
                weight: cb.weight + kb.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: cb,
              barycenter: kb.sum / kb.weight,
              weight: kb.weight
            }
          }
        }))
      }(bb, Cb);
      Yb.forEach((cb => {
        if (bb.children(cb.v).length) {
          let {
            result: kb
          } = bs(bb, cb.v, sb, Qb, eb);
          ub[cb.v] = kb, Object.hasOwn(kb, "barycenter") && function(bb, cb) {
            void 0 !== bb.barycenter ? (bb.barycenter = (bb.barycenter * bb.weight + cb.barycenter * cb.weight) / (bb.weight + cb.weight), bb.weight += cb.weight) : (bb.barycenter = cb.barycenter, bb.weight = cb.weight)
          }(cb, kb)
        }
      }));
      let hb = xc(Yb, sb);
      ! function(bb, cb) {
        bb.forEach((bb => {
          bb.vs = bb.vs.flatMap((bb => cb[bb] ? cb[bb].vs : bb))
        }))
      }(hb, ub);
      let Jb = {},
        gb = !1;
      for (let tb = 0; tb < hb.length; tb++)
        for (let cb = tb + 1; cb < hb.length; cb++)
          if (hb[tb] && hb[cb] && null != (ab = hb[tb]) && ab.barycenter && null != (Tb = hb[cb]) && Tb.barycenter && (null == (Ub = hb[tb]) ? void 0 : Ub.barycenter) === hb[cb].barycenter) {
            let sb = null != (Hb = null == (Ib = hb[tb]) ? void 0 : Ib.vs[0]) ? Hb : "",
              kb = null != (Mb = null == (fb = hb[cb]) ? void 0 : fb.vs[0]) ? Mb : "",
              Wb = bb.node(sb),
              ab = bb.node(kb);
            if ("edge" === Wb.dummy && "edge" === ab.dummy && (null == (Xb = Wb.edgeObj) ? void 0 : Xb.v) === (null == (nb = ab.edgeObj) ? void 0 : nb.v) && (null == (mb = Wb.edgeObj) ? void 0 : mb.w) === (null == (lb = ab.edgeObj) ? void 0 : lb.w)) {
              if (Wb.edgeLabel.reversed) {
                Jb[kb] = hb[tb], hb.splice(tb, 1), tb--;
                break
              }
              Jb[sb] = hb[cb], hb.splice(cb, 1), cb--
            } else gb = !0
          } let Bb = jc(hb, Jb, Qb, bb, eb);
      if (Vb && Lb) {
        Bb.vs = [Vb, Bb.vs, Lb].flat(1);
        let cb = bb.predecessors(Vb);
        if (cb && cb.length) {
          let sb = bb.node(cb[0]),
            kb = bb.predecessors(Lb),
            Wb = bb.node(kb[0]);
          Object.hasOwn(Bb, "barycenter") || (Bb.barycenter = 0, Bb.weight = 0), Bb.barycenter = (Bb.barycenter * Bb.weight + sb.order + Wb.order) / (Bb.weight + 2), Bb.weight += 2
        }
      }
      return Object.defineProperty(Bb, "result", {
        value: Bb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Bb, "usedBias", {
        value: gb,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Bb
    }

    function cs(bb, cb, sb, kb) {
      kb || (kb = bb.nodes());
      let Wb = function(bb) {
          let cb;
          for (; bb.hasNode(cb = pb("_root")););
          return cb
        }(bb),
        ab = new qb({
          compound: !0
        }).setGraph({
          root: Wb
        }).setDefaultNodeLabel((cb => bb.node(cb)));
      return kb.forEach((kb => {
        let Tb = bb.node(kb),
          Ub = bb.parent(kb);
        if (Tb.rank === cb || Tb.minRank <= cb && cb <= Tb.maxRank) {
          ab.setNode(kb), ab.setParent(kb, Ub || Wb);
          let Ib = bb[sb](kb);
          Ib && Ib.forEach((cb => {
            let sb = cb.v === kb ? cb.w : cb.v,
              Wb = ab.edge(sb, kb),
              Tb = void 0 !== Wb ? Wb.weight : 0;
            ab.setEdge(sb, kb, {
              weight: bb.edge(cb).weight + Tb
            })
          })), Object.hasOwn(Tb, "minRank") && ab.setNode(kb, {
            borderLeft: Tb.borderLeft[cb],
            borderRight: Tb.borderRight[cb]
          })
        }
      })), ab
    }

    function ss(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof cb.customOrder) return void cb.customOrder(bb, ss);
      let kb = vb(bb),
        Wb = ks(bb, bc(1, kb + 1), "inEdges"),
        ab = ks(bb, bc(kb - 1, -1, -1), "outEdges"),
        Tb = Rc(bb, sb);
      if (as(bb, Tb), cb.disableOptimalOrderHeuristic) return;
      let Ub, Ib = Number.POSITIVE_INFINITY,
        Hb = cb.constraints || [];
      for (let fb = 0, Mb = 0; Mb < 4; ++fb, ++Mb) {
        Ws(fb % 2 ? Wb : ab, fb % 4 >= 2, Hb, sb), Tb = rb(bb);
        let cb = vc(bb, Tb);
        cb < Ib ? (Mb = 0, Ub = Object.assign({}, Tb), Ib = cb) : cb === Ib && (Ub = structuredClone(Tb))
      }
      as(bb, Ub)
    }

    function ks(bb, cb, sb) {
      let kb = new Map,
        Wb = (bb, cb) => {
          kb.has(bb) || kb.set(bb, []), kb.get(bb).push(cb)
        };
      for (let ab of bb.nodes()) {
        let cb = bb.node(ab);
        if ("number" == typeof cb.rank && Wb(cb.rank, ab), "number" == typeof cb.minRank && "number" == typeof cb.maxRank)
          for (let bb = cb.minRank; bb <= cb.maxRank; bb++) bb !== cb.rank && Wb(bb, ab)
      }
      return cb.map((function(cb) {
        return cs(bb, cb, sb, kb.get(cb) || [])
      }))
    }

    function Ws(bb, cb, sb, kb) {
      let Wb = !0,
        ab = new qb;
      bb.forEach((function(bb) {
        sb.forEach((bb => ab.setEdge(bb.left, bb.right)));
        let Tb = bb.graph().root,
          {
            result: Ub,
            usedBias: Ib
          } = bs(bb, Tb, ab, kb, Wb);
        cb && Ib && (Wb = !Wb), Ub.vs.forEach(((cb, sb) => bb.node(cb).order = sb)),
          function(bb, cb, sb) {
            let kb, Wb = {};
            sb.forEach((sb => {
              let ab, Tb, Ub = bb.parent(sb);
              for (; Ub;) {
                if (ab = bb.parent(Ub), ab ? (Tb = Wb[ab], Wb[ab] = Ub) : (Tb = kb, kb = Ub), Tb && Tb !== Ub) return void cb.setEdge(Tb, Ub);
                Ub = ab
              }
            }))
          }(bb, ab, Ub.vs)
      }))
    }

    function as(bb, cb) {
      Object.values(cb).forEach((cb => cb.forEach(((cb, sb) => bb.node(cb).order = sb))))
    }

    function Ts(bb, cb, sb) {
      if (cb > sb) {
        let bb = cb;
        cb = sb, sb = bb
      }
      let kb = bb[cb];
      kb || (bb[cb] = kb = {}), kb[sb] = !0
    }

    function Us(bb, cb, sb) {
      if (cb > sb) {
        let bb = cb;
        cb = sb, sb = bb
      }
      let kb = bb[cb];
      return void 0 !== kb && Object.hasOwn(kb, sb)
    }

    function Is(bb, cb, sb, kb) {
      let Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ab = {},
        Tb = function(bb, cb, sb, kb) {
          let Wb = new qb,
            ab = bb.graph(),
            Tb = function(bb, cb, sb) {
              return (kb, Wb, ab) => {
                let Tb, Ub = kb.node(Wb),
                  Ib = kb.node(ab),
                  Hb = 0;
                if (Hb += Ub.width / 2, Object.hasOwn(Ub, "labelpos")) switch (Ub.labelpos.toLowerCase()) {
                  case "l":
                    Tb = -Ub.width / 2;
                    break;
                  case "r":
                    Tb = Ub.width / 2
                }
                if (Tb && (Hb += sb ? Tb : -Tb), Tb = void 0, Hb += (Ub.dummy ? cb : bb) / 2, Hb += (Ib.dummy ? cb : bb) / 2, Hb += Ib.width / 2, Object.hasOwn(Ib, "labelpos")) switch (Ib.labelpos.toLowerCase()) {
                  case "l":
                    Tb = Ib.width / 2;
                    break;
                  case "r":
                    Tb = -Ib.width / 2
                }
                return Tb && (Hb += sb ? Tb : -Tb), Hb
              }
            }(ab.nodesep, ab.edgesep, kb);
          return cb.forEach((cb => {
            let kb;
            cb.forEach((cb => {
              let ab = sb[cb];
              if (void 0 !== ab) {
                if (Wb.setNode(ab), void 0 !== kb) {
                  let Ub = sb[kb];
                  if (void 0 !== Ub) {
                    let sb = Wb.edge(Ub, ab);
                    Wb.setEdge(Ub, ab, Math.max(Tb(bb, cb, kb), sb || 0))
                  }
                }
                kb = cb
              }
            }))
          })), Wb
        }(bb, cb, sb, Wb),
        Ub = Wb ? "borderLeft" : "borderRight";

      function Ib(bb, cb) {
        let sb = Tb.nodes().slice(),
          kb = {},
          Wb = sb.pop();
        for (; Wb;) {
          if (kb[Wb]) bb(Wb);
          else {
            kb[Wb] = !0, sb.push(Wb);
            for (let bb of cb(Wb)) sb.push(bb)
          }
          Wb = sb.pop()
        }
      }
      return Ib((function(bb) {
        let cb = Tb.inEdges(bb);
        ab[bb] = cb ? cb.reduce(((bb, cb) => {
          var sb;
          let kb = null != (sb = ab[cb.v]) ? sb : 0,
            Wb = Tb.edge(cb);
          return Math.max(bb, kb + (void 0 !== Wb ? Wb : 0))
        }), 0) : 0
      }), (function(bb) {
        return Tb.predecessors(bb) || []
      })), Ib((function(cb) {
        let sb = Tb.outEdges(cb),
          kb = Number.POSITIVE_INFINITY;
        sb && (kb = sb.reduce(((bb, cb) => {
          let sb = ab[cb.w],
            kb = Tb.edge(cb);
          return Math.min(bb, (void 0 !== sb ? sb : 0) - (void 0 !== kb ? kb : 0))
        }), Number.POSITIVE_INFINITY));
        let Wb = bb.node(cb);
        kb !== Number.POSITIVE_INFINITY && Wb.borderType !== Ub && (ab[cb] = Math.max(void 0 !== ab[cb] ? ab[cb] : 0, kb))
      }), (function(bb) {
        return Tb.successors(bb) || []
      })), Object.keys(kb).forEach((bb => {
        var cb;
        let kb = sb[bb];
        void 0 !== kb && (ab[bb] = null != (cb = ab[kb]) ? cb : 0)
      })), ab
    }

    function Hs(bb, cb) {
      let sb, kb = rb(bb),
        Wb = Object.assign(function(bb, cb) {
          let sb = {};
          return cb.length && cb.reduce((function(cb, kb) {
            let Wb = 0,
              ab = 0,
              Tb = cb.length,
              Ub = kb[kb.length - 1];
            return kb.forEach(((cb, Ib) => {
              let Hb = function(bb, cb) {
                  if (bb.node(cb).dummy) {
                    let sb = bb.predecessors(cb);
                    if (sb) return sb.find((cb => bb.node(cb).dummy))
                  }
                }(bb, cb),
                fb = Hb ? bb.node(Hb).order : Tb;
              (Hb || cb === Ub) && (kb.slice(ab, Ib + 1).forEach((cb => {
                let kb = bb.predecessors(cb);
                kb && kb.forEach((kb => {
                  let ab = bb.node(kb),
                    Tb = ab.order;
                  (Tb < Wb || fb < Tb) && (!ab.dummy || !bb.node(cb).dummy) && Ts(sb, kb, cb)
                }))
              })), ab = Ib + 1, Wb = fb)
            })), kb
          })), sb
        }(bb, kb), function(bb, cb) {
          let sb = {};

          function kb(cb, kb, Wb, ab, Tb) {
            bc(kb, Wb).forEach((kb => {
              let Wb = cb[kb];
              if (void 0 !== Wb && bb.node(Wb).dummy) {
                let cb = bb.predecessors(Wb);
                cb && cb.forEach((cb => {
                  if (void 0 === cb) return;
                  let kb = bb.node(cb);
                  kb.dummy && (kb.order < ab || kb.order > Tb) && Ts(sb, cb, Wb)
                }))
              }
            }))
          }
          return cb.length && cb.reduce((function(cb, sb) {
            let Wb = -1,
              ab = -1,
              Tb = 0;
            return sb.forEach(((Ub, Ib) => {
              if ("border" === bb.node(Ub).dummy) {
                let cb = bb.predecessors(Ub);
                if (cb && cb.length) {
                  let Ub = cb[0];
                  if (void 0 === Ub) return;
                  ab = bb.node(Ub).order, kb(sb, Tb, Ib, Wb, ab), Tb = Ib, Wb = ab
                }
              }
              kb(sb, Tb, sb.length, ab, cb.length)
            })), sb
          })), sb
        }(bb, kb)),
        ab = {};
      ["u", "d"].forEach((Tb => {
        sb = "u" === Tb ? kb : Object.values(kb).reverse(), ["l", "r"].forEach((kb => {
          "r" === kb && (sb = sb.map((bb => Object.values(bb).reverse())));
          let Ub = function(bb, cb, sb, kb, Wb) {
              let ab = {},
                Tb = {},
                Ub = {};
              return cb.forEach((bb => {
                bb.forEach(((bb, cb) => {
                  ab[bb] = bb, Tb[bb] = bb, Ub[bb] = cb
                }))
              })), cb.forEach((cb => {
                let Ib = -1,
                  Hb = -1,
                  fb = !1,
                  Mb = cb,
                  Xb = cb.findIndex((cb => (null == Wb ? void 0 : Wb.includes(cb)) || fs(cb, bb, Wb)));
                Xb > 0 && (Mb = [cb[Xb], ...cb.slice(0, Xb), ...cb.slice(Xb + 1)], fb = !0), Mb.forEach((cb => {
                  var Mb;
                  let Xb = kb(cb);
                  if (Xb && Xb.length) {
                    null != Wb && Wb.includes(cb) && (Xb = Xb.filter((cb => fs(cb, bb, Wb))));
                    let kb = Xb.sort(((bb, cb) => {
                        let sb = Ub[bb],
                          kb = Ub[cb];
                        return (void 0 !== sb ? sb : 0) - (void 0 !== kb ? kb : 0)
                      })),
                      nb = (kb.length - 1) / 2;
                    for (let bb = Math.floor(nb), Wb = Math.ceil(nb); bb <= Wb; ++bb) {
                      let Wb = kb[bb];
                      if (void 0 === Wb) continue;
                      let Xb = Ub[Wb];
                      if (void 0 !== Xb && Tb[cb] === cb && Ib < Xb && Ub[Wb] !== Hb && !Us(sb, cb, Wb)) {
                        let bb = ab[Wb];
                        void 0 !== bb && (Tb[Wb] = cb, Tb[cb] = ab[cb] = bb, Ib = Xb, fb && (Ib = -1, Hb = null != (Mb = Ub[Wb]) ? Mb : -1, fb = !1))
                      }
                    }
                  }
                }))
              })), {
                root: ab,
                align: Tb
              }
            }(bb, sb, Wb, (cb => ("u" === Tb ? bb.predecessors(cb) : bb.successors(cb)) || []), cb),
            Ib = Is(bb, sb, Ub.root, Ub.align, "r" === kb);
          "r" === kb && (Ib = sc(Ib, (bb => -bb))), ab[Tb + kb] = Ib
        }))
      }));
      let Tb = function(bb, cb) {
        return Object.values(cb).reduce(((cb, sb) => {
          let kb = Number.NEGATIVE_INFINITY,
            Wb = Number.POSITIVE_INFINITY;
          Object.entries(sb).forEach((cb => {
            let [sb, ab] = cb, Tb = function(bb, cb) {
              return bb.node(cb).width
            }(bb, sb) / 2;
            kb = Math.max(ab + Tb, kb), Wb = Math.min(ab - Tb, Wb)
          }));
          let ab = kb - Wb;
          return ab < cb[0] && (cb = [ab, sb]), cb
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(bb, ab);
      return function(bb, cb) {
          let sb = Object.values(cb),
            kb = Rb(Math.min, sb),
            Wb = Rb(Math.max, sb);
          ["u", "d"].forEach((sb => {
            ["l", "r"].forEach((ab => {
              let Tb = sb + ab,
                Ub = bb[Tb];
              if (!Ub || Ub === cb) return;
              let Ib = Object.values(Ub),
                Hb = kb - Rb(Math.min, Ib);
              "l" !== ab && (Hb = Wb - Rb(Math.max, Ib)), Hb && (bb[Tb] = sc(Ub, (bb => bb + Hb)))
            }))
          }))
        }(ab, Tb),
        function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            sb = bb.ul;
          return sb ? sc(sb, ((sb, kb) => {
            var Wb, ab;
            if (cb) {
              let sb = cb.toLowerCase(),
                Wb = bb[sb];
              if (Wb && void 0 !== Wb[kb]) return Wb[kb]
            }
            let Tb = Object.values(bb).map((bb => {
              let cb = bb[kb];
              return void 0 !== cb ? cb : 0
            })).sort(((bb, cb) => bb - cb));
            return ((null != (Wb = Tb[1]) ? Wb : 0) + (null != (ab = Tb[2]) ? ab : 0)) / 2
          })) : {}
        }(ab, bb.graph().align)
    }

    function fs(bb, cb, sb) {
      var kb;
      if (!sb) return !1;
      let Wb = null == (kb = cb.node(bb)) ? void 0 : kb.edgeObj;
      if (!Wb || cb.node(bb).edgeLabel.reversed) return !1;
      let ab = sb.indexOf(null == Wb ? void 0 : Wb.v),
        Tb = sb.indexOf(null == Wb ? void 0 : Wb.w);
      return -1 !== ab && -1 !== Tb && ab === (Tb + 1) % sb.length || ab === (Tb - 1) % sb.length
    }

    function Ms(bb, cb) {
      (function(bb) {
        let cb = rb(bb),
          sb = bb.graph(),
          kb = sb.ranksep,
          Wb = sb.rankalign,
          ab = 0;
        cb.forEach((cb => {
          let sb = cb.reduce(((cb, sb) => {
            var kb;
            let Wb = null != (kb = bb.node(sb).height) ? kb : 0;
            return cb > Wb ? cb : Wb
          }), 0);
          cb.forEach((cb => {
            let kb = bb.node(cb);
            kb.y = "top" === Wb ? ab + kb.height / 2 : "bottom" === Wb ? ab + sb - kb.height / 2 : ab + sb / 2
          })), ab += sb + kb
        }))
      })(bb = Ab(bb)), Object.entries(Hs(bb, cb)).forEach((cb => {
        let [sb, kb] = cb;
        return bb.node(sb).x = kb
      }))
    }
    var Xs = new WeakMap;

    function ns(bb) {
      return ls(bb, xb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), bb
    }

    function ms(bb, cb, sb) {
      let kb = cb;
      for (; void 0 !== kb;) {
        let cb = bb.parent(kb);
        if (cb === sb) return kb;
        kb = cb
      }
    }

    function ls(bb, cb, sb) {
      var kb;
      let Wb = bb.nodes().filter((cb => bb.children(cb).length)),
        ab = {};
      Wb.forEach((kb => {
        let Wb = bb.node(kb);
        if (Wb && Wb.rankdir) {
          let Tb = new qb({
            multigraph: !0,
            compound: !0
          });
          Tb.setGraph({
            rankdir: Wb.rankdir
          });
          let Ub = bb.children(kb);
          Ub.forEach((cb => {
            let sb = {
              ...bb.node(cb)
            };
            Tb.setNode(cb, sb);
            let Wb = bb.parent(cb);
            Wb && Wb !== kb && Ub.includes(Wb) && Tb.setParent(cb, Wb)
          }));
          let Ib = new Set;
          bb.edges().forEach((cb => {
            let sb = ms(bb, cb.v, kb),
              Wb = ms(bb, cb.w, kb);
            if (sb && Wb && sb !== Wb) {
              let kb = `${sb}\0${Wb}`;
              Ib.has(kb) || (Ib.add(kb), Tb.setEdge(sb, Wb, {
                ...bb.edge(cb)
              }))
            }
          })), ls(Tb, cb, sb);
          let Hb = Bs(Tb);
          Qs(Hb, cb, sb, null), es(Tb, Hb);
          let fb = 1 / 0,
            Mb = 1 / 0,
            Xb = -1 / 0,
            nb = -1 / 0;
          Tb.nodes().forEach((bb => {
            if (bb === kb) return;
            let cb = Tb.node(bb);
            cb && "number" == typeof cb.x && "number" == typeof cb.y && "number" == typeof cb.width && "number" == typeof cb.height && (fb = Math.min(fb, cb.x - cb.width / 2), Xb = Math.max(Xb, cb.x + cb.width / 2), Mb = Math.min(Mb, cb.y - cb.height / 2), nb = Math.max(nb, cb.y + cb.height / 2))
          })), (!isFinite(fb) || !isFinite(Mb) || !isFinite(Xb) || !isFinite(nb)) && (fb = Mb = 0, Xb = nb = 0);
          let mb = Xb - fb,
            lb = nb - Mb;
          ab[kb] = {
            minX: fb,
            xk: Mb,
            maxX: Xb,
            jk: nb,
            width: mb,
            height: lb,
            offsetX: fb,
            offsetY: Mb
          }, Wb._dagreClusterSubgraph = Tb
        }
      }));
      let Tb = [],
        Ub = new Map;
      Wb.forEach((cb => {
        let sb = bb.node(cb);
        sb && sb.rankdir && ab[cb] && Ub.set(cb, (bb.children(cb) || []).filter((bb => bb !== cb)))
      }));
      let Ib = new Set([...Ub.values()].flat()),
        Hb = new Map;
      Ub.forEach(((cb, sb) => {
        Ib.has(sb) || Hb.set(sb, (cb => {
          let sb = [],
            kb = (bb.children(cb) || []).filter((bb => bb !== cb));
          for (; kb.length > 0;) {
            let cb = kb.shift();
            sb.push(cb), (bb.children(cb) || []).filter((bb => bb !== cb)).forEach((bb => kb.push(bb)))
          }
          return sb
        })(sb))
      }));
      let fb = new Set([...Hb.values()].flat()),
        Mb = bb => {
          for (let [cb, sb] of Hb)
            if (sb.includes(bb)) return cb;
          return bb
        },
        Xb = [];
      bb.edges().forEach((cb => {
        (fb.has(cb.v) || fb.has(cb.w)) && Xb.push({
          edge: cb,
          label: bb.edge(cb)
        })
      }));
      let nb = new Map;
      fb.forEach((cb => {
        let sb = bb.parent(cb);
        nb.set(cb, "string" == typeof sb ? sb : void 0)
      })), Hb.forEach(((cb, sb) => {
        let kb = bb.node(sb),
          Wb = [];
        cb.forEach((cb => {
          let sb = bb.node(cb);
          sb && (Wb.push({
            id: cb,
            node: sb,
            parent: nb.get(cb)
          }), bb.removeNode(cb))
        }));
        let Ub = Xb.filter((bb => {
            let {
              edge: sb
            } = bb;
            return cb.includes(sb.v) || cb.includes(sb.w)
          })),
          Ib = ab[sb];
        kb && (Tb.push({
          clusterId: sb,
          subgraph: kb._dagreClusterSubgraph,
          bounds: Ib,
          children: cb,
          removedNodes: Wb,
          removedEdges: Ub
        }), kb.width = Ib.width, kb.height = Ib.height)
      }));
      let mb = new Set;
      Xb.forEach((cb => {
        let {
          edge: sb,
          label: kb
        } = cb, Wb = Mb(sb.v), ab = Mb(sb.w);
        if (Wb !== ab && bb.hasNode(Wb) && bb.hasNode(ab)) {
          let cb = `${Wb}\0${ab}`;
          mb.has(cb) || (mb.add(cb), bb.setEdge(Wb, ab, {
            ...kb,
            width: 0,
            height: 0
          }))
        }
      }));
      let lb = Bs(bb),
        Qb = Qs(lb, cb, sb, null != (kb = Xs.get(bb)) ? kb : null);
      Xs.set(bb, Qb), es(bb, lb), mb.forEach((cb => {
        let sb = cb.indexOf("\0"),
          kb = cb.slice(0, sb),
          Wb = cb.slice(sb + 1);
        bb.hasEdge(kb, Wb) && bb.removeEdge(kb, Wb)
      })), Tb.forEach((cb => {
        let {
          clusterId: sb,
          subgraph: kb,
          bounds: Wb,
          removedNodes: ab,
          removedEdges: Tb
        } = cb;
        var Ub, Ib;
        let Hb = bb.node(sb),
          fb = null != (Ub = null == Hb ? void 0 : Hb.x) ? Ub : 0,
          Mb = null != (Ib = null == Hb ? void 0 : Hb.y) ? Ib : 0,
          Xb = (Wb.minX + Wb.maxX) / 2,
          nb = (Wb.xk + Wb.jk) / 2;
        ab.forEach((cb => {
          let {
            id: sb,
            node: kb,
            parent: Wb
          } = cb;
          bb.setNode(sb, kb), void 0 !== Wb && bb.setParent(sb, Wb)
        })), Tb.forEach((cb => {
          let {
            edge: sb,
            label: kb
          } = cb;
          bb.setEdge(sb, kb)
        })), kb.nodes().forEach((cb => {
          if (cb === sb) return;
          let Wb = kb.node(cb),
            ab = bb.node(cb);
          ab && Wb && "number" == typeof Wb.x && "number" == typeof Wb.y && (ab.x = fb + (Wb.x - Xb), ab.y = Mb + (Wb.y - nb))
        })), delete Hb._dagreClusterSubgraph
      })), Wb.forEach((cb => {
        var sb, kb;
        let Wb = bb.node(cb),
          Tb = ab[cb];
        if (Wb && Wb.rankdir && Wb._dagreClusterSubgraph && Tb) {
          let ab = Wb._dagreClusterSubgraph,
            Ub = null != (sb = Wb.x) ? sb : 0,
            Ib = null != (kb = Wb.y) ? kb : 0,
            Hb = (Tb.minX + Tb.maxX) / 2,
            fb = (Tb.xk + Tb.jk) / 2;
          ab.nodes().forEach((sb => {
            if (sb === cb) return;
            let kb = ab.node(sb),
              Wb = bb.node(sb);
            if (Wb && kb && "number" == typeof kb.x && "number" == typeof kb.y) {
              let bb = kb.x - Hb,
                cb = kb.y - fb;
              Wb.x = Ub + bb, Wb.y = Ib + cb
            }
          })), delete Wb._dagreClusterSubgraph
        }
      }))
    }

    function Qs(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Wb, ab;
      let Tb = !1 !== (null == sb ? void 0 : sb.useDynamic),
        Ub = Tb && null != (Wb = null == kb ? void 0 : kb.graph) ? Wb : null,
        Ib = Tb && null != (ab = null == kb ? void 0 : kb.rawNodes) ? ab : null;
      cb("    makeSpaceForEdgeLabels", (() => function(bb) {
        let cb = bb.graph();
        cb.ranksep /= 2, bb.edges().forEach((sb => {
          var kb;
          let Wb = bb.edge(sb);
          Wb.minlen *= 2, "c" !== (null != (kb = Wb.labelpos) ? kb : "r").toLowerCase() && ("TB" === cb.rankdir || "BT" === cb.rankdir ? Wb.width += Wb.labeloffset : Wb.height += Wb.labeloffset)
        }))
      }(bb))), cb("    removeSelfEdges", (() => function(bb) {
        bb.edges().forEach((cb => {
          if (cb.v === cb.w) {
            let sb = bb.node(cb.v);
            sb.selfEdges || (sb.selfEdges = []), sb.selfEdges.push({
              e: cb,
              label: bb.edge(cb)
            }), bb.removeEdge(cb)
          }
        }))
      }(bb))), cb("    acyclic", (() => nc(bb, Ub))), cb("    nestingGraph.run", (() => Zc(bb))), cb("    rank", (() => ic(Ab(bb)))), cb("    injectEdgeLabelProxies", (() => function(bb) {
        bb.edges().forEach((cb => {
          let sb = bb.edge(cb);
          if (sb.width && sb.height) {
            let sb = bb.node(cb.v),
              kb = {
                rank: (bb.node(cb.w).rank - sb.rank) / 2 + sb.rank,
                e: cb
              };
            db(bb, "edge-proxy", kb, "_ep")
          }
        }))
      }(bb))), cb("    removeEmptyRanks", (() => function(bb) {
        let cb = bb.nodes().map((cb => bb.node(cb).rank)).filter((bb => void 0 !== bb)),
          sb = Rb(Math.min, cb),
          kb = [];
        bb.nodes().forEach((cb => {
          let Wb = bb.node(cb).rank - sb;
          kb[Wb] || (kb[Wb] = []), kb[Wb].push(cb)
        }));
        let Wb = 0,
          ab = bb.graph().nodeRankFactor;
        Array.from(kb).forEach(((cb, sb) => {
          void 0 === cb && sb % ab !== 0 ? --Wb : void 0 !== cb && Wb && cb.forEach((cb => bb.node(cb).rank += Wb))
        }))
      }(bb))), cb("    nestingGraph.cleanup", (() => function(bb) {
        let cb = bb.graph();
        bb.removeNode(cb.nestingRoot), delete cb.nestingRoot, bb.edges().forEach((cb => {
          bb.edge(cb).nestingEdge && bb.removeEdge(cb)
        }))
      }(bb))), cb("    normalizeRanks", (() => function(bb) {
        let cb = bb.nodes().map((cb => {
            let sb = bb.node(cb).rank;
            return void 0 === sb ? Number.MAX_VALUE : sb
          })),
          sb = Rb(Math.min, cb);
        bb.nodes().forEach((cb => {
          let kb = bb.node(cb);
          Object.hasOwn(kb, "rank") && (kb.rank -= sb)
        }))
      }(bb))), cb("    assignRankMinMax", (() => function(bb) {
        let cb = 0;
        bb.nodes().forEach((sb => {
          let kb = bb.node(sb);
          kb.borderTop && (kb.minRank = bb.node(kb.borderTop).rank, kb.maxRank = bb.node(kb.borderBottom).rank, cb = Math.max(cb, kb.maxRank))
        })), bb.graph().maxRank = cb
      }(bb))), cb("    removeEdgeLabelProxies", (() => function(bb) {
        bb.nodes().forEach((cb => {
          let sb = bb.node(cb);
          if ("edge-proxy" === sb.dummy) {
            let kb = sb;
            bb.edge(kb.e).labelRank = sb.rank, bb.removeNode(cb)
          }
        }))
      }(bb))), cb("    normalize.run", (() => mc(bb))), cb("    parentDummyChains", (() => Kc(bb))), cb("    addBorderSegments", (() => qc(bb))), cb("    order", (() => ss(bb, sb, Ib))), cb("    insertSelfEdges", (() => function(bb) {
        rb(bb).forEach((cb => {
          let sb = 0;
          cb.forEach(((cb, kb) => {
            let Wb = bb.node(cb);
            "number" != typeof Wb.rank && (Wb.rank = 0), Wb.order = kb + sb, (Wb.selfEdges || []).forEach((cb => {
              db(bb, "selfedge", {
                width: cb.label.width,
                height: cb.label.height,
                rank: Wb.rank,
                order: kb + ++sb,
                e: cb.e,
                edgeLabel: cb.label
              }, "_se"), (!Array.isArray(cb.label.points) || 7 !== cb.label.points.length) && (cb.label.points = [{
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
            })), delete Wb.selfEdges
          }))
        }))
      }(bb))), cb("    adjustCoordinateSystem", (() => function(bb) {
        var cb;
        let sb = null == (cb = bb.graph().rankdir) ? void 0 : cb.toLowerCase();
        ("lr" === sb || "rl" === sb) && wc(bb)
      }(bb))), cb("    position", (() => Ms(bb, sb.corePath))), cb("    positionSelfEdges", (() => function(bb) {
        bb.nodes().forEach((cb => {
          let sb = bb.node(cb),
            kb = bb => "number" == typeof bb && isFinite(bb);
          if ("selfedge" === sb.dummy) {
            let Wb = sb,
              ab = bb.node(Wb.e.v),
              Tb = kb(null == ab ? void 0 : ab.x) ? ab.x : 0,
              Ub = kb(null == ab ? void 0 : ab.y) ? ab.y : 0,
              Ib = kb(null == ab ? void 0 : ab.width) ? ab.width : 0,
              Hb = kb(null == ab ? void 0 : ab.height) ? ab.height : 0,
              fb = kb(sb.x) ? sb.x : Tb,
              Mb = kb(sb.y) ? sb.y : Ub,
              Xb = Ib / 2,
              nb = Hb / 2;
            Wb.edgeLabel.points = [{
              x: fb + Xb,
              y: Mb - nb
            }, {
              x: fb + Xb,
              y: Mb - nb
            }, {
              x: fb,
              y: Mb
            }, {
              x: fb - Xb,
              y: Mb + nb
            }, {
              x: fb - Xb,
              y: Mb + nb
            }, {
              x: fb,
              y: Mb
            }, {
              x: fb,
              y: Mb
            }], Wb.edgeLabel.x = fb, Wb.edgeLabel.y = Mb, bb.setEdge(Wb.e, Wb.edgeLabel), bb.removeNode(cb)
          } else sb && Array.isArray(sb.selfEdges) && sb.selfEdges.forEach((bb => {
            if (!Array.isArray(bb.label.points) || 7 !== bb.label.points.length) {
              let cb = kb(sb.x) ? sb.x : 0,
                Wb = kb(sb.y) ? sb.y : 0,
                ab = (kb(sb.width) ? sb.width : 0) / 2,
                Tb = (kb(sb.height) ? sb.height : 0) / 2;
              bb.label.points = [{
                x: cb + ab,
                y: Wb - Tb
              }, {
                x: cb + ab,
                y: Wb - Tb
              }, {
                x: cb,
                y: Wb
              }, {
                x: cb - ab,
                y: Wb + Tb
              }, {
                x: cb - ab,
                y: Wb + Tb
              }, {
                x: cb,
                y: Wb
              }, {
                x: cb,
                y: Wb
              }]
            }
          }))
        }))
      }(bb)));
      let Hb = JSON.parse(JSON.stringify(bb._nodes));
      return cb("    removeBorderNodes", (() => function(bb) {
        bb.nodes().forEach((cb => {
          if (bb.children(cb).length) {
            let sb = bb.node(cb),
              kb = bb.node(sb.borderTop),
              Wb = bb.node(sb.borderBottom),
              ab = bb.node(sb.borderLeft[sb.borderLeft.length - 1]),
              Tb = bb.node(sb.borderRight[sb.borderRight.length - 1]);
            sb.width = Math.abs(Tb.x - ab.x), sb.height = Math.abs(Wb.y - kb.y), sb.x = ab.x + sb.width / 2, sb.y = kb.y + sb.height / 2
          }
        })), bb.nodes().forEach((cb => {
          "border" === bb.node(cb).dummy && bb.removeNode(cb)
        }))
      }(bb))), cb("    normalize.undo", (() => function(bb) {
        bb.graph().dummyChains.forEach((cb => {
          let sb, kb = bb.node(cb),
            Wb = kb.edgeLabel;
          for (bb.setEdge(kb.edgeObj, Wb); kb.dummy;) sb = bb.successors(cb)[0], bb.removeNode(cb), Wb.points.push({
            x: kb.x,
            y: kb.y
          }), "edge-label" === kb.dummy && (Wb.x = kb.x, Wb.y = kb.y, Wb.width = kb.width, Wb.height = kb.height), cb = sb, kb = bb.node(cb)
        }))
      }(bb))), cb("    fixupEdgeLabelCoords", (() => function(bb) {
        bb.edges().forEach((cb => {
          let sb = bb.edge(cb);
          if (Object.hasOwn(sb, "x")) switch (("l" === sb.labelpos || "r" === sb.labelpos) && (sb.width -= sb.labeloffset), sb.labelpos) {
            case "l":
              sb.x -= sb.width / 2 + sb.labeloffset;
              break;
            case "r":
              sb.x += sb.width / 2 + sb.labeloffset
          }
        }))
      }(bb))), cb("    undoCoordinateSystem", (() => Ac(bb))), cb("    translateGraph", (() => function(bb) {
        let cb = Number.POSITIVE_INFINITY,
          sb = 0,
          kb = Number.POSITIVE_INFINITY,
          Wb = 0,
          ab = bb.graph(),
          Tb = ab.marginx || 0,
          Ub = ab.marginy || 0;

        function Ib(bb) {
          let ab = bb.x,
            Tb = bb.y,
            Ub = bb.width,
            Ib = bb.height;
          cb = Math.min(cb, ab - Ub / 2), sb = Math.max(sb, ab + Ub / 2), kb = Math.min(kb, Tb - Ib / 2), Wb = Math.max(Wb, Tb + Ib / 2)
        }
        bb.nodes().forEach((cb => Ib(bb.node(cb)))), bb.edges().forEach((cb => {
          let sb = bb.edge(cb);
          Object.hasOwn(sb, "x") && Ib(sb)
        })), cb -= Tb, kb -= Ub, bb.nodes().forEach((sb => {
          let Wb = bb.node(sb);
          Wb.x -= cb, Wb.y -= kb
        })), bb.edges().forEach((sb => {
          let Wb = bb.edge(sb);
          Wb.points.forEach((bb => {
            bb.x -= cb, bb.y -= kb
          })), Object.hasOwn(Wb, "x") && (Wb.x -= cb), Object.hasOwn(Wb, "y") && (Wb.y -= kb)
        })), ab.width = sb - cb + Tb, ab.height = Wb - kb + Ub
      }(bb))), cb("    assignNodeIntersects", (() => function(bb) {
        bb.edges().forEach((cb => {
          if (cb.v === cb.w) return;
          let sb, kb, Wb = bb.edge(cb),
            ab = bb.node(cb.v),
            Tb = bb.node(cb.w);
          Wb.points ? (sb = Wb.points[0], kb = Wb.points[Wb.points.length - 1]) : (Wb.points = [], sb = Tb, kb = ab), Wb.points.unshift(wb(ab, sb)), Wb.points.push(wb(Tb, kb))
        }))
      }(bb))), cb("    reversePoints", (() => function(bb) {
        bb.edges().forEach((cb => {
          let sb = bb.edge(cb);
          sb.reversed && sb.points.reverse()
        }))
      }(bb))), cb("    acyclic.undo", (() => function(bb) {
        bb.edges().forEach((cb => {
          let sb = bb.edge(cb);
          if (sb.reversed) {
            bb.removeEdge(cb);
            let kb = sb.forwardName;
            delete sb.reversed, delete sb.forwardName, bb.setEdge(cb.w, cb.v, sb, kb)
          }
        }))
      }(bb))), {
        graph: bb,
        rawNodes: Hb
      }
    }

    function es(bb, cb) {
      bb.nodes().forEach((sb => {
        let kb = bb.node(sb),
          Wb = cb.node(sb);
        kb && (kb.x = Wb.x, kb.y = Wb.y, kb.order = Wb.order, kb.rank = Wb.rank, cb.children(sb).length && (kb.width = Wb.width, kb.height = Wb.height))
      })), bb.edges().forEach((sb => {
        let kb = bb.edge(sb),
          Wb = cb.edge(sb);
        kb.points = Wb.points, Object.hasOwn(Wb, "x") && (kb.x = Wb.x, kb.y = Wb.y)
      })), bb.graph().width = cb.graph().width, bb.graph().height = cb.graph().height
    }
    var Cs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Ns = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Vs = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Ls = ["width", "height", "rank"],
      us = {
        width: 0,
        height: 0
      },
      Ys = ["minlen", "weight", "width", "height", "labeloffset"],
      hs = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      gs = ["labelpos"];

    function Bs(bb) {
      let cb = new qb({
          multigraph: !0,
          compound: !0
        }),
        sb = ys(bb.graph());
      return cb.setGraph(Object.assign({}, Ns, ts(sb, Cs), cc(sb, Vs))), bb.nodes().forEach((sb => {
        let kb = ts(ys(bb.node(sb)), Ls);
        Object.keys(us).forEach((bb => {
          void 0 === kb[bb] && (kb[bb] = us[bb])
        })), cb.setNode(sb, kb);
        let Wb = bb.parent(sb);
        void 0 !== Wb && cb.setParent(sb, Wb)
      })), bb.edges().forEach((sb => {
        let kb = ys(bb.edge(sb));
        cb.setEdge(sb, Object.assign({}, hs, ts(kb, Ys), cc(kb, gs)))
      })), cb
    }

    function ts(bb, cb) {
      return sc(cc(bb, cb), Number)
    }

    function ys(bb) {
      let cb = {};
      return bb && Object.entries(bb).forEach((bb => {
        let [sb, kb] = bb;
        "string" == typeof sb && (sb = sb.toLowerCase()), cb[sb] = kb
      })), cb
    }

    function Ps(bb) {
      let cb = rb(bb),
        sb = new qb({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return bb.nodes().forEach((cb => {
        sb.setNode(cb, {
          label: cb
        }), sb.setParent(cb, "layer" + bb.node(cb).rank)
      })), bb.edges().forEach((bb => sb.setEdge(bb.v, bb.w, {}, bb.name))), cb.forEach(((bb, cb) => {
        let kb = "layer" + cb;
        sb.setNode(kb, {
          rank: "same"
        }), bb.reduce(((bb, cb) => (sb.setEdge(bb, cb, {
          style: "invis"
        }), cb)))
      })), sb
    }
    var Ds = {
        time: Fb,
        notime: xb
      },
      Es = {
        graphlib: ab,
        version: ac,
        layout: ns,
        debug: Ps,
        util: {
          time: Fb,
          notime: xb
        }
      }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);