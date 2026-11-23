/*! For license information please see 31kiid.118.c434ef0d.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6440: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Graph: () => Wk,
      debug: () => nI,
      default: () => pI,
      graphlib: () => ik,
      layout: () => eI,
      util: () => GI,
      version: () => yF
    });
    var Xk = Object.defineProperty,
      Tk = (kk, Fk, Ik) => ((kk, Fk, Ik) => Fk in kk ? Xk(kk, Fk, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ik
      }) : kk[Fk] = Ik)(kk, "symbol" != typeof Fk ? Fk + "" : Fk, Ik),
      ik = {};
    ((kk, Fk) => {
      for (var Ik in Fk) Xk(kk, Ik, {
        get: Fk[Ik],
        enumerable: !0
      })
    })(ik, {
      Graph: () => Wk,
      alg: () => Jk
    });
    var yk = Object.defineProperty,
      lk = (kk, Fk) => {
        for (var Ik in Fk) yk(kk, Ik, {
          get: Fk[Ik],
          enumerable: !0
        })
      },
      ak = class {
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
            for (let Ik = Fk += ""; void 0 !== Ik; Ik = this.parent(Ik))
              if (Ik === kk) throw new Error("Setting " + Fk + " as parent of " + kk + " would create a cycle");
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
            let Ik = new Set(Fk),
              Xk = this.successors(kk);
            if (Xk)
              for (let kk of Xk) Ik.add(kk);
            return Array.from(Ik.values())
          }
        }
        isLeaf(kk) {
          var Fk;
          let Ik;
          return Ik = this.isDirected() ? this.successors(kk) : this.neighbors(kk), 0 === (null != (Fk = null == Ik ? void 0 : Ik.length) ? Fk : 0)
        }
        filterNodes(kk) {
          let Fk = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Fk.setGraph(this.graph()), Object.entries(this._nodes).forEach((Ik => {
            let [Xk, Tk] = Ik;
            kk(Xk) && Fk.setNode(Xk, Tk)
          })), Object.values(this._edgeObjs).forEach((kk => {
            Fk.hasNode(kk.v) && Fk.hasNode(kk.w) && Fk.setEdge(kk, this.edge(kk))
          }));
          let Ik = {},
            Xk = kk => {
              let Tk = this.parent(kk);
              return !Tk || Fk.hasNode(Tk) ? (Ik[kk] = Tk, Tk) : Tk in Ik ? Ik[Tk] : Xk(Tk)
            };
          return this._isCompound && Fk.nodes().forEach((kk => Fk.setParent(kk, Xk(kk)))), Fk
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
          return kk.reduce(((kk, Ik) => (void 0 !== Fk ? this.setEdge(kk, Ik, Fk) : this.setEdge(kk, Ik), Ik))), this
        }
        setEdge(kk, Fk, Ik, Xk) {
          let Tk, ik, yk, lk, ak = !1;
          "object" == typeof kk && null !== kk && "v" in kk ? (Tk = kk.v, ik = kk.w, yk = kk.name, 2 === arguments.length && (lk = Fk, ak = !0)) : (Tk = kk, ik = Fk, yk = Xk, arguments.length > 2 && (lk = Ik, ak = !0)), Tk = "" + Tk, ik = "" + ik, void 0 !== yk && (yk = "" + yk);
          let Lk = tk(this._isDirected, Tk, ik, yk);
          if (Lk in this._edgeLabels) return ak && (this._edgeLabels[Lk] = lk), this;
          if (void 0 !== yk && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Tk), this.setNode(ik), this._edgeLabels[Lk] = ak ? lk : this._defaultEdgeLabelFn(Tk, ik, yk);
          let Zk = function(kk, Fk, Ik, Xk) {
            let Tk = "" + Fk,
              ik = "" + Ik;
            if (!kk && Tk > ik) {
              let kk = Tk;
              Tk = ik, ik = kk
            }
            let yk = {
              v: Tk,
              w: ik
            };
            return Xk && (yk.name = Xk), yk
          }(this._isDirected, Tk, ik, yk);
          return Tk = Zk.v, ik = Zk.w, Object.freeze(Zk), this._edgeObjs[Lk] = Zk, qk(this._preds[ik], Tk), qk(this._sucs[Tk], ik), this._in[ik][Lk] = Zk, this._out[Tk][Lk] = Zk, this._edgeCount++, this
        }
        edge(kk, Fk, Ik) {
          let Xk = 1 === arguments.length ? Zk(this._isDirected, kk) : tk(this._isDirected, kk, Fk, Ik);
          return this._edgeLabels[Xk]
        }
        edgeAsObj(kk, Fk, Ik) {
          let Xk = 1 === arguments.length ? this.edge(kk) : this.edge(kk, Fk, Ik);
          return "object" != typeof Xk || null === Xk ? {
            label: Xk
          } : Xk
        }
        hasEdge(kk, Fk, Ik) {
          return (1 === arguments.length ? Zk(this._isDirected, kk) : tk(this._isDirected, kk, Fk, Ik)) in this._edgeLabels
        }
        removeEdge(kk, Fk, Ik) {
          let Xk = 1 === arguments.length ? Zk(this._isDirected, kk) : tk(this._isDirected, kk, Fk, Ik),
            Tk = this._edgeObjs[Xk];
          if (Tk) {
            let kk = Tk.v,
              Fk = Tk.w;
            delete this._edgeLabels[Xk], delete this._edgeObjs[Xk], Lk(this._preds[Fk], kk), Lk(this._sucs[kk], Fk), delete this._in[Fk][Xk], delete this._out[kk][Xk], this._edgeCount--
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
        filterEdges(kk, Fk, Ik) {
          if (!kk) return;
          let Xk = Object.values(kk);
          return Ik ? Xk.filter((kk => kk.v === Fk && kk.w === Ik || kk.v === Ik && kk.w === Fk)) : Xk
        }
      };

    function qk(kk, Fk) {
      kk[Fk] ? kk[Fk]++ : kk[Fk] = 1
    }

    function Lk(kk, Fk) {
      void 0 !== kk[Fk] && !--kk[Fk] && delete kk[Fk]
    }

    function tk(kk, Fk, Ik, Xk) {
      let Tk = "" + Fk,
        ik = "" + Ik;
      if (!kk && Tk > ik) {
        let kk = Tk;
        Tk = ik, ik = kk
      }
      return Tk + "\x01" + ik + "\x01" + (void 0 === Xk ? "\0" : Xk)
    }

    function Zk(kk, Fk) {
      return tk(kk, Fk.v, Fk.w, Fk.name)
    }

    function jk(kk) {
      let Fk = {
          options: {
            directed: kk.isDirected(),
            multigraph: kk.isMultigraph(),
            compound: kk.isCompound()
          },
          nodes: ek(kk),
          edges: wk(kk)
        },
        Ik = kk.graph();
      return void 0 !== Ik && (Fk.value = structuredClone(Ik)), Fk
    }

    function ek(kk) {
      return kk.nodes().map((Fk => {
        let Ik = kk.node(Fk),
          Xk = kk.parent(Fk),
          Tk = {
            v: Fk
          };
        return void 0 !== Ik && (Tk.value = Ik), void 0 !== Xk && (Tk.parent = Xk), Tk
      }))
    }

    function wk(kk) {
      return kk.edges().map((Fk => {
        let Ik = kk.edge(Fk),
          Xk = {
            v: Fk.v,
            w: Fk.w
          };
        return void 0 !== Fk.name && (Xk.name = Fk.name), void 0 !== Ik && (Xk.value = Ik), Xk
      }))
    }

    function Hk(kk) {
      let Fk = new ak(kk.options);
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
    lk({}, {
      read: () => Hk,
      write: () => jk
    });
    var Jk = {};
    lk(Jk, {
      CycleException: () => nk,
      bellmanFord: () => Pk,
      components: () => Kk,
      dijkstra: () => Vk,
      dijkstraAll: () => zk,
      findCycles: () => vk,
      floydWarshall: () => Ok,
      isAcyclic: () => pk,
      postorder: () => Uk,
      preorder: () => Ck,
      prim: () => Nk,
      shortestPaths: () => ck,
      tarjan: () => Sk,
      topsort: () => Gk
    });
    var xk = () => 1;

    function Pk(kk, Fk, Ik, Xk) {
      return function(kk, Fk, Ik, Xk) {
        let Tk, ik = {},
          yk = 0,
          lk = kk.nodes(),
          ak = function(kk) {
            let Fk = ik[kk.v],
              Xk = ik[kk.w];
            if (!Fk || !Xk) return;
            let yk = Ik(kk);
            Fk.distance + yk < Xk.distance && (ik[kk.w] = {
              distance: Fk.distance + yk,
              predecessor: kk.v
            }, Tk = !0)
          },
          qk = function() {
            lk.forEach((function(kk) {
              Xk(kk).forEach((function(Fk) {
                let Ik = Fk.v === kk ? Fk.v : Fk.w,
                  Xk = Ik === Fk.v ? Fk.w : Fk.v;
                ak({
                  v: Ik,
                  w: Xk
                })
              }))
            }))
          };
        lk.forEach((function(kk) {
          let Ik = kk === Fk ? 0 : Number.POSITIVE_INFINITY;
          ik[kk] = {
            distance: Ik,
            predecessor: ""
          }
        }));
        let Lk = lk.length;
        for (let tk = 1; tk < Lk && (Tk = !1, yk++, qk(), Tk); tk++);
        if (yk === Lk - 1 && (Tk = !1, qk(), Tk)) throw new Error("The graph contains a negative weight cycle");
        return ik
      }(kk, String(Fk), Ik || xk, Xk || function(Fk) {
        var Ik;
        return null != (Ik = kk.outEdges(Fk)) ? Ik : []
      })
    }

    function Kk(kk) {
      let Fk, Ik = {},
        Xk = [];

      function Tk(Xk) {
        var ik, yk;
        Xk in Ik || (Ik[Xk] = !0, Fk.push(Xk), null == (ik = kk.successors(Xk)) || ik.forEach(Tk), null == (yk = kk.predecessors(Xk)) || yk.forEach(Tk))
      }
      return kk.nodes().forEach((function(kk) {
        Fk = [], Tk(kk), Fk.length && Xk.push(Fk)
      })), Xk
    }
    var Qk = class {
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
          let Ik = this._keyIndices,
            Xk = String(kk);
          if (!(Xk in Ik)) {
            let kk = this._arr,
              Tk = kk.length;
            return Ik[Xk] = Tk, kk.push({
              key: Xk,
              priority: Fk
            }), this._decrease(Tk), !0
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
          let Ik = this._keyIndices[kk];
          if (void 0 === Ik) throw new Error(`Key not found: ${kk}`);
          let Xk = this._arr[Ik].priority;
          if (Fk > Xk) throw new Error(`New priority is greater than current priority. Key: ${kk} Old: ${Xk} New: ${Fk}`);
          this._arr[Ik].priority = Fk, this._decrease(Ik)
        }
        _heapify(kk) {
          let Fk = this._arr,
            Ik = 2 * kk,
            Xk = Ik + 1,
            Tk = kk;
          Ik < Fk.length && (Tk = Fk[Ik].priority < Fk[Tk].priority ? Ik : Tk, Xk < Fk.length && (Tk = Fk[Xk].priority < Fk[Tk].priority ? Xk : Tk), Tk !== kk && (this._swap(kk, Tk), this._heapify(Tk)))
        }
        _decrease(kk) {
          let Fk, Ik = this._arr,
            Xk = Ik[kk].priority;
          for (; 0 !== kk && (Fk = kk >> 1, !(Ik[Fk].priority < Xk));) this._swap(kk, Fk), kk = Fk
        }
        _swap(kk, Fk) {
          let Ik = this._arr,
            Xk = this._keyIndices,
            Tk = Ik[kk],
            ik = Ik[Fk];
          Ik[kk] = ik, Ik[Fk] = Tk, Xk[ik.key] = kk, Xk[Tk.key] = Fk
        }
      },
      sk = () => 1;

    function Vk(kk, Fk, Ik, Xk) {
      return function(kk, Fk, Ik, Xk) {
        let Tk, ik, yk = {},
          lk = new Qk,
          ak = function(kk) {
            let Fk = kk.v !== Tk ? kk.v : kk.w,
              Xk = yk[Fk];
            if (!Xk) return;
            let ak = Ik(kk),
              qk = ik.distance + ak;
            if (ak < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + kk + " Weight: " + ak);
            qk < Xk.distance && (Xk.distance = qk, Xk.predecessor = Tk, lk.decrease(Fk, qk))
          };
        for (kk.nodes().forEach((function(kk) {
            let Ik = kk === Fk ? 0 : Number.POSITIVE_INFINITY;
            yk[kk] = {
              distance: Ik,
              predecessor: ""
            }, lk.add(kk, Ik)
          })); lk.size() > 0;) {
          Tk = lk.removeMin();
          let kk = yk[Tk];
          if (!kk || kk.distance === Number.POSITIVE_INFINITY) break;
          ik = kk, Xk(Tk).forEach(ak)
        }
        return yk
      }(kk, String(Fk), Ik || sk, Xk || function(Fk) {
        var Ik;
        return null != (Ik = kk.outEdges(Fk)) ? Ik : []
      })
    }

    function zk(kk, Fk, Ik) {
      return kk.nodes().reduce((function(Xk, Tk) {
        return Xk[Tk] = Vk(kk, Tk, Fk, Ik), Xk
      }), {})
    }

    function Sk(kk) {
      let Fk = 0,
        Ik = [],
        Xk = {},
        Tk = [];

      function ik(yk) {
        var lk;
        let ak = Xk[yk] = {
          onStack: !0,
          lowlink: Fk,
          index: Fk++
        };
        if (Ik.push(yk), null == (lk = kk.successors(yk)) || lk.forEach((function(kk) {
            if (kk in Xk) {
              let Fk = Xk[kk];
              null != Fk && Fk.onStack && (ak.lowlink = Math.min(ak.lowlink, Fk.index))
            } else {
              ik(kk);
              let Fk = Xk[kk];
              Fk && (ak.lowlink = Math.min(ak.lowlink, Fk.lowlink))
            }
          })), ak.lowlink === ak.index) {
          let kk, Fk = [];
          do {
            kk = Ik.pop();
            let Tk = Xk[kk];
            Tk && (Tk.onStack = !1), Fk.push(kk)
          } while (yk !== kk);
          Tk.push(Fk)
        }
      }
      return kk.nodes().forEach((function(kk) {
        kk in Xk || ik(kk)
      })), Tk
    }

    function vk(kk) {
      return Sk(kk).filter((function(Fk) {
        var Ik;
        let Xk = Fk[0];
        return !!Xk && (Fk.length > 1 || 1 === Fk.length && (null != (Ik = kk.outEdges(Xk, Xk)) ? Ik : []).length > 0)
      }))
    }
    var Ek = () => 1;

    function Ok(kk, Fk, Ik) {
      return function(kk, Fk, Ik) {
        let Xk = {},
          Tk = kk.nodes();
        return Tk.forEach((function(kk) {
          let ik = {};
          Xk[kk] = ik, ik[kk] = {
            distance: 0,
            predecessor: ""
          }, Tk.forEach((function(Fk) {
            kk !== Fk && (ik[Fk] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), Ik(kk).forEach((function(Ik) {
            let Xk = Ik.v === kk ? Ik.w : Ik.v,
              Tk = Fk(Ik);
            ik[Xk] = {
              distance: Tk,
              predecessor: kk
            }
          }))
        })), Tk.forEach((function(kk) {
          let Fk = Xk[kk];
          Fk && Tk.forEach((function(Ik) {
            let ik = Xk[Ik];
            ik && Tk.forEach((function(Ik) {
              let Xk = ik[kk],
                Tk = Fk[Ik],
                yk = ik[Ik];
              if (Xk && Tk && yk) {
                let kk = Xk.distance + Tk.distance;
                kk < yk.distance && (yk.distance = kk, yk.predecessor = Tk.predecessor)
              }
            }))
          }))
        })), Xk
      }(kk, Fk || Ek, Ik || function(Fk) {
        var Ik;
        return null != (Ik = kk.outEdges(Fk)) ? Ik : []
      })
    }
    var nk = class extends Error {
      constructor(kk) {
        super(kk), this.name = "CycleException"
      }
    };

    function Gk(kk) {
      let Fk = {},
        Ik = {},
        Xk = [];
      if (kk.sinks().forEach((function Tk(ik) {
          var yk;
          if (ik in Ik) throw new nk;
          ik in Fk || (Ik[ik] = !0, Fk[ik] = !0, null == (yk = kk.predecessors(ik)) || yk.forEach(Tk), delete Ik[ik], Xk.push(ik))
        })), Object.keys(Fk).length !== kk.nodeCount()) throw new nk;
      return Xk
    }

    function pk(kk) {
      try {
        Gk(kk)
      } catch (Fk) {
        if (Fk instanceof nk) return !1;
        throw Fk
      }
      return !0
    }

    function uk(kk, Fk, Ik, Xk, Tk) {
      Array.isArray(Fk) || (Fk = [Fk]);
      let ik = Fk => {
          var Ik;
          return null != (Ik = kk.isDirected() ? kk.successors(Fk) : kk.neighbors(Fk)) ? Ik : []
        },
        yk = {};
      return Fk.forEach((function(Fk) {
        if (!kk.hasNode(Fk)) throw new Error("Graph does not have node: " + Fk);
        Tk = bk(kk, Fk, "post" === Ik, yk, ik, Xk, Tk)
      })), Tk
    }

    function bk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      return Fk in Xk || (Xk[Fk] = !0, Ik || (yk = ik(yk, Fk)), Tk(Fk).forEach((function(Fk) {
        yk = bk(kk, Fk, Ik, Xk, Tk, ik, yk)
      })), Ik && (yk = ik(yk, Fk))), yk
    }

    function Rk(kk, Fk, Ik) {
      return uk(kk, Fk, Ik, (function(kk, Fk) {
        return kk.push(Fk), kk
      }), [])
    }

    function Uk(kk, Fk) {
      return Rk(kk, Fk, "post")
    }

    function Ck(kk, Fk) {
      return Rk(kk, Fk, "pre")
    }

    function Nk(kk, Fk) {
      var Ik;
      let Xk, Tk = new ak,
        ik = {},
        yk = new Qk;

      function lk(kk) {
        let Ik = kk.v === Xk ? kk.w : kk.v,
          Tk = yk.priority(Ik);
        if (void 0 !== Tk) {
          let lk = Fk(kk);
          lk < Tk && (ik[Ik] = Xk, yk.decrease(Ik, lk))
        }
      }
      if (0 === kk.nodeCount()) return Tk;
      kk.nodes().forEach((function(kk) {
        yk.add(kk, Number.POSITIVE_INFINITY), Tk.setNode(kk)
      }));
      let qk = kk.nodes()[0];
      void 0 !== qk && yk.decrease(qk, 0);
      let Lk = !1;
      for (; yk.size() > 0;) {
        if (Xk = yk.removeMin(), Xk in ik) Tk.setEdge(Xk, ik[Xk]);
        else {
          if (Lk) throw new Error("Input graph is not connected: " + kk);
          Lk = !0
        }
        null == (Ik = kk.nodeEdges(Xk)) || Ik.forEach(lk)
      }
      return Tk
    }

    function ck(kk, Fk, Ik, Xk) {
      return function(kk, Fk, Ik, Xk) {
        if (void 0 === Ik) return Vk(kk, Fk, Ik, Xk);
        let Tk = !1,
          ik = kk.nodes();
        for (let yk = 0; yk < ik.length; yk++) {
          let lk = ik[yk];
          if (void 0 === lk) continue;
          let ak = Xk(lk);
          for (let kk = 0; kk < ak.length; kk++) {
            let Fk = ak[kk];
            if (!Fk) continue;
            let Xk = Fk.v === lk ? Fk.v : Fk.w;
            Ik({
              v: Xk,
              w: Xk === Fk.v ? Fk.w : Fk.v
            }) < 0 && (Tk = !0)
          }
          if (Tk) return Pk(kk, Fk, Ik, Xk)
        }
        return Vk(kk, Fk, Ik, Xk)
      }(kk, Fk, Ik, null != Xk ? Xk : Fk => {
        var Ik;
        return null != (Ik = kk.outEdges(Fk)) ? Ik : []
      })
    }
    var Wk = ak;

    function fk(kk, Fk, Ik, Xk) {
      let Tk = Xk;
      for (; kk.hasNode(Tk);) Tk = kF(Xk);
      return Ik.dummy = Fk, kk.setNode(Tk, Ik), Tk
    }

    function Bk(kk) {
      let Fk = new Wk({
        multigraph: kk.isMultigraph()
      }).setGraph(kk.graph());
      return kk.nodes().forEach((Ik => {
        kk.children(Ik).length || Fk.setNode(Ik, kk.node(Ik))
      })), kk.edges().forEach((Ik => {
        Fk.setEdge(Ik, kk.edge(Ik))
      })), Fk
    }

    function dk(kk, Fk) {
      let Ik, Xk, Tk = kk.x,
        ik = kk.y,
        yk = Fk.x - Tk,
        lk = Fk.y - ik,
        ak = kk.width / 2,
        qk = kk.height / 2;
      if (!yk && !lk) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(lk) * ak > Math.abs(yk) * qk ? (lk < 0 && (qk = -qk), Ik = qk * yk / lk, Xk = qk) : (yk < 0 && (ak = -ak), Ik = ak, Xk = ak * lk / yk), {
        x: Tk + Ik,
        y: ik + Xk
      }
    }

    function Yk(kk) {
      let Fk = FF(hk(kk) + 1).map((() => []));
      return kk.nodes().forEach((Ik => {
        let Xk = kk.node(Ik),
          Tk = Xk.rank;
        void 0 !== Tk && (Fk[Tk] || (Fk[Tk] = []), Fk[Tk][Xk.order] = Ik)
      })), Fk
    }

    function Ak(kk, Fk, Ik, Xk) {
      let Tk = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Tk.rank = Ik, Tk.order = Xk), fk(kk, "border", Tk, Fk)
    }
    var gk = 65535;

    function mk(kk, Fk) {
      if (Fk.length > gk) {
        let Ik = function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gk,
            Ik = [];
          for (let Xk = 0; Xk < kk.length; Xk += Fk) {
            let Tk = kk.slice(Xk, Xk + Fk);
            Ik.push(Tk)
          }
          return Ik
        }(Fk);
        return kk(...Ik.map((Fk => kk(...Fk))))
      }
      return kk(...Fk)
    }

    function hk(kk) {
      let Fk = kk.nodes().map((Fk => {
        let Ik = kk.node(Fk).rank;
        return void 0 === Ik ? Number.MIN_VALUE : Ik
      }));
      return mk(Math.max, Fk)
    }

    function rk(kk, Fk) {
      let Ik = Date.now();
      try {
        return Fk()
      } finally {
        console.log(kk + " time: " + (Date.now() - Ik) + "ms")
      }
    }

    function Dk(kk, Fk) {
      return Fk()
    }
    var Mk = 0;

    function kF(kk) {
      return kk + "" + ++Mk
    }

    function FF(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Fk && (Fk = kk, kk = 0);
      let Xk = kk => kk < Fk;
      Ik < 0 && (Xk = kk => Fk < kk);
      let Tk = [];
      for (let ik = kk; Xk(ik); ik += Ik) Tk.push(ik);
      return Tk
    }

    function IF(kk, Fk) {
      let Ik = {};
      for (let Xk of Fk) void 0 !== kk[Xk] && (Ik[Xk] = kk[Xk]);
      return Ik
    }

    function XF(kk, Fk) {
      let Ik;
      return Ik = "string" == typeof Fk ? kk => kk[Fk] : Fk, Object.entries(kk).reduce(((kk, Fk) => {
        let [Xk, Tk] = Fk;
        return kk[Xk] = Ik(Tk, Xk), kk
      }), {})
    }
    var TF = "\0";

    function iF(kk, Fk, Ik) {
      var Xk, Tk, ik, yk, lk, ak;
      if (!(kk && Fk && Ik && "edge" === Fk.dummy && "edge" === Ik.dummy && Fk.edgeObj && Ik.edgeObj && kk[Fk.edgeObj.v] && kk[Ik.edgeObj.v] && kk[Fk.edgeObj.w] && kk[Ik.edgeObj.w])) return 0;
      let qk = !0;
      Fk.edgeObj.w === Ik.edgeObj.w && (qk = !1);
      let Lk = qk ? null != (Tk = null == (Xk = kk[Fk.edgeObj.v]) ? void 0 : Xk.rank) ? Tk : NaN : null != (yk = null == (ik = kk[Fk.edgeObj.w]) ? void 0 : ik.rank) ? yk : NaN,
        tk = Object.entries(kk).find((kk => {
          var Ik, Xk;
          return (null == (Ik = kk[1].edgeObj) ? void 0 : Ik.v) === Fk.edgeObj.v && (null == (Xk = kk[1].edgeObj) ? void 0 : Xk.w) === Fk.edgeObj.w && kk[1].rank === Lk
        })),
        Zk = Object.entries(kk).find((kk => {
          var Fk, Xk;
          return (null == (Fk = kk[1].edgeObj) ? void 0 : Fk.v) === Ik.edgeObj.v && (null == (Xk = kk[1].edgeObj) ? void 0 : Xk.w) === Ik.edgeObj.w && kk[1].rank === Lk
        }));
      if (!tk || !Zk) return 0;
      let jk = null != (lk = tk[1].order) ? lk : NaN,
        ek = null != (ak = Zk[1].order) ? ak : NaN;
      return isNaN(jk - ek) ? 0 : jk - ek
    }
    var yF = "3.1.1";

    function lF(kk) {
      kk._prev._next = kk._next, kk._next._prev = kk._prev, delete kk._next, delete kk._prev
    }

    function aF(kk, Fk) {
      if ("_next" !== kk && "_prev" !== kk) return Fk
    }
    var qF = class {
        constructor() {
          Tk(this, "_sentinel");
          let kk = {};
          kk._next = kk._prev = kk, this._sentinel = kk
        }
        dequeue() {
          let kk = this._sentinel,
            Fk = kk._prev;
          if (Fk !== kk) return lF(Fk), Fk
        }
        enqueue(kk) {
          let Fk = this._sentinel;
          kk._prev && kk._next && lF(kk), kk._next = Fk._next, Fk._next._prev = kk, Fk._next = kk, kk._prev = Fk
        }
        toString() {
          let kk = [],
            Fk = this._sentinel,
            Ik = Fk._prev;
          for (; Ik !== Fk;) kk.push(JSON.stringify(Ik, aF)), Ik = Ik._prev;
          return "[" + kk.join(", ") + "]"
        }
      },
      LF = () => 1;

    function tF(kk, Fk) {
      if (kk.nodeCount() <= 1) return [];
      let Ik = function(kk, Fk) {
        let Ik = new Wk,
          Xk = 0,
          Tk = 0;
        kk.nodes().forEach((kk => {
          Ik.setNode(kk, {
            v: kk,
            in: 0,
            out: 0
          })
        })), kk.edges().forEach((kk => {
          let ik = Ik.edge(kk.v, kk.w) || 0,
            yk = Fk(kk),
            lk = ik + yk;
          Ik.setEdge(kk.v, kk.w, lk);
          let ak = Ik.node(kk.v),
            qk = Ik.node(kk.w);
          Tk = Math.max(Tk, ak.out += yk), Xk = Math.max(Xk, qk.in += yk)
        }));
        let ik = function(kk) {
            let Fk = [];
            for (let Ik = 0; Ik < kk; Ik++) Fk.push(Ik);
            return Fk
          }(Tk + Xk + 3).map((() => new qF)),
          yk = Xk + 1;
        return Ik.nodes().forEach((kk => {
          jF(ik, yk, Ik.node(kk))
        })), {
          graph: Ik,
          buckets: ik,
          zeroIdx: yk
        }
      }(kk, Fk || LF);
      return function(kk, Fk, Ik) {
        var Xk;
        let Tk, ik = [],
          yk = Fk[Fk.length - 1],
          lk = Fk[0];
        for (; kk.nodeCount();) {
          for (; Tk = lk.dequeue();) ZF(kk, Fk, Ik, Tk);
          for (; Tk = yk.dequeue();) ZF(kk, Fk, Ik, Tk);
          if (kk.nodeCount())
            for (let yk = Fk.length - 2; yk > 0; --yk)
              if (Tk = null == (Xk = Fk[yk]) ? void 0 : Xk.dequeue(), Tk) {
                ik = ik.concat(ZF(kk, Fk, Ik, Tk, !0) || []);
                break
              }
        }
        return ik
      }(Ik.graph, Ik.buckets, Ik.zeroIdx).flatMap((Fk => kk.outEdges(Fk.v, Fk.w) || []))
    }

    function ZF(kk, Fk, Ik, Xk, Tk) {
      let ik = [],
        yk = Tk ? ik : void 0;
      return (kk.inEdges(Xk.v) || []).forEach((Xk => {
        let yk = kk.edge(Xk),
          lk = kk.node(Xk.v);
        Tk && ik.push({
          v: Xk.v,
          w: Xk.w
        }), lk.out -= yk, jF(Fk, Ik, lk)
      })), (kk.outEdges(Xk.v) || []).forEach((Xk => {
        let Tk = kk.edge(Xk),
          ik = Xk.w,
          yk = kk.node(ik);
        yk.in -= Tk, jF(Fk, Ik, yk)
      })), kk.removeNode(Xk.v), yk
    }

    function jF(kk, Fk, Ik) {
      var Xk, Tk, ik;
      Ik.out ? Ik.in ? null == (ik = kk[Ik.out - Ik.in + Fk]) || ik.enqueue(Ik) : null == (Tk = kk[kk.length - 1]) || Tk.enqueue(Ik) : null == (Xk = kk[0]) || Xk.enqueue(Ik)
    }

    function eF(kk, Fk) {
      var Ik;
      ("greedy" === kk.graph().acyclicer ? tF(kk, (Ik = kk, kk => Ik.edge(kk).weight)) : function(kk, Fk) {
        let Ik = [],
          Xk = {},
          Tk = {};

        function ik(Fk) {
          Object.hasOwn(Tk, Fk) || (Tk[Fk] = !0, Xk[Fk] = !0, kk.outEdges(Fk).forEach((kk => {
            Object.hasOwn(Xk, kk.w) ? Ik.push(kk) : ik(kk.w)
          })), delete Xk[Fk])
        }

        function yk(ik) {
          var lk;
          Object.hasOwn(Tk, ik) || (Tk[ik] = !0, Xk[ik] = !0, null == (lk = kk.outEdges(ik)) || lk.forEach((Tk => {
            var lk, ak;
            Object.hasOwn(Xk, Tk.w) || (null == (lk = Fk.node(ik)) ? void 0 : lk.rank) > (null == (ak = Fk.node(Tk.w)) ? void 0 : ak.rank) && function(kk, Fk, Ik) {
              let Xk = new Set;

              function Tk(Fk) {
                var ik;
                if (kk.sources().includes(Fk)) return !0;
                Xk.add(Fk);
                for (let yk of null != (ik = kk.inEdges(Fk)) ? ik : [])
                  if ((yk.v !== Ik.v || yk.w !== Ik.w) && !Xk.has(yk.v) && Tk(yk.v)) return !0;
                return !1
              }
              return Tk(Fk)
            }(kk, Tk.w, Tk) ? Ik.push(Tk) : yk(Tk.w)
          })), delete Xk[ik])
        }
        let lk = ik;
        return Fk && "function" == typeof Fk.node && (lk = yk), kk.sources().forEach(lk), kk.nodes().forEach(lk), Ik
      }(kk, null != Fk ? Fk : null)).forEach((Fk => {
        let Ik = kk.edge(Fk);
        kk.removeEdge(Fk), Ik.forwardName = Fk.name, Ik.reversed = !0, kk.setEdge(Fk.w, Fk.v, Ik, kF("rev"))
      }))
    }

    function wF(kk) {
      kk.graph().dummyChains = [], kk.edges().forEach((Fk => function(kk, Fk) {
        let Ik, Xk, Tk, ik = Fk.v,
          yk = kk.node(ik).rank,
          lk = Fk.w,
          ak = kk.node(lk).rank,
          qk = Fk.name,
          Lk = kk.edge(Fk),
          tk = Lk.labelRank;
        if (ak === yk + 1) return;
        for (kk.removeEdge(Fk), Tk = 0, ++yk; yk < ak; ++Tk, ++yk) Lk.points = [], Xk = {
          width: 0,
          height: 0,
          edgeLabel: Lk,
          edgeObj: Fk,
          rank: yk
        }, Ik = fk(kk, "edge", Xk, "_d"), yk === tk && (Xk.width = Lk.width, Xk.height = Lk.height, Xk.dummy = "edge-label", Xk.labelpos = Lk.labelpos), kk.setEdge(ik, Ik, {
          weight: Lk.weight
        }, qk), 0 === Tk && kk.graph().dummyChains.push(Ik), ik = Ik;
        kk.setEdge(ik, lk, {
          weight: Lk.weight
        }, qk)
      }(kk, Fk)))
    }

    function HF(kk) {
      let Fk = {};
      kk.sources().forEach((function Ik(Xk) {
        let Tk = kk.node(Xk);
        if (Object.hasOwn(Fk, Xk)) return Tk.rank;
        Fk[Xk] = !0;
        let ik = kk.outEdges(Xk),
          yk = ik ? ik.map((Fk => null == Fk ? Number.POSITIVE_INFINITY : Ik(Fk.w) - kk.edge(Fk).minlen)) : [],
          lk = mk(Math.min, yk);
        return lk === Number.POSITIVE_INFINITY && (lk = 0), Tk.rank = lk
      }))
    }

    function JF(kk, Fk) {
      return kk.node(Fk.w).rank - kk.node(Fk.v).rank - kk.edge(Fk).minlen
    }
    var xF = function(kk) {
      let Fk = new Wk({
          directed: !1
        }),
        Ik = kk.nodes();
      if (0 === Ik.length) throw new Error("Graph must have at least one node");
      let Xk, Tk, ik = Ik[0],
        yk = kk.nodeCount();
      for (Fk.setNode(ik, {}); PF(Fk, kk) < yk && (Xk = KF(Fk, kk), Xk);) Tk = Fk.hasNode(Xk.v) ? JF(kk, Xk) : -JF(kk, Xk), QF(Fk, kk, Tk);
      return Fk
    };

    function PF(kk, Fk) {
      return kk.nodes().forEach((function Ik(Xk) {
        let Tk = Fk.nodeEdges(Xk);
        Tk && Tk.forEach((Tk => {
          let ik = Tk.v,
            yk = Xk === ik ? Tk.w : ik;
          !kk.hasNode(yk) && !JF(Fk, Tk) && (kk.setNode(yk, {}), kk.setEdge(Xk, yk, {}), Ik(yk))
        }))
      })), kk.nodeCount()
    }

    function KF(kk, Fk) {
      return Fk.edges().reduce(((Ik, Xk) => {
        let Tk = Number.POSITIVE_INFINITY;
        return kk.hasNode(Xk.v) !== kk.hasNode(Xk.w) && (Tk = JF(Fk, Xk)), Tk < Ik[0] ? [Tk, Xk] : Ik
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function QF(kk, Fk, Ik) {
      kk.nodes().forEach((kk => Fk.node(kk).rank += Ik))
    }
    var {
      preorder: sF,
      postorder: VF
    } = Jk, zF = SF;

    function SF(kk) {
      kk = function(kk) {
        let Fk = (new Wk).setGraph(kk.graph());
        return kk.nodes().forEach((Ik => Fk.setNode(Ik, kk.node(Ik)))), kk.edges().forEach((Ik => {
          let Xk = Fk.edge(Ik.v, Ik.w) || {
              weight: 0,
              minlen: 1
            },
            Tk = kk.edge(Ik);
          Fk.setEdge(Ik.v, Ik.w, {
            weight: Xk.weight + Tk.weight,
            minlen: Math.max(Xk.minlen, Tk.minlen)
          })
        })), Fk
      }(kk), HF(kk);
      let Fk, Ik, Xk = xF(kk);
      for (EF(Xk), oF(Xk, kk); Fk = nF(Xk);) Ik = GF(Xk, kk, Fk), pF(Xk, kk, Fk, Ik)
    }

    function oF(kk, Fk) {
      let Ik = VF(kk, kk.nodes());
      Ik = Ik.slice(0, Ik.length - 1), Ik.forEach((Ik => function(kk, Fk, Ik) {
        let Xk = kk.node(Ik).parent,
          Tk = kk.edge(Ik, Xk);
        Tk.cutvalue = vF(kk, Fk, Ik)
      }(kk, Fk, Ik)))
    }

    function vF(kk, Fk, Ik) {
      let Xk = kk.node(Ik).parent,
        Tk = !0,
        ik = Fk.edge(Ik, Xk),
        yk = 0;
      ik || (Tk = !1, ik = Fk.edge(Xk, Ik)), yk = ik.weight;
      let lk = Fk.nodeEdges(Ik);
      return lk && lk.forEach((ik => {
        let lk = ik.v === Ik,
          ak = lk ? ik.w : ik.v;
        if (ak !== Xk) {
          let Xk = lk === Tk,
            qk = Fk.edge(ik).weight;
          if (yk += Xk ? qk : -qk, function(kk, Fk, Ik) {
              return kk.hasEdge(Fk, Ik)
            }(kk, Ik, ak)) {
            let Fk = kk.edge(Ik, ak).cutvalue;
            yk += Xk ? -Fk : Fk
          }
        }
      })), yk
    }

    function EF(kk, Fk) {
      arguments.length < 2 && (Fk = kk.nodes()[0]), OF(kk, {}, 1, Fk)
    }

    function OF(kk, Fk, Ik, Xk, Tk) {
      let ik = Ik,
        yk = kk.node(Xk);
      Fk[Xk] = !0;
      let lk = kk.neighbors(Xk);
      return lk && lk.forEach((Tk => {
        Object.hasOwn(Fk, Tk) || (Ik = OF(kk, Fk, Ik, Tk, Xk))
      })), yk.low = ik, yk.lim = Ik++, Tk ? yk.parent = Tk : delete yk.parent, Ik
    }

    function nF(kk) {
      return kk.edges().find((Fk => kk.edge(Fk).cutvalue < 0))
    }

    function GF(kk, Fk, Ik) {
      let Xk = Ik.v,
        Tk = Ik.w;
      Fk.hasEdge(Xk, Tk) || (Xk = Ik.w, Tk = Ik.v);
      let ik = kk.node(Xk),
        yk = kk.node(Tk),
        lk = ik,
        ak = !1;
      return ik.lim > yk.lim && (lk = yk, ak = !0), Fk.edges().filter((Fk => ak === uF(kk, kk.node(Fk.v), lk) && ak !== uF(kk, kk.node(Fk.w), lk))).reduce(((kk, Ik) => JF(Fk, Ik) < JF(Fk, kk) ? Ik : kk))
    }

    function pF(kk, Fk, Ik, Xk) {
      let Tk = Ik.v,
        ik = Ik.w;
      kk.removeEdge(Tk, ik), kk.setEdge(Xk.v, Xk.w, {}), EF(kk), oF(kk, Fk),
        function(kk, Fk) {
          let Ik = kk.nodes().find((Fk => !kk.node(Fk).parent));
          if (!Ik) return;
          let Xk = sF(kk, [Ik]);
          Xk = Xk.slice(1), Xk.forEach((Ik => {
            let Xk = kk.node(Ik).parent,
              Tk = Fk.edge(Ik, Xk),
              ik = !1;
            Tk || (Tk = Fk.edge(Xk, Ik), ik = !0), Fk.node(Ik).rank = Fk.node(Xk).rank + (ik ? Tk.minlen : -Tk.minlen)
          }))
        }(kk, Fk)
    }

    function uF(kk, Fk, Ik) {
      return Ik.low <= Fk.lim && Fk.lim <= Ik.lim
    }
    SF.initLowLimValues = EF, SF.initCutValues = oF, SF.calcCutValue = vF, SF.leaveEdge = nF, SF.enterEdge = GF, SF.exchangeEdges = pF;
    var bF = function(kk) {
      let Fk = kk.graph().ranker;
      if ("function" == typeof Fk) return Fk(kk);
      switch (Fk) {
        case "network-simplex":
        default:
          UF(kk);
          break;
        case "tight-tree":
          ! function(kk) {
            HF(kk), xF(kk)
          }(kk);
          break;
        case "longest-path":
          RF(kk);
        case "none":
      }
    };
    var RF = HF;

    function UF(kk) {
      zF(kk)
    }
    var CF = function(kk) {
      let Fk = function(kk) {
          let Fk = {},
            Ik = 0;

          function Xk(Tk) {
            let ik = Ik;
            kk.children(Tk).forEach(Xk), Fk[Tk] = {
              low: ik,
              lim: Ik++
            }
          }
          return kk.children(TF).forEach(Xk), Fk
        }(kk),
        Ik = kk.graph();
      if (!Array.isArray(Ik.dummyChains)) return;
      Ik.dummyChains.forEach((Ik => {
        let Xk = kk.node(Ik),
          Tk = Xk.edgeObj,
          ik = function(kk, Fk, Ik, Xk) {
            let Tk, ik = [],
              yk = [],
              lk = Math.min(Fk[Ik].low, Fk[Xk].low),
              ak = Math.max(Fk[Ik].lim, Fk[Xk].lim);
            Tk = Ik;
            do {
              Tk = kk.parent(Tk), ik.push(Tk)
            } while (Tk && (Fk[Tk].low > lk || ak > Fk[Tk].lim));
            let qk = Tk,
              Lk = Xk;
            for (;
              (Lk = kk.parent(Lk)) !== qk;) yk.push(Lk);
            return {
              path: ik.concat(yk.reverse()),
              lca: qk
            }
          }(kk, Fk, Tk.v, Tk.w),
          yk = ik.path,
          lk = ik.lca,
          ak = 0,
          qk = yk[ak],
          Lk = !0;
        for (; Ik !== Tk.w;) {
          if (Xk = kk.node(Ik), Lk) {
            for (;
              (qk = yk[ak]) !== lk && kk.node(qk).maxRank < Xk.rank;) ak++;
            qk === lk && (Lk = !1)
          }
          if (!Lk) {
            for (; ak < yk.length - 1 && kk.node(yk[ak + 1]).minRank <= Xk.rank;) ak++;
            qk = yk[ak]
          }
          void 0 !== qk && kk.setParent(Ik, qk), Ik = kk.successors(Ik)[0]
        }
      }))
    };

    function NF(kk) {
      let Fk = fk(kk, "root", {}, "_root"),
        Ik = function(kk) {
          let Fk = {};

          function Ik(Xk, Tk) {
            let ik = kk.children(Xk);
            ik && ik.length && ik.forEach((kk => Ik(kk, Tk + 1))), Fk[Xk] = Tk
          }
          return kk.children(TF).forEach((kk => Ik(kk, 1))), Fk
        }(kk),
        Xk = Object.values(Ik),
        Tk = mk(Math.max, Xk) - 1,
        ik = 2 * Tk + 1;
      kk.graph().nestingRoot = Fk, kk.edges().forEach((Fk => kk.edge(Fk).minlen *= ik));
      let yk = function(kk) {
        return kk.edges().reduce(((Fk, Ik) => Fk + kk.edge(Ik).weight), 0)
      }(kk) + 1;
      kk.children(TF).forEach((Xk => {
        cF(kk, Fk, ik, yk, Tk, Ik, Xk)
      })), kk.graph().nodeRankFactor = ik
    }

    function cF(kk, Fk, Ik, Xk, Tk, ik, yk) {
      var lk;
      let ak = kk.children(yk);
      if (!ak.length) return void(yk !== Fk && kk.setEdge(Fk, yk, {
        weight: 0,
        minlen: Ik
      }));
      let qk = Ak(kk, "_bt"),
        Lk = Ak(kk, "_bb"),
        tk = kk.node(yk);
      kk.setParent(qk, yk), tk.borderTop = qk, kk.setParent(Lk, yk), tk.borderBottom = Lk, ak.forEach((lk => {
        var ak;
        cF(kk, Fk, Ik, Xk, Tk, ik, lk);
        let tk = kk.node(lk),
          Zk = tk.borderTop ? tk.borderTop : lk,
          jk = tk.borderBottom ? tk.borderBottom : lk,
          ek = tk.borderTop ? Xk : 2 * Xk,
          wk = Zk !== jk ? 1 : Tk - (null != (ak = ik[yk]) ? ak : 0) + 1;
        kk.setEdge(qk, Zk, {
          weight: ek,
          minlen: wk,
          nestingEdge: !0
        }), kk.setEdge(jk, Lk, {
          weight: ek,
          minlen: wk,
          nestingEdge: !0
        })
      })), kk.parent(yk) || kk.setEdge(Fk, qk, {
        weight: 0,
        minlen: Tk + (null != (lk = ik[yk]) ? lk : 0)
      })
    }
    var WF = function(kk) {
      kk.children(TF).forEach((function Fk(Ik) {
        let Xk = kk.children(Ik),
          Tk = kk.node(Ik);
        if (Xk.length && Xk.forEach(Fk), Tk && Object.hasOwn(Tk, "minRank")) {
          Tk.borderLeft = [], Tk.borderRight = [];
          for (let Fk = Tk.minRank, Xk = Tk.maxRank + 1; Fk < Xk; ++Fk) fF(kk, "borderLeft", "_bl", Ik, Tk, Fk), fF(kk, "borderRight", "_br", Ik, Tk, Fk)
        }
      }))
    };

    function fF(kk, Fk, Ik, Xk, Tk, ik) {
      let yk = {
          width: 0,
          height: 0,
          rank: ik,
          borderType: Fk
        },
        lk = Tk[Fk][ik - 1],
        ak = fk(kk, "border", yk, Ik);
      Tk[Fk][ik] = ak, kk.setParent(ak, Xk), lk && kk.setEdge(lk, ak, {
        weight: 1
      })
    }

    function BF(kk) {
      var Fk;
      let Ik = null == (Fk = kk.graph().rankdir) ? void 0 : Fk.toLowerCase();
      ("bt" === Ik || "rl" === Ik) && function(kk) {
        kk.nodes().forEach((Fk => AF(kk.node(Fk)))), kk.edges().forEach((Fk => {
          var Ik;
          let Xk = kk.edge(Fk);
          null == (Ik = Xk.points) || Ik.forEach(AF), Object.hasOwn(Xk, "y") && AF(Xk)
        }))
      }(kk), ("lr" === Ik || "rl" === Ik) && (function(kk) {
        kk.nodes().forEach((Fk => gF(kk.node(Fk)))), kk.edges().forEach((Fk => {
          var Ik;
          let Xk = kk.edge(Fk);
          null == (Ik = Xk.points) || Ik.forEach(gF), Object.hasOwn(Xk, "x") && gF(Xk)
        }))
      }(kk), dF(kk))
    }

    function dF(kk) {
      kk.nodes().forEach((Fk => YF(kk.node(Fk)))), kk.edges().forEach((Fk => YF(kk.edge(Fk))))
    }

    function YF(kk) {
      let Fk = kk.width;
      kk.width = kk.height, kk.height = Fk
    }

    function AF(kk) {
      kk.y = -kk.y
    }

    function gF(kk) {
      let Fk = kk.x;
      kk.x = kk.y, kk.y = Fk
    }

    function mF(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        Ik = {},
        Xk = kk.nodes().filter((Fk => !kk.children(Fk).length)),
        Tk = Xk.map((Fk => kk.node(Fk).rank)),
        ik = FF(mk(Math.max, Tk) + 1).map((() => []));
      return Xk.sort(((Fk, Ik) => kk.node(Fk).rank - kk.node(Ik).rank)).forEach((function Xk(Tk) {
        if (Ik[Tk]) return;
        Ik[Tk] = !0;
        let yk = kk.node(Tk);
        ik[yk.rank].push(Tk);
        let lk = kk.successors(Tk);
        lk && [...lk].sort(((Ik, Xk) => function(Ik, Xk) {
          let Tk = kk.node(Ik),
            ik = kk.node(Xk);
          return iF(Fk, Tk, ik)
        }(Ik, Xk))).forEach(Xk)
      })), ik
    }

    function hF(kk, Fk) {
      let Ik = 0;
      for (let Xk = 1; Xk < Fk.length; ++Xk) Ik += rF(kk, Fk[Xk - 1], Fk[Xk]);
      return Ik
    }

    function rF(kk, Fk, Ik) {
      let Xk = function(kk, Fk) {
          return kk.reduce(((kk, Ik, Xk) => (kk[Ik] = Fk[Xk], kk)), {})
        }(Ik, Ik.map(((kk, Fk) => Fk))),
        Tk = Fk.flatMap((Fk => {
          let Ik = kk.outEdges(Fk);
          return Ik ? Ik.map((Fk => ({
            pos: Xk[Fk.w],
            weight: kk.edge(Fk).weight
          }))).sort(((kk, Fk) => kk.pos - Fk.pos)) : []
        })),
        ik = 1;
      for (; ik < Ik.length;) ik <<= 1;
      let yk = 2 * ik - 1;
      ik -= 1;
      let lk = new Array(yk).fill(0),
        ak = 0;
      return Tk.forEach((kk => {
        let Fk = kk.pos + ik;
        lk[Fk] += kk.weight;
        let Ik = 0;
        for (; Fk > 0;) Fk % 2 && (Ik += lk[Fk + 1]), Fk = Fk - 1 >> 1, lk[Fk] += kk.weight;
        ak += kk.weight * Ik
      })), ak
    }

    function DF(kk, Fk) {
      let Ik = {};
      return kk.forEach(((kk, Fk) => {
          let Xk = {
            indegree: 0,
            in: [],
            out: [],
            vs: [kk.v],
            i: Fk
          };
          void 0 !== kk.barycenter && (Xk.barycenter = kk.barycenter, Xk.weight = kk.weight), Ik[kk.v] = Xk
        })), Fk.edges().forEach((kk => {
          let Fk = Ik[kk.v],
            Xk = Ik[kk.w];
          void 0 !== Fk && void 0 !== Xk && (Xk.indegree++, Fk.out.push(Xk))
        })),
        function(kk) {
          let Fk = [];

          function Ik(kk) {
            return Fk => {
              Fk.merged || (void 0 === Fk.barycenter || void 0 === kk.barycenter || Fk.barycenter >= kk.barycenter) && function(kk, Fk) {
                let Ik = 0,
                  Xk = 0;
                kk.weight && (Ik += kk.barycenter * kk.weight, Xk += kk.weight), Fk.weight && (Ik += Fk.barycenter * Fk.weight, Xk += Fk.weight), kk.vs = Fk.vs.concat(kk.vs), kk.barycenter = Ik / Xk, kk.weight = Xk, kk.i = Math.min(Fk.i, kk.i), Fk.merged = !0
              }(kk, Fk)
            }
          }

          function Xk(Fk) {
            return Ik => {
              Ik.in.push(Fk), 0 === --Ik.indegree && kk.push(Ik)
            }
          }
          for (; kk.length;) {
            let Tk = kk.pop();
            Fk.push(Tk), Tk.in.reverse().forEach(Ik(Tk)), Tk.out.forEach(Xk(Tk))
          }
          return Fk.filter((kk => !kk.merged)).map((kk => IF(kk, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(Ik).filter((kk => !kk.indegree)))
    }

    function MF(kk, Fk, Ik, Xk, Tk) {
      let ik = {},
        yk = null,
        lk = null,
        ak = Tk;
      "boolean" == typeof Fk ? (ak = Fk, ik = {}) : Fk && (ik = Fk, yk = null != Ik ? Ik : null, lk = null != Xk ? Xk : null);
      let qk = function(kk, Fk) {
          let Ik = {
            lhs: [],
            rhs: []
          };
          return kk.forEach((kk => {
            Fk(kk) ? Ik.lhs.push(kk) : Ik.rhs.push(kk)
          })), Ik
        }(kk, (kk => Object.hasOwn(kk, "barycenter"))),
        Lk = qk.lhs,
        tk = qk.rhs.sort(((kk, Fk) => Fk.i - kk.i)),
        Zk = [],
        jk = 0,
        ek = 0,
        wk = 0;
      Lk.sort(function(kk, Fk, Ik) {
        return (Xk, Tk) => {
          if (Xk.barycenter < Tk.barycenter) return -1;
          if (Xk.barycenter > Tk.barycenter) return 1;
          if (kk && ("string" == typeof Xk.vs[0] || "string" == typeof Tk.vs[0])) {
            let Ik = kk.node(Xk.vs[0]),
              ik = kk.node(Tk.vs[0]),
              yk = iF(Fk, Ik, ik);
            if (0 !== yk) return yk
          }
          return Ik ? Tk.i - Xk.i : Xk.i - Tk.i
        }
      }(lk, yk, !!ak));
      for (let [Jk, xk] of Object.entries(ik)) {
        let kk = Lk.findIndex((kk => kk.vs[0] === Jk));
        Lk.splice(kk + 1, 0, xk)
      }
      wk = kI(Zk, tk, wk), Lk.forEach((kk => {
        wk += kk.vs.length, Zk.push(kk.vs), jk += kk.barycenter * kk.weight, ek += kk.weight, wk = kI(Zk, tk, wk)
      }));
      let Hk = {
        vs: Zk.flat(1)
      };
      return ek && (Hk.barycenter = jk / ek, Hk.weight = ek), Hk
    }

    function kI(kk, Fk, Ik) {
      let Xk;
      for (; Fk.length && (Xk = Fk[Fk.length - 1]).i <= Ik;) Fk.pop(), kk.push(Xk.vs), Ik++;
      return Ik
    }

    function FI(kk, Fk, Ik, Xk, Tk) {
      var ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk;
      let Hk = null,
        Jk = Tk;
      "boolean" == typeof Xk ? (Jk = Xk, Hk = null) : void 0 !== Xk && (Hk = Xk);
      let xk = kk.children(Fk),
        Pk = kk.node(Fk),
        Kk = Pk ? Pk.borderLeft : void 0,
        Qk = Pk ? Pk.borderRight : void 0,
        sk = {};
      Kk && (xk = xk.filter((kk => kk !== Kk && kk !== Qk)));
      let Vk = function(kk) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Fk => {
          let Ik = kk.inEdges(Fk);
          if (!Ik || !Ik.length) return {
            v: Fk
          };
          {
            let Xk = Ik.reduce(((Fk, Ik) => {
              let Xk = kk.edge(Ik),
                Tk = kk.node(Ik.v);
              return {
                sum: Fk.sum + Xk.weight * Tk.order,
                weight: Fk.weight + Xk.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Fk,
              barycenter: Xk.sum / Xk.weight,
              weight: Xk.weight
            }
          }
        }))
      }(kk, xk);
      Vk.forEach((Fk => {
        if (kk.children(Fk.v).length) {
          let {
            result: Xk
          } = FI(kk, Fk.v, Ik, Hk, Jk);
          sk[Fk.v] = Xk, Object.hasOwn(Xk, "barycenter") && function(kk, Fk) {
            void 0 !== kk.barycenter ? (kk.barycenter = (kk.barycenter * kk.weight + Fk.barycenter * Fk.weight) / (kk.weight + Fk.weight), kk.weight += Fk.weight) : (kk.barycenter = Fk.barycenter, kk.weight = Fk.weight)
          }(Fk, Xk)
        }
      }));
      let zk = DF(Vk, Ik);
      ! function(kk, Fk) {
        kk.forEach((kk => {
          kk.vs = kk.vs.flatMap((kk => Fk[kk] ? Fk[kk].vs : kk))
        }))
      }(zk, sk);
      let Sk = {},
        vk = !1;
      for (let Ok = 0; Ok < zk.length; Ok++)
        for (let Fk = Ok + 1; Fk < zk.length; Fk++)
          if (zk[Ok] && zk[Fk] && null != (ik = zk[Ok]) && ik.barycenter && null != (yk = zk[Fk]) && yk.barycenter && (null == (lk = zk[Ok]) ? void 0 : lk.barycenter) === zk[Fk].barycenter) {
            let Ik = null != (qk = null == (ak = zk[Ok]) ? void 0 : ak.vs[0]) ? qk : "",
              Xk = null != (tk = null == (Lk = zk[Fk]) ? void 0 : Lk.vs[0]) ? tk : "",
              Tk = kk.node(Ik),
              ik = kk.node(Xk);
            if ("edge" === Tk.dummy && "edge" === ik.dummy && (null == (Zk = Tk.edgeObj) ? void 0 : Zk.v) === (null == (jk = ik.edgeObj) ? void 0 : jk.v) && (null == (ek = Tk.edgeObj) ? void 0 : ek.w) === (null == (wk = ik.edgeObj) ? void 0 : wk.w)) {
              if (Tk.edgeLabel.reversed) {
                Sk[Xk] = zk[Ok], zk.splice(Ok, 1), Ok--;
                break
              }
              Sk[Ik] = zk[Fk], zk.splice(Fk, 1), Fk--
            } else vk = !0
          } let Ek = MF(zk, Sk, Hk, kk, Jk);
      if (Kk && Qk) {
        Ek.vs = [Kk, Ek.vs, Qk].flat(1);
        let Fk = kk.predecessors(Kk);
        if (Fk && Fk.length) {
          let Ik = kk.node(Fk[0]),
            Xk = kk.predecessors(Qk),
            Tk = kk.node(Xk[0]);
          Object.hasOwn(Ek, "barycenter") || (Ek.barycenter = 0, Ek.weight = 0), Ek.barycenter = (Ek.barycenter * Ek.weight + Ik.order + Tk.order) / (Ek.weight + 2), Ek.weight += 2
        }
      }
      return Object.defineProperty(Ek, "result", {
        value: Ek,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Ek, "usedBias", {
        value: vk,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Ek
    }

    function II(kk, Fk, Ik, Xk) {
      Xk || (Xk = kk.nodes());
      let Tk = function(kk) {
          let Fk;
          for (; kk.hasNode(Fk = kF("_root")););
          return Fk
        }(kk),
        ik = new Wk({
          compound: !0
        }).setGraph({
          root: Tk
        }).setDefaultNodeLabel((Fk => kk.node(Fk)));
      return Xk.forEach((Xk => {
        let yk = kk.node(Xk),
          lk = kk.parent(Xk);
        if (yk.rank === Fk || yk.minRank <= Fk && Fk <= yk.maxRank) {
          ik.setNode(Xk), ik.setParent(Xk, lk || Tk);
          let ak = kk[Ik](Xk);
          ak && ak.forEach((Fk => {
            let Ik = Fk.v === Xk ? Fk.w : Fk.v,
              Tk = ik.edge(Ik, Xk),
              yk = void 0 !== Tk ? Tk.weight : 0;
            ik.setEdge(Ik, Xk, {
              weight: kk.edge(Fk).weight + yk
            })
          })), Object.hasOwn(yk, "minRank") && ik.setNode(Xk, {
            borderLeft: yk.borderLeft[Fk],
            borderRight: yk.borderRight[Fk]
          })
        }
      })), ik
    }

    function XI(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Fk.customOrder) return void Fk.customOrder(kk, XI);
      let Xk = hk(kk),
        Tk = TI(kk, FF(1, Xk + 1), "inEdges"),
        ik = TI(kk, FF(Xk - 1, -1, -1), "outEdges"),
        yk = mF(kk, Ik);
      if (yI(kk, yk), Fk.disableOptimalOrderHeuristic) return;
      let lk, ak = Number.POSITIVE_INFINITY,
        qk = Fk.constraints || [];
      for (let Lk = 0, tk = 0; tk < 4; ++Lk, ++tk) {
        iI(Lk % 2 ? Tk : ik, Lk % 4 >= 2, qk, Ik), yk = Yk(kk);
        let Fk = hF(kk, yk);
        Fk < ak ? (tk = 0, lk = Object.assign({}, yk), ak = Fk) : Fk === ak && (lk = structuredClone(yk))
      }
      yI(kk, lk)
    }

    function TI(kk, Fk, Ik) {
      let Xk = new Map,
        Tk = (kk, Fk) => {
          Xk.has(kk) || Xk.set(kk, []), Xk.get(kk).push(Fk)
        };
      for (let ik of kk.nodes()) {
        let Fk = kk.node(ik);
        if ("number" == typeof Fk.rank && Tk(Fk.rank, ik), "number" == typeof Fk.minRank && "number" == typeof Fk.maxRank)
          for (let kk = Fk.minRank; kk <= Fk.maxRank; kk++) kk !== Fk.rank && Tk(kk, ik)
      }
      return Fk.map((function(Fk) {
        return II(kk, Fk, Ik, Xk.get(Fk) || [])
      }))
    }

    function iI(kk, Fk, Ik, Xk) {
      let Tk = !0,
        ik = new Wk;
      kk.forEach((function(kk) {
        Ik.forEach((kk => ik.setEdge(kk.left, kk.right)));
        let yk = kk.graph().root,
          {
            result: lk,
            usedBias: ak
          } = FI(kk, yk, ik, Xk, Tk);
        Fk && ak && (Tk = !Tk), lk.vs.forEach(((Fk, Ik) => kk.node(Fk).order = Ik)),
          function(kk, Fk, Ik) {
            let Xk, Tk = {};
            Ik.forEach((Ik => {
              let ik, yk, lk = kk.parent(Ik);
              for (; lk;) {
                if (ik = kk.parent(lk), ik ? (yk = Tk[ik], Tk[ik] = lk) : (yk = Xk, Xk = lk), yk && yk !== lk) return void Fk.setEdge(yk, lk);
                lk = ik
              }
            }))
          }(kk, ik, lk.vs)
      }))
    }

    function yI(kk, Fk) {
      Object.values(Fk).forEach((Fk => Fk.forEach(((Fk, Ik) => kk.node(Fk).order = Ik))))
    }

    function lI(kk, Fk, Ik) {
      if (Fk > Ik) {
        let kk = Fk;
        Fk = Ik, Ik = kk
      }
      let Xk = kk[Fk];
      Xk || (kk[Fk] = Xk = {}), Xk[Ik] = !0
    }

    function aI(kk, Fk, Ik) {
      if (Fk > Ik) {
        let kk = Fk;
        Fk = Ik, Ik = kk
      }
      let Xk = kk[Fk];
      return void 0 !== Xk && Object.hasOwn(Xk, Ik)
    }

    function qI(kk, Fk, Ik, Xk) {
      let Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        ik = {},
        yk = function(kk, Fk, Ik, Xk) {
          let Tk = new Wk,
            ik = kk.graph(),
            yk = function(kk, Fk, Ik) {
              return (Xk, Tk, ik) => {
                let yk, lk = Xk.node(Tk),
                  ak = Xk.node(ik),
                  qk = 0;
                if (qk += lk.width / 2, Object.hasOwn(lk, "labelpos")) switch (lk.labelpos.toLowerCase()) {
                  case "l":
                    yk = -lk.width / 2;
                    break;
                  case "r":
                    yk = lk.width / 2
                }
                if (yk && (qk += Ik ? yk : -yk), yk = void 0, qk += (lk.dummy ? Fk : kk) / 2, qk += (ak.dummy ? Fk : kk) / 2, qk += ak.width / 2, Object.hasOwn(ak, "labelpos")) switch (ak.labelpos.toLowerCase()) {
                  case "l":
                    yk = ak.width / 2;
                    break;
                  case "r":
                    yk = -ak.width / 2
                }
                return yk && (qk += Ik ? yk : -yk), qk
              }
            }(ik.nodesep, ik.edgesep, Xk);
          return Fk.forEach((Fk => {
            let Xk;
            Fk.forEach((Fk => {
              let ik = Ik[Fk];
              if (void 0 !== ik) {
                if (Tk.setNode(ik), void 0 !== Xk) {
                  let lk = Ik[Xk];
                  if (void 0 !== lk) {
                    let Ik = Tk.edge(lk, ik);
                    Tk.setEdge(lk, ik, Math.max(yk(kk, Fk, Xk), Ik || 0))
                  }
                }
                Xk = Fk
              }
            }))
          })), Tk
        }(kk, Fk, Ik, Tk),
        lk = Tk ? "borderLeft" : "borderRight";

      function ak(kk, Fk) {
        let Ik = yk.nodes().slice(),
          Xk = {},
          Tk = Ik.pop();
        for (; Tk;) {
          if (Xk[Tk]) kk(Tk);
          else {
            Xk[Tk] = !0, Ik.push(Tk);
            for (let kk of Fk(Tk)) Ik.push(kk)
          }
          Tk = Ik.pop()
        }
      }
      return ak((function(kk) {
        let Fk = yk.inEdges(kk);
        ik[kk] = Fk ? Fk.reduce(((kk, Fk) => {
          var Ik;
          let Xk = null != (Ik = ik[Fk.v]) ? Ik : 0,
            Tk = yk.edge(Fk);
          return Math.max(kk, Xk + (void 0 !== Tk ? Tk : 0))
        }), 0) : 0
      }), (function(kk) {
        return yk.predecessors(kk) || []
      })), ak((function(Fk) {
        let Ik = yk.outEdges(Fk),
          Xk = Number.POSITIVE_INFINITY;
        Ik && (Xk = Ik.reduce(((kk, Fk) => {
          let Ik = ik[Fk.w],
            Xk = yk.edge(Fk);
          return Math.min(kk, (void 0 !== Ik ? Ik : 0) - (void 0 !== Xk ? Xk : 0))
        }), Number.POSITIVE_INFINITY));
        let Tk = kk.node(Fk);
        Xk !== Number.POSITIVE_INFINITY && Tk.borderType !== lk && (ik[Fk] = Math.max(void 0 !== ik[Fk] ? ik[Fk] : 0, Xk))
      }), (function(kk) {
        return yk.successors(kk) || []
      })), Object.keys(Xk).forEach((kk => {
        var Fk;
        let Xk = Ik[kk];
        void 0 !== Xk && (ik[kk] = null != (Fk = ik[Xk]) ? Fk : 0)
      })), ik
    }

    function LI(kk, Fk) {
      let Ik, Xk = Yk(kk),
        Tk = Object.assign(function(kk, Fk) {
          let Ik = {};
          return Fk.length && Fk.reduce((function(Fk, Xk) {
            let Tk = 0,
              ik = 0,
              yk = Fk.length,
              lk = Xk[Xk.length - 1];
            return Xk.forEach(((Fk, ak) => {
              let qk = function(kk, Fk) {
                  if (kk.node(Fk).dummy) {
                    let Ik = kk.predecessors(Fk);
                    if (Ik) return Ik.find((Fk => kk.node(Fk).dummy))
                  }
                }(kk, Fk),
                Lk = qk ? kk.node(qk).order : yk;
              (qk || Fk === lk) && (Xk.slice(ik, ak + 1).forEach((Fk => {
                let Xk = kk.predecessors(Fk);
                Xk && Xk.forEach((Xk => {
                  let ik = kk.node(Xk),
                    yk = ik.order;
                  (yk < Tk || Lk < yk) && (!ik.dummy || !kk.node(Fk).dummy) && lI(Ik, Xk, Fk)
                }))
              })), ik = ak + 1, Tk = Lk)
            })), Xk
          })), Ik
        }(kk, Xk), function(kk, Fk) {
          let Ik = {};

          function Xk(Fk, Xk, Tk, ik, yk) {
            FF(Xk, Tk).forEach((Xk => {
              let Tk = Fk[Xk];
              if (void 0 !== Tk && kk.node(Tk).dummy) {
                let Fk = kk.predecessors(Tk);
                Fk && Fk.forEach((Fk => {
                  if (void 0 === Fk) return;
                  let Xk = kk.node(Fk);
                  Xk.dummy && (Xk.order < ik || Xk.order > yk) && lI(Ik, Fk, Tk)
                }))
              }
            }))
          }
          return Fk.length && Fk.reduce((function(Fk, Ik) {
            let Tk = -1,
              ik = -1,
              yk = 0;
            return Ik.forEach(((lk, ak) => {
              if ("border" === kk.node(lk).dummy) {
                let Fk = kk.predecessors(lk);
                if (Fk && Fk.length) {
                  let lk = Fk[0];
                  if (void 0 === lk) return;
                  ik = kk.node(lk).order, Xk(Ik, yk, ak, Tk, ik), yk = ak, Tk = ik
                }
              }
              Xk(Ik, yk, Ik.length, ik, Fk.length)
            })), Ik
          })), Ik
        }(kk, Xk)),
        ik = {};
      ["u", "d"].forEach((yk => {
        Ik = "u" === yk ? Xk : Object.values(Xk).reverse(), ["l", "r"].forEach((Xk => {
          "r" === Xk && (Ik = Ik.map((kk => Object.values(kk).reverse())));
          let lk = function(kk, Fk, Ik, Xk, Tk) {
              let ik = {},
                yk = {},
                lk = {};
              return Fk.forEach((kk => {
                kk.forEach(((kk, Fk) => {
                  ik[kk] = kk, yk[kk] = kk, lk[kk] = Fk
                }))
              })), Fk.forEach((Fk => {
                let ak = -1,
                  qk = -1,
                  Lk = !1,
                  tk = Fk,
                  Zk = Fk.findIndex((Fk => (null == Tk ? void 0 : Tk.includes(Fk)) || tI(Fk, kk, Tk)));
                Zk > 0 && (tk = [Fk[Zk], ...Fk.slice(0, Zk), ...Fk.slice(Zk + 1)], Lk = !0), tk.forEach((Fk => {
                  var tk;
                  let Zk = Xk(Fk);
                  if (Zk && Zk.length) {
                    null != Tk && Tk.includes(Fk) && (Zk = Zk.filter((Fk => tI(Fk, kk, Tk))));
                    let Xk = Zk.sort(((kk, Fk) => {
                        let Ik = lk[kk],
                          Xk = lk[Fk];
                        return (void 0 !== Ik ? Ik : 0) - (void 0 !== Xk ? Xk : 0)
                      })),
                      jk = (Xk.length - 1) / 2;
                    for (let kk = Math.floor(jk), Tk = Math.ceil(jk); kk <= Tk; ++kk) {
                      let Tk = Xk[kk];
                      if (void 0 === Tk) continue;
                      let Zk = lk[Tk];
                      if (void 0 !== Zk && yk[Fk] === Fk && ak < Zk && lk[Tk] !== qk && !aI(Ik, Fk, Tk)) {
                        let kk = ik[Tk];
                        void 0 !== kk && (yk[Tk] = Fk, yk[Fk] = ik[Fk] = kk, ak = Zk, Lk && (ak = -1, qk = null != (tk = lk[Tk]) ? tk : -1, Lk = !1))
                      }
                    }
                  }
                }))
              })), {
                root: ik,
                align: yk
              }
            }(kk, Ik, Tk, (Fk => ("u" === yk ? kk.predecessors(Fk) : kk.successors(Fk)) || []), Fk),
            ak = qI(kk, Ik, lk.root, lk.align, "r" === Xk);
          "r" === Xk && (ak = XF(ak, (kk => -kk))), ik[yk + Xk] = ak
        }))
      }));
      let yk = function(kk, Fk) {
        return Object.values(Fk).reduce(((Fk, Ik) => {
          let Xk = Number.NEGATIVE_INFINITY,
            Tk = Number.POSITIVE_INFINITY;
          Object.entries(Ik).forEach((Fk => {
            let [Ik, ik] = Fk, yk = function(kk, Fk) {
              return kk.node(Fk).width
            }(kk, Ik) / 2;
            Xk = Math.max(ik + yk, Xk), Tk = Math.min(ik - yk, Tk)
          }));
          let ik = Xk - Tk;
          return ik < Fk[0] && (Fk = [ik, Ik]), Fk
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(kk, ik);
      return function(kk, Fk) {
          let Ik = Object.values(Fk),
            Xk = mk(Math.min, Ik),
            Tk = mk(Math.max, Ik);
          ["u", "d"].forEach((Ik => {
            ["l", "r"].forEach((ik => {
              let yk = Ik + ik,
                lk = kk[yk];
              if (!lk || lk === Fk) return;
              let ak = Object.values(lk),
                qk = Xk - mk(Math.min, ak);
              "l" !== ik && (qk = Tk - mk(Math.max, ak)), qk && (kk[yk] = XF(lk, (kk => kk + qk)))
            }))
          }))
        }(ik, yk),
        function(kk) {
          let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            Ik = kk.ul;
          return Ik ? XF(Ik, ((Ik, Xk) => {
            var Tk, ik;
            if (Fk) {
              let Ik = Fk.toLowerCase(),
                Tk = kk[Ik];
              if (Tk && void 0 !== Tk[Xk]) return Tk[Xk]
            }
            let yk = Object.values(kk).map((kk => {
              let Fk = kk[Xk];
              return void 0 !== Fk ? Fk : 0
            })).sort(((kk, Fk) => kk - Fk));
            return ((null != (Tk = yk[1]) ? Tk : 0) + (null != (ik = yk[2]) ? ik : 0)) / 2
          })) : {}
        }(ik, kk.graph().align)
    }

    function tI(kk, Fk, Ik) {
      var Xk;
      if (!Ik) return !1;
      let Tk = null == (Xk = Fk.node(kk)) ? void 0 : Xk.edgeObj;
      if (!Tk || Fk.node(kk).edgeLabel.reversed) return !1;
      let ik = Ik.indexOf(null == Tk ? void 0 : Tk.v),
        yk = Ik.indexOf(null == Tk ? void 0 : Tk.w);
      return -1 !== ik && -1 !== yk && ik === (yk + 1) % Ik.length || ik === (yk - 1) % Ik.length
    }

    function ZI(kk, Fk) {
      (function(kk) {
        let Fk = Yk(kk),
          Ik = kk.graph(),
          Xk = Ik.ranksep,
          Tk = Ik.rankalign,
          ik = 0;
        Fk.forEach((Fk => {
          let Ik = Fk.reduce(((Fk, Ik) => {
            var Xk;
            let Tk = null != (Xk = kk.node(Ik).height) ? Xk : 0;
            return Fk > Tk ? Fk : Tk
          }), 0);
          Fk.forEach((Fk => {
            let Xk = kk.node(Fk);
            Xk.y = "top" === Tk ? ik + Xk.height / 2 : "bottom" === Tk ? ik + Ik - Xk.height / 2 : ik + Ik / 2
          })), ik += Ik + Xk
        }))
      })(kk = Bk(kk)), Object.entries(LI(kk, Fk)).forEach((Fk => {
        let [Ik, Xk] = Fk;
        return kk.node(Ik).x = Xk
      }))
    }
    var jI = new WeakMap;

    function eI(kk) {
      return HI(kk, Dk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), kk
    }

    function wI(kk, Fk, Ik) {
      let Xk = Fk;
      for (; void 0 !== Xk;) {
        let Fk = kk.parent(Xk);
        if (Fk === Ik) return Xk;
        Xk = Fk
      }
    }

    function HI(kk, Fk, Ik) {
      var Xk;
      let Tk = kk.nodes().filter((Fk => kk.children(Fk).length)),
        ik = {};
      Tk.forEach((Xk => {
        let Tk = kk.node(Xk);
        if (Tk && Tk.rankdir) {
          let yk = new Wk({
            multigraph: !0,
            compound: !0
          });
          yk.setGraph({
            rankdir: Tk.rankdir
          });
          let lk = kk.children(Xk);
          lk.forEach((Fk => {
            let Ik = {
              ...kk.node(Fk)
            };
            yk.setNode(Fk, Ik);
            let Tk = kk.parent(Fk);
            Tk && Tk !== Xk && lk.includes(Tk) && yk.setParent(Fk, Tk)
          }));
          let ak = new Set;
          kk.edges().forEach((Fk => {
            let Ik = wI(kk, Fk.v, Xk),
              Tk = wI(kk, Fk.w, Xk);
            if (Ik && Tk && Ik !== Tk) {
              let Xk = `${Ik}\0${Tk}`;
              ak.has(Xk) || (ak.add(Xk), yk.setEdge(Ik, Tk, {
                ...kk.edge(Fk)
              }))
            }
          })), HI(yk, Fk, Ik);
          let qk = vI(yk);
          JI(qk, Fk, Ik, null), xI(yk, qk);
          let Lk = 1 / 0,
            tk = 1 / 0,
            Zk = -1 / 0,
            jk = -1 / 0;
          yk.nodes().forEach((kk => {
            if (kk === Xk) return;
            let Fk = yk.node(kk);
            Fk && "number" == typeof Fk.x && "number" == typeof Fk.y && "number" == typeof Fk.width && "number" == typeof Fk.height && (Lk = Math.min(Lk, Fk.x - Fk.width / 2), Zk = Math.max(Zk, Fk.x + Fk.width / 2), tk = Math.min(tk, Fk.y - Fk.height / 2), jk = Math.max(jk, Fk.y + Fk.height / 2))
          })), (!isFinite(Lk) || !isFinite(tk) || !isFinite(Zk) || !isFinite(jk)) && (Lk = tk = 0, Zk = jk = 0);
          let ek = Zk - Lk,
            wk = jk - tk;
          ik[Xk] = {
            minX: Lk,
            lk: tk,
            maxX: Zk,
            ak: jk,
            width: ek,
            height: wk,
            offsetX: Lk,
            offsetY: tk
          }, Tk._dagreClusterSubgraph = yk
        }
      }));
      let yk = [],
        lk = new Map;
      Tk.forEach((Fk => {
        let Ik = kk.node(Fk);
        Ik && Ik.rankdir && ik[Fk] && lk.set(Fk, (kk.children(Fk) || []).filter((kk => kk !== Fk)))
      }));
      let ak = new Set([...lk.values()].flat()),
        qk = new Map;
      lk.forEach(((Fk, Ik) => {
        ak.has(Ik) || qk.set(Ik, (Fk => {
          let Ik = [],
            Xk = (kk.children(Fk) || []).filter((kk => kk !== Fk));
          for (; Xk.length > 0;) {
            let Fk = Xk.shift();
            Ik.push(Fk), (kk.children(Fk) || []).filter((kk => kk !== Fk)).forEach((kk => Xk.push(kk)))
          }
          return Ik
        })(Ik))
      }));
      let Lk = new Set([...qk.values()].flat()),
        tk = kk => {
          for (let [Fk, Ik] of qk)
            if (Ik.includes(kk)) return Fk;
          return kk
        },
        Zk = [];
      kk.edges().forEach((Fk => {
        (Lk.has(Fk.v) || Lk.has(Fk.w)) && Zk.push({
          edge: Fk,
          label: kk.edge(Fk)
        })
      }));
      let jk = new Map;
      Lk.forEach((Fk => {
        let Ik = kk.parent(Fk);
        jk.set(Fk, "string" == typeof Ik ? Ik : void 0)
      })), qk.forEach(((Fk, Ik) => {
        let Xk = kk.node(Ik),
          Tk = [];
        Fk.forEach((Fk => {
          let Ik = kk.node(Fk);
          Ik && (Tk.push({
            id: Fk,
            node: Ik,
            parent: jk.get(Fk)
          }), kk.removeNode(Fk))
        }));
        let lk = Zk.filter((kk => {
            let {
              edge: Ik
            } = kk;
            return Fk.includes(Ik.v) || Fk.includes(Ik.w)
          })),
          ak = ik[Ik];
        Xk && (yk.push({
          clusterId: Ik,
          subgraph: Xk._dagreClusterSubgraph,
          bounds: ak,
          children: Fk,
          removedNodes: Tk,
          removedEdges: lk
        }), Xk.width = ak.width, Xk.height = ak.height)
      }));
      let ek = new Set;
      Zk.forEach((Fk => {
        let {
          edge: Ik,
          label: Xk
        } = Fk, Tk = tk(Ik.v), ik = tk(Ik.w);
        if (Tk !== ik && kk.hasNode(Tk) && kk.hasNode(ik)) {
          let Fk = `${Tk}\0${ik}`;
          ek.has(Fk) || (ek.add(Fk), kk.setEdge(Tk, ik, {
            ...Xk,
            width: 0,
            height: 0
          }))
        }
      }));
      let wk = vI(kk),
        Hk = JI(wk, Fk, Ik, null != (Xk = jI.get(kk)) ? Xk : null);
      jI.set(kk, Hk), xI(kk, wk), ek.forEach((Fk => {
        let Ik = Fk.indexOf("\0"),
          Xk = Fk.slice(0, Ik),
          Tk = Fk.slice(Ik + 1);
        kk.hasEdge(Xk, Tk) && kk.removeEdge(Xk, Tk)
      })), yk.forEach((Fk => {
        let {
          clusterId: Ik,
          subgraph: Xk,
          bounds: Tk,
          removedNodes: ik,
          removedEdges: yk
        } = Fk;
        var lk, ak;
        let qk = kk.node(Ik),
          Lk = null != (lk = null == qk ? void 0 : qk.x) ? lk : 0,
          tk = null != (ak = null == qk ? void 0 : qk.y) ? ak : 0,
          Zk = (Tk.minX + Tk.maxX) / 2,
          jk = (Tk.lk + Tk.ak) / 2;
        ik.forEach((Fk => {
          let {
            id: Ik,
            node: Xk,
            parent: Tk
          } = Fk;
          kk.setNode(Ik, Xk), void 0 !== Tk && kk.setParent(Ik, Tk)
        })), yk.forEach((Fk => {
          let {
            edge: Ik,
            label: Xk
          } = Fk;
          kk.setEdge(Ik, Xk)
        })), Xk.nodes().forEach((Fk => {
          if (Fk === Ik) return;
          let Tk = Xk.node(Fk),
            ik = kk.node(Fk);
          ik && Tk && "number" == typeof Tk.x && "number" == typeof Tk.y && (ik.x = Lk + (Tk.x - Zk), ik.y = tk + (Tk.y - jk))
        })), delete qk._dagreClusterSubgraph
      })), Tk.forEach((Fk => {
        var Ik, Xk;
        let Tk = kk.node(Fk),
          yk = ik[Fk];
        if (Tk && Tk.rankdir && Tk._dagreClusterSubgraph && yk) {
          let ik = Tk._dagreClusterSubgraph,
            lk = null != (Ik = Tk.x) ? Ik : 0,
            ak = null != (Xk = Tk.y) ? Xk : 0,
            qk = (yk.minX + yk.maxX) / 2,
            Lk = (yk.lk + yk.ak) / 2;
          ik.nodes().forEach((Ik => {
            if (Ik === Fk) return;
            let Xk = ik.node(Ik),
              Tk = kk.node(Ik);
            if (Tk && Xk && "number" == typeof Xk.x && "number" == typeof Xk.y) {
              let kk = Xk.x - qk,
                Fk = Xk.y - Lk;
              Tk.x = lk + kk, Tk.y = ak + Fk
            }
          })), delete Tk._dagreClusterSubgraph
        }
      }))
    }

    function JI(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Tk, ik;
      let yk = !1 !== (null == Ik ? void 0 : Ik.useDynamic),
        lk = yk && null != (Tk = null == Xk ? void 0 : Xk.graph) ? Tk : null,
        ak = yk && null != (ik = null == Xk ? void 0 : Xk.rawNodes) ? ik : null;
      Fk("    makeSpaceForEdgeLabels", (() => function(kk) {
        let Fk = kk.graph();
        Fk.ranksep /= 2, kk.edges().forEach((Ik => {
          var Xk;
          let Tk = kk.edge(Ik);
          Tk.minlen *= 2, "c" !== (null != (Xk = Tk.labelpos) ? Xk : "r").toLowerCase() && ("TB" === Fk.rankdir || "BT" === Fk.rankdir ? Tk.width += Tk.labeloffset : Tk.height += Tk.labeloffset)
        }))
      }(kk))), Fk("    removeSelfEdges", (() => function(kk) {
        kk.edges().forEach((Fk => {
          if (Fk.v === Fk.w) {
            let Ik = kk.node(Fk.v);
            Ik.selfEdges || (Ik.selfEdges = []), Ik.selfEdges.push({
              e: Fk,
              label: kk.edge(Fk)
            }), kk.removeEdge(Fk)
          }
        }))
      }(kk))), Fk("    acyclic", (() => eF(kk, lk))), Fk("    nestingGraph.run", (() => NF(kk))), Fk("    rank", (() => bF(Bk(kk)))), Fk("    injectEdgeLabelProxies", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Ik = kk.edge(Fk);
          if (Ik.width && Ik.height) {
            let Ik = kk.node(Fk.v),
              Xk = {
                rank: (kk.node(Fk.w).rank - Ik.rank) / 2 + Ik.rank,
                e: Fk
              };
            fk(kk, "edge-proxy", Xk, "_ep")
          }
        }))
      }(kk))), Fk("    removeEmptyRanks", (() => function(kk) {
        let Fk = kk.nodes().map((Fk => kk.node(Fk).rank)).filter((kk => void 0 !== kk)),
          Ik = mk(Math.min, Fk),
          Xk = [];
        kk.nodes().forEach((Fk => {
          let Tk = kk.node(Fk).rank - Ik;
          Xk[Tk] || (Xk[Tk] = []), Xk[Tk].push(Fk)
        }));
        let Tk = 0,
          ik = kk.graph().nodeRankFactor;
        Array.from(Xk).forEach(((Fk, Ik) => {
          void 0 === Fk && Ik % ik !== 0 ? --Tk : void 0 !== Fk && Tk && Fk.forEach((Fk => kk.node(Fk).rank += Tk))
        }))
      }(kk))), Fk("    nestingGraph.cleanup", (() => function(kk) {
        let Fk = kk.graph();
        kk.removeNode(Fk.nestingRoot), delete Fk.nestingRoot, kk.edges().forEach((Fk => {
          kk.edge(Fk).nestingEdge && kk.removeEdge(Fk)
        }))
      }(kk))), Fk("    normalizeRanks", (() => function(kk) {
        let Fk = kk.nodes().map((Fk => {
            let Ik = kk.node(Fk).rank;
            return void 0 === Ik ? Number.MAX_VALUE : Ik
          })),
          Ik = mk(Math.min, Fk);
        kk.nodes().forEach((Fk => {
          let Xk = kk.node(Fk);
          Object.hasOwn(Xk, "rank") && (Xk.rank -= Ik)
        }))
      }(kk))), Fk("    assignRankMinMax", (() => function(kk) {
        let Fk = 0;
        kk.nodes().forEach((Ik => {
          let Xk = kk.node(Ik);
          Xk.borderTop && (Xk.minRank = kk.node(Xk.borderTop).rank, Xk.maxRank = kk.node(Xk.borderBottom).rank, Fk = Math.max(Fk, Xk.maxRank))
        })), kk.graph().maxRank = Fk
      }(kk))), Fk("    removeEdgeLabelProxies", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          let Ik = kk.node(Fk);
          if ("edge-proxy" === Ik.dummy) {
            let Xk = Ik;
            kk.edge(Xk.e).labelRank = Ik.rank, kk.removeNode(Fk)
          }
        }))
      }(kk))), Fk("    normalize.run", (() => wF(kk))), Fk("    parentDummyChains", (() => CF(kk))), Fk("    addBorderSegments", (() => WF(kk))), Fk("    order", (() => XI(kk, Ik, ak))), Fk("    insertSelfEdges", (() => function(kk) {
        Yk(kk).forEach((Fk => {
          let Ik = 0;
          Fk.forEach(((Fk, Xk) => {
            let Tk = kk.node(Fk);
            "number" != typeof Tk.rank && (Tk.rank = 0), Tk.order = Xk + Ik, (Tk.selfEdges || []).forEach((Fk => {
              fk(kk, "selfedge", {
                width: Fk.label.width,
                height: Fk.label.height,
                rank: Tk.rank,
                order: Xk + ++Ik,
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
            })), delete Tk.selfEdges
          }))
        }))
      }(kk))), Fk("    adjustCoordinateSystem", (() => function(kk) {
        var Fk;
        let Ik = null == (Fk = kk.graph().rankdir) ? void 0 : Fk.toLowerCase();
        ("lr" === Ik || "rl" === Ik) && dF(kk)
      }(kk))), Fk("    position", (() => ZI(kk, Ik.corePath))), Fk("    positionSelfEdges", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          let Ik = kk.node(Fk),
            Xk = kk => "number" == typeof kk && isFinite(kk);
          if ("selfedge" === Ik.dummy) {
            let Tk = Ik,
              ik = kk.node(Tk.e.v),
              yk = Xk(null == ik ? void 0 : ik.x) ? ik.x : 0,
              lk = Xk(null == ik ? void 0 : ik.y) ? ik.y : 0,
              ak = Xk(null == ik ? void 0 : ik.width) ? ik.width : 0,
              qk = Xk(null == ik ? void 0 : ik.height) ? ik.height : 0,
              Lk = Xk(Ik.x) ? Ik.x : yk,
              tk = Xk(Ik.y) ? Ik.y : lk,
              Zk = ak / 2,
              jk = qk / 2;
            Tk.edgeLabel.points = [{
              x: Lk + Zk,
              y: tk - jk
            }, {
              x: Lk + Zk,
              y: tk - jk
            }, {
              x: Lk,
              y: tk
            }, {
              x: Lk - Zk,
              y: tk + jk
            }, {
              x: Lk - Zk,
              y: tk + jk
            }, {
              x: Lk,
              y: tk
            }, {
              x: Lk,
              y: tk
            }], Tk.edgeLabel.x = Lk, Tk.edgeLabel.y = tk, kk.setEdge(Tk.e, Tk.edgeLabel), kk.removeNode(Fk)
          } else Ik && Array.isArray(Ik.selfEdges) && Ik.selfEdges.forEach((kk => {
            if (!Array.isArray(kk.label.points) || 7 !== kk.label.points.length) {
              let Fk = Xk(Ik.x) ? Ik.x : 0,
                Tk = Xk(Ik.y) ? Ik.y : 0,
                ik = (Xk(Ik.width) ? Ik.width : 0) / 2,
                yk = (Xk(Ik.height) ? Ik.height : 0) / 2;
              kk.label.points = [{
                x: Fk + ik,
                y: Tk - yk
              }, {
                x: Fk + ik,
                y: Tk - yk
              }, {
                x: Fk,
                y: Tk
              }, {
                x: Fk - ik,
                y: Tk + yk
              }, {
                x: Fk - ik,
                y: Tk + yk
              }, {
                x: Fk,
                y: Tk
              }, {
                x: Fk,
                y: Tk
              }]
            }
          }))
        }))
      }(kk)));
      let qk = JSON.parse(JSON.stringify(kk._nodes));
      return Fk("    removeBorderNodes", (() => function(kk) {
        kk.nodes().forEach((Fk => {
          if (kk.children(Fk).length) {
            let Ik = kk.node(Fk),
              Xk = kk.node(Ik.borderTop),
              Tk = kk.node(Ik.borderBottom),
              ik = kk.node(Ik.borderLeft[Ik.borderLeft.length - 1]),
              yk = kk.node(Ik.borderRight[Ik.borderRight.length - 1]);
            Ik.width = Math.abs(yk.x - ik.x), Ik.height = Math.abs(Tk.y - Xk.y), Ik.x = ik.x + Ik.width / 2, Ik.y = Xk.y + Ik.height / 2
          }
        })), kk.nodes().forEach((Fk => {
          "border" === kk.node(Fk).dummy && kk.removeNode(Fk)
        }))
      }(kk))), Fk("    normalize.undo", (() => function(kk) {
        kk.graph().dummyChains.forEach((Fk => {
          let Ik, Xk = kk.node(Fk),
            Tk = Xk.edgeLabel;
          for (kk.setEdge(Xk.edgeObj, Tk); Xk.dummy;) Ik = kk.successors(Fk)[0], kk.removeNode(Fk), Tk.points.push({
            x: Xk.x,
            y: Xk.y
          }), "edge-label" === Xk.dummy && (Tk.x = Xk.x, Tk.y = Xk.y, Tk.width = Xk.width, Tk.height = Xk.height), Fk = Ik, Xk = kk.node(Fk)
        }))
      }(kk))), Fk("    fixupEdgeLabelCoords", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Ik = kk.edge(Fk);
          if (Object.hasOwn(Ik, "x")) switch (("l" === Ik.labelpos || "r" === Ik.labelpos) && (Ik.width -= Ik.labeloffset), Ik.labelpos) {
            case "l":
              Ik.x -= Ik.width / 2 + Ik.labeloffset;
              break;
            case "r":
              Ik.x += Ik.width / 2 + Ik.labeloffset
          }
        }))
      }(kk))), Fk("    undoCoordinateSystem", (() => BF(kk))), Fk("    translateGraph", (() => function(kk) {
        let Fk = Number.POSITIVE_INFINITY,
          Ik = 0,
          Xk = Number.POSITIVE_INFINITY,
          Tk = 0,
          ik = kk.graph(),
          yk = ik.marginx || 0,
          lk = ik.marginy || 0;

        function ak(kk) {
          let ik = kk.x,
            yk = kk.y,
            lk = kk.width,
            ak = kk.height;
          Fk = Math.min(Fk, ik - lk / 2), Ik = Math.max(Ik, ik + lk / 2), Xk = Math.min(Xk, yk - ak / 2), Tk = Math.max(Tk, yk + ak / 2)
        }
        kk.nodes().forEach((Fk => ak(kk.node(Fk)))), kk.edges().forEach((Fk => {
          let Ik = kk.edge(Fk);
          Object.hasOwn(Ik, "x") && ak(Ik)
        })), Fk -= yk, Xk -= lk, kk.nodes().forEach((Ik => {
          let Tk = kk.node(Ik);
          Tk.x -= Fk, Tk.y -= Xk
        })), kk.edges().forEach((Ik => {
          let Tk = kk.edge(Ik);
          Tk.points.forEach((kk => {
            kk.x -= Fk, kk.y -= Xk
          })), Object.hasOwn(Tk, "x") && (Tk.x -= Fk), Object.hasOwn(Tk, "y") && (Tk.y -= Xk)
        })), ik.width = Ik - Fk + yk, ik.height = Tk - Xk + lk
      }(kk))), Fk("    assignNodeIntersects", (() => function(kk) {
        kk.edges().forEach((Fk => {
          if (Fk.v === Fk.w) return;
          let Ik, Xk, Tk = kk.edge(Fk),
            ik = kk.node(Fk.v),
            yk = kk.node(Fk.w);
          Tk.points ? (Ik = Tk.points[0], Xk = Tk.points[Tk.points.length - 1]) : (Tk.points = [], Ik = yk, Xk = ik), Tk.points.unshift(dk(ik, Ik)), Tk.points.push(dk(yk, Xk))
        }))
      }(kk))), Fk("    reversePoints", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Ik = kk.edge(Fk);
          Ik.reversed && Ik.points.reverse()
        }))
      }(kk))), Fk("    acyclic.undo", (() => function(kk) {
        kk.edges().forEach((Fk => {
          let Ik = kk.edge(Fk);
          if (Ik.reversed) {
            kk.removeEdge(Fk);
            let Xk = Ik.forwardName;
            delete Ik.reversed, delete Ik.forwardName, kk.setEdge(Fk.w, Fk.v, Ik, Xk)
          }
        }))
      }(kk))), {
        graph: kk,
        rawNodes: qk
      }
    }

    function xI(kk, Fk) {
      kk.nodes().forEach((Ik => {
        let Xk = kk.node(Ik),
          Tk = Fk.node(Ik);
        Xk && (Xk.x = Tk.x, Xk.y = Tk.y, Xk.order = Tk.order, Xk.rank = Tk.rank, Fk.children(Ik).length && (Xk.width = Tk.width, Xk.height = Tk.height))
      })), kk.edges().forEach((Ik => {
        let Xk = kk.edge(Ik),
          Tk = Fk.edge(Ik);
        Xk.points = Tk.points, Object.hasOwn(Tk, "x") && (Xk.x = Tk.x, Xk.y = Tk.y)
      })), kk.graph().width = Fk.graph().width, kk.graph().height = Fk.graph().height
    }
    var PI = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      KI = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      QI = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      sI = ["width", "height", "rank"],
      VI = {
        width: 0,
        height: 0
      },
      zI = ["minlen", "weight", "width", "height", "labeloffset"],
      SI = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      oI = ["labelpos"];

    function vI(kk) {
      let Fk = new Wk({
          multigraph: !0,
          compound: !0
        }),
        Ik = OI(kk.graph());
      return Fk.setGraph(Object.assign({}, KI, EI(Ik, PI), IF(Ik, QI))), kk.nodes().forEach((Ik => {
        let Xk = EI(OI(kk.node(Ik)), sI);
        Object.keys(VI).forEach((kk => {
          void 0 === Xk[kk] && (Xk[kk] = VI[kk])
        })), Fk.setNode(Ik, Xk);
        let Tk = kk.parent(Ik);
        void 0 !== Tk && Fk.setParent(Ik, Tk)
      })), kk.edges().forEach((Ik => {
        let Xk = OI(kk.edge(Ik));
        Fk.setEdge(Ik, Object.assign({}, SI, EI(Xk, zI), IF(Xk, oI)))
      })), Fk
    }

    function EI(kk, Fk) {
      return XF(IF(kk, Fk), Number)
    }

    function OI(kk) {
      let Fk = {};
      return kk && Object.entries(kk).forEach((kk => {
        let [Ik, Xk] = kk;
        "string" == typeof Ik && (Ik = Ik.toLowerCase()), Fk[Ik] = Xk
      })), Fk
    }

    function nI(kk) {
      let Fk = Yk(kk),
        Ik = new Wk({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return kk.nodes().forEach((Fk => {
        Ik.setNode(Fk, {
          label: Fk
        }), Ik.setParent(Fk, "layer" + kk.node(Fk).rank)
      })), kk.edges().forEach((kk => Ik.setEdge(kk.v, kk.w, {}, kk.name))), Fk.forEach(((kk, Fk) => {
        let Xk = "layer" + Fk;
        Ik.setNode(Xk, {
          rank: "same"
        }), kk.reduce(((kk, Fk) => (Ik.setEdge(kk, Fk, {
          style: "invis"
        }), Fk)))
      })), Ik
    }
    var GI = {
        time: rk,
        notime: Dk
      },
      pI = {
        graphlib: ik,
        version: yF,
        layout: eI,
        debug: nI,
        util: {
          time: rk,
          notime: Dk
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);