/*! For license information please see 6ndy1f.111.206c477b.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6129: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Graph: () => hk,
      debug: () => MB,
      default: () => UB,
      graphlib: () => ak,
      layout: () => eB,
      util: () => gB,
      version: () => XF
    });
    var Rk = Object.defineProperty,
      tk = (kk, Fk, Bk) => ((kk, Fk, Bk) => Fk in kk ? Rk(kk, Fk, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Bk
      }) : kk[Fk] = Bk)(kk, "symbol" != typeof Fk ? Fk + "" : Fk, Bk),
      ak = {};
    ((kk, Fk) => {
      for (var Bk in Fk) Rk(kk, Bk, {
        get: Fk[Bk],
        enumerable: !0
      })
    })(ak, {
      Graph: () => hk,
      alg: () => mk
    });
    var Xk = Object.defineProperty,
      bk = (kk, Fk) => {
        for (var Bk in Fk) Xk(kk, Bk, {
          get: Fk[Bk],
          enumerable: !0
        })
      },
      wk = class {
        constructor(kk) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, kk && (this._isDirected = !("directed" in kk) || kk.directed, this._isMultigraph = "multigraph" in kk && kk.multigraph, this._isCompound = "compound" in kk && kk.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(kk) {
          return this._label = kk, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(kk) {
          return this._defaultNodeLabelFn = "function" != typeof kk ? () => kk : kk, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((kk => 0 === Object.keys(this._in[kk]).length))
        }
        sinks() {
          return this.nodes().filter((kk => 0 === Object.keys(this._out[kk]).length))
        }
        setNodes(kk, Fk) {
          return kk.forEach((kk => {
            void 0 !== Fk ? this.setNode(kk, Fk) : this.setNode(kk)
          })), this
        }
        setNode(kk, Fk) {
          return kk in this._nodes ? (arguments.length > 1 && (this._nodes[kk] = Fk), this) : (this._nodes[kk] = arguments.length > 1 ? Fk : this._defaultNodeLabelFn(kk), this._isCompound && (this._parent[kk] = "\0", this._children[kk] = {}, this._children["\0"][kk] = !0), this._in[kk] = {}, this._preds[kk] = {}, this._out[kk] = {}, this._sucs[kk] = {}, ++this._nodeCount, this)
        }
        node(kk) {
          return this._nodes[kk]
        }
        hasNode(kk) {
          return kk in this._nodes
        }
        removeNode(kk) {
          if (kk in this._nodes) {
            let Fk = kk => this.removeEdge(this._edgeObjs[kk]);
            delete this._nodes[kk], this._isCompound && (this._removeFromParentsChildList(kk), delete this._parent[kk], this.children(kk).forEach((kk => {
              this.setParent(kk)
            })), delete this._children[kk]), Object.keys(this._in[kk]).forEach(Fk), delete this._in[kk], delete this._preds[kk], Object.keys(this._out[kk]).forEach(Fk), delete this._out[kk], delete this._sucs[kk], --this._nodeCount
          }
          return this
        }
        setParent(kk, Fk) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Fk) Fk = "\0";
          else {
            for (let Bk = Fk += ""; void 0 !== Bk; Bk = this.parent(Bk))
              if (Bk === kk) throw new Error("Setting " + Fk + " as parent of " + kk + " would create a cycle");
            this.setNode(Fk)
          }
          return this.setNode(kk), this._removeFromParentsChildList(kk), this._parent[kk] = Fk, this._children[Fk][kk] = !0, this
        }
        parent(kk) {
          if (this._isCompound) {
            let Fk = this._parent[kk];
            if ("\0" !== Fk) return Fk
          }
        }
        children() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Fk = this._children[kk];
            if (Fk) return Object.keys(Fk)
          } else {
            if ("\0" === kk) return this.nodes();
            if (this.hasNode(kk)) return []
          }
          return []
        }
        predecessors(kk) {
          let Fk = this._preds[kk];
          if (Fk) return Object.keys(Fk)
        }
        successors(kk) {
          let Fk = this._sucs[kk];
          if (Fk) return Object.keys(Fk)
        }
        neighbors(kk) {
          let Fk = this.predecessors(kk);
          if (Fk) {
            let Bk = new Set(Fk),
              Rk = this.successors(kk);
            if (Rk)
              for (let kk of Rk) Bk.add(kk);
            return Array.from(Bk.values())
          }
        }
        isLeaf(kk) {
          var Fk;
          let Bk;
          return Bk = this.isDirected() ? this.successors(kk) : this.neighbors(kk), 0 === (null != (Fk = null == Bk ? void 0 : Bk.length) ? Fk : 0)
        }
        filterNodes(kk) {
          let Fk = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Fk.setGraph(this.graph()), Object.entries(this._nodes).forEach((Bk => {
            let [Rk, tk] = Bk;
            kk(Rk) && Fk.setNode(Rk, tk)
          })), Object.values(this._edgeObjs).forEach((kk => {
            Fk.hasNode(kk.v) && Fk.hasNode(kk.w) && Fk.setEdge(kk, this.edge(kk))
          }));
          let Bk = {},
            Rk = kk => {
              let tk = this.parent(kk);
              return !tk || Fk.hasNode(tk) ? (Bk[kk] = tk, tk) : tk in Bk ? Bk[tk] : Rk(tk)
            };
          return this._isCompound && Fk.nodes().forEach((kk => Fk.setParent(kk, Rk(kk)))), Fk
        }
        setDefaultEdgeLabel(kk) {
          return this._defaultEdgeLabelFn = "function" != typeof kk ? () => kk : kk, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(kk, Fk) {
          return kk.reduce(((kk, Bk) => (void 0 !== Fk ? this.setEdge(kk, Bk, Fk) : this.setEdge(kk, Bk), Bk))), this
        }
        setEdge(kk, Fk, Bk, Rk) {
          let tk, ak, Xk, bk, wk = !1;
          "object" == typeof kk && null !== kk && "v" in kk ? (tk = kk.v, ak = kk.w, Xk = kk.name, 2 === arguments.length && (bk = Fk, wk = !0)) : (tk = kk, ak = Fk, Xk = Rk, arguments.length > 2 && (bk = Bk, wk = !0)), tk = "" + tk, ak = "" + ak, void 0 !== Xk && (Xk = "" + Xk);
          let sk = Vk(this._isDirected, tk, ak, Xk);
          if (sk in this._edgeLabels) return wk && (this._edgeLabels[sk] = bk), this;
          if (void 0 !== Xk && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(tk), this.setNode(ak), this._edgeLabels[sk] = wk ? bk : this._defaultEdgeLabelFn(tk, ak, Xk);
          let Jk = function(kk, Fk, Bk, Rk) {
            let tk = "" + Fk,
              ak = "" + Bk;
            if (!kk && tk > ak) {
              let kk = tk;
              tk = ak, ak = kk
            }
            let Xk = {
              v: tk,
              w: ak
            };
            return Rk && (Xk.name = Rk), Xk
          }(this._isDirected, tk, ak, Xk);
          return tk = Jk.v, ak = Jk.w, Object.freeze(Jk), this._edgeObjs[sk] = Jk, dk(this._preds[ak], tk), dk(this._sucs[tk], ak), this._in[ak][sk] = Jk, this._out[tk][sk] = Jk, this._edgeCount++, this
        }
        edge(kk, Fk, Bk) {
          let Rk = 1 === arguments.length ? Jk(this._isDirected, kk) : Vk(this._isDirected, kk, Fk, Bk);
          return this._edgeLabels[Rk]
        }
        edgeAsObj(kk, Fk, Bk) {
          let Rk = 1 === arguments.length ? this.edge(kk) : this.edge(kk, Fk, Bk);
          return "object" != typeof Rk || null === Rk ? {
            label: Rk
          } : Rk
        }
        hasEdge(kk, Fk, Bk) {
          return (1 === arguments.length ? Jk(this._isDirected, kk) : Vk(this._isDirected, kk, Fk, Bk)) in this._edgeLabels
        }
        removeEdge(kk, Fk, Bk) {
          let Rk = 1 === arguments.length ? Jk(this._isDirected, kk) : Vk(this._isDirected, kk, Fk, Bk),
            tk = this._edgeObjs[Rk];
          if (tk) {
            let kk = tk.v,
              Fk = tk.w;
            delete this._edgeLabels[Rk], delete this._edgeObjs[Rk], sk(this._preds[Fk], kk), sk(this._sucs[kk], Fk), delete this._in[Fk][Rk], delete this._out[kk][Rk], this._edgeCount--
          }
          return this
        }
        inEdges(kk, Fk) {
          return this.isDirected() ? this.filterEdges(this._in[kk], kk, Fk) : this.nodeEdges(kk, Fk)
        }
        outEdges(kk, Fk) {
          return this.isDirected() ? this.filterEdges(this._out[kk], kk, Fk) : this.nodeEdges(kk, Fk)
        }
        nodeEdges(kk, Fk) {
          if (kk in this._nodes) return this.filterEdges({
            ...this._in[kk],
            ...this._out[kk]
          }, kk, Fk)
        }
        _removeFromParentsChildList(kk) {
          delete this._children[this._parent[kk]][kk]
        }
        filterEdges(kk, Fk, Bk) {
          if (!kk) return;
          let Rk = Object.values(kk);
          return Bk ? Rk.filter((kk => kk.v === Fk && kk.w === Bk || kk.v === Bk && kk.w === Fk)) : Rk
        }
      };

    function dk(kk, Fk) {
      kk[Fk] ? kk[Fk]++ : kk[Fk] = 1
    }

    function sk(kk, Fk) {
      void 0 !== kk[Fk] && !--kk[Fk] && delete kk[Fk]
    }

    function Vk(kk, Fk, Bk, Rk) {
      let tk = "" + Fk,
        ak = "" + Bk;
      if (!kk && tk > ak) {
        let kk = tk;
        tk = ak, ak = kk
      }
      return tk + "\x01" + ak + "\x01" + (void 0 === Rk ? "\0" : Rk)
    }

    function Jk(kk, Fk) {
      return Vk(kk, Fk.v, Fk.w, Fk.name)
    }

    function Ak(kk) {
      let Fk = {
          options: {
            directed: kk.isDirected(),
            multigraph: kk.isMultigraph(),
            compound: kk.isCompound()
          },
          nodes: ek(kk),
          edges: yk(kk)
        },
        Bk = kk.graph();
      return void 0 !== Bk && (Fk.value = structuredClone(Bk)), Fk
    }

    function ek(kk) {
      return kk.nodes().map((Fk => {
        let Bk = kk.node(Fk),
          Rk = kk.parent(Fk),
          tk = {
            v: Fk
          };
        return void 0 !== Bk && (tk.value = Bk), void 0 !== Rk && (tk.parent = Rk), tk
      }))
    }

    function yk(kk) {
      return kk.edges().map((Fk => {
        let Bk = kk.edge(Fk),
          Rk = {
            v: Fk.v,
            w: Fk.w
          };
        return void 0 !== Fk.name && (Rk.name = Fk.name), void 0 !== Bk && (Rk.value = Bk), Rk
      }))
    }

    function fk(kk) {
      let Fk = new wk(kk.options);
      return void 0 !== kk.value && Fk.setGraph(kk.value), kk.nodes.forEach((kk => {
        Fk.setNode(kk.v, kk.value), kk.parent && Fk.setParent(kk.v, kk.parent)
      })), kk.edges.forEach((kk => {
        Fk.setEdge({
          v: kk.v,
          w: kk.w,
          name: kk.name
        }, kk.value)
      })), Fk
    }
    bk({}, {
      read: () => fk,
      write: () => Ak
    });
    var mk = {};
    bk(mk, {
      CycleException: () => Mk,
      bellmanFord: () => vk,
      components: () => ik,
      dijkstra: () => Ok,
      dijkstraAll: () => Ek,
      findCycles: () => Nk,
      floydWarshall: () => uk,
      isAcyclic: () => Uk,
      postorder: () => rk,
      preorder: () => Dk,
      prim: () => zk,
      shortestPaths: () => Pk,
      tarjan: () => Sk,
      topsort: () => gk
    });
    var Wk = () => 1;

    function vk(kk, Fk, Bk, Rk) {
      return function(kk, Fk, Bk, Rk) {
        let tk, ak = {},
          Xk = 0,
          bk = kk.nodes(),
          wk = function(kk) {
            let Fk = ak[kk.v],
              Rk = ak[kk.w];
            if (!Fk || !Rk) return;
            let Xk = Bk(kk);
            Fk.distance + Xk < Rk.distance && (ak[kk.w] = {
              distance: Fk.distance + Xk,
              predecessor: kk.v
            }, tk = !0)
          },
          dk = function() {
            bk.forEach((function(kk) {
              Rk(kk).forEach((function(Fk) {
                let Bk = Fk.v === kk ? Fk.v : Fk.w,
                  Rk = Bk === Fk.v ? Fk.w : Fk.v;
                wk({
                  v: Bk,
                  w: Rk
                })
              }))
            }))
          };
        bk.forEach((function(kk) {
          let Bk = kk === Fk ? 0 : Number.POSITIVE_INFINITY;
          ak[kk] = {
            distance: Bk,
            predecessor: ""
          }
        }));
        let sk = bk.length;
        for (let Vk = 1; Vk < sk && (tk = !1, Xk++, dk(), tk); Vk++);
        if (Xk === sk - 1 && (tk = !1, dk(), tk)) throw new Error("The graph contains a negative weight cycle");
        return ak
      }(kk, String(Fk), Bk || Wk, Rk || function(Fk) {
        var Bk;
        return null != (Bk = kk.outEdges(Fk)) ? Bk : []
      })
    }

    function ik(kk) {
      let Fk, Bk = {},
        Rk = [];

      function tk(Rk) {
        var ak, Xk;
        Rk in Bk || (Bk[Rk] = !0, Fk.push(Rk), null == (ak = kk.successors(Rk)) || ak.forEach(tk), null == (Xk = kk.predecessors(Rk)) || Xk.forEach(tk))
      }
      return kk.nodes().forEach((function(kk) {
        Fk = [], tk(kk), Fk.length && Rk.push(Fk)
      })), Rk
    }
    var Yk = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((kk => kk.key))
        }
        has(kk) {
          return kk in this._keyIndices
        }
        priority(kk) {
          let Fk = this._keyIndices[kk];
          if (void 0 !== Fk) return this._arr[Fk].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(kk, Fk) {
          let Bk = this._keyIndices,
            Rk = String(kk);
          if (!(Rk in Bk)) {
            let kk = this._arr,
              tk = kk.length;
            return Bk[Rk] = tk, kk.push({
              key: Rk,
              priority: Fk
            }), this._decrease(tk), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let kk = this._arr.pop();
          return delete this._keyIndices[kk.key], this._heapify(0), kk.key
        }
        decrease(kk, Fk) {
          let Bk = this._keyIndices[kk];
          if (void 0 === Bk) throw new Error(`Key not found: ${kk}`);
          let Rk = this._arr[Bk].priority;
          if (Fk > Rk) throw new Error(`New priority is greater than current priority. Key: ${kk} Old: ${Rk} New: ${Fk}`);
          this._arr[Bk].priority = Fk, this._decrease(Bk)
        }
        _heapify(kk) {
          let Fk = this._arr,
            Bk = 2 * kk,
            Rk = Bk + 1,
            tk = kk;
          Bk < Fk.length && (tk = Fk[Bk].priority < Fk[tk].priority ? Bk : tk, Rk < Fk.length && (tk = Fk[Rk].priority < Fk[tk].priority ? Rk : tk), tk !== kk && (this._swap(kk, tk), this._heapify(tk)))
        }
        _decrease(kk) {
          let Fk, Bk = this._arr,
            Rk = Bk[kk].priority;
          for (; 0 !== kk && (Fk = kk >> 1, !(Bk[Fk].priority < Rk));) this._swap(kk, Fk), kk = Fk
        }
        _swap(kk, Fk) {
          let Bk = this._arr,
            Rk = this._keyIndices,
            tk = Bk[kk],
            ak = Bk[Fk];
          Bk[kk] = ak, Bk[Fk] = tk, Rk[ak.key] = kk, Rk[tk.key] = Fk
        }
      },
      Lk = () => 1;

    function Ok(kk, Fk, Bk, Rk) {
      return function(kk, Fk, Bk, Rk) {
        let tk, ak, Xk = {},
          bk = new Yk,
          wk = function(kk) {
            let Fk = kk.v !== tk ? kk.v : kk.w,
              Rk = Xk[Fk];
            if (!Rk) return;
            let wk = Bk(kk),
              dk = ak.distance + wk;
            if (wk < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + kk + " Weight: " + wk);
            dk < Rk.distance && (Rk.distance = dk, Rk.predecessor = tk, bk.decrease(Fk, dk))
          };
        for (kk.nodes().forEach((function(kk) {
            let Bk = kk === Fk ? 0 : Number.POSITIVE_INFINITY;
            Xk[kk] = {
              distance: Bk,
              predecessor: ""
            }, bk.add(kk, Bk)
          })); bk.size() > 0;) {
          tk = bk.removeMin();
          let kk = Xk[tk];
          if (!kk || kk.distance === Number.POSITIVE_INFINITY) break;
          ak = kk, Rk(tk).forEach(wk)
        }
        return Xk
      }(kk, String(Fk), Bk || Lk, Rk || function(Fk) {
        var Bk;
        return null != (Bk = kk.outEdges(Fk)) ? Bk : []
      })
    }

    function Ek(kk, Fk, Bk) {
      return kk.nodes().reduce((function(Rk, tk) {
        return Rk[tk] = Ok(kk, tk, Fk, Bk), Rk
      }), {})
    }

    function Sk(kk) {
      let Fk = 0,
        Bk = [],
        Rk = {},
        tk = [];

      function ak(Xk) {
        var bk;
        let wk = Rk[Xk] = {
          onStack: !0,
          lowlink: Fk,
          index: Fk++
        };
        if (Bk.push(Xk), null == (bk = kk.successors(Xk)) || bk.forEach((function(kk) {
            if (kk in Rk) {
              let Fk = Rk[kk];
              null != Fk && Fk.onStack && (wk.lowlink = Math.min(wk.lowlink, Fk.index))
            } else {
              ak(kk);
              let Fk = Rk[kk];
              Fk && (wk.lowlink = Math.min(wk.lowlink, Fk.lowlink))
            }
          })), wk.lowlink === wk.index) {
          let kk, Fk = [];
          do {
            kk = Bk.pop();
            let tk = Rk[kk];
            tk && (tk.onStack = !1), Fk.push(kk)
          } while (Xk !== kk);
          tk.push(Fk)
        }
      }
      return kk.nodes().forEach((function(kk) {
        kk in Rk || ak(kk)
      })), tk
    }

    function Nk(kk) {
      return Sk(kk).filter((function(Fk) {
        var Bk;
        let Rk = Fk[0];
        return !!Rk && (Fk.length > 1 || 1 === Fk.length && (null != (Bk = kk.outEdges(Rk, Rk)) ? Bk : []).length > 0)
      }))
    }
    var Hk = () => 1;

    function uk(kk, Fk, Bk) {
      return function(kk, Fk, Bk) {
        let Rk = {},
          tk = kk.nodes();
        return tk.forEach((function(kk) {
          let ak = {};
          Rk[kk] = ak, ak[kk] = {
            distance: 0,
            predecessor: ""
          }, tk.forEach((function(Fk) {
            kk !== Fk && (ak[Fk] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Bk(kk).forEach((function(Bk) {
            let Rk = Bk.v === kk ? Bk.w : Bk.v,
              tk = Fk(Bk);
            ak[Rk] = {
              distance: tk,
              predecessor: kk
            }
          }))
        })), tk.forEach((function(kk) {
          let Fk = Rk[kk];
          Fk && tk.forEach((function(Bk) {
            let ak = Rk[Bk];
            ak && tk.forEach((function(Bk) {
              let Rk = ak[kk],
                tk = Fk[Bk],
                Xk = ak[Bk];
              if (Rk && tk && Xk) {
                let kk = Rk.distance + tk.distance;
                kk < Xk.distance && (Xk.distance = kk, Xk.predecessor = tk.predecessor)
              }
            }))
          }))
        })), Rk
      }(kk, Fk || Hk, Bk || function(Fk) {
        var Bk;
        return null != (Bk = kk.outEdges(Fk)) ? Bk : []
      })
    }
    var Mk = class extends Error {
      constructor(kk) {
        super(kk), this.name = "CycleException"
      }
    };

    function gk(kk) {
      let Fk = {},
        Bk = {},
        Rk = [];
      if (kk.sinks().forEach((function tk(ak) {
          var Xk;
          if (ak in Bk) throw new Mk;
          ak in Fk || (Bk[ak] = !0, Fk[ak] = !0, null == (Xk = kk.predecessors(ak)) || Xk.forEach(tk), delete Bk[ak], Rk.push(ak))
        })), Object.keys(Fk).length !== kk.nodeCount()) throw new Mk;
      return Rk
    }

    function Uk(kk) {
      try {
        gk(kk)
      } catch (Fk) {
        if (Fk instanceof Mk) return !1;
        throw Fk
      }
      return !0
    }

    function ck(kk, Fk, Bk, Rk, tk) {
      Array.isArray(Fk) || (Fk = [Fk]);
      let ak = Fk => {
          var Bk;
          return null != (Bk = kk.isDirected() ? kk.successors(Fk) : kk.neighbors(Fk)) ? Bk : []
        },
        Xk = {};
      return Fk.forEach((function(Fk) {
        if (!kk.hasNode(Fk)) throw new Error("Graph does not have node: " + Fk);
        tk = Gk(kk, Fk, "post" === Bk, Xk, ak, Rk, tk)
      })), tk
    }

    function Gk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      return Fk in Rk || (Rk[Fk] = !0, Bk || (Xk = ak(Xk, Fk)), tk(Fk).forEach((function(Fk) {
        Xk = Gk(kk, Fk, Bk, Rk, tk, ak, Xk)
      })), Bk && (Xk = ak(Xk, Fk))), Xk
    }

    function Tk(kk, Fk, Bk) {
      return ck(kk, Fk, Bk, (function(kk, Fk) {
        return kk.push(Fk), kk
      }), [])
    }

    function rk(kk, Fk) {
      return Tk(kk, Fk, "post")
    }

    function Dk(kk, Fk) {
      return Tk(kk, Fk, "pre")
    }

    function zk(kk, Fk) {
      var Bk;
      let Rk, tk = new wk,
        ak = {},
        Xk = new Yk;

      function bk(kk) {
        let Bk = kk.v === Rk ? kk.w : kk.v,
          tk = Xk.priority(Bk);
        if (void 0 !== tk) {
          let bk = Fk(kk);
          bk < tk && (ak[Bk] = Rk, Xk.decrease(Bk, bk))
        }
      }
      if (0 === kk.nodeCount()) return tk;
      kk.nodes().forEach((function(kk) {
        Xk.add(kk, Number.POSITIVE_INFINITY), tk.setNode(kk)
      }));
      let dk = kk.nodes()[0];
      void 0 !== dk && Xk.decrease(dk, 0);
      let sk = !1;
      for (; Xk.size() > 0;) {
        if (Rk = Xk.removeMin(), Rk in ak) tk.setEdge(Rk, ak[Rk]);
        else {
          if (sk) throw new Error("Input graph is not connected: " + kk);
          sk = !0
        }
        null == (Bk = kk.nodeEdges(Rk)) || Bk.forEach(bk)
      }
      return tk
    }

    function Pk(kk, Fk, Bk, Rk) {
      return function(kk, Fk, Bk, Rk) {
        if (void 0 === Bk) return Ok(kk, Fk, Bk, Rk);
        let tk = !1,
          ak = kk.nodes();
        for (let Xk = 0; Xk < ak.length; Xk++) {
          let bk = ak[Xk];
          if (void 0 === bk) continue;
          let wk = Rk(bk);
          for (let kk = 0; kk < wk.length; kk++) {
            let Fk = wk[kk];
            if (!Fk) continue;
            let Rk = Fk.v === bk ? Fk.v : Fk.w;
            Bk({
              v: Rk,
              w: Rk === Fk.v ? Fk.w : Fk.v
            }) < 0 && (tk = !0)
          }
          if (tk) return vk(kk, Fk, Bk, Rk)
        }
        return Ok(kk, Fk, Bk, Rk)
      }(kk, Fk, Bk, null != Rk ? Rk : Fk => {
        var Bk;
        return null != (Bk = kk.outEdges(Fk)) ? Bk : []
      })
    }
    var hk = wk;

    function qk(kk, Fk, Bk, Rk) {
      let tk = Rk;
      for (; kk.hasNode(tk);) tk = kF(Rk);
      return Bk.dummy = Fk, kk.setNode(tk, Bk), tk
    }

    function Ck(kk) {
      let Fk = new hk({
        multigraph: kk.isMultigraph()
      }).setGraph(kk.graph());
      return kk.nodes().forEach((Bk => {
        kk.children(Bk).length || Fk.setNode(Bk, kk.node(Bk))
      })), kk.edges().forEach((Bk => {
        Fk.setEdge(Bk, kk.edge(Bk))
      })), Fk
    }

    function Zk(kk, Fk) {
      let Bk, Rk, tk = kk.x,
        ak = kk.y,
        Xk = Fk.x - tk,
        bk = Fk.y - ak,
        wk = kk.width / 2,
        dk = kk.height / 2;
      if (!Xk && !bk) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(bk) * wk > Math.abs(Xk) * dk ? (bk < 0 && (dk = -dk), Bk = dk * Xk / bk, Rk = dk) : (Xk < 0 && (wk = -wk), Bk = wk, Rk = wk * bk / Xk), {
        x: tk + Bk,
        y: ak + Rk
      }
    }

    function pk(kk) {
      let Fk = FF(lk(kk) + 1).map((() => []));
      return kk.nodes().forEach((Bk => {
        let Rk = kk.node(Bk),
          tk = Rk.rank;
        void 0 !== tk && (Fk[tk] || (Fk[tk] = []), Fk[tk][Rk.order] = Bk)
      })), Fk
    }

    function Kk(kk, Fk, Bk, Rk) {
      let tk = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (tk.rank = Bk, tk.order = Rk), qk(kk, "border", tk, Fk)
    }
    var xk = 65535;

    function jk(kk, Fk) {
      if (Fk.length > xk) {
        let Bk = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xk,
            Bk = [];
          for (let Rk = 0; Rk < kk.length; Rk += Fk) {
            let tk = kk.slice(Rk, Rk + Fk);
            Bk.push(tk)
          }
          return Bk
        }(Fk);
        return kk(...Bk.map((Fk => kk(...Fk))))
      }
      return kk(...Fk)
    }

    function lk(kk) {
      let Fk = kk.nodes().map((Fk => {
        let Bk = kk.node(Fk).rank;
        return void 0 === Bk ? Number.MIN_VALUE : Bk
      }));
      return jk(Math.max, Fk)
    }

    function nk(kk, Fk) {
      let Bk = Date.now();
      try {
        return Fk()
      } finally {
        console.log(kk + " time: " + (Date.now() - Bk) + "ms")
      }
    }

    function Ik(kk, Fk) {
      return Fk()
    }
    var Qk = 0;

    function kF(kk) {
      return kk + "" + ++Qk
    }

    function FF(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Fk && (Fk = kk, kk = 0);
      let Rk = kk => kk < Fk;
      Bk < 0 && (Rk = kk => Fk < kk);
      let tk = [];
      for (let ak = kk; Rk(ak); ak += Bk) tk.push(ak);
      return tk
    }

    function BF(kk, Fk) {
      let Bk = {};
      for (let Rk of Fk) void 0 !== kk[Rk] && (Bk[Rk] = kk[Rk]);
      return Bk
    }

    function RF(kk, Fk) {
      let Bk;
      return Bk = "string" == typeof Fk ? kk => kk[Fk] : Fk, Object.entries(kk).reduce(((kk, Fk) => {
        let [Rk, tk] = Fk;
        return kk[Rk] = Bk(tk, Rk), kk
      }), {})
    }
    var tF = "\0";

    function aF(kk, Fk, Bk) {
      var Rk, tk, ak, Xk, bk, wk;
      if (!(kk && Fk && Bk && "edge" === Fk.dummy && "edge" === Bk.dummy && Fk.edgeObj && Bk.edgeObj && kk[Fk.edgeObj.v] && kk[Bk.edgeObj.v] && kk[Fk.edgeObj.w] && kk[Bk.edgeObj.w])) return 0;
      let dk = !0;
      Fk.edgeObj.w === Bk.edgeObj.w && (dk = !1);
      let sk = dk ? null != (tk = null == (Rk = kk[Fk.edgeObj.v]) ? void 0 : Rk.rank) ? tk : NaN : null != (Xk = null == (ak = kk[Fk.edgeObj.w]) ? void 0 : ak.rank) ? Xk : NaN,
        Vk = Object.entries(kk).find((kk => {
          var Bk, Rk;
          return (null == (Bk = kk[1].edgeObj) ? void 0 : Bk.v) === Fk.edgeObj.v && (null == (Rk = kk[1].edgeObj) ? void 0 : Rk.w) === Fk.edgeObj.w && kk[1].rank === sk
        })),
        Jk = Object.entries(kk).find((kk => {
          var Fk, Rk;
          return (null == (Fk = kk[1].edgeObj) ? void 0 : Fk.v) === Bk.edgeObj.v && (null == (Rk = kk[1].edgeObj) ? void 0 : Rk.w) === Bk.edgeObj.w && kk[1].rank === sk
        }));
      if (!Vk || !Jk) return 0;
      let Ak = null != (bk = Vk[1].order) ? bk : NaN,
        ek = null != (wk = Jk[1].order) ? wk : NaN;
      return isNaN(Ak - ek) ? 0 : Ak - ek
    }
    var XF = "3.1.1";

    function bF(kk) {
      kk._prev._next = kk._next, kk._next._prev = kk._prev, delete kk._next, delete kk._prev
    }

    function wF(kk, Fk) {
      if ("_next" !== kk && "_prev" !== kk) return Fk
    }
    var dF = class {
        constructor() {
          tk(this, "_sentinel");
          let kk = {};
          kk._next = kk._prev = kk, this._sentinel = kk
        }
        dequeue() {
          let kk = this._sentinel,
            Fk = kk._prev;
          if (Fk !== kk) return bF(Fk), Fk
        }
        enqueue(kk) {
          let Fk = this._sentinel;
          kk._prev && kk._next && bF(kk), kk._next = Fk._next, Fk._next._prev = kk, Fk._next = kk, kk._prev = Fk
        }
        toString() {
          let kk = [],
            Fk = this._sentinel,
            Bk = Fk._prev;
          for (; Bk !== Fk;) kk.push(JSON.stringify(Bk, wF)), Bk = Bk._prev;
          return "[" + kk.join(", ") + "]"
        }
      },
      sF = () => 1;

    function VF(kk, Fk) {
      if (kk.nodeCount() <= 1) return [];
      let Bk = function(kk, Fk) {
        let Bk = new hk,
          Rk = 0,
          tk = 0;
        kk.nodes().forEach((kk => {
          Bk.setNode(kk, {
            v: kk,
            in: 0,
            out: 0
          })
        })), kk.edges().forEach((kk => {
          let ak = Bk.edge(kk.v, kk.w) || 0,
            Xk = Fk(kk),
            bk = ak + Xk;
          Bk.setEdge(kk.v, kk.w, bk);
          let wk = Bk.node(kk.v),
            dk = Bk.node(kk.w);
          tk = Math.max(tk, wk.out += Xk), Rk = Math.max(Rk, dk.in += Xk)
        }));
        let ak = function(kk) {
            let Fk = [];
            for (let Bk = 0; Bk < kk; Bk++) Fk.push(Bk);
            return Fk
          }(tk + Rk + 3).map((() => new dF)),
          Xk = Rk + 1;
        return Bk.nodes().forEach((kk => {
          AF(ak, Xk, Bk.node(kk))
        })), {
          graph: Bk,
          buckets: ak,
          zeroIdx: Xk
        }
      }(kk, Fk || sF);
      return function(kk, Fk, Bk) {
        var Rk;
        let tk, ak = [],
          Xk = Fk[Fk.length - 1],
          bk = Fk[0];
        for (; kk.nodeCount();) {
          for (; tk = bk.dequeue();) JF(kk, Fk, Bk, tk);
          for (; tk = Xk.dequeue();) JF(kk, Fk, Bk, tk);
          if (kk.nodeCount())
            for (let Xk = Fk.length - 2; Xk > 0; --Xk)
              if (tk = null == (Rk = Fk[Xk]) ? void 0 : Rk.dequeue(), tk) {
                ak = ak.concat(JF(kk, Fk, Bk, tk, !0) || []);
                break
              }
        }
        return ak
      }(Bk.graph, Bk.buckets, Bk.zeroIdx).flatMap((Fk => kk.outEdges(Fk.v, Fk.w) || []))
    }

    function JF(kk, Fk, Bk, Rk, tk) {
      let ak = [],
        Xk = tk ? ak : void 0;
      return (kk.inEdges(Rk.v) || []).forEach((Rk => {
        let Xk = kk.edge(Rk),
          bk = kk.node(Rk.v);
        tk && ak.push({
          v: Rk.v,
          w: Rk.w
        }), bk.out -= Xk, AF(Fk, Bk, bk)
      })), (kk.outEdges(Rk.v) || []).forEach((Rk => {
        let tk = kk.edge(Rk),
          ak = Rk.w,
          Xk = kk.node(ak);
        Xk.in -= tk, AF(Fk, Bk, Xk)
      })), kk.removeNode(Rk.v), Xk
    }

    function AF(kk, Fk, Bk) {
      var Rk, tk, ak;
      Bk.out ? Bk.in ? null == (ak = kk[Bk.out - Bk.in + Fk]) || ak.enqueue(Bk) : null == (tk = kk[kk.length - 1]) || tk.enqueue(Bk) : null == (Rk = kk[0]) || Rk.enqueue(Bk)
    }

    function eF(kk, Fk) {
      var Bk;
      ("greedy" === kk.graph().acyclicer ? VF(kk, (Bk = kk, kk => Bk.edge(kk).weight)) : function(kk, Fk) {
        let Bk = [],
          Rk = {},
          tk = {};

        function ak(Fk) {
          Object.hasOwn(tk, Fk) || (tk[Fk] = !0, Rk[Fk] = !0, kk.outEdges(Fk).forEach((kk => {
            Object.hasOwn(Rk, kk.w) ? Bk.push(kk) : ak(kk.w)
          })), delete Rk[Fk])
        }

        function Xk(ak) {
          var bk;
          Object.hasOwn(tk, ak) || (tk[ak] = !0, Rk[ak] = !0, null == (bk = kk.outEdges(ak)) || bk.forEach((tk => {
            var bk, wk;
            Object.hasOwn(Rk, tk.w) || (null == (bk = Fk.node(ak)) ? void 0 : bk.rank) > (null == (wk = Fk.node(tk.w)) ? void 0 : wk.rank) && function(kk, Fk, Bk) {
              let Rk = new Set;

              function tk(Fk) {
                var ak;
                if (kk.sources().includes(Fk)) return !0;
                Rk.add(Fk);
                for (let Xk of null != (ak = kk.inEdges(Fk)) ? ak : [])
                  if ((Xk.v !== Bk.v || Xk.w !== Bk.w) && !Rk.has(Xk.v) && tk(Xk.v)) return !0;
                return !1
              }
              return tk(Fk)
            }(kk, tk.w, tk) ? Bk.push(tk) : Xk(tk.w)
          })), delete Rk[ak])
        }
        let bk = ak;
        return Fk && "function" == typeof Fk.node && (bk = Xk), kk.sources().forEach(bk), kk.nodes().forEach(bk), Bk
      }(kk, null != Fk ? Fk : null)).forEach((Fk => {
        let Bk = kk.edge(Fk);
        kk.removeEdge(Fk), Bk.forwardName = Fk.name, Bk.reversed = !0, kk.setEdge(Fk.w, Fk.v, Bk, kF("rev"))
      }))
    }

    function yF(kk) {
      kk.graph().dummyChains = [], kk.edges().forEach((Fk => function(kk, Fk) {
        let Bk, Rk, tk, ak = Fk.v,
          Xk = kk.node(ak).rank,
          bk = Fk.w,
          wk = kk.node(bk).rank,
          dk = Fk.name,
          sk = kk.edge(Fk),
          Vk = sk.labelRank;
        if (wk === Xk + 1) return;
        for (kk.removeEdge(Fk), tk = 0, ++Xk; Xk < wk; ++tk, ++Xk) sk.points = [], Rk = {
          width: 0,
          height: 0,
          edgeLabel: sk,
          edgeObj: Fk,
          rank: Xk
        }, Bk = qk(kk, "edge", Rk, "_d"), Xk === Vk && (Rk.width = sk.width, Rk.height = sk.height, Rk.dummy = "edge-label", Rk.labelpos = sk.labelpos), kk.setEdge(ak, Bk, {
          weight: sk.weight
        }, dk), 0 === tk && kk.graph().dummyChains.push(Bk), ak = Bk;
        kk.setEdge(ak, bk, {
          weight: sk.weight
        }, dk)
      }(kk, Fk)))
    }

    function fF(kk) {
      let Fk = {};
      kk.sources().forEach((function Bk(Rk) {
        let tk = kk.node(Rk);
        if (Object.hasOwn(Fk, Rk)) return tk.rank;
        Fk[Rk] = !0;
        let ak = kk.outEdges(Rk),
          Xk = ak ? ak.map((Fk => null == Fk ? Number.POSITIVE_INFINITY : Bk(Fk.w) - kk.edge(Fk).minlen)) : [],
          bk = jk(Math.min, Xk);
        return bk === Number.POSITIVE_INFINITY && (bk = 0), tk.rank = bk
      }))
    }

    function mF(kk, Fk) {
      return kk.node(Fk.w).rank - kk.node(Fk.v).rank - kk.edge(Fk).minlen
    }
    var WF = function(kk) {
      let Fk = new hk({
          directed: !1
        }),
        Bk = kk.nodes();
      if (0 === Bk.length) throw new Error("Graph must have at least one node");
      let Rk, tk, ak = Bk[0],
        Xk = kk.nodeCount();
      for (Fk.setNode(ak, {}); vF(Fk, kk) < Xk && (Rk = iF(Fk, kk), Rk);) tk = Fk.hasNode(Rk.v) ? mF(kk, Rk) : -mF(kk, Rk), YF(Fk, kk, tk);
      return Fk
    };

    function vF(kk, Fk) {
      return kk.nodes().forEach((function Bk(Rk) {
        let tk = Fk.nodeEdges(Rk);
        tk && tk.forEach((tk => {
          let ak = tk.v,
            Xk = Rk === ak ? tk.w : ak;
          !kk.hasNode(Xk) && !mF(Fk, tk) && (kk.setNode(Xk, {}), kk.setEdge(Rk, Xk, {}), Bk(Xk))
        }))
      })), kk.nodeCount()
    }

    function iF(kk, Fk) {
      return Fk.edges().reduce(((Bk, Rk) => {
        let tk = Number.POSITIVE_INFINITY;
        return kk.hasNode(Rk.v) !== kk.hasNode(Rk.w) && (tk = mF(Fk, Rk)), tk < Bk[0] ? [tk, Rk] : Bk
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function YF(kk, Fk, Bk) {
      kk.nodes().forEach((kk => Fk.node(kk).rank += Bk))
    }
    var {
      preorder: oF,
      postorder: LF
    } = mk, OF = EF;

    function EF(kk) {
      kk = function(kk) {
        let Fk = (new hk).setGraph(kk.graph());
        return kk.nodes().forEach((Bk => Fk.setNode(Bk, kk.node(Bk)))), kk.edges().forEach((Bk => {
          let Rk = Fk.edge(Bk.v, Bk.w) || {
              weight: 0,
              minlen: 1
            },
            tk = kk.edge(Bk);
          Fk.setEdge(Bk.v, Bk.w, {
            weight: Rk.weight + tk.weight,
            minlen: Math.max(Rk.minlen, tk.minlen)
          })
        })), Fk
      }(kk), fF(kk);
      let Fk, Bk, Rk = WF(kk);
      for (HF(Rk), SF(Rk, kk); Fk = MF(Rk);) Bk = gF(Rk, kk, Fk), UF(Rk, kk, Fk, Bk)
    }

    function SF(kk, Fk) {
      let Bk = LF(kk, kk.nodes());
      Bk = Bk.slice(0, Bk.length - 1), Bk.forEach((Bk => function(kk, Fk, Bk) {
        let Rk = kk.node(Bk).parent,
          tk = kk.edge(Bk, Rk);
        tk.cutvalue = NF(kk, Fk, Bk)
      }(kk, Fk, Bk)))
    }

    function NF(kk, Fk, Bk) {
      let Rk = kk.node(Bk).parent,
        tk = !0,
        ak = Fk.edge(Bk, Rk),
        Xk = 0;
      ak || (tk = !1, ak = Fk.edge(Rk, Bk)), Xk = ak.weight;
      let bk = Fk.nodeEdges(Bk);
      return bk && bk.forEach((ak => {
        let bk = ak.v === Bk,
          wk = bk ? ak.w : ak.v;
        if (wk !== Rk) {
          let Rk = bk === tk,
            dk = Fk.edge(ak).weight;
          if (Xk += Rk ? dk : -dk, function(kk, Fk, Bk) {
              return kk.hasEdge(Fk, Bk)
            }(kk, Bk, wk)) {
            let Fk = kk.edge(Bk, wk).cutvalue;
            Xk += Rk ? -Fk : Fk
          }
        }
      })), Xk
    }

    function HF(kk, Fk) {
      arguments.length < 2 && (Fk = kk.nodes()[0]), uF(kk, {}, 1, Fk)
    }

    function uF(kk, Fk, Bk, Rk, tk) {
      let ak = Bk,
        Xk = kk.node(Rk);
      Fk[Rk] = !0;
      let bk = kk.neighbors(Rk);
      return bk && bk.forEach((tk => {
        Object.hasOwn(Fk, tk) || (Bk = uF(kk, Fk, Bk, tk, Rk))
      })), Xk.low = ak, Xk.lim = Bk++, tk ? Xk.parent = tk : delete Xk.parent, Bk
    }

    function MF(kk) {
      return kk.edges().find((Fk => kk.edge(Fk).cutvalue < 0))
    }

    function gF(kk, Fk, Bk) {
      let Rk = Bk.v,
        tk = Bk.w;
      Fk.hasEdge(Rk, tk) || (Rk = Bk.w, tk = Bk.v);
      let ak = kk.node(Rk),
        Xk = kk.node(tk),
        bk = ak,
        wk = !1;
      return ak.lim > Xk.lim && (bk = Xk, wk = !0), Fk.edges().filter((Fk => wk === cF(kk, kk.node(Fk.v), bk) && wk !== cF(kk, kk.node(Fk.w), bk))).reduce(((kk, Bk) => mF(Fk, Bk) < mF(Fk, kk) ? Bk : kk))
    }

    function UF(kk, Fk, Bk, Rk) {
      let tk = Bk.v,
        ak = Bk.w;
      kk.removeEdge(tk, ak), kk.setEdge(Rk.v, Rk.w, {}), HF(kk), SF(kk, Fk),
        function(kk, Fk) {
          let Bk = kk.nodes().find((Fk => !kk.node(Fk).parent));
          if (!Bk) return;
          let Rk = oF(kk, [Bk]);
          Rk = Rk.slice(1), Rk.forEach((Bk => {
            let Rk = kk.node(Bk).parent,
              tk = Fk.edge(Bk, Rk),
              ak = !1;
            tk || (tk = Fk.edge(Rk, Bk), ak = !0), Fk.node(Bk).rank = Fk.node(Rk).rank + (ak ? tk.minlen : -tk.minlen)
          }))
        }(kk, Fk)
    }

    function cF(kk, Fk, Bk) {
      return Bk.low <= Fk.lim && Fk.lim <= Bk.lim
    }
    EF.initLowLimValues = HF, EF.initCutValues = SF, EF.calcCutValue = NF, EF.leaveEdge = MF, EF.enterEdge = gF, EF.exchangeEdges = UF;
    var GF = function(kk) {
      let Fk = kk.graph().ranker;
      if ("function" == typeof Fk) return Fk(kk);
      switch (Fk) {
        case "network-simplex":
        default:
          rF(kk);
          break;
        case "tight-tree":
          ! function(kk) {
            fF(kk), WF(kk)
          }(kk);
          break;
        case "longest-path":
          TF(kk);
        case "none":
      }
    };
    var TF = fF;

    function rF(kk) {
      OF(kk)
    }
    var DF = function(kk) {
      let Fk = function(kk) {
          let Fk = {},
            Bk = 0;

          function Rk(tk) {
            let ak = Bk;
            kk.children(tk).forEach(Rk), Fk[tk] = {
              low: ak,
              lim: Bk++
            }
          }
          return kk.children(tF).forEach(Rk), Fk
        }(kk),
        Bk = kk.graph();
      if (!Array.isArray(Bk.dummyChains)) return;
      Bk.dummyChains.forEach((Bk => {
        let Rk = kk.node(Bk),
          tk = Rk.edgeObj,
          ak = function(kk, Fk, Bk, Rk) {
            let tk, ak = [],
              Xk = [],
              bk = Math.min(Fk[Bk].low, Fk[Rk].low),
              wk = Math.max(Fk[Bk].lim, Fk[Rk].lim);
            tk = Bk;
            do {
              tk = kk.parent(tk), ak.push(tk)
            } while (tk && (Fk[tk].low > bk || wk > Fk[tk].lim));
            let dk = tk,
              sk = Rk;
            for (;
              (sk = kk.parent(sk)) !== dk;) Xk.push(sk);
            return {
              path: ak.concat(Xk.reverse()),
              lca: dk
            }
          }(kk, Fk, tk.v, tk.w),
          Xk = ak.path,
          bk = ak.lca,
          wk = 0,
          dk = Xk[wk],
          sk = !0;
        for (; Bk !== tk.w;) {
          if (Rk = kk.node(Bk), sk) {
            for (;
              (dk = Xk[wk]) !== bk && kk.node(dk).maxRank < Rk.rank;) wk++;
            dk === bk && (sk = !1)
          }
          if (!sk) {
            for (; wk < Xk.length - 1 && kk.node(Xk[wk + 1]).minRank <= Rk.rank;) wk++;
            dk = Xk[wk]
          }
          void 0 !== dk && kk.setParent(Bk, dk), Bk = kk.successors(Bk)[0]
        }
      }))
    };

    function zF(kk) {
      let Fk = qk(kk, "root", {}, "_root"),
        Bk = function(kk) {
          let Fk = {};

          function Bk(Rk, tk) {
            let ak = kk.children(Rk);
            ak && ak.length && ak.forEach((kk => Bk(kk, tk + 1))), Fk[Rk] = tk
          }
          return kk.children(tF).forEach((kk => Bk(kk, 1))), Fk
        }(kk),
        Rk = Object.values(Bk),
        tk = jk(Math.max, Rk) - 1,
        ak = 2 * tk + 1;
      kk.graph().nestingRoot = Fk, kk.edges().forEach((Fk => kk.edge(Fk).minlen *= ak));
      let Xk = function(kk) {
        return kk.edges().reduce(((Fk, Bk) => Fk + kk.edge(Bk).weight), 0)
      }(kk) + 1;
      kk.children(tF).forEach((Rk => {
        PF(kk, Fk, ak, Xk, tk, Bk, Rk)
      })), kk.graph().nodeRankFactor = ak
    }

    function PF(kk, Fk, Bk, Rk, tk, ak, Xk) {
      var bk;
      let wk = kk.children(Xk);
      if (!wk.length) return void(Xk !== Fk && kk.setEdge(Fk, Xk, {
        weight: 0,
        minlen: Bk
      }));
      let dk = Kk(kk, "_bt"),
        sk = Kk(kk, "_bb"),
        Vk = kk.node(Xk);
      kk.setParent(dk, Xk), Vk.borderTop = dk, kk.setParent(sk, Xk), Vk.borderBottom = sk, wk.forEach((bk => {
        var wk;
        PF(kk, Fk, Bk, Rk, tk, ak, bk);
        let Vk = kk.node(bk),
          Jk = Vk.borderTop ? Vk.borderTop : bk,
          Ak = Vk.borderBottom ? Vk.borderBottom : bk,
          ek = Vk.borderTop ? Rk : 2 * Rk,
          yk = Jk !== Ak ? 1 : tk - (null != (wk = ak[Xk]) ? wk : 0) + 1;
        kk.setEdge(dk, Jk, {
          weight: ek,
          minlen: yk,
          nestingEdge: !0
        }), kk.setEdge(Ak, sk, {
          weight: ek,
          minlen: yk,
          nestingEdge: !0
        })
      })), kk.parent(Xk) || kk.setEdge(Fk, dk, {
        weight: 0,
        minlen: tk + (null != (bk = ak[Xk]) ? bk : 0)
      })
    }
    var hF = function(kk) {
      kk.children(tF).forEach((function Fk(Bk) {
        let Rk = kk.children(Bk),
          tk = kk.node(Bk);
        if (Rk.length && Rk.forEach(Fk), tk && Object.hasOwn(tk, "minRank")) {
          tk.borderLeft = [], tk.borderRight = [];
          for (let Fk = tk.minRank, Rk = tk.maxRank + 1; Fk < Rk; ++Fk) qF(kk, "borderLeft", "_bl", Bk, tk, Fk), qF(kk, "borderRight", "_br", Bk, tk, Fk)
        }
      }))
    };

    function qF(kk, Fk, Bk, Rk, tk, ak) {
      let Xk = {
          width: 0,
          height: 0,
          rank: ak,
          borderType: Fk
        },
        bk = tk[Fk][ak - 1],
        wk = qk(kk, "border", Xk, Bk);
      tk[Fk][ak] = wk, kk.setParent(wk, Rk), bk && kk.setEdge(bk, wk, {
        weight: 1
      })
    }

    function CF(kk) {
      var Fk;
      let Bk = null == (Fk = kk.graph().rankdir) ? void 0 : Fk.toLowerCase();
      ("bt" === Bk || "rl" === Bk) && function(kk) {
        kk.nodes().forEach((Fk => KF(kk.node(Fk)))), kk.edges().forEach((Fk => {
          var Bk;
          let Rk = kk.edge(Fk);
          null == (Bk = Rk.points) || Bk.forEach(KF), Object.hasOwn(Rk, "y") && KF(Rk)
        }))
      }(kk), ("lr" === Bk || "rl" === Bk) && (function(kk) {
        kk.nodes().forEach((Fk => xF(kk.node(Fk)))), kk.edges().forEach((Fk => {
          var Bk;
          let Rk = kk.edge(Fk);
          null == (Bk = Rk.points) || Bk.forEach(xF), Object.hasOwn(Rk, "x") && xF(Rk)
        }))
      }(kk), ZF(kk))
    }

    function ZF(kk) {
      kk.nodes().forEach((Fk => pF(kk.node(Fk)))), kk.edges().forEach((Fk => pF(kk.edge(Fk))))
    }

    function pF(kk) {
      let Fk = kk.width;
      kk.width = kk.height, kk.height = Fk
    }

    function KF(kk) {
      kk.y = -kk.y
    }

    function xF(kk) {
      let Fk = kk.x;
      kk.x = kk.y, kk.y = Fk
    }

    function jF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Bk = {},
        Rk = kk.nodes().filter((Fk => !kk.children(Fk).length)),
        tk = Rk.map((Fk => kk.node(Fk).rank)),
        ak = FF(jk(Math.max, tk) + 1).map((() => []));
      return Rk.sort(((Fk, Bk) => kk.node(Fk).rank - kk.node(Bk).rank)).forEach((function Rk(tk) {
        if (Bk[tk]) return;
        Bk[tk] = !0;
        let Xk = kk.node(tk);
        ak[Xk.rank].push(tk);
        let bk = kk.successors(tk);
        bk && [...bk].sort(((Bk, Rk) => function(Bk, Rk) {
          let tk = kk.node(Bk),
            ak = kk.node(Rk);
          return aF(Fk, tk, ak)
        }(Bk, Rk))).forEach(Rk)
      })), ak
    }

    function lF(kk, Fk) {
      let Bk = 0;
      for (let Rk = 1; Rk < Fk.length; ++Rk) Bk += nF(kk, Fk[Rk - 1], Fk[Rk]);
      return Bk
    }

    function nF(kk, Fk, Bk) {
      let Rk = function(kk, Fk) {
          return kk.reduce(((kk, Bk, Rk) => (kk[Bk] = Fk[Rk], kk)), {})
        }(Bk, Bk.map(((kk, Fk) => Fk))),
        tk = Fk.flatMap((Fk => {
          let Bk = kk.outEdges(Fk);
          return Bk ? Bk.map((Fk => ({
            pos: Rk[Fk.w],
            weight: kk.edge(Fk).weight
          }))).sort(((kk, Fk) => kk.pos - Fk.pos)) : []
        })),
        ak = 1;
      for (; ak < Bk.length;) ak <<= 1;
      let Xk = 2 * ak - 1;
      ak -= 1;
      let bk = new Array(Xk).fill(0),
        wk = 0;
      return tk.forEach((kk => {
        let Fk = kk.pos + ak;
        bk[Fk] += kk.weight;
        let Bk = 0;
        for (; Fk > 0;) Fk % 2 && (Bk += bk[Fk + 1]), Fk = Fk - 1 >> 1, bk[Fk] += kk.weight;
        wk += kk.weight * Bk
      })), wk
    }

    function IF(kk, Fk) {
      let Bk = {};
      return kk.forEach(((kk, Fk) => {
          let Rk = {
            indegree: 0,
            in: [],
            out: [],
            vs: [kk.v],
            i: Fk
          };
          void 0 !== kk.barycenter && (Rk.barycenter = kk.barycenter, Rk.weight = kk.weight), Bk[kk.v] = Rk
        })), Fk.edges().forEach((kk => {
          let Fk = Bk[kk.v],
            Rk = Bk[kk.w];
          void 0 !== Fk && void 0 !== Rk && (Rk.indegree++, Fk.out.push(Rk))
        })),
        function(kk) {
          let Fk = [];

          function Bk(kk) {
            return Fk => {
              Fk.merged || (void 0 === Fk.barycenter || void 0 === kk.barycenter || Fk.barycenter >= kk.barycenter) && function(kk, Fk) {
                let Bk = 0,
                  Rk = 0;
                kk.weight && (Bk += kk.barycenter * kk.weight, Rk += kk.weight), Fk.weight && (Bk += Fk.barycenter * Fk.weight, Rk += Fk.weight), kk.vs = Fk.vs.concat(kk.vs), kk.barycenter = Bk / Rk, kk.weight = Rk, kk.i = Math.min(Fk.i, kk.i), Fk.merged = !0
              }(kk, Fk)
            }
          }

          function Rk(Fk) {
            return Bk => {
              Bk.in.push(Fk), 0 === --Bk.indegree && kk.push(Bk)
            }
          }
          for (; kk.length;) {
            let tk = kk.pop();
            Fk.push(tk), tk.in.reverse().forEach(Bk(tk)), tk.out.forEach(Rk(tk))
          }
          return Fk.filter((kk => !kk.merged)).map((kk => BF(kk, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Bk).filter((kk => !kk.indegree)))
    }

    function QF(kk, Fk, Bk, Rk, tk) {
      let ak = {},
        Xk = null,
        bk = null,
        wk = tk;
      "boolean" == typeof Fk ? (wk = Fk, ak = {}) : Fk && (ak = Fk, Xk = null != Bk ? Bk : null, bk = null != Rk ? Rk : null);
      let dk = function(kk, Fk) {
          let Bk = {
            lhs: [],
            rhs: []
          };
          return kk.forEach((kk => {
            Fk(kk) ? Bk.lhs.push(kk) : Bk.rhs.push(kk)
          })), Bk
        }(kk, (kk => Object.hasOwn(kk, "barycenter"))),
        sk = dk.lhs,
        Vk = dk.rhs.sort(((kk, Fk) => Fk.i - kk.i)),
        Jk = [],
        Ak = 0,
        ek = 0,
        yk = 0;
      sk.sort(function(kk, Fk, Bk) {
        return (Rk, tk) => {
          if (Rk.barycenter < tk.barycenter) return -1;
          if (Rk.barycenter > tk.barycenter) return 1;
          if (kk && ("string" == typeof Rk.vs[0] || "string" == typeof tk.vs[0])) {
            let Bk = kk.node(Rk.vs[0]),
              ak = kk.node(tk.vs[0]),
              Xk = aF(Fk, Bk, ak);
            if (0 !== Xk) return Xk
          }
          return Bk ? tk.i - Rk.i : Rk.i - tk.i
        }
      }(bk, Xk, !!wk));
      for (let [mk, Wk] of Object.entries(ak)) {
        let kk = sk.findIndex((kk => kk.vs[0] === mk));
        sk.splice(kk + 1, 0, Wk)
      }
      yk = kB(Jk, Vk, yk), sk.forEach((kk => {
        yk += kk.vs.length, Jk.push(kk.vs), Ak += kk.barycenter * kk.weight, ek += kk.weight, yk = kB(Jk, Vk, yk)
      }));
      let fk = {
        vs: Jk.flat(1)
      };
      return ek && (fk.barycenter = Ak / ek, fk.weight = ek), fk
    }

    function kB(kk, Fk, Bk) {
      let Rk;
      for (; Fk.length && (Rk = Fk[Fk.length - 1]).i <= Bk;) Fk.pop(), kk.push(Rk.vs), Bk++;
      return Bk
    }

    function FB(kk, Fk, Bk, Rk, tk) {
      var ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk;
      let fk = null,
        mk = tk;
      "boolean" == typeof Rk ? (mk = Rk, fk = null) : void 0 !== Rk && (fk = Rk);
      let Wk = kk.children(Fk),
        vk = kk.node(Fk),
        ik = vk ? vk.borderLeft : void 0,
        Yk = vk ? vk.borderRight : void 0,
        Lk = {};
      ik && (Wk = Wk.filter((kk => kk !== ik && kk !== Yk)));
      let Ok = function(kk) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Fk => {
          let Bk = kk.inEdges(Fk);
          if (!Bk || !Bk.length) return {
            v: Fk
          };
          {
            let Rk = Bk.reduce(((Fk, Bk) => {
              let Rk = kk.edge(Bk),
                tk = kk.node(Bk.v);
              return {
                sum: Fk.sum + Rk.weight * tk.order,
                weight: Fk.weight + Rk.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Fk,
              barycenter: Rk.sum / Rk.weight,
              weight: Rk.weight
            }
          }
        }))
      }(kk, Wk);
      Ok.forEach((Fk => {
        if (kk.children(Fk.v).length) {
          let {
            result: Rk
          } = FB(kk, Fk.v, Bk, fk, mk);
          Lk[Fk.v] = Rk, Object.hasOwn(Rk, "barycenter") && function(kk, Fk) {
            void 0 !== kk.barycenter ? (kk.barycenter = (kk.barycenter * kk.weight + Fk.barycenter * Fk.weight) / (kk.weight + Fk.weight), kk.weight += Fk.weight) : (kk.barycenter = Fk.barycenter, kk.weight = Fk.weight)
          }(Fk, Rk)
        }
      }));
      let Ek = IF(Ok, Bk);
      ! function(kk, Fk) {
        kk.forEach((kk => {
          kk.vs = kk.vs.flatMap((kk => Fk[kk] ? Fk[kk].vs : kk))
        }))
      }(Ek, Lk);
      let Sk = {},
        Nk = !1;
      for (let uk = 0; uk < Ek.length; uk++)
        for (let Fk = uk + 1; Fk < Ek.length; Fk++)
          if (Ek[uk] && Ek[Fk] && null != (ak = Ek[uk]) && ak.barycenter && null != (Xk = Ek[Fk]) && Xk.barycenter && (null == (bk = Ek[uk]) ? void 0 : bk.barycenter) === Ek[Fk].barycenter) {
            let Bk = null != (dk = null == (wk = Ek[uk]) ? void 0 : wk.vs[0]) ? dk : "",
              Rk = null != (Vk = null == (sk = Ek[Fk]) ? void 0 : sk.vs[0]) ? Vk : "",
              tk = kk.node(Bk),
              ak = kk.node(Rk);
            if ("edge" === tk.dummy && "edge" === ak.dummy && (null == (Jk = tk.edgeObj) ? void 0 : Jk.v) === (null == (Ak = ak.edgeObj) ? void 0 : Ak.v) && (null == (ek = tk.edgeObj) ? void 0 : ek.w) === (null == (yk = ak.edgeObj) ? void 0 : yk.w)) {
              if (tk.edgeLabel.reversed) {
                Sk[Rk] = Ek[uk], Ek.splice(uk, 1), uk--;
                break
              }
              Sk[Bk] = Ek[Fk], Ek.splice(Fk, 1), Fk--
            } else Nk = !0
          } let Hk = QF(Ek, Sk, fk, kk, mk);
      if (ik && Yk) {
        Hk.vs = [ik, Hk.vs, Yk].flat(1);
        let Fk = kk.predecessors(ik);
        if (Fk && Fk.length) {
          let Bk = kk.node(Fk[0]),
            Rk = kk.predecessors(Yk),
            tk = kk.node(Rk[0]);
          Object.hasOwn(Hk, "barycenter") || (Hk.barycenter = 0, Hk.weight = 0), Hk.barycenter = (Hk.barycenter * Hk.weight + Bk.order + tk.order) / (Hk.weight + 2), Hk.weight += 2
        }
      }
      return Object.defineProperty(Hk, "result", {
        value: Hk,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Hk, "usedBias", {
        value: Nk,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Hk
    }

    function BB(kk, Fk, Bk, Rk) {
      Rk || (Rk = kk.nodes());
      let tk = function(kk) {
          let Fk;
          for (; kk.hasNode(Fk = kF("_root")););
          return Fk
        }(kk),
        ak = new hk({
          compound: !0
        }).setGraph({
          root: tk
        }).setDefaultNodeLabel((Fk => kk.node(Fk)));
      return Rk.forEach((Rk => {
        let Xk = kk.node(Rk),
          bk = kk.parent(Rk);
        if (Xk.rank === Fk || Xk.minRank <= Fk && Fk <= Xk.maxRank) {
          ak.setNode(Rk), ak.setParent(Rk, bk || tk);
          let wk = kk[Bk](Rk);
          wk && wk.forEach((Fk => {
            let Bk = Fk.v === Rk ? Fk.w : Fk.v,
              tk = ak.edge(Bk, Rk),
              Xk = void 0 !== tk ? tk.weight : 0;
            ak.setEdge(Bk, Rk, {
              weight: kk.edge(Fk).weight + Xk
            })
          })), Object.hasOwn(Xk, "minRank") && ak.setNode(Rk, {
            borderLeft: Xk.borderLeft[Fk],
            borderRight: Xk.borderRight[Fk]
          })
        }
      })), ak
    }

    function RB(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Fk.customOrder) return void Fk.customOrder(kk, RB);
      let Rk = lk(kk),
        tk = tB(kk, FF(1, Rk + 1), "inEdges"),
        ak = tB(kk, FF(Rk - 1, -1, -1), "outEdges"),
        Xk = jF(kk, Bk);
      if (XB(kk, Xk), Fk.disableOptimalOrderHeuristic) return;
      let bk, wk = Number.POSITIVE_INFINITY,
        dk = Fk.constraints || [];
      for (let sk = 0, Vk = 0; Vk < 4; ++sk, ++Vk) {
        aB(sk % 2 ? tk : ak, sk % 4 >= 2, dk, Bk), Xk = pk(kk);
        let Fk = lF(kk, Xk);
        Fk < wk ? (Vk = 0, bk = Object.assign({}, Xk), wk = Fk) : Fk === wk && (bk = structuredClone(Xk))
      }
      XB(kk, bk)
    }

    function tB(kk, Fk, Bk) {
      let Rk = new Map,
        tk = (kk, Fk) => {
          Rk.has(kk) || Rk.set(kk, []), Rk.get(kk).push(Fk)
        };
      for (let ak of kk.nodes()) {
        let Fk = kk.node(ak);
        if ("number" == typeof Fk.rank && tk(Fk.rank, ak), "number" == typeof Fk.minRank && "number" == typeof Fk.maxRank)
          for (let kk = Fk.minRank; kk <= Fk.maxRank; kk++) kk !== Fk.rank && tk(kk, ak)
      }
      return Fk.map((function(Fk) {
        return BB(kk, Fk, Bk, Rk.get(Fk) || [])
      }))
    }

    function aB(kk, Fk, Bk, Rk) {
      let tk = !0,
        ak = new hk;
      kk.forEach((function(kk) {
        Bk.forEach((kk => ak.setEdge(kk.left, kk.right)));
        let Xk = kk.graph().root,
          {
            result: bk,
            usedBias: wk
          } = FB(kk, Xk, ak, Rk, tk);
        Fk && wk && (tk = !tk), bk.vs.forEach(((Fk, Bk) => kk.node(Fk).order = Bk)),
          function(kk, Fk, Bk) {
            let Rk, tk = {};
            Bk.forEach((Bk => {
              let ak, Xk, bk = kk.parent(Bk);
              for (; bk;) {
                if (ak = kk.parent(bk), ak ? (Xk = tk[ak], tk[ak] = bk) : (Xk = Rk, Rk = bk), Xk && Xk !== bk) return void Fk.setEdge(Xk, bk);
                bk = ak
              }
            }))
          }(kk, ak, bk.vs)
      }))
    }

    function XB(kk, Fk) {
      Object.values(Fk).forEach((Fk => Fk.forEach(((Fk, Bk) => kk.node(Fk).order = Bk))))
    }

    function bB(kk, Fk, Bk) {
      if (Fk > Bk) {
        let kk = Fk;
        Fk = Bk, Bk = kk
      }
      let Rk = kk[Fk];
      Rk || (kk[Fk] = Rk = {}), Rk[Bk] = !0
    }

    function wB(kk, Fk, Bk) {
      if (Fk > Bk) {
        let kk = Fk;
        Fk = Bk, Bk = kk
      }
      let Rk = kk[Fk];
      return void 0 !== Rk && Object.hasOwn(Rk, Bk)
    }

    function dB(kk, Fk, Bk, Rk) {
      let tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ak = {},
        Xk = function(kk, Fk, Bk, Rk) {
          let tk = new hk,
            ak = kk.graph(),
            Xk = function(kk, Fk, Bk) {
              return (Rk, tk, ak) => {
                let Xk, bk = Rk.node(tk),
                  wk = Rk.node(ak),
                  dk = 0;
                if (dk += bk.width / 2, Object.hasOwn(bk, "labelpos")) switch (bk.labelpos.toLowerCase()) {
                  case "l":
                    Xk = -bk.width / 2;
                    break;
                  case "r":
                    Xk = bk.width / 2
                }
                if (Xk && (dk += Bk ? Xk : -Xk), Xk = void 0, dk += (bk.dummy ? Fk : kk) / 2, dk += (wk.dummy ? Fk : kk) / 2, dk += wk.width / 2, Object.hasOwn(wk, "labelpos")) switch (wk.labelpos.toLowerCase()) {
                  case "l":
                    Xk = wk.width / 2;
                    break;
                  case "r":
                    Xk = -wk.width / 2
                }
                return Xk && (dk += Bk ? Xk : -Xk), dk
              }
            }(ak.nodesep, ak.edgesep, Rk);
          return Fk.forEach((Fk => {
            let Rk;
            Fk.forEach((Fk => {
              let ak = Bk[Fk];
              if (void 0 !== ak) {
                if (tk.setNode(ak), void 0 !== Rk) {
                  let bk = Bk[Rk];
                  if (void 0 !== bk) {
                    let Bk = tk.edge(bk, ak);
                    tk.setEdge(bk, ak, Math.max(Xk(kk, Fk, Rk), Bk || 0))
                  }
                }
                Rk = Fk
              }
            }))
          })), tk
        }(kk, Fk, Bk, tk),
        bk = tk ? "borderLeft" : "borderRight";

      function wk(kk, Fk) {
        let Bk = Xk.nodes().slice(),
          Rk = {},
          tk = Bk.pop();
        for (; tk;) {
          if (Rk[tk]) kk(tk);
          else {
            Rk[tk] = !0, Bk.push(tk);
            for (let kk of Fk(tk)) Bk.push(kk)
          }
          tk = Bk.pop()
        }
      }
      return wk((function(kk) {
        let Fk = Xk.inEdges(kk);
        ak[kk] = Fk ? Fk.reduce(((kk, Fk) => {
          var Bk;
          let Rk = null != (Bk = ak[Fk.v]) ? Bk : 0,
            tk = Xk.edge(Fk);
          return Math.max(kk, Rk + (void 0 !== tk ? tk : 0))
        }), 0) : 0
      }), (function(kk) {
        return Xk.predecessors(kk) || []
      })), wk((function(Fk) {
        let Bk = Xk.outEdges(Fk),
          Rk = Number.POSITIVE_INFINITY;
        Bk && (Rk = Bk.reduce(((kk, Fk) => {
          let Bk = ak[Fk.w],
            Rk = Xk.edge(Fk);
          return Math.min(kk, (void 0 !== Bk ? Bk : 0) - (void 0 !== Rk ? Rk : 0))
        }), Number.POSITIVE_INFINITY));
        let tk = kk.node(Fk);
        Rk !== Number.POSITIVE_INFINITY && tk.borderType !== bk && (ak[Fk] = Math.max(void 0 !== ak[Fk] ? ak[Fk] : 0, Rk))
      }), (function(kk) {
        return Xk.successors(kk) || []
      })), Object.keys(Rk).forEach((kk => {
        var Fk;
        let Rk = Bk[kk];
        void 0 !== Rk && (ak[kk] = null != (Fk = ak[Rk]) ? Fk : 0)
      })), ak
    }

    function sB(kk, Fk) {
      let Bk, Rk = pk(kk),
        tk = Object.assign(function(kk, Fk) {
          let Bk = {};
          return Fk.length && Fk.reduce((function(Fk, Rk) {
            let tk = 0,
              ak = 0,
              Xk = Fk.length,
              bk = Rk[Rk.length - 1];
            return Rk.forEach(((Fk, wk) => {
              let dk = function(kk, Fk) {
                  if (kk.node(Fk).dummy) {
                    let Bk = kk.predecessors(Fk);
                    if (Bk) return Bk.find((Fk => kk.node(Fk).dummy))
                  }
                }(kk, Fk),
                sk = dk ? kk.node(dk).order : Xk;
              (dk || Fk === bk) && (Rk.slice(ak, wk + 1).forEach((Fk => {
                let Rk = kk.predecessors(Fk);
                Rk && Rk.forEach((Rk => {
                  let ak = kk.node(Rk),
                    Xk = ak.order;
                  (Xk < tk || sk < Xk) && (!ak.dummy || !kk.node(Fk).dummy) && bB(Bk, Rk, Fk)
                }))
              })), ak = wk + 1, tk = sk)
            })), Rk
          })), Bk
        }(kk, Rk), function(kk, Fk) {
          let Bk = {};

          function Rk(Fk, Rk, tk, ak, Xk) {
            FF(Rk, tk).forEach((Rk => {
              let tk = Fk[Rk];
              if (void 0 !== tk && kk.node(tk).dummy) {
                let Fk = kk.predecessors(tk);
                Fk && Fk.forEach((Fk => {
                  if (void 0 === Fk) return;
                  let Rk = kk.node(Fk);
                  Rk.dummy && (Rk.order < ak || Rk.order > Xk) && bB(Bk, Fk, tk)
                }))
              }
            }))
          }
          return Fk.length && Fk.reduce((function(Fk, Bk) {
            let tk = -1,
              ak = -1,
              Xk = 0;
            return Bk.forEach(((bk, wk) => {
              if ("border" === kk.node(bk).dummy) {
                let Fk = kk.predecessors(bk);
                if (Fk && Fk.length) {
                  let bk = Fk[0];
                  if (void 0 === bk) return;
                  ak = kk.node(bk).order, Rk(Bk, Xk, wk, tk, ak), Xk = wk, tk = ak
                }
              }
              Rk(Bk, Xk, Bk.length, ak, Fk.length)
            })), Bk
          })), Bk
        }(kk, Rk)),
        ak = {};
      ["u", "d"].forEach((Xk => {
        Bk = "u" === Xk ? Rk : Object.values(Rk).reverse(), ["l", "r"].forEach((Rk => {
          "r" === Rk && (Bk = Bk.map((kk => Object.values(kk).reverse())));
          let bk = function(kk, Fk, Bk, Rk, tk) {
              let ak = {},
                Xk = {},
                bk = {};
              return Fk.forEach((kk => {
                kk.forEach(((kk, Fk) => {
                  ak[kk] = kk, Xk[kk] = kk, bk[kk] = Fk
                }))
              })), Fk.forEach((Fk => {
                let wk = -1,
                  dk = -1,
                  sk = !1,
                  Vk = Fk,
                  Jk = Fk.findIndex((Fk => (null == tk ? void 0 : tk.includes(Fk)) || VB(Fk, kk, tk)));
                Jk > 0 && (Vk = [Fk[Jk], ...Fk.slice(0, Jk), ...Fk.slice(Jk + 1)], sk = !0), Vk.forEach((Fk => {
                  var Vk;
                  let Jk = Rk(Fk);
                  if (Jk && Jk.length) {
                    null != tk && tk.includes(Fk) && (Jk = Jk.filter((Fk => VB(Fk, kk, tk))));
                    let Rk = Jk.sort(((kk, Fk) => {
                        let Bk = bk[kk],
                          Rk = bk[Fk];
                        return (void 0 !== Bk ? Bk : 0) - (void 0 !== Rk ? Rk : 0)
                      })),
                      Ak = (Rk.length - 1) / 2;
                    for (let kk = Math.floor(Ak), tk = Math.ceil(Ak); kk <= tk; ++kk) {
                      let tk = Rk[kk];
                      if (void 0 === tk) continue;
                      let Jk = bk[tk];
                      if (void 0 !== Jk && Xk[Fk] === Fk && wk < Jk && bk[tk] !== dk && !wB(Bk, Fk, tk)) {
                        let kk = ak[tk];
                        void 0 !== kk && (Xk[tk] = Fk, Xk[Fk] = ak[Fk] = kk, wk = Jk, sk && (wk = -1, dk = null != (Vk = bk[tk]) ? Vk : -1, sk = !1))
                      }
                    }
                  }
                }))
              })), {
                root: ak,
                align: Xk
              }
            }(kk, Bk, tk, (Fk => ("u" === Xk ? kk.predecessors(Fk) : kk.successors(Fk)) || []), Fk),
            wk = dB(kk, Bk, bk.root, bk.align, "r" === Rk);
          "r" === Rk && (wk = RF(wk, (kk => -kk))), ak[Xk + Rk] = wk
        }))
      }));
      let Xk = function(kk, Fk) {
        return Object.values(Fk).reduce(((Fk, Bk) => {
          let Rk = Number.NEGATIVE_INFINITY,
            tk = Number.POSITIVE_INFINITY;
          Object.entries(Bk).forEach((Fk => {
            let [Bk, ak] = Fk, Xk = function(kk, Fk) {
              return kk.node(Fk).width
            }(kk, Bk) / 2;
            Rk = Math.max(ak + Xk, Rk), tk = Math.min(ak - Xk, tk)
          }));
          let ak = Rk - tk;
          return ak < Fk[0] && (Fk = [ak, Bk]), Fk
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(kk, ak);
      return function(kk, Fk) {
          let Bk = Object.values(Fk),
            Rk = jk(Math.min, Bk),
            tk = jk(Math.max, Bk);
          ["u", "d"].forEach((Bk => {
            ["l", "r"].forEach((ak => {
              let Xk = Bk + ak,
                bk = kk[Xk];
              if (!bk || bk === Fk) return;
              let wk = Object.values(bk),
                dk = Rk - jk(Math.min, wk);
              "l" !== ak && (dk = tk - jk(Math.max, wk)), dk && (kk[Xk] = RF(bk, (kk => kk + dk)))
            }))
          }))
        }(ak, Xk),
        function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Bk = kk.ul;
          return Bk ? RF(Bk, ((Bk, Rk) => {
            var tk, ak;
            if (Fk) {
              let Bk = Fk.toLowerCase(),
                tk = kk[Bk];
              if (tk && void 0 !== tk[Rk]) return tk[Rk]
            }
            let Xk = Object.values(kk).map((kk => {
              let Fk = kk[Rk];
              return void 0 !== Fk ? Fk : 0
            })).sort(((kk, Fk) => kk - Fk));
            return ((null != (tk = Xk[1]) ? tk : 0) + (null != (ak = Xk[2]) ? ak : 0)) / 2
          })) : {}
        }(ak, kk.graph().align)
    }

    function VB(kk, Fk, Bk) {
      var Rk;
      if (!Bk) return !1;
      let tk = null == (Rk = Fk.node(kk)) ? void 0 : Rk.edgeObj;
      if (!tk || Fk.node(kk).edgeLabel.reversed) return !1;
      let ak = Bk.indexOf(null == tk ? void 0 : tk.v),
        Xk = Bk.indexOf(null == tk ? void 0 : tk.w);
      return -1 !== ak && -1 !== Xk && ak === (Xk + 1) % Bk.length || ak === (Xk - 1) % Bk.length
    }

    function JB(kk, Fk) {
      (function(kk) {
        let Fk = pk(kk),
          Bk = kk.graph(),
          Rk = Bk.ranksep,
          tk = Bk.rankalign,
          ak = 0;
        Fk.forEach((Fk => {
          let Bk = Fk.reduce(((Fk, Bk) => {
            var Rk;
            let tk = null != (Rk = kk.node(Bk).height) ? Rk : 0;
            return Fk > tk ? Fk : tk
          }), 0);
          Fk.forEach((Fk => {
            let Rk = kk.node(Fk);
            Rk.y = "top" === tk ? ak + Rk.height / 2 : "bottom" === tk ? ak + Bk - Rk.height / 2 : ak + Bk / 2
          })), ak += Bk + Rk
        }))
      })(kk = Ck(kk)), Object.entries(sB(kk, Fk)).forEach((Fk => {
        let [Bk, Rk] = Fk;
        return kk.node(Bk).x = Rk
      }))
    }
    var AB = new WeakMap;

    function eB(kk) {
      return fB(kk, Ik, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), kk
    }

    function yB(kk, Fk, Bk) {
      let Rk = Fk;
      for (; void 0 !== Rk;) {
        let Fk = kk.parent(Rk);
        if (Fk === Bk) return Rk;
        Rk = Fk
      }
    }

    function fB(kk, Fk, Bk) {
      var Rk;
      let tk = kk.nodes().filter((Fk => kk.children(Fk).length)),
        ak = {};
      tk.forEach((Rk => {
        let tk = kk.node(Rk);
        if (tk && tk.rankdir) {
          let Xk = new hk({
            multigraph: !0,
            compound: !0
          });
          Xk.setGraph({
            rankdir: tk.rankdir
          });
          let bk = kk.children(Rk);
          bk.forEach((Fk => {
            let Bk = {
              ...kk.node(Fk)
            };
            Xk.setNode(Fk, Bk);
            let tk = kk.parent(Fk);
            tk && tk !== Rk && bk.includes(tk) && Xk.setParent(Fk, tk)
          }));
          let wk = new Set;
          kk.edges().forEach((Fk => {
            let Bk = yB(kk, Fk.v, Rk),
              tk = yB(kk, Fk.w, Rk);
            if (Bk && tk && Bk !== tk) {
              let Rk = `${Bk}\0${tk}`;
              wk.has(Rk) || (wk.add(Rk), Xk.setEdge(Bk, tk, {
                ...kk.edge(Fk)
              }))
            }
          })), fB(Xk, Fk, Bk);
          let dk = NB(Xk);
          mB(dk, Fk, Bk, null), WB(Xk, dk);
          let sk = 1 / 0,
            Vk = 1 / 0,
            Jk = -1 / 0,
            Ak = -1 / 0;
          Xk.nodes().forEach((kk => {
            if (kk === Rk) return;
            let Fk = Xk.node(kk);
            Fk && "number" == typeof Fk.x && "number" == typeof Fk.y && "number" == typeof Fk.width && "number" == typeof Fk.height && (sk = Math.min(sk, Fk.x - Fk.width / 2), Jk = Math.max(Jk, Fk.x + Fk.width / 2), Vk = Math.min(Vk, Fk.y - Fk.height / 2), Ak = Math.max(Ak, Fk.y + Fk.height / 2))
          })), (!isFinite(sk) || !isFinite(Vk) || !isFinite(Jk) || !isFinite(Ak)) && (sk = Vk = 0, Jk = Ak = 0);
          let ek = Jk - sk,
            yk = Ak - Vk;
          ak[Rk] = {
            minX: sk,
            YR: Vk,
            maxX: Jk,
            oR: Ak,
            width: ek,
            height: yk,
            offsetX: sk,
            offsetY: Vk
          }, tk._dagreClusterSubgraph = Xk
        }
      }));
      let Xk = [],
        bk = new Map;
      tk.forEach((Fk => {
        let Bk = kk.node(Fk);
        Bk && Bk.rankdir && ak[Fk] && bk.set(Fk, (kk.children(Fk) || []).filter((kk => kk !== Fk)))
      }));
      let wk = new Set([...bk.values()].flat()),
        dk = new Map;
      bk.forEach(((Fk, Bk) => {
        wk.has(Bk) || dk.set(Bk, (Fk => {
          let Bk = [],
            Rk = (kk.children(Fk) || []).filter((kk => kk !== Fk));
          for (; Rk.length > 0;) {
            let Fk = Rk.shift();
            Bk.push(Fk), (kk.children(Fk) || []).filter((kk => kk !== Fk)).forEach((kk => Rk.push(kk)))
          }
          return Bk
        })(Bk))
      }));
      let sk = new Set([...dk.values()].flat()),
        Vk = kk => {
          for (let [Fk, Bk] of dk)
            if (Bk.includes(kk)) return Fk;
          return kk
        },
        Jk = [];
      kk.edges().forEach((Fk => {
        (sk.has(Fk.v) || sk.has(Fk.w)) && Jk.push({
          edge: Fk,
          label: kk.edge(Fk)
        })
      }));
      let Ak = new Map;
      sk.forEach((Fk => {
        let Bk = kk.parent(Fk);
        Ak.set(Fk, "string" == typeof Bk ? Bk : void 0)
      })), dk.forEach(((Fk, Bk) => {
        let Rk = kk.node(Bk),
          tk = [];
        Fk.forEach((Fk => {
          let Bk = kk.node(Fk);
          Bk && (tk.push({
            id: Fk,
            node: Bk,
            parent: Ak.get(Fk)
          }), kk.removeNode(Fk))
        }));
        let bk = Jk.filter((kk => {
            let {
              edge: Bk
            } = kk;
            return Fk.includes(Bk.v) || Fk.includes(Bk.w)
          })),
          wk = ak[Bk];
        Rk && (Xk.push({
          clusterId: Bk,
          subgraph: Rk._dagreClusterSubgraph,
          bounds: wk,
          children: Fk,
          removedNodes: tk,
          removedEdges: bk
        }), Rk.width = wk.width, Rk.height = wk.height)
      }));
      let ek = new Set;
      Jk.forEach((Fk => {
        let {
          edge: Bk,
          label: Rk
        } = Fk, tk = Vk(Bk.v), ak = Vk(Bk.w);
        if (tk !== ak && kk.hasNode(tk) && kk.hasNode(ak)) {
          let Fk = `${tk}\0${ak}`;
          ek.has(Fk) || (ek.add(Fk), kk.setEdge(tk, ak, {
            ...Rk,
            width: 0,
            height: 0
          }))
        }
      }));
      let yk = NB(kk),
        fk = mB(yk, Fk, Bk, null != (Rk = AB.get(kk)) ? Rk : null);
      AB.set(kk, fk), WB(kk, yk), ek.forEach((Fk => {
        let Bk = Fk.indexOf("\0"),
          Rk = Fk.slice(0, Bk),
          tk = Fk.slice(Bk + 1);
        kk.hasEdge(Rk, tk) && kk.removeEdge(Rk, tk)
      })), Xk.forEach((Fk => {
        let {
          clusterId: Bk,
          subgraph: Rk,
          bounds: tk,
          removedNodes: ak,
          removedEdges: Xk
        } = Fk;
        var bk, wk;
        let dk = kk.node(Bk),
          sk = null != (bk = null == dk ? void 0 : dk.x) ? bk : 0,
          Vk = null != (wk = null == dk ? void 0 : dk.y) ? wk : 0,
          Jk = (tk.minX + tk.maxX) / 2,
          Ak = (tk.YR + tk.oR) / 2;
        ak.forEach((Fk => {
          let {
            id: Bk,
            node: Rk,
            parent: tk
          } = Fk;
          kk.setNode(Bk, Rk), void 0 !== tk && kk.setParent(Bk, tk)
        })), Xk.forEach((Fk => {
          let {
            edge: Bk,
            label: Rk
          } = Fk;
          kk.setEdge(Bk, Rk)
        })), Rk.nodes().forEach((Fk => {
          if (Fk === Bk) return;
          let tk = Rk.node(Fk),
            ak = kk.node(Fk);
          ak && tk && "number" == typeof tk.x && "number" == typeof tk.y && (ak.x = sk + (tk.x - Jk), ak.y = Vk + (tk.y - Ak))
        })), delete dk._dagreClusterSubgraph
      })), tk.forEach((Fk => {
        var Bk, Rk;
        let tk = kk.node(Fk),
          Xk = ak[Fk];
        if (tk && tk.rankdir && tk._dagreClusterSubgraph && Xk) {
          let ak = tk._dagreClusterSubgraph,
            bk = null != (Bk = tk.x) ? Bk : 0,
            wk = null != (Rk = tk.y) ? Rk : 0,
            dk = (Xk.minX + Xk.maxX) / 2,
            sk = (Xk.YR + Xk.oR) / 2;
          ak.nodes().forEach((Bk => {
            if (Bk === Fk) return;
            let Rk = ak.node(Bk),
              tk = kk.node(Bk);
            if (tk && Rk && "number" == typeof Rk.x && "number" == typeof Rk.y) {
              let kk = Rk.x - dk,
                Fk = Rk.y - sk;
              tk.x = bk + kk, tk.y = wk + Fk
            }
          })), delete tk._dagreClusterSubgraph
        }
      }))
    }

    function mB(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var tk, ak;
      let Xk = !1 !== (null == Bk ? void 0 : Bk.useDynamic),
        bk = Xk && null != (tk = null == Rk ? void 0 : Rk.graph) ? tk : null,
        wk = Xk && null != (ak = null == Rk ? void 0 : Rk.rawNodes) ? ak : null;
      Fk("    makeSpaceForEdgeLabels", (() => function(kk) {
        let Fk = kk.graph();
        Fk.ranksep /= 2, kk.edges().forEach((Bk => {
          var Rk;
          let tk = kk.edge(Bk);
          tk.minlen *= 2, "c" !== (null != (Rk = tk.labelpos) ? Rk : "r").toLowerCase() && ("TB" === Fk.rankdir || "BT" === Fk.rankdir ? tk.width += tk.labeloffset : tk.height += tk.labeloffset)
        }))
      }(kk))), Fk("    removeSelfEdges", (() => function(kk) {
        kk.edges().forEach((Fk => {
          if (Fk.v === Fk.w) {
            let Bk = kk.node(Fk.v);
            Bk.selfEdges || (Bk.selfEdges = []), Bk.selfEdges.push({
              e: Fk,
              label: kk.edge(Fk)
            }), kk.removeEdge(Fk)
          }
        }))
      }(kk))), Fk("    acyclic", (() => eF(kk, bk))), Fk("    nestingGraph.run", (() => zF(kk))), Fk("    rank", (() => GF(Ck(kk)))), Fk("    injectEdgeLabelProxies", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Bk = kk.edge(Fk);
          if (Bk.width && Bk.height) {
            let Bk = kk.node(Fk.v),
              Rk = {
                rank: (kk.node(Fk.w).rank - Bk.rank) / 2 + Bk.rank,
                e: Fk
              };
            qk(kk, "edge-proxy", Rk, "_ep")
          }
        }))
      }(kk))), Fk("    removeEmptyRanks", (() => function(kk) {
        let Fk = kk.nodes().map((Fk => kk.node(Fk).rank)).filter((kk => void 0 !== kk)),
          Bk = jk(Math.min, Fk),
          Rk = [];
        kk.nodes().forEach((Fk => {
          let tk = kk.node(Fk).rank - Bk;
          Rk[tk] || (Rk[tk] = []), Rk[tk].push(Fk)
        }));
        let tk = 0,
          ak = kk.graph().nodeRankFactor;
        Array.from(Rk).forEach(((Fk, Bk) => {
          void 0 === Fk && Bk % ak !== 0 ? --tk : void 0 !== Fk && tk && Fk.forEach((Fk => kk.node(Fk).rank += tk))
        }))
      }(kk))), Fk("    nestingGraph.cleanup", (() => function(kk) {
        let Fk = kk.graph();
        kk.removeNode(Fk.nestingRoot), delete Fk.nestingRoot, kk.edges().forEach((Fk => {
          kk.edge(Fk).nestingEdge && kk.removeEdge(Fk)
        }))
      }(kk))), Fk("    normalizeRanks", (() => function(kk) {
        let Fk = kk.nodes().map((Fk => {
            let Bk = kk.node(Fk).rank;
            return void 0 === Bk ? Number.MAX_VALUE : Bk
          })),
          Bk = jk(Math.min, Fk);
        kk.nodes().forEach((Fk => {
          let Rk = kk.node(Fk);
          Object.hasOwn(Rk, "rank") && (Rk.rank -= Bk)
        }))
      }(kk))), Fk("    assignRankMinMax", (() => function(kk) {
        let Fk = 0;
        kk.nodes().forEach((Bk => {
          let Rk = kk.node(Bk);
          Rk.borderTop && (Rk.minRank = kk.node(Rk.borderTop).rank, Rk.maxRank = kk.node(Rk.borderBottom).rank, Fk = Math.max(Fk, Rk.maxRank))
        })), kk.graph().maxRank = Fk
      }(kk))), Fk("    removeEdgeLabelProxies", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          let Bk = kk.node(Fk);
          if ("edge-proxy" === Bk.dummy) {
            let Rk = Bk;
            kk.edge(Rk.e).labelRank = Bk.rank, kk.removeNode(Fk)
          }
        }))
      }(kk))), Fk("    normalize.run", (() => yF(kk))), Fk("    parentDummyChains", (() => DF(kk))), Fk("    addBorderSegments", (() => hF(kk))), Fk("    order", (() => RB(kk, Bk, wk))), Fk("    insertSelfEdges", (() => function(kk) {
        pk(kk).forEach((Fk => {
          let Bk = 0;
          Fk.forEach(((Fk, Rk) => {
            let tk = kk.node(Fk);
            "number" != typeof tk.rank && (tk.rank = 0), tk.order = Rk + Bk, (tk.selfEdges || []).forEach((Fk => {
              qk(kk, "selfedge", {
                width: Fk.label.width,
                height: Fk.label.height,
                rank: tk.rank,
                order: Rk + ++Bk,
                e: Fk.e,
                edgeLabel: Fk.label
              }, "_se"), (!Array.isArray(Fk.label.points) || 7 !== Fk.label.points.length) && (Fk.label.points = [{
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
            })), delete tk.selfEdges
          }))
        }))
      }(kk))), Fk("    adjustCoordinateSystem", (() => function(kk) {
        var Fk;
        let Bk = null == (Fk = kk.graph().rankdir) ? void 0 : Fk.toLowerCase();
        ("lr" === Bk || "rl" === Bk) && ZF(kk)
      }(kk))), Fk("    position", (() => JB(kk, Bk.corePath))), Fk("    positionSelfEdges", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          let Bk = kk.node(Fk),
            Rk = kk => "number" == typeof kk && isFinite(kk);
          if ("selfedge" === Bk.dummy) {
            let tk = Bk,
              ak = kk.node(tk.e.v),
              Xk = Rk(null == ak ? void 0 : ak.x) ? ak.x : 0,
              bk = Rk(null == ak ? void 0 : ak.y) ? ak.y : 0,
              wk = Rk(null == ak ? void 0 : ak.width) ? ak.width : 0,
              dk = Rk(null == ak ? void 0 : ak.height) ? ak.height : 0,
              sk = Rk(Bk.x) ? Bk.x : Xk,
              Vk = Rk(Bk.y) ? Bk.y : bk,
              Jk = wk / 2,
              Ak = dk / 2;
            tk.edgeLabel.points = [{
              x: sk + Jk,
              y: Vk - Ak
            }, {
              x: sk + Jk,
              y: Vk - Ak
            }, {
              x: sk,
              y: Vk
            }, {
              x: sk - Jk,
              y: Vk + Ak
            }, {
              x: sk - Jk,
              y: Vk + Ak
            }, {
              x: sk,
              y: Vk
            }, {
              x: sk,
              y: Vk
            }], tk.edgeLabel.x = sk, tk.edgeLabel.y = Vk, kk.setEdge(tk.e, tk.edgeLabel), kk.removeNode(Fk)
          } else Bk && Array.isArray(Bk.selfEdges) && Bk.selfEdges.forEach((kk => {
            if (!Array.isArray(kk.label.points) || 7 !== kk.label.points.length) {
              let Fk = Rk(Bk.x) ? Bk.x : 0,
                tk = Rk(Bk.y) ? Bk.y : 0,
                ak = (Rk(Bk.width) ? Bk.width : 0) / 2,
                Xk = (Rk(Bk.height) ? Bk.height : 0) / 2;
              kk.label.points = [{
                x: Fk + ak,
                y: tk - Xk
              }, {
                x: Fk + ak,
                y: tk - Xk
              }, {
                x: Fk,
                y: tk
              }, {
                x: Fk - ak,
                y: tk + Xk
              }, {
                x: Fk - ak,
                y: tk + Xk
              }, {
                x: Fk,
                y: tk
              }, {
                x: Fk,
                y: tk
              }]
            }
          }))
        }))
      }(kk)));
      let dk = JSON.parse(JSON.stringify(kk._nodes));
      return Fk("    removeBorderNodes", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          if (kk.children(Fk).length) {
            let Bk = kk.node(Fk),
              Rk = kk.node(Bk.borderTop),
              tk = kk.node(Bk.borderBottom),
              ak = kk.node(Bk.borderLeft[Bk.borderLeft.length - 1]),
              Xk = kk.node(Bk.borderRight[Bk.borderRight.length - 1]);
            Bk.width = Math.abs(Xk.x - ak.x), Bk.height = Math.abs(tk.y - Rk.y), Bk.x = ak.x + Bk.width / 2, Bk.y = Rk.y + Bk.height / 2
          }
        })), kk.nodes().forEach((Fk => {
          "border" === kk.node(Fk).dummy && kk.removeNode(Fk)
        }))
      }(kk))), Fk("    normalize.undo", (() => function(kk) {
        kk.graph().dummyChains.forEach((Fk => {
          let Bk, Rk = kk.node(Fk),
            tk = Rk.edgeLabel;
          for (kk.setEdge(Rk.edgeObj, tk); Rk.dummy;) Bk = kk.successors(Fk)[0], kk.removeNode(Fk), tk.points.push({
            x: Rk.x,
            y: Rk.y
          }), "edge-label" === Rk.dummy && (tk.x = Rk.x, tk.y = Rk.y, tk.width = Rk.width, tk.height = Rk.height), Fk = Bk, Rk = kk.node(Fk)
        }))
      }(kk))), Fk("    fixupEdgeLabelCoords", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Bk = kk.edge(Fk);
          if (Object.hasOwn(Bk, "x")) switch (("l" === Bk.labelpos || "r" === Bk.labelpos) && (Bk.width -= Bk.labeloffset), Bk.labelpos) {
            case "l":
              Bk.x -= Bk.width / 2 + Bk.labeloffset;
              break;
            case "r":
              Bk.x += Bk.width / 2 + Bk.labeloffset
          }
        }))
      }(kk))), Fk("    undoCoordinateSystem", (() => CF(kk))), Fk("    translateGraph", (() => function(kk) {
        let Fk = Number.POSITIVE_INFINITY,
          Bk = 0,
          Rk = Number.POSITIVE_INFINITY,
          tk = 0,
          ak = kk.graph(),
          Xk = ak.marginx || 0,
          bk = ak.marginy || 0;

        function wk(kk) {
          let ak = kk.x,
            Xk = kk.y,
            bk = kk.width,
            wk = kk.height;
          Fk = Math.min(Fk, ak - bk / 2), Bk = Math.max(Bk, ak + bk / 2), Rk = Math.min(Rk, Xk - wk / 2), tk = Math.max(tk, Xk + wk / 2)
        }
        kk.nodes().forEach((Fk => wk(kk.node(Fk)))), kk.edges().forEach((Fk => {
          let Bk = kk.edge(Fk);
          Object.hasOwn(Bk, "x") && wk(Bk)
        })), Fk -= Xk, Rk -= bk, kk.nodes().forEach((Bk => {
          let tk = kk.node(Bk);
          tk.x -= Fk, tk.y -= Rk
        })), kk.edges().forEach((Bk => {
          let tk = kk.edge(Bk);
          tk.points.forEach((kk => {
            kk.x -= Fk, kk.y -= Rk
          })), Object.hasOwn(tk, "x") && (tk.x -= Fk), Object.hasOwn(tk, "y") && (tk.y -= Rk)
        })), ak.width = Bk - Fk + Xk, ak.height = tk - Rk + bk
      }(kk))), Fk("    assignNodeIntersects", (() => function(kk) {
        kk.edges().forEach((Fk => {
          if (Fk.v === Fk.w) return;
          let Bk, Rk, tk = kk.edge(Fk),
            ak = kk.node(Fk.v),
            Xk = kk.node(Fk.w);
          tk.points ? (Bk = tk.points[0], Rk = tk.points[tk.points.length - 1]) : (tk.points = [], Bk = Xk, Rk = ak), tk.points.unshift(Zk(ak, Bk)), tk.points.push(Zk(Xk, Rk))
        }))
      }(kk))), Fk("    reversePoints", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Bk = kk.edge(Fk);
          Bk.reversed && Bk.points.reverse()
        }))
      }(kk))), Fk("    acyclic.undo", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Bk = kk.edge(Fk);
          if (Bk.reversed) {
            kk.removeEdge(Fk);
            let Rk = Bk.forwardName;
            delete Bk.reversed, delete Bk.forwardName, kk.setEdge(Fk.w, Fk.v, Bk, Rk)
          }
        }))
      }(kk))), {
        graph: kk,
        rawNodes: dk
      }
    }

    function WB(kk, Fk) {
      kk.nodes().forEach((Bk => {
        let Rk = kk.node(Bk),
          tk = Fk.node(Bk);
        Rk && (Rk.x = tk.x, Rk.y = tk.y, Rk.order = tk.order, Rk.rank = tk.rank, Fk.children(Bk).length && (Rk.width = tk.width, Rk.height = tk.height))
      })), kk.edges().forEach((Bk => {
        let Rk = kk.edge(Bk),
          tk = Fk.edge(Bk);
        Rk.points = tk.points, Object.hasOwn(tk, "x") && (Rk.x = tk.x, Rk.y = tk.y)
      })), kk.graph().width = Fk.graph().width, kk.graph().height = Fk.graph().height
    }
    var vB = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      iB = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      YB = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      oB = ["width", "height", "rank"],
      LB = {
        width: 0,
        height: 0
      },
      OB = ["minlen", "weight", "width", "height", "labeloffset"],
      EB = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      SB = ["labelpos"];

    function NB(kk) {
      let Fk = new hk({
          multigraph: !0,
          compound: !0
        }),
        Bk = uB(kk.graph());
      return Fk.setGraph(Object.assign({}, iB, HB(Bk, vB), BF(Bk, YB))), kk.nodes().forEach((Bk => {
        let Rk = HB(uB(kk.node(Bk)), oB);
        Object.keys(LB).forEach((kk => {
          void 0 === Rk[kk] && (Rk[kk] = LB[kk])
        })), Fk.setNode(Bk, Rk);
        let tk = kk.parent(Bk);
        void 0 !== tk && Fk.setParent(Bk, tk)
      })), kk.edges().forEach((Bk => {
        let Rk = uB(kk.edge(Bk));
        Fk.setEdge(Bk, Object.assign({}, EB, HB(Rk, OB), BF(Rk, SB)))
      })), Fk
    }

    function HB(kk, Fk) {
      return RF(BF(kk, Fk), Number)
    }

    function uB(kk) {
      let Fk = {};
      return kk && Object.entries(kk).forEach((kk => {
        let [Bk, Rk] = kk;
        "string" == typeof Bk && (Bk = Bk.toLowerCase()), Fk[Bk] = Rk
      })), Fk
    }

    function MB(kk) {
      let Fk = pk(kk),
        Bk = new hk({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return kk.nodes().forEach((Fk => {
        Bk.setNode(Fk, {
          label: Fk
        }), Bk.setParent(Fk, "layer" + kk.node(Fk).rank)
      })), kk.edges().forEach((kk => Bk.setEdge(kk.v, kk.w, {}, kk.name))), Fk.forEach(((kk, Fk) => {
        let Rk = "layer" + Fk;
        Bk.setNode(Rk, {
          rank: "same"
        }), kk.reduce(((kk, Fk) => (Bk.setEdge(kk, Fk, {
          style: "invis"
        }), Fk)))
      })), Bk
    }
    var gB = {
        time: nk,
        notime: Ik
      },
      UB = {
        graphlib: ak,
        version: XF,
        layout: eB,
        debug: MB,
        util: {
          time: nk,
          notime: Ik
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);