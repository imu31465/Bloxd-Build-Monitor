/*! For license information please see bcgkc.112.93273327.chunk.js.LICENSE.txt */
export const id = 112;
export const ids = [112];
export const modules = {
  6434: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      Graph: () => dT,
      debug: () => oc,
      default: () => ec,
      graphlib: () => KT,
      layout: () => vc,
      util: () => Hc,
      version: () => Kk
    });
    var lT = Object.defineProperty,
      MT = (TT, kT, cT) => ((TT, kT, cT) => kT in TT ? lT(TT, kT, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: cT
      }) : TT[kT] = cT)(TT, "symbol" != typeof kT ? kT + "" : kT, cT),
      KT = {};
    ((TT, kT) => {
      for (var cT in kT) lT(TT, cT, {
        get: kT[cT],
        enumerable: !0
      })
    })(KT, {
      Graph: () => dT,
      alg: () => NT
    });
    var OT = Object.defineProperty,
      yT = (TT, kT) => {
        for (var cT in kT) OT(TT, cT, {
          get: kT[cT],
          enumerable: !0
        })
      },
      fT = class {
        constructor(TT) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, TT && (this._isDirected = !("directed" in TT) || TT.directed, this._isMultigraph = "multigraph" in TT && TT.multigraph, this._isCompound = "compound" in TT && TT.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(TT) {
          return this._label = TT, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(TT) {
          return this._defaultNodeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((TT => 0 === Object.keys(this._in[TT]).length))
        }
        sinks() {
          return this.nodes().filter((TT => 0 === Object.keys(this._out[TT]).length))
        }
        setNodes(TT, kT) {
          return TT.forEach((TT => {
            void 0 !== kT ? this.setNode(TT, kT) : this.setNode(TT)
          })), this
        }
        setNode(TT, kT) {
          return TT in this._nodes ? (arguments.length > 1 && (this._nodes[TT] = kT), this) : (this._nodes[TT] = arguments.length > 1 ? kT : this._defaultNodeLabelFn(TT), this._isCompound && (this._parent[TT] = "\0", this._children[TT] = {}, this._children["\0"][TT] = !0), this._in[TT] = {}, this._preds[TT] = {}, this._out[TT] = {}, this._sucs[TT] = {}, ++this._nodeCount, this)
        }
        node(TT) {
          return this._nodes[TT]
        }
        hasNode(TT) {
          return TT in this._nodes
        }
        removeNode(TT) {
          if (TT in this._nodes) {
            let kT = TT => this.removeEdge(this._edgeObjs[TT]);
            delete this._nodes[TT], this._isCompound && (this._removeFromParentsChildList(TT), delete this._parent[TT], this.children(TT).forEach((TT => {
              this.setParent(TT)
            })), delete this._children[TT]), Object.keys(this._in[TT]).forEach(kT), delete this._in[TT], delete this._preds[TT], Object.keys(this._out[TT]).forEach(kT), delete this._out[TT], delete this._sucs[TT], --this._nodeCount
          }
          return this
        }
        setParent(TT, kT) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === kT) kT = "\0";
          else {
            for (let cT = kT += ""; void 0 !== cT; cT = this.parent(cT))
              if (cT === TT) throw new Error("Setting " + kT + " as parent of " + TT + " would create a cycle");
            this.setNode(kT)
          }
          return this.setNode(TT), this._removeFromParentsChildList(TT), this._parent[TT] = kT, this._children[kT][TT] = !0, this
        }
        parent(TT) {
          if (this._isCompound) {
            let kT = this._parent[TT];
            if ("\0" !== kT) return kT
          }
        }
        children() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let kT = this._children[TT];
            if (kT) return Object.keys(kT)
          } else {
            if ("\0" === TT) return this.nodes();
            if (this.hasNode(TT)) return []
          }
          return []
        }
        predecessors(TT) {
          let kT = this._preds[TT];
          if (kT) return Object.keys(kT)
        }
        successors(TT) {
          let kT = this._sucs[TT];
          if (kT) return Object.keys(kT)
        }
        neighbors(TT) {
          let kT = this.predecessors(TT);
          if (kT) {
            let cT = new Set(kT),
              lT = this.successors(TT);
            if (lT)
              for (let TT of lT) cT.add(TT);
            return Array.from(cT.values())
          }
        }
        isLeaf(TT) {
          var kT;
          let cT;
          return cT = this.isDirected() ? this.successors(TT) : this.neighbors(TT), 0 === (null != (kT = null == cT ? void 0 : cT.length) ? kT : 0)
        }
        filterNodes(TT) {
          let kT = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          kT.setGraph(this.graph()), Object.entries(this._nodes).forEach((cT => {
            let [lT, MT] = cT;
            TT(lT) && kT.setNode(lT, MT)
          })), Object.values(this._edgeObjs).forEach((TT => {
            kT.hasNode(TT.v) && kT.hasNode(TT.w) && kT.setEdge(TT, this.edge(TT))
          }));
          let cT = {},
            lT = TT => {
              let MT = this.parent(TT);
              return !MT || kT.hasNode(MT) ? (cT[TT] = MT, MT) : MT in cT ? cT[MT] : lT(MT)
            };
          return this._isCompound && kT.nodes().forEach((TT => kT.setParent(TT, lT(TT)))), kT
        }
        setDefaultEdgeLabel(TT) {
          return this._defaultEdgeLabelFn = "function" != typeof TT ? () => TT : TT, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(TT, kT) {
          return TT.reduce(((TT, cT) => (void 0 !== kT ? this.setEdge(TT, cT, kT) : this.setEdge(TT, cT), cT))), this
        }
        setEdge(TT, kT, cT, lT) {
          let MT, KT, OT, yT, fT = !1;
          "object" == typeof TT && null !== TT && "v" in TT ? (MT = TT.v, KT = TT.w, OT = TT.name, 2 === arguments.length && (yT = kT, fT = !0)) : (MT = TT, KT = kT, OT = lT, arguments.length > 2 && (yT = cT, fT = !0)), MT = "" + MT, KT = "" + KT, void 0 !== OT && (OT = "" + OT);
          let IT = AT(this._isDirected, MT, KT, OT);
          if (IT in this._edgeLabels) return fT && (this._edgeLabels[IT] = yT), this;
          if (void 0 !== OT && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(MT), this.setNode(KT), this._edgeLabels[IT] = fT ? yT : this._defaultEdgeLabelFn(MT, KT, OT);
          let CT = function(TT, kT, cT, lT) {
            let MT = "" + kT,
              KT = "" + cT;
            if (!TT && MT > KT) {
              let TT = MT;
              MT = KT, KT = TT
            }
            let OT = {
              v: MT,
              w: KT
            };
            return lT && (OT.name = lT), OT
          }(this._isDirected, MT, KT, OT);
          return MT = CT.v, KT = CT.w, Object.freeze(CT), this._edgeObjs[IT] = CT, xT(this._preds[KT], MT), xT(this._sucs[MT], KT), this._in[KT][IT] = CT, this._out[MT][IT] = CT, this._edgeCount++, this
        }
        edge(TT, kT, cT) {
          let lT = 1 === arguments.length ? CT(this._isDirected, TT) : AT(this._isDirected, TT, kT, cT);
          return this._edgeLabels[lT]
        }
        edgeAsObj(TT, kT, cT) {
          let lT = 1 === arguments.length ? this.edge(TT) : this.edge(TT, kT, cT);
          return "object" != typeof lT || null === lT ? {
            label: lT
          } : lT
        }
        hasEdge(TT, kT, cT) {
          return (1 === arguments.length ? CT(this._isDirected, TT) : AT(this._isDirected, TT, kT, cT)) in this._edgeLabels
        }
        removeEdge(TT, kT, cT) {
          let lT = 1 === arguments.length ? CT(this._isDirected, TT) : AT(this._isDirected, TT, kT, cT),
            MT = this._edgeObjs[lT];
          if (MT) {
            let TT = MT.v,
              kT = MT.w;
            delete this._edgeLabels[lT], delete this._edgeObjs[lT], IT(this._preds[kT], TT), IT(this._sucs[TT], kT), delete this._in[kT][lT], delete this._out[TT][lT], this._edgeCount--
          }
          return this
        }
        inEdges(TT, kT) {
          return this.isDirected() ? this.filterEdges(this._in[TT], TT, kT) : this.nodeEdges(TT, kT)
        }
        outEdges(TT, kT) {
          return this.isDirected() ? this.filterEdges(this._out[TT], TT, kT) : this.nodeEdges(TT, kT)
        }
        nodeEdges(TT, kT) {
          if (TT in this._nodes) return this.filterEdges({
            ...this._in[TT],
            ...this._out[TT]
          }, TT, kT)
        }
        _removeFromParentsChildList(TT) {
          delete this._children[this._parent[TT]][TT]
        }
        filterEdges(TT, kT, cT) {
          if (!TT) return;
          let lT = Object.values(TT);
          return cT ? lT.filter((TT => TT.v === kT && TT.w === cT || TT.v === cT && TT.w === kT)) : lT
        }
      };

    function xT(TT, kT) {
      TT[kT] ? TT[kT]++ : TT[kT] = 1
    }

    function IT(TT, kT) {
      void 0 !== TT[kT] && !--TT[kT] && delete TT[kT]
    }

    function AT(TT, kT, cT, lT) {
      let MT = "" + kT,
        KT = "" + cT;
      if (!TT && MT > KT) {
        let TT = MT;
        MT = KT, KT = TT
      }
      return MT + "\x01" + KT + "\x01" + (void 0 === lT ? "\0" : lT)
    }

    function CT(TT, kT) {
      return AT(TT, kT.v, kT.w, kT.name)
    }

    function jT(TT) {
      let kT = {
          options: {
            directed: TT.isDirected(),
            multigraph: TT.isMultigraph(),
            compound: TT.isCompound()
          },
          nodes: vT(TT),
          edges: tT(TT)
        },
        cT = TT.graph();
      return void 0 !== cT && (kT.value = structuredClone(cT)), kT
    }

    function vT(TT) {
      return TT.nodes().map((kT => {
        let cT = TT.node(kT),
          lT = TT.parent(kT),
          MT = {
            v: kT
          };
        return void 0 !== cT && (MT.value = cT), void 0 !== lT && (MT.parent = lT), MT
      }))
    }

    function tT(TT) {
      return TT.edges().map((kT => {
        let cT = TT.edge(kT),
          lT = {
            v: kT.v,
            w: kT.w
          };
        return void 0 !== kT.name && (lT.name = kT.name), void 0 !== cT && (lT.value = cT), lT
      }))
    }

    function hT(TT) {
      let kT = new fT(TT.options);
      return void 0 !== TT.value && kT.setGraph(TT.value), TT.nodes.forEach((TT => {
        kT.setNode(TT.v, TT.value), TT.parent && kT.setParent(TT.v, TT.parent)
      })), TT.edges.forEach((TT => {
        kT.setEdge({
          v: TT.v,
          w: TT.w,
          name: TT.name
        }, TT.value)
      })), kT
    }
    yT({}, {
      read: () => hT,
      write: () => jT
    });
    var NT = {};
    yT(NT, {
      CycleException: () => JT,
      bellmanFord: () => ST,
      components: () => DT,
      dijkstra: () => rT,
      dijkstraAll: () => PT,
      findCycles: () => mT,
      floydWarshall: () => zT,
      isAcyclic: () => HT,
      postorder: () => ET,
      preorder: () => ZT,
      prim: () => uT,
      shortestPaths: () => XT,
      tarjan: () => wT,
      topsort: () => oT
    });
    var QT = () => 1;

    function ST(TT, kT, cT, lT) {
      return function(TT, kT, cT, lT) {
        let MT, KT = {},
          OT = 0,
          yT = TT.nodes(),
          fT = function(TT) {
            let kT = KT[TT.v],
              lT = KT[TT.w];
            if (!kT || !lT) return;
            let OT = cT(TT);
            kT.distance + OT < lT.distance && (KT[TT.w] = {
              distance: kT.distance + OT,
              predecessor: TT.v
            }, MT = !0)
          },
          xT = function() {
            yT.forEach((function(TT) {
              lT(TT).forEach((function(kT) {
                let cT = kT.v === TT ? kT.v : kT.w,
                  lT = cT === kT.v ? kT.w : kT.v;
                fT({
                  v: cT,
                  w: lT
                })
              }))
            }))
          };
        yT.forEach((function(TT) {
          let cT = TT === kT ? 0 : Number.POSITIVE_INFINITY;
          KT[TT] = {
            distance: cT,
            predecessor: ""
          }
        }));
        let IT = yT.length;
        for (let AT = 1; AT < IT && (MT = !1, OT++, xT(), MT); AT++);
        if (OT === IT - 1 && (MT = !1, xT(), MT)) throw new Error("The graph contains a negative weight cycle");
        return KT
      }(TT, String(kT), cT || QT, lT || function(kT) {
        var cT;
        return null != (cT = TT.outEdges(kT)) ? cT : []
      })
    }

    function DT(TT) {
      let kT, cT = {},
        lT = [];

      function MT(lT) {
        var KT, OT;
        lT in cT || (cT[lT] = !0, kT.push(lT), null == (KT = TT.successors(lT)) || KT.forEach(MT), null == (OT = TT.predecessors(lT)) || OT.forEach(MT))
      }
      return TT.nodes().forEach((function(TT) {
        kT = [], MT(TT), kT.length && lT.push(kT)
      })), lT
    }
    var aT = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((TT => TT.key))
        }
        has(TT) {
          return TT in this._keyIndices
        }
        priority(TT) {
          let kT = this._keyIndices[TT];
          if (void 0 !== kT) return this._arr[kT].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(TT, kT) {
          let cT = this._keyIndices,
            lT = String(TT);
          if (!(lT in cT)) {
            let TT = this._arr,
              MT = TT.length;
            return cT[lT] = MT, TT.push({
              key: lT,
              priority: kT
            }), this._decrease(MT), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let TT = this._arr.pop();
          return delete this._keyIndices[TT.key], this._heapify(0), TT.key
        }
        decrease(TT, kT) {
          let cT = this._keyIndices[TT];
          if (void 0 === cT) throw new Error(`Key not found: ${TT}`);
          let lT = this._arr[cT].priority;
          if (kT > lT) throw new Error(`New priority is greater than current priority. Key: ${TT} Old: ${lT} New: ${kT}`);
          this._arr[cT].priority = kT, this._decrease(cT)
        }
        _heapify(TT) {
          let kT = this._arr,
            cT = 2 * TT,
            lT = cT + 1,
            MT = TT;
          cT < kT.length && (MT = kT[cT].priority < kT[MT].priority ? cT : MT, lT < kT.length && (MT = kT[lT].priority < kT[MT].priority ? lT : MT), MT !== TT && (this._swap(TT, MT), this._heapify(MT)))
        }
        _decrease(TT) {
          let kT, cT = this._arr,
            lT = cT[TT].priority;
          for (; 0 !== TT && (kT = TT >> 1, !(cT[kT].priority < lT));) this._swap(TT, kT), TT = kT
        }
        _swap(TT, kT) {
          let cT = this._arr,
            lT = this._keyIndices,
            MT = cT[TT],
            KT = cT[kT];
          cT[TT] = KT, cT[kT] = MT, lT[KT.key] = TT, lT[MT.key] = kT
        }
      },
      FT = () => 1;

    function rT(TT, kT, cT, lT) {
      return function(TT, kT, cT, lT) {
        let MT, KT, OT = {},
          yT = new aT,
          fT = function(TT) {
            let kT = TT.v !== MT ? TT.v : TT.w,
              lT = OT[kT];
            if (!lT) return;
            let fT = cT(TT),
              xT = KT.distance + fT;
            if (fT < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + TT + " Weight: " + fT);
            xT < lT.distance && (lT.distance = xT, lT.predecessor = MT, yT.decrease(kT, xT))
          };
        for (TT.nodes().forEach((function(TT) {
            let cT = TT === kT ? 0 : Number.POSITIVE_INFINITY;
            OT[TT] = {
              distance: cT,
              predecessor: ""
            }, yT.add(TT, cT)
          })); yT.size() > 0;) {
          MT = yT.removeMin();
          let TT = OT[MT];
          if (!TT || TT.distance === Number.POSITIVE_INFINITY) break;
          KT = TT, lT(MT).forEach(fT)
        }
        return OT
      }(TT, String(kT), cT || FT, lT || function(kT) {
        var cT;
        return null != (cT = TT.outEdges(kT)) ? cT : []
      })
    }

    function PT(TT, kT, cT) {
      return TT.nodes().reduce((function(lT, MT) {
        return lT[MT] = rT(TT, MT, kT, cT), lT
      }), {})
    }

    function wT(TT) {
      let kT = 0,
        cT = [],
        lT = {},
        MT = [];

      function KT(OT) {
        var yT;
        let fT = lT[OT] = {
          onStack: !0,
          lowlink: kT,
          index: kT++
        };
        if (cT.push(OT), null == (yT = TT.successors(OT)) || yT.forEach((function(TT) {
            if (TT in lT) {
              let kT = lT[TT];
              null != kT && kT.onStack && (fT.lowlink = Math.min(fT.lowlink, kT.index))
            } else {
              KT(TT);
              let kT = lT[TT];
              kT && (fT.lowlink = Math.min(fT.lowlink, kT.lowlink))
            }
          })), fT.lowlink === fT.index) {
          let TT, kT = [];
          do {
            TT = cT.pop();
            let MT = lT[TT];
            MT && (MT.onStack = !1), kT.push(TT)
          } while (OT !== TT);
          MT.push(kT)
        }
      }
      return TT.nodes().forEach((function(TT) {
        TT in lT || KT(TT)
      })), MT
    }

    function mT(TT) {
      return wT(TT).filter((function(kT) {
        var cT;
        let lT = kT[0];
        return !!lT && (kT.length > 1 || 1 === kT.length && (null != (cT = TT.outEdges(lT, lT)) ? cT : []).length > 0)
      }))
    }
    var bT = () => 1;

    function zT(TT, kT, cT) {
      return function(TT, kT, cT) {
        let lT = {},
          MT = TT.nodes();
        return MT.forEach((function(TT) {
          let KT = {};
          lT[TT] = KT, KT[TT] = {
            distance: 0,
            predecessor: ""
          }, MT.forEach((function(kT) {
            TT !== kT && (KT[kT] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), cT(TT).forEach((function(cT) {
            let lT = cT.v === TT ? cT.w : cT.v,
              MT = kT(cT);
            KT[lT] = {
              distance: MT,
              predecessor: TT
            }
          }))
        })), MT.forEach((function(TT) {
          let kT = lT[TT];
          kT && MT.forEach((function(cT) {
            let KT = lT[cT];
            KT && MT.forEach((function(cT) {
              let lT = KT[TT],
                MT = kT[cT],
                OT = KT[cT];
              if (lT && MT && OT) {
                let TT = lT.distance + MT.distance;
                TT < OT.distance && (OT.distance = TT, OT.predecessor = MT.predecessor)
              }
            }))
          }))
        })), lT
      }(TT, kT || bT, cT || function(kT) {
        var cT;
        return null != (cT = TT.outEdges(kT)) ? cT : []
      })
    }
    var JT = class extends Error {
      constructor(TT) {
        super(TT), this.name = "CycleException"
      }
    };

    function oT(TT) {
      let kT = {},
        cT = {},
        lT = [];
      if (TT.sinks().forEach((function MT(KT) {
          var OT;
          if (KT in cT) throw new JT;
          KT in kT || (cT[KT] = !0, kT[KT] = !0, null == (OT = TT.predecessors(KT)) || OT.forEach(MT), delete cT[KT], lT.push(KT))
        })), Object.keys(kT).length !== TT.nodeCount()) throw new JT;
      return lT
    }

    function HT(TT) {
      try {
        oT(TT)
      } catch (kT) {
        if (kT instanceof JT) return !1;
        throw kT
      }
      return !0
    }

    function eT(TT, kT, cT, lT, MT) {
      Array.isArray(kT) || (kT = [kT]);
      let KT = kT => {
          var cT;
          return null != (cT = TT.isDirected() ? TT.successors(kT) : TT.neighbors(kT)) ? cT : []
        },
        OT = {};
      return kT.forEach((function(kT) {
        if (!TT.hasNode(kT)) throw new Error("Graph does not have node: " + kT);
        MT = GT(TT, kT, "post" === cT, OT, KT, lT, MT)
      })), MT
    }

    function GT(TT, kT, cT, lT, MT, KT, OT) {
      return kT in lT || (lT[kT] = !0, cT || (OT = KT(OT, kT)), MT(kT).forEach((function(kT) {
        OT = GT(TT, kT, cT, lT, MT, KT, OT)
      })), cT && (OT = KT(OT, kT))), OT
    }

    function VT(TT, kT, cT) {
      return eT(TT, kT, cT, (function(TT, kT) {
        return TT.push(kT), TT
      }), [])
    }

    function ET(TT, kT) {
      return VT(TT, kT, "post")
    }

    function ZT(TT, kT) {
      return VT(TT, kT, "pre")
    }

    function uT(TT, kT) {
      var cT;
      let lT, MT = new fT,
        KT = {},
        OT = new aT;

      function yT(TT) {
        let cT = TT.v === lT ? TT.w : TT.v,
          MT = OT.priority(cT);
        if (void 0 !== MT) {
          let yT = kT(TT);
          yT < MT && (KT[cT] = lT, OT.decrease(cT, yT))
        }
      }
      if (0 === TT.nodeCount()) return MT;
      TT.nodes().forEach((function(TT) {
        OT.add(TT, Number.POSITIVE_INFINITY), MT.setNode(TT)
      }));
      let xT = TT.nodes()[0];
      void 0 !== xT && OT.decrease(xT, 0);
      let IT = !1;
      for (; OT.size() > 0;) {
        if (lT = OT.removeMin(), lT in KT) MT.setEdge(lT, KT[lT]);
        else {
          if (IT) throw new Error("Input graph is not connected: " + TT);
          IT = !0
        }
        null == (cT = TT.nodeEdges(lT)) || cT.forEach(yT)
      }
      return MT
    }

    function XT(TT, kT, cT, lT) {
      return function(TT, kT, cT, lT) {
        if (void 0 === cT) return rT(TT, kT, cT, lT);
        let MT = !1,
          KT = TT.nodes();
        for (let OT = 0; OT < KT.length; OT++) {
          let yT = KT[OT];
          if (void 0 === yT) continue;
          let fT = lT(yT);
          for (let TT = 0; TT < fT.length; TT++) {
            let kT = fT[TT];
            if (!kT) continue;
            let lT = kT.v === yT ? kT.v : kT.w;
            cT({
              v: lT,
              w: lT === kT.v ? kT.w : kT.v
            }) < 0 && (MT = !0)
          }
          if (MT) return ST(TT, kT, cT, lT)
        }
        return rT(TT, kT, cT, lT)
      }(TT, kT, cT, null != lT ? lT : kT => {
        var cT;
        return null != (cT = TT.outEdges(kT)) ? cT : []
      })
    }
    var dT = fT;

    function LT(TT, kT, cT, lT) {
      let MT = lT;
      for (; TT.hasNode(MT);) MT = sT(lT);
      return cT.dummy = kT, TT.setNode(MT, cT), MT
    }

    function RT(TT) {
      let kT = new dT({
        multigraph: TT.isMultigraph()
      }).setGraph(TT.graph());
      return TT.nodes().forEach((cT => {
        TT.children(cT).length || kT.setNode(cT, TT.node(cT))
      })), TT.edges().forEach((cT => {
        kT.setEdge(cT, TT.edge(cT))
      })), kT
    }

    function gT(TT, kT) {
      let cT, lT, MT = TT.x,
        KT = TT.y,
        OT = kT.x - MT,
        yT = kT.y - KT,
        fT = TT.width / 2,
        xT = TT.height / 2;
      if (!OT && !yT) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(yT) * fT > Math.abs(OT) * xT ? (yT < 0 && (xT = -xT), cT = xT * OT / yT, lT = xT) : (OT < 0 && (fT = -fT), cT = fT, lT = fT * yT / OT), {
        x: MT + cT,
        y: KT + lT
      }
    }

    function UT(TT) {
      let kT = Tk(nT(TT) + 1).map((() => []));
      return TT.nodes().forEach((cT => {
        let lT = TT.node(cT),
          MT = lT.rank;
        void 0 !== MT && (kT[MT] || (kT[MT] = []), kT[MT][lT.order] = cT)
      })), kT
    }

    function YT(TT, kT, cT, lT) {
      let MT = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (MT.rank = cT, MT.order = lT), LT(TT, "border", MT, kT)
    }
    var BT = 65535;

    function WT(TT, kT) {
      if (kT.length > BT) {
        let cT = function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BT,
            cT = [];
          for (let lT = 0; lT < TT.length; lT += kT) {
            let MT = TT.slice(lT, lT + kT);
            cT.push(MT)
          }
          return cT
        }(kT);
        return TT(...cT.map((kT => TT(...kT))))
      }
      return TT(...kT)
    }

    function nT(TT) {
      let kT = TT.nodes().map((kT => {
        let cT = TT.node(kT).rank;
        return void 0 === cT ? Number.MIN_VALUE : cT
      }));
      return WT(Math.max, kT)
    }

    function pT(TT, kT) {
      let cT = Date.now();
      try {
        return kT()
      } finally {
        console.log(TT + " time: " + (Date.now() - cT) + "ms")
      }
    }

    function iT(TT, kT) {
      return kT()
    }
    var qT = 0;

    function sT(TT) {
      return TT + "" + ++qT
    }

    function Tk(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == kT && (kT = TT, TT = 0);
      let lT = TT => TT < kT;
      cT < 0 && (lT = TT => kT < TT);
      let MT = [];
      for (let KT = TT; lT(KT); KT += cT) MT.push(KT);
      return MT
    }

    function kk(TT, kT) {
      let cT = {};
      for (let lT of kT) void 0 !== TT[lT] && (cT[lT] = TT[lT]);
      return cT
    }

    function ck(TT, kT) {
      let cT;
      return cT = "string" == typeof kT ? TT => TT[kT] : kT, Object.entries(TT).reduce(((TT, kT) => {
        let [lT, MT] = kT;
        return TT[lT] = cT(MT, lT), TT
      }), {})
    }
    var lk = "\0";

    function Mk(TT, kT, cT) {
      var lT, MT, KT, OT, yT, fT;
      if (!(TT && kT && cT && "edge" === kT.dummy && "edge" === cT.dummy && kT.edgeObj && cT.edgeObj && TT[kT.edgeObj.v] && TT[cT.edgeObj.v] && TT[kT.edgeObj.w] && TT[cT.edgeObj.w])) return 0;
      let xT = !0;
      kT.edgeObj.w === cT.edgeObj.w && (xT = !1);
      let IT = xT ? null != (MT = null == (lT = TT[kT.edgeObj.v]) ? void 0 : lT.rank) ? MT : NaN : null != (OT = null == (KT = TT[kT.edgeObj.w]) ? void 0 : KT.rank) ? OT : NaN,
        AT = Object.entries(TT).find((TT => {
          var cT, lT;
          return (null == (cT = TT[1].edgeObj) ? void 0 : cT.v) === kT.edgeObj.v && (null == (lT = TT[1].edgeObj) ? void 0 : lT.w) === kT.edgeObj.w && TT[1].rank === IT
        })),
        CT = Object.entries(TT).find((TT => {
          var kT, lT;
          return (null == (kT = TT[1].edgeObj) ? void 0 : kT.v) === cT.edgeObj.v && (null == (lT = TT[1].edgeObj) ? void 0 : lT.w) === cT.edgeObj.w && TT[1].rank === IT
        }));
      if (!AT || !CT) return 0;
      let jT = null != (yT = AT[1].order) ? yT : NaN,
        vT = null != (fT = CT[1].order) ? fT : NaN;
      return isNaN(jT - vT) ? 0 : jT - vT
    }
    var Kk = "3.1.1";

    function Ok(TT) {
      TT._prev._next = TT._next, TT._next._prev = TT._prev, delete TT._next, delete TT._prev
    }

    function yk(TT, kT) {
      if ("_next" !== TT && "_prev" !== TT) return kT
    }
    var fk = class {
        constructor() {
          MT(this, "_sentinel");
          let TT = {};
          TT._next = TT._prev = TT, this._sentinel = TT
        }
        dequeue() {
          let TT = this._sentinel,
            kT = TT._prev;
          if (kT !== TT) return Ok(kT), kT
        }
        enqueue(TT) {
          let kT = this._sentinel;
          TT._prev && TT._next && Ok(TT), TT._next = kT._next, kT._next._prev = TT, kT._next = TT, TT._prev = kT
        }
        toString() {
          let TT = [],
            kT = this._sentinel,
            cT = kT._prev;
          for (; cT !== kT;) TT.push(JSON.stringify(cT, yk)), cT = cT._prev;
          return "[" + TT.join(", ") + "]"
        }
      },
      xk = () => 1;

    function Ik(TT, kT) {
      if (TT.nodeCount() <= 1) return [];
      let cT = function(TT, kT) {
        let cT = new dT,
          lT = 0,
          MT = 0;
        TT.nodes().forEach((TT => {
          cT.setNode(TT, {
            v: TT,
            in: 0,
            out: 0
          })
        })), TT.edges().forEach((TT => {
          let KT = cT.edge(TT.v, TT.w) || 0,
            OT = kT(TT),
            yT = KT + OT;
          cT.setEdge(TT.v, TT.w, yT);
          let fT = cT.node(TT.v),
            xT = cT.node(TT.w);
          MT = Math.max(MT, fT.out += OT), lT = Math.max(lT, xT.in += OT)
        }));
        let KT = function(TT) {
            let kT = [];
            for (let cT = 0; cT < TT; cT++) kT.push(cT);
            return kT
          }(MT + lT + 3).map((() => new fk)),
          OT = lT + 1;
        return cT.nodes().forEach((TT => {
          Ck(KT, OT, cT.node(TT))
        })), {
          graph: cT,
          buckets: KT,
          zeroIdx: OT
        }
      }(TT, kT || xk);
      return function(TT, kT, cT) {
        var lT;
        let MT, KT = [],
          OT = kT[kT.length - 1],
          yT = kT[0];
        for (; TT.nodeCount();) {
          for (; MT = yT.dequeue();) Ak(TT, kT, cT, MT);
          for (; MT = OT.dequeue();) Ak(TT, kT, cT, MT);
          if (TT.nodeCount())
            for (let OT = kT.length - 2; OT > 0; --OT)
              if (MT = null == (lT = kT[OT]) ? void 0 : lT.dequeue(), MT) {
                KT = KT.concat(Ak(TT, kT, cT, MT, !0) || []);
                break
              }
        }
        return KT
      }(cT.graph, cT.buckets, cT.zeroIdx).flatMap((kT => TT.outEdges(kT.v, kT.w) || []))
    }

    function Ak(TT, kT, cT, lT, MT) {
      let KT = [],
        OT = MT ? KT : void 0;
      return (TT.inEdges(lT.v) || []).forEach((lT => {
        let OT = TT.edge(lT),
          yT = TT.node(lT.v);
        MT && KT.push({
          v: lT.v,
          w: lT.w
        }), yT.out -= OT, Ck(kT, cT, yT)
      })), (TT.outEdges(lT.v) || []).forEach((lT => {
        let MT = TT.edge(lT),
          KT = lT.w,
          OT = TT.node(KT);
        OT.in -= MT, Ck(kT, cT, OT)
      })), TT.removeNode(lT.v), OT
    }

    function Ck(TT, kT, cT) {
      var lT, MT, KT;
      cT.out ? cT.in ? null == (KT = TT[cT.out - cT.in + kT]) || KT.enqueue(cT) : null == (MT = TT[TT.length - 1]) || MT.enqueue(cT) : null == (lT = TT[0]) || lT.enqueue(cT)
    }

    function jk(TT, kT) {
      var cT;
      ("greedy" === TT.graph().acyclicer ? Ik(TT, (cT = TT, TT => cT.edge(TT).weight)) : function(TT, kT) {
        let cT = [],
          lT = {},
          MT = {};

        function KT(kT) {
          Object.hasOwn(MT, kT) || (MT[kT] = !0, lT[kT] = !0, TT.outEdges(kT).forEach((TT => {
            Object.hasOwn(lT, TT.w) ? cT.push(TT) : KT(TT.w)
          })), delete lT[kT])
        }

        function OT(KT) {
          var yT;
          Object.hasOwn(MT, KT) || (MT[KT] = !0, lT[KT] = !0, null == (yT = TT.outEdges(KT)) || yT.forEach((MT => {
            var yT, fT;
            Object.hasOwn(lT, MT.w) || (null == (yT = kT.node(KT)) ? void 0 : yT.rank) > (null == (fT = kT.node(MT.w)) ? void 0 : fT.rank) && function(TT, kT, cT) {
              let lT = new Set;

              function MT(kT) {
                var KT;
                if (TT.sources().includes(kT)) return !0;
                lT.add(kT);
                for (let OT of null != (KT = TT.inEdges(kT)) ? KT : [])
                  if ((OT.v !== cT.v || OT.w !== cT.w) && !lT.has(OT.v) && MT(OT.v)) return !0;
                return !1
              }
              return MT(kT)
            }(TT, MT.w, MT) ? cT.push(MT) : OT(MT.w)
          })), delete lT[KT])
        }
        let yT = KT;
        return kT && "function" == typeof kT.node && (yT = OT), TT.sources().forEach(yT), TT.nodes().forEach(yT), cT
      }(TT, null != kT ? kT : null)).forEach((kT => {
        let cT = TT.edge(kT);
        TT.removeEdge(kT), cT.forwardName = kT.name, cT.reversed = !0, TT.setEdge(kT.w, kT.v, cT, sT("rev"))
      }))
    }

    function vk(TT) {
      TT.graph().dummyChains = [], TT.edges().forEach((kT => function(TT, kT) {
        let cT, lT, MT, KT = kT.v,
          OT = TT.node(KT).rank,
          yT = kT.w,
          fT = TT.node(yT).rank,
          xT = kT.name,
          IT = TT.edge(kT),
          AT = IT.labelRank;
        if (fT === OT + 1) return;
        for (TT.removeEdge(kT), MT = 0, ++OT; OT < fT; ++MT, ++OT) IT.points = [], lT = {
          width: 0,
          height: 0,
          edgeLabel: IT,
          edgeObj: kT,
          rank: OT
        }, cT = LT(TT, "edge", lT, "_d"), OT === AT && (lT.width = IT.width, lT.height = IT.height, lT.dummy = "edge-label", lT.labelpos = IT.labelpos), TT.setEdge(KT, cT, {
          weight: IT.weight
        }, xT), 0 === MT && TT.graph().dummyChains.push(cT), KT = cT;
        TT.setEdge(KT, yT, {
          weight: IT.weight
        }, xT)
      }(TT, kT)))
    }

    function tk(TT) {
      let kT = {};
      TT.sources().forEach((function cT(lT) {
        let MT = TT.node(lT);
        if (Object.hasOwn(kT, lT)) return MT.rank;
        kT[lT] = !0;
        let KT = TT.outEdges(lT),
          OT = KT ? KT.map((kT => null == kT ? Number.POSITIVE_INFINITY : cT(kT.w) - TT.edge(kT).minlen)) : [],
          yT = WT(Math.min, OT);
        return yT === Number.POSITIVE_INFINITY && (yT = 0), MT.rank = yT
      }))
    }

    function hk(TT, kT) {
      return TT.node(kT.w).rank - TT.node(kT.v).rank - TT.edge(kT).minlen
    }
    var Nk = function(TT) {
      let kT = new dT({
          directed: !1
        }),
        cT = TT.nodes();
      if (0 === cT.length) throw new Error("Graph must have at least one node");
      let lT, MT, KT = cT[0],
        OT = TT.nodeCount();
      for (kT.setNode(KT, {}); Qk(kT, TT) < OT && (lT = Sk(kT, TT), lT);) MT = kT.hasNode(lT.v) ? hk(TT, lT) : -hk(TT, lT), Dk(kT, TT, MT);
      return kT
    };

    function Qk(TT, kT) {
      return TT.nodes().forEach((function cT(lT) {
        let MT = kT.nodeEdges(lT);
        MT && MT.forEach((MT => {
          let KT = MT.v,
            OT = lT === KT ? MT.w : KT;
          !TT.hasNode(OT) && !hk(kT, MT) && (TT.setNode(OT, {}), TT.setEdge(lT, OT, {}), cT(OT))
        }))
      })), TT.nodeCount()
    }

    function Sk(TT, kT) {
      return kT.edges().reduce(((cT, lT) => {
        let MT = Number.POSITIVE_INFINITY;
        return TT.hasNode(lT.v) !== TT.hasNode(lT.w) && (MT = hk(kT, lT)), MT < cT[0] ? [MT, lT] : cT
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Dk(TT, kT, cT) {
      TT.nodes().forEach((TT => kT.node(TT).rank += cT))
    }
    var {
      preorder: ak,
      postorder: Fk
    } = NT, rk = Pk;

    function Pk(TT) {
      TT = function(TT) {
        let kT = (new dT).setGraph(TT.graph());
        return TT.nodes().forEach((cT => kT.setNode(cT, TT.node(cT)))), TT.edges().forEach((cT => {
          let lT = kT.edge(cT.v, cT.w) || {
              weight: 0,
              minlen: 1
            },
            MT = TT.edge(cT);
          kT.setEdge(cT.v, cT.w, {
            weight: lT.weight + MT.weight,
            minlen: Math.max(lT.minlen, MT.minlen)
          })
        })), kT
      }(TT), tk(TT);
      let kT, cT, lT = Nk(TT);
      for (bk(lT), wk(lT, TT); kT = Jk(lT);) cT = Hk(lT, TT, kT), ek(lT, TT, kT, cT)
    }

    function wk(TT, kT) {
      let cT = Fk(TT, TT.nodes());
      cT = cT.slice(0, cT.length - 1), cT.forEach((cT => function(TT, kT, cT) {
        let lT = TT.node(cT).parent,
          MT = TT.edge(cT, lT);
        MT.cutvalue = mk(TT, kT, cT)
      }(TT, kT, cT)))
    }

    function mk(TT, kT, cT) {
      let lT = TT.node(cT).parent,
        MT = !0,
        KT = kT.edge(cT, lT),
        OT = 0;
      KT || (MT = !1, KT = kT.edge(lT, cT)), OT = KT.weight;
      let yT = kT.nodeEdges(cT);
      return yT && yT.forEach((KT => {
        let yT = KT.v === cT,
          fT = yT ? KT.w : KT.v;
        if (fT !== lT) {
          let lT = yT === MT,
            xT = kT.edge(KT).weight;
          if (OT += lT ? xT : -xT, function(TT, kT, cT) {
              return TT.hasEdge(kT, cT)
            }(TT, cT, fT)) {
            let kT = TT.edge(cT, fT).cutvalue;
            OT += lT ? -kT : kT
          }
        }
      })), OT
    }

    function bk(TT, kT) {
      arguments.length < 2 && (kT = TT.nodes()[0]), zk(TT, {}, 1, kT)
    }

    function zk(TT, kT, cT, lT, MT) {
      let KT = cT,
        OT = TT.node(lT);
      kT[lT] = !0;
      let yT = TT.neighbors(lT);
      return yT && yT.forEach((MT => {
        Object.hasOwn(kT, MT) || (cT = zk(TT, kT, cT, MT, lT))
      })), OT.low = KT, OT.lim = cT++, MT ? OT.parent = MT : delete OT.parent, cT
    }

    function Jk(TT) {
      return TT.edges().find((kT => TT.edge(kT).cutvalue < 0))
    }

    function Hk(TT, kT, cT) {
      let lT = cT.v,
        MT = cT.w;
      kT.hasEdge(lT, MT) || (lT = cT.w, MT = cT.v);
      let KT = TT.node(lT),
        OT = TT.node(MT),
        yT = KT,
        fT = !1;
      return KT.lim > OT.lim && (yT = OT, fT = !0), kT.edges().filter((kT => fT === Gk(TT, TT.node(kT.v), yT) && fT !== Gk(TT, TT.node(kT.w), yT))).reduce(((TT, cT) => hk(kT, cT) < hk(kT, TT) ? cT : TT))
    }

    function ek(TT, kT, cT, lT) {
      let MT = cT.v,
        KT = cT.w;
      TT.removeEdge(MT, KT), TT.setEdge(lT.v, lT.w, {}), bk(TT), wk(TT, kT),
        function(TT, kT) {
          let cT = TT.nodes().find((kT => !TT.node(kT).parent));
          if (!cT) return;
          let lT = ak(TT, [cT]);
          lT = lT.slice(1), lT.forEach((cT => {
            let lT = TT.node(cT).parent,
              MT = kT.edge(cT, lT),
              KT = !1;
            MT || (MT = kT.edge(lT, cT), KT = !0), kT.node(cT).rank = kT.node(lT).rank + (KT ? MT.minlen : -MT.minlen)
          }))
        }(TT, kT)
    }

    function Gk(TT, kT, cT) {
      return cT.low <= kT.lim && kT.lim <= cT.lim
    }
    Pk.initLowLimValues = bk, Pk.initCutValues = wk, Pk.calcCutValue = mk, Pk.leaveEdge = Jk, Pk.enterEdge = Hk, Pk.exchangeEdges = ek;
    var Vk = function(TT) {
      let kT = TT.graph().ranker;
      if ("function" == typeof kT) return kT(TT);
      switch (kT) {
        case "network-simplex":
        default:
          Zk(TT);
          break;
        case "tight-tree":
          ! function(TT) {
            tk(TT), Nk(TT)
          }(TT);
          break;
        case "longest-path":
          Ek(TT);
        case "none":
      }
    };
    var Ek = tk;

    function Zk(TT) {
      rk(TT)
    }
    var uk = function(TT) {
      let kT = function(TT) {
          let kT = {},
            cT = 0;

          function lT(MT) {
            let KT = cT;
            TT.children(MT).forEach(lT), kT[MT] = {
              low: KT,
              lim: cT++
            }
          }
          return TT.children(lk).forEach(lT), kT
        }(TT),
        cT = TT.graph();
      if (!Array.isArray(cT.dummyChains)) return;
      cT.dummyChains.forEach((cT => {
        let lT = TT.node(cT),
          MT = lT.edgeObj,
          KT = function(TT, kT, cT, lT) {
            let MT, KT = [],
              OT = [],
              yT = Math.min(kT[cT].low, kT[lT].low),
              fT = Math.max(kT[cT].lim, kT[lT].lim);
            MT = cT;
            do {
              MT = TT.parent(MT), KT.push(MT)
            } while (MT && (kT[MT].low > yT || fT > kT[MT].lim));
            let xT = MT,
              IT = lT;
            for (;
              (IT = TT.parent(IT)) !== xT;) OT.push(IT);
            return {
              path: KT.concat(OT.reverse()),
              lca: xT
            }
          }(TT, kT, MT.v, MT.w),
          OT = KT.path,
          yT = KT.lca,
          fT = 0,
          xT = OT[fT],
          IT = !0;
        for (; cT !== MT.w;) {
          if (lT = TT.node(cT), IT) {
            for (;
              (xT = OT[fT]) !== yT && TT.node(xT).maxRank < lT.rank;) fT++;
            xT === yT && (IT = !1)
          }
          if (!IT) {
            for (; fT < OT.length - 1 && TT.node(OT[fT + 1]).minRank <= lT.rank;) fT++;
            xT = OT[fT]
          }
          void 0 !== xT && TT.setParent(cT, xT), cT = TT.successors(cT)[0]
        }
      }))
    };

    function Xk(TT) {
      let kT = LT(TT, "root", {}, "_root"),
        cT = function(TT) {
          let kT = {};

          function cT(lT, MT) {
            let KT = TT.children(lT);
            KT && KT.length && KT.forEach((TT => cT(TT, MT + 1))), kT[lT] = MT
          }
          return TT.children(lk).forEach((TT => cT(TT, 1))), kT
        }(TT),
        lT = Object.values(cT),
        MT = WT(Math.max, lT) - 1,
        KT = 2 * MT + 1;
      TT.graph().nestingRoot = kT, TT.edges().forEach((kT => TT.edge(kT).minlen *= KT));
      let OT = function(TT) {
        return TT.edges().reduce(((kT, cT) => kT + TT.edge(cT).weight), 0)
      }(TT) + 1;
      TT.children(lk).forEach((lT => {
        dk(TT, kT, KT, OT, MT, cT, lT)
      })), TT.graph().nodeRankFactor = KT
    }

    function dk(TT, kT, cT, lT, MT, KT, OT) {
      var yT;
      let fT = TT.children(OT);
      if (!fT.length) return void(OT !== kT && TT.setEdge(kT, OT, {
        weight: 0,
        minlen: cT
      }));
      let xT = YT(TT, "_bt"),
        IT = YT(TT, "_bb"),
        AT = TT.node(OT);
      TT.setParent(xT, OT), AT.borderTop = xT, TT.setParent(IT, OT), AT.borderBottom = IT, fT.forEach((yT => {
        var fT;
        dk(TT, kT, cT, lT, MT, KT, yT);
        let AT = TT.node(yT),
          CT = AT.borderTop ? AT.borderTop : yT,
          jT = AT.borderBottom ? AT.borderBottom : yT,
          vT = AT.borderTop ? lT : 2 * lT,
          tT = CT !== jT ? 1 : MT - (null != (fT = KT[OT]) ? fT : 0) + 1;
        TT.setEdge(xT, CT, {
          weight: vT,
          minlen: tT,
          nestingEdge: !0
        }), TT.setEdge(jT, IT, {
          weight: vT,
          minlen: tT,
          nestingEdge: !0
        })
      })), TT.parent(OT) || TT.setEdge(kT, xT, {
        weight: 0,
        minlen: MT + (null != (yT = KT[OT]) ? yT : 0)
      })
    }
    var Lk = function(TT) {
      TT.children(lk).forEach((function kT(cT) {
        let lT = TT.children(cT),
          MT = TT.node(cT);
        if (lT.length && lT.forEach(kT), MT && Object.hasOwn(MT, "minRank")) {
          MT.borderLeft = [], MT.borderRight = [];
          for (let kT = MT.minRank, lT = MT.maxRank + 1; kT < lT; ++kT) Rk(TT, "borderLeft", "_bl", cT, MT, kT), Rk(TT, "borderRight", "_br", cT, MT, kT)
        }
      }))
    };

    function Rk(TT, kT, cT, lT, MT, KT) {
      let OT = {
          width: 0,
          height: 0,
          rank: KT,
          borderType: kT
        },
        yT = MT[kT][KT - 1],
        fT = LT(TT, "border", OT, cT);
      MT[kT][KT] = fT, TT.setParent(fT, lT), yT && TT.setEdge(yT, fT, {
        weight: 1
      })
    }

    function gk(TT) {
      var kT;
      let cT = null == (kT = TT.graph().rankdir) ? void 0 : kT.toLowerCase();
      ("bt" === cT || "rl" === cT) && function(TT) {
        TT.nodes().forEach((kT => Bk(TT.node(kT)))), TT.edges().forEach((kT => {
          var cT;
          let lT = TT.edge(kT);
          null == (cT = lT.points) || cT.forEach(Bk), Object.hasOwn(lT, "y") && Bk(lT)
        }))
      }(TT), ("lr" === cT || "rl" === cT) && (function(TT) {
        TT.nodes().forEach((kT => Wk(TT.node(kT)))), TT.edges().forEach((kT => {
          var cT;
          let lT = TT.edge(kT);
          null == (cT = lT.points) || cT.forEach(Wk), Object.hasOwn(lT, "x") && Wk(lT)
        }))
      }(TT), Uk(TT))
    }

    function Uk(TT) {
      TT.nodes().forEach((kT => Yk(TT.node(kT)))), TT.edges().forEach((kT => Yk(TT.edge(kT))))
    }

    function Yk(TT) {
      let kT = TT.width;
      TT.width = TT.height, TT.height = kT
    }

    function Bk(TT) {
      TT.y = -TT.y
    }

    function Wk(TT) {
      let kT = TT.x;
      TT.x = TT.y, TT.y = kT
    }

    function nk(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        cT = {},
        lT = TT.nodes().filter((kT => !TT.children(kT).length)),
        MT = lT.map((kT => TT.node(kT).rank)),
        KT = Tk(WT(Math.max, MT) + 1).map((() => []));
      return lT.sort(((kT, cT) => TT.node(kT).rank - TT.node(cT).rank)).forEach((function lT(MT) {
        if (cT[MT]) return;
        cT[MT] = !0;
        let OT = TT.node(MT);
        KT[OT.rank].push(MT);
        let yT = TT.successors(MT);
        yT && [...yT].sort(((cT, lT) => function(cT, lT) {
          let MT = TT.node(cT),
            KT = TT.node(lT);
          return Mk(kT, MT, KT)
        }(cT, lT))).forEach(lT)
      })), KT
    }

    function pk(TT, kT) {
      let cT = 0;
      for (let lT = 1; lT < kT.length; ++lT) cT += ik(TT, kT[lT - 1], kT[lT]);
      return cT
    }

    function ik(TT, kT, cT) {
      let lT = function(TT, kT) {
          return TT.reduce(((TT, cT, lT) => (TT[cT] = kT[lT], TT)), {})
        }(cT, cT.map(((TT, kT) => kT))),
        MT = kT.flatMap((kT => {
          let cT = TT.outEdges(kT);
          return cT ? cT.map((kT => ({
            pos: lT[kT.w],
            weight: TT.edge(kT).weight
          }))).sort(((TT, kT) => TT.pos - kT.pos)) : []
        })),
        KT = 1;
      for (; KT < cT.length;) KT <<= 1;
      let OT = 2 * KT - 1;
      KT -= 1;
      let yT = new Array(OT).fill(0),
        fT = 0;
      return MT.forEach((TT => {
        let kT = TT.pos + KT;
        yT[kT] += TT.weight;
        let cT = 0;
        for (; kT > 0;) kT % 2 && (cT += yT[kT + 1]), kT = kT - 1 >> 1, yT[kT] += TT.weight;
        fT += TT.weight * cT
      })), fT
    }

    function qk(TT, kT) {
      let cT = {};
      return TT.forEach(((TT, kT) => {
          let lT = {
            indegree: 0,
            in: [],
            out: [],
            vs: [TT.v],
            i: kT
          };
          void 0 !== TT.barycenter && (lT.barycenter = TT.barycenter, lT.weight = TT.weight), cT[TT.v] = lT
        })), kT.edges().forEach((TT => {
          let kT = cT[TT.v],
            lT = cT[TT.w];
          void 0 !== kT && void 0 !== lT && (lT.indegree++, kT.out.push(lT))
        })),
        function(TT) {
          let kT = [];

          function cT(TT) {
            return kT => {
              kT.merged || (void 0 === kT.barycenter || void 0 === TT.barycenter || kT.barycenter >= TT.barycenter) && function(TT, kT) {
                let cT = 0,
                  lT = 0;
                TT.weight && (cT += TT.barycenter * TT.weight, lT += TT.weight), kT.weight && (cT += kT.barycenter * kT.weight, lT += kT.weight), TT.vs = kT.vs.concat(TT.vs), TT.barycenter = cT / lT, TT.weight = lT, TT.i = Math.min(kT.i, TT.i), kT.merged = !0
              }(TT, kT)
            }
          }

          function lT(kT) {
            return cT => {
              cT.in.push(kT), 0 === --cT.indegree && TT.push(cT)
            }
          }
          for (; TT.length;) {
            let MT = TT.pop();
            kT.push(MT), MT.in.reverse().forEach(cT(MT)), MT.out.forEach(lT(MT))
          }
          return kT.filter((TT => !TT.merged)).map((TT => kk(TT, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(cT).filter((TT => !TT.indegree)))
    }

    function sk(TT, kT, cT, lT, MT) {
      let KT = {},
        OT = null,
        yT = null,
        fT = MT;
      "boolean" == typeof kT ? (fT = kT, KT = {}) : kT && (KT = kT, OT = null != cT ? cT : null, yT = null != lT ? lT : null);
      let xT = function(TT, kT) {
          let cT = {
            lhs: [],
            rhs: []
          };
          return TT.forEach((TT => {
            kT(TT) ? cT.lhs.push(TT) : cT.rhs.push(TT)
          })), cT
        }(TT, (TT => Object.hasOwn(TT, "barycenter"))),
        IT = xT.lhs,
        AT = xT.rhs.sort(((TT, kT) => kT.i - TT.i)),
        CT = [],
        jT = 0,
        vT = 0,
        tT = 0;
      IT.sort(function(TT, kT, cT) {
        return (lT, MT) => {
          if (lT.barycenter < MT.barycenter) return -1;
          if (lT.barycenter > MT.barycenter) return 1;
          if (TT && ("string" == typeof lT.vs[0] || "string" == typeof MT.vs[0])) {
            let cT = TT.node(lT.vs[0]),
              KT = TT.node(MT.vs[0]),
              OT = Mk(kT, cT, KT);
            if (0 !== OT) return OT
          }
          return cT ? MT.i - lT.i : lT.i - MT.i
        }
      }(yT, OT, !!fT));
      for (let [NT, QT] of Object.entries(KT)) {
        let TT = IT.findIndex((TT => TT.vs[0] === NT));
        IT.splice(TT + 1, 0, QT)
      }
      tT = Tc(CT, AT, tT), IT.forEach((TT => {
        tT += TT.vs.length, CT.push(TT.vs), jT += TT.barycenter * TT.weight, vT += TT.weight, tT = Tc(CT, AT, tT)
      }));
      let hT = {
        vs: CT.flat(1)
      };
      return vT && (hT.barycenter = jT / vT, hT.weight = vT), hT
    }

    function Tc(TT, kT, cT) {
      let lT;
      for (; kT.length && (lT = kT[kT.length - 1]).i <= cT;) kT.pop(), TT.push(lT.vs), cT++;
      return cT
    }

    function kc(TT, kT, cT, lT, MT) {
      var KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT;
      let hT = null,
        NT = MT;
      "boolean" == typeof lT ? (NT = lT, hT = null) : void 0 !== lT && (hT = lT);
      let QT = TT.children(kT),
        ST = TT.node(kT),
        DT = ST ? ST.borderLeft : void 0,
        aT = ST ? ST.borderRight : void 0,
        FT = {};
      DT && (QT = QT.filter((TT => TT !== DT && TT !== aT)));
      let rT = function(TT) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((kT => {
          let cT = TT.inEdges(kT);
          if (!cT || !cT.length) return {
            v: kT
          };
          {
            let lT = cT.reduce(((kT, cT) => {
              let lT = TT.edge(cT),
                MT = TT.node(cT.v);
              return {
                sum: kT.sum + lT.weight * MT.order,
                weight: kT.weight + lT.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: kT,
              barycenter: lT.sum / lT.weight,
              weight: lT.weight
            }
          }
        }))
      }(TT, QT);
      rT.forEach((kT => {
        if (TT.children(kT.v).length) {
          let {
            result: lT
          } = kc(TT, kT.v, cT, hT, NT);
          FT[kT.v] = lT, Object.hasOwn(lT, "barycenter") && function(TT, kT) {
            void 0 !== TT.barycenter ? (TT.barycenter = (TT.barycenter * TT.weight + kT.barycenter * kT.weight) / (TT.weight + kT.weight), TT.weight += kT.weight) : (TT.barycenter = kT.barycenter, TT.weight = kT.weight)
          }(kT, lT)
        }
      }));
      let PT = qk(rT, cT);
      ! function(TT, kT) {
        TT.forEach((TT => {
          TT.vs = TT.vs.flatMap((TT => kT[TT] ? kT[TT].vs : TT))
        }))
      }(PT, FT);
      let wT = {},
        mT = !1;
      for (let zT = 0; zT < PT.length; zT++)
        for (let kT = zT + 1; kT < PT.length; kT++)
          if (PT[zT] && PT[kT] && null != (KT = PT[zT]) && KT.barycenter && null != (OT = PT[kT]) && OT.barycenter && (null == (yT = PT[zT]) ? void 0 : yT.barycenter) === PT[kT].barycenter) {
            let cT = null != (xT = null == (fT = PT[zT]) ? void 0 : fT.vs[0]) ? xT : "",
              lT = null != (AT = null == (IT = PT[kT]) ? void 0 : IT.vs[0]) ? AT : "",
              MT = TT.node(cT),
              KT = TT.node(lT);
            if ("edge" === MT.dummy && "edge" === KT.dummy && (null == (CT = MT.edgeObj) ? void 0 : CT.v) === (null == (jT = KT.edgeObj) ? void 0 : jT.v) && (null == (vT = MT.edgeObj) ? void 0 : vT.w) === (null == (tT = KT.edgeObj) ? void 0 : tT.w)) {
              if (MT.edgeLabel.reversed) {
                wT[lT] = PT[zT], PT.splice(zT, 1), zT--;
                break
              }
              wT[cT] = PT[kT], PT.splice(kT, 1), kT--
            } else mT = !0
          } let bT = sk(PT, wT, hT, TT, NT);
      if (DT && aT) {
        bT.vs = [DT, bT.vs, aT].flat(1);
        let kT = TT.predecessors(DT);
        if (kT && kT.length) {
          let cT = TT.node(kT[0]),
            lT = TT.predecessors(aT),
            MT = TT.node(lT[0]);
          Object.hasOwn(bT, "barycenter") || (bT.barycenter = 0, bT.weight = 0), bT.barycenter = (bT.barycenter * bT.weight + cT.order + MT.order) / (bT.weight + 2), bT.weight += 2
        }
      }
      return Object.defineProperty(bT, "result", {
        value: bT,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(bT, "usedBias", {
        value: mT,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), bT
    }

    function cc(TT, kT, cT, lT) {
      lT || (lT = TT.nodes());
      let MT = function(TT) {
          let kT;
          for (; TT.hasNode(kT = sT("_root")););
          return kT
        }(TT),
        KT = new dT({
          compound: !0
        }).setGraph({
          root: MT
        }).setDefaultNodeLabel((kT => TT.node(kT)));
      return lT.forEach((lT => {
        let OT = TT.node(lT),
          yT = TT.parent(lT);
        if (OT.rank === kT || OT.minRank <= kT && kT <= OT.maxRank) {
          KT.setNode(lT), KT.setParent(lT, yT || MT);
          let fT = TT[cT](lT);
          fT && fT.forEach((kT => {
            let cT = kT.v === lT ? kT.w : kT.v,
              MT = KT.edge(cT, lT),
              OT = void 0 !== MT ? MT.weight : 0;
            KT.setEdge(cT, lT, {
              weight: TT.edge(kT).weight + OT
            })
          })), Object.hasOwn(OT, "minRank") && KT.setNode(lT, {
            borderLeft: OT.borderLeft[kT],
            borderRight: OT.borderRight[kT]
          })
        }
      })), KT
    }

    function lc(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof kT.customOrder) return void kT.customOrder(TT, lc);
      let lT = nT(TT),
        MT = Mc(TT, Tk(1, lT + 1), "inEdges"),
        KT = Mc(TT, Tk(lT - 1, -1, -1), "outEdges"),
        OT = nk(TT, cT);
      if (Oc(TT, OT), kT.disableOptimalOrderHeuristic) return;
      let yT, fT = Number.POSITIVE_INFINITY,
        xT = kT.constraints || [];
      for (let IT = 0, AT = 0; AT < 4; ++IT, ++AT) {
        Kc(IT % 2 ? MT : KT, IT % 4 >= 2, xT, cT), OT = UT(TT);
        let kT = pk(TT, OT);
        kT < fT ? (AT = 0, yT = Object.assign({}, OT), fT = kT) : kT === fT && (yT = structuredClone(OT))
      }
      Oc(TT, yT)
    }

    function Mc(TT, kT, cT) {
      let lT = new Map,
        MT = (TT, kT) => {
          lT.has(TT) || lT.set(TT, []), lT.get(TT).push(kT)
        };
      for (let KT of TT.nodes()) {
        let kT = TT.node(KT);
        if ("number" == typeof kT.rank && MT(kT.rank, KT), "number" == typeof kT.minRank && "number" == typeof kT.maxRank)
          for (let TT = kT.minRank; TT <= kT.maxRank; TT++) TT !== kT.rank && MT(TT, KT)
      }
      return kT.map((function(kT) {
        return cc(TT, kT, cT, lT.get(kT) || [])
      }))
    }

    function Kc(TT, kT, cT, lT) {
      let MT = !0,
        KT = new dT;
      TT.forEach((function(TT) {
        cT.forEach((TT => KT.setEdge(TT.left, TT.right)));
        let OT = TT.graph().root,
          {
            result: yT,
            usedBias: fT
          } = kc(TT, OT, KT, lT, MT);
        kT && fT && (MT = !MT), yT.vs.forEach(((kT, cT) => TT.node(kT).order = cT)),
          function(TT, kT, cT) {
            let lT, MT = {};
            cT.forEach((cT => {
              let KT, OT, yT = TT.parent(cT);
              for (; yT;) {
                if (KT = TT.parent(yT), KT ? (OT = MT[KT], MT[KT] = yT) : (OT = lT, lT = yT), OT && OT !== yT) return void kT.setEdge(OT, yT);
                yT = KT
              }
            }))
          }(TT, KT, yT.vs)
      }))
    }

    function Oc(TT, kT) {
      Object.values(kT).forEach((kT => kT.forEach(((kT, cT) => TT.node(kT).order = cT))))
    }

    function yc(TT, kT, cT) {
      if (kT > cT) {
        let TT = kT;
        kT = cT, cT = TT
      }
      let lT = TT[kT];
      lT || (TT[kT] = lT = {}), lT[cT] = !0
    }

    function fc(TT, kT, cT) {
      if (kT > cT) {
        let TT = kT;
        kT = cT, cT = TT
      }
      let lT = TT[kT];
      return void 0 !== lT && Object.hasOwn(lT, cT)
    }

    function xc(TT, kT, cT, lT) {
      let MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        KT = {},
        OT = function(TT, kT, cT, lT) {
          let MT = new dT,
            KT = TT.graph(),
            OT = function(TT, kT, cT) {
              return (lT, MT, KT) => {
                let OT, yT = lT.node(MT),
                  fT = lT.node(KT),
                  xT = 0;
                if (xT += yT.width / 2, Object.hasOwn(yT, "labelpos")) switch (yT.labelpos.toLowerCase()) {
                  case "l":
                    OT = -yT.width / 2;
                    break;
                  case "r":
                    OT = yT.width / 2
                }
                if (OT && (xT += cT ? OT : -OT), OT = void 0, xT += (yT.dummy ? kT : TT) / 2, xT += (fT.dummy ? kT : TT) / 2, xT += fT.width / 2, Object.hasOwn(fT, "labelpos")) switch (fT.labelpos.toLowerCase()) {
                  case "l":
                    OT = fT.width / 2;
                    break;
                  case "r":
                    OT = -fT.width / 2
                }
                return OT && (xT += cT ? OT : -OT), xT
              }
            }(KT.nodesep, KT.edgesep, lT);
          return kT.forEach((kT => {
            let lT;
            kT.forEach((kT => {
              let KT = cT[kT];
              if (void 0 !== KT) {
                if (MT.setNode(KT), void 0 !== lT) {
                  let yT = cT[lT];
                  if (void 0 !== yT) {
                    let cT = MT.edge(yT, KT);
                    MT.setEdge(yT, KT, Math.max(OT(TT, kT, lT), cT || 0))
                  }
                }
                lT = kT
              }
            }))
          })), MT
        }(TT, kT, cT, MT),
        yT = MT ? "borderLeft" : "borderRight";

      function fT(TT, kT) {
        let cT = OT.nodes().slice(),
          lT = {},
          MT = cT.pop();
        for (; MT;) {
          if (lT[MT]) TT(MT);
          else {
            lT[MT] = !0, cT.push(MT);
            for (let TT of kT(MT)) cT.push(TT)
          }
          MT = cT.pop()
        }
      }
      return fT((function(TT) {
        let kT = OT.inEdges(TT);
        KT[TT] = kT ? kT.reduce(((TT, kT) => {
          var cT;
          let lT = null != (cT = KT[kT.v]) ? cT : 0,
            MT = OT.edge(kT);
          return Math.max(TT, lT + (void 0 !== MT ? MT : 0))
        }), 0) : 0
      }), (function(TT) {
        return OT.predecessors(TT) || []
      })), fT((function(kT) {
        let cT = OT.outEdges(kT),
          lT = Number.POSITIVE_INFINITY;
        cT && (lT = cT.reduce(((TT, kT) => {
          let cT = KT[kT.w],
            lT = OT.edge(kT);
          return Math.min(TT, (void 0 !== cT ? cT : 0) - (void 0 !== lT ? lT : 0))
        }), Number.POSITIVE_INFINITY));
        let MT = TT.node(kT);
        lT !== Number.POSITIVE_INFINITY && MT.borderType !== yT && (KT[kT] = Math.max(void 0 !== KT[kT] ? KT[kT] : 0, lT))
      }), (function(TT) {
        return OT.successors(TT) || []
      })), Object.keys(lT).forEach((TT => {
        var kT;
        let lT = cT[TT];
        void 0 !== lT && (KT[TT] = null != (kT = KT[lT]) ? kT : 0)
      })), KT
    }

    function Ic(TT, kT) {
      let cT, lT = UT(TT),
        MT = Object.assign(function(TT, kT) {
          let cT = {};
          return kT.length && kT.reduce((function(kT, lT) {
            let MT = 0,
              KT = 0,
              OT = kT.length,
              yT = lT[lT.length - 1];
            return lT.forEach(((kT, fT) => {
              let xT = function(TT, kT) {
                  if (TT.node(kT).dummy) {
                    let cT = TT.predecessors(kT);
                    if (cT) return cT.find((kT => TT.node(kT).dummy))
                  }
                }(TT, kT),
                IT = xT ? TT.node(xT).order : OT;
              (xT || kT === yT) && (lT.slice(KT, fT + 1).forEach((kT => {
                let lT = TT.predecessors(kT);
                lT && lT.forEach((lT => {
                  let KT = TT.node(lT),
                    OT = KT.order;
                  (OT < MT || IT < OT) && (!KT.dummy || !TT.node(kT).dummy) && yc(cT, lT, kT)
                }))
              })), KT = fT + 1, MT = IT)
            })), lT
          })), cT
        }(TT, lT), function(TT, kT) {
          let cT = {};

          function lT(kT, lT, MT, KT, OT) {
            Tk(lT, MT).forEach((lT => {
              let MT = kT[lT];
              if (void 0 !== MT && TT.node(MT).dummy) {
                let kT = TT.predecessors(MT);
                kT && kT.forEach((kT => {
                  if (void 0 === kT) return;
                  let lT = TT.node(kT);
                  lT.dummy && (lT.order < KT || lT.order > OT) && yc(cT, kT, MT)
                }))
              }
            }))
          }
          return kT.length && kT.reduce((function(kT, cT) {
            let MT = -1,
              KT = -1,
              OT = 0;
            return cT.forEach(((yT, fT) => {
              if ("border" === TT.node(yT).dummy) {
                let kT = TT.predecessors(yT);
                if (kT && kT.length) {
                  let yT = kT[0];
                  if (void 0 === yT) return;
                  KT = TT.node(yT).order, lT(cT, OT, fT, MT, KT), OT = fT, MT = KT
                }
              }
              lT(cT, OT, cT.length, KT, kT.length)
            })), cT
          })), cT
        }(TT, lT)),
        KT = {};
      ["u", "d"].forEach((OT => {
        cT = "u" === OT ? lT : Object.values(lT).reverse(), ["l", "r"].forEach((lT => {
          "r" === lT && (cT = cT.map((TT => Object.values(TT).reverse())));
          let yT = function(TT, kT, cT, lT, MT) {
              let KT = {},
                OT = {},
                yT = {};
              return kT.forEach((TT => {
                TT.forEach(((TT, kT) => {
                  KT[TT] = TT, OT[TT] = TT, yT[TT] = kT
                }))
              })), kT.forEach((kT => {
                let fT = -1,
                  xT = -1,
                  IT = !1,
                  AT = kT,
                  CT = kT.findIndex((kT => (null == MT ? void 0 : MT.includes(kT)) || Ac(kT, TT, MT)));
                CT > 0 && (AT = [kT[CT], ...kT.slice(0, CT), ...kT.slice(CT + 1)], IT = !0), AT.forEach((kT => {
                  var AT;
                  let CT = lT(kT);
                  if (CT && CT.length) {
                    null != MT && MT.includes(kT) && (CT = CT.filter((kT => Ac(kT, TT, MT))));
                    let lT = CT.sort(((TT, kT) => {
                        let cT = yT[TT],
                          lT = yT[kT];
                        return (void 0 !== cT ? cT : 0) - (void 0 !== lT ? lT : 0)
                      })),
                      jT = (lT.length - 1) / 2;
                    for (let TT = Math.floor(jT), MT = Math.ceil(jT); TT <= MT; ++TT) {
                      let MT = lT[TT];
                      if (void 0 === MT) continue;
                      let CT = yT[MT];
                      if (void 0 !== CT && OT[kT] === kT && fT < CT && yT[MT] !== xT && !fc(cT, kT, MT)) {
                        let TT = KT[MT];
                        void 0 !== TT && (OT[MT] = kT, OT[kT] = KT[kT] = TT, fT = CT, IT && (fT = -1, xT = null != (AT = yT[MT]) ? AT : -1, IT = !1))
                      }
                    }
                  }
                }))
              })), {
                root: KT,
                align: OT
              }
            }(TT, cT, MT, (kT => ("u" === OT ? TT.predecessors(kT) : TT.successors(kT)) || []), kT),
            fT = xc(TT, cT, yT.root, yT.align, "r" === lT);
          "r" === lT && (fT = ck(fT, (TT => -TT))), KT[OT + lT] = fT
        }))
      }));
      let OT = function(TT, kT) {
        return Object.values(kT).reduce(((kT, cT) => {
          let lT = Number.NEGATIVE_INFINITY,
            MT = Number.POSITIVE_INFINITY;
          Object.entries(cT).forEach((kT => {
            let [cT, KT] = kT, OT = function(TT, kT) {
              return TT.node(kT).width
            }(TT, cT) / 2;
            lT = Math.max(KT + OT, lT), MT = Math.min(KT - OT, MT)
          }));
          let KT = lT - MT;
          return KT < kT[0] && (kT = [KT, cT]), kT
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(TT, KT);
      return function(TT, kT) {
          let cT = Object.values(kT),
            lT = WT(Math.min, cT),
            MT = WT(Math.max, cT);
          ["u", "d"].forEach((cT => {
            ["l", "r"].forEach((KT => {
              let OT = cT + KT,
                yT = TT[OT];
              if (!yT || yT === kT) return;
              let fT = Object.values(yT),
                xT = lT - WT(Math.min, fT);
              "l" !== KT && (xT = MT - WT(Math.max, fT)), xT && (TT[OT] = ck(yT, (TT => TT + xT)))
            }))
          }))
        }(KT, OT),
        function(TT) {
          let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            cT = TT.ul;
          return cT ? ck(cT, ((cT, lT) => {
            var MT, KT;
            if (kT) {
              let cT = kT.toLowerCase(),
                MT = TT[cT];
              if (MT && void 0 !== MT[lT]) return MT[lT]
            }
            let OT = Object.values(TT).map((TT => {
              let kT = TT[lT];
              return void 0 !== kT ? kT : 0
            })).sort(((TT, kT) => TT - kT));
            return ((null != (MT = OT[1]) ? MT : 0) + (null != (KT = OT[2]) ? KT : 0)) / 2
          })) : {}
        }(KT, TT.graph().align)
    }

    function Ac(TT, kT, cT) {
      var lT;
      if (!cT) return !1;
      let MT = null == (lT = kT.node(TT)) ? void 0 : lT.edgeObj;
      if (!MT || kT.node(TT).edgeLabel.reversed) return !1;
      let KT = cT.indexOf(null == MT ? void 0 : MT.v),
        OT = cT.indexOf(null == MT ? void 0 : MT.w);
      return -1 !== KT && -1 !== OT && KT === (OT + 1) % cT.length || KT === (OT - 1) % cT.length
    }

    function Cc(TT, kT) {
      (function(TT) {
        let kT = UT(TT),
          cT = TT.graph(),
          lT = cT.ranksep,
          MT = cT.rankalign,
          KT = 0;
        kT.forEach((kT => {
          let cT = kT.reduce(((kT, cT) => {
            var lT;
            let MT = null != (lT = TT.node(cT).height) ? lT : 0;
            return kT > MT ? kT : MT
          }), 0);
          kT.forEach((kT => {
            let lT = TT.node(kT);
            lT.y = "top" === MT ? KT + lT.height / 2 : "bottom" === MT ? KT + cT - lT.height / 2 : KT + cT / 2
          })), KT += cT + lT
        }))
      })(TT = RT(TT)), Object.entries(Ic(TT, kT)).forEach((kT => {
        let [cT, lT] = kT;
        return TT.node(cT).x = lT
      }))
    }
    var jc = new WeakMap;

    function vc(TT) {
      return hc(TT, iT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), TT
    }

    function tc(TT, kT, cT) {
      let lT = kT;
      for (; void 0 !== lT;) {
        let kT = TT.parent(lT);
        if (kT === cT) return lT;
        lT = kT
      }
    }

    function hc(TT, kT, cT) {
      var lT;
      let MT = TT.nodes().filter((kT => TT.children(kT).length)),
        KT = {};
      MT.forEach((lT => {
        let MT = TT.node(lT);
        if (MT && MT.rankdir) {
          let OT = new dT({
            multigraph: !0,
            compound: !0
          });
          OT.setGraph({
            rankdir: MT.rankdir
          });
          let yT = TT.children(lT);
          yT.forEach((kT => {
            let cT = {
              ...TT.node(kT)
            };
            OT.setNode(kT, cT);
            let MT = TT.parent(kT);
            MT && MT !== lT && yT.includes(MT) && OT.setParent(kT, MT)
          }));
          let fT = new Set;
          TT.edges().forEach((kT => {
            let cT = tc(TT, kT.v, lT),
              MT = tc(TT, kT.w, lT);
            if (cT && MT && cT !== MT) {
              let lT = `${cT}\0${MT}`;
              fT.has(lT) || (fT.add(lT), OT.setEdge(cT, MT, {
                ...TT.edge(kT)
              }))
            }
          })), hc(OT, kT, cT);
          let xT = bc(OT);
          Nc(xT, kT, cT, null), Qc(OT, xT);
          let IT = 1 / 0,
            AT = 1 / 0,
            CT = -1 / 0,
            jT = -1 / 0;
          OT.nodes().forEach((TT => {
            if (TT === lT) return;
            let kT = OT.node(TT);
            kT && "number" == typeof kT.x && "number" == typeof kT.y && "number" == typeof kT.width && "number" == typeof kT.height && (IT = Math.min(IT, kT.x - kT.width / 2), CT = Math.max(CT, kT.x + kT.width / 2), AT = Math.min(AT, kT.y - kT.height / 2), jT = Math.max(jT, kT.y + kT.height / 2))
          })), (!isFinite(IT) || !isFinite(AT) || !isFinite(CT) || !isFinite(jT)) && (IT = AT = 0, CT = jT = 0);
          let vT = CT - IT,
            tT = jT - AT;
          KT[lT] = {
            minX: IT,
            nM: AT,
            maxX: CT,
            pM: jT,
            width: vT,
            height: tT,
            offsetX: IT,
            offsetY: AT
          }, MT._dagreClusterSubgraph = OT
        }
      }));
      let OT = [],
        yT = new Map;
      MT.forEach((kT => {
        let cT = TT.node(kT);
        cT && cT.rankdir && KT[kT] && yT.set(kT, (TT.children(kT) || []).filter((TT => TT !== kT)))
      }));
      let fT = new Set([...yT.values()].flat()),
        xT = new Map;
      yT.forEach(((kT, cT) => {
        fT.has(cT) || xT.set(cT, (kT => {
          let cT = [],
            lT = (TT.children(kT) || []).filter((TT => TT !== kT));
          for (; lT.length > 0;) {
            let kT = lT.shift();
            cT.push(kT), (TT.children(kT) || []).filter((TT => TT !== kT)).forEach((TT => lT.push(TT)))
          }
          return cT
        })(cT))
      }));
      let IT = new Set([...xT.values()].flat()),
        AT = TT => {
          for (let [kT, cT] of xT)
            if (cT.includes(TT)) return kT;
          return TT
        },
        CT = [];
      TT.edges().forEach((kT => {
        (IT.has(kT.v) || IT.has(kT.w)) && CT.push({
          edge: kT,
          label: TT.edge(kT)
        })
      }));
      let jT = new Map;
      IT.forEach((kT => {
        let cT = TT.parent(kT);
        jT.set(kT, "string" == typeof cT ? cT : void 0)
      })), xT.forEach(((kT, cT) => {
        let lT = TT.node(cT),
          MT = [];
        kT.forEach((kT => {
          let cT = TT.node(kT);
          cT && (MT.push({
            id: kT,
            node: cT,
            parent: jT.get(kT)
          }), TT.removeNode(kT))
        }));
        let yT = CT.filter((TT => {
            let {
              edge: cT
            } = TT;
            return kT.includes(cT.v) || kT.includes(cT.w)
          })),
          fT = KT[cT];
        lT && (OT.push({
          clusterId: cT,
          subgraph: lT._dagreClusterSubgraph,
          bounds: fT,
          children: kT,
          removedNodes: MT,
          removedEdges: yT
        }), lT.width = fT.width, lT.height = fT.height)
      }));
      let vT = new Set;
      CT.forEach((kT => {
        let {
          edge: cT,
          label: lT
        } = kT, MT = AT(cT.v), KT = AT(cT.w);
        if (MT !== KT && TT.hasNode(MT) && TT.hasNode(KT)) {
          let kT = `${MT}\0${KT}`;
          vT.has(kT) || (vT.add(kT), TT.setEdge(MT, KT, {
            ...lT,
            width: 0,
            height: 0
          }))
        }
      }));
      let tT = bc(TT),
        hT = Nc(tT, kT, cT, null != (lT = jc.get(TT)) ? lT : null);
      jc.set(TT, hT), Qc(TT, tT), vT.forEach((kT => {
        let cT = kT.indexOf("\0"),
          lT = kT.slice(0, cT),
          MT = kT.slice(cT + 1);
        TT.hasEdge(lT, MT) && TT.removeEdge(lT, MT)
      })), OT.forEach((kT => {
        let {
          clusterId: cT,
          subgraph: lT,
          bounds: MT,
          removedNodes: KT,
          removedEdges: OT
        } = kT;
        var yT, fT;
        let xT = TT.node(cT),
          IT = null != (yT = null == xT ? void 0 : xT.x) ? yT : 0,
          AT = null != (fT = null == xT ? void 0 : xT.y) ? fT : 0,
          CT = (MT.minX + MT.maxX) / 2,
          jT = (MT.nM + MT.pM) / 2;
        KT.forEach((kT => {
          let {
            id: cT,
            node: lT,
            parent: MT
          } = kT;
          TT.setNode(cT, lT), void 0 !== MT && TT.setParent(cT, MT)
        })), OT.forEach((kT => {
          let {
            edge: cT,
            label: lT
          } = kT;
          TT.setEdge(cT, lT)
        })), lT.nodes().forEach((kT => {
          if (kT === cT) return;
          let MT = lT.node(kT),
            KT = TT.node(kT);
          KT && MT && "number" == typeof MT.x && "number" == typeof MT.y && (KT.x = IT + (MT.x - CT), KT.y = AT + (MT.y - jT))
        })), delete xT._dagreClusterSubgraph
      })), MT.forEach((kT => {
        var cT, lT;
        let MT = TT.node(kT),
          OT = KT[kT];
        if (MT && MT.rankdir && MT._dagreClusterSubgraph && OT) {
          let KT = MT._dagreClusterSubgraph,
            yT = null != (cT = MT.x) ? cT : 0,
            fT = null != (lT = MT.y) ? lT : 0,
            xT = (OT.minX + OT.maxX) / 2,
            IT = (OT.nM + OT.pM) / 2;
          KT.nodes().forEach((cT => {
            if (cT === kT) return;
            let lT = KT.node(cT),
              MT = TT.node(cT);
            if (MT && lT && "number" == typeof lT.x && "number" == typeof lT.y) {
              let TT = lT.x - xT,
                kT = lT.y - IT;
              MT.x = yT + TT, MT.y = fT + kT
            }
          })), delete MT._dagreClusterSubgraph
        }
      }))
    }

    function Nc(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var MT, KT;
      let OT = !1 !== (null == cT ? void 0 : cT.useDynamic),
        yT = OT && null != (MT = null == lT ? void 0 : lT.graph) ? MT : null,
        fT = OT && null != (KT = null == lT ? void 0 : lT.rawNodes) ? KT : null;
      kT("    makeSpaceForEdgeLabels", (() => function(TT) {
        let kT = TT.graph();
        kT.ranksep /= 2, TT.edges().forEach((cT => {
          var lT;
          let MT = TT.edge(cT);
          MT.minlen *= 2, "c" !== (null != (lT = MT.labelpos) ? lT : "r").toLowerCase() && ("TB" === kT.rankdir || "BT" === kT.rankdir ? MT.width += MT.labeloffset : MT.height += MT.labeloffset)
        }))
      }(TT))), kT("    removeSelfEdges", (() => function(TT) {
        TT.edges().forEach((kT => {
          if (kT.v === kT.w) {
            let cT = TT.node(kT.v);
            cT.selfEdges || (cT.selfEdges = []), cT.selfEdges.push({
              e: kT,
              label: TT.edge(kT)
            }), TT.removeEdge(kT)
          }
        }))
      }(TT))), kT("    acyclic", (() => jk(TT, yT))), kT("    nestingGraph.run", (() => Xk(TT))), kT("    rank", (() => Vk(RT(TT)))), kT("    injectEdgeLabelProxies", (() => function(TT) {
        TT.edges().forEach((kT => {
          let cT = TT.edge(kT);
          if (cT.width && cT.height) {
            let cT = TT.node(kT.v),
              lT = {
                rank: (TT.node(kT.w).rank - cT.rank) / 2 + cT.rank,
                e: kT
              };
            LT(TT, "edge-proxy", lT, "_ep")
          }
        }))
      }(TT))), kT("    removeEmptyRanks", (() => function(TT) {
        let kT = TT.nodes().map((kT => TT.node(kT).rank)).filter((TT => void 0 !== TT)),
          cT = WT(Math.min, kT),
          lT = [];
        TT.nodes().forEach((kT => {
          let MT = TT.node(kT).rank - cT;
          lT[MT] || (lT[MT] = []), lT[MT].push(kT)
        }));
        let MT = 0,
          KT = TT.graph().nodeRankFactor;
        Array.from(lT).forEach(((kT, cT) => {
          void 0 === kT && cT % KT !== 0 ? --MT : void 0 !== kT && MT && kT.forEach((kT => TT.node(kT).rank += MT))
        }))
      }(TT))), kT("    nestingGraph.cleanup", (() => function(TT) {
        let kT = TT.graph();
        TT.removeNode(kT.nestingRoot), delete kT.nestingRoot, TT.edges().forEach((kT => {
          TT.edge(kT).nestingEdge && TT.removeEdge(kT)
        }))
      }(TT))), kT("    normalizeRanks", (() => function(TT) {
        let kT = TT.nodes().map((kT => {
            let cT = TT.node(kT).rank;
            return void 0 === cT ? Number.MAX_VALUE : cT
          })),
          cT = WT(Math.min, kT);
        TT.nodes().forEach((kT => {
          let lT = TT.node(kT);
          Object.hasOwn(lT, "rank") && (lT.rank -= cT)
        }))
      }(TT))), kT("    assignRankMinMax", (() => function(TT) {
        let kT = 0;
        TT.nodes().forEach((cT => {
          let lT = TT.node(cT);
          lT.borderTop && (lT.minRank = TT.node(lT.borderTop).rank, lT.maxRank = TT.node(lT.borderBottom).rank, kT = Math.max(kT, lT.maxRank))
        })), TT.graph().maxRank = kT
      }(TT))), kT("    removeEdgeLabelProxies", (() => function(TT) {
        TT.nodes().forEach((kT => {
          let cT = TT.node(kT);
          if ("edge-proxy" === cT.dummy) {
            let lT = cT;
            TT.edge(lT.e).labelRank = cT.rank, TT.removeNode(kT)
          }
        }))
      }(TT))), kT("    normalize.run", (() => vk(TT))), kT("    parentDummyChains", (() => uk(TT))), kT("    addBorderSegments", (() => Lk(TT))), kT("    order", (() => lc(TT, cT, fT))), kT("    insertSelfEdges", (() => function(TT) {
        UT(TT).forEach((kT => {
          let cT = 0;
          kT.forEach(((kT, lT) => {
            let MT = TT.node(kT);
            "number" != typeof MT.rank && (MT.rank = 0), MT.order = lT + cT, (MT.selfEdges || []).forEach((kT => {
              LT(TT, "selfedge", {
                width: kT.label.width,
                height: kT.label.height,
                rank: MT.rank,
                order: lT + ++cT,
                e: kT.e,
                edgeLabel: kT.label
              }, "_se"), (!Array.isArray(kT.label.points) || 7 !== kT.label.points.length) && (kT.label.points = [{
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
            })), delete MT.selfEdges
          }))
        }))
      }(TT))), kT("    adjustCoordinateSystem", (() => function(TT) {
        var kT;
        let cT = null == (kT = TT.graph().rankdir) ? void 0 : kT.toLowerCase();
        ("lr" === cT || "rl" === cT) && Uk(TT)
      }(TT))), kT("    position", (() => Cc(TT, cT.corePath))), kT("    positionSelfEdges", (() => function(TT) {
        TT.nodes().forEach((kT => {
          let cT = TT.node(kT),
            lT = TT => "number" == typeof TT && isFinite(TT);
          if ("selfedge" === cT.dummy) {
            let MT = cT,
              KT = TT.node(MT.e.v),
              OT = lT(null == KT ? void 0 : KT.x) ? KT.x : 0,
              yT = lT(null == KT ? void 0 : KT.y) ? KT.y : 0,
              fT = lT(null == KT ? void 0 : KT.width) ? KT.width : 0,
              xT = lT(null == KT ? void 0 : KT.height) ? KT.height : 0,
              IT = lT(cT.x) ? cT.x : OT,
              AT = lT(cT.y) ? cT.y : yT,
              CT = fT / 2,
              jT = xT / 2;
            MT.edgeLabel.points = [{
              x: IT + CT,
              y: AT - jT
            }, {
              x: IT + CT,
              y: AT - jT
            }, {
              x: IT,
              y: AT
            }, {
              x: IT - CT,
              y: AT + jT
            }, {
              x: IT - CT,
              y: AT + jT
            }, {
              x: IT,
              y: AT
            }, {
              x: IT,
              y: AT
            }], MT.edgeLabel.x = IT, MT.edgeLabel.y = AT, TT.setEdge(MT.e, MT.edgeLabel), TT.removeNode(kT)
          } else cT && Array.isArray(cT.selfEdges) && cT.selfEdges.forEach((TT => {
            if (!Array.isArray(TT.label.points) || 7 !== TT.label.points.length) {
              let kT = lT(cT.x) ? cT.x : 0,
                MT = lT(cT.y) ? cT.y : 0,
                KT = (lT(cT.width) ? cT.width : 0) / 2,
                OT = (lT(cT.height) ? cT.height : 0) / 2;
              TT.label.points = [{
                x: kT + KT,
                y: MT - OT
              }, {
                x: kT + KT,
                y: MT - OT
              }, {
                x: kT,
                y: MT
              }, {
                x: kT - KT,
                y: MT + OT
              }, {
                x: kT - KT,
                y: MT + OT
              }, {
                x: kT,
                y: MT
              }, {
                x: kT,
                y: MT
              }]
            }
          }))
        }))
      }(TT)));
      let xT = JSON.parse(JSON.stringify(TT._nodes));
      return kT("    removeBorderNodes", (() => function(TT) {
        TT.nodes().forEach((kT => {
          if (TT.children(kT).length) {
            let cT = TT.node(kT),
              lT = TT.node(cT.borderTop),
              MT = TT.node(cT.borderBottom),
              KT = TT.node(cT.borderLeft[cT.borderLeft.length - 1]),
              OT = TT.node(cT.borderRight[cT.borderRight.length - 1]);
            cT.width = Math.abs(OT.x - KT.x), cT.height = Math.abs(MT.y - lT.y), cT.x = KT.x + cT.width / 2, cT.y = lT.y + cT.height / 2
          }
        })), TT.nodes().forEach((kT => {
          "border" === TT.node(kT).dummy && TT.removeNode(kT)
        }))
      }(TT))), kT("    normalize.undo", (() => function(TT) {
        TT.graph().dummyChains.forEach((kT => {
          let cT, lT = TT.node(kT),
            MT = lT.edgeLabel;
          for (TT.setEdge(lT.edgeObj, MT); lT.dummy;) cT = TT.successors(kT)[0], TT.removeNode(kT), MT.points.push({
            x: lT.x,
            y: lT.y
          }), "edge-label" === lT.dummy && (MT.x = lT.x, MT.y = lT.y, MT.width = lT.width, MT.height = lT.height), kT = cT, lT = TT.node(kT)
        }))
      }(TT))), kT("    fixupEdgeLabelCoords", (() => function(TT) {
        TT.edges().forEach((kT => {
          let cT = TT.edge(kT);
          if (Object.hasOwn(cT, "x")) switch (("l" === cT.labelpos || "r" === cT.labelpos) && (cT.width -= cT.labeloffset), cT.labelpos) {
            case "l":
              cT.x -= cT.width / 2 + cT.labeloffset;
              break;
            case "r":
              cT.x += cT.width / 2 + cT.labeloffset
          }
        }))
      }(TT))), kT("    undoCoordinateSystem", (() => gk(TT))), kT("    translateGraph", (() => function(TT) {
        let kT = Number.POSITIVE_INFINITY,
          cT = 0,
          lT = Number.POSITIVE_INFINITY,
          MT = 0,
          KT = TT.graph(),
          OT = KT.marginx || 0,
          yT = KT.marginy || 0;

        function fT(TT) {
          let KT = TT.x,
            OT = TT.y,
            yT = TT.width,
            fT = TT.height;
          kT = Math.min(kT, KT - yT / 2), cT = Math.max(cT, KT + yT / 2), lT = Math.min(lT, OT - fT / 2), MT = Math.max(MT, OT + fT / 2)
        }
        TT.nodes().forEach((kT => fT(TT.node(kT)))), TT.edges().forEach((kT => {
          let cT = TT.edge(kT);
          Object.hasOwn(cT, "x") && fT(cT)
        })), kT -= OT, lT -= yT, TT.nodes().forEach((cT => {
          let MT = TT.node(cT);
          MT.x -= kT, MT.y -= lT
        })), TT.edges().forEach((cT => {
          let MT = TT.edge(cT);
          MT.points.forEach((TT => {
            TT.x -= kT, TT.y -= lT
          })), Object.hasOwn(MT, "x") && (MT.x -= kT), Object.hasOwn(MT, "y") && (MT.y -= lT)
        })), KT.width = cT - kT + OT, KT.height = MT - lT + yT
      }(TT))), kT("    assignNodeIntersects", (() => function(TT) {
        TT.edges().forEach((kT => {
          if (kT.v === kT.w) return;
          let cT, lT, MT = TT.edge(kT),
            KT = TT.node(kT.v),
            OT = TT.node(kT.w);
          MT.points ? (cT = MT.points[0], lT = MT.points[MT.points.length - 1]) : (MT.points = [], cT = OT, lT = KT), MT.points.unshift(gT(KT, cT)), MT.points.push(gT(OT, lT))
        }))
      }(TT))), kT("    reversePoints", (() => function(TT) {
        TT.edges().forEach((kT => {
          let cT = TT.edge(kT);
          cT.reversed && cT.points.reverse()
        }))
      }(TT))), kT("    acyclic.undo", (() => function(TT) {
        TT.edges().forEach((kT => {
          let cT = TT.edge(kT);
          if (cT.reversed) {
            TT.removeEdge(kT);
            let lT = cT.forwardName;
            delete cT.reversed, delete cT.forwardName, TT.setEdge(kT.w, kT.v, cT, lT)
          }
        }))
      }(TT))), {
        graph: TT,
        rawNodes: xT
      }
    }

    function Qc(TT, kT) {
      TT.nodes().forEach((cT => {
        let lT = TT.node(cT),
          MT = kT.node(cT);
        lT && (lT.x = MT.x, lT.y = MT.y, lT.order = MT.order, lT.rank = MT.rank, kT.children(cT).length && (lT.width = MT.width, lT.height = MT.height))
      })), TT.edges().forEach((cT => {
        let lT = TT.edge(cT),
          MT = kT.edge(cT);
        lT.points = MT.points, Object.hasOwn(MT, "x") && (lT.x = MT.x, lT.y = MT.y)
      })), TT.graph().width = kT.graph().width, TT.graph().height = kT.graph().height
    }
    var Sc = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Dc = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      ac = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Fc = ["width", "height", "rank"],
      rc = {
        width: 0,
        height: 0
      },
      Pc = ["minlen", "weight", "width", "height", "labeloffset"],
      wc = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      mc = ["labelpos"];

    function bc(TT) {
      let kT = new dT({
          multigraph: !0,
          compound: !0
        }),
        cT = Jc(TT.graph());
      return kT.setGraph(Object.assign({}, Dc, zc(cT, Sc), kk(cT, ac))), TT.nodes().forEach((cT => {
        let lT = zc(Jc(TT.node(cT)), Fc);
        Object.keys(rc).forEach((TT => {
          void 0 === lT[TT] && (lT[TT] = rc[TT])
        })), kT.setNode(cT, lT);
        let MT = TT.parent(cT);
        void 0 !== MT && kT.setParent(cT, MT)
      })), TT.edges().forEach((cT => {
        let lT = Jc(TT.edge(cT));
        kT.setEdge(cT, Object.assign({}, wc, zc(lT, Pc), kk(lT, mc)))
      })), kT
    }

    function zc(TT, kT) {
      return ck(kk(TT, kT), Number)
    }

    function Jc(TT) {
      let kT = {};
      return TT && Object.entries(TT).forEach((TT => {
        let [cT, lT] = TT;
        "string" == typeof cT && (cT = cT.toLowerCase()), kT[cT] = lT
      })), kT
    }

    function oc(TT) {
      let kT = UT(TT),
        cT = new dT({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return TT.nodes().forEach((kT => {
        cT.setNode(kT, {
          label: kT
        }), cT.setParent(kT, "layer" + TT.node(kT).rank)
      })), TT.edges().forEach((TT => cT.setEdge(TT.v, TT.w, {}, TT.name))), kT.forEach(((TT, kT) => {
        let lT = "layer" + kT;
        cT.setNode(lT, {
          rank: "same"
        }), TT.reduce(((TT, kT) => (cT.setEdge(TT, kT, {
          style: "invis"
        }), kT)))
      })), cT
    }
    var Hc = {
        time: pT,
        notime: iT
      },
      ec = {
        graphlib: KT,
        version: Kk,
        layout: vc,
        debug: oc,
        util: {
          time: pT,
          notime: iT
        }
      }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);