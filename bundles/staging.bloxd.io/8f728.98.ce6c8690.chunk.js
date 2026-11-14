/*! For license information please see 8f728.98.ce6c8690.chunk.js.LICENSE.txt */
export const id = 98;
export const ids = [98];
export const modules = {
  5416: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Graph: () => kB,
      debug: () => Qn,
      default: () => vV,
      graphlib: () => rB,
      layout: () => mV,
      util: () => Cn,
      version: () => rn
    });
    var Vc = Object.defineProperty,
      Ic = (cB, Bc, nc) => ((cB, Bc, nc) => Bc in cB ? Vc(cB, Bc, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: nc
      }) : cB[Bc] = nc)(cB, "symbol" != typeof Bc ? Bc + "" : Bc, nc),
      rB = {};
    ((cB, Bc) => {
      for (var nc in Bc) Vc(cB, nc, {
        get: Bc[nc],
        enumerable: !0
      })
    })(rB, {
      Graph: () => kB,
      alg: () => Sc
    });
    var uc = Object.defineProperty,
      sc = (cB, Bc) => {
        for (var nc in Bc) uc(cB, nc, {
          get: Bc[nc],
          enumerable: !0
        })
      },
      Mc = class {
        constructor(cB) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, cB && (this._isDirected = !("directed" in cB) || cB.directed, this._isMultigraph = "multigraph" in cB && cB.multigraph, this._isCompound = "compound" in cB && cB.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(cB) {
          return this._label = cB, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(cB) {
          return this._defaultNodeLabelFn = "function" != typeof cB ? () => cB : cB, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((cB => 0 === Object.keys(this._in[cB]).length))
        }
        sinks() {
          return this.nodes().filter((cB => 0 === Object.keys(this._out[cB]).length))
        }
        setNodes(cB, Bc) {
          return cB.forEach((cB => {
            void 0 !== Bc ? this.setNode(cB, Bc) : this.setNode(cB)
          })), this
        }
        setNode(cB, Bc) {
          return cB in this._nodes ? (arguments.length > 1 && (this._nodes[cB] = Bc), this) : (this._nodes[cB] = arguments.length > 1 ? Bc : this._defaultNodeLabelFn(cB), this._isCompound && (this._parent[cB] = "\0", this._children[cB] = {}, this._children["\0"][cB] = !0), this._in[cB] = {}, this._preds[cB] = {}, this._out[cB] = {}, this._sucs[cB] = {}, ++this._nodeCount, this)
        }
        node(cB) {
          return this._nodes[cB]
        }
        hasNode(cB) {
          return cB in this._nodes
        }
        removeNode(cB) {
          if (cB in this._nodes) {
            let Bc = cB => this.removeEdge(this._edgeObjs[cB]);
            delete this._nodes[cB], this._isCompound && (this._removeFromParentsChildList(cB), delete this._parent[cB], this.children(cB).forEach((cB => {
              this.setParent(cB)
            })), delete this._children[cB]), Object.keys(this._in[cB]).forEach(Bc), delete this._in[cB], delete this._preds[cB], Object.keys(this._out[cB]).forEach(Bc), delete this._out[cB], delete this._sucs[cB], --this._nodeCount
          }
          return this
        }
        setParent(cB, Bc) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Bc) Bc = "\0";
          else {
            for (let nc = Bc += ""; void 0 !== nc; nc = this.parent(nc))
              if (nc === cB) throw new Error("Setting " + Bc + " as parent of " + cB + " would create a cycle");
            this.setNode(Bc)
          }
          return this.setNode(cB), this._removeFromParentsChildList(cB), this._parent[cB] = Bc, this._children[Bc][cB] = !0, this
        }
        parent(cB) {
          if (this._isCompound) {
            let Bc = this._parent[cB];
            if ("\0" !== Bc) return Bc
          }
        }
        children() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Bc = this._children[cB];
            if (Bc) return Object.keys(Bc)
          } else {
            if ("\0" === cB) return this.nodes();
            if (this.hasNode(cB)) return []
          }
          return []
        }
        predecessors(cB) {
          let Bc = this._preds[cB];
          if (Bc) return Object.keys(Bc)
        }
        successors(cB) {
          let Bc = this._sucs[cB];
          if (Bc) return Object.keys(Bc)
        }
        neighbors(cB) {
          let Bc = this.predecessors(cB);
          if (Bc) {
            let nc = new Set(Bc),
              Vc = this.successors(cB);
            if (Vc)
              for (let cB of Vc) nc.add(cB);
            return Array.from(nc.values())
          }
        }
        isLeaf(cB) {
          var Bc;
          let nc;
          return nc = this.isDirected() ? this.successors(cB) : this.neighbors(cB), 0 === (null != (Bc = null == nc ? void 0 : nc.length) ? Bc : 0)
        }
        filterNodes(cB) {
          let Bc = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Bc.setGraph(this.graph()), Object.entries(this._nodes).forEach((nc => {
            let [Vc, Ic] = nc;
            cB(Vc) && Bc.setNode(Vc, Ic)
          })), Object.values(this._edgeObjs).forEach((cB => {
            Bc.hasNode(cB.v) && Bc.hasNode(cB.w) && Bc.setEdge(cB, this.edge(cB))
          }));
          let nc = {},
            Vc = cB => {
              let Ic = this.parent(cB);
              return !Ic || Bc.hasNode(Ic) ? (nc[cB] = Ic, Ic) : Ic in nc ? nc[Ic] : Vc(Ic)
            };
          return this._isCompound && Bc.nodes().forEach((cB => Bc.setParent(cB, Vc(cB)))), Bc
        }
        setDefaultEdgeLabel(cB) {
          return this._defaultEdgeLabelFn = "function" != typeof cB ? () => cB : cB, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(cB, Bc) {
          return cB.reduce(((cB, nc) => (void 0 !== Bc ? this.setEdge(cB, nc, Bc) : this.setEdge(cB, nc), nc))), this
        }
        setEdge(cB, Bc, nc, Vc) {
          let Ic, rB, uc, sc, Mc = !1;
          "object" == typeof cB && null !== cB && "v" in cB ? (Ic = cB.v, rB = cB.w, uc = cB.name, 2 === arguments.length && (sc = Bc, Mc = !0)) : (Ic = cB, rB = Bc, uc = Vc, arguments.length > 2 && (sc = nc, Mc = !0)), Ic = "" + Ic, rB = "" + rB, void 0 !== uc && (uc = "" + uc);
          let qB = Oc(this._isDirected, Ic, rB, uc);
          if (qB in this._edgeLabels) return Mc && (this._edgeLabels[qB] = sc), this;
          if (void 0 !== uc && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Ic), this.setNode(rB), this._edgeLabels[qB] = Mc ? sc : this._defaultEdgeLabelFn(Ic, rB, uc);
          let Tc = function(cB, Bc, nc, Vc) {
            let Ic = "" + Bc,
              rB = "" + nc;
            if (!cB && Ic > rB) {
              let cB = Ic;
              Ic = rB, rB = cB
            }
            let uc = {
              v: Ic,
              w: rB
            };
            return Vc && (uc.name = Vc), uc
          }(this._isDirected, Ic, rB, uc);
          return Ic = Tc.v, rB = Tc.w, Object.freeze(Tc), this._edgeObjs[qB] = Tc, Pc(this._preds[rB], Ic), Pc(this._sucs[Ic], rB), this._in[rB][qB] = Tc, this._out[Ic][qB] = Tc, this._edgeCount++, this
        }
        edge(cB, Bc, nc) {
          let Vc = 1 === arguments.length ? Tc(this._isDirected, cB) : Oc(this._isDirected, cB, Bc, nc);
          return this._edgeLabels[Vc]
        }
        edgeAsObj(cB, Bc, nc) {
          let Vc = 1 === arguments.length ? this.edge(cB) : this.edge(cB, Bc, nc);
          return "object" != typeof Vc || null === Vc ? {
            label: Vc
          } : Vc
        }
        hasEdge(cB, Bc, nc) {
          return (1 === arguments.length ? Tc(this._isDirected, cB) : Oc(this._isDirected, cB, Bc, nc)) in this._edgeLabels
        }
        removeEdge(cB, Bc, nc) {
          let Vc = 1 === arguments.length ? Tc(this._isDirected, cB) : Oc(this._isDirected, cB, Bc, nc),
            Ic = this._edgeObjs[Vc];
          if (Ic) {
            let cB = Ic.v,
              Bc = Ic.w;
            delete this._edgeLabels[Vc], delete this._edgeObjs[Vc], qB(this._preds[Bc], cB), qB(this._sucs[cB], Bc), delete this._in[Bc][Vc], delete this._out[cB][Vc], this._edgeCount--
          }
          return this
        }
        inEdges(cB, Bc) {
          return this.isDirected() ? this.filterEdges(this._in[cB], cB, Bc) : this.nodeEdges(cB, Bc)
        }
        outEdges(cB, Bc) {
          return this.isDirected() ? this.filterEdges(this._out[cB], cB, Bc) : this.nodeEdges(cB, Bc)
        }
        nodeEdges(cB, Bc) {
          if (cB in this._nodes) return this.filterEdges({
            ...this._in[cB],
            ...this._out[cB]
          }, cB, Bc)
        }
        _removeFromParentsChildList(cB) {
          delete this._children[this._parent[cB]][cB]
        }
        filterEdges(cB, Bc, nc) {
          if (!cB) return;
          let Vc = Object.values(cB);
          return nc ? Vc.filter((cB => cB.v === Bc && cB.w === nc || cB.v === nc && cB.w === Bc)) : Vc
        }
      };

    function Pc(cB, Bc) {
      cB[Bc] ? cB[Bc]++ : cB[Bc] = 1
    }

    function qB(cB, Bc) {
      void 0 !== cB[Bc] && !--cB[Bc] && delete cB[Bc]
    }

    function Oc(cB, Bc, nc, Vc) {
      let Ic = "" + Bc,
        rB = "" + nc;
      if (!cB && Ic > rB) {
        let cB = Ic;
        Ic = rB, rB = cB
      }
      return Ic + "\x01" + rB + "\x01" + (void 0 === Vc ? "\0" : Vc)
    }

    function Tc(cB, Bc) {
      return Oc(cB, Bc.v, Bc.w, Bc.name)
    }

    function fc(cB) {
      let Bc = {
          options: {
            directed: cB.isDirected(),
            multigraph: cB.isMultigraph(),
            compound: cB.isCompound()
          },
          nodes: mB(cB),
          edges: ec(cB)
        },
        nc = cB.graph();
      return void 0 !== nc && (Bc.value = structuredClone(nc)), Bc
    }

    function mB(cB) {
      return cB.nodes().map((Bc => {
        let nc = cB.node(Bc),
          Vc = cB.parent(Bc),
          Ic = {
            v: Bc
          };
        return void 0 !== nc && (Ic.value = nc), void 0 !== Vc && (Ic.parent = Vc), Ic
      }))
    }

    function ec(cB) {
      return cB.edges().map((Bc => {
        let nc = cB.edge(Bc),
          Vc = {
            v: Bc.v,
            w: Bc.w
          };
        return void 0 !== Bc.name && (Vc.name = Bc.name), void 0 !== nc && (Vc.value = nc), Vc
      }))
    }

    function tB(cB) {
      let Bc = new Mc(cB.options);
      return void 0 !== cB.value && Bc.setGraph(cB.value), cB.nodes.forEach((cB => {
        Bc.setNode(cB.v, cB.value), cB.parent && Bc.setParent(cB.v, cB.parent)
      })), cB.edges.forEach((cB => {
        Bc.setEdge({
          v: cB.v,
          w: cB.w,
          name: cB.name
        }, cB.value)
      })), Bc
    }
    sc({}, {
      read: () => tB,
      write: () => fc
    });
    var Sc = {};
    sc(Sc, {
      CycleException: () => Zc,
      bellmanFord: () => zB,
      components: () => pc,
      dijkstra: () => lc,
      dijkstraAll: () => Yc,
      findCycles: () => gB,
      floydWarshall: () => bB,
      isAcyclic: () => Cc,
      postorder: () => Ec,
      preorder: () => oc,
      prim: () => Wc,
      shortestPaths: () => wc,
      tarjan: () => Lc,
      topsort: () => Qc
    });
    var yB = () => 1;

    function zB(cB, Bc, nc, Vc) {
      return function(cB, Bc, nc, Vc) {
        let Ic, rB = {},
          uc = 0,
          sc = cB.nodes(),
          Mc = function(cB) {
            let Bc = rB[cB.v],
              Vc = rB[cB.w];
            if (!Bc || !Vc) return;
            let uc = nc(cB);
            Bc.distance + uc < Vc.distance && (rB[cB.w] = {
              distance: Bc.distance + uc,
              predecessor: cB.v
            }, Ic = !0)
          },
          Pc = function() {
            sc.forEach((function(cB) {
              Vc(cB).forEach((function(Bc) {
                let nc = Bc.v === cB ? Bc.v : Bc.w,
                  Vc = nc === Bc.v ? Bc.w : Bc.v;
                Mc({
                  v: nc,
                  w: Vc
                })
              }))
            }))
          };
        sc.forEach((function(cB) {
          let nc = cB === Bc ? 0 : Number.POSITIVE_INFINITY;
          rB[cB] = {
            distance: nc,
            predecessor: ""
          }
        }));
        let qB = sc.length;
        for (let Oc = 1; Oc < qB && (Ic = !1, uc++, Pc(), Ic); Oc++);
        if (uc === qB - 1 && (Ic = !1, Pc(), Ic)) throw new Error("The graph contains a negative weight cycle");
        return rB
      }(cB, String(Bc), nc || yB, Vc || function(Bc) {
        var nc;
        return null != (nc = cB.outEdges(Bc)) ? nc : []
      })
    }

    function pc(cB) {
      let Bc, nc = {},
        Vc = [];

      function Ic(Vc) {
        var rB, uc;
        Vc in nc || (nc[Vc] = !0, Bc.push(Vc), null == (rB = cB.successors(Vc)) || rB.forEach(Ic), null == (uc = cB.predecessors(Vc)) || uc.forEach(Ic))
      }
      return cB.nodes().forEach((function(cB) {
        Bc = [], Ic(cB), Bc.length && Vc.push(Bc)
      })), Vc
    }
    var hc = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((cB => cB.key))
        }
        has(cB) {
          return cB in this._keyIndices
        }
        priority(cB) {
          let Bc = this._keyIndices[cB];
          if (void 0 !== Bc) return this._arr[Bc].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(cB, Bc) {
          let nc = this._keyIndices,
            Vc = String(cB);
          if (!(Vc in nc)) {
            let cB = this._arr,
              Ic = cB.length;
            return nc[Vc] = Ic, cB.push({
              key: Vc,
              priority: Bc
            }), this._decrease(Ic), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let cB = this._arr.pop();
          return delete this._keyIndices[cB.key], this._heapify(0), cB.key
        }
        decrease(cB, Bc) {
          let nc = this._keyIndices[cB];
          if (void 0 === nc) throw new Error(`Key not found: ${cB}`);
          let Vc = this._arr[nc].priority;
          if (Bc > Vc) throw new Error(`New priority is greater than current priority. Key: ${cB} Old: ${Vc} New: ${Bc}`);
          this._arr[nc].priority = Bc, this._decrease(nc)
        }
        _heapify(cB) {
          let Bc = this._arr,
            nc = 2 * cB,
            Vc = nc + 1,
            Ic = cB;
          nc < Bc.length && (Ic = Bc[nc].priority < Bc[Ic].priority ? nc : Ic, Vc < Bc.length && (Ic = Bc[Vc].priority < Bc[Ic].priority ? Vc : Ic), Ic !== cB && (this._swap(cB, Ic), this._heapify(Ic)))
        }
        _decrease(cB) {
          let Bc, nc = this._arr,
            Vc = nc[cB].priority;
          for (; 0 !== cB && (Bc = cB >> 1, !(nc[Bc].priority < Vc));) this._swap(cB, Bc), cB = Bc
        }
        _swap(cB, Bc) {
          let nc = this._arr,
            Vc = this._keyIndices,
            Ic = nc[cB],
            rB = nc[Bc];
          nc[cB] = rB, nc[Bc] = Ic, Vc[rB.key] = cB, Vc[Ic.key] = Bc
        }
      },
      aB = () => 1;

    function lc(cB, Bc, nc, Vc) {
      return function(cB, Bc, nc, Vc) {
        let Ic, rB, uc = {},
          sc = new hc,
          Mc = function(cB) {
            let Bc = cB.v !== Ic ? cB.v : cB.w,
              Vc = uc[Bc];
            if (!Vc) return;
            let Mc = nc(cB),
              Pc = rB.distance + Mc;
            if (Mc < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + cB + " Weight: " + Mc);
            Pc < Vc.distance && (Vc.distance = Pc, Vc.predecessor = Ic, sc.decrease(Bc, Pc))
          };
        for (cB.nodes().forEach((function(cB) {
            let nc = cB === Bc ? 0 : Number.POSITIVE_INFINITY;
            uc[cB] = {
              distance: nc,
              predecessor: ""
            }, sc.add(cB, nc)
          })); sc.size() > 0;) {
          Ic = sc.removeMin();
          let cB = uc[Ic];
          if (!cB || cB.distance === Number.POSITIVE_INFINITY) break;
          rB = cB, Vc(Ic).forEach(Mc)
        }
        return uc
      }(cB, String(Bc), nc || aB, Vc || function(Bc) {
        var nc;
        return null != (nc = cB.outEdges(Bc)) ? nc : []
      })
    }

    function Yc(cB, Bc, nc) {
      return cB.nodes().reduce((function(Vc, Ic) {
        return Vc[Ic] = lc(cB, Ic, Bc, nc), Vc
      }), {})
    }

    function Lc(cB) {
      let Bc = 0,
        nc = [],
        Vc = {},
        Ic = [];

      function rB(uc) {
        var sc;
        let Mc = Vc[uc] = {
          onStack: !0,
          lowlink: Bc,
          index: Bc++
        };
        if (nc.push(uc), null == (sc = cB.successors(uc)) || sc.forEach((function(cB) {
            if (cB in Vc) {
              let Bc = Vc[cB];
              null != Bc && Bc.onStack && (Mc.lowlink = Math.min(Mc.lowlink, Bc.index))
            } else {
              rB(cB);
              let Bc = Vc[cB];
              Bc && (Mc.lowlink = Math.min(Mc.lowlink, Bc.lowlink))
            }
          })), Mc.lowlink === Mc.index) {
          let cB, Bc = [];
          do {
            cB = nc.pop();
            let Ic = Vc[cB];
            Ic && (Ic.onStack = !1), Bc.push(cB)
          } while (uc !== cB);
          Ic.push(Bc)
        }
      }
      return cB.nodes().forEach((function(cB) {
        cB in Vc || rB(cB)
      })), Ic
    }

    function gB(cB) {
      return Lc(cB).filter((function(Bc) {
        var nc;
        let Vc = Bc[0];
        return !!Vc && (Bc.length > 1 || 1 === Bc.length && (null != (nc = cB.outEdges(Vc, Vc)) ? nc : []).length > 0)
      }))
    }
    var Uc = () => 1;

    function bB(cB, Bc, nc) {
      return function(cB, Bc, nc) {
        let Vc = {},
          Ic = cB.nodes();
        return Ic.forEach((function(cB) {
          let rB = {};
          Vc[cB] = rB, rB[cB] = {
            distance: 0,
            predecessor: ""
          }, Ic.forEach((function(Bc) {
            cB !== Bc && (rB[Bc] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), nc(cB).forEach((function(nc) {
            let Vc = nc.v === cB ? nc.w : nc.v,
              Ic = Bc(nc);
            rB[Vc] = {
              distance: Ic,
              predecessor: cB
            }
          }))
        })), Ic.forEach((function(cB) {
          let Bc = Vc[cB];
          Bc && Ic.forEach((function(nc) {
            let rB = Vc[nc];
            rB && Ic.forEach((function(nc) {
              let Vc = rB[cB],
                Ic = Bc[nc],
                uc = rB[nc];
              if (Vc && Ic && uc) {
                let cB = Vc.distance + Ic.distance;
                cB < uc.distance && (uc.distance = cB, uc.predecessor = Ic.predecessor)
              }
            }))
          }))
        })), Vc
      }(cB, Bc || Uc, nc || function(Bc) {
        var nc;
        return null != (nc = cB.outEdges(Bc)) ? nc : []
      })
    }
    var Zc = class extends Error {
      constructor(cB) {
        super(cB), this.name = "CycleException"
      }
    };

    function Qc(cB) {
      let Bc = {},
        nc = {},
        Vc = [];
      if (cB.sinks().forEach((function Ic(rB) {
          var uc;
          if (rB in nc) throw new Zc;
          rB in Bc || (nc[rB] = !0, Bc[rB] = !0, null == (uc = cB.predecessors(rB)) || uc.forEach(Ic), delete nc[rB], Vc.push(rB))
        })), Object.keys(Bc).length !== cB.nodeCount()) throw new Zc;
      return Vc
    }

    function Cc(cB) {
      try {
        Qc(cB)
      } catch (Bc) {
        if (Bc instanceof Zc) return !1;
        throw Bc
      }
      return !0
    }

    function vB(cB, Bc, nc, Vc, Ic) {
      Array.isArray(Bc) || (Bc = [Bc]);
      let rB = Bc => {
          var nc;
          return null != (nc = cB.isDirected() ? cB.successors(Bc) : cB.neighbors(Bc)) ? nc : []
        },
        uc = {};
      return Bc.forEach((function(Bc) {
        if (!cB.hasNode(Bc)) throw new Error("Graph does not have node: " + Bc);
        Ic = Dc(cB, Bc, "post" === nc, uc, rB, Vc, Ic)
      })), Ic
    }

    function Dc(cB, Bc, nc, Vc, Ic, rB, uc) {
      return Bc in Vc || (Vc[Bc] = !0, nc || (uc = rB(uc, Bc)), Ic(Bc).forEach((function(Bc) {
        uc = Dc(cB, Bc, nc, Vc, Ic, rB, uc)
      })), nc && (uc = rB(uc, Bc))), uc
    }

    function Nc(cB, Bc, nc) {
      return vB(cB, Bc, nc, (function(cB, Bc) {
        return cB.push(Bc), cB
      }), [])
    }

    function Ec(cB, Bc) {
      return Nc(cB, Bc, "post")
    }

    function oc(cB, Bc) {
      return Nc(cB, Bc, "pre")
    }

    function Wc(cB, Bc) {
      var nc;
      let Vc, Ic = new Mc,
        rB = {},
        uc = new hc;

      function sc(cB) {
        let nc = cB.v === Vc ? cB.w : cB.v,
          Ic = uc.priority(nc);
        if (void 0 !== Ic) {
          let sc = Bc(cB);
          sc < Ic && (rB[nc] = Vc, uc.decrease(nc, sc))
        }
      }
      if (0 === cB.nodeCount()) return Ic;
      cB.nodes().forEach((function(cB) {
        uc.add(cB, Number.POSITIVE_INFINITY), Ic.setNode(cB)
      }));
      let Pc = cB.nodes()[0];
      void 0 !== Pc && uc.decrease(Pc, 0);
      let qB = !1;
      for (; uc.size() > 0;) {
        if (Vc = uc.removeMin(), Vc in rB) Ic.setEdge(Vc, rB[Vc]);
        else {
          if (qB) throw new Error("Input graph is not connected: " + cB);
          qB = !0
        }
        null == (nc = cB.nodeEdges(Vc)) || nc.forEach(sc)
      }
      return Ic
    }

    function wc(cB, Bc, nc, Vc) {
      return function(cB, Bc, nc, Vc) {
        if (void 0 === nc) return lc(cB, Bc, nc, Vc);
        let Ic = !1,
          rB = cB.nodes();
        for (let uc = 0; uc < rB.length; uc++) {
          let sc = rB[uc];
          if (void 0 === sc) continue;
          let Mc = Vc(sc);
          for (let cB = 0; cB < Mc.length; cB++) {
            let Bc = Mc[cB];
            if (!Bc) continue;
            let Vc = Bc.v === sc ? Bc.v : Bc.w;
            nc({
              v: Vc,
              w: Vc === Bc.v ? Bc.w : Bc.v
            }) < 0 && (Ic = !0)
          }
          if (Ic) return zB(cB, Bc, nc, Vc)
        }
        return lc(cB, Bc, nc, Vc)
      }(cB, Bc, nc, null != Vc ? Vc : Bc => {
        var nc;
        return null != (nc = cB.outEdges(Bc)) ? nc : []
      })
    }
    var kB = Mc;

    function Xc(cB, Bc, nc, Vc) {
      let Ic = Vc;
      for (; cB.hasNode(Ic);) Ic = Gc(Vc);
      return nc.dummy = Bc, cB.setNode(Ic, nc), Ic
    }

    function Hc(cB) {
      let Bc = new kB({
        multigraph: cB.isMultigraph()
      }).setGraph(cB.graph());
      return cB.nodes().forEach((nc => {
        cB.children(nc).length || Bc.setNode(nc, cB.node(nc))
      })), cB.edges().forEach((nc => {
        Bc.setEdge(nc, cB.edge(nc))
      })), Bc
    }

    function Fc(cB, Bc) {
      let nc, Vc, Ic = cB.x,
        rB = cB.y,
        uc = Bc.x - Ic,
        sc = Bc.y - rB,
        Mc = cB.width / 2,
        Pc = cB.height / 2;
      if (!uc && !sc) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(sc) * Mc > Math.abs(uc) * Pc ? (sc < 0 && (Pc = -Pc), nc = Pc * uc / sc, Vc = Pc) : (uc < 0 && (Mc = -Mc), nc = Mc, Vc = Mc * sc / uc), {
        x: Ic + nc,
        y: rB + Vc
      }
    }

    function Jc(cB) {
      let Bc = cn(Kc(cB) + 1).map((() => []));
      return cB.nodes().forEach((nc => {
        let Vc = cB.node(nc),
          Ic = Vc.rank;
        void 0 !== Ic && (Bc[Ic] || (Bc[Ic] = []), Bc[Ic][Vc.order] = nc)
      })), Bc
    }

    function jB(cB, Bc, nc, Vc) {
      let Ic = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Ic.rank = nc, Ic.order = Vc), Xc(cB, "border", Ic, Bc)
    }
    var Rc = 65535;

    function iB(cB, Bc) {
      if (Bc.length > Rc) {
        let nc = function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rc,
            nc = [];
          for (let Vc = 0; Vc < cB.length; Vc += Bc) {
            let Ic = cB.slice(Vc, Vc + Bc);
            nc.push(Ic)
          }
          return nc
        }(Bc);
        return cB(...nc.map((Bc => cB(...Bc))))
      }
      return cB(...Bc)
    }

    function Kc(cB) {
      let Bc = cB.nodes().map((Bc => {
        let nc = cB.node(Bc).rank;
        return void 0 === nc ? Number.MIN_VALUE : nc
      }));
      return iB(Math.max, Bc)
    }

    function xB(cB, Bc) {
      let nc = Date.now();
      try {
        return Bc()
      } finally {
        console.log(cB + " time: " + (Date.now() - nc) + "ms")
      }
    }

    function dc(cB, Bc) {
      return Bc()
    }
    var Ac = 0;

    function Gc(cB) {
      return cB + "" + ++Ac
    }

    function cn(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Bc && (Bc = cB, cB = 0);
      let Vc = cB => cB < Bc;
      nc < 0 && (Vc = cB => Bc < cB);
      let Ic = [];
      for (let rB = cB; Vc(rB); rB += nc) Ic.push(rB);
      return Ic
    }

    function BB(cB, Bc) {
      let nc = {};
      for (let Vc of Bc) void 0 !== cB[Vc] && (nc[Vc] = cB[Vc]);
      return nc
    }

    function nB(cB, Bc) {
      let nc;
      return nc = "string" == typeof Bc ? cB => cB[Bc] : Bc, Object.entries(cB).reduce(((cB, Bc) => {
        let [Vc, Ic] = Bc;
        return cB[Vc] = nc(Ic, Vc), cB
      }), {})
    }
    var VB = "\0";

    function IB(cB, Bc, nc) {
      var Vc, Ic, rB, uc, sc, Mc;
      if (!(cB && Bc && nc && "edge" === Bc.dummy && "edge" === nc.dummy && Bc.edgeObj && nc.edgeObj && cB[Bc.edgeObj.v] && cB[nc.edgeObj.v] && cB[Bc.edgeObj.w] && cB[nc.edgeObj.w])) return 0;
      let Pc = !0;
      Bc.edgeObj.w === nc.edgeObj.w && (Pc = !1);
      let qB = Pc ? null != (Ic = null == (Vc = cB[Bc.edgeObj.v]) ? void 0 : Vc.rank) ? Ic : NaN : null != (uc = null == (rB = cB[Bc.edgeObj.w]) ? void 0 : rB.rank) ? uc : NaN,
        Oc = Object.entries(cB).find((cB => {
          var nc, Vc;
          return (null == (nc = cB[1].edgeObj) ? void 0 : nc.v) === Bc.edgeObj.v && (null == (Vc = cB[1].edgeObj) ? void 0 : Vc.w) === Bc.edgeObj.w && cB[1].rank === qB
        })),
        Tc = Object.entries(cB).find((cB => {
          var Bc, Vc;
          return (null == (Bc = cB[1].edgeObj) ? void 0 : Bc.v) === nc.edgeObj.v && (null == (Vc = cB[1].edgeObj) ? void 0 : Vc.w) === nc.edgeObj.w && cB[1].rank === qB
        }));
      if (!Oc || !Tc) return 0;
      let fc = null != (sc = Oc[1].order) ? sc : NaN,
        mB = null != (Mc = Tc[1].order) ? Mc : NaN;
      return isNaN(fc - mB) ? 0 : fc - mB
    }
    var rn = "3.1.1";

    function uB(cB) {
      cB._prev._next = cB._next, cB._next._prev = cB._prev, delete cB._next, delete cB._prev
    }

    function sB(cB, Bc) {
      if ("_next" !== cB && "_prev" !== cB) return Bc
    }
    var MB = class {
        constructor() {
          Ic(this, "_sentinel");
          let cB = {};
          cB._next = cB._prev = cB, this._sentinel = cB
        }
        dequeue() {
          let cB = this._sentinel,
            Bc = cB._prev;
          if (Bc !== cB) return uB(Bc), Bc
        }
        enqueue(cB) {
          let Bc = this._sentinel;
          cB._prev && cB._next && uB(cB), cB._next = Bc._next, Bc._next._prev = cB, Bc._next = cB, cB._prev = Bc
        }
        toString() {
          let cB = [],
            Bc = this._sentinel,
            nc = Bc._prev;
          for (; nc !== Bc;) cB.push(JSON.stringify(nc, sB)), nc = nc._prev;
          return "[" + cB.join(", ") + "]"
        }
      },
      PB = () => 1;

    function qn(cB, Bc) {
      if (cB.nodeCount() <= 1) return [];
      let nc = function(cB, Bc) {
        let nc = new kB,
          Vc = 0,
          Ic = 0;
        cB.nodes().forEach((cB => {
          nc.setNode(cB, {
            v: cB,
            in: 0,
            out: 0
          })
        })), cB.edges().forEach((cB => {
          let rB = nc.edge(cB.v, cB.w) || 0,
            uc = Bc(cB),
            sc = rB + uc;
          nc.setEdge(cB.v, cB.w, sc);
          let Mc = nc.node(cB.v),
            Pc = nc.node(cB.w);
          Ic = Math.max(Ic, Mc.out += uc), Vc = Math.max(Vc, Pc.in += uc)
        }));
        let rB = function(cB) {
            let Bc = [];
            for (let nc = 0; nc < cB; nc++) Bc.push(nc);
            return Bc
          }(Ic + Vc + 3).map((() => new MB)),
          uc = Vc + 1;
        return nc.nodes().forEach((cB => {
          TB(rB, uc, nc.node(cB))
        })), {
          graph: nc,
          buckets: rB,
          zeroIdx: uc
        }
      }(cB, Bc || PB);
      return function(cB, Bc, nc) {
        var Vc;
        let Ic, rB = [],
          uc = Bc[Bc.length - 1],
          sc = Bc[0];
        for (; cB.nodeCount();) {
          for (; Ic = sc.dequeue();) OB(cB, Bc, nc, Ic);
          for (; Ic = uc.dequeue();) OB(cB, Bc, nc, Ic);
          if (cB.nodeCount())
            for (let uc = Bc.length - 2; uc > 0; --uc)
              if (Ic = null == (Vc = Bc[uc]) ? void 0 : Vc.dequeue(), Ic) {
                rB = rB.concat(OB(cB, Bc, nc, Ic, !0) || []);
                break
              }
        }
        return rB
      }(nc.graph, nc.buckets, nc.zeroIdx).flatMap((Bc => cB.outEdges(Bc.v, Bc.w) || []))
    }

    function OB(cB, Bc, nc, Vc, Ic) {
      let rB = [],
        uc = Ic ? rB : void 0;
      return (cB.inEdges(Vc.v) || []).forEach((Vc => {
        let uc = cB.edge(Vc),
          sc = cB.node(Vc.v);
        Ic && rB.push({
          v: Vc.v,
          w: Vc.w
        }), sc.out -= uc, TB(Bc, nc, sc)
      })), (cB.outEdges(Vc.v) || []).forEach((Vc => {
        let Ic = cB.edge(Vc),
          rB = Vc.w,
          uc = cB.node(rB);
        uc.in -= Ic, TB(Bc, nc, uc)
      })), cB.removeNode(Vc.v), uc
    }

    function TB(cB, Bc, nc) {
      var Vc, Ic, rB;
      nc.out ? nc.in ? null == (rB = cB[nc.out - nc.in + Bc]) || rB.enqueue(nc) : null == (Ic = cB[cB.length - 1]) || Ic.enqueue(nc) : null == (Vc = cB[0]) || Vc.enqueue(nc)
    }

    function fB(cB, Bc) {
      var nc;
      ("greedy" === cB.graph().acyclicer ? qn(cB, (nc = cB, cB => nc.edge(cB).weight)) : function(cB, Bc) {
        let nc = [],
          Vc = {},
          Ic = {};

        function rB(Bc) {
          Object.hasOwn(Ic, Bc) || (Ic[Bc] = !0, Vc[Bc] = !0, cB.outEdges(Bc).forEach((cB => {
            Object.hasOwn(Vc, cB.w) ? nc.push(cB) : rB(cB.w)
          })), delete Vc[Bc])
        }

        function uc(rB) {
          var sc;
          Object.hasOwn(Ic, rB) || (Ic[rB] = !0, Vc[rB] = !0, null == (sc = cB.outEdges(rB)) || sc.forEach((Ic => {
            var sc, Mc;
            Object.hasOwn(Vc, Ic.w) || (null == (sc = Bc.node(rB)) ? void 0 : sc.rank) > (null == (Mc = Bc.node(Ic.w)) ? void 0 : Mc.rank) && function(cB, Bc, nc) {
              let Vc = new Set;

              function Ic(Bc) {
                var rB;
                if (cB.sources().includes(Bc)) return !0;
                Vc.add(Bc);
                for (let uc of null != (rB = cB.inEdges(Bc)) ? rB : [])
                  if ((uc.v !== nc.v || uc.w !== nc.w) && !Vc.has(uc.v) && Ic(uc.v)) return !0;
                return !1
              }
              return Ic(Bc)
            }(cB, Ic.w, Ic) ? nc.push(Ic) : uc(Ic.w)
          })), delete Vc[rB])
        }
        let sc = rB;
        return Bc && "function" == typeof Bc.node && (sc = uc), cB.sources().forEach(sc), cB.nodes().forEach(sc), nc
      }(cB, null != Bc ? Bc : null)).forEach((Bc => {
        let nc = cB.edge(Bc);
        cB.removeEdge(Bc), nc.forwardName = Bc.name, nc.reversed = !0, cB.setEdge(Bc.w, Bc.v, nc, Gc("rev"))
      }))
    }

    function mn(cB) {
      cB.graph().dummyChains = [], cB.edges().forEach((Bc => function(cB, Bc) {
        let nc, Vc, Ic, rB = Bc.v,
          uc = cB.node(rB).rank,
          sc = Bc.w,
          Mc = cB.node(sc).rank,
          Pc = Bc.name,
          qB = cB.edge(Bc),
          Oc = qB.labelRank;
        if (Mc === uc + 1) return;
        for (cB.removeEdge(Bc), Ic = 0, ++uc; uc < Mc; ++Ic, ++uc) qB.points = [], Vc = {
          width: 0,
          height: 0,
          edgeLabel: qB,
          edgeObj: Bc,
          rank: uc
        }, nc = Xc(cB, "edge", Vc, "_d"), uc === Oc && (Vc.width = qB.width, Vc.height = qB.height, Vc.dummy = "edge-label", Vc.labelpos = qB.labelpos), cB.setEdge(rB, nc, {
          weight: qB.weight
        }, Pc), 0 === Ic && cB.graph().dummyChains.push(nc), rB = nc;
        cB.setEdge(rB, sc, {
          weight: qB.weight
        }, Pc)
      }(cB, Bc)))
    }

    function eB(cB) {
      let Bc = {};
      cB.sources().forEach((function nc(Vc) {
        let Ic = cB.node(Vc);
        if (Object.hasOwn(Bc, Vc)) return Ic.rank;
        Bc[Vc] = !0;
        let rB = cB.outEdges(Vc),
          uc = rB ? rB.map((Bc => null == Bc ? Number.POSITIVE_INFINITY : nc(Bc.w) - cB.edge(Bc).minlen)) : [],
          sc = iB(Math.min, uc);
        return sc === Number.POSITIVE_INFINITY && (sc = 0), Ic.rank = sc
      }))
    }

    function tn(cB, Bc) {
      return cB.node(Bc.w).rank - cB.node(Bc.v).rank - cB.edge(Bc).minlen
    }
    var SB = function(cB) {
      let Bc = new kB({
          directed: !1
        }),
        nc = cB.nodes();
      if (0 === nc.length) throw new Error("Graph must have at least one node");
      let Vc, Ic, rB = nc[0],
        uc = cB.nodeCount();
      for (Bc.setNode(rB, {}); yn(Bc, cB) < uc && (Vc = zn(Bc, cB), Vc);) Ic = Bc.hasNode(Vc.v) ? tn(cB, Vc) : -tn(cB, Vc), pB(Bc, cB, Ic);
      return Bc
    };

    function yn(cB, Bc) {
      return cB.nodes().forEach((function nc(Vc) {
        let Ic = Bc.nodeEdges(Vc);
        Ic && Ic.forEach((Ic => {
          let rB = Ic.v,
            uc = Vc === rB ? Ic.w : rB;
          !cB.hasNode(uc) && !tn(Bc, Ic) && (cB.setNode(uc, {}), cB.setEdge(Vc, uc, {}), nc(uc))
        }))
      })), cB.nodeCount()
    }

    function zn(cB, Bc) {
      return Bc.edges().reduce(((nc, Vc) => {
        let Ic = Number.POSITIVE_INFINITY;
        return cB.hasNode(Vc.v) !== cB.hasNode(Vc.w) && (Ic = tn(Bc, Vc)), Ic < nc[0] ? [Ic, Vc] : nc
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function pB(cB, Bc, nc) {
      cB.nodes().forEach((cB => Bc.node(cB).rank += nc))
    }
    var {
      preorder: hB,
      postorder: an
    } = Sc, lB = YB;

    function YB(cB) {
      cB = function(cB) {
        let Bc = (new kB).setGraph(cB.graph());
        return cB.nodes().forEach((nc => Bc.setNode(nc, cB.node(nc)))), cB.edges().forEach((nc => {
          let Vc = Bc.edge(nc.v, nc.w) || {
              weight: 0,
              minlen: 1
            },
            Ic = cB.edge(nc);
          Bc.setEdge(nc.v, nc.w, {
            weight: Vc.weight + Ic.weight,
            minlen: Math.max(Vc.minlen, Ic.minlen)
          })
        })), Bc
      }(cB), eB(cB);
      let Bc, nc, Vc = SB(cB);
      for (UB(Vc), LB(Vc, cB); Bc = ZB(Vc);) nc = QB(Vc, cB, Bc), CB(Vc, cB, Bc, nc)
    }

    function LB(cB, Bc) {
      let nc = an(cB, cB.nodes());
      nc = nc.slice(0, nc.length - 1), nc.forEach((nc => function(cB, Bc, nc) {
        let Vc = cB.node(nc).parent,
          Ic = cB.edge(nc, Vc);
        Ic.cutvalue = gn(cB, Bc, nc)
      }(cB, Bc, nc)))
    }

    function gn(cB, Bc, nc) {
      let Vc = cB.node(nc).parent,
        Ic = !0,
        rB = Bc.edge(nc, Vc),
        uc = 0;
      rB || (Ic = !1, rB = Bc.edge(Vc, nc)), uc = rB.weight;
      let sc = Bc.nodeEdges(nc);
      return sc && sc.forEach((rB => {
        let sc = rB.v === nc,
          Mc = sc ? rB.w : rB.v;
        if (Mc !== Vc) {
          let Vc = sc === Ic,
            Pc = Bc.edge(rB).weight;
          if (uc += Vc ? Pc : -Pc, function(cB, Bc, nc) {
              return cB.hasEdge(Bc, nc)
            }(cB, nc, Mc)) {
            let Bc = cB.edge(nc, Mc).cutvalue;
            uc += Vc ? -Bc : Bc
          }
        }
      })), uc
    }

    function UB(cB, Bc) {
      arguments.length < 2 && (Bc = cB.nodes()[0]), bn(cB, {}, 1, Bc)
    }

    function bn(cB, Bc, nc, Vc, Ic) {
      let rB = nc,
        uc = cB.node(Vc);
      Bc[Vc] = !0;
      let sc = cB.neighbors(Vc);
      return sc && sc.forEach((Ic => {
        Object.hasOwn(Bc, Ic) || (nc = bn(cB, Bc, nc, Ic, Vc))
      })), uc.low = rB, uc.lim = nc++, Ic ? uc.parent = Ic : delete uc.parent, nc
    }

    function ZB(cB) {
      return cB.edges().find((Bc => cB.edge(Bc).cutvalue < 0))
    }

    function QB(cB, Bc, nc) {
      let Vc = nc.v,
        Ic = nc.w;
      Bc.hasEdge(Vc, Ic) || (Vc = nc.w, Ic = nc.v);
      let rB = cB.node(Vc),
        uc = cB.node(Ic),
        sc = rB,
        Mc = !1;
      return rB.lim > uc.lim && (sc = uc, Mc = !0), Bc.edges().filter((Bc => Mc === vn(cB, cB.node(Bc.v), sc) && Mc !== vn(cB, cB.node(Bc.w), sc))).reduce(((cB, nc) => tn(Bc, nc) < tn(Bc, cB) ? nc : cB))
    }

    function CB(cB, Bc, nc, Vc) {
      let Ic = nc.v,
        rB = nc.w;
      cB.removeEdge(Ic, rB), cB.setEdge(Vc.v, Vc.w, {}), UB(cB), LB(cB, Bc),
        function(cB, Bc) {
          let nc = cB.nodes().find((Bc => !cB.node(Bc).parent));
          if (!nc) return;
          let Vc = hB(cB, [nc]);
          Vc = Vc.slice(1), Vc.forEach((nc => {
            let Vc = cB.node(nc).parent,
              Ic = Bc.edge(nc, Vc),
              rB = !1;
            Ic || (Ic = Bc.edge(Vc, nc), rB = !0), Bc.node(nc).rank = Bc.node(Vc).rank + (rB ? Ic.minlen : -Ic.minlen)
          }))
        }(cB, Bc)
    }

    function vn(cB, Bc, nc) {
      return nc.low <= Bc.lim && Bc.lim <= nc.lim
    }
    YB.initLowLimValues = UB, YB.initCutValues = LB, YB.calcCutValue = gn, YB.leaveEdge = ZB, YB.enterEdge = QB, YB.exchangeEdges = CB;
    var DB = function(cB) {
      let Bc = cB.graph().ranker;
      if ("function" == typeof Bc) return Bc(cB);
      switch (Bc) {
        case "network-simplex":
        default:
          EB(cB);
          break;
        case "tight-tree":
          ! function(cB) {
            eB(cB), SB(cB)
          }(cB);
          break;
        case "longest-path":
          NB(cB);
        case "none":
      }
    };
    var NB = eB;

    function EB(cB) {
      lB(cB)
    }
    var oB = function(cB) {
      let Bc = function(cB) {
          let Bc = {},
            nc = 0;

          function Vc(Ic) {
            let rB = nc;
            cB.children(Ic).forEach(Vc), Bc[Ic] = {
              low: rB,
              lim: nc++
            }
          }
          return cB.children(VB).forEach(Vc), Bc
        }(cB),
        nc = cB.graph();
      if (!Array.isArray(nc.dummyChains)) return;
      nc.dummyChains.forEach((nc => {
        let Vc = cB.node(nc),
          Ic = Vc.edgeObj,
          rB = function(cB, Bc, nc, Vc) {
            let Ic, rB = [],
              uc = [],
              sc = Math.min(Bc[nc].low, Bc[Vc].low),
              Mc = Math.max(Bc[nc].lim, Bc[Vc].lim);
            Ic = nc;
            do {
              Ic = cB.parent(Ic), rB.push(Ic)
            } while (Ic && (Bc[Ic].low > sc || Mc > Bc[Ic].lim));
            let Pc = Ic,
              qB = Vc;
            for (;
              (qB = cB.parent(qB)) !== Pc;) uc.push(qB);
            return {
              path: rB.concat(uc.reverse()),
              lca: Pc
            }
          }(cB, Bc, Ic.v, Ic.w),
          uc = rB.path,
          sc = rB.lca,
          Mc = 0,
          Pc = uc[Mc],
          qB = !0;
        for (; nc !== Ic.w;) {
          if (Vc = cB.node(nc), qB) {
            for (;
              (Pc = uc[Mc]) !== sc && cB.node(Pc).maxRank < Vc.rank;) Mc++;
            Pc === sc && (qB = !1)
          }
          if (!qB) {
            for (; Mc < uc.length - 1 && cB.node(uc[Mc + 1]).minRank <= Vc.rank;) Mc++;
            Pc = uc[Mc]
          }
          void 0 !== Pc && cB.setParent(nc, Pc), nc = cB.successors(nc)[0]
        }
      }))
    };

    function WB(cB) {
      let Bc = Xc(cB, "root", {}, "_root"),
        nc = function(cB) {
          let Bc = {};

          function nc(Vc, Ic) {
            let rB = cB.children(Vc);
            rB && rB.length && rB.forEach((cB => nc(cB, Ic + 1))), Bc[Vc] = Ic
          }
          return cB.children(VB).forEach((cB => nc(cB, 1))), Bc
        }(cB),
        Vc = Object.values(nc),
        Ic = iB(Math.max, Vc) - 1,
        rB = 2 * Ic + 1;
      cB.graph().nestingRoot = Bc, cB.edges().forEach((Bc => cB.edge(Bc).minlen *= rB));
      let uc = function(cB) {
        return cB.edges().reduce(((Bc, nc) => Bc + cB.edge(nc).weight), 0)
      }(cB) + 1;
      cB.children(VB).forEach((Vc => {
        wB(cB, Bc, rB, uc, Ic, nc, Vc)
      })), cB.graph().nodeRankFactor = rB
    }

    function wB(cB, Bc, nc, Vc, Ic, rB, uc) {
      var sc;
      let Mc = cB.children(uc);
      if (!Mc.length) return void(uc !== Bc && cB.setEdge(Bc, uc, {
        weight: 0,
        minlen: nc
      }));
      let Pc = jB(cB, "_bt"),
        qB = jB(cB, "_bb"),
        Oc = cB.node(uc);
      cB.setParent(Pc, uc), Oc.borderTop = Pc, cB.setParent(qB, uc), Oc.borderBottom = qB, Mc.forEach((sc => {
        var Mc;
        wB(cB, Bc, nc, Vc, Ic, rB, sc);
        let Oc = cB.node(sc),
          Tc = Oc.borderTop ? Oc.borderTop : sc,
          fc = Oc.borderBottom ? Oc.borderBottom : sc,
          mB = Oc.borderTop ? Vc : 2 * Vc,
          ec = Tc !== fc ? 1 : Ic - (null != (Mc = rB[uc]) ? Mc : 0) + 1;
        cB.setEdge(Pc, Tc, {
          weight: mB,
          minlen: ec,
          nestingEdge: !0
        }), cB.setEdge(fc, qB, {
          weight: mB,
          minlen: ec,
          nestingEdge: !0
        })
      })), cB.parent(uc) || cB.setEdge(Bc, Pc, {
        weight: 0,
        minlen: Ic + (null != (sc = rB[uc]) ? sc : 0)
      })
    }
    var kn = function(cB) {
      cB.children(VB).forEach((function Bc(nc) {
        let Vc = cB.children(nc),
          Ic = cB.node(nc);
        if (Vc.length && Vc.forEach(Bc), Ic && Object.hasOwn(Ic, "minRank")) {
          Ic.borderLeft = [], Ic.borderRight = [];
          for (let Bc = Ic.minRank, Vc = Ic.maxRank + 1; Bc < Vc; ++Bc) XB(cB, "borderLeft", "_bl", nc, Ic, Bc), XB(cB, "borderRight", "_br", nc, Ic, Bc)
        }
      }))
    };

    function XB(cB, Bc, nc, Vc, Ic, rB) {
      let uc = {
          width: 0,
          height: 0,
          rank: rB,
          borderType: Bc
        },
        sc = Ic[Bc][rB - 1],
        Mc = Xc(cB, "border", uc, nc);
      Ic[Bc][rB] = Mc, cB.setParent(Mc, Vc), sc && cB.setEdge(sc, Mc, {
        weight: 1
      })
    }

    function HB(cB) {
      var Bc;
      let nc = null == (Bc = cB.graph().rankdir) ? void 0 : Bc.toLowerCase();
      ("bt" === nc || "rl" === nc) && function(cB) {
        cB.nodes().forEach((Bc => jn(cB.node(Bc)))), cB.edges().forEach((Bc => {
          var nc;
          let Vc = cB.edge(Bc);
          null == (nc = Vc.points) || nc.forEach(jn), Object.hasOwn(Vc, "y") && jn(Vc)
        }))
      }(cB), ("lr" === nc || "rl" === nc) && (function(cB) {
        cB.nodes().forEach((Bc => RB(cB.node(Bc)))), cB.edges().forEach((Bc => {
          var nc;
          let Vc = cB.edge(Bc);
          null == (nc = Vc.points) || nc.forEach(RB), Object.hasOwn(Vc, "x") && RB(Vc)
        }))
      }(cB), FB(cB))
    }

    function FB(cB) {
      cB.nodes().forEach((Bc => JB(cB.node(Bc)))), cB.edges().forEach((Bc => JB(cB.edge(Bc))))
    }

    function JB(cB) {
      let Bc = cB.width;
      cB.width = cB.height, cB.height = Bc
    }

    function jn(cB) {
      cB.y = -cB.y
    }

    function RB(cB) {
      let Bc = cB.x;
      cB.x = cB.y, cB.y = Bc
    }

    function KB(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        nc = {},
        Vc = cB.nodes().filter((Bc => !cB.children(Bc).length)),
        Ic = Vc.map((Bc => cB.node(Bc).rank)),
        rB = cn(iB(Math.max, Ic) + 1).map((() => []));
      return Vc.sort(((Bc, nc) => cB.node(Bc).rank - cB.node(nc).rank)).forEach((function Vc(Ic) {
        if (nc[Ic]) return;
        nc[Ic] = !0;
        let uc = cB.node(Ic);
        rB[uc.rank].push(Ic);
        let sc = cB.successors(Ic);
        sc && [...sc].sort(((nc, Vc) => function(nc, Vc) {
          let Ic = cB.node(nc),
            rB = cB.node(Vc);
          return IB(Bc, Ic, rB)
        }(nc, Vc))).forEach(Vc)
      })), rB
    }

    function xn(cB, Bc) {
      let nc = 0;
      for (let Vc = 1; Vc < Bc.length; ++Vc) nc += dB(cB, Bc[Vc - 1], Bc[Vc]);
      return nc
    }

    function dB(cB, Bc, nc) {
      let Vc = function(cB, Bc) {
          return cB.reduce(((cB, nc, Vc) => (cB[nc] = Bc[Vc], cB)), {})
        }(nc, nc.map(((cB, Bc) => Bc))),
        Ic = Bc.flatMap((Bc => {
          let nc = cB.outEdges(Bc);
          return nc ? nc.map((Bc => ({
            pos: Vc[Bc.w],
            weight: cB.edge(Bc).weight
          }))).sort(((cB, Bc) => cB.pos - Bc.pos)) : []
        })),
        rB = 1;
      for (; rB < nc.length;) rB <<= 1;
      let uc = 2 * rB - 1;
      rB -= 1;
      let sc = new Array(uc).fill(0),
        Mc = 0;
      return Ic.forEach((cB => {
        let Bc = cB.pos + rB;
        sc[Bc] += cB.weight;
        let nc = 0;
        for (; Bc > 0;) Bc % 2 && (nc += sc[Bc + 1]), Bc = Bc - 1 >> 1, sc[Bc] += cB.weight;
        Mc += cB.weight * nc
      })), Mc
    }

    function AB(cB, Bc) {
      let nc = {};
      return cB.forEach(((cB, Bc) => {
          let Vc = {
            indegree: 0,
            in: [],
            out: [],
            vs: [cB.v],
            i: Bc
          };
          void 0 !== cB.barycenter && (Vc.barycenter = cB.barycenter, Vc.weight = cB.weight), nc[cB.v] = Vc
        })), Bc.edges().forEach((cB => {
          let Bc = nc[cB.v],
            Vc = nc[cB.w];
          void 0 !== Bc && void 0 !== Vc && (Vc.indegree++, Bc.out.push(Vc))
        })),
        function(cB) {
          let Bc = [];

          function nc(cB) {
            return Bc => {
              Bc.merged || (void 0 === Bc.barycenter || void 0 === cB.barycenter || Bc.barycenter >= cB.barycenter) && function(cB, Bc) {
                let nc = 0,
                  Vc = 0;
                cB.weight && (nc += cB.barycenter * cB.weight, Vc += cB.weight), Bc.weight && (nc += Bc.barycenter * Bc.weight, Vc += Bc.weight), cB.vs = Bc.vs.concat(cB.vs), cB.barycenter = nc / Vc, cB.weight = Vc, cB.i = Math.min(Bc.i, cB.i), Bc.merged = !0
              }(cB, Bc)
            }
          }

          function Vc(Bc) {
            return nc => {
              nc.in.push(Bc), 0 === --nc.indegree && cB.push(nc)
            }
          }
          for (; cB.length;) {
            let Ic = cB.pop();
            Bc.push(Ic), Ic.in.reverse().forEach(nc(Ic)), Ic.out.forEach(Vc(Ic))
          }
          return Bc.filter((cB => !cB.merged)).map((cB => BB(cB, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(nc).filter((cB => !cB.indegree)))
    }

    function GB(cB, Bc, nc, Vc, Ic) {
      let rB = {},
        uc = null,
        sc = null,
        Mc = Ic;
      "boolean" == typeof Bc ? (Mc = Bc, rB = {}) : Bc && (rB = Bc, uc = null != nc ? nc : null, sc = null != Vc ? Vc : null);
      let Pc = function(cB, Bc) {
          let nc = {
            lhs: [],
            rhs: []
          };
          return cB.forEach((cB => {
            Bc(cB) ? nc.lhs.push(cB) : nc.rhs.push(cB)
          })), nc
        }(cB, (cB => Object.hasOwn(cB, "barycenter"))),
        qB = Pc.lhs,
        Oc = Pc.rhs.sort(((cB, Bc) => Bc.i - cB.i)),
        Tc = [],
        fc = 0,
        mB = 0,
        ec = 0;
      qB.sort(function(cB, Bc, nc) {
        return (Vc, Ic) => {
          if (Vc.barycenter < Ic.barycenter) return -1;
          if (Vc.barycenter > Ic.barycenter) return 1;
          if (cB && ("string" == typeof Vc.vs[0] || "string" == typeof Ic.vs[0])) {
            let nc = cB.node(Vc.vs[0]),
              rB = cB.node(Ic.vs[0]),
              uc = IB(Bc, nc, rB);
            if (0 !== uc) return uc
          }
          return nc ? Ic.i - Vc.i : Vc.i - Ic.i
        }
      }(sc, uc, !!Mc));
      for (let [Sc, yB] of Object.entries(rB)) {
        let cB = qB.findIndex((cB => cB.vs[0] === Sc));
        qB.splice(cB + 1, 0, yB)
      }
      ec = cV(Tc, Oc, ec), qB.forEach((cB => {
        ec += cB.vs.length, Tc.push(cB.vs), fc += cB.barycenter * cB.weight, mB += cB.weight, ec = cV(Tc, Oc, ec)
      }));
      let tB = {
        vs: Tc.flat(1)
      };
      return mB && (tB.barycenter = fc / mB, tB.weight = mB), tB
    }

    function cV(cB, Bc, nc) {
      let Vc;
      for (; Bc.length && (Vc = Bc[Bc.length - 1]).i <= nc;) Bc.pop(), cB.push(Vc.vs), nc++;
      return nc
    }

    function Bn(cB, Bc, nc, Vc, Ic) {
      var rB, uc, sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec;
      let tB = null,
        Sc = Ic;
      "boolean" == typeof Vc ? (Sc = Vc, tB = null) : void 0 !== Vc && (tB = Vc);
      let yB = cB.children(Bc),
        zB = cB.node(Bc),
        pc = zB ? zB.borderLeft : void 0,
        hc = zB ? zB.borderRight : void 0,
        aB = {};
      pc && (yB = yB.filter((cB => cB !== pc && cB !== hc)));
      let lc = function(cB) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Bc => {
          let nc = cB.inEdges(Bc);
          if (!nc || !nc.length) return {
            v: Bc
          };
          {
            let Vc = nc.reduce(((Bc, nc) => {
              let Vc = cB.edge(nc),
                Ic = cB.node(nc.v);
              return {
                sum: Bc.sum + Vc.weight * Ic.order,
                weight: Bc.weight + Vc.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Bc,
              barycenter: Vc.sum / Vc.weight,
              weight: Vc.weight
            }
          }
        }))
      }(cB, yB);
      lc.forEach((Bc => {
        if (cB.children(Bc.v).length) {
          let {
            result: Vc
          } = Bn(cB, Bc.v, nc, tB, Sc);
          aB[Bc.v] = Vc, Object.hasOwn(Vc, "barycenter") && function(cB, Bc) {
            void 0 !== cB.barycenter ? (cB.barycenter = (cB.barycenter * cB.weight + Bc.barycenter * Bc.weight) / (cB.weight + Bc.weight), cB.weight += Bc.weight) : (cB.barycenter = Bc.barycenter, cB.weight = Bc.weight)
          }(Bc, Vc)
        }
      }));
      let Yc = AB(lc, nc);
      ! function(cB, Bc) {
        cB.forEach((cB => {
          cB.vs = cB.vs.flatMap((cB => Bc[cB] ? Bc[cB].vs : cB))
        }))
      }(Yc, aB);
      let Lc = {},
        gB = !1;
      for (let bB = 0; bB < Yc.length; bB++)
        for (let Bc = bB + 1; Bc < Yc.length; Bc++)
          if (Yc[bB] && Yc[Bc] && null != (rB = Yc[bB]) && rB.barycenter && null != (uc = Yc[Bc]) && uc.barycenter && (null == (sc = Yc[bB]) ? void 0 : sc.barycenter) === Yc[Bc].barycenter) {
            let nc = null != (Pc = null == (Mc = Yc[bB]) ? void 0 : Mc.vs[0]) ? Pc : "",
              Vc = null != (Oc = null == (qB = Yc[Bc]) ? void 0 : qB.vs[0]) ? Oc : "",
              Ic = cB.node(nc),
              rB = cB.node(Vc);
            if ("edge" === Ic.dummy && "edge" === rB.dummy && (null == (Tc = Ic.edgeObj) ? void 0 : Tc.v) === (null == (fc = rB.edgeObj) ? void 0 : fc.v) && (null == (mB = Ic.edgeObj) ? void 0 : mB.w) === (null == (ec = rB.edgeObj) ? void 0 : ec.w)) {
              if (Ic.edgeLabel.reversed) {
                Lc[Vc] = Yc[bB], Yc.splice(bB, 1), bB--;
                break
              }
              Lc[nc] = Yc[Bc], Yc.splice(Bc, 1), Bc--
            } else gB = !0
          } let Uc = GB(Yc, Lc, tB, cB, Sc);
      if (pc && hc) {
        Uc.vs = [pc, Uc.vs, hc].flat(1);
        let Bc = cB.predecessors(pc);
        if (Bc && Bc.length) {
          let nc = cB.node(Bc[0]),
            Vc = cB.predecessors(hc),
            Ic = cB.node(Vc[0]);
          Object.hasOwn(Uc, "barycenter") || (Uc.barycenter = 0, Uc.weight = 0), Uc.barycenter = (Uc.barycenter * Uc.weight + nc.order + Ic.order) / (Uc.weight + 2), Uc.weight += 2
        }
      }
      return Object.defineProperty(Uc, "result", {
        value: Uc,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Uc, "usedBias", {
        value: gB,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Uc
    }

    function nn(cB, Bc, nc, Vc) {
      Vc || (Vc = cB.nodes());
      let Ic = function(cB) {
          let Bc;
          for (; cB.hasNode(Bc = Gc("_root")););
          return Bc
        }(cB),
        rB = new kB({
          compound: !0
        }).setGraph({
          root: Ic
        }).setDefaultNodeLabel((Bc => cB.node(Bc)));
      return Vc.forEach((Vc => {
        let uc = cB.node(Vc),
          sc = cB.parent(Vc);
        if (uc.rank === Bc || uc.minRank <= Bc && Bc <= uc.maxRank) {
          rB.setNode(Vc), rB.setParent(Vc, sc || Ic);
          let Mc = cB[nc](Vc);
          Mc && Mc.forEach((Bc => {
            let nc = Bc.v === Vc ? Bc.w : Bc.v,
              Ic = rB.edge(nc, Vc),
              uc = void 0 !== Ic ? Ic.weight : 0;
            rB.setEdge(nc, Vc, {
              weight: cB.edge(Bc).weight + uc
            })
          })), Object.hasOwn(uc, "minRank") && rB.setNode(Vc, {
            borderLeft: uc.borderLeft[Bc],
            borderRight: uc.borderRight[Bc]
          })
        }
      })), rB
    }

    function Vn(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Bc.customOrder) return void Bc.customOrder(cB, Vn);
      let Vc = Kc(cB),
        Ic = In(cB, cn(1, Vc + 1), "inEdges"),
        rB = In(cB, cn(Vc - 1, -1, -1), "outEdges"),
        uc = KB(cB, nc);
      if (un(cB, uc), Bc.disableOptimalOrderHeuristic) return;
      let sc, Mc = Number.POSITIVE_INFINITY,
        Pc = Bc.constraints || [];
      for (let qB = 0, Oc = 0; Oc < 4; ++qB, ++Oc) {
        rV(qB % 2 ? Ic : rB, qB % 4 >= 2, Pc, nc), uc = Jc(cB);
        let Bc = xn(cB, uc);
        Bc < Mc ? (Oc = 0, sc = Object.assign({}, uc), Mc = Bc) : Bc === Mc && (sc = structuredClone(uc))
      }
      un(cB, sc)
    }

    function In(cB, Bc, nc) {
      let Vc = new Map,
        Ic = (cB, Bc) => {
          Vc.has(cB) || Vc.set(cB, []), Vc.get(cB).push(Bc)
        };
      for (let rB of cB.nodes()) {
        let Bc = cB.node(rB);
        if ("number" == typeof Bc.rank && Ic(Bc.rank, rB), "number" == typeof Bc.minRank && "number" == typeof Bc.maxRank)
          for (let cB = Bc.minRank; cB <= Bc.maxRank; cB++) cB !== Bc.rank && Ic(cB, rB)
      }
      return Bc.map((function(Bc) {
        return nn(cB, Bc, nc, Vc.get(Bc) || [])
      }))
    }

    function rV(cB, Bc, nc, Vc) {
      let Ic = !0,
        rB = new kB;
      cB.forEach((function(cB) {
        nc.forEach((cB => rB.setEdge(cB.left, cB.right)));
        let uc = cB.graph().root,
          {
            result: sc,
            usedBias: Mc
          } = Bn(cB, uc, rB, Vc, Ic);
        Bc && Mc && (Ic = !Ic), sc.vs.forEach(((Bc, nc) => cB.node(Bc).order = nc)),
          function(cB, Bc, nc) {
            let Vc, Ic = {};
            nc.forEach((nc => {
              let rB, uc, sc = cB.parent(nc);
              for (; sc;) {
                if (rB = cB.parent(sc), rB ? (uc = Ic[rB], Ic[rB] = sc) : (uc = Vc, Vc = sc), uc && uc !== sc) return void Bc.setEdge(uc, sc);
                sc = rB
              }
            }))
          }(cB, rB, sc.vs)
      }))
    }

    function un(cB, Bc) {
      Object.values(Bc).forEach((Bc => Bc.forEach(((Bc, nc) => cB.node(Bc).order = nc))))
    }

    function sn(cB, Bc, nc) {
      if (Bc > nc) {
        let cB = Bc;
        Bc = nc, nc = cB
      }
      let Vc = cB[Bc];
      Vc || (cB[Bc] = Vc = {}), Vc[nc] = !0
    }

    function Mn(cB, Bc, nc) {
      if (Bc > nc) {
        let cB = Bc;
        Bc = nc, nc = cB
      }
      let Vc = cB[Bc];
      return void 0 !== Vc && Object.hasOwn(Vc, nc)
    }

    function Pn(cB, Bc, nc, Vc) {
      let Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        rB = {},
        uc = function(cB, Bc, nc, Vc) {
          let Ic = new kB,
            rB = cB.graph(),
            uc = function(cB, Bc, nc) {
              return (Vc, Ic, rB) => {
                let uc, sc = Vc.node(Ic),
                  Mc = Vc.node(rB),
                  Pc = 0;
                if (Pc += sc.width / 2, Object.hasOwn(sc, "labelpos")) switch (sc.labelpos.toLowerCase()) {
                  case "l":
                    uc = -sc.width / 2;
                    break;
                  case "r":
                    uc = sc.width / 2
                }
                if (uc && (Pc += nc ? uc : -uc), uc = void 0, Pc += (sc.dummy ? Bc : cB) / 2, Pc += (Mc.dummy ? Bc : cB) / 2, Pc += Mc.width / 2, Object.hasOwn(Mc, "labelpos")) switch (Mc.labelpos.toLowerCase()) {
                  case "l":
                    uc = Mc.width / 2;
                    break;
                  case "r":
                    uc = -Mc.width / 2
                }
                return uc && (Pc += nc ? uc : -uc), Pc
              }
            }(rB.nodesep, rB.edgesep, Vc);
          return Bc.forEach((Bc => {
            let Vc;
            Bc.forEach((Bc => {
              let rB = nc[Bc];
              if (void 0 !== rB) {
                if (Ic.setNode(rB), void 0 !== Vc) {
                  let sc = nc[Vc];
                  if (void 0 !== sc) {
                    let nc = Ic.edge(sc, rB);
                    Ic.setEdge(sc, rB, Math.max(uc(cB, Bc, Vc), nc || 0))
                  }
                }
                Vc = Bc
              }
            }))
          })), Ic
        }(cB, Bc, nc, Ic),
        sc = Ic ? "borderLeft" : "borderRight";

      function Mc(cB, Bc) {
        let nc = uc.nodes().slice(),
          Vc = {},
          Ic = nc.pop();
        for (; Ic;) {
          if (Vc[Ic]) cB(Ic);
          else {
            Vc[Ic] = !0, nc.push(Ic);
            for (let cB of Bc(Ic)) nc.push(cB)
          }
          Ic = nc.pop()
        }
      }
      return Mc((function(cB) {
        let Bc = uc.inEdges(cB);
        rB[cB] = Bc ? Bc.reduce(((cB, Bc) => {
          var nc;
          let Vc = null != (nc = rB[Bc.v]) ? nc : 0,
            Ic = uc.edge(Bc);
          return Math.max(cB, Vc + (void 0 !== Ic ? Ic : 0))
        }), 0) : 0
      }), (function(cB) {
        return uc.predecessors(cB) || []
      })), Mc((function(Bc) {
        let nc = uc.outEdges(Bc),
          Vc = Number.POSITIVE_INFINITY;
        nc && (Vc = nc.reduce(((cB, Bc) => {
          let nc = rB[Bc.w],
            Vc = uc.edge(Bc);
          return Math.min(cB, (void 0 !== nc ? nc : 0) - (void 0 !== Vc ? Vc : 0))
        }), Number.POSITIVE_INFINITY));
        let Ic = cB.node(Bc);
        Vc !== Number.POSITIVE_INFINITY && Ic.borderType !== sc && (rB[Bc] = Math.max(void 0 !== rB[Bc] ? rB[Bc] : 0, Vc))
      }), (function(cB) {
        return uc.successors(cB) || []
      })), Object.keys(Vc).forEach((cB => {
        var Bc;
        let Vc = nc[cB];
        void 0 !== Vc && (rB[cB] = null != (Bc = rB[Vc]) ? Bc : 0)
      })), rB
    }

    function qV(cB, Bc) {
      let nc, Vc = Jc(cB),
        Ic = Object.assign(function(cB, Bc) {
          let nc = {};
          return Bc.length && Bc.reduce((function(Bc, Vc) {
            let Ic = 0,
              rB = 0,
              uc = Bc.length,
              sc = Vc[Vc.length - 1];
            return Vc.forEach(((Bc, Mc) => {
              let Pc = function(cB, Bc) {
                  if (cB.node(Bc).dummy) {
                    let nc = cB.predecessors(Bc);
                    if (nc) return nc.find((Bc => cB.node(Bc).dummy))
                  }
                }(cB, Bc),
                qB = Pc ? cB.node(Pc).order : uc;
              (Pc || Bc === sc) && (Vc.slice(rB, Mc + 1).forEach((Bc => {
                let Vc = cB.predecessors(Bc);
                Vc && Vc.forEach((Vc => {
                  let rB = cB.node(Vc),
                    uc = rB.order;
                  (uc < Ic || qB < uc) && (!rB.dummy || !cB.node(Bc).dummy) && sn(nc, Vc, Bc)
                }))
              })), rB = Mc + 1, Ic = qB)
            })), Vc
          })), nc
        }(cB, Vc), function(cB, Bc) {
          let nc = {};

          function Vc(Bc, Vc, Ic, rB, uc) {
            cn(Vc, Ic).forEach((Vc => {
              let Ic = Bc[Vc];
              if (void 0 !== Ic && cB.node(Ic).dummy) {
                let Bc = cB.predecessors(Ic);
                Bc && Bc.forEach((Bc => {
                  if (void 0 === Bc) return;
                  let Vc = cB.node(Bc);
                  Vc.dummy && (Vc.order < rB || Vc.order > uc) && sn(nc, Bc, Ic)
                }))
              }
            }))
          }
          return Bc.length && Bc.reduce((function(Bc, nc) {
            let Ic = -1,
              rB = -1,
              uc = 0;
            return nc.forEach(((sc, Mc) => {
              if ("border" === cB.node(sc).dummy) {
                let Bc = cB.predecessors(sc);
                if (Bc && Bc.length) {
                  let sc = Bc[0];
                  if (void 0 === sc) return;
                  rB = cB.node(sc).order, Vc(nc, uc, Mc, Ic, rB), uc = Mc, Ic = rB
                }
              }
              Vc(nc, uc, nc.length, rB, Bc.length)
            })), nc
          })), nc
        }(cB, Vc)),
        rB = {};
      ["u", "d"].forEach((uc => {
        nc = "u" === uc ? Vc : Object.values(Vc).reverse(), ["l", "r"].forEach((Vc => {
          "r" === Vc && (nc = nc.map((cB => Object.values(cB).reverse())));
          let sc = function(cB, Bc, nc, Vc, Ic) {
              let rB = {},
                uc = {},
                sc = {};
              return Bc.forEach((cB => {
                cB.forEach(((cB, Bc) => {
                  rB[cB] = cB, uc[cB] = cB, sc[cB] = Bc
                }))
              })), Bc.forEach((Bc => {
                let Mc = -1,
                  Pc = -1,
                  qB = !1,
                  Oc = Bc,
                  Tc = Bc.findIndex((Bc => (null == Ic ? void 0 : Ic.includes(Bc)) || On(Bc, cB, Ic)));
                Tc > 0 && (Oc = [Bc[Tc], ...Bc.slice(0, Tc), ...Bc.slice(Tc + 1)], qB = !0), Oc.forEach((Bc => {
                  var Oc;
                  let Tc = Vc(Bc);
                  if (Tc && Tc.length) {
                    null != Ic && Ic.includes(Bc) && (Tc = Tc.filter((Bc => On(Bc, cB, Ic))));
                    let Vc = Tc.sort(((cB, Bc) => {
                        let nc = sc[cB],
                          Vc = sc[Bc];
                        return (void 0 !== nc ? nc : 0) - (void 0 !== Vc ? Vc : 0)
                      })),
                      fc = (Vc.length - 1) / 2;
                    for (let cB = Math.floor(fc), Ic = Math.ceil(fc); cB <= Ic; ++cB) {
                      let Ic = Vc[cB];
                      if (void 0 === Ic) continue;
                      let Tc = sc[Ic];
                      if (void 0 !== Tc && uc[Bc] === Bc && Mc < Tc && sc[Ic] !== Pc && !Mn(nc, Bc, Ic)) {
                        let cB = rB[Ic];
                        void 0 !== cB && (uc[Ic] = Bc, uc[Bc] = rB[Bc] = cB, Mc = Tc, qB && (Mc = -1, Pc = null != (Oc = sc[Ic]) ? Oc : -1, qB = !1))
                      }
                    }
                  }
                }))
              })), {
                root: rB,
                align: uc
              }
            }(cB, nc, Ic, (Bc => ("u" === uc ? cB.predecessors(Bc) : cB.successors(Bc)) || []), Bc),
            Mc = Pn(cB, nc, sc.root, sc.align, "r" === Vc);
          "r" === Vc && (Mc = nB(Mc, (cB => -cB))), rB[uc + Vc] = Mc
        }))
      }));
      let uc = function(cB, Bc) {
        return Object.values(Bc).reduce(((Bc, nc) => {
          let Vc = Number.NEGATIVE_INFINITY,
            Ic = Number.POSITIVE_INFINITY;
          Object.entries(nc).forEach((Bc => {
            let [nc, rB] = Bc, uc = function(cB, Bc) {
              return cB.node(Bc).width
            }(cB, nc) / 2;
            Vc = Math.max(rB + uc, Vc), Ic = Math.min(rB - uc, Ic)
          }));
          let rB = Vc - Ic;
          return rB < Bc[0] && (Bc = [rB, nc]), Bc
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(cB, rB);
      return function(cB, Bc) {
          let nc = Object.values(Bc),
            Vc = iB(Math.min, nc),
            Ic = iB(Math.max, nc);
          ["u", "d"].forEach((nc => {
            ["l", "r"].forEach((rB => {
              let uc = nc + rB,
                sc = cB[uc];
              if (!sc || sc === Bc) return;
              let Mc = Object.values(sc),
                Pc = Vc - iB(Math.min, Mc);
              "l" !== rB && (Pc = Ic - iB(Math.max, Mc)), Pc && (cB[uc] = nB(sc, (cB => cB + Pc)))
            }))
          }))
        }(rB, uc),
        function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            nc = cB.ul;
          return nc ? nB(nc, ((nc, Vc) => {
            var Ic, rB;
            if (Bc) {
              let nc = Bc.toLowerCase(),
                Ic = cB[nc];
              if (Ic && void 0 !== Ic[Vc]) return Ic[Vc]
            }
            let uc = Object.values(cB).map((cB => {
              let Bc = cB[Vc];
              return void 0 !== Bc ? Bc : 0
            })).sort(((cB, Bc) => cB - Bc));
            return ((null != (Ic = uc[1]) ? Ic : 0) + (null != (rB = uc[2]) ? rB : 0)) / 2
          })) : {}
        }(rB, cB.graph().align)
    }

    function On(cB, Bc, nc) {
      var Vc;
      if (!nc) return !1;
      let Ic = null == (Vc = Bc.node(cB)) ? void 0 : Vc.edgeObj;
      if (!Ic || Bc.node(cB).edgeLabel.reversed) return !1;
      let rB = nc.indexOf(null == Ic ? void 0 : Ic.v),
        uc = nc.indexOf(null == Ic ? void 0 : Ic.w);
      return -1 !== rB && -1 !== uc && rB === (uc + 1) % nc.length || rB === (uc - 1) % nc.length
    }

    function Tn(cB, Bc) {
      (function(cB) {
        let Bc = Jc(cB),
          nc = cB.graph(),
          Vc = nc.ranksep,
          Ic = nc.rankalign,
          rB = 0;
        Bc.forEach((Bc => {
          let nc = Bc.reduce(((Bc, nc) => {
            var Vc;
            let Ic = null != (Vc = cB.node(nc).height) ? Vc : 0;
            return Bc > Ic ? Bc : Ic
          }), 0);
          Bc.forEach((Bc => {
            let Vc = cB.node(Bc);
            Vc.y = "top" === Ic ? rB + Vc.height / 2 : "bottom" === Ic ? rB + nc - Vc.height / 2 : rB + nc / 2
          })), rB += nc + Vc
        }))
      })(cB = Hc(cB)), Object.entries(qV(cB, Bc)).forEach((Bc => {
        let [nc, Vc] = Bc;
        return cB.node(nc).x = Vc
      }))
    }
    var fn = new WeakMap;

    function mV(cB) {
      return tV(cB, dc, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), cB
    }

    function en(cB, Bc, nc) {
      let Vc = Bc;
      for (; void 0 !== Vc;) {
        let Bc = cB.parent(Vc);
        if (Bc === nc) return Vc;
        Vc = Bc
      }
    }

    function tV(cB, Bc, nc) {
      var Vc;
      let Ic = cB.nodes().filter((Bc => cB.children(Bc).length)),
        rB = {};
      Ic.forEach((Vc => {
        let Ic = cB.node(Vc);
        if (Ic && Ic.rankdir) {
          let uc = new kB({
            multigraph: !0,
            compound: !0
          });
          uc.setGraph({
            rankdir: Ic.rankdir
          });
          let sc = cB.children(Vc);
          sc.forEach((Bc => {
            let nc = {
              ...cB.node(Bc)
            };
            uc.setNode(Bc, nc);
            let Ic = cB.parent(Bc);
            Ic && Ic !== Vc && sc.includes(Ic) && uc.setParent(Bc, Ic)
          }));
          let Mc = new Set;
          cB.edges().forEach((Bc => {
            let nc = en(cB, Bc.v, Vc),
              Ic = en(cB, Bc.w, Vc);
            if (nc && Ic && nc !== Ic) {
              let Vc = `${nc}\0${Ic}`;
              Mc.has(Vc) || (Mc.add(Vc), uc.setEdge(nc, Ic, {
                ...cB.edge(Bc)
              }))
            }
          })), tV(uc, Bc, nc);
          let Pc = Un(uc);
          Sn(Pc, Bc, nc, null), yV(uc, Pc);
          let qB = 1 / 0,
            Oc = 1 / 0,
            Tc = -1 / 0,
            fc = -1 / 0;
          uc.nodes().forEach((cB => {
            if (cB === Vc) return;
            let Bc = uc.node(cB);
            Bc && "number" == typeof Bc.x && "number" == typeof Bc.y && "number" == typeof Bc.width && "number" == typeof Bc.height && (qB = Math.min(qB, Bc.x - Bc.width / 2), Tc = Math.max(Tc, Bc.x + Bc.width / 2), Oc = Math.min(Oc, Bc.y - Bc.height / 2), fc = Math.max(fc, Bc.y + Bc.height / 2))
          })), (!isFinite(qB) || !isFinite(Oc) || !isFinite(Tc) || !isFinite(fc)) && (qB = Oc = 0, Tc = fc = 0);
          let mB = Tc - qB,
            ec = fc - Oc;
          rB[Vc] = {
            minX: qB,
            yu: Oc,
            maxX: Tc,
            zu: fc,
            width: mB,
            height: ec,
            offsetX: qB,
            offsetY: Oc
          }, Ic._dagreClusterSubgraph = uc
        }
      }));
      let uc = [],
        sc = new Map;
      Ic.forEach((Bc => {
        let nc = cB.node(Bc);
        nc && nc.rankdir && rB[Bc] && sc.set(Bc, (cB.children(Bc) || []).filter((cB => cB !== Bc)))
      }));
      let Mc = new Set([...sc.values()].flat()),
        Pc = new Map;
      sc.forEach(((Bc, nc) => {
        Mc.has(nc) || Pc.set(nc, (Bc => {
          let nc = [],
            Vc = (cB.children(Bc) || []).filter((cB => cB !== Bc));
          for (; Vc.length > 0;) {
            let Bc = Vc.shift();
            nc.push(Bc), (cB.children(Bc) || []).filter((cB => cB !== Bc)).forEach((cB => Vc.push(cB)))
          }
          return nc
        })(nc))
      }));
      let qB = new Set([...Pc.values()].flat()),
        Oc = cB => {
          for (let [Bc, nc] of Pc)
            if (nc.includes(cB)) return Bc;
          return cB
        },
        Tc = [];
      cB.edges().forEach((Bc => {
        (qB.has(Bc.v) || qB.has(Bc.w)) && Tc.push({
          edge: Bc,
          label: cB.edge(Bc)
        })
      }));
      let fc = new Map;
      qB.forEach((Bc => {
        let nc = cB.parent(Bc);
        fc.set(Bc, "string" == typeof nc ? nc : void 0)
      })), Pc.forEach(((Bc, nc) => {
        let Vc = cB.node(nc),
          Ic = [];
        Bc.forEach((Bc => {
          let nc = cB.node(Bc);
          nc && (Ic.push({
            id: Bc,
            node: nc,
            parent: fc.get(Bc)
          }), cB.removeNode(Bc))
        }));
        let sc = Tc.filter((cB => {
            let {
              edge: nc
            } = cB;
            return Bc.includes(nc.v) || Bc.includes(nc.w)
          })),
          Mc = rB[nc];
        Vc && (uc.push({
          clusterId: nc,
          subgraph: Vc._dagreClusterSubgraph,
          bounds: Mc,
          children: Bc,
          removedNodes: Ic,
          removedEdges: sc
        }), Vc.width = Mc.width, Vc.height = Mc.height)
      }));
      let mB = new Set;
      Tc.forEach((Bc => {
        let {
          edge: nc,
          label: Vc
        } = Bc, Ic = Oc(nc.v), rB = Oc(nc.w);
        if (Ic !== rB && cB.hasNode(Ic) && cB.hasNode(rB)) {
          let Bc = `${Ic}\0${rB}`;
          mB.has(Bc) || (mB.add(Bc), cB.setEdge(Ic, rB, {
            ...Vc,
            width: 0,
            height: 0
          }))
        }
      }));
      let ec = Un(cB),
        tB = Sn(ec, Bc, nc, null != (Vc = fn.get(cB)) ? Vc : null);
      fn.set(cB, tB), yV(cB, ec), mB.forEach((Bc => {
        let nc = Bc.indexOf("\0"),
          Vc = Bc.slice(0, nc),
          Ic = Bc.slice(nc + 1);
        cB.hasEdge(Vc, Ic) && cB.removeEdge(Vc, Ic)
      })), uc.forEach((Bc => {
        let {
          clusterId: nc,
          subgraph: Vc,
          bounds: Ic,
          removedNodes: rB,
          removedEdges: uc
        } = Bc;
        var sc, Mc;
        let Pc = cB.node(nc),
          qB = null != (sc = null == Pc ? void 0 : Pc.x) ? sc : 0,
          Oc = null != (Mc = null == Pc ? void 0 : Pc.y) ? Mc : 0,
          Tc = (Ic.minX + Ic.maxX) / 2,
          fc = (Ic.yu + Ic.zu) / 2;
        rB.forEach((Bc => {
          let {
            id: nc,
            node: Vc,
            parent: Ic
          } = Bc;
          cB.setNode(nc, Vc), void 0 !== Ic && cB.setParent(nc, Ic)
        })), uc.forEach((Bc => {
          let {
            edge: nc,
            label: Vc
          } = Bc;
          cB.setEdge(nc, Vc)
        })), Vc.nodes().forEach((Bc => {
          if (Bc === nc) return;
          let Ic = Vc.node(Bc),
            rB = cB.node(Bc);
          rB && Ic && "number" == typeof Ic.x && "number" == typeof Ic.y && (rB.x = qB + (Ic.x - Tc), rB.y = Oc + (Ic.y - fc))
        })), delete Pc._dagreClusterSubgraph
      })), Ic.forEach((Bc => {
        var nc, Vc;
        let Ic = cB.node(Bc),
          uc = rB[Bc];
        if (Ic && Ic.rankdir && Ic._dagreClusterSubgraph && uc) {
          let rB = Ic._dagreClusterSubgraph,
            sc = null != (nc = Ic.x) ? nc : 0,
            Mc = null != (Vc = Ic.y) ? Vc : 0,
            Pc = (uc.minX + uc.maxX) / 2,
            qB = (uc.yu + uc.zu) / 2;
          rB.nodes().forEach((nc => {
            if (nc === Bc) return;
            let Vc = rB.node(nc),
              Ic = cB.node(nc);
            if (Ic && Vc && "number" == typeof Vc.x && "number" == typeof Vc.y) {
              let cB = Vc.x - Pc,
                Bc = Vc.y - qB;
              Ic.x = sc + cB, Ic.y = Mc + Bc
            }
          })), delete Ic._dagreClusterSubgraph
        }
      }))
    }

    function Sn(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Ic, rB;
      let uc = !1 !== (null == nc ? void 0 : nc.useDynamic),
        sc = uc && null != (Ic = null == Vc ? void 0 : Vc.graph) ? Ic : null,
        Mc = uc && null != (rB = null == Vc ? void 0 : Vc.rawNodes) ? rB : null;
      Bc("    makeSpaceForEdgeLabels", (() => function(cB) {
        let Bc = cB.graph();
        Bc.ranksep /= 2, cB.edges().forEach((nc => {
          var Vc;
          let Ic = cB.edge(nc);
          Ic.minlen *= 2, "c" !== (null != (Vc = Ic.labelpos) ? Vc : "r").toLowerCase() && ("TB" === Bc.rankdir || "BT" === Bc.rankdir ? Ic.width += Ic.labeloffset : Ic.height += Ic.labeloffset)
        }))
      }(cB))), Bc("    removeSelfEdges", (() => function(cB) {
        cB.edges().forEach((Bc => {
          if (Bc.v === Bc.w) {
            let nc = cB.node(Bc.v);
            nc.selfEdges || (nc.selfEdges = []), nc.selfEdges.push({
              e: Bc,
              label: cB.edge(Bc)
            }), cB.removeEdge(Bc)
          }
        }))
      }(cB))), Bc("    acyclic", (() => fB(cB, sc))), Bc("    nestingGraph.run", (() => WB(cB))), Bc("    rank", (() => DB(Hc(cB)))), Bc("    injectEdgeLabelProxies", (() => function(cB) {
        cB.edges().forEach((Bc => {
          let nc = cB.edge(Bc);
          if (nc.width && nc.height) {
            let nc = cB.node(Bc.v),
              Vc = {
                rank: (cB.node(Bc.w).rank - nc.rank) / 2 + nc.rank,
                e: Bc
              };
            Xc(cB, "edge-proxy", Vc, "_ep")
          }
        }))
      }(cB))), Bc("    removeEmptyRanks", (() => function(cB) {
        let Bc = cB.nodes().map((Bc => cB.node(Bc).rank)).filter((cB => void 0 !== cB)),
          nc = iB(Math.min, Bc),
          Vc = [];
        cB.nodes().forEach((Bc => {
          let Ic = cB.node(Bc).rank - nc;
          Vc[Ic] || (Vc[Ic] = []), Vc[Ic].push(Bc)
        }));
        let Ic = 0,
          rB = cB.graph().nodeRankFactor;
        Array.from(Vc).forEach(((Bc, nc) => {
          void 0 === Bc && nc % rB !== 0 ? --Ic : void 0 !== Bc && Ic && Bc.forEach((Bc => cB.node(Bc).rank += Ic))
        }))
      }(cB))), Bc("    nestingGraph.cleanup", (() => function(cB) {
        let Bc = cB.graph();
        cB.removeNode(Bc.nestingRoot), delete Bc.nestingRoot, cB.edges().forEach((Bc => {
          cB.edge(Bc).nestingEdge && cB.removeEdge(Bc)
        }))
      }(cB))), Bc("    normalizeRanks", (() => function(cB) {
        let Bc = cB.nodes().map((Bc => {
            let nc = cB.node(Bc).rank;
            return void 0 === nc ? Number.MAX_VALUE : nc
          })),
          nc = iB(Math.min, Bc);
        cB.nodes().forEach((Bc => {
          let Vc = cB.node(Bc);
          Object.hasOwn(Vc, "rank") && (Vc.rank -= nc)
        }))
      }(cB))), Bc("    assignRankMinMax", (() => function(cB) {
        let Bc = 0;
        cB.nodes().forEach((nc => {
          let Vc = cB.node(nc);
          Vc.borderTop && (Vc.minRank = cB.node(Vc.borderTop).rank, Vc.maxRank = cB.node(Vc.borderBottom).rank, Bc = Math.max(Bc, Vc.maxRank))
        })), cB.graph().maxRank = Bc
      }(cB))), Bc("    removeEdgeLabelProxies", (() => function(cB) {
        cB.nodes().forEach((Bc => {
          let nc = cB.node(Bc);
          if ("edge-proxy" === nc.dummy) {
            let Vc = nc;
            cB.edge(Vc.e).labelRank = nc.rank, cB.removeNode(Bc)
          }
        }))
      }(cB))), Bc("    normalize.run", (() => mn(cB))), Bc("    parentDummyChains", (() => oB(cB))), Bc("    addBorderSegments", (() => kn(cB))), Bc("    order", (() => Vn(cB, nc, Mc))), Bc("    insertSelfEdges", (() => function(cB) {
        Jc(cB).forEach((Bc => {
          let nc = 0;
          Bc.forEach(((Bc, Vc) => {
            let Ic = cB.node(Bc);
            "number" != typeof Ic.rank && (Ic.rank = 0), Ic.order = Vc + nc, (Ic.selfEdges || []).forEach((Bc => {
              Xc(cB, "selfedge", {
                width: Bc.label.width,
                height: Bc.label.height,
                rank: Ic.rank,
                order: Vc + ++nc,
                e: Bc.e,
                edgeLabel: Bc.label
              }, "_se"), (!Array.isArray(Bc.label.points) || 7 !== Bc.label.points.length) && (Bc.label.points = [{
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
            })), delete Ic.selfEdges
          }))
        }))
      }(cB))), Bc("    adjustCoordinateSystem", (() => function(cB) {
        var Bc;
        let nc = null == (Bc = cB.graph().rankdir) ? void 0 : Bc.toLowerCase();
        ("lr" === nc || "rl" === nc) && FB(cB)
      }(cB))), Bc("    position", (() => Tn(cB, nc.corePath))), Bc("    positionSelfEdges", (() => function(cB) {
        cB.nodes().forEach((Bc => {
          let nc = cB.node(Bc),
            Vc = cB => "number" == typeof cB && isFinite(cB);
          if ("selfedge" === nc.dummy) {
            let Ic = nc,
              rB = cB.node(Ic.e.v),
              uc = Vc(null == rB ? void 0 : rB.x) ? rB.x : 0,
              sc = Vc(null == rB ? void 0 : rB.y) ? rB.y : 0,
              Mc = Vc(null == rB ? void 0 : rB.width) ? rB.width : 0,
              Pc = Vc(null == rB ? void 0 : rB.height) ? rB.height : 0,
              qB = Vc(nc.x) ? nc.x : uc,
              Oc = Vc(nc.y) ? nc.y : sc,
              Tc = Mc / 2,
              fc = Pc / 2;
            Ic.edgeLabel.points = [{
              x: qB + Tc,
              y: Oc - fc
            }, {
              x: qB + Tc,
              y: Oc - fc
            }, {
              x: qB,
              y: Oc
            }, {
              x: qB - Tc,
              y: Oc + fc
            }, {
              x: qB - Tc,
              y: Oc + fc
            }, {
              x: qB,
              y: Oc
            }, {
              x: qB,
              y: Oc
            }], Ic.edgeLabel.x = qB, Ic.edgeLabel.y = Oc, cB.setEdge(Ic.e, Ic.edgeLabel), cB.removeNode(Bc)
          } else nc && Array.isArray(nc.selfEdges) && nc.selfEdges.forEach((cB => {
            if (!Array.isArray(cB.label.points) || 7 !== cB.label.points.length) {
              let Bc = Vc(nc.x) ? nc.x : 0,
                Ic = Vc(nc.y) ? nc.y : 0,
                rB = (Vc(nc.width) ? nc.width : 0) / 2,
                uc = (Vc(nc.height) ? nc.height : 0) / 2;
              cB.label.points = [{
                x: Bc + rB,
                y: Ic - uc
              }, {
                x: Bc + rB,
                y: Ic - uc
              }, {
                x: Bc,
                y: Ic
              }, {
                x: Bc - rB,
                y: Ic + uc
              }, {
                x: Bc - rB,
                y: Ic + uc
              }, {
                x: Bc,
                y: Ic
              }, {
                x: Bc,
                y: Ic
              }]
            }
          }))
        }))
      }(cB)));
      let Pc = JSON.parse(JSON.stringify(cB._nodes));
      return Bc("    removeBorderNodes", (() => function(cB) {
        cB.nodes().forEach((Bc => {
          if (cB.children(Bc).length) {
            let nc = cB.node(Bc),
              Vc = cB.node(nc.borderTop),
              Ic = cB.node(nc.borderBottom),
              rB = cB.node(nc.borderLeft[nc.borderLeft.length - 1]),
              uc = cB.node(nc.borderRight[nc.borderRight.length - 1]);
            nc.width = Math.abs(uc.x - rB.x), nc.height = Math.abs(Ic.y - Vc.y), nc.x = rB.x + nc.width / 2, nc.y = Vc.y + nc.height / 2
          }
        })), cB.nodes().forEach((Bc => {
          "border" === cB.node(Bc).dummy && cB.removeNode(Bc)
        }))
      }(cB))), Bc("    normalize.undo", (() => function(cB) {
        cB.graph().dummyChains.forEach((Bc => {
          let nc, Vc = cB.node(Bc),
            Ic = Vc.edgeLabel;
          for (cB.setEdge(Vc.edgeObj, Ic); Vc.dummy;) nc = cB.successors(Bc)[0], cB.removeNode(Bc), Ic.points.push({
            x: Vc.x,
            y: Vc.y
          }), "edge-label" === Vc.dummy && (Ic.x = Vc.x, Ic.y = Vc.y, Ic.width = Vc.width, Ic.height = Vc.height), Bc = nc, Vc = cB.node(Bc)
        }))
      }(cB))), Bc("    fixupEdgeLabelCoords", (() => function(cB) {
        cB.edges().forEach((Bc => {
          let nc = cB.edge(Bc);
          if (Object.hasOwn(nc, "x")) switch (("l" === nc.labelpos || "r" === nc.labelpos) && (nc.width -= nc.labeloffset), nc.labelpos) {
            case "l":
              nc.x -= nc.width / 2 + nc.labeloffset;
              break;
            case "r":
              nc.x += nc.width / 2 + nc.labeloffset
          }
        }))
      }(cB))), Bc("    undoCoordinateSystem", (() => HB(cB))), Bc("    translateGraph", (() => function(cB) {
        let Bc = Number.POSITIVE_INFINITY,
          nc = 0,
          Vc = Number.POSITIVE_INFINITY,
          Ic = 0,
          rB = cB.graph(),
          uc = rB.marginx || 0,
          sc = rB.marginy || 0;

        function Mc(cB) {
          let rB = cB.x,
            uc = cB.y,
            sc = cB.width,
            Mc = cB.height;
          Bc = Math.min(Bc, rB - sc / 2), nc = Math.max(nc, rB + sc / 2), Vc = Math.min(Vc, uc - Mc / 2), Ic = Math.max(Ic, uc + Mc / 2)
        }
        cB.nodes().forEach((Bc => Mc(cB.node(Bc)))), cB.edges().forEach((Bc => {
          let nc = cB.edge(Bc);
          Object.hasOwn(nc, "x") && Mc(nc)
        })), Bc -= uc, Vc -= sc, cB.nodes().forEach((nc => {
          let Ic = cB.node(nc);
          Ic.x -= Bc, Ic.y -= Vc
        })), cB.edges().forEach((nc => {
          let Ic = cB.edge(nc);
          Ic.points.forEach((cB => {
            cB.x -= Bc, cB.y -= Vc
          })), Object.hasOwn(Ic, "x") && (Ic.x -= Bc), Object.hasOwn(Ic, "y") && (Ic.y -= Vc)
        })), rB.width = nc - Bc + uc, rB.height = Ic - Vc + sc
      }(cB))), Bc("    assignNodeIntersects", (() => function(cB) {
        cB.edges().forEach((Bc => {
          if (Bc.v === Bc.w) return;
          let nc, Vc, Ic = cB.edge(Bc),
            rB = cB.node(Bc.v),
            uc = cB.node(Bc.w);
          Ic.points ? (nc = Ic.points[0], Vc = Ic.points[Ic.points.length - 1]) : (Ic.points = [], nc = uc, Vc = rB), Ic.points.unshift(Fc(rB, nc)), Ic.points.push(Fc(uc, Vc))
        }))
      }(cB))), Bc("    reversePoints", (() => function(cB) {
        cB.edges().forEach((Bc => {
          let nc = cB.edge(Bc);
          nc.reversed && nc.points.reverse()
        }))
      }(cB))), Bc("    acyclic.undo", (() => function(cB) {
        cB.edges().forEach((Bc => {
          let nc = cB.edge(Bc);
          if (nc.reversed) {
            cB.removeEdge(Bc);
            let Vc = nc.forwardName;
            delete nc.reversed, delete nc.forwardName, cB.setEdge(Bc.w, Bc.v, nc, Vc)
          }
        }))
      }(cB))), {
        graph: cB,
        rawNodes: Pc
      }
    }

    function yV(cB, Bc) {
      cB.nodes().forEach((nc => {
        let Vc = cB.node(nc),
          Ic = Bc.node(nc);
        Vc && (Vc.x = Ic.x, Vc.y = Ic.y, Vc.order = Ic.order, Vc.rank = Ic.rank, Bc.children(nc).length && (Vc.width = Ic.width, Vc.height = Ic.height))
      })), cB.edges().forEach((nc => {
        let Vc = cB.edge(nc),
          Ic = Bc.edge(nc);
        Vc.points = Ic.points, Object.hasOwn(Ic, "x") && (Vc.x = Ic.x, Vc.y = Ic.y)
      })), cB.graph().width = Bc.graph().width, cB.graph().height = Bc.graph().height
    }
    var zV = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      pn = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      hn = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      aV = ["width", "height", "rank"],
      lnc = {
        width: 0,
        height: 0
      },
      Yn = ["minlen", "weight", "width", "height", "labeloffset"],
      Ln = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      gV = ["labelpos"];

    function Un(cB) {
      let Bc = new kB({
          multigraph: !0,
          compound: !0
        }),
        nc = Zn(cB.graph());
      return Bc.setGraph(Object.assign({}, pn, bV(nc, zV), BB(nc, hn))), cB.nodes().forEach((nc => {
        let Vc = bV(Zn(cB.node(nc)), aV);
        Object.keys(lnc).forEach((cB => {
          void 0 === Vc[cB] && (Vc[cB] = lnc[cB])
        })), Bc.setNode(nc, Vc);
        let Ic = cB.parent(nc);
        void 0 !== Ic && Bc.setParent(nc, Ic)
      })), cB.edges().forEach((nc => {
        let Vc = Zn(cB.edge(nc));
        Bc.setEdge(nc, Object.assign({}, Ln, bV(Vc, Yn), BB(Vc, gV)))
      })), Bc
    }

    function bV(cB, Bc) {
      return nB(BB(cB, Bc), Number)
    }

    function Zn(cB) {
      let Bc = {};
      return cB && Object.entries(cB).forEach((cB => {
        let [nc, Vc] = cB;
        "string" == typeof nc && (nc = nc.toLowerCase()), Bc[nc] = Vc
      })), Bc
    }

    function Qn(cB) {
      let Bc = Jc(cB),
        nc = new kB({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return cB.nodes().forEach((Bc => {
        nc.setNode(Bc, {
          label: Bc
        }), nc.setParent(Bc, "layer" + cB.node(Bc).rank)
      })), cB.edges().forEach((cB => nc.setEdge(cB.v, cB.w, {}, cB.name))), Bc.forEach(((cB, Bc) => {
        let Vc = "layer" + Bc;
        nc.setNode(Vc, {
          rank: "same"
        }), cB.reduce(((cB, Bc) => (nc.setEdge(cB, Bc, {
          style: "invis"
        }), Bc)))
      })), nc
    }
    var Cn = {
        time: xB,
        notime: dc
      },
      vV = {
        graphlib: rB,
        version: rn,
        layout: mV,
        debug: Qn,
        util: {
          time: xB,
          notime: dc
        }
      }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);