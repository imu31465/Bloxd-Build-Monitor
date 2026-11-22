/*! For license information please see 3lwmg.118.8db6e84f.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6295: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Graph: () => tk,
      debug: () => Ii,
      default: () => Qi,
      graphlib: () => Sk,
      layout: () => Ui,
      util: () => zi,
      version: () => be
    });
    var Dk = Object.defineProperty,
      fk = (kk, ek, ik) => ((kk, ek, ik) => ek in kk ? Dk(kk, ek, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ik
      }) : kk[ek] = ik)(kk, "symbol" != typeof ek ? ek + "" : ek, ik),
      Sk = {};
    ((kk, ek) => {
      for (var ik in ek) Dk(kk, ik, {
        get: ek[ik],
        enumerable: !0
      })
    })(Sk, {
      Graph: () => tk,
      alg: () => lk
    });
    var bk = Object.defineProperty,
      rk = (kk, ek) => {
        for (var ik in ek) bk(kk, ik, {
          get: ek[ik],
          enumerable: !0
        })
      },
      Pk = class {
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
        setNodes(kk, ek) {
          return kk.forEach((kk => {
            void 0 !== ek ? this.setNode(kk, ek) : this.setNode(kk)
          })), this
        }
        setNode(kk, ek) {
          return kk in this._nodes ? (arguments.length > 1 && (this._nodes[kk] = ek), this) : (this._nodes[kk] = arguments.length > 1 ? ek : this._defaultNodeLabelFn(kk), this._isCompound && (this._parent[kk] = "\0", this._children[kk] = {}, this._children["\0"][kk] = !0), this._in[kk] = {}, this._preds[kk] = {}, this._out[kk] = {}, this._sucs[kk] = {}, ++this._nodeCount, this)
        }
        node(kk) {
          return this._nodes[kk]
        }
        hasNode(kk) {
          return kk in this._nodes
        }
        removeNode(kk) {
          if (kk in this._nodes) {
            let ek = kk => this.removeEdge(this._edgeObjs[kk]);
            delete this._nodes[kk], this._isCompound && (this._removeFromParentsChildList(kk), delete this._parent[kk], this.children(kk).forEach((kk => {
              this.setParent(kk)
            })), delete this._children[kk]), Object.keys(this._in[kk]).forEach(ek), delete this._in[kk], delete this._preds[kk], Object.keys(this._out[kk]).forEach(ek), delete this._out[kk], delete this._sucs[kk], --this._nodeCount
          }
          return this
        }
        setParent(kk, ek) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === ek) ek = "\0";
          else {
            for (let ik = ek += ""; void 0 !== ik; ik = this.parent(ik))
              if (ik === kk) throw new Error("Setting " + ek + " as parent of " + kk + " would create a cycle");
            this.setNode(ek)
          }
          return this.setNode(kk), this._removeFromParentsChildList(kk), this._parent[kk] = ek, this._children[ek][kk] = !0, this
        }
        parent(kk) {
          if (this._isCompound) {
            let ek = this._parent[kk];
            if ("\0" !== ek) return ek
          }
        }
        children() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let ek = this._children[kk];
            if (ek) return Object.keys(ek)
          } else {
            if ("\0" === kk) return this.nodes();
            if (this.hasNode(kk)) return []
          }
          return []
        }
        predecessors(kk) {
          let ek = this._preds[kk];
          if (ek) return Object.keys(ek)
        }
        successors(kk) {
          let ek = this._sucs[kk];
          if (ek) return Object.keys(ek)
        }
        neighbors(kk) {
          let ek = this.predecessors(kk);
          if (ek) {
            let ik = new Set(ek),
              Dk = this.successors(kk);
            if (Dk)
              for (let kk of Dk) ik.add(kk);
            return Array.from(ik.values())
          }
        }
        isLeaf(kk) {
          var ek;
          let ik;
          return ik = this.isDirected() ? this.successors(kk) : this.neighbors(kk), 0 === (null != (ek = null == ik ? void 0 : ik.length) ? ek : 0)
        }
        filterNodes(kk) {
          let ek = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          ek.setGraph(this.graph()), Object.entries(this._nodes).forEach((ik => {
            let [Dk, fk] = ik;
            kk(Dk) && ek.setNode(Dk, fk)
          })), Object.values(this._edgeObjs).forEach((kk => {
            ek.hasNode(kk.v) && ek.hasNode(kk.w) && ek.setEdge(kk, this.edge(kk))
          }));
          let ik = {},
            Dk = kk => {
              let fk = this.parent(kk);
              return !fk || ek.hasNode(fk) ? (ik[kk] = fk, fk) : fk in ik ? ik[fk] : Dk(fk)
            };
          return this._isCompound && ek.nodes().forEach((kk => ek.setParent(kk, Dk(kk)))), ek
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
        setPath(kk, ek) {
          return kk.reduce(((kk, ik) => (void 0 !== ek ? this.setEdge(kk, ik, ek) : this.setEdge(kk, ik), ik))), this
        }
        setEdge(kk, ek, ik, Dk) {
          let fk, Sk, bk, rk, Pk = !1;
          "object" == typeof kk && null !== kk && "v" in kk ? (fk = kk.v, Sk = kk.w, bk = kk.name, 2 === arguments.length && (rk = ek, Pk = !0)) : (fk = kk, Sk = ek, bk = Dk, arguments.length > 2 && (rk = ik, Pk = !0)), fk = "" + fk, Sk = "" + Sk, void 0 !== bk && (bk = "" + bk);
          let Mk = Kk(this._isDirected, fk, Sk, bk);
          if (Mk in this._edgeLabels) return Pk && (this._edgeLabels[Mk] = rk), this;
          if (void 0 !== bk && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(fk), this.setNode(Sk), this._edgeLabels[Mk] = Pk ? rk : this._defaultEdgeLabelFn(fk, Sk, bk);
          let xk = function(kk, ek, ik, Dk) {
            let fk = "" + ek,
              Sk = "" + ik;
            if (!kk && fk > Sk) {
              let kk = fk;
              fk = Sk, Sk = kk
            }
            let bk = {
              v: fk,
              w: Sk
            };
            return Dk && (bk.name = Dk), bk
          }(this._isDirected, fk, Sk, bk);
          return fk = xk.v, Sk = xk.w, Object.freeze(xk), this._edgeObjs[Mk] = xk, mk(this._preds[Sk], fk), mk(this._sucs[fk], Sk), this._in[Sk][Mk] = xk, this._out[fk][Mk] = xk, this._edgeCount++, this
        }
        edge(kk, ek, ik) {
          let Dk = 1 === arguments.length ? xk(this._isDirected, kk) : Kk(this._isDirected, kk, ek, ik);
          return this._edgeLabels[Dk]
        }
        edgeAsObj(kk, ek, ik) {
          let Dk = 1 === arguments.length ? this.edge(kk) : this.edge(kk, ek, ik);
          return "object" != typeof Dk || null === Dk ? {
            label: Dk
          } : Dk
        }
        hasEdge(kk, ek, ik) {
          return (1 === arguments.length ? xk(this._isDirected, kk) : Kk(this._isDirected, kk, ek, ik)) in this._edgeLabels
        }
        removeEdge(kk, ek, ik) {
          let Dk = 1 === arguments.length ? xk(this._isDirected, kk) : Kk(this._isDirected, kk, ek, ik),
            fk = this._edgeObjs[Dk];
          if (fk) {
            let kk = fk.v,
              ek = fk.w;
            delete this._edgeLabels[Dk], delete this._edgeObjs[Dk], Mk(this._preds[ek], kk), Mk(this._sucs[kk], ek), delete this._in[ek][Dk], delete this._out[kk][Dk], this._edgeCount--
          }
          return this
        }
        inEdges(kk, ek) {
          return this.isDirected() ? this.filterEdges(this._in[kk], kk, ek) : this.nodeEdges(kk, ek)
        }
        outEdges(kk, ek) {
          return this.isDirected() ? this.filterEdges(this._out[kk], kk, ek) : this.nodeEdges(kk, ek)
        }
        nodeEdges(kk, ek) {
          if (kk in this._nodes) return this.filterEdges({
            ...this._in[kk],
            ...this._out[kk]
          }, kk, ek)
        }
        _removeFromParentsChildList(kk) {
          delete this._children[this._parent[kk]][kk]
        }
        filterEdges(kk, ek, ik) {
          if (!kk) return;
          let Dk = Object.values(kk);
          return ik ? Dk.filter((kk => kk.v === ek && kk.w === ik || kk.v === ik && kk.w === ek)) : Dk
        }
      };

    function mk(kk, ek) {
      kk[ek] ? kk[ek]++ : kk[ek] = 1
    }

    function Mk(kk, ek) {
      void 0 !== kk[ek] && !--kk[ek] && delete kk[ek]
    }

    function Kk(kk, ek, ik, Dk) {
      let fk = "" + ek,
        Sk = "" + ik;
      if (!kk && fk > Sk) {
        let kk = fk;
        fk = Sk, Sk = kk
      }
      return fk + "\x01" + Sk + "\x01" + (void 0 === Dk ? "\0" : Dk)
    }

    function xk(kk, ek) {
      return Kk(kk, ek.v, ek.w, ek.name)
    }

    function nk(kk) {
      let ek = {
          options: {
            directed: kk.isDirected(),
            multigraph: kk.isMultigraph(),
            compound: kk.isCompound()
          },
          nodes: Uk(kk),
          edges: Hk(kk)
        },
        ik = kk.graph();
      return void 0 !== ik && (ek.value = structuredClone(ik)), ek
    }

    function Uk(kk) {
      return kk.nodes().map((ek => {
        let ik = kk.node(ek),
          Dk = kk.parent(ek),
          fk = {
            v: ek
          };
        return void 0 !== ik && (fk.value = ik), void 0 !== Dk && (fk.parent = Dk), fk
      }))
    }

    function Hk(kk) {
      return kk.edges().map((ek => {
        let ik = kk.edge(ek),
          Dk = {
            v: ek.v,
            w: ek.w
          };
        return void 0 !== ek.name && (Dk.name = ek.name), void 0 !== ik && (Dk.value = ik), Dk
      }))
    }

    function wk(kk) {
      let ek = new Pk(kk.options);
      return void 0 !== kk.value && ek.setGraph(kk.value), kk.nodes.forEach((kk => {
        ek.setNode(kk.v, kk.value), kk.parent && ek.setParent(kk.v, kk.parent)
      })), kk.edges.forEach((kk => {
        ek.setEdge({
          v: kk.v,
          w: kk.w,
          name: kk.name
        }, kk.value)
      })), ek
    }
    rk({}, {
      read: () => wk,
      write: () => nk
    });
    var lk = {};
    rk(lk, {
      CycleException: () => uk,
      bellmanFord: () => yk,
      components: () => Yk,
      dijkstra: () => Ak,
      dijkstraAll: () => jk,
      findCycles: () => dk,
      floydWarshall: () => Fk,
      isAcyclic: () => Ik,
      postorder: () => Ek,
      preorder: () => hk,
      prim: () => ak,
      shortestPaths: () => Wk,
      tarjan: () => sk,
      topsort: () => qk
    });
    var pk = () => 1;

    function yk(kk, ek, ik, Dk) {
      return function(kk, ek, ik, Dk) {
        let fk, Sk = {},
          bk = 0,
          rk = kk.nodes(),
          Pk = function(kk) {
            let ek = Sk[kk.v],
              Dk = Sk[kk.w];
            if (!ek || !Dk) return;
            let bk = ik(kk);
            ek.distance + bk < Dk.distance && (Sk[kk.w] = {
              distance: ek.distance + bk,
              predecessor: kk.v
            }, fk = !0)
          },
          mk = function() {
            rk.forEach((function(kk) {
              Dk(kk).forEach((function(ek) {
                let ik = ek.v === kk ? ek.v : ek.w,
                  Dk = ik === ek.v ? ek.w : ek.v;
                Pk({
                  v: ik,
                  w: Dk
                })
              }))
            }))
          };
        rk.forEach((function(kk) {
          let ik = kk === ek ? 0 : Number.POSITIVE_INFINITY;
          Sk[kk] = {
            distance: ik,
            predecessor: ""
          }
        }));
        let Mk = rk.length;
        for (let Kk = 1; Kk < Mk && (fk = !1, bk++, mk(), fk); Kk++);
        if (bk === Mk - 1 && (fk = !1, mk(), fk)) throw new Error("The graph contains a negative weight cycle");
        return Sk
      }(kk, String(ek), ik || pk, Dk || function(ek) {
        var ik;
        return null != (ik = kk.outEdges(ek)) ? ik : []
      })
    }

    function Yk(kk) {
      let ek, ik = {},
        Dk = [];

      function fk(Dk) {
        var Sk, bk;
        Dk in ik || (ik[Dk] = !0, ek.push(Dk), null == (Sk = kk.successors(Dk)) || Sk.forEach(fk), null == (bk = kk.predecessors(Dk)) || bk.forEach(fk))
      }
      return kk.nodes().forEach((function(kk) {
        ek = [], fk(kk), ek.length && Dk.push(ek)
      })), Dk
    }
    var Lk = class {
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
          let ek = this._keyIndices[kk];
          if (void 0 !== ek) return this._arr[ek].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(kk, ek) {
          let ik = this._keyIndices,
            Dk = String(kk);
          if (!(Dk in ik)) {
            let kk = this._arr,
              fk = kk.length;
            return ik[Dk] = fk, kk.push({
              key: Dk,
              priority: ek
            }), this._decrease(fk), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let kk = this._arr.pop();
          return delete this._keyIndices[kk.key], this._heapify(0), kk.key
        }
        decrease(kk, ek) {
          let ik = this._keyIndices[kk];
          if (void 0 === ik) throw new Error(`Key not found: ${kk}`);
          let Dk = this._arr[ik].priority;
          if (ek > Dk) throw new Error(`New priority is greater than current priority. Key: ${kk} Old: ${Dk} New: ${ek}`);
          this._arr[ik].priority = ek, this._decrease(ik)
        }
        _heapify(kk) {
          let ek = this._arr,
            ik = 2 * kk,
            Dk = ik + 1,
            fk = kk;
          ik < ek.length && (fk = ek[ik].priority < ek[fk].priority ? ik : fk, Dk < ek.length && (fk = ek[Dk].priority < ek[fk].priority ? Dk : fk), fk !== kk && (this._swap(kk, fk), this._heapify(fk)))
        }
        _decrease(kk) {
          let ek, ik = this._arr,
            Dk = ik[kk].priority;
          for (; 0 !== kk && (ek = kk >> 1, !(ik[ek].priority < Dk));) this._swap(kk, ek), kk = ek
        }
        _swap(kk, ek) {
          let ik = this._arr,
            Dk = this._keyIndices,
            fk = ik[kk],
            Sk = ik[ek];
          ik[kk] = Sk, ik[ek] = fk, Dk[Sk.key] = kk, Dk[fk.key] = ek
        }
      },
      Ck = () => 1;

    function Ak(kk, ek, ik, Dk) {
      return function(kk, ek, ik, Dk) {
        let fk, Sk, bk = {},
          rk = new Lk,
          Pk = function(kk) {
            let ek = kk.v !== fk ? kk.v : kk.w,
              Dk = bk[ek];
            if (!Dk) return;
            let Pk = ik(kk),
              mk = Sk.distance + Pk;
            if (Pk < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + kk + " Weight: " + Pk);
            mk < Dk.distance && (Dk.distance = mk, Dk.predecessor = fk, rk.decrease(ek, mk))
          };
        for (kk.nodes().forEach((function(kk) {
            let ik = kk === ek ? 0 : Number.POSITIVE_INFINITY;
            bk[kk] = {
              distance: ik,
              predecessor: ""
            }, rk.add(kk, ik)
          })); rk.size() > 0;) {
          fk = rk.removeMin();
          let kk = bk[fk];
          if (!kk || kk.distance === Number.POSITIVE_INFINITY) break;
          Sk = kk, Dk(fk).forEach(Pk)
        }
        return bk
      }(kk, String(ek), ik || Ck, Dk || function(ek) {
        var ik;
        return null != (ik = kk.outEdges(ek)) ? ik : []
      })
    }

    function jk(kk, ek, ik) {
      return kk.nodes().reduce((function(Dk, fk) {
        return Dk[fk] = Ak(kk, fk, ek, ik), Dk
      }), {})
    }

    function sk(kk) {
      let ek = 0,
        ik = [],
        Dk = {},
        fk = [];

      function Sk(bk) {
        var rk;
        let Pk = Dk[bk] = {
          onStack: !0,
          lowlink: ek,
          index: ek++
        };
        if (ik.push(bk), null == (rk = kk.successors(bk)) || rk.forEach((function(kk) {
            if (kk in Dk) {
              let ek = Dk[kk];
              null != ek && ek.onStack && (Pk.lowlink = Math.min(Pk.lowlink, ek.index))
            } else {
              Sk(kk);
              let ek = Dk[kk];
              ek && (Pk.lowlink = Math.min(Pk.lowlink, ek.lowlink))
            }
          })), Pk.lowlink === Pk.index) {
          let kk, ek = [];
          do {
            kk = ik.pop();
            let fk = Dk[kk];
            fk && (fk.onStack = !1), ek.push(kk)
          } while (bk !== kk);
          fk.push(ek)
        }
      }
      return kk.nodes().forEach((function(kk) {
        kk in Dk || Sk(kk)
      })), fk
    }

    function dk(kk) {
      return sk(kk).filter((function(ek) {
        var ik;
        let Dk = ek[0];
        return !!Dk && (ek.length > 1 || 1 === ek.length && (null != (ik = kk.outEdges(Dk, Dk)) ? ik : []).length > 0)
      }))
    }
    var Vk = () => 1;

    function Fk(kk, ek, ik) {
      return function(kk, ek, ik) {
        let Dk = {},
          fk = kk.nodes();
        return fk.forEach((function(kk) {
          let Sk = {};
          Dk[kk] = Sk, Sk[kk] = {
            distance: 0,
            predecessor: ""
          }, fk.forEach((function(ek) {
            kk !== ek && (Sk[ek] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ik(kk).forEach((function(ik) {
            let Dk = ik.v === kk ? ik.w : ik.v,
              fk = ek(ik);
            Sk[Dk] = {
              distance: fk,
              predecessor: kk
            }
          }))
        })), fk.forEach((function(kk) {
          let ek = Dk[kk];
          ek && fk.forEach((function(ik) {
            let Sk = Dk[ik];
            Sk && fk.forEach((function(ik) {
              let Dk = Sk[kk],
                fk = ek[ik],
                bk = Sk[ik];
              if (Dk && fk && bk) {
                let kk = Dk.distance + fk.distance;
                kk < bk.distance && (bk.distance = kk, bk.predecessor = fk.predecessor)
              }
            }))
          }))
        })), Dk
      }(kk, ek || Vk, ik || function(ek) {
        var ik;
        return null != (ik = kk.outEdges(ek)) ? ik : []
      })
    }
    var uk = class extends Error {
      constructor(kk) {
        super(kk), this.name = "CycleException"
      }
    };

    function qk(kk) {
      let ek = {},
        ik = {},
        Dk = [];
      if (kk.sinks().forEach((function fk(Sk) {
          var bk;
          if (Sk in ik) throw new uk;
          Sk in ek || (ik[Sk] = !0, ek[Sk] = !0, null == (bk = kk.predecessors(Sk)) || bk.forEach(fk), delete ik[Sk], Dk.push(Sk))
        })), Object.keys(ek).length !== kk.nodeCount()) throw new uk;
      return Dk
    }

    function Ik(kk) {
      try {
        qk(kk)
      } catch (ek) {
        if (ek instanceof uk) return !1;
        throw ek
      }
      return !0
    }

    function zk(kk, ek, ik, Dk, fk) {
      Array.isArray(ek) || (ek = [ek]);
      let Sk = ek => {
          var ik;
          return null != (ik = kk.isDirected() ? kk.successors(ek) : kk.neighbors(ek)) ? ik : []
        },
        bk = {};
      return ek.forEach((function(ek) {
        if (!kk.hasNode(ek)) throw new Error("Graph does not have node: " + ek);
        fk = Qk(kk, ek, "post" === ik, bk, Sk, Dk, fk)
      })), fk
    }

    function Qk(kk, ek, ik, Dk, fk, Sk, bk) {
      return ek in Dk || (Dk[ek] = !0, ik || (bk = Sk(bk, ek)), fk(ek).forEach((function(ek) {
        bk = Qk(kk, ek, ik, Dk, fk, Sk, bk)
      })), ik && (bk = Sk(bk, ek))), bk
    }

    function vk(kk, ek, ik) {
      return zk(kk, ek, ik, (function(kk, ek) {
        return kk.push(ek), kk
      }), [])
    }

    function Ek(kk, ek) {
      return vk(kk, ek, "post")
    }

    function hk(kk, ek) {
      return vk(kk, ek, "pre")
    }

    function ak(kk, ek) {
      var ik;
      let Dk, fk = new Pk,
        Sk = {},
        bk = new Lk;

      function rk(kk) {
        let ik = kk.v === Dk ? kk.w : kk.v,
          fk = bk.priority(ik);
        if (void 0 !== fk) {
          let rk = ek(kk);
          rk < fk && (Sk[ik] = Dk, bk.decrease(ik, rk))
        }
      }
      if (0 === kk.nodeCount()) return fk;
      kk.nodes().forEach((function(kk) {
        bk.add(kk, Number.POSITIVE_INFINITY), fk.setNode(kk)
      }));
      let mk = kk.nodes()[0];
      void 0 !== mk && bk.decrease(mk, 0);
      let Mk = !1;
      for (; bk.size() > 0;) {
        if (Dk = bk.removeMin(), Dk in Sk) fk.setEdge(Dk, Sk[Dk]);
        else {
          if (Mk) throw new Error("Input graph is not connected: " + kk);
          Mk = !0
        }
        null == (ik = kk.nodeEdges(Dk)) || ik.forEach(rk)
      }
      return fk
    }

    function Wk(kk, ek, ik, Dk) {
      return function(kk, ek, ik, Dk) {
        if (void 0 === ik) return Ak(kk, ek, ik, Dk);
        let fk = !1,
          Sk = kk.nodes();
        for (let bk = 0; bk < Sk.length; bk++) {
          let rk = Sk[bk];
          if (void 0 === rk) continue;
          let Pk = Dk(rk);
          for (let kk = 0; kk < Pk.length; kk++) {
            let ek = Pk[kk];
            if (!ek) continue;
            let Dk = ek.v === rk ? ek.v : ek.w;
            ik({
              v: Dk,
              w: Dk === ek.v ? ek.w : ek.v
            }) < 0 && (fk = !0)
          }
          if (fk) return yk(kk, ek, ik, Dk)
        }
        return Ak(kk, ek, ik, Dk)
      }(kk, ek, ik, null != Dk ? Dk : ek => {
        var ik;
        return null != (ik = kk.outEdges(ek)) ? ik : []
      })
    }
    var tk = Pk;

    function Xk(kk, ek, ik, Dk) {
      let fk = Dk;
      for (; kk.hasNode(fk);) fk = ke(Dk);
      return ik.dummy = ek, kk.setNode(fk, ik), fk
    }

    function Bk(kk) {
      let ek = new tk({
        multigraph: kk.isMultigraph()
      }).setGraph(kk.graph());
      return kk.nodes().forEach((ik => {
        kk.children(ik).length || ek.setNode(ik, kk.node(ik))
      })), kk.edges().forEach((ik => {
        ek.setEdge(ik, kk.edge(ik))
      })), ek
    }

    function ck(kk, ek) {
      let ik, Dk, fk = kk.x,
        Sk = kk.y,
        bk = ek.x - fk,
        rk = ek.y - Sk,
        Pk = kk.width / 2,
        mk = kk.height / 2;
      if (!bk && !rk) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(rk) * Pk > Math.abs(bk) * mk ? (rk < 0 && (mk = -mk), ik = mk * bk / rk, Dk = mk) : (bk < 0 && (Pk = -Pk), ik = Pk, Dk = Pk * rk / bk), {
        x: fk + ik,
        y: Sk + Dk
      }
    }

    function Tk(kk) {
      let ek = ee(Gk(kk) + 1).map((() => []));
      return kk.nodes().forEach((ik => {
        let Dk = kk.node(ik),
          fk = Dk.rank;
        void 0 !== fk && (ek[fk] || (ek[fk] = []), ek[fk][Dk.order] = ik)
      })), ek
    }

    function Zk(kk, ek, ik, Dk) {
      let fk = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (fk.rank = ik, fk.order = Dk), Xk(kk, "border", fk, ek)
    }
    var Ok = 65535;

    function gk(kk, ek) {
      if (ek.length > Ok) {
        let ik = function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ok,
            ik = [];
          for (let Dk = 0; Dk < kk.length; Dk += ek) {
            let fk = kk.slice(Dk, Dk + ek);
            ik.push(fk)
          }
          return ik
        }(ek);
        return kk(...ik.map((ek => kk(...ek))))
      }
      return kk(...ek)
    }

    function Gk(kk) {
      let ek = kk.nodes().map((ek => {
        let ik = kk.node(ek).rank;
        return void 0 === ik ? Number.MIN_VALUE : ik
      }));
      return gk(Math.max, ek)
    }

    function Nk(kk, ek) {
      let ik = Date.now();
      try {
        return ek()
      } finally {
        console.log(kk + " time: " + (Date.now() - ik) + "ms")
      }
    }

    function Rk(kk, ek) {
      return ek()
    }
    var Jk = 0;

    function ke(kk) {
      return kk + "" + ++Jk
    }

    function ee(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == ek && (ek = kk, kk = 0);
      let Dk = kk => kk < ek;
      ik < 0 && (Dk = kk => ek < kk);
      let fk = [];
      for (let Sk = kk; Dk(Sk); Sk += ik) fk.push(Sk);
      return fk
    }

    function ie(kk, ek) {
      let ik = {};
      for (let Dk of ek) void 0 !== kk[Dk] && (ik[Dk] = kk[Dk]);
      return ik
    }

    function De(kk, ek) {
      let ik;
      return ik = "string" == typeof ek ? kk => kk[ek] : ek, Object.entries(kk).reduce(((kk, ek) => {
        let [Dk, fk] = ek;
        return kk[Dk] = ik(fk, Dk), kk
      }), {})
    }
    var fe = "\0";

    function Se(kk, ek, ik) {
      var Dk, fk, Sk, bk, rk, Pk;
      if (!(kk && ek && ik && "edge" === ek.dummy && "edge" === ik.dummy && ek.edgeObj && ik.edgeObj && kk[ek.edgeObj.v] && kk[ik.edgeObj.v] && kk[ek.edgeObj.w] && kk[ik.edgeObj.w])) return 0;
      let mk = !0;
      ek.edgeObj.w === ik.edgeObj.w && (mk = !1);
      let Mk = mk ? null != (fk = null == (Dk = kk[ek.edgeObj.v]) ? void 0 : Dk.rank) ? fk : NaN : null != (bk = null == (Sk = kk[ek.edgeObj.w]) ? void 0 : Sk.rank) ? bk : NaN,
        Kk = Object.entries(kk).find((kk => {
          var ik, Dk;
          return (null == (ik = kk[1].edgeObj) ? void 0 : ik.v) === ek.edgeObj.v && (null == (Dk = kk[1].edgeObj) ? void 0 : Dk.w) === ek.edgeObj.w && kk[1].rank === Mk
        })),
        xk = Object.entries(kk).find((kk => {
          var ek, Dk;
          return (null == (ek = kk[1].edgeObj) ? void 0 : ek.v) === ik.edgeObj.v && (null == (Dk = kk[1].edgeObj) ? void 0 : Dk.w) === ik.edgeObj.w && kk[1].rank === Mk
        }));
      if (!Kk || !xk) return 0;
      let nk = null != (rk = Kk[1].order) ? rk : NaN,
        Uk = null != (Pk = xk[1].order) ? Pk : NaN;
      return isNaN(nk - Uk) ? 0 : nk - Uk
    }
    var be = "3.1.1";

    function re(kk) {
      kk._prev._next = kk._next, kk._next._prev = kk._prev, delete kk._next, delete kk._prev
    }

    function Pe(kk, ek) {
      if ("_next" !== kk && "_prev" !== kk) return ek
    }
    var me = class {
        constructor() {
          fk(this, "_sentinel");
          let kk = {};
          kk._next = kk._prev = kk, this._sentinel = kk
        }
        dequeue() {
          let kk = this._sentinel,
            ek = kk._prev;
          if (ek !== kk) return re(ek), ek
        }
        enqueue(kk) {
          let ek = this._sentinel;
          kk._prev && kk._next && re(kk), kk._next = ek._next, ek._next._prev = kk, ek._next = kk, kk._prev = ek
        }
        toString() {
          let kk = [],
            ek = this._sentinel,
            ik = ek._prev;
          for (; ik !== ek;) kk.push(JSON.stringify(ik, Pe)), ik = ik._prev;
          return "[" + kk.join(", ") + "]"
        }
      },
      Me = () => 1;

    function Ke(kk, ek) {
      if (kk.nodeCount() <= 1) return [];
      let ik = function(kk, ek) {
        let ik = new tk,
          Dk = 0,
          fk = 0;
        kk.nodes().forEach((kk => {
          ik.setNode(kk, {
            v: kk,
            in: 0,
            out: 0
          })
        })), kk.edges().forEach((kk => {
          let Sk = ik.edge(kk.v, kk.w) || 0,
            bk = ek(kk),
            rk = Sk + bk;
          ik.setEdge(kk.v, kk.w, rk);
          let Pk = ik.node(kk.v),
            mk = ik.node(kk.w);
          fk = Math.max(fk, Pk.out += bk), Dk = Math.max(Dk, mk.in += bk)
        }));
        let Sk = function(kk) {
            let ek = [];
            for (let ik = 0; ik < kk; ik++) ek.push(ik);
            return ek
          }(fk + Dk + 3).map((() => new me)),
          bk = Dk + 1;
        return ik.nodes().forEach((kk => {
          ne(Sk, bk, ik.node(kk))
        })), {
          graph: ik,
          buckets: Sk,
          zeroIdx: bk
        }
      }(kk, ek || Me);
      return function(kk, ek, ik) {
        var Dk;
        let fk, Sk = [],
          bk = ek[ek.length - 1],
          rk = ek[0];
        for (; kk.nodeCount();) {
          for (; fk = rk.dequeue();) xe(kk, ek, ik, fk);
          for (; fk = bk.dequeue();) xe(kk, ek, ik, fk);
          if (kk.nodeCount())
            for (let bk = ek.length - 2; bk > 0; --bk)
              if (fk = null == (Dk = ek[bk]) ? void 0 : Dk.dequeue(), fk) {
                Sk = Sk.concat(xe(kk, ek, ik, fk, !0) || []);
                break
              }
        }
        return Sk
      }(ik.graph, ik.buckets, ik.zeroIdx).flatMap((ek => kk.outEdges(ek.v, ek.w) || []))
    }

    function xe(kk, ek, ik, Dk, fk) {
      let Sk = [],
        bk = fk ? Sk : void 0;
      return (kk.inEdges(Dk.v) || []).forEach((Dk => {
        let bk = kk.edge(Dk),
          rk = kk.node(Dk.v);
        fk && Sk.push({
          v: Dk.v,
          w: Dk.w
        }), rk.out -= bk, ne(ek, ik, rk)
      })), (kk.outEdges(Dk.v) || []).forEach((Dk => {
        let fk = kk.edge(Dk),
          Sk = Dk.w,
          bk = kk.node(Sk);
        bk.in -= fk, ne(ek, ik, bk)
      })), kk.removeNode(Dk.v), bk
    }

    function ne(kk, ek, ik) {
      var Dk, fk, Sk;
      ik.out ? ik.in ? null == (Sk = kk[ik.out - ik.in + ek]) || Sk.enqueue(ik) : null == (fk = kk[kk.length - 1]) || fk.enqueue(ik) : null == (Dk = kk[0]) || Dk.enqueue(ik)
    }

    function Ue(kk, ek) {
      var ik;
      ("greedy" === kk.graph().acyclicer ? Ke(kk, (ik = kk, kk => ik.edge(kk).weight)) : function(kk, ek) {
        let ik = [],
          Dk = {},
          fk = {};

        function Sk(ek) {
          Object.hasOwn(fk, ek) || (fk[ek] = !0, Dk[ek] = !0, kk.outEdges(ek).forEach((kk => {
            Object.hasOwn(Dk, kk.w) ? ik.push(kk) : Sk(kk.w)
          })), delete Dk[ek])
        }

        function bk(Sk) {
          var rk;
          Object.hasOwn(fk, Sk) || (fk[Sk] = !0, Dk[Sk] = !0, null == (rk = kk.outEdges(Sk)) || rk.forEach((fk => {
            var rk, Pk;
            Object.hasOwn(Dk, fk.w) || (null == (rk = ek.node(Sk)) ? void 0 : rk.rank) > (null == (Pk = ek.node(fk.w)) ? void 0 : Pk.rank) && function(kk, ek, ik) {
              let Dk = new Set;

              function fk(ek) {
                var Sk;
                if (kk.sources().includes(ek)) return !0;
                Dk.add(ek);
                for (let bk of null != (Sk = kk.inEdges(ek)) ? Sk : [])
                  if ((bk.v !== ik.v || bk.w !== ik.w) && !Dk.has(bk.v) && fk(bk.v)) return !0;
                return !1
              }
              return fk(ek)
            }(kk, fk.w, fk) ? ik.push(fk) : bk(fk.w)
          })), delete Dk[Sk])
        }
        let rk = Sk;
        return ek && "function" == typeof ek.node && (rk = bk), kk.sources().forEach(rk), kk.nodes().forEach(rk), ik
      }(kk, null != ek ? ek : null)).forEach((ek => {
        let ik = kk.edge(ek);
        kk.removeEdge(ek), ik.forwardName = ek.name, ik.reversed = !0, kk.setEdge(ek.w, ek.v, ik, ke("rev"))
      }))
    }

    function He(kk) {
      kk.graph().dummyChains = [], kk.edges().forEach((ek => function(kk, ek) {
        let ik, Dk, fk, Sk = ek.v,
          bk = kk.node(Sk).rank,
          rk = ek.w,
          Pk = kk.node(rk).rank,
          mk = ek.name,
          Mk = kk.edge(ek),
          Kk = Mk.labelRank;
        if (Pk === bk + 1) return;
        for (kk.removeEdge(ek), fk = 0, ++bk; bk < Pk; ++fk, ++bk) Mk.points = [], Dk = {
          width: 0,
          height: 0,
          edgeLabel: Mk,
          edgeObj: ek,
          rank: bk
        }, ik = Xk(kk, "edge", Dk, "_d"), bk === Kk && (Dk.width = Mk.width, Dk.height = Mk.height, Dk.dummy = "edge-label", Dk.labelpos = Mk.labelpos), kk.setEdge(Sk, ik, {
          weight: Mk.weight
        }, mk), 0 === fk && kk.graph().dummyChains.push(ik), Sk = ik;
        kk.setEdge(Sk, rk, {
          weight: Mk.weight
        }, mk)
      }(kk, ek)))
    }

    function we(kk) {
      let ek = {};
      kk.sources().forEach((function ik(Dk) {
        let fk = kk.node(Dk);
        if (Object.hasOwn(ek, Dk)) return fk.rank;
        ek[Dk] = !0;
        let Sk = kk.outEdges(Dk),
          bk = Sk ? Sk.map((ek => null == ek ? Number.POSITIVE_INFINITY : ik(ek.w) - kk.edge(ek).minlen)) : [],
          rk = gk(Math.min, bk);
        return rk === Number.POSITIVE_INFINITY && (rk = 0), fk.rank = rk
      }))
    }

    function le(kk, ek) {
      return kk.node(ek.w).rank - kk.node(ek.v).rank - kk.edge(ek).minlen
    }
    var pe = function(kk) {
      let ek = new tk({
          directed: !1
        }),
        ik = kk.nodes();
      if (0 === ik.length) throw new Error("Graph must have at least one node");
      let Dk, fk, Sk = ik[0],
        bk = kk.nodeCount();
      for (ek.setNode(Sk, {}); ye(ek, kk) < bk && (Dk = Ye(ek, kk), Dk);) fk = ek.hasNode(Dk.v) ? le(kk, Dk) : -le(kk, Dk), Le(ek, kk, fk);
      return ek
    };

    function ye(kk, ek) {
      return kk.nodes().forEach((function ik(Dk) {
        let fk = ek.nodeEdges(Dk);
        fk && fk.forEach((fk => {
          let Sk = fk.v,
            bk = Dk === Sk ? fk.w : Sk;
          !kk.hasNode(bk) && !le(ek, fk) && (kk.setNode(bk, {}), kk.setEdge(Dk, bk, {}), ik(bk))
        }))
      })), kk.nodeCount()
    }

    function Ye(kk, ek) {
      return ek.edges().reduce(((ik, Dk) => {
        let fk = Number.POSITIVE_INFINITY;
        return kk.hasNode(Dk.v) !== kk.hasNode(Dk.w) && (fk = le(ek, Dk)), fk < ik[0] ? [fk, Dk] : ik
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Le(kk, ek, ik) {
      kk.nodes().forEach((kk => ek.node(kk).rank += ik))
    }
    var {
      preorder: Ce,
      postorder: Ae
    } = lk, je = se;

    function se(kk) {
      kk = function(kk) {
        let ek = (new tk).setGraph(kk.graph());
        return kk.nodes().forEach((ik => ek.setNode(ik, kk.node(ik)))), kk.edges().forEach((ik => {
          let Dk = ek.edge(ik.v, ik.w) || {
              weight: 0,
              minlen: 1
            },
            fk = kk.edge(ik);
          ek.setEdge(ik.v, ik.w, {
            weight: Dk.weight + fk.weight,
            minlen: Math.max(Dk.minlen, fk.minlen)
          })
        })), ek
      }(kk), we(kk);
      let ek, ik, Dk = pe(kk);
      for (Fe(Dk), de(Dk, kk); ek = qe(Dk);) ik = Ie(Dk, kk, ek), ze(Dk, kk, ek, ik)
    }

    function de(kk, ek) {
      let ik = Ae(kk, kk.nodes());
      ik = ik.slice(0, ik.length - 1), ik.forEach((ik => function(kk, ek, ik) {
        let Dk = kk.node(ik).parent,
          fk = kk.edge(ik, Dk);
        fk.cutvalue = Ve(kk, ek, ik)
      }(kk, ek, ik)))
    }

    function Ve(kk, ek, ik) {
      let Dk = kk.node(ik).parent,
        fk = !0,
        Sk = ek.edge(ik, Dk),
        bk = 0;
      Sk || (fk = !1, Sk = ek.edge(Dk, ik)), bk = Sk.weight;
      let rk = ek.nodeEdges(ik);
      return rk && rk.forEach((Sk => {
        let rk = Sk.v === ik,
          Pk = rk ? Sk.w : Sk.v;
        if (Pk !== Dk) {
          let Dk = rk === fk,
            mk = ek.edge(Sk).weight;
          if (bk += Dk ? mk : -mk, function(kk, ek, ik) {
              return kk.hasEdge(ek, ik)
            }(kk, ik, Pk)) {
            let ek = kk.edge(ik, Pk).cutvalue;
            bk += Dk ? -ek : ek
          }
        }
      })), bk
    }

    function Fe(kk, ek) {
      arguments.length < 2 && (ek = kk.nodes()[0]), ue(kk, {}, 1, ek)
    }

    function ue(kk, ek, ik, Dk, fk) {
      let Sk = ik,
        bk = kk.node(Dk);
      ek[Dk] = !0;
      let rk = kk.neighbors(Dk);
      return rk && rk.forEach((fk => {
        Object.hasOwn(ek, fk) || (ik = ue(kk, ek, ik, fk, Dk))
      })), bk.low = Sk, bk.lim = ik++, fk ? bk.parent = fk : delete bk.parent, ik
    }

    function qe(kk) {
      return kk.edges().find((ek => kk.edge(ek).cutvalue < 0))
    }

    function Ie(kk, ek, ik) {
      let Dk = ik.v,
        fk = ik.w;
      ek.hasEdge(Dk, fk) || (Dk = ik.w, fk = ik.v);
      let Sk = kk.node(Dk),
        bk = kk.node(fk),
        rk = Sk,
        Pk = !1;
      return Sk.lim > bk.lim && (rk = bk, Pk = !0), ek.edges().filter((ek => Pk === Qe(kk, kk.node(ek.v), rk) && Pk !== Qe(kk, kk.node(ek.w), rk))).reduce(((kk, ik) => le(ek, ik) < le(ek, kk) ? ik : kk))
    }

    function ze(kk, ek, ik, Dk) {
      let fk = ik.v,
        Sk = ik.w;
      kk.removeEdge(fk, Sk), kk.setEdge(Dk.v, Dk.w, {}), Fe(kk), de(kk, ek),
        function(kk, ek) {
          let ik = kk.nodes().find((ek => !kk.node(ek).parent));
          if (!ik) return;
          let Dk = Ce(kk, [ik]);
          Dk = Dk.slice(1), Dk.forEach((ik => {
            let Dk = kk.node(ik).parent,
              fk = ek.edge(ik, Dk),
              Sk = !1;
            fk || (fk = ek.edge(Dk, ik), Sk = !0), ek.node(ik).rank = ek.node(Dk).rank + (Sk ? fk.minlen : -fk.minlen)
          }))
        }(kk, ek)
    }

    function Qe(kk, ek, ik) {
      return ik.low <= ek.lim && ek.lim <= ik.lim
    }
    se.initLowLimValues = Fe, se.initCutValues = de, se.calcCutValue = Ve, se.leaveEdge = qe, se.enterEdge = Ie, se.exchangeEdges = ze;
    var ve = function(kk) {
      let ek = kk.graph().ranker;
      if ("function" == typeof ek) return ek(kk);
      switch (ek) {
        case "network-simplex":
        default:
          he(kk);
          break;
        case "tight-tree":
          ! function(kk) {
            we(kk), pe(kk)
          }(kk);
          break;
        case "longest-path":
          Ee(kk);
        case "none":
      }
    };
    var Ee = we;

    function he(kk) {
      je(kk)
    }
    var ae = function(kk) {
      let ek = function(kk) {
          let ek = {},
            ik = 0;

          function Dk(fk) {
            let Sk = ik;
            kk.children(fk).forEach(Dk), ek[fk] = {
              low: Sk,
              lim: ik++
            }
          }
          return kk.children(fe).forEach(Dk), ek
        }(kk),
        ik = kk.graph();
      if (!Array.isArray(ik.dummyChains)) return;
      ik.dummyChains.forEach((ik => {
        let Dk = kk.node(ik),
          fk = Dk.edgeObj,
          Sk = function(kk, ek, ik, Dk) {
            let fk, Sk = [],
              bk = [],
              rk = Math.min(ek[ik].low, ek[Dk].low),
              Pk = Math.max(ek[ik].lim, ek[Dk].lim);
            fk = ik;
            do {
              fk = kk.parent(fk), Sk.push(fk)
            } while (fk && (ek[fk].low > rk || Pk > ek[fk].lim));
            let mk = fk,
              Mk = Dk;
            for (;
              (Mk = kk.parent(Mk)) !== mk;) bk.push(Mk);
            return {
              path: Sk.concat(bk.reverse()),
              lca: mk
            }
          }(kk, ek, fk.v, fk.w),
          bk = Sk.path,
          rk = Sk.lca,
          Pk = 0,
          mk = bk[Pk],
          Mk = !0;
        for (; ik !== fk.w;) {
          if (Dk = kk.node(ik), Mk) {
            for (;
              (mk = bk[Pk]) !== rk && kk.node(mk).maxRank < Dk.rank;) Pk++;
            mk === rk && (Mk = !1)
          }
          if (!Mk) {
            for (; Pk < bk.length - 1 && kk.node(bk[Pk + 1]).minRank <= Dk.rank;) Pk++;
            mk = bk[Pk]
          }
          void 0 !== mk && kk.setParent(ik, mk), ik = kk.successors(ik)[0]
        }
      }))
    };

    function We(kk) {
      let ek = Xk(kk, "root", {}, "_root"),
        ik = function(kk) {
          let ek = {};

          function ik(Dk, fk) {
            let Sk = kk.children(Dk);
            Sk && Sk.length && Sk.forEach((kk => ik(kk, fk + 1))), ek[Dk] = fk
          }
          return kk.children(fe).forEach((kk => ik(kk, 1))), ek
        }(kk),
        Dk = Object.values(ik),
        fk = gk(Math.max, Dk) - 1,
        Sk = 2 * fk + 1;
      kk.graph().nestingRoot = ek, kk.edges().forEach((ek => kk.edge(ek).minlen *= Sk));
      let bk = function(kk) {
        return kk.edges().reduce(((ek, ik) => ek + kk.edge(ik).weight), 0)
      }(kk) + 1;
      kk.children(fe).forEach((Dk => {
        te(kk, ek, Sk, bk, fk, ik, Dk)
      })), kk.graph().nodeRankFactor = Sk
    }

    function te(kk, ek, ik, Dk, fk, Sk, bk) {
      var rk;
      let Pk = kk.children(bk);
      if (!Pk.length) return void(bk !== ek && kk.setEdge(ek, bk, {
        weight: 0,
        minlen: ik
      }));
      let mk = Zk(kk, "_bt"),
        Mk = Zk(kk, "_bb"),
        Kk = kk.node(bk);
      kk.setParent(mk, bk), Kk.borderTop = mk, kk.setParent(Mk, bk), Kk.borderBottom = Mk, Pk.forEach((rk => {
        var Pk;
        te(kk, ek, ik, Dk, fk, Sk, rk);
        let Kk = kk.node(rk),
          xk = Kk.borderTop ? Kk.borderTop : rk,
          nk = Kk.borderBottom ? Kk.borderBottom : rk,
          Uk = Kk.borderTop ? Dk : 2 * Dk,
          Hk = xk !== nk ? 1 : fk - (null != (Pk = Sk[bk]) ? Pk : 0) + 1;
        kk.setEdge(mk, xk, {
          weight: Uk,
          minlen: Hk,
          nestingEdge: !0
        }), kk.setEdge(nk, Mk, {
          weight: Uk,
          minlen: Hk,
          nestingEdge: !0
        })
      })), kk.parent(bk) || kk.setEdge(ek, mk, {
        weight: 0,
        minlen: fk + (null != (rk = Sk[bk]) ? rk : 0)
      })
    }
    var Xe = function(kk) {
      kk.children(fe).forEach((function ek(ik) {
        let Dk = kk.children(ik),
          fk = kk.node(ik);
        if (Dk.length && Dk.forEach(ek), fk && Object.hasOwn(fk, "minRank")) {
          fk.borderLeft = [], fk.borderRight = [];
          for (let ek = fk.minRank, Dk = fk.maxRank + 1; ek < Dk; ++ek) Be(kk, "borderLeft", "_bl", ik, fk, ek), Be(kk, "borderRight", "_br", ik, fk, ek)
        }
      }))
    };

    function Be(kk, ek, ik, Dk, fk, Sk) {
      let bk = {
          width: 0,
          height: 0,
          rank: Sk,
          borderType: ek
        },
        rk = fk[ek][Sk - 1],
        Pk = Xk(kk, "border", bk, ik);
      fk[ek][Sk] = Pk, kk.setParent(Pk, Dk), rk && kk.setEdge(rk, Pk, {
        weight: 1
      })
    }

    function ce(kk) {
      var ek;
      let ik = null == (ek = kk.graph().rankdir) ? void 0 : ek.toLowerCase();
      ("bt" === ik || "rl" === ik) && function(kk) {
        kk.nodes().forEach((ek => Ze(kk.node(ek)))), kk.edges().forEach((ek => {
          var ik;
          let Dk = kk.edge(ek);
          null == (ik = Dk.points) || ik.forEach(Ze), Object.hasOwn(Dk, "y") && Ze(Dk)
        }))
      }(kk), ("lr" === ik || "rl" === ik) && (function(kk) {
        kk.nodes().forEach((ek => Oe(kk.node(ek)))), kk.edges().forEach((ek => {
          var ik;
          let Dk = kk.edge(ek);
          null == (ik = Dk.points) || ik.forEach(Oe), Object.hasOwn(Dk, "x") && Oe(Dk)
        }))
      }(kk), Te(kk))
    }

    function Te(kk) {
      kk.nodes().forEach((ek => oe(kk.node(ek)))), kk.edges().forEach((ek => oe(kk.edge(ek))))
    }

    function oe(kk) {
      let ek = kk.width;
      kk.width = kk.height, kk.height = ek
    }

    function Ze(kk) {
      kk.y = -kk.y
    }

    function Oe(kk) {
      let ek = kk.x;
      kk.x = kk.y, kk.y = ek
    }

    function ge(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ik = {},
        Dk = kk.nodes().filter((ek => !kk.children(ek).length)),
        fk = Dk.map((ek => kk.node(ek).rank)),
        Sk = ee(gk(Math.max, fk) + 1).map((() => []));
      return Dk.sort(((ek, ik) => kk.node(ek).rank - kk.node(ik).rank)).forEach((function Dk(fk) {
        if (ik[fk]) return;
        ik[fk] = !0;
        let bk = kk.node(fk);
        Sk[bk.rank].push(fk);
        let rk = kk.successors(fk);
        rk && [...rk].sort(((ik, Dk) => function(ik, Dk) {
          let fk = kk.node(ik),
            Sk = kk.node(Dk);
          return Se(ek, fk, Sk)
        }(ik, Dk))).forEach(Dk)
      })), Sk
    }

    function Ge(kk, ek) {
      let ik = 0;
      for (let Dk = 1; Dk < ek.length; ++Dk) ik += Ne(kk, ek[Dk - 1], ek[Dk]);
      return ik
    }

    function Ne(kk, ek, ik) {
      let Dk = function(kk, ek) {
          return kk.reduce(((kk, ik, Dk) => (kk[ik] = ek[Dk], kk)), {})
        }(ik, ik.map(((kk, ek) => ek))),
        fk = ek.flatMap((ek => {
          let ik = kk.outEdges(ek);
          return ik ? ik.map((ek => ({
            pos: Dk[ek.w],
            weight: kk.edge(ek).weight
          }))).sort(((kk, ek) => kk.pos - ek.pos)) : []
        })),
        Sk = 1;
      for (; Sk < ik.length;) Sk <<= 1;
      let bk = 2 * Sk - 1;
      Sk -= 1;
      let rk = new Array(bk).fill(0),
        Pk = 0;
      return fk.forEach((kk => {
        let ek = kk.pos + Sk;
        rk[ek] += kk.weight;
        let ik = 0;
        for (; ek > 0;) ek % 2 && (ik += rk[ek + 1]), ek = ek - 1 >> 1, rk[ek] += kk.weight;
        Pk += kk.weight * ik
      })), Pk
    }

    function Re(kk, ek) {
      let ik = {};
      return kk.forEach(((kk, ek) => {
          let Dk = {
            indegree: 0,
            in: [],
            out: [],
            vs: [kk.v],
            i: ek
          };
          void 0 !== kk.barycenter && (Dk.barycenter = kk.barycenter, Dk.weight = kk.weight), ik[kk.v] = Dk
        })), ek.edges().forEach((kk => {
          let ek = ik[kk.v],
            Dk = ik[kk.w];
          void 0 !== ek && void 0 !== Dk && (Dk.indegree++, ek.out.push(Dk))
        })),
        function(kk) {
          let ek = [];

          function ik(kk) {
            return ek => {
              ek.merged || (void 0 === ek.barycenter || void 0 === kk.barycenter || ek.barycenter >= kk.barycenter) && function(kk, ek) {
                let ik = 0,
                  Dk = 0;
                kk.weight && (ik += kk.barycenter * kk.weight, Dk += kk.weight), ek.weight && (ik += ek.barycenter * ek.weight, Dk += ek.weight), kk.vs = ek.vs.concat(kk.vs), kk.barycenter = ik / Dk, kk.weight = Dk, kk.i = Math.min(ek.i, kk.i), ek.merged = !0
              }(kk, ek)
            }
          }

          function Dk(ek) {
            return ik => {
              ik.in.push(ek), 0 === --ik.indegree && kk.push(ik)
            }
          }
          for (; kk.length;) {
            let fk = kk.pop();
            ek.push(fk), fk.in.reverse().forEach(ik(fk)), fk.out.forEach(Dk(fk))
          }
          return ek.filter((kk => !kk.merged)).map((kk => ie(kk, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ik).filter((kk => !kk.indegree)))
    }

    function Je(kk, ek, ik, Dk, fk) {
      let Sk = {},
        bk = null,
        rk = null,
        Pk = fk;
      "boolean" == typeof ek ? (Pk = ek, Sk = {}) : ek && (Sk = ek, bk = null != ik ? ik : null, rk = null != Dk ? Dk : null);
      let mk = function(kk, ek) {
          let ik = {
            lhs: [],
            rhs: []
          };
          return kk.forEach((kk => {
            ek(kk) ? ik.lhs.push(kk) : ik.rhs.push(kk)
          })), ik
        }(kk, (kk => Object.hasOwn(kk, "barycenter"))),
        Mk = mk.lhs,
        Kk = mk.rhs.sort(((kk, ek) => ek.i - kk.i)),
        xk = [],
        nk = 0,
        Uk = 0,
        Hk = 0;
      Mk.sort(function(kk, ek, ik) {
        return (Dk, fk) => {
          if (Dk.barycenter < fk.barycenter) return -1;
          if (Dk.barycenter > fk.barycenter) return 1;
          if (kk && ("string" == typeof Dk.vs[0] || "string" == typeof fk.vs[0])) {
            let ik = kk.node(Dk.vs[0]),
              Sk = kk.node(fk.vs[0]),
              bk = Se(ek, ik, Sk);
            if (0 !== bk) return bk
          }
          return ik ? fk.i - Dk.i : Dk.i - fk.i
        }
      }(rk, bk, !!Pk));
      for (let [lk, pk] of Object.entries(Sk)) {
        let kk = Mk.findIndex((kk => kk.vs[0] === lk));
        Mk.splice(kk + 1, 0, pk)
      }
      Hk = ki(xk, Kk, Hk), Mk.forEach((kk => {
        Hk += kk.vs.length, xk.push(kk.vs), nk += kk.barycenter * kk.weight, Uk += kk.weight, Hk = ki(xk, Kk, Hk)
      }));
      let wk = {
        vs: xk.flat(1)
      };
      return Uk && (wk.barycenter = nk / Uk, wk.weight = Uk), wk
    }

    function ki(kk, ek, ik) {
      let Dk;
      for (; ek.length && (Dk = ek[ek.length - 1]).i <= ik;) ek.pop(), kk.push(Dk.vs), ik++;
      return ik
    }

    function ei(kk, ek, ik, Dk, fk) {
      var Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk;
      let wk = null,
        lk = fk;
      "boolean" == typeof Dk ? (lk = Dk, wk = null) : void 0 !== Dk && (wk = Dk);
      let pk = kk.children(ek),
        yk = kk.node(ek),
        Yk = yk ? yk.borderLeft : void 0,
        Lk = yk ? yk.borderRight : void 0,
        Ck = {};
      Yk && (pk = pk.filter((kk => kk !== Yk && kk !== Lk)));
      let Ak = function(kk) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((ek => {
          let ik = kk.inEdges(ek);
          if (!ik || !ik.length) return {
            v: ek
          };
          {
            let Dk = ik.reduce(((ek, ik) => {
              let Dk = kk.edge(ik),
                fk = kk.node(ik.v);
              return {
                sum: ek.sum + Dk.weight * fk.order,
                weight: ek.weight + Dk.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: ek,
              barycenter: Dk.sum / Dk.weight,
              weight: Dk.weight
            }
          }
        }))
      }(kk, pk);
      Ak.forEach((ek => {
        if (kk.children(ek.v).length) {
          let {
            result: Dk
          } = ei(kk, ek.v, ik, wk, lk);
          Ck[ek.v] = Dk, Object.hasOwn(Dk, "barycenter") && function(kk, ek) {
            void 0 !== kk.barycenter ? (kk.barycenter = (kk.barycenter * kk.weight + ek.barycenter * ek.weight) / (kk.weight + ek.weight), kk.weight += ek.weight) : (kk.barycenter = ek.barycenter, kk.weight = ek.weight)
          }(ek, Dk)
        }
      }));
      let jk = Re(Ak, ik);
      ! function(kk, ek) {
        kk.forEach((kk => {
          kk.vs = kk.vs.flatMap((kk => ek[kk] ? ek[kk].vs : kk))
        }))
      }(jk, Ck);
      let sk = {},
        dk = !1;
      for (let Fk = 0; Fk < jk.length; Fk++)
        for (let ek = Fk + 1; ek < jk.length; ek++)
          if (jk[Fk] && jk[ek] && null != (Sk = jk[Fk]) && Sk.barycenter && null != (bk = jk[ek]) && bk.barycenter && (null == (rk = jk[Fk]) ? void 0 : rk.barycenter) === jk[ek].barycenter) {
            let ik = null != (mk = null == (Pk = jk[Fk]) ? void 0 : Pk.vs[0]) ? mk : "",
              Dk = null != (Kk = null == (Mk = jk[ek]) ? void 0 : Mk.vs[0]) ? Kk : "",
              fk = kk.node(ik),
              Sk = kk.node(Dk);
            if ("edge" === fk.dummy && "edge" === Sk.dummy && (null == (xk = fk.edgeObj) ? void 0 : xk.v) === (null == (nk = Sk.edgeObj) ? void 0 : nk.v) && (null == (Uk = fk.edgeObj) ? void 0 : Uk.w) === (null == (Hk = Sk.edgeObj) ? void 0 : Hk.w)) {
              if (fk.edgeLabel.reversed) {
                sk[Dk] = jk[Fk], jk.splice(Fk, 1), Fk--;
                break
              }
              sk[ik] = jk[ek], jk.splice(ek, 1), ek--
            } else dk = !0
          } let Vk = Je(jk, sk, wk, kk, lk);
      if (Yk && Lk) {
        Vk.vs = [Yk, Vk.vs, Lk].flat(1);
        let ek = kk.predecessors(Yk);
        if (ek && ek.length) {
          let ik = kk.node(ek[0]),
            Dk = kk.predecessors(Lk),
            fk = kk.node(Dk[0]);
          Object.hasOwn(Vk, "barycenter") || (Vk.barycenter = 0, Vk.weight = 0), Vk.barycenter = (Vk.barycenter * Vk.weight + ik.order + fk.order) / (Vk.weight + 2), Vk.weight += 2
        }
      }
      return Object.defineProperty(Vk, "result", {
        value: Vk,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Vk, "usedBias", {
        value: dk,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Vk
    }

    function ii(kk, ek, ik, Dk) {
      Dk || (Dk = kk.nodes());
      let fk = function(kk) {
          let ek;
          for (; kk.hasNode(ek = ke("_root")););
          return ek
        }(kk),
        Sk = new tk({
          compound: !0
        }).setGraph({
          root: fk
        }).setDefaultNodeLabel((ek => kk.node(ek)));
      return Dk.forEach((Dk => {
        let bk = kk.node(Dk),
          rk = kk.parent(Dk);
        if (bk.rank === ek || bk.minRank <= ek && ek <= bk.maxRank) {
          Sk.setNode(Dk), Sk.setParent(Dk, rk || fk);
          let Pk = kk[ik](Dk);
          Pk && Pk.forEach((ek => {
            let ik = ek.v === Dk ? ek.w : ek.v,
              fk = Sk.edge(ik, Dk),
              bk = void 0 !== fk ? fk.weight : 0;
            Sk.setEdge(ik, Dk, {
              weight: kk.edge(ek).weight + bk
            })
          })), Object.hasOwn(bk, "minRank") && Sk.setNode(Dk, {
            borderLeft: bk.borderLeft[ek],
            borderRight: bk.borderRight[ek]
          })
        }
      })), Sk
    }

    function Di(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof ek.customOrder) return void ek.customOrder(kk, Di);
      let Dk = Gk(kk),
        fk = fi(kk, ee(1, Dk + 1), "inEdges"),
        Sk = fi(kk, ee(Dk - 1, -1, -1), "outEdges"),
        bk = ge(kk, ik);
      if (bi(kk, bk), ek.disableOptimalOrderHeuristic) return;
      let rk, Pk = Number.POSITIVE_INFINITY,
        mk = ek.constraints || [];
      for (let Mk = 0, Kk = 0; Kk < 4; ++Mk, ++Kk) {
        Si(Mk % 2 ? fk : Sk, Mk % 4 >= 2, mk, ik), bk = Tk(kk);
        let ek = Ge(kk, bk);
        ek < Pk ? (Kk = 0, rk = Object.assign({}, bk), Pk = ek) : ek === Pk && (rk = structuredClone(bk))
      }
      bi(kk, rk)
    }

    function fi(kk, ek, ik) {
      let Dk = new Map,
        fk = (kk, ek) => {
          Dk.has(kk) || Dk.set(kk, []), Dk.get(kk).push(ek)
        };
      for (let Sk of kk.nodes()) {
        let ek = kk.node(Sk);
        if ("number" == typeof ek.rank && fk(ek.rank, Sk), "number" == typeof ek.minRank && "number" == typeof ek.maxRank)
          for (let kk = ek.minRank; kk <= ek.maxRank; kk++) kk !== ek.rank && fk(kk, Sk)
      }
      return ek.map((function(ek) {
        return ii(kk, ek, ik, Dk.get(ek) || [])
      }))
    }

    function Si(kk, ek, ik, Dk) {
      let fk = !0,
        Sk = new tk;
      kk.forEach((function(kk) {
        ik.forEach((kk => Sk.setEdge(kk.left, kk.right)));
        let bk = kk.graph().root,
          {
            result: rk,
            usedBias: Pk
          } = ei(kk, bk, Sk, Dk, fk);
        ek && Pk && (fk = !fk), rk.vs.forEach(((ek, ik) => kk.node(ek).order = ik)),
          function(kk, ek, ik) {
            let Dk, fk = {};
            ik.forEach((ik => {
              let Sk, bk, rk = kk.parent(ik);
              for (; rk;) {
                if (Sk = kk.parent(rk), Sk ? (bk = fk[Sk], fk[Sk] = rk) : (bk = Dk, Dk = rk), bk && bk !== rk) return void ek.setEdge(bk, rk);
                rk = Sk
              }
            }))
          }(kk, Sk, rk.vs)
      }))
    }

    function bi(kk, ek) {
      Object.values(ek).forEach((ek => ek.forEach(((ek, ik) => kk.node(ek).order = ik))))
    }

    function ri(kk, ek, ik) {
      if (ek > ik) {
        let kk = ek;
        ek = ik, ik = kk
      }
      let Dk = kk[ek];
      Dk || (kk[ek] = Dk = {}), Dk[ik] = !0
    }

    function Pi(kk, ek, ik) {
      if (ek > ik) {
        let kk = ek;
        ek = ik, ik = kk
      }
      let Dk = kk[ek];
      return void 0 !== Dk && Object.hasOwn(Dk, ik)
    }

    function mi(kk, ek, ik, Dk) {
      let fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Sk = {},
        bk = function(kk, ek, ik, Dk) {
          let fk = new tk,
            Sk = kk.graph(),
            bk = function(kk, ek, ik) {
              return (Dk, fk, Sk) => {
                let bk, rk = Dk.node(fk),
                  Pk = Dk.node(Sk),
                  mk = 0;
                if (mk += rk.width / 2, Object.hasOwn(rk, "labelpos")) switch (rk.labelpos.toLowerCase()) {
                  case "l":
                    bk = -rk.width / 2;
                    break;
                  case "r":
                    bk = rk.width / 2
                }
                if (bk && (mk += ik ? bk : -bk), bk = void 0, mk += (rk.dummy ? ek : kk) / 2, mk += (Pk.dummy ? ek : kk) / 2, mk += Pk.width / 2, Object.hasOwn(Pk, "labelpos")) switch (Pk.labelpos.toLowerCase()) {
                  case "l":
                    bk = Pk.width / 2;
                    break;
                  case "r":
                    bk = -Pk.width / 2
                }
                return bk && (mk += ik ? bk : -bk), mk
              }
            }(Sk.nodesep, Sk.edgesep, Dk);
          return ek.forEach((ek => {
            let Dk;
            ek.forEach((ek => {
              let Sk = ik[ek];
              if (void 0 !== Sk) {
                if (fk.setNode(Sk), void 0 !== Dk) {
                  let rk = ik[Dk];
                  if (void 0 !== rk) {
                    let ik = fk.edge(rk, Sk);
                    fk.setEdge(rk, Sk, Math.max(bk(kk, ek, Dk), ik || 0))
                  }
                }
                Dk = ek
              }
            }))
          })), fk
        }(kk, ek, ik, fk),
        rk = fk ? "borderLeft" : "borderRight";

      function Pk(kk, ek) {
        let ik = bk.nodes().slice(),
          Dk = {},
          fk = ik.pop();
        for (; fk;) {
          if (Dk[fk]) kk(fk);
          else {
            Dk[fk] = !0, ik.push(fk);
            for (let kk of ek(fk)) ik.push(kk)
          }
          fk = ik.pop()
        }
      }
      return Pk((function(kk) {
        let ek = bk.inEdges(kk);
        Sk[kk] = ek ? ek.reduce(((kk, ek) => {
          var ik;
          let Dk = null != (ik = Sk[ek.v]) ? ik : 0,
            fk = bk.edge(ek);
          return Math.max(kk, Dk + (void 0 !== fk ? fk : 0))
        }), 0) : 0
      }), (function(kk) {
        return bk.predecessors(kk) || []
      })), Pk((function(ek) {
        let ik = bk.outEdges(ek),
          Dk = Number.POSITIVE_INFINITY;
        ik && (Dk = ik.reduce(((kk, ek) => {
          let ik = Sk[ek.w],
            Dk = bk.edge(ek);
          return Math.min(kk, (void 0 !== ik ? ik : 0) - (void 0 !== Dk ? Dk : 0))
        }), Number.POSITIVE_INFINITY));
        let fk = kk.node(ek);
        Dk !== Number.POSITIVE_INFINITY && fk.borderType !== rk && (Sk[ek] = Math.max(void 0 !== Sk[ek] ? Sk[ek] : 0, Dk))
      }), (function(kk) {
        return bk.successors(kk) || []
      })), Object.keys(Dk).forEach((kk => {
        var ek;
        let Dk = ik[kk];
        void 0 !== Dk && (Sk[kk] = null != (ek = Sk[Dk]) ? ek : 0)
      })), Sk
    }

    function Mi(kk, ek) {
      let ik, Dk = Tk(kk),
        fk = Object.assign(function(kk, ek) {
          let ik = {};
          return ek.length && ek.reduce((function(ek, Dk) {
            let fk = 0,
              Sk = 0,
              bk = ek.length,
              rk = Dk[Dk.length - 1];
            return Dk.forEach(((ek, Pk) => {
              let mk = function(kk, ek) {
                  if (kk.node(ek).dummy) {
                    let ik = kk.predecessors(ek);
                    if (ik) return ik.find((ek => kk.node(ek).dummy))
                  }
                }(kk, ek),
                Mk = mk ? kk.node(mk).order : bk;
              (mk || ek === rk) && (Dk.slice(Sk, Pk + 1).forEach((ek => {
                let Dk = kk.predecessors(ek);
                Dk && Dk.forEach((Dk => {
                  let Sk = kk.node(Dk),
                    bk = Sk.order;
                  (bk < fk || Mk < bk) && (!Sk.dummy || !kk.node(ek).dummy) && ri(ik, Dk, ek)
                }))
              })), Sk = Pk + 1, fk = Mk)
            })), Dk
          })), ik
        }(kk, Dk), function(kk, ek) {
          let ik = {};

          function Dk(ek, Dk, fk, Sk, bk) {
            ee(Dk, fk).forEach((Dk => {
              let fk = ek[Dk];
              if (void 0 !== fk && kk.node(fk).dummy) {
                let ek = kk.predecessors(fk);
                ek && ek.forEach((ek => {
                  if (void 0 === ek) return;
                  let Dk = kk.node(ek);
                  Dk.dummy && (Dk.order < Sk || Dk.order > bk) && ri(ik, ek, fk)
                }))
              }
            }))
          }
          return ek.length && ek.reduce((function(ek, ik) {
            let fk = -1,
              Sk = -1,
              bk = 0;
            return ik.forEach(((rk, Pk) => {
              if ("border" === kk.node(rk).dummy) {
                let ek = kk.predecessors(rk);
                if (ek && ek.length) {
                  let rk = ek[0];
                  if (void 0 === rk) return;
                  Sk = kk.node(rk).order, Dk(ik, bk, Pk, fk, Sk), bk = Pk, fk = Sk
                }
              }
              Dk(ik, bk, ik.length, Sk, ek.length)
            })), ik
          })), ik
        }(kk, Dk)),
        Sk = {};
      ["u", "d"].forEach((bk => {
        ik = "u" === bk ? Dk : Object.values(Dk).reverse(), ["l", "r"].forEach((Dk => {
          "r" === Dk && (ik = ik.map((kk => Object.values(kk).reverse())));
          let rk = function(kk, ek, ik, Dk, fk) {
              let Sk = {},
                bk = {},
                rk = {};
              return ek.forEach((kk => {
                kk.forEach(((kk, ek) => {
                  Sk[kk] = kk, bk[kk] = kk, rk[kk] = ek
                }))
              })), ek.forEach((ek => {
                let Pk = -1,
                  mk = -1,
                  Mk = !1,
                  Kk = ek,
                  xk = ek.findIndex((ek => (null == fk ? void 0 : fk.includes(ek)) || Ki(ek, kk, fk)));
                xk > 0 && (Kk = [ek[xk], ...ek.slice(0, xk), ...ek.slice(xk + 1)], Mk = !0), Kk.forEach((ek => {
                  var Kk;
                  let xk = Dk(ek);
                  if (xk && xk.length) {
                    null != fk && fk.includes(ek) && (xk = xk.filter((ek => Ki(ek, kk, fk))));
                    let Dk = xk.sort(((kk, ek) => {
                        let ik = rk[kk],
                          Dk = rk[ek];
                        return (void 0 !== ik ? ik : 0) - (void 0 !== Dk ? Dk : 0)
                      })),
                      nk = (Dk.length - 1) / 2;
                    for (let kk = Math.floor(nk), fk = Math.ceil(nk); kk <= fk; ++kk) {
                      let fk = Dk[kk];
                      if (void 0 === fk) continue;
                      let xk = rk[fk];
                      if (void 0 !== xk && bk[ek] === ek && Pk < xk && rk[fk] !== mk && !Pi(ik, ek, fk)) {
                        let kk = Sk[fk];
                        void 0 !== kk && (bk[fk] = ek, bk[ek] = Sk[ek] = kk, Pk = xk, Mk && (Pk = -1, mk = null != (Kk = rk[fk]) ? Kk : -1, Mk = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Sk,
                align: bk
              }
            }(kk, ik, fk, (ek => ("u" === bk ? kk.predecessors(ek) : kk.successors(ek)) || []), ek),
            Pk = mi(kk, ik, rk.root, rk.align, "r" === Dk);
          "r" === Dk && (Pk = De(Pk, (kk => -kk))), Sk[bk + Dk] = Pk
        }))
      }));
      let bk = function(kk, ek) {
        return Object.values(ek).reduce(((ek, ik) => {
          let Dk = Number.NEGATIVE_INFINITY,
            fk = Number.POSITIVE_INFINITY;
          Object.entries(ik).forEach((ek => {
            let [ik, Sk] = ek, bk = function(kk, ek) {
              return kk.node(ek).width
            }(kk, ik) / 2;
            Dk = Math.max(Sk + bk, Dk), fk = Math.min(Sk - bk, fk)
          }));
          let Sk = Dk - fk;
          return Sk < ek[0] && (ek = [Sk, ik]), ek
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(kk, Sk);
      return function(kk, ek) {
          let ik = Object.values(ek),
            Dk = gk(Math.min, ik),
            fk = gk(Math.max, ik);
          ["u", "d"].forEach((ik => {
            ["l", "r"].forEach((Sk => {
              let bk = ik + Sk,
                rk = kk[bk];
              if (!rk || rk === ek) return;
              let Pk = Object.values(rk),
                mk = Dk - gk(Math.min, Pk);
              "l" !== Sk && (mk = fk - gk(Math.max, Pk)), mk && (kk[bk] = De(rk, (kk => kk + mk)))
            }))
          }))
        }(Sk, bk),
        function(kk) {
          let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ik = kk.ul;
          return ik ? De(ik, ((ik, Dk) => {
            var fk, Sk;
            if (ek) {
              let ik = ek.toLowerCase(),
                fk = kk[ik];
              if (fk && void 0 !== fk[Dk]) return fk[Dk]
            }
            let bk = Object.values(kk).map((kk => {
              let ek = kk[Dk];
              return void 0 !== ek ? ek : 0
            })).sort(((kk, ek) => kk - ek));
            return ((null != (fk = bk[1]) ? fk : 0) + (null != (Sk = bk[2]) ? Sk : 0)) / 2
          })) : {}
        }(Sk, kk.graph().align)
    }

    function Ki(kk, ek, ik) {
      var Dk;
      if (!ik) return !1;
      let fk = null == (Dk = ek.node(kk)) ? void 0 : Dk.edgeObj;
      if (!fk || ek.node(kk).edgeLabel.reversed) return !1;
      let Sk = ik.indexOf(null == fk ? void 0 : fk.v),
        bk = ik.indexOf(null == fk ? void 0 : fk.w);
      return -1 !== Sk && -1 !== bk && Sk === (bk + 1) % ik.length || Sk === (bk - 1) % ik.length
    }

    function xi(kk, ek) {
      (function(kk) {
        let ek = Tk(kk),
          ik = kk.graph(),
          Dk = ik.ranksep,
          fk = ik.rankalign,
          Sk = 0;
        ek.forEach((ek => {
          let ik = ek.reduce(((ek, ik) => {
            var Dk;
            let fk = null != (Dk = kk.node(ik).height) ? Dk : 0;
            return ek > fk ? ek : fk
          }), 0);
          ek.forEach((ek => {
            let Dk = kk.node(ek);
            Dk.y = "top" === fk ? Sk + Dk.height / 2 : "bottom" === fk ? Sk + ik - Dk.height / 2 : Sk + ik / 2
          })), Sk += ik + Dk
        }))
      })(kk = Bk(kk)), Object.entries(Mi(kk, ek)).forEach((ek => {
        let [ik, Dk] = ek;
        return kk.node(ik).x = Dk
      }))
    }
    var ni = new WeakMap;

    function Ui(kk) {
      return wi(kk, Rk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), kk
    }

    function Hi(kk, ek, ik) {
      let Dk = ek;
      for (; void 0 !== Dk;) {
        let ek = kk.parent(Dk);
        if (ek === ik) return Dk;
        Dk = ek
      }
    }

    function wi(kk, ek, ik) {
      var Dk;
      let fk = kk.nodes().filter((ek => kk.children(ek).length)),
        Sk = {};
      fk.forEach((Dk => {
        let fk = kk.node(Dk);
        if (fk && fk.rankdir) {
          let bk = new tk({
            multigraph: !0,
            compound: !0
          });
          bk.setGraph({
            rankdir: fk.rankdir
          });
          let rk = kk.children(Dk);
          rk.forEach((ek => {
            let ik = {
              ...kk.node(ek)
            };
            bk.setNode(ek, ik);
            let fk = kk.parent(ek);
            fk && fk !== Dk && rk.includes(fk) && bk.setParent(ek, fk)
          }));
          let Pk = new Set;
          kk.edges().forEach((ek => {
            let ik = Hi(kk, ek.v, Dk),
              fk = Hi(kk, ek.w, Dk);
            if (ik && fk && ik !== fk) {
              let Dk = `${ik}\0${fk}`;
              Pk.has(Dk) || (Pk.add(Dk), bk.setEdge(ik, fk, {
                ...kk.edge(ek)
              }))
            }
          })), wi(bk, ek, ik);
          let mk = Fi(bk);
          li(mk, ek, ik, null), yi(bk, mk);
          let Mk = 1 / 0,
            Kk = 1 / 0,
            xk = -1 / 0,
            nk = -1 / 0;
          bk.nodes().forEach((kk => {
            if (kk === Dk) return;
            let ek = bk.node(kk);
            ek && "number" == typeof ek.x && "number" == typeof ek.y && "number" == typeof ek.width && "number" == typeof ek.height && (Mk = Math.min(Mk, ek.x - ek.width / 2), xk = Math.max(xk, ek.x + ek.width / 2), Kk = Math.min(Kk, ek.y - ek.height / 2), nk = Math.max(nk, ek.y + ek.height / 2))
          })), (!isFinite(Mk) || !isFinite(Kk) || !isFinite(xk) || !isFinite(nk)) && (Mk = Kk = 0, xk = nk = 0);
          let Uk = xk - Mk,
            Hk = nk - Kk;
          Sk[Dk] = {
            minX: Mk,
            aD: Kk,
            maxX: xk,
            WD: nk,
            width: Uk,
            height: Hk,
            offsetX: Mk,
            offsetY: Kk
          }, fk._dagreClusterSubgraph = bk
        }
      }));
      let bk = [],
        rk = new Map;
      fk.forEach((ek => {
        let ik = kk.node(ek);
        ik && ik.rankdir && Sk[ek] && rk.set(ek, (kk.children(ek) || []).filter((kk => kk !== ek)))
      }));
      let Pk = new Set([...rk.values()].flat()),
        mk = new Map;
      rk.forEach(((ek, ik) => {
        Pk.has(ik) || mk.set(ik, (ek => {
          let ik = [],
            Dk = (kk.children(ek) || []).filter((kk => kk !== ek));
          for (; Dk.length > 0;) {
            let ek = Dk.shift();
            ik.push(ek), (kk.children(ek) || []).filter((kk => kk !== ek)).forEach((kk => Dk.push(kk)))
          }
          return ik
        })(ik))
      }));
      let Mk = new Set([...mk.values()].flat()),
        Kk = kk => {
          for (let [ek, ik] of mk)
            if (ik.includes(kk)) return ek;
          return kk
        },
        xk = [];
      kk.edges().forEach((ek => {
        (Mk.has(ek.v) || Mk.has(ek.w)) && xk.push({
          edge: ek,
          label: kk.edge(ek)
        })
      }));
      let nk = new Map;
      Mk.forEach((ek => {
        let ik = kk.parent(ek);
        nk.set(ek, "string" == typeof ik ? ik : void 0)
      })), mk.forEach(((ek, ik) => {
        let Dk = kk.node(ik),
          fk = [];
        ek.forEach((ek => {
          let ik = kk.node(ek);
          ik && (fk.push({
            id: ek,
            node: ik,
            parent: nk.get(ek)
          }), kk.removeNode(ek))
        }));
        let rk = xk.filter((kk => {
            let {
              edge: ik
            } = kk;
            return ek.includes(ik.v) || ek.includes(ik.w)
          })),
          Pk = Sk[ik];
        Dk && (bk.push({
          clusterId: ik,
          subgraph: Dk._dagreClusterSubgraph,
          bounds: Pk,
          children: ek,
          removedNodes: fk,
          removedEdges: rk
        }), Dk.width = Pk.width, Dk.height = Pk.height)
      }));
      let Uk = new Set;
      xk.forEach((ek => {
        let {
          edge: ik,
          label: Dk
        } = ek, fk = Kk(ik.v), Sk = Kk(ik.w);
        if (fk !== Sk && kk.hasNode(fk) && kk.hasNode(Sk)) {
          let ek = `${fk}\0${Sk}`;
          Uk.has(ek) || (Uk.add(ek), kk.setEdge(fk, Sk, {
            ...Dk,
            width: 0,
            height: 0
          }))
        }
      }));
      let Hk = Fi(kk),
        wk = li(Hk, ek, ik, null != (Dk = ni.get(kk)) ? Dk : null);
      ni.set(kk, wk), yi(kk, Hk), Uk.forEach((ek => {
        let ik = ek.indexOf("\0"),
          Dk = ek.slice(0, ik),
          fk = ek.slice(ik + 1);
        kk.hasEdge(Dk, fk) && kk.removeEdge(Dk, fk)
      })), bk.forEach((ek => {
        let {
          clusterId: ik,
          subgraph: Dk,
          bounds: fk,
          removedNodes: Sk,
          removedEdges: bk
        } = ek;
        var rk, Pk;
        let mk = kk.node(ik),
          Mk = null != (rk = null == mk ? void 0 : mk.x) ? rk : 0,
          Kk = null != (Pk = null == mk ? void 0 : mk.y) ? Pk : 0,
          xk = (fk.minX + fk.maxX) / 2,
          nk = (fk.aD + fk.WD) / 2;
        Sk.forEach((ek => {
          let {
            id: ik,
            node: Dk,
            parent: fk
          } = ek;
          kk.setNode(ik, Dk), void 0 !== fk && kk.setParent(ik, fk)
        })), bk.forEach((ek => {
          let {
            edge: ik,
            label: Dk
          } = ek;
          kk.setEdge(ik, Dk)
        })), Dk.nodes().forEach((ek => {
          if (ek === ik) return;
          let fk = Dk.node(ek),
            Sk = kk.node(ek);
          Sk && fk && "number" == typeof fk.x && "number" == typeof fk.y && (Sk.x = Mk + (fk.x - xk), Sk.y = Kk + (fk.y - nk))
        })), delete mk._dagreClusterSubgraph
      })), fk.forEach((ek => {
        var ik, Dk;
        let fk = kk.node(ek),
          bk = Sk[ek];
        if (fk && fk.rankdir && fk._dagreClusterSubgraph && bk) {
          let Sk = fk._dagreClusterSubgraph,
            rk = null != (ik = fk.x) ? ik : 0,
            Pk = null != (Dk = fk.y) ? Dk : 0,
            mk = (bk.minX + bk.maxX) / 2,
            Mk = (bk.aD + bk.WD) / 2;
          Sk.nodes().forEach((ik => {
            if (ik === ek) return;
            let Dk = Sk.node(ik),
              fk = kk.node(ik);
            if (fk && Dk && "number" == typeof Dk.x && "number" == typeof Dk.y) {
              let kk = Dk.x - mk,
                ek = Dk.y - Mk;
              fk.x = rk + kk, fk.y = Pk + ek
            }
          })), delete fk._dagreClusterSubgraph
        }
      }))
    }

    function li(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var fk, Sk;
      let bk = !1 !== (null == ik ? void 0 : ik.useDynamic),
        rk = bk && null != (fk = null == Dk ? void 0 : Dk.graph) ? fk : null,
        Pk = bk && null != (Sk = null == Dk ? void 0 : Dk.rawNodes) ? Sk : null;
      ek("    makeSpaceForEdgeLabels", (() => function(kk) {
        let ek = kk.graph();
        ek.ranksep /= 2, kk.edges().forEach((ik => {
          var Dk;
          let fk = kk.edge(ik);
          fk.minlen *= 2, "c" !== (null != (Dk = fk.labelpos) ? Dk : "r").toLowerCase() && ("TB" === ek.rankdir || "BT" === ek.rankdir ? fk.width += fk.labeloffset : fk.height += fk.labeloffset)
        }))
      }(kk))), ek("    removeSelfEdges", (() => function(kk) {
        kk.edges().forEach((ek => {
          if (ek.v === ek.w) {
            let ik = kk.node(ek.v);
            ik.selfEdges || (ik.selfEdges = []), ik.selfEdges.push({
              e: ek,
              label: kk.edge(ek)
            }), kk.removeEdge(ek)
          }
        }))
      }(kk))), ek("    acyclic", (() => Ue(kk, rk))), ek("    nestingGraph.run", (() => We(kk))), ek("    rank", (() => ve(Bk(kk)))), ek("    injectEdgeLabelProxies", (() => function(kk) {
        kk.edges().forEach((ek => {
          let ik = kk.edge(ek);
          if (ik.width && ik.height) {
            let ik = kk.node(ek.v),
              Dk = {
                rank: (kk.node(ek.w).rank - ik.rank) / 2 + ik.rank,
                e: ek
              };
            Xk(kk, "edge-proxy", Dk, "_ep")
          }
        }))
      }(kk))), ek("    removeEmptyRanks", (() => function(kk) {
        let ek = kk.nodes().map((ek => kk.node(ek).rank)).filter((kk => void 0 !== kk)),
          ik = gk(Math.min, ek),
          Dk = [];
        kk.nodes().forEach((ek => {
          let fk = kk.node(ek).rank - ik;
          Dk[fk] || (Dk[fk] = []), Dk[fk].push(ek)
        }));
        let fk = 0,
          Sk = kk.graph().nodeRankFactor;
        Array.from(Dk).forEach(((ek, ik) => {
          void 0 === ek && ik % Sk !== 0 ? --fk : void 0 !== ek && fk && ek.forEach((ek => kk.node(ek).rank += fk))
        }))
      }(kk))), ek("    nestingGraph.cleanup", (() => function(kk) {
        let ek = kk.graph();
        kk.removeNode(ek.nestingRoot), delete ek.nestingRoot, kk.edges().forEach((ek => {
          kk.edge(ek).nestingEdge && kk.removeEdge(ek)
        }))
      }(kk))), ek("    normalizeRanks", (() => function(kk) {
        let ek = kk.nodes().map((ek => {
            let ik = kk.node(ek).rank;
            return void 0 === ik ? Number.MAX_VALUE : ik
          })),
          ik = gk(Math.min, ek);
        kk.nodes().forEach((ek => {
          let Dk = kk.node(ek);
          Object.hasOwn(Dk, "rank") && (Dk.rank -= ik)
        }))
      }(kk))), ek("    assignRankMinMax", (() => function(kk) {
        let ek = 0;
        kk.nodes().forEach((ik => {
          let Dk = kk.node(ik);
          Dk.borderTop && (Dk.minRank = kk.node(Dk.borderTop).rank, Dk.maxRank = kk.node(Dk.borderBottom).rank, ek = Math.max(ek, Dk.maxRank))
        })), kk.graph().maxRank = ek
      }(kk))), ek("    removeEdgeLabelProxies", (() => function(kk) {
        kk.nodes().forEach((ek => {
          let ik = kk.node(ek);
          if ("edge-proxy" === ik.dummy) {
            let Dk = ik;
            kk.edge(Dk.e).labelRank = ik.rank, kk.removeNode(ek)
          }
        }))
      }(kk))), ek("    normalize.run", (() => He(kk))), ek("    parentDummyChains", (() => ae(kk))), ek("    addBorderSegments", (() => Xe(kk))), ek("    order", (() => Di(kk, ik, Pk))), ek("    insertSelfEdges", (() => function(kk) {
        Tk(kk).forEach((ek => {
          let ik = 0;
          ek.forEach(((ek, Dk) => {
            let fk = kk.node(ek);
            "number" != typeof fk.rank && (fk.rank = 0), fk.order = Dk + ik, (fk.selfEdges || []).forEach((ek => {
              Xk(kk, "selfedge", {
                width: ek.label.width,
                height: ek.label.height,
                rank: fk.rank,
                order: Dk + ++ik,
                e: ek.e,
                edgeLabel: ek.label
              }, "_se"), (!Array.isArray(ek.label.points) || 7 !== ek.label.points.length) && (ek.label.points = [{
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
            })), delete fk.selfEdges
          }))
        }))
      }(kk))), ek("    adjustCoordinateSystem", (() => function(kk) {
        var ek;
        let ik = null == (ek = kk.graph().rankdir) ? void 0 : ek.toLowerCase();
        ("lr" === ik || "rl" === ik) && Te(kk)
      }(kk))), ek("    position", (() => xi(kk, ik.corePath))), ek("    positionSelfEdges", (() => function(kk) {
        kk.nodes().forEach((ek => {
          let ik = kk.node(ek),
            Dk = kk => "number" == typeof kk && isFinite(kk);
          if ("selfedge" === ik.dummy) {
            let fk = ik,
              Sk = kk.node(fk.e.v),
              bk = Dk(null == Sk ? void 0 : Sk.x) ? Sk.x : 0,
              rk = Dk(null == Sk ? void 0 : Sk.y) ? Sk.y : 0,
              Pk = Dk(null == Sk ? void 0 : Sk.width) ? Sk.width : 0,
              mk = Dk(null == Sk ? void 0 : Sk.height) ? Sk.height : 0,
              Mk = Dk(ik.x) ? ik.x : bk,
              Kk = Dk(ik.y) ? ik.y : rk,
              xk = Pk / 2,
              nk = mk / 2;
            fk.edgeLabel.points = [{
              x: Mk + xk,
              y: Kk - nk
            }, {
              x: Mk + xk,
              y: Kk - nk
            }, {
              x: Mk,
              y: Kk
            }, {
              x: Mk - xk,
              y: Kk + nk
            }, {
              x: Mk - xk,
              y: Kk + nk
            }, {
              x: Mk,
              y: Kk
            }, {
              x: Mk,
              y: Kk
            }], fk.edgeLabel.x = Mk, fk.edgeLabel.y = Kk, kk.setEdge(fk.e, fk.edgeLabel), kk.removeNode(ek)
          } else ik && Array.isArray(ik.selfEdges) && ik.selfEdges.forEach((kk => {
            if (!Array.isArray(kk.label.points) || 7 !== kk.label.points.length) {
              let ek = Dk(ik.x) ? ik.x : 0,
                fk = Dk(ik.y) ? ik.y : 0,
                Sk = (Dk(ik.width) ? ik.width : 0) / 2,
                bk = (Dk(ik.height) ? ik.height : 0) / 2;
              kk.label.points = [{
                x: ek + Sk,
                y: fk - bk
              }, {
                x: ek + Sk,
                y: fk - bk
              }, {
                x: ek,
                y: fk
              }, {
                x: ek - Sk,
                y: fk + bk
              }, {
                x: ek - Sk,
                y: fk + bk
              }, {
                x: ek,
                y: fk
              }, {
                x: ek,
                y: fk
              }]
            }
          }))
        }))
      }(kk)));
      let mk = JSON.parse(JSON.stringify(kk._nodes));
      return ek("    removeBorderNodes", (() => function(kk) {
        kk.nodes().forEach((ek => {
          if (kk.children(ek).length) {
            let ik = kk.node(ek),
              Dk = kk.node(ik.borderTop),
              fk = kk.node(ik.borderBottom),
              Sk = kk.node(ik.borderLeft[ik.borderLeft.length - 1]),
              bk = kk.node(ik.borderRight[ik.borderRight.length - 1]);
            ik.width = Math.abs(bk.x - Sk.x), ik.height = Math.abs(fk.y - Dk.y), ik.x = Sk.x + ik.width / 2, ik.y = Dk.y + ik.height / 2
          }
        })), kk.nodes().forEach((ek => {
          "border" === kk.node(ek).dummy && kk.removeNode(ek)
        }))
      }(kk))), ek("    normalize.undo", (() => function(kk) {
        kk.graph().dummyChains.forEach((ek => {
          let ik, Dk = kk.node(ek),
            fk = Dk.edgeLabel;
          for (kk.setEdge(Dk.edgeObj, fk); Dk.dummy;) ik = kk.successors(ek)[0], kk.removeNode(ek), fk.points.push({
            x: Dk.x,
            y: Dk.y
          }), "edge-label" === Dk.dummy && (fk.x = Dk.x, fk.y = Dk.y, fk.width = Dk.width, fk.height = Dk.height), ek = ik, Dk = kk.node(ek)
        }))
      }(kk))), ek("    fixupEdgeLabelCoords", (() => function(kk) {
        kk.edges().forEach((ek => {
          let ik = kk.edge(ek);
          if (Object.hasOwn(ik, "x")) switch (("l" === ik.labelpos || "r" === ik.labelpos) && (ik.width -= ik.labeloffset), ik.labelpos) {
            case "l":
              ik.x -= ik.width / 2 + ik.labeloffset;
              break;
            case "r":
              ik.x += ik.width / 2 + ik.labeloffset
          }
        }))
      }(kk))), ek("    undoCoordinateSystem", (() => ce(kk))), ek("    translateGraph", (() => function(kk) {
        let ek = Number.POSITIVE_INFINITY,
          ik = 0,
          Dk = Number.POSITIVE_INFINITY,
          fk = 0,
          Sk = kk.graph(),
          bk = Sk.marginx || 0,
          rk = Sk.marginy || 0;

        function Pk(kk) {
          let Sk = kk.x,
            bk = kk.y,
            rk = kk.width,
            Pk = kk.height;
          ek = Math.min(ek, Sk - rk / 2), ik = Math.max(ik, Sk + rk / 2), Dk = Math.min(Dk, bk - Pk / 2), fk = Math.max(fk, bk + Pk / 2)
        }
        kk.nodes().forEach((ek => Pk(kk.node(ek)))), kk.edges().forEach((ek => {
          let ik = kk.edge(ek);
          Object.hasOwn(ik, "x") && Pk(ik)
        })), ek -= bk, Dk -= rk, kk.nodes().forEach((ik => {
          let fk = kk.node(ik);
          fk.x -= ek, fk.y -= Dk
        })), kk.edges().forEach((ik => {
          let fk = kk.edge(ik);
          fk.points.forEach((kk => {
            kk.x -= ek, kk.y -= Dk
          })), Object.hasOwn(fk, "x") && (fk.x -= ek), Object.hasOwn(fk, "y") && (fk.y -= Dk)
        })), Sk.width = ik - ek + bk, Sk.height = fk - Dk + rk
      }(kk))), ek("    assignNodeIntersects", (() => function(kk) {
        kk.edges().forEach((ek => {
          if (ek.v === ek.w) return;
          let ik, Dk, fk = kk.edge(ek),
            Sk = kk.node(ek.v),
            bk = kk.node(ek.w);
          fk.points ? (ik = fk.points[0], Dk = fk.points[fk.points.length - 1]) : (fk.points = [], ik = bk, Dk = Sk), fk.points.unshift(ck(Sk, ik)), fk.points.push(ck(bk, Dk))
        }))
      }(kk))), ek("    reversePoints", (() => function(kk) {
        kk.edges().forEach((ek => {
          let ik = kk.edge(ek);
          ik.reversed && ik.points.reverse()
        }))
      }(kk))), ek("    acyclic.undo", (() => function(kk) {
        kk.edges().forEach((ek => {
          let ik = kk.edge(ek);
          if (ik.reversed) {
            kk.removeEdge(ek);
            let Dk = ik.forwardName;
            delete ik.reversed, delete ik.forwardName, kk.setEdge(ek.w, ek.v, ik, Dk)
          }
        }))
      }(kk))), {
        graph: kk,
        rawNodes: mk
      }
    }

    function yi(kk, ek) {
      kk.nodes().forEach((ik => {
        let Dk = kk.node(ik),
          fk = ek.node(ik);
        Dk && (Dk.x = fk.x, Dk.y = fk.y, Dk.order = fk.order, Dk.rank = fk.rank, ek.children(ik).length && (Dk.width = fk.width, Dk.height = fk.height))
      })), kk.edges().forEach((ik => {
        let Dk = kk.edge(ik),
          fk = ek.edge(ik);
        Dk.points = fk.points, Object.hasOwn(fk, "x") && (Dk.x = fk.x, Dk.y = fk.y)
      })), kk.graph().width = ek.graph().width, kk.graph().height = ek.graph().height
    }
    var Yi = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Li = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Ci = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Ai = ["width", "height", "rank"],
      ji = {
        width: 0,
        height: 0
      },
      si = ["minlen", "weight", "width", "height", "labeloffset"],
      di = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Vi = ["labelpos"];

    function Fi(kk) {
      let ek = new tk({
          multigraph: !0,
          compound: !0
        }),
        ik = qi(kk.graph());
      return ek.setGraph(Object.assign({}, Li, ui(ik, Yi), ie(ik, Ci))), kk.nodes().forEach((ik => {
        let Dk = ui(qi(kk.node(ik)), Ai);
        Object.keys(ji).forEach((kk => {
          void 0 === Dk[kk] && (Dk[kk] = ji[kk])
        })), ek.setNode(ik, Dk);
        let fk = kk.parent(ik);
        void 0 !== fk && ek.setParent(ik, fk)
      })), kk.edges().forEach((ik => {
        let Dk = qi(kk.edge(ik));
        ek.setEdge(ik, Object.assign({}, di, ui(Dk, si), ie(Dk, Vi)))
      })), ek
    }

    function ui(kk, ek) {
      return De(ie(kk, ek), Number)
    }

    function qi(kk) {
      let ek = {};
      return kk && Object.entries(kk).forEach((kk => {
        let [ik, Dk] = kk;
        "string" == typeof ik && (ik = ik.toLowerCase()), ek[ik] = Dk
      })), ek
    }

    function Ii(kk) {
      let ek = Tk(kk),
        ik = new tk({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return kk.nodes().forEach((ek => {
        ik.setNode(ek, {
          label: ek
        }), ik.setParent(ek, "layer" + kk.node(ek).rank)
      })), kk.edges().forEach((kk => ik.setEdge(kk.v, kk.w, {}, kk.name))), ek.forEach(((kk, ek) => {
        let Dk = "layer" + ek;
        ik.setNode(Dk, {
          rank: "same"
        }), kk.reduce(((kk, ek) => (ik.setEdge(kk, ek, {
          style: "invis"
        }), ek)))
      })), ik
    }
    var zi = {
        time: Nk,
        notime: Rk
      },
      Qi = {
        graphlib: Sk,
        version: be,
        layout: Ui,
        debug: Ii,
        util: {
          time: Nk,
          notime: Rk
        }
      }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);