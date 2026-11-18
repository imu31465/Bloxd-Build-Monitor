/*! For license information please see symm5.105.38c2a56b.chunk.js.LICENSE.txt */
export const id = 105;
export const ids = [105];
export const modules = {
  5783: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      Graph: () => NJ,
      debug: () => bZ,
      default: () => WZ,
      graphlib: () => eJ,
      layout: () => sZ,
      util: () => wZ,
      version: () => ec
    });
    var FJ = Object.defineProperty,
      UJ = (JJ, cJ, ZJ) => ((JJ, cJ, ZJ) => cJ in JJ ? FJ(JJ, cJ, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ZJ
      }) : JJ[cJ] = ZJ)(JJ, "symbol" != typeof cJ ? cJ + "" : cJ, ZJ),
      eJ = {};
    ((JJ, cJ) => {
      for (var ZJ in cJ) FJ(JJ, ZJ, {
        get: cJ[ZJ],
        enumerable: !0
      })
    })(eJ, {
      Graph: () => NJ,
      alg: () => xJ
    });
    var XJ = Object.defineProperty,
      AJ = (JJ, cJ) => {
        for (var ZJ in cJ) XJ(JJ, ZJ, {
          get: cJ[ZJ],
          enumerable: !0
        })
      },
      qJ = class {
        constructor(JJ) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, JJ && (this._isDirected = !("directed" in JJ) || JJ.directed, this._isMultigraph = "multigraph" in JJ && JJ.multigraph, this._isCompound = "compound" in JJ && JJ.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(JJ) {
          return this._label = JJ, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(JJ) {
          return this._defaultNodeLabelFn = "function" != typeof JJ ? () => JJ : JJ, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((JJ => 0 === Object.keys(this._in[JJ]).length))
        }
        sinks() {
          return this.nodes().filter((JJ => 0 === Object.keys(this._out[JJ]).length))
        }
        setNodes(JJ, cJ) {
          return JJ.forEach((JJ => {
            void 0 !== cJ ? this.setNode(JJ, cJ) : this.setNode(JJ)
          })), this
        }
        setNode(JJ, cJ) {
          return JJ in this._nodes ? (arguments.length > 1 && (this._nodes[JJ] = cJ), this) : (this._nodes[JJ] = arguments.length > 1 ? cJ : this._defaultNodeLabelFn(JJ), this._isCompound && (this._parent[JJ] = "\0", this._children[JJ] = {}, this._children["\0"][JJ] = !0), this._in[JJ] = {}, this._preds[JJ] = {}, this._out[JJ] = {}, this._sucs[JJ] = {}, ++this._nodeCount, this)
        }
        node(JJ) {
          return this._nodes[JJ]
        }
        hasNode(JJ) {
          return JJ in this._nodes
        }
        removeNode(JJ) {
          if (JJ in this._nodes) {
            let cJ = JJ => this.removeEdge(this._edgeObjs[JJ]);
            delete this._nodes[JJ], this._isCompound && (this._removeFromParentsChildList(JJ), delete this._parent[JJ], this.children(JJ).forEach((JJ => {
              this.setParent(JJ)
            })), delete this._children[JJ]), Object.keys(this._in[JJ]).forEach(cJ), delete this._in[JJ], delete this._preds[JJ], Object.keys(this._out[JJ]).forEach(cJ), delete this._out[JJ], delete this._sucs[JJ], --this._nodeCount
          }
          return this
        }
        setParent(JJ, cJ) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === cJ) cJ = "\0";
          else {
            for (let ZJ = cJ += ""; void 0 !== ZJ; ZJ = this.parent(ZJ))
              if (ZJ === JJ) throw new Error("Setting " + cJ + " as parent of " + JJ + " would create a cycle");
            this.setNode(cJ)
          }
          return this.setNode(JJ), this._removeFromParentsChildList(JJ), this._parent[JJ] = cJ, this._children[cJ][JJ] = !0, this
        }
        parent(JJ) {
          if (this._isCompound) {
            let cJ = this._parent[JJ];
            if ("\0" !== cJ) return cJ
          }
        }
        children() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let cJ = this._children[JJ];
            if (cJ) return Object.keys(cJ)
          } else {
            if ("\0" === JJ) return this.nodes();
            if (this.hasNode(JJ)) return []
          }
          return []
        }
        predecessors(JJ) {
          let cJ = this._preds[JJ];
          if (cJ) return Object.keys(cJ)
        }
        successors(JJ) {
          let cJ = this._sucs[JJ];
          if (cJ) return Object.keys(cJ)
        }
        neighbors(JJ) {
          let cJ = this.predecessors(JJ);
          if (cJ) {
            let ZJ = new Set(cJ),
              FJ = this.successors(JJ);
            if (FJ)
              for (let JJ of FJ) ZJ.add(JJ);
            return Array.from(ZJ.values())
          }
        }
        isLeaf(JJ) {
          var cJ;
          let ZJ;
          return ZJ = this.isDirected() ? this.successors(JJ) : this.neighbors(JJ), 0 === (null != (cJ = null == ZJ ? void 0 : ZJ.length) ? cJ : 0)
        }
        filterNodes(JJ) {
          let cJ = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          cJ.setGraph(this.graph()), Object.entries(this._nodes).forEach((ZJ => {
            let [FJ, UJ] = ZJ;
            JJ(FJ) && cJ.setNode(FJ, UJ)
          })), Object.values(this._edgeObjs).forEach((JJ => {
            cJ.hasNode(JJ.v) && cJ.hasNode(JJ.w) && cJ.setEdge(JJ, this.edge(JJ))
          }));
          let ZJ = {},
            FJ = JJ => {
              let UJ = this.parent(JJ);
              return !UJ || cJ.hasNode(UJ) ? (ZJ[JJ] = UJ, UJ) : UJ in ZJ ? ZJ[UJ] : FJ(UJ)
            };
          return this._isCompound && cJ.nodes().forEach((JJ => cJ.setParent(JJ, FJ(JJ)))), cJ
        }
        setDefaultEdgeLabel(JJ) {
          return this._defaultEdgeLabelFn = "function" != typeof JJ ? () => JJ : JJ, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(JJ, cJ) {
          return JJ.reduce(((JJ, ZJ) => (void 0 !== cJ ? this.setEdge(JJ, ZJ, cJ) : this.setEdge(JJ, ZJ), ZJ))), this
        }
        setEdge(JJ, cJ, ZJ, FJ) {
          let UJ, eJ, XJ, AJ, qJ = !1;
          "object" == typeof JJ && null !== JJ && "v" in JJ ? (UJ = JJ.v, eJ = JJ.w, XJ = JJ.name, 2 === arguments.length && (AJ = cJ, qJ = !0)) : (UJ = JJ, eJ = cJ, XJ = FJ, arguments.length > 2 && (AJ = ZJ, qJ = !0)), UJ = "" + UJ, eJ = "" + eJ, void 0 !== XJ && (XJ = "" + XJ);
          let YJ = hJ(this._isDirected, UJ, eJ, XJ);
          if (YJ in this._edgeLabels) return qJ && (this._edgeLabels[YJ] = AJ), this;
          if (void 0 !== XJ && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(UJ), this.setNode(eJ), this._edgeLabels[YJ] = qJ ? AJ : this._defaultEdgeLabelFn(UJ, eJ, XJ);
          let DJ = function(JJ, cJ, ZJ, FJ) {
            let UJ = "" + cJ,
              eJ = "" + ZJ;
            if (!JJ && UJ > eJ) {
              let JJ = UJ;
              UJ = eJ, eJ = JJ
            }
            let XJ = {
              v: UJ,
              w: eJ
            };
            return FJ && (XJ.name = FJ), XJ
          }(this._isDirected, UJ, eJ, XJ);
          return UJ = DJ.v, eJ = DJ.w, Object.freeze(DJ), this._edgeObjs[YJ] = DJ, jJ(this._preds[eJ], UJ), jJ(this._sucs[UJ], eJ), this._in[eJ][YJ] = DJ, this._out[UJ][YJ] = DJ, this._edgeCount++, this
        }
        edge(JJ, cJ, ZJ) {
          let FJ = 1 === arguments.length ? DJ(this._isDirected, JJ) : hJ(this._isDirected, JJ, cJ, ZJ);
          return this._edgeLabels[FJ]
        }
        edgeAsObj(JJ, cJ, ZJ) {
          let FJ = 1 === arguments.length ? this.edge(JJ) : this.edge(JJ, cJ, ZJ);
          return "object" != typeof FJ || null === FJ ? {
            label: FJ
          } : FJ
        }
        hasEdge(JJ, cJ, ZJ) {
          return (1 === arguments.length ? DJ(this._isDirected, JJ) : hJ(this._isDirected, JJ, cJ, ZJ)) in this._edgeLabels
        }
        removeEdge(JJ, cJ, ZJ) {
          let FJ = 1 === arguments.length ? DJ(this._isDirected, JJ) : hJ(this._isDirected, JJ, cJ, ZJ),
            UJ = this._edgeObjs[FJ];
          if (UJ) {
            let JJ = UJ.v,
              cJ = UJ.w;
            delete this._edgeLabels[FJ], delete this._edgeObjs[FJ], YJ(this._preds[cJ], JJ), YJ(this._sucs[JJ], cJ), delete this._in[cJ][FJ], delete this._out[JJ][FJ], this._edgeCount--
          }
          return this
        }
        inEdges(JJ, cJ) {
          return this.isDirected() ? this.filterEdges(this._in[JJ], JJ, cJ) : this.nodeEdges(JJ, cJ)
        }
        outEdges(JJ, cJ) {
          return this.isDirected() ? this.filterEdges(this._out[JJ], JJ, cJ) : this.nodeEdges(JJ, cJ)
        }
        nodeEdges(JJ, cJ) {
          if (JJ in this._nodes) return this.filterEdges({
            ...this._in[JJ],
            ...this._out[JJ]
          }, JJ, cJ)
        }
        _removeFromParentsChildList(JJ) {
          delete this._children[this._parent[JJ]][JJ]
        }
        filterEdges(JJ, cJ, ZJ) {
          if (!JJ) return;
          let FJ = Object.values(JJ);
          return ZJ ? FJ.filter((JJ => JJ.v === cJ && JJ.w === ZJ || JJ.v === ZJ && JJ.w === cJ)) : FJ
        }
      };

    function jJ(JJ, cJ) {
      JJ[cJ] ? JJ[cJ]++ : JJ[cJ] = 1
    }

    function YJ(JJ, cJ) {
      void 0 !== JJ[cJ] && !--JJ[cJ] && delete JJ[cJ]
    }

    function hJ(JJ, cJ, ZJ, FJ) {
      let UJ = "" + cJ,
        eJ = "" + ZJ;
      if (!JJ && UJ > eJ) {
        let JJ = UJ;
        UJ = eJ, eJ = JJ
      }
      return UJ + "\x01" + eJ + "\x01" + (void 0 === FJ ? "\0" : FJ)
    }

    function DJ(JJ, cJ) {
      return hJ(JJ, cJ.v, cJ.w, cJ.name)
    }

    function sJ(JJ) {
      let cJ = {
          options: {
            directed: JJ.isDirected(),
            multigraph: JJ.isMultigraph(),
            compound: JJ.isCompound()
          },
          nodes: nJ(JJ),
          edges: GJ(JJ)
        },
        ZJ = JJ.graph();
      return void 0 !== ZJ && (cJ.value = structuredClone(ZJ)), cJ
    }

    function nJ(JJ) {
      return JJ.nodes().map((cJ => {
        let ZJ = JJ.node(cJ),
          FJ = JJ.parent(cJ),
          UJ = {
            v: cJ
          };
        return void 0 !== ZJ && (UJ.value = ZJ), void 0 !== FJ && (UJ.parent = FJ), UJ
      }))
    }

    function GJ(JJ) {
      return JJ.edges().map((cJ => {
        let ZJ = JJ.edge(cJ),
          FJ = {
            v: cJ.v,
            w: cJ.w
          };
        return void 0 !== cJ.name && (FJ.name = cJ.name), void 0 !== ZJ && (FJ.value = ZJ), FJ
      }))
    }

    function fJ(JJ) {
      let cJ = new qJ(JJ.options);
      return void 0 !== JJ.value && cJ.setGraph(JJ.value), JJ.nodes.forEach((JJ => {
        cJ.setNode(JJ.v, JJ.value), JJ.parent && cJ.setParent(JJ.v, JJ.parent)
      })), JJ.edges.forEach((JJ => {
        cJ.setEdge({
          v: JJ.v,
          w: JJ.w,
          name: JJ.name
        }, JJ.value)
      })), cJ
    }
    AJ({}, {
      read: () => fJ,
      write: () => sJ
    });
    var xJ = {};
    AJ(xJ, {
      CycleException: () => bJ,
      bellmanFord: () => vJ,
      components: () => mJ,
      dijkstra: () => VJ,
      dijkstraAll: () => KJ,
      findCycles: () => SJ,
      floydWarshall: () => MJ,
      isAcyclic: () => WJ,
      postorder: () => kJ,
      preorder: () => pJ,
      prim: () => dJ,
      shortestPaths: () => zJ,
      tarjan: () => yJ,
      topsort: () => wJ
    });
    var rJ = () => 1;

    function vJ(JJ, cJ, ZJ, FJ) {
      return function(JJ, cJ, ZJ, FJ) {
        let UJ, eJ = {},
          XJ = 0,
          AJ = JJ.nodes(),
          qJ = function(JJ) {
            let cJ = eJ[JJ.v],
              FJ = eJ[JJ.w];
            if (!cJ || !FJ) return;
            let XJ = ZJ(JJ);
            cJ.distance + XJ < FJ.distance && (eJ[JJ.w] = {
              distance: cJ.distance + XJ,
              predecessor: JJ.v
            }, UJ = !0)
          },
          jJ = function() {
            AJ.forEach((function(JJ) {
              FJ(JJ).forEach((function(cJ) {
                let ZJ = cJ.v === JJ ? cJ.v : cJ.w,
                  FJ = ZJ === cJ.v ? cJ.w : cJ.v;
                qJ({
                  v: ZJ,
                  w: FJ
                })
              }))
            }))
          };
        AJ.forEach((function(JJ) {
          let ZJ = JJ === cJ ? 0 : Number.POSITIVE_INFINITY;
          eJ[JJ] = {
            distance: ZJ,
            predecessor: ""
          }
        }));
        let YJ = AJ.length;
        for (let hJ = 1; hJ < YJ && (UJ = !1, XJ++, jJ(), UJ); hJ++);
        if (XJ === YJ - 1 && (UJ = !1, jJ(), UJ)) throw new Error("The graph contains a negative weight cycle");
        return eJ
      }(JJ, String(cJ), ZJ || rJ, FJ || function(cJ) {
        var ZJ;
        return null != (ZJ = JJ.outEdges(cJ)) ? ZJ : []
      })
    }

    function mJ(JJ) {
      let cJ, ZJ = {},
        FJ = [];

      function UJ(FJ) {
        var eJ, XJ;
        FJ in ZJ || (ZJ[FJ] = !0, cJ.push(FJ), null == (eJ = JJ.successors(FJ)) || eJ.forEach(UJ), null == (XJ = JJ.predecessors(FJ)) || XJ.forEach(UJ))
      }
      return JJ.nodes().forEach((function(JJ) {
        cJ = [], UJ(JJ), cJ.length && FJ.push(cJ)
      })), FJ
    }
    var QJ = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((JJ => JJ.key))
        }
        has(JJ) {
          return JJ in this._keyIndices
        }
        priority(JJ) {
          let cJ = this._keyIndices[JJ];
          if (void 0 !== cJ) return this._arr[cJ].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(JJ, cJ) {
          let ZJ = this._keyIndices,
            FJ = String(JJ);
          if (!(FJ in ZJ)) {
            let JJ = this._arr,
              UJ = JJ.length;
            return ZJ[FJ] = UJ, JJ.push({
              key: FJ,
              priority: cJ
            }), this._decrease(UJ), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let JJ = this._arr.pop();
          return delete this._keyIndices[JJ.key], this._heapify(0), JJ.key
        }
        decrease(JJ, cJ) {
          let ZJ = this._keyIndices[JJ];
          if (void 0 === ZJ) throw new Error(`Key not found: ${JJ}`);
          let FJ = this._arr[ZJ].priority;
          if (cJ > FJ) throw new Error(`New priority is greater than current priority. Key: ${JJ} Old: ${FJ} New: ${cJ}`);
          this._arr[ZJ].priority = cJ, this._decrease(ZJ)
        }
        _heapify(JJ) {
          let cJ = this._arr,
            ZJ = 2 * JJ,
            FJ = ZJ + 1,
            UJ = JJ;
          ZJ < cJ.length && (UJ = cJ[ZJ].priority < cJ[UJ].priority ? ZJ : UJ, FJ < cJ.length && (UJ = cJ[FJ].priority < cJ[UJ].priority ? FJ : UJ), UJ !== JJ && (this._swap(JJ, UJ), this._heapify(UJ)))
        }
        _decrease(JJ) {
          let cJ, ZJ = this._arr,
            FJ = ZJ[JJ].priority;
          for (; 0 !== JJ && (cJ = JJ >> 1, !(ZJ[cJ].priority < FJ));) this._swap(JJ, cJ), JJ = cJ
        }
        _swap(JJ, cJ) {
          let ZJ = this._arr,
            FJ = this._keyIndices,
            UJ = ZJ[JJ],
            eJ = ZJ[cJ];
          ZJ[JJ] = eJ, ZJ[cJ] = UJ, FJ[eJ.key] = JJ, FJ[UJ.key] = cJ
        }
      },
      EJ = () => 1;

    function VJ(JJ, cJ, ZJ, FJ) {
      return function(JJ, cJ, ZJ, FJ) {
        let UJ, eJ, XJ = {},
          AJ = new QJ,
          qJ = function(JJ) {
            let cJ = JJ.v !== UJ ? JJ.v : JJ.w,
              FJ = XJ[cJ];
            if (!FJ) return;
            let qJ = ZJ(JJ),
              jJ = eJ.distance + qJ;
            if (qJ < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + JJ + " Weight: " + qJ);
            jJ < FJ.distance && (FJ.distance = jJ, FJ.predecessor = UJ, AJ.decrease(cJ, jJ))
          };
        for (JJ.nodes().forEach((function(JJ) {
            let ZJ = JJ === cJ ? 0 : Number.POSITIVE_INFINITY;
            XJ[JJ] = {
              distance: ZJ,
              predecessor: ""
            }, AJ.add(JJ, ZJ)
          })); AJ.size() > 0;) {
          UJ = AJ.removeMin();
          let JJ = XJ[UJ];
          if (!JJ || JJ.distance === Number.POSITIVE_INFINITY) break;
          eJ = JJ, FJ(UJ).forEach(qJ)
        }
        return XJ
      }(JJ, String(cJ), ZJ || EJ, FJ || function(cJ) {
        var ZJ;
        return null != (ZJ = JJ.outEdges(cJ)) ? ZJ : []
      })
    }

    function KJ(JJ, cJ, ZJ) {
      return JJ.nodes().reduce((function(FJ, UJ) {
        return FJ[UJ] = VJ(JJ, UJ, cJ, ZJ), FJ
      }), {})
    }

    function yJ(JJ) {
      let cJ = 0,
        ZJ = [],
        FJ = {},
        UJ = [];

      function eJ(XJ) {
        var AJ;
        let qJ = FJ[XJ] = {
          onStack: !0,
          lowlink: cJ,
          index: cJ++
        };
        if (ZJ.push(XJ), null == (AJ = JJ.successors(XJ)) || AJ.forEach((function(JJ) {
            if (JJ in FJ) {
              let cJ = FJ[JJ];
              null != cJ && cJ.onStack && (qJ.lowlink = Math.min(qJ.lowlink, cJ.index))
            } else {
              eJ(JJ);
              let cJ = FJ[JJ];
              cJ && (qJ.lowlink = Math.min(qJ.lowlink, cJ.lowlink))
            }
          })), qJ.lowlink === qJ.index) {
          let JJ, cJ = [];
          do {
            JJ = ZJ.pop();
            let UJ = FJ[JJ];
            UJ && (UJ.onStack = !1), cJ.push(JJ)
          } while (XJ !== JJ);
          UJ.push(cJ)
        }
      }
      return JJ.nodes().forEach((function(JJ) {
        JJ in FJ || eJ(JJ)
      })), UJ
    }

    function SJ(JJ) {
      return yJ(JJ).filter((function(cJ) {
        var ZJ;
        let FJ = cJ[0];
        return !!FJ && (cJ.length > 1 || 1 === cJ.length && (null != (ZJ = JJ.outEdges(FJ, FJ)) ? ZJ : []).length > 0)
      }))
    }
    var IJ = () => 1;

    function MJ(JJ, cJ, ZJ) {
      return function(JJ, cJ, ZJ) {
        let FJ = {},
          UJ = JJ.nodes();
        return UJ.forEach((function(JJ) {
          let eJ = {};
          FJ[JJ] = eJ, eJ[JJ] = {
            distance: 0,
            predecessor: ""
          }, UJ.forEach((function(cJ) {
            JJ !== cJ && (eJ[cJ] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ZJ(JJ).forEach((function(ZJ) {
            let FJ = ZJ.v === JJ ? ZJ.w : ZJ.v,
              UJ = cJ(ZJ);
            eJ[FJ] = {
              distance: UJ,
              predecessor: JJ
            }
          }))
        })), UJ.forEach((function(JJ) {
          let cJ = FJ[JJ];
          cJ && UJ.forEach((function(ZJ) {
            let eJ = FJ[ZJ];
            eJ && UJ.forEach((function(ZJ) {
              let FJ = eJ[JJ],
                UJ = cJ[ZJ],
                XJ = eJ[ZJ];
              if (FJ && UJ && XJ) {
                let JJ = FJ.distance + UJ.distance;
                JJ < XJ.distance && (XJ.distance = JJ, XJ.predecessor = UJ.predecessor)
              }
            }))
          }))
        })), FJ
      }(JJ, cJ || IJ, ZJ || function(cJ) {
        var ZJ;
        return null != (ZJ = JJ.outEdges(cJ)) ? ZJ : []
      })
    }
    var bJ = class extends Error {
      constructor(JJ) {
        super(JJ), this.name = "CycleException"
      }
    };

    function wJ(JJ) {
      let cJ = {},
        ZJ = {},
        FJ = [];
      if (JJ.sinks().forEach((function UJ(eJ) {
          var XJ;
          if (eJ in ZJ) throw new bJ;
          eJ in cJ || (ZJ[eJ] = !0, cJ[eJ] = !0, null == (XJ = JJ.predecessors(eJ)) || XJ.forEach(UJ), delete ZJ[eJ], FJ.push(eJ))
        })), Object.keys(cJ).length !== JJ.nodeCount()) throw new bJ;
      return FJ
    }

    function WJ(JJ) {
      try {
        wJ(JJ)
      } catch (cJ) {
        if (cJ instanceof bJ) return !1;
        throw cJ
      }
      return !0
    }

    function gJ(JJ, cJ, ZJ, FJ, UJ) {
      Array.isArray(cJ) || (cJ = [cJ]);
      let eJ = cJ => {
          var ZJ;
          return null != (ZJ = JJ.isDirected() ? JJ.successors(cJ) : JJ.neighbors(cJ)) ? ZJ : []
        },
        XJ = {};
      return cJ.forEach((function(cJ) {
        if (!JJ.hasNode(cJ)) throw new Error("Graph does not have node: " + cJ);
        UJ = HJ(JJ, cJ, "post" === ZJ, XJ, eJ, FJ, UJ)
      })), UJ
    }

    function HJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      return cJ in FJ || (FJ[cJ] = !0, ZJ || (XJ = eJ(XJ, cJ)), UJ(cJ).forEach((function(cJ) {
        XJ = HJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ)
      })), ZJ && (XJ = eJ(XJ, cJ))), XJ
    }

    function PJ(JJ, cJ, ZJ) {
      return gJ(JJ, cJ, ZJ, (function(JJ, cJ) {
        return JJ.push(cJ), JJ
      }), [])
    }

    function kJ(JJ, cJ) {
      return PJ(JJ, cJ, "post")
    }

    function pJ(JJ, cJ) {
      return PJ(JJ, cJ, "pre")
    }

    function dJ(JJ, cJ) {
      var ZJ;
      let FJ, UJ = new qJ,
        eJ = {},
        XJ = new QJ;

      function AJ(JJ) {
        let ZJ = JJ.v === FJ ? JJ.w : JJ.v,
          UJ = XJ.priority(ZJ);
        if (void 0 !== UJ) {
          let AJ = cJ(JJ);
          AJ < UJ && (eJ[ZJ] = FJ, XJ.decrease(ZJ, AJ))
        }
      }
      if (0 === JJ.nodeCount()) return UJ;
      JJ.nodes().forEach((function(JJ) {
        XJ.add(JJ, Number.POSITIVE_INFINITY), UJ.setNode(JJ)
      }));
      let jJ = JJ.nodes()[0];
      void 0 !== jJ && XJ.decrease(jJ, 0);
      let YJ = !1;
      for (; XJ.size() > 0;) {
        if (FJ = XJ.removeMin(), FJ in eJ) UJ.setEdge(FJ, eJ[FJ]);
        else {
          if (YJ) throw new Error("Input graph is not connected: " + JJ);
          YJ = !0
        }
        null == (ZJ = JJ.nodeEdges(FJ)) || ZJ.forEach(AJ)
      }
      return UJ
    }

    function zJ(JJ, cJ, ZJ, FJ) {
      return function(JJ, cJ, ZJ, FJ) {
        if (void 0 === ZJ) return VJ(JJ, cJ, ZJ, FJ);
        let UJ = !1,
          eJ = JJ.nodes();
        for (let XJ = 0; XJ < eJ.length; XJ++) {
          let AJ = eJ[XJ];
          if (void 0 === AJ) continue;
          let qJ = FJ(AJ);
          for (let JJ = 0; JJ < qJ.length; JJ++) {
            let cJ = qJ[JJ];
            if (!cJ) continue;
            let FJ = cJ.v === AJ ? cJ.v : cJ.w;
            ZJ({
              v: FJ,
              w: FJ === cJ.v ? cJ.w : cJ.v
            }) < 0 && (UJ = !0)
          }
          if (UJ) return vJ(JJ, cJ, ZJ, FJ)
        }
        return VJ(JJ, cJ, ZJ, FJ)
      }(JJ, cJ, ZJ, null != FJ ? FJ : cJ => {
        var ZJ;
        return null != (ZJ = JJ.outEdges(cJ)) ? ZJ : []
      })
    }
    var NJ = qJ;

    function OJ(JJ, cJ, ZJ, FJ) {
      let UJ = FJ;
      for (; JJ.hasNode(UJ);) UJ = lJ(FJ);
      return ZJ.dummy = cJ, JJ.setNode(UJ, ZJ), UJ
    }

    function TJ(JJ) {
      let cJ = new NJ({
        multigraph: JJ.isMultigraph()
      }).setGraph(JJ.graph());
      return JJ.nodes().forEach((ZJ => {
        JJ.children(ZJ).length || cJ.setNode(ZJ, JJ.node(ZJ))
      })), JJ.edges().forEach((ZJ => {
        cJ.setEdge(ZJ, JJ.edge(ZJ))
      })), cJ
    }

    function CJ(JJ, cJ) {
      let ZJ, FJ, UJ = JJ.x,
        eJ = JJ.y,
        XJ = cJ.x - UJ,
        AJ = cJ.y - eJ,
        qJ = JJ.width / 2,
        jJ = JJ.height / 2;
      if (!XJ && !AJ) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(AJ) * qJ > Math.abs(XJ) * jJ ? (AJ < 0 && (jJ = -jJ), ZJ = jJ * XJ / AJ, FJ = jJ) : (XJ < 0 && (qJ = -qJ), ZJ = qJ, FJ = qJ * AJ / XJ), {
        x: UJ + ZJ,
        y: eJ + FJ
      }
    }

    function uJ(JJ) {
      let cJ = Jc(aJ(JJ) + 1).map((() => []));
      return JJ.nodes().forEach((ZJ => {
        let FJ = JJ.node(ZJ),
          UJ = FJ.rank;
        void 0 !== UJ && (cJ[UJ] || (cJ[UJ] = []), cJ[UJ][FJ.order] = ZJ)
      })), cJ
    }

    function iJ(JJ, cJ, ZJ, FJ) {
      let UJ = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (UJ.rank = ZJ, UJ.order = FJ), OJ(JJ, "border", UJ, cJ)
    }
    var RJ = 65535;

    function LJ(JJ, cJ) {
      if (cJ.length > RJ) {
        let ZJ = function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RJ,
            ZJ = [];
          for (let FJ = 0; FJ < JJ.length; FJ += cJ) {
            let UJ = JJ.slice(FJ, FJ + cJ);
            ZJ.push(UJ)
          }
          return ZJ
        }(cJ);
        return JJ(...ZJ.map((cJ => JJ(...cJ))))
      }
      return JJ(...cJ)
    }

    function aJ(JJ) {
      let cJ = JJ.nodes().map((cJ => {
        let ZJ = JJ.node(cJ).rank;
        return void 0 === ZJ ? Number.MIN_VALUE : ZJ
      }));
      return LJ(Math.max, cJ)
    }

    function BJ(JJ, cJ) {
      let ZJ = Date.now();
      try {
        return cJ()
      } finally {
        console.log(JJ + " time: " + (Date.now() - ZJ) + "ms")
      }
    }

    function tJ(JJ, cJ) {
      return cJ()
    }
    var oJ = 0;

    function lJ(JJ) {
      return JJ + "" + ++oJ
    }

    function Jc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == cJ && (cJ = JJ, JJ = 0);
      let FJ = JJ => JJ < cJ;
      ZJ < 0 && (FJ = JJ => cJ < JJ);
      let UJ = [];
      for (let eJ = JJ; FJ(eJ); eJ += ZJ) UJ.push(eJ);
      return UJ
    }

    function cc(JJ, cJ) {
      let ZJ = {};
      for (let FJ of cJ) void 0 !== JJ[FJ] && (ZJ[FJ] = JJ[FJ]);
      return ZJ
    }

    function Zc(JJ, cJ) {
      let ZJ;
      return ZJ = "string" == typeof cJ ? JJ => JJ[cJ] : cJ, Object.entries(JJ).reduce(((JJ, cJ) => {
        let [FJ, UJ] = cJ;
        return JJ[FJ] = ZJ(UJ, FJ), JJ
      }), {})
    }
    var Fc = "\0";

    function Uc(JJ, cJ, ZJ) {
      var FJ, UJ, eJ, XJ, AJ, qJ;
      if (!(JJ && cJ && ZJ && "edge" === cJ.dummy && "edge" === ZJ.dummy && cJ.edgeObj && ZJ.edgeObj && JJ[cJ.edgeObj.v] && JJ[ZJ.edgeObj.v] && JJ[cJ.edgeObj.w] && JJ[ZJ.edgeObj.w])) return 0;
      let jJ = !0;
      cJ.edgeObj.w === ZJ.edgeObj.w && (jJ = !1);
      let YJ = jJ ? null != (UJ = null == (FJ = JJ[cJ.edgeObj.v]) ? void 0 : FJ.rank) ? UJ : NaN : null != (XJ = null == (eJ = JJ[cJ.edgeObj.w]) ? void 0 : eJ.rank) ? XJ : NaN,
        hJ = Object.entries(JJ).find((JJ => {
          var ZJ, FJ;
          return (null == (ZJ = JJ[1].edgeObj) ? void 0 : ZJ.v) === cJ.edgeObj.v && (null == (FJ = JJ[1].edgeObj) ? void 0 : FJ.w) === cJ.edgeObj.w && JJ[1].rank === YJ
        })),
        DJ = Object.entries(JJ).find((JJ => {
          var cJ, FJ;
          return (null == (cJ = JJ[1].edgeObj) ? void 0 : cJ.v) === ZJ.edgeObj.v && (null == (FJ = JJ[1].edgeObj) ? void 0 : FJ.w) === ZJ.edgeObj.w && JJ[1].rank === YJ
        }));
      if (!hJ || !DJ) return 0;
      let sJ = null != (AJ = hJ[1].order) ? AJ : NaN,
        nJ = null != (qJ = DJ[1].order) ? qJ : NaN;
      return isNaN(sJ - nJ) ? 0 : sJ - nJ
    }
    var ec = "3.1.1";

    function Xc(JJ) {
      JJ._prev._next = JJ._next, JJ._next._prev = JJ._prev, delete JJ._next, delete JJ._prev
    }

    function Ac(JJ, cJ) {
      if ("_next" !== JJ && "_prev" !== JJ) return cJ
    }
    var qc = class {
        constructor() {
          UJ(this, "_sentinel");
          let JJ = {};
          JJ._next = JJ._prev = JJ, this._sentinel = JJ
        }
        dequeue() {
          let JJ = this._sentinel,
            cJ = JJ._prev;
          if (cJ !== JJ) return Xc(cJ), cJ
        }
        enqueue(JJ) {
          let cJ = this._sentinel;
          JJ._prev && JJ._next && Xc(JJ), JJ._next = cJ._next, cJ._next._prev = JJ, cJ._next = JJ, JJ._prev = cJ
        }
        toString() {
          let JJ = [],
            cJ = this._sentinel,
            ZJ = cJ._prev;
          for (; ZJ !== cJ;) JJ.push(JSON.stringify(ZJ, Ac)), ZJ = ZJ._prev;
          return "[" + JJ.join(", ") + "]"
        }
      },
      jc = () => 1;

    function Yc(JJ, cJ) {
      if (JJ.nodeCount() <= 1) return [];
      let ZJ = function(JJ, cJ) {
        let ZJ = new NJ,
          FJ = 0,
          UJ = 0;
        JJ.nodes().forEach((JJ => {
          ZJ.setNode(JJ, {
            v: JJ,
            in: 0,
            out: 0
          })
        })), JJ.edges().forEach((JJ => {
          let eJ = ZJ.edge(JJ.v, JJ.w) || 0,
            XJ = cJ(JJ),
            AJ = eJ + XJ;
          ZJ.setEdge(JJ.v, JJ.w, AJ);
          let qJ = ZJ.node(JJ.v),
            jJ = ZJ.node(JJ.w);
          UJ = Math.max(UJ, qJ.out += XJ), FJ = Math.max(FJ, jJ.in += XJ)
        }));
        let eJ = function(JJ) {
            let cJ = [];
            for (let ZJ = 0; ZJ < JJ; ZJ++) cJ.push(ZJ);
            return cJ
          }(UJ + FJ + 3).map((() => new qc)),
          XJ = FJ + 1;
        return ZJ.nodes().forEach((JJ => {
          Dc(eJ, XJ, ZJ.node(JJ))
        })), {
          graph: ZJ,
          buckets: eJ,
          zeroIdx: XJ
        }
      }(JJ, cJ || jc);
      return function(JJ, cJ, ZJ) {
        var FJ;
        let UJ, eJ = [],
          XJ = cJ[cJ.length - 1],
          AJ = cJ[0];
        for (; JJ.nodeCount();) {
          for (; UJ = AJ.dequeue();) hc(JJ, cJ, ZJ, UJ);
          for (; UJ = XJ.dequeue();) hc(JJ, cJ, ZJ, UJ);
          if (JJ.nodeCount())
            for (let XJ = cJ.length - 2; XJ > 0; --XJ)
              if (UJ = null == (FJ = cJ[XJ]) ? void 0 : FJ.dequeue(), UJ) {
                eJ = eJ.concat(hc(JJ, cJ, ZJ, UJ, !0) || []);
                break
              }
        }
        return eJ
      }(ZJ.graph, ZJ.buckets, ZJ.zeroIdx).flatMap((cJ => JJ.outEdges(cJ.v, cJ.w) || []))
    }

    function hc(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = [],
        XJ = UJ ? eJ : void 0;
      return (JJ.inEdges(FJ.v) || []).forEach((FJ => {
        let XJ = JJ.edge(FJ),
          AJ = JJ.node(FJ.v);
        UJ && eJ.push({
          v: FJ.v,
          w: FJ.w
        }), AJ.out -= XJ, Dc(cJ, ZJ, AJ)
      })), (JJ.outEdges(FJ.v) || []).forEach((FJ => {
        let UJ = JJ.edge(FJ),
          eJ = FJ.w,
          XJ = JJ.node(eJ);
        XJ.in -= UJ, Dc(cJ, ZJ, XJ)
      })), JJ.removeNode(FJ.v), XJ
    }

    function Dc(JJ, cJ, ZJ) {
      var FJ, UJ, eJ;
      ZJ.out ? ZJ.in ? null == (eJ = JJ[ZJ.out - ZJ.in + cJ]) || eJ.enqueue(ZJ) : null == (UJ = JJ[JJ.length - 1]) || UJ.enqueue(ZJ) : null == (FJ = JJ[0]) || FJ.enqueue(ZJ)
    }

    function sc(JJ, cJ) {
      var ZJ;
      ("greedy" === JJ.graph().acyclicer ? Yc(JJ, (ZJ = JJ, JJ => ZJ.edge(JJ).weight)) : function(JJ, cJ) {
        let ZJ = [],
          FJ = {},
          UJ = {};

        function eJ(cJ) {
          Object.hasOwn(UJ, cJ) || (UJ[cJ] = !0, FJ[cJ] = !0, JJ.outEdges(cJ).forEach((JJ => {
            Object.hasOwn(FJ, JJ.w) ? ZJ.push(JJ) : eJ(JJ.w)
          })), delete FJ[cJ])
        }

        function XJ(eJ) {
          var AJ;
          Object.hasOwn(UJ, eJ) || (UJ[eJ] = !0, FJ[eJ] = !0, null == (AJ = JJ.outEdges(eJ)) || AJ.forEach((UJ => {
            var AJ, qJ;
            Object.hasOwn(FJ, UJ.w) || (null == (AJ = cJ.node(eJ)) ? void 0 : AJ.rank) > (null == (qJ = cJ.node(UJ.w)) ? void 0 : qJ.rank) && function(JJ, cJ, ZJ) {
              let FJ = new Set;

              function UJ(cJ) {
                var eJ;
                if (JJ.sources().includes(cJ)) return !0;
                FJ.add(cJ);
                for (let XJ of null != (eJ = JJ.inEdges(cJ)) ? eJ : [])
                  if ((XJ.v !== ZJ.v || XJ.w !== ZJ.w) && !FJ.has(XJ.v) && UJ(XJ.v)) return !0;
                return !1
              }
              return UJ(cJ)
            }(JJ, UJ.w, UJ) ? ZJ.push(UJ) : XJ(UJ.w)
          })), delete FJ[eJ])
        }
        let AJ = eJ;
        return cJ && "function" == typeof cJ.node && (AJ = XJ), JJ.sources().forEach(AJ), JJ.nodes().forEach(AJ), ZJ
      }(JJ, null != cJ ? cJ : null)).forEach((cJ => {
        let ZJ = JJ.edge(cJ);
        JJ.removeEdge(cJ), ZJ.forwardName = cJ.name, ZJ.reversed = !0, JJ.setEdge(cJ.w, cJ.v, ZJ, lJ("rev"))
      }))
    }

    function nc(JJ) {
      JJ.graph().dummyChains = [], JJ.edges().forEach((cJ => function(JJ, cJ) {
        let ZJ, FJ, UJ, eJ = cJ.v,
          XJ = JJ.node(eJ).rank,
          AJ = cJ.w,
          qJ = JJ.node(AJ).rank,
          jJ = cJ.name,
          YJ = JJ.edge(cJ),
          hJ = YJ.labelRank;
        if (qJ === XJ + 1) return;
        for (JJ.removeEdge(cJ), UJ = 0, ++XJ; XJ < qJ; ++UJ, ++XJ) YJ.points = [], FJ = {
          width: 0,
          height: 0,
          edgeLabel: YJ,
          edgeObj: cJ,
          rank: XJ
        }, ZJ = OJ(JJ, "edge", FJ, "_d"), XJ === hJ && (FJ.width = YJ.width, FJ.height = YJ.height, FJ.dummy = "edge-label", FJ.labelpos = YJ.labelpos), JJ.setEdge(eJ, ZJ, {
          weight: YJ.weight
        }, jJ), 0 === UJ && JJ.graph().dummyChains.push(ZJ), eJ = ZJ;
        JJ.setEdge(eJ, AJ, {
          weight: YJ.weight
        }, jJ)
      }(JJ, cJ)))
    }

    function Gc(JJ) {
      let cJ = {};
      JJ.sources().forEach((function ZJ(FJ) {
        let UJ = JJ.node(FJ);
        if (Object.hasOwn(cJ, FJ)) return UJ.rank;
        cJ[FJ] = !0;
        let eJ = JJ.outEdges(FJ),
          XJ = eJ ? eJ.map((cJ => null == cJ ? Number.POSITIVE_INFINITY : ZJ(cJ.w) - JJ.edge(cJ).minlen)) : [],
          AJ = LJ(Math.min, XJ);
        return AJ === Number.POSITIVE_INFINITY && (AJ = 0), UJ.rank = AJ
      }))
    }

    function fc(JJ, cJ) {
      return JJ.node(cJ.w).rank - JJ.node(cJ.v).rank - JJ.edge(cJ).minlen
    }
    var xc = function(JJ) {
      let cJ = new NJ({
          directed: !1
        }),
        ZJ = JJ.nodes();
      if (0 === ZJ.length) throw new Error("Graph must have at least one node");
      let FJ, UJ, eJ = ZJ[0],
        XJ = JJ.nodeCount();
      for (cJ.setNode(eJ, {}); rc(cJ, JJ) < XJ && (FJ = vc(cJ, JJ), FJ);) UJ = cJ.hasNode(FJ.v) ? fc(JJ, FJ) : -fc(JJ, FJ), mc(cJ, JJ, UJ);
      return cJ
    };

    function rc(JJ, cJ) {
      return JJ.nodes().forEach((function ZJ(FJ) {
        let UJ = cJ.nodeEdges(FJ);
        UJ && UJ.forEach((UJ => {
          let eJ = UJ.v,
            XJ = FJ === eJ ? UJ.w : eJ;
          !JJ.hasNode(XJ) && !fc(cJ, UJ) && (JJ.setNode(XJ, {}), JJ.setEdge(FJ, XJ, {}), ZJ(XJ))
        }))
      })), JJ.nodeCount()
    }

    function vc(JJ, cJ) {
      return cJ.edges().reduce(((ZJ, FJ) => {
        let UJ = Number.POSITIVE_INFINITY;
        return JJ.hasNode(FJ.v) !== JJ.hasNode(FJ.w) && (UJ = fc(cJ, FJ)), UJ < ZJ[0] ? [UJ, FJ] : ZJ
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function mc(JJ, cJ, ZJ) {
      JJ.nodes().forEach((JJ => cJ.node(JJ).rank += ZJ))
    }
    var {
      preorder: Qc,
      postorder: Ec
    } = xJ, Vc = Kc;

    function Kc(JJ) {
      JJ = function(JJ) {
        let cJ = (new NJ).setGraph(JJ.graph());
        return JJ.nodes().forEach((ZJ => cJ.setNode(ZJ, JJ.node(ZJ)))), JJ.edges().forEach((ZJ => {
          let FJ = cJ.edge(ZJ.v, ZJ.w) || {
              weight: 0,
              minlen: 1
            },
            UJ = JJ.edge(ZJ);
          cJ.setEdge(ZJ.v, ZJ.w, {
            weight: FJ.weight + UJ.weight,
            minlen: Math.max(FJ.minlen, UJ.minlen)
          })
        })), cJ
      }(JJ), Gc(JJ);
      let cJ, ZJ, FJ = xc(JJ);
      for (Ic(FJ), yc(FJ, JJ); cJ = bc(FJ);) ZJ = wc(FJ, JJ, cJ), Wc(FJ, JJ, cJ, ZJ)
    }

    function yc(JJ, cJ) {
      let ZJ = Ec(JJ, JJ.nodes());
      ZJ = ZJ.slice(0, ZJ.length - 1), ZJ.forEach((ZJ => function(JJ, cJ, ZJ) {
        let FJ = JJ.node(ZJ).parent,
          UJ = JJ.edge(ZJ, FJ);
        UJ.cutvalue = Sc(JJ, cJ, ZJ)
      }(JJ, cJ, ZJ)))
    }

    function Sc(JJ, cJ, ZJ) {
      let FJ = JJ.node(ZJ).parent,
        UJ = !0,
        eJ = cJ.edge(ZJ, FJ),
        XJ = 0;
      eJ || (UJ = !1, eJ = cJ.edge(FJ, ZJ)), XJ = eJ.weight;
      let AJ = cJ.nodeEdges(ZJ);
      return AJ && AJ.forEach((eJ => {
        let AJ = eJ.v === ZJ,
          qJ = AJ ? eJ.w : eJ.v;
        if (qJ !== FJ) {
          let FJ = AJ === UJ,
            jJ = cJ.edge(eJ).weight;
          if (XJ += FJ ? jJ : -jJ, function(JJ, cJ, ZJ) {
              return JJ.hasEdge(cJ, ZJ)
            }(JJ, ZJ, qJ)) {
            let cJ = JJ.edge(ZJ, qJ).cutvalue;
            XJ += FJ ? -cJ : cJ
          }
        }
      })), XJ
    }

    function Ic(JJ, cJ) {
      arguments.length < 2 && (cJ = JJ.nodes()[0]), Mc(JJ, {}, 1, cJ)
    }

    function Mc(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = ZJ,
        XJ = JJ.node(FJ);
      cJ[FJ] = !0;
      let AJ = JJ.neighbors(FJ);
      return AJ && AJ.forEach((UJ => {
        Object.hasOwn(cJ, UJ) || (ZJ = Mc(JJ, cJ, ZJ, UJ, FJ))
      })), XJ.low = eJ, XJ.lim = ZJ++, UJ ? XJ.parent = UJ : delete XJ.parent, ZJ
    }

    function bc(JJ) {
      return JJ.edges().find((cJ => JJ.edge(cJ).cutvalue < 0))
    }

    function wc(JJ, cJ, ZJ) {
      let FJ = ZJ.v,
        UJ = ZJ.w;
      cJ.hasEdge(FJ, UJ) || (FJ = ZJ.w, UJ = ZJ.v);
      let eJ = JJ.node(FJ),
        XJ = JJ.node(UJ),
        AJ = eJ,
        qJ = !1;
      return eJ.lim > XJ.lim && (AJ = XJ, qJ = !0), cJ.edges().filter((cJ => qJ === gc(JJ, JJ.node(cJ.v), AJ) && qJ !== gc(JJ, JJ.node(cJ.w), AJ))).reduce(((JJ, ZJ) => fc(cJ, ZJ) < fc(cJ, JJ) ? ZJ : JJ))
    }

    function Wc(JJ, cJ, ZJ, FJ) {
      let UJ = ZJ.v,
        eJ = ZJ.w;
      JJ.removeEdge(UJ, eJ), JJ.setEdge(FJ.v, FJ.w, {}), Ic(JJ), yc(JJ, cJ),
        function(JJ, cJ) {
          let ZJ = JJ.nodes().find((cJ => !JJ.node(cJ).parent));
          if (!ZJ) return;
          let FJ = Qc(JJ, [ZJ]);
          FJ = FJ.slice(1), FJ.forEach((ZJ => {
            let FJ = JJ.node(ZJ).parent,
              UJ = cJ.edge(ZJ, FJ),
              eJ = !1;
            UJ || (UJ = cJ.edge(FJ, ZJ), eJ = !0), cJ.node(ZJ).rank = cJ.node(FJ).rank + (eJ ? UJ.minlen : -UJ.minlen)
          }))
        }(JJ, cJ)
    }

    function gc(JJ, cJ, ZJ) {
      return ZJ.low <= cJ.lim && cJ.lim <= ZJ.lim
    }
    Kc.initLowLimValues = Ic, Kc.initCutValues = yc, Kc.calcCutValue = Sc, Kc.leaveEdge = bc, Kc.enterEdge = wc, Kc.exchangeEdges = Wc;
    var Hc = function(JJ) {
      let cJ = JJ.graph().ranker;
      if ("function" == typeof cJ) return cJ(JJ);
      switch (cJ) {
        case "network-simplex":
        default:
          kc(JJ);
          break;
        case "tight-tree":
          ! function(JJ) {
            Gc(JJ), xc(JJ)
          }(JJ);
          break;
        case "longest-path":
          Pc(JJ);
        case "none":
      }
    };
    var Pc = Gc;

    function kc(JJ) {
      Vc(JJ)
    }
    var pc = function(JJ) {
      let cJ = function(JJ) {
          let cJ = {},
            ZJ = 0;

          function FJ(UJ) {
            let eJ = ZJ;
            JJ.children(UJ).forEach(FJ), cJ[UJ] = {
              low: eJ,
              lim: ZJ++
            }
          }
          return JJ.children(Fc).forEach(FJ), cJ
        }(JJ),
        ZJ = JJ.graph();
      if (!Array.isArray(ZJ.dummyChains)) return;
      ZJ.dummyChains.forEach((ZJ => {
        let FJ = JJ.node(ZJ),
          UJ = FJ.edgeObj,
          eJ = function(JJ, cJ, ZJ, FJ) {
            let UJ, eJ = [],
              XJ = [],
              AJ = Math.min(cJ[ZJ].low, cJ[FJ].low),
              qJ = Math.max(cJ[ZJ].lim, cJ[FJ].lim);
            UJ = ZJ;
            do {
              UJ = JJ.parent(UJ), eJ.push(UJ)
            } while (UJ && (cJ[UJ].low > AJ || qJ > cJ[UJ].lim));
            let jJ = UJ,
              YJ = FJ;
            for (;
              (YJ = JJ.parent(YJ)) !== jJ;) XJ.push(YJ);
            return {
              path: eJ.concat(XJ.reverse()),
              lca: jJ
            }
          }(JJ, cJ, UJ.v, UJ.w),
          XJ = eJ.path,
          AJ = eJ.lca,
          qJ = 0,
          jJ = XJ[qJ],
          YJ = !0;
        for (; ZJ !== UJ.w;) {
          if (FJ = JJ.node(ZJ), YJ) {
            for (;
              (jJ = XJ[qJ]) !== AJ && JJ.node(jJ).maxRank < FJ.rank;) qJ++;
            jJ === AJ && (YJ = !1)
          }
          if (!YJ) {
            for (; qJ < XJ.length - 1 && JJ.node(XJ[qJ + 1]).minRank <= FJ.rank;) qJ++;
            jJ = XJ[qJ]
          }
          void 0 !== jJ && JJ.setParent(ZJ, jJ), ZJ = JJ.successors(ZJ)[0]
        }
      }))
    };

    function dc(JJ) {
      let cJ = OJ(JJ, "root", {}, "_root"),
        ZJ = function(JJ) {
          let cJ = {};

          function ZJ(FJ, UJ) {
            let eJ = JJ.children(FJ);
            eJ && eJ.length && eJ.forEach((JJ => ZJ(JJ, UJ + 1))), cJ[FJ] = UJ
          }
          return JJ.children(Fc).forEach((JJ => ZJ(JJ, 1))), cJ
        }(JJ),
        FJ = Object.values(ZJ),
        UJ = LJ(Math.max, FJ) - 1,
        eJ = 2 * UJ + 1;
      JJ.graph().nestingRoot = cJ, JJ.edges().forEach((cJ => JJ.edge(cJ).minlen *= eJ));
      let XJ = function(JJ) {
        return JJ.edges().reduce(((cJ, ZJ) => cJ + JJ.edge(ZJ).weight), 0)
      }(JJ) + 1;
      JJ.children(Fc).forEach((FJ => {
        zc(JJ, cJ, eJ, XJ, UJ, ZJ, FJ)
      })), JJ.graph().nodeRankFactor = eJ
    }

    function zc(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      var AJ;
      let qJ = JJ.children(XJ);
      if (!qJ.length) return void(XJ !== cJ && JJ.setEdge(cJ, XJ, {
        weight: 0,
        minlen: ZJ
      }));
      let jJ = iJ(JJ, "_bt"),
        YJ = iJ(JJ, "_bb"),
        hJ = JJ.node(XJ);
      JJ.setParent(jJ, XJ), hJ.borderTop = jJ, JJ.setParent(YJ, XJ), hJ.borderBottom = YJ, qJ.forEach((AJ => {
        var qJ;
        zc(JJ, cJ, ZJ, FJ, UJ, eJ, AJ);
        let hJ = JJ.node(AJ),
          DJ = hJ.borderTop ? hJ.borderTop : AJ,
          sJ = hJ.borderBottom ? hJ.borderBottom : AJ,
          nJ = hJ.borderTop ? FJ : 2 * FJ,
          GJ = DJ !== sJ ? 1 : UJ - (null != (qJ = eJ[XJ]) ? qJ : 0) + 1;
        JJ.setEdge(jJ, DJ, {
          weight: nJ,
          minlen: GJ,
          nestingEdge: !0
        }), JJ.setEdge(sJ, YJ, {
          weight: nJ,
          minlen: GJ,
          nestingEdge: !0
        })
      })), JJ.parent(XJ) || JJ.setEdge(cJ, jJ, {
        weight: 0,
        minlen: UJ + (null != (AJ = eJ[XJ]) ? AJ : 0)
      })
    }
    var Nc = function(JJ) {
      JJ.children(Fc).forEach((function cJ(ZJ) {
        let FJ = JJ.children(ZJ),
          UJ = JJ.node(ZJ);
        if (FJ.length && FJ.forEach(cJ), UJ && Object.hasOwn(UJ, "minRank")) {
          UJ.borderLeft = [], UJ.borderRight = [];
          for (let cJ = UJ.minRank, FJ = UJ.maxRank + 1; cJ < FJ; ++cJ) Oc(JJ, "borderLeft", "_bl", ZJ, UJ, cJ), Oc(JJ, "borderRight", "_br", ZJ, UJ, cJ)
        }
      }))
    };

    function Oc(JJ, cJ, ZJ, FJ, UJ, eJ) {
      let XJ = {
          width: 0,
          height: 0,
          rank: eJ,
          borderType: cJ
        },
        AJ = UJ[cJ][eJ - 1],
        qJ = OJ(JJ, "border", XJ, ZJ);
      UJ[cJ][eJ] = qJ, JJ.setParent(qJ, FJ), AJ && JJ.setEdge(AJ, qJ, {
        weight: 1
      })
    }

    function Tc(JJ) {
      var cJ;
      let ZJ = null == (cJ = JJ.graph().rankdir) ? void 0 : cJ.toLowerCase();
      ("bt" === ZJ || "rl" === ZJ) && function(JJ) {
        JJ.nodes().forEach((cJ => ic(JJ.node(cJ)))), JJ.edges().forEach((cJ => {
          var ZJ;
          let FJ = JJ.edge(cJ);
          null == (ZJ = FJ.points) || ZJ.forEach(ic), Object.hasOwn(FJ, "y") && ic(FJ)
        }))
      }(JJ), ("lr" === ZJ || "rl" === ZJ) && (function(JJ) {
        JJ.nodes().forEach((cJ => Rc(JJ.node(cJ)))), JJ.edges().forEach((cJ => {
          var ZJ;
          let FJ = JJ.edge(cJ);
          null == (ZJ = FJ.points) || ZJ.forEach(Rc), Object.hasOwn(FJ, "x") && Rc(FJ)
        }))
      }(JJ), Cc(JJ))
    }

    function Cc(JJ) {
      JJ.nodes().forEach((cJ => uc(JJ.node(cJ)))), JJ.edges().forEach((cJ => uc(JJ.edge(cJ))))
    }

    function uc(JJ) {
      let cJ = JJ.width;
      JJ.width = JJ.height, JJ.height = cJ
    }

    function ic(JJ) {
      JJ.y = -JJ.y
    }

    function Rc(JJ) {
      let cJ = JJ.x;
      JJ.x = JJ.y, JJ.y = cJ
    }

    function Lc(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZJ = {},
        FJ = JJ.nodes().filter((cJ => !JJ.children(cJ).length)),
        UJ = FJ.map((cJ => JJ.node(cJ).rank)),
        eJ = Jc(LJ(Math.max, UJ) + 1).map((() => []));
      return FJ.sort(((cJ, ZJ) => JJ.node(cJ).rank - JJ.node(ZJ).rank)).forEach((function FJ(UJ) {
        if (ZJ[UJ]) return;
        ZJ[UJ] = !0;
        let XJ = JJ.node(UJ);
        eJ[XJ.rank].push(UJ);
        let AJ = JJ.successors(UJ);
        AJ && [...AJ].sort(((ZJ, FJ) => function(ZJ, FJ) {
          let UJ = JJ.node(ZJ),
            eJ = JJ.node(FJ);
          return Uc(cJ, UJ, eJ)
        }(ZJ, FJ))).forEach(FJ)
      })), eJ
    }

    function ac(JJ, cJ) {
      let ZJ = 0;
      for (let FJ = 1; FJ < cJ.length; ++FJ) ZJ += Bc(JJ, cJ[FJ - 1], cJ[FJ]);
      return ZJ
    }

    function Bc(JJ, cJ, ZJ) {
      let FJ = function(JJ, cJ) {
          return JJ.reduce(((JJ, ZJ, FJ) => (JJ[ZJ] = cJ[FJ], JJ)), {})
        }(ZJ, ZJ.map(((JJ, cJ) => cJ))),
        UJ = cJ.flatMap((cJ => {
          let ZJ = JJ.outEdges(cJ);
          return ZJ ? ZJ.map((cJ => ({
            pos: FJ[cJ.w],
            weight: JJ.edge(cJ).weight
          }))).sort(((JJ, cJ) => JJ.pos - cJ.pos)) : []
        })),
        eJ = 1;
      for (; eJ < ZJ.length;) eJ <<= 1;
      let XJ = 2 * eJ - 1;
      eJ -= 1;
      let AJ = new Array(XJ).fill(0),
        qJ = 0;
      return UJ.forEach((JJ => {
        let cJ = JJ.pos + eJ;
        AJ[cJ] += JJ.weight;
        let ZJ = 0;
        for (; cJ > 0;) cJ % 2 && (ZJ += AJ[cJ + 1]), cJ = cJ - 1 >> 1, AJ[cJ] += JJ.weight;
        qJ += JJ.weight * ZJ
      })), qJ
    }

    function tc(JJ, cJ) {
      let ZJ = {};
      return JJ.forEach(((JJ, cJ) => {
          let FJ = {
            indegree: 0,
            in: [],
            out: [],
            vs: [JJ.v],
            i: cJ
          };
          void 0 !== JJ.barycenter && (FJ.barycenter = JJ.barycenter, FJ.weight = JJ.weight), ZJ[JJ.v] = FJ
        })), cJ.edges().forEach((JJ => {
          let cJ = ZJ[JJ.v],
            FJ = ZJ[JJ.w];
          void 0 !== cJ && void 0 !== FJ && (FJ.indegree++, cJ.out.push(FJ))
        })),
        function(JJ) {
          let cJ = [];

          function ZJ(JJ) {
            return cJ => {
              cJ.merged || (void 0 === cJ.barycenter || void 0 === JJ.barycenter || cJ.barycenter >= JJ.barycenter) && function(JJ, cJ) {
                let ZJ = 0,
                  FJ = 0;
                JJ.weight && (ZJ += JJ.barycenter * JJ.weight, FJ += JJ.weight), cJ.weight && (ZJ += cJ.barycenter * cJ.weight, FJ += cJ.weight), JJ.vs = cJ.vs.concat(JJ.vs), JJ.barycenter = ZJ / FJ, JJ.weight = FJ, JJ.i = Math.min(cJ.i, JJ.i), cJ.merged = !0
              }(JJ, cJ)
            }
          }

          function FJ(cJ) {
            return ZJ => {
              ZJ.in.push(cJ), 0 === --ZJ.indegree && JJ.push(ZJ)
            }
          }
          for (; JJ.length;) {
            let UJ = JJ.pop();
            cJ.push(UJ), UJ.in.reverse().forEach(ZJ(UJ)), UJ.out.forEach(FJ(UJ))
          }
          return cJ.filter((JJ => !JJ.merged)).map((JJ => cc(JJ, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ZJ).filter((JJ => !JJ.indegree)))
    }

    function oc(JJ, cJ, ZJ, FJ, UJ) {
      let eJ = {},
        XJ = null,
        AJ = null,
        qJ = UJ;
      "boolean" == typeof cJ ? (qJ = cJ, eJ = {}) : cJ && (eJ = cJ, XJ = null != ZJ ? ZJ : null, AJ = null != FJ ? FJ : null);
      let jJ = function(JJ, cJ) {
          let ZJ = {
            lhs: [],
            rhs: []
          };
          return JJ.forEach((JJ => {
            cJ(JJ) ? ZJ.lhs.push(JJ) : ZJ.rhs.push(JJ)
          })), ZJ
        }(JJ, (JJ => Object.hasOwn(JJ, "barycenter"))),
        YJ = jJ.lhs,
        hJ = jJ.rhs.sort(((JJ, cJ) => cJ.i - JJ.i)),
        DJ = [],
        sJ = 0,
        nJ = 0,
        GJ = 0;
      YJ.sort(function(JJ, cJ, ZJ) {
        return (FJ, UJ) => {
          if (FJ.barycenter < UJ.barycenter) return -1;
          if (FJ.barycenter > UJ.barycenter) return 1;
          if (JJ && ("string" == typeof FJ.vs[0] || "string" == typeof UJ.vs[0])) {
            let ZJ = JJ.node(FJ.vs[0]),
              eJ = JJ.node(UJ.vs[0]),
              XJ = Uc(cJ, ZJ, eJ);
            if (0 !== XJ) return XJ
          }
          return ZJ ? UJ.i - FJ.i : FJ.i - UJ.i
        }
      }(AJ, XJ, !!qJ));
      for (let [xJ, rJ] of Object.entries(eJ)) {
        let JJ = YJ.findIndex((JJ => JJ.vs[0] === xJ));
        YJ.splice(JJ + 1, 0, rJ)
      }
      GJ = lc(DJ, hJ, GJ), YJ.forEach((JJ => {
        GJ += JJ.vs.length, DJ.push(JJ.vs), sJ += JJ.barycenter * JJ.weight, nJ += JJ.weight, GJ = lc(DJ, hJ, GJ)
      }));
      let fJ = {
        vs: DJ.flat(1)
      };
      return nJ && (fJ.barycenter = sJ / nJ, fJ.weight = nJ), fJ
    }

    function lc(JJ, cJ, ZJ) {
      let FJ;
      for (; cJ.length && (FJ = cJ[cJ.length - 1]).i <= ZJ;) cJ.pop(), JJ.push(FJ.vs), ZJ++;
      return ZJ
    }

    function JZ(JJ, cJ, ZJ, FJ, UJ) {
      var eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ;
      let fJ = null,
        xJ = UJ;
      "boolean" == typeof FJ ? (xJ = FJ, fJ = null) : void 0 !== FJ && (fJ = FJ);
      let rJ = JJ.children(cJ),
        vJ = JJ.node(cJ),
        mJ = vJ ? vJ.borderLeft : void 0,
        QJ = vJ ? vJ.borderRight : void 0,
        EJ = {};
      mJ && (rJ = rJ.filter((JJ => JJ !== mJ && JJ !== QJ)));
      let VJ = function(JJ) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((cJ => {
          let ZJ = JJ.inEdges(cJ);
          if (!ZJ || !ZJ.length) return {
            v: cJ
          };
          {
            let FJ = ZJ.reduce(((cJ, ZJ) => {
              let FJ = JJ.edge(ZJ),
                UJ = JJ.node(ZJ.v);
              return {
                sum: cJ.sum + FJ.weight * UJ.order,
                weight: cJ.weight + FJ.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: cJ,
              barycenter: FJ.sum / FJ.weight,
              weight: FJ.weight
            }
          }
        }))
      }(JJ, rJ);
      VJ.forEach((cJ => {
        if (JJ.children(cJ.v).length) {
          let {
            result: FJ
          } = JZ(JJ, cJ.v, ZJ, fJ, xJ);
          EJ[cJ.v] = FJ, Object.hasOwn(FJ, "barycenter") && function(JJ, cJ) {
            void 0 !== JJ.barycenter ? (JJ.barycenter = (JJ.barycenter * JJ.weight + cJ.barycenter * cJ.weight) / (JJ.weight + cJ.weight), JJ.weight += cJ.weight) : (JJ.barycenter = cJ.barycenter, JJ.weight = cJ.weight)
          }(cJ, FJ)
        }
      }));
      let KJ = tc(VJ, ZJ);
      ! function(JJ, cJ) {
        JJ.forEach((JJ => {
          JJ.vs = JJ.vs.flatMap((JJ => cJ[JJ] ? cJ[JJ].vs : JJ))
        }))
      }(KJ, EJ);
      let yJ = {},
        SJ = !1;
      for (let MJ = 0; MJ < KJ.length; MJ++)
        for (let cJ = MJ + 1; cJ < KJ.length; cJ++)
          if (KJ[MJ] && KJ[cJ] && null != (eJ = KJ[MJ]) && eJ.barycenter && null != (XJ = KJ[cJ]) && XJ.barycenter && (null == (AJ = KJ[MJ]) ? void 0 : AJ.barycenter) === KJ[cJ].barycenter) {
            let ZJ = null != (jJ = null == (qJ = KJ[MJ]) ? void 0 : qJ.vs[0]) ? jJ : "",
              FJ = null != (hJ = null == (YJ = KJ[cJ]) ? void 0 : YJ.vs[0]) ? hJ : "",
              UJ = JJ.node(ZJ),
              eJ = JJ.node(FJ);
            if ("edge" === UJ.dummy && "edge" === eJ.dummy && (null == (DJ = UJ.edgeObj) ? void 0 : DJ.v) === (null == (sJ = eJ.edgeObj) ? void 0 : sJ.v) && (null == (nJ = UJ.edgeObj) ? void 0 : nJ.w) === (null == (GJ = eJ.edgeObj) ? void 0 : GJ.w)) {
              if (UJ.edgeLabel.reversed) {
                yJ[FJ] = KJ[MJ], KJ.splice(MJ, 1), MJ--;
                break
              }
              yJ[ZJ] = KJ[cJ], KJ.splice(cJ, 1), cJ--
            } else SJ = !0
          } let IJ = oc(KJ, yJ, fJ, JJ, xJ);
      if (mJ && QJ) {
        IJ.vs = [mJ, IJ.vs, QJ].flat(1);
        let cJ = JJ.predecessors(mJ);
        if (cJ && cJ.length) {
          let ZJ = JJ.node(cJ[0]),
            FJ = JJ.predecessors(QJ),
            UJ = JJ.node(FJ[0]);
          Object.hasOwn(IJ, "barycenter") || (IJ.barycenter = 0, IJ.weight = 0), IJ.barycenter = (IJ.barycenter * IJ.weight + ZJ.order + UJ.order) / (IJ.weight + 2), IJ.weight += 2
        }
      }
      return Object.defineProperty(IJ, "result", {
        value: IJ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(IJ, "usedBias", {
        value: SJ,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), IJ
    }

    function cZ(JJ, cJ, ZJ, FJ) {
      FJ || (FJ = JJ.nodes());
      let UJ = function(JJ) {
          let cJ;
          for (; JJ.hasNode(cJ = lJ("_root")););
          return cJ
        }(JJ),
        eJ = new NJ({
          compound: !0
        }).setGraph({
          root: UJ
        }).setDefaultNodeLabel((cJ => JJ.node(cJ)));
      return FJ.forEach((FJ => {
        let XJ = JJ.node(FJ),
          AJ = JJ.parent(FJ);
        if (XJ.rank === cJ || XJ.minRank <= cJ && cJ <= XJ.maxRank) {
          eJ.setNode(FJ), eJ.setParent(FJ, AJ || UJ);
          let qJ = JJ[ZJ](FJ);
          qJ && qJ.forEach((cJ => {
            let ZJ = cJ.v === FJ ? cJ.w : cJ.v,
              UJ = eJ.edge(ZJ, FJ),
              XJ = void 0 !== UJ ? UJ.weight : 0;
            eJ.setEdge(ZJ, FJ, {
              weight: JJ.edge(cJ).weight + XJ
            })
          })), Object.hasOwn(XJ, "minRank") && eJ.setNode(FJ, {
            borderLeft: XJ.borderLeft[cJ],
            borderRight: XJ.borderRight[cJ]
          })
        }
      })), eJ
    }

    function ZZ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof cJ.customOrder) return void cJ.customOrder(JJ, ZZ);
      let FJ = aJ(JJ),
        UJ = FZ(JJ, Jc(1, FJ + 1), "inEdges"),
        eJ = FZ(JJ, Jc(FJ - 1, -1, -1), "outEdges"),
        XJ = Lc(JJ, ZJ);
      if (eZ(JJ, XJ), cJ.disableOptimalOrderHeuristic) return;
      let AJ, qJ = Number.POSITIVE_INFINITY,
        jJ = cJ.constraints || [];
      for (let YJ = 0, hJ = 0; hJ < 4; ++YJ, ++hJ) {
        UZ(YJ % 2 ? UJ : eJ, YJ % 4 >= 2, jJ, ZJ), XJ = uJ(JJ);
        let cJ = ac(JJ, XJ);
        cJ < qJ ? (hJ = 0, AJ = Object.assign({}, XJ), qJ = cJ) : cJ === qJ && (AJ = structuredClone(XJ))
      }
      eZ(JJ, AJ)
    }

    function FZ(JJ, cJ, ZJ) {
      let FJ = new Map,
        UJ = (JJ, cJ) => {
          FJ.has(JJ) || FJ.set(JJ, []), FJ.get(JJ).push(cJ)
        };
      for (let eJ of JJ.nodes()) {
        let cJ = JJ.node(eJ);
        if ("number" == typeof cJ.rank && UJ(cJ.rank, eJ), "number" == typeof cJ.minRank && "number" == typeof cJ.maxRank)
          for (let JJ = cJ.minRank; JJ <= cJ.maxRank; JJ++) JJ !== cJ.rank && UJ(JJ, eJ)
      }
      return cJ.map((function(cJ) {
        return cZ(JJ, cJ, ZJ, FJ.get(cJ) || [])
      }))
    }

    function UZ(JJ, cJ, ZJ, FJ) {
      let UJ = !0,
        eJ = new NJ;
      JJ.forEach((function(JJ) {
        ZJ.forEach((JJ => eJ.setEdge(JJ.left, JJ.right)));
        let XJ = JJ.graph().root,
          {
            result: AJ,
            usedBias: qJ
          } = JZ(JJ, XJ, eJ, FJ, UJ);
        cJ && qJ && (UJ = !UJ), AJ.vs.forEach(((cJ, ZJ) => JJ.node(cJ).order = ZJ)),
          function(JJ, cJ, ZJ) {
            let FJ, UJ = {};
            ZJ.forEach((ZJ => {
              let eJ, XJ, AJ = JJ.parent(ZJ);
              for (; AJ;) {
                if (eJ = JJ.parent(AJ), eJ ? (XJ = UJ[eJ], UJ[eJ] = AJ) : (XJ = FJ, FJ = AJ), XJ && XJ !== AJ) return void cJ.setEdge(XJ, AJ);
                AJ = eJ
              }
            }))
          }(JJ, eJ, AJ.vs)
      }))
    }

    function eZ(JJ, cJ) {
      Object.values(cJ).forEach((cJ => cJ.forEach(((cJ, ZJ) => JJ.node(cJ).order = ZJ))))
    }

    function XZ(JJ, cJ, ZJ) {
      if (cJ > ZJ) {
        let JJ = cJ;
        cJ = ZJ, ZJ = JJ
      }
      let FJ = JJ[cJ];
      FJ || (JJ[cJ] = FJ = {}), FJ[ZJ] = !0
    }

    function AZ(JJ, cJ, ZJ) {
      if (cJ > ZJ) {
        let JJ = cJ;
        cJ = ZJ, ZJ = JJ
      }
      let FJ = JJ[cJ];
      return void 0 !== FJ && Object.hasOwn(FJ, ZJ)
    }

    function qZ(JJ, cJ, ZJ, FJ) {
      let UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        eJ = {},
        XJ = function(JJ, cJ, ZJ, FJ) {
          let UJ = new NJ,
            eJ = JJ.graph(),
            XJ = function(JJ, cJ, ZJ) {
              return (FJ, UJ, eJ) => {
                let XJ, AJ = FJ.node(UJ),
                  qJ = FJ.node(eJ),
                  jJ = 0;
                if (jJ += AJ.width / 2, Object.hasOwn(AJ, "labelpos")) switch (AJ.labelpos.toLowerCase()) {
                  case "l":
                    XJ = -AJ.width / 2;
                    break;
                  case "r":
                    XJ = AJ.width / 2
                }
                if (XJ && (jJ += ZJ ? XJ : -XJ), XJ = void 0, jJ += (AJ.dummy ? cJ : JJ) / 2, jJ += (qJ.dummy ? cJ : JJ) / 2, jJ += qJ.width / 2, Object.hasOwn(qJ, "labelpos")) switch (qJ.labelpos.toLowerCase()) {
                  case "l":
                    XJ = qJ.width / 2;
                    break;
                  case "r":
                    XJ = -qJ.width / 2
                }
                return XJ && (jJ += ZJ ? XJ : -XJ), jJ
              }
            }(eJ.nodesep, eJ.edgesep, FJ);
          return cJ.forEach((cJ => {
            let FJ;
            cJ.forEach((cJ => {
              let eJ = ZJ[cJ];
              if (void 0 !== eJ) {
                if (UJ.setNode(eJ), void 0 !== FJ) {
                  let AJ = ZJ[FJ];
                  if (void 0 !== AJ) {
                    let ZJ = UJ.edge(AJ, eJ);
                    UJ.setEdge(AJ, eJ, Math.max(XJ(JJ, cJ, FJ), ZJ || 0))
                  }
                }
                FJ = cJ
              }
            }))
          })), UJ
        }(JJ, cJ, ZJ, UJ),
        AJ = UJ ? "borderLeft" : "borderRight";

      function qJ(JJ, cJ) {
        let ZJ = XJ.nodes().slice(),
          FJ = {},
          UJ = ZJ.pop();
        for (; UJ;) {
          if (FJ[UJ]) JJ(UJ);
          else {
            FJ[UJ] = !0, ZJ.push(UJ);
            for (let JJ of cJ(UJ)) ZJ.push(JJ)
          }
          UJ = ZJ.pop()
        }
      }
      return qJ((function(JJ) {
        let cJ = XJ.inEdges(JJ);
        eJ[JJ] = cJ ? cJ.reduce(((JJ, cJ) => {
          var ZJ;
          let FJ = null != (ZJ = eJ[cJ.v]) ? ZJ : 0,
            UJ = XJ.edge(cJ);
          return Math.max(JJ, FJ + (void 0 !== UJ ? UJ : 0))
        }), 0) : 0
      }), (function(JJ) {
        return XJ.predecessors(JJ) || []
      })), qJ((function(cJ) {
        let ZJ = XJ.outEdges(cJ),
          FJ = Number.POSITIVE_INFINITY;
        ZJ && (FJ = ZJ.reduce(((JJ, cJ) => {
          let ZJ = eJ[cJ.w],
            FJ = XJ.edge(cJ);
          return Math.min(JJ, (void 0 !== ZJ ? ZJ : 0) - (void 0 !== FJ ? FJ : 0))
        }), Number.POSITIVE_INFINITY));
        let UJ = JJ.node(cJ);
        FJ !== Number.POSITIVE_INFINITY && UJ.borderType !== AJ && (eJ[cJ] = Math.max(void 0 !== eJ[cJ] ? eJ[cJ] : 0, FJ))
      }), (function(JJ) {
        return XJ.successors(JJ) || []
      })), Object.keys(FJ).forEach((JJ => {
        var cJ;
        let FJ = ZJ[JJ];
        void 0 !== FJ && (eJ[JJ] = null != (cJ = eJ[FJ]) ? cJ : 0)
      })), eJ
    }

    function jZ(JJ, cJ) {
      let ZJ, FJ = uJ(JJ),
        UJ = Object.assign(function(JJ, cJ) {
          let ZJ = {};
          return cJ.length && cJ.reduce((function(cJ, FJ) {
            let UJ = 0,
              eJ = 0,
              XJ = cJ.length,
              AJ = FJ[FJ.length - 1];
            return FJ.forEach(((cJ, qJ) => {
              let jJ = function(JJ, cJ) {
                  if (JJ.node(cJ).dummy) {
                    let ZJ = JJ.predecessors(cJ);
                    if (ZJ) return ZJ.find((cJ => JJ.node(cJ).dummy))
                  }
                }(JJ, cJ),
                YJ = jJ ? JJ.node(jJ).order : XJ;
              (jJ || cJ === AJ) && (FJ.slice(eJ, qJ + 1).forEach((cJ => {
                let FJ = JJ.predecessors(cJ);
                FJ && FJ.forEach((FJ => {
                  let eJ = JJ.node(FJ),
                    XJ = eJ.order;
                  (XJ < UJ || YJ < XJ) && (!eJ.dummy || !JJ.node(cJ).dummy) && XZ(ZJ, FJ, cJ)
                }))
              })), eJ = qJ + 1, UJ = YJ)
            })), FJ
          })), ZJ
        }(JJ, FJ), function(JJ, cJ) {
          let ZJ = {};

          function FJ(cJ, FJ, UJ, eJ, XJ) {
            Jc(FJ, UJ).forEach((FJ => {
              let UJ = cJ[FJ];
              if (void 0 !== UJ && JJ.node(UJ).dummy) {
                let cJ = JJ.predecessors(UJ);
                cJ && cJ.forEach((cJ => {
                  if (void 0 === cJ) return;
                  let FJ = JJ.node(cJ);
                  FJ.dummy && (FJ.order < eJ || FJ.order > XJ) && XZ(ZJ, cJ, UJ)
                }))
              }
            }))
          }
          return cJ.length && cJ.reduce((function(cJ, ZJ) {
            let UJ = -1,
              eJ = -1,
              XJ = 0;
            return ZJ.forEach(((AJ, qJ) => {
              if ("border" === JJ.node(AJ).dummy) {
                let cJ = JJ.predecessors(AJ);
                if (cJ && cJ.length) {
                  let AJ = cJ[0];
                  if (void 0 === AJ) return;
                  eJ = JJ.node(AJ).order, FJ(ZJ, XJ, qJ, UJ, eJ), XJ = qJ, UJ = eJ
                }
              }
              FJ(ZJ, XJ, ZJ.length, eJ, cJ.length)
            })), ZJ
          })), ZJ
        }(JJ, FJ)),
        eJ = {};
      ["u", "d"].forEach((XJ => {
        ZJ = "u" === XJ ? FJ : Object.values(FJ).reverse(), ["l", "r"].forEach((FJ => {
          "r" === FJ && (ZJ = ZJ.map((JJ => Object.values(JJ).reverse())));
          let AJ = function(JJ, cJ, ZJ, FJ, UJ) {
              let eJ = {},
                XJ = {},
                AJ = {};
              return cJ.forEach((JJ => {
                JJ.forEach(((JJ, cJ) => {
                  eJ[JJ] = JJ, XJ[JJ] = JJ, AJ[JJ] = cJ
                }))
              })), cJ.forEach((cJ => {
                let qJ = -1,
                  jJ = -1,
                  YJ = !1,
                  hJ = cJ,
                  DJ = cJ.findIndex((cJ => (null == UJ ? void 0 : UJ.includes(cJ)) || YZ(cJ, JJ, UJ)));
                DJ > 0 && (hJ = [cJ[DJ], ...cJ.slice(0, DJ), ...cJ.slice(DJ + 1)], YJ = !0), hJ.forEach((cJ => {
                  var hJ;
                  let DJ = FJ(cJ);
                  if (DJ && DJ.length) {
                    null != UJ && UJ.includes(cJ) && (DJ = DJ.filter((cJ => YZ(cJ, JJ, UJ))));
                    let FJ = DJ.sort(((JJ, cJ) => {
                        let ZJ = AJ[JJ],
                          FJ = AJ[cJ];
                        return (void 0 !== ZJ ? ZJ : 0) - (void 0 !== FJ ? FJ : 0)
                      })),
                      sJ = (FJ.length - 1) / 2;
                    for (let JJ = Math.floor(sJ), UJ = Math.ceil(sJ); JJ <= UJ; ++JJ) {
                      let UJ = FJ[JJ];
                      if (void 0 === UJ) continue;
                      let DJ = AJ[UJ];
                      if (void 0 !== DJ && XJ[cJ] === cJ && qJ < DJ && AJ[UJ] !== jJ && !AZ(ZJ, cJ, UJ)) {
                        let JJ = eJ[UJ];
                        void 0 !== JJ && (XJ[UJ] = cJ, XJ[cJ] = eJ[cJ] = JJ, qJ = DJ, YJ && (qJ = -1, jJ = null != (hJ = AJ[UJ]) ? hJ : -1, YJ = !1))
                      }
                    }
                  }
                }))
              })), {
                root: eJ,
                align: XJ
              }
            }(JJ, ZJ, UJ, (cJ => ("u" === XJ ? JJ.predecessors(cJ) : JJ.successors(cJ)) || []), cJ),
            qJ = qZ(JJ, ZJ, AJ.root, AJ.align, "r" === FJ);
          "r" === FJ && (qJ = Zc(qJ, (JJ => -JJ))), eJ[XJ + FJ] = qJ
        }))
      }));
      let XJ = function(JJ, cJ) {
        return Object.values(cJ).reduce(((cJ, ZJ) => {
          let FJ = Number.NEGATIVE_INFINITY,
            UJ = Number.POSITIVE_INFINITY;
          Object.entries(ZJ).forEach((cJ => {
            let [ZJ, eJ] = cJ, XJ = function(JJ, cJ) {
              return JJ.node(cJ).width
            }(JJ, ZJ) / 2;
            FJ = Math.max(eJ + XJ, FJ), UJ = Math.min(eJ - XJ, UJ)
          }));
          let eJ = FJ - UJ;
          return eJ < cJ[0] && (cJ = [eJ, ZJ]), cJ
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(JJ, eJ);
      return function(JJ, cJ) {
          let ZJ = Object.values(cJ),
            FJ = LJ(Math.min, ZJ),
            UJ = LJ(Math.max, ZJ);
          ["u", "d"].forEach((ZJ => {
            ["l", "r"].forEach((eJ => {
              let XJ = ZJ + eJ,
                AJ = JJ[XJ];
              if (!AJ || AJ === cJ) return;
              let qJ = Object.values(AJ),
                jJ = FJ - LJ(Math.min, qJ);
              "l" !== eJ && (jJ = UJ - LJ(Math.max, qJ)), jJ && (JJ[XJ] = Zc(AJ, (JJ => JJ + jJ)))
            }))
          }))
        }(eJ, XJ),
        function(JJ) {
          let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ZJ = JJ.ul;
          return ZJ ? Zc(ZJ, ((ZJ, FJ) => {
            var UJ, eJ;
            if (cJ) {
              let ZJ = cJ.toLowerCase(),
                UJ = JJ[ZJ];
              if (UJ && void 0 !== UJ[FJ]) return UJ[FJ]
            }
            let XJ = Object.values(JJ).map((JJ => {
              let cJ = JJ[FJ];
              return void 0 !== cJ ? cJ : 0
            })).sort(((JJ, cJ) => JJ - cJ));
            return ((null != (UJ = XJ[1]) ? UJ : 0) + (null != (eJ = XJ[2]) ? eJ : 0)) / 2
          })) : {}
        }(eJ, JJ.graph().align)
    }

    function YZ(JJ, cJ, ZJ) {
      var FJ;
      if (!ZJ) return !1;
      let UJ = null == (FJ = cJ.node(JJ)) ? void 0 : FJ.edgeObj;
      if (!UJ || cJ.node(JJ).edgeLabel.reversed) return !1;
      let eJ = ZJ.indexOf(null == UJ ? void 0 : UJ.v),
        XJ = ZJ.indexOf(null == UJ ? void 0 : UJ.w);
      return -1 !== eJ && -1 !== XJ && eJ === (XJ + 1) % ZJ.length || eJ === (XJ - 1) % ZJ.length
    }

    function hZ(JJ, cJ) {
      (function(JJ) {
        let cJ = uJ(JJ),
          ZJ = JJ.graph(),
          FJ = ZJ.ranksep,
          UJ = ZJ.rankalign,
          eJ = 0;
        cJ.forEach((cJ => {
          let ZJ = cJ.reduce(((cJ, ZJ) => {
            var FJ;
            let UJ = null != (FJ = JJ.node(ZJ).height) ? FJ : 0;
            return cJ > UJ ? cJ : UJ
          }), 0);
          cJ.forEach((cJ => {
            let FJ = JJ.node(cJ);
            FJ.y = "top" === UJ ? eJ + FJ.height / 2 : "bottom" === UJ ? eJ + ZJ - FJ.height / 2 : eJ + ZJ / 2
          })), eJ += ZJ + FJ
        }))
      })(JJ = TJ(JJ)), Object.entries(jZ(JJ, cJ)).forEach((cJ => {
        let [ZJ, FJ] = cJ;
        return JJ.node(ZJ).x = FJ
      }))
    }
    var DZ = new WeakMap;

    function sZ(JJ) {
      return GZ(JJ, tJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), JJ
    }

    function nZ(JJ, cJ, ZJ) {
      let FJ = cJ;
      for (; void 0 !== FJ;) {
        let cJ = JJ.parent(FJ);
        if (cJ === ZJ) return FJ;
        FJ = cJ
      }
    }

    function GZ(JJ, cJ, ZJ) {
      var FJ;
      let UJ = JJ.nodes().filter((cJ => JJ.children(cJ).length)),
        eJ = {};
      UJ.forEach((FJ => {
        let UJ = JJ.node(FJ);
        if (UJ && UJ.rankdir) {
          let XJ = new NJ({
            multigraph: !0,
            compound: !0
          });
          XJ.setGraph({
            rankdir: UJ.rankdir
          });
          let AJ = JJ.children(FJ);
          AJ.forEach((cJ => {
            let ZJ = {
              ...JJ.node(cJ)
            };
            XJ.setNode(cJ, ZJ);
            let UJ = JJ.parent(cJ);
            UJ && UJ !== FJ && AJ.includes(UJ) && XJ.setParent(cJ, UJ)
          }));
          let qJ = new Set;
          JJ.edges().forEach((cJ => {
            let ZJ = nZ(JJ, cJ.v, FJ),
              UJ = nZ(JJ, cJ.w, FJ);
            if (ZJ && UJ && ZJ !== UJ) {
              let FJ = `${ZJ}\0${UJ}`;
              qJ.has(FJ) || (qJ.add(FJ), XJ.setEdge(ZJ, UJ, {
                ...JJ.edge(cJ)
              }))
            }
          })), GZ(XJ, cJ, ZJ);
          let jJ = SZ(XJ);
          fZ(jJ, cJ, ZJ, null), xZ(XJ, jJ);
          let YJ = 1 / 0,
            hJ = 1 / 0,
            DJ = -1 / 0,
            sJ = -1 / 0;
          XJ.nodes().forEach((JJ => {
            if (JJ === FJ) return;
            let cJ = XJ.node(JJ);
            cJ && "number" == typeof cJ.x && "number" == typeof cJ.y && "number" == typeof cJ.width && "number" == typeof cJ.height && (YJ = Math.min(YJ, cJ.x - cJ.width / 2), DJ = Math.max(DJ, cJ.x + cJ.width / 2), hJ = Math.min(hJ, cJ.y - cJ.height / 2), sJ = Math.max(sJ, cJ.y + cJ.height / 2))
          })), (!isFinite(YJ) || !isFinite(hJ) || !isFinite(DJ) || !isFinite(sJ)) && (YJ = hJ = 0, DJ = sJ = 0);
          let nJ = DJ - YJ,
            GJ = sJ - hJ;
          eJ[FJ] = {
            minX: YJ,
            Ze: hJ,
            maxX: DJ,
            Fe: sJ,
            width: nJ,
            height: GJ,
            offsetX: YJ,
            offsetY: hJ
          }, UJ._dagreClusterSubgraph = XJ
        }
      }));
      let XJ = [],
        AJ = new Map;
      UJ.forEach((cJ => {
        let ZJ = JJ.node(cJ);
        ZJ && ZJ.rankdir && eJ[cJ] && AJ.set(cJ, (JJ.children(cJ) || []).filter((JJ => JJ !== cJ)))
      }));
      let qJ = new Set([...AJ.values()].flat()),
        jJ = new Map;
      AJ.forEach(((cJ, ZJ) => {
        qJ.has(ZJ) || jJ.set(ZJ, (cJ => {
          let ZJ = [],
            FJ = (JJ.children(cJ) || []).filter((JJ => JJ !== cJ));
          for (; FJ.length > 0;) {
            let cJ = FJ.shift();
            ZJ.push(cJ), (JJ.children(cJ) || []).filter((JJ => JJ !== cJ)).forEach((JJ => FJ.push(JJ)))
          }
          return ZJ
        })(ZJ))
      }));
      let YJ = new Set([...jJ.values()].flat()),
        hJ = JJ => {
          for (let [cJ, ZJ] of jJ)
            if (ZJ.includes(JJ)) return cJ;
          return JJ
        },
        DJ = [];
      JJ.edges().forEach((cJ => {
        (YJ.has(cJ.v) || YJ.has(cJ.w)) && DJ.push({
          edge: cJ,
          label: JJ.edge(cJ)
        })
      }));
      let sJ = new Map;
      YJ.forEach((cJ => {
        let ZJ = JJ.parent(cJ);
        sJ.set(cJ, "string" == typeof ZJ ? ZJ : void 0)
      })), jJ.forEach(((cJ, ZJ) => {
        let FJ = JJ.node(ZJ),
          UJ = [];
        cJ.forEach((cJ => {
          let ZJ = JJ.node(cJ);
          ZJ && (UJ.push({
            id: cJ,
            node: ZJ,
            parent: sJ.get(cJ)
          }), JJ.removeNode(cJ))
        }));
        let AJ = DJ.filter((JJ => {
            let {
              edge: ZJ
            } = JJ;
            return cJ.includes(ZJ.v) || cJ.includes(ZJ.w)
          })),
          qJ = eJ[ZJ];
        FJ && (XJ.push({
          clusterId: ZJ,
          subgraph: FJ._dagreClusterSubgraph,
          bounds: qJ,
          children: cJ,
          removedNodes: UJ,
          removedEdges: AJ
        }), FJ.width = qJ.width, FJ.height = qJ.height)
      }));
      let nJ = new Set;
      DJ.forEach((cJ => {
        let {
          edge: ZJ,
          label: FJ
        } = cJ, UJ = hJ(ZJ.v), eJ = hJ(ZJ.w);
        if (UJ !== eJ && JJ.hasNode(UJ) && JJ.hasNode(eJ)) {
          let cJ = `${UJ}\0${eJ}`;
          nJ.has(cJ) || (nJ.add(cJ), JJ.setEdge(UJ, eJ, {
            ...FJ,
            width: 0,
            height: 0
          }))
        }
      }));
      let GJ = SZ(JJ),
        fJ = fZ(GJ, cJ, ZJ, null != (FJ = DZ.get(JJ)) ? FJ : null);
      DZ.set(JJ, fJ), xZ(JJ, GJ), nJ.forEach((cJ => {
        let ZJ = cJ.indexOf("\0"),
          FJ = cJ.slice(0, ZJ),
          UJ = cJ.slice(ZJ + 1);
        JJ.hasEdge(FJ, UJ) && JJ.removeEdge(FJ, UJ)
      })), XJ.forEach((cJ => {
        let {
          clusterId: ZJ,
          subgraph: FJ,
          bounds: UJ,
          removedNodes: eJ,
          removedEdges: XJ
        } = cJ;
        var AJ, qJ;
        let jJ = JJ.node(ZJ),
          YJ = null != (AJ = null == jJ ? void 0 : jJ.x) ? AJ : 0,
          hJ = null != (qJ = null == jJ ? void 0 : jJ.y) ? qJ : 0,
          DJ = (UJ.minX + UJ.maxX) / 2,
          sJ = (UJ.Ze + UJ.Fe) / 2;
        eJ.forEach((cJ => {
          let {
            id: ZJ,
            node: FJ,
            parent: UJ
          } = cJ;
          JJ.setNode(ZJ, FJ), void 0 !== UJ && JJ.setParent(ZJ, UJ)
        })), XJ.forEach((cJ => {
          let {
            edge: ZJ,
            label: FJ
          } = cJ;
          JJ.setEdge(ZJ, FJ)
        })), FJ.nodes().forEach((cJ => {
          if (cJ === ZJ) return;
          let UJ = FJ.node(cJ),
            eJ = JJ.node(cJ);
          eJ && UJ && "number" == typeof UJ.x && "number" == typeof UJ.y && (eJ.x = YJ + (UJ.x - DJ), eJ.y = hJ + (UJ.y - sJ))
        })), delete jJ._dagreClusterSubgraph
      })), UJ.forEach((cJ => {
        var ZJ, FJ;
        let UJ = JJ.node(cJ),
          XJ = eJ[cJ];
        if (UJ && UJ.rankdir && UJ._dagreClusterSubgraph && XJ) {
          let eJ = UJ._dagreClusterSubgraph,
            AJ = null != (ZJ = UJ.x) ? ZJ : 0,
            qJ = null != (FJ = UJ.y) ? FJ : 0,
            jJ = (XJ.minX + XJ.maxX) / 2,
            YJ = (XJ.Ze + XJ.Fe) / 2;
          eJ.nodes().forEach((ZJ => {
            if (ZJ === cJ) return;
            let FJ = eJ.node(ZJ),
              UJ = JJ.node(ZJ);
            if (UJ && FJ && "number" == typeof FJ.x && "number" == typeof FJ.y) {
              let JJ = FJ.x - jJ,
                cJ = FJ.y - YJ;
              UJ.x = AJ + JJ, UJ.y = qJ + cJ
            }
          })), delete UJ._dagreClusterSubgraph
        }
      }))
    }

    function fZ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var UJ, eJ;
      let XJ = !1 !== (null == ZJ ? void 0 : ZJ.useDynamic),
        AJ = XJ && null != (UJ = null == FJ ? void 0 : FJ.graph) ? UJ : null,
        qJ = XJ && null != (eJ = null == FJ ? void 0 : FJ.rawNodes) ? eJ : null;
      cJ("    makeSpaceForEdgeLabels", (() => function(JJ) {
        let cJ = JJ.graph();
        cJ.ranksep /= 2, JJ.edges().forEach((ZJ => {
          var FJ;
          let UJ = JJ.edge(ZJ);
          UJ.minlen *= 2, "c" !== (null != (FJ = UJ.labelpos) ? FJ : "r").toLowerCase() && ("TB" === cJ.rankdir || "BT" === cJ.rankdir ? UJ.width += UJ.labeloffset : UJ.height += UJ.labeloffset)
        }))
      }(JJ))), cJ("    removeSelfEdges", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          if (cJ.v === cJ.w) {
            let ZJ = JJ.node(cJ.v);
            ZJ.selfEdges || (ZJ.selfEdges = []), ZJ.selfEdges.push({
              e: cJ,
              label: JJ.edge(cJ)
            }), JJ.removeEdge(cJ)
          }
        }))
      }(JJ))), cJ("    acyclic", (() => sc(JJ, AJ))), cJ("    nestingGraph.run", (() => dc(JJ))), cJ("    rank", (() => Hc(TJ(JJ)))), cJ("    injectEdgeLabelProxies", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          let ZJ = JJ.edge(cJ);
          if (ZJ.width && ZJ.height) {
            let ZJ = JJ.node(cJ.v),
              FJ = {
                rank: (JJ.node(cJ.w).rank - ZJ.rank) / 2 + ZJ.rank,
                e: cJ
              };
            OJ(JJ, "edge-proxy", FJ, "_ep")
          }
        }))
      }(JJ))), cJ("    removeEmptyRanks", (() => function(JJ) {
        let cJ = JJ.nodes().map((cJ => JJ.node(cJ).rank)).filter((JJ => void 0 !== JJ)),
          ZJ = LJ(Math.min, cJ),
          FJ = [];
        JJ.nodes().forEach((cJ => {
          let UJ = JJ.node(cJ).rank - ZJ;
          FJ[UJ] || (FJ[UJ] = []), FJ[UJ].push(cJ)
        }));
        let UJ = 0,
          eJ = JJ.graph().nodeRankFactor;
        Array.from(FJ).forEach(((cJ, ZJ) => {
          void 0 === cJ && ZJ % eJ !== 0 ? --UJ : void 0 !== cJ && UJ && cJ.forEach((cJ => JJ.node(cJ).rank += UJ))
        }))
      }(JJ))), cJ("    nestingGraph.cleanup", (() => function(JJ) {
        let cJ = JJ.graph();
        JJ.removeNode(cJ.nestingRoot), delete cJ.nestingRoot, JJ.edges().forEach((cJ => {
          JJ.edge(cJ).nestingEdge && JJ.removeEdge(cJ)
        }))
      }(JJ))), cJ("    normalizeRanks", (() => function(JJ) {
        let cJ = JJ.nodes().map((cJ => {
            let ZJ = JJ.node(cJ).rank;
            return void 0 === ZJ ? Number.MAX_VALUE : ZJ
          })),
          ZJ = LJ(Math.min, cJ);
        JJ.nodes().forEach((cJ => {
          let FJ = JJ.node(cJ);
          Object.hasOwn(FJ, "rank") && (FJ.rank -= ZJ)
        }))
      }(JJ))), cJ("    assignRankMinMax", (() => function(JJ) {
        let cJ = 0;
        JJ.nodes().forEach((ZJ => {
          let FJ = JJ.node(ZJ);
          FJ.borderTop && (FJ.minRank = JJ.node(FJ.borderTop).rank, FJ.maxRank = JJ.node(FJ.borderBottom).rank, cJ = Math.max(cJ, FJ.maxRank))
        })), JJ.graph().maxRank = cJ
      }(JJ))), cJ("    removeEdgeLabelProxies", (() => function(JJ) {
        JJ.nodes().forEach((cJ => {
          let ZJ = JJ.node(cJ);
          if ("edge-proxy" === ZJ.dummy) {
            let FJ = ZJ;
            JJ.edge(FJ.e).labelRank = ZJ.rank, JJ.removeNode(cJ)
          }
        }))
      }(JJ))), cJ("    normalize.run", (() => nc(JJ))), cJ("    parentDummyChains", (() => pc(JJ))), cJ("    addBorderSegments", (() => Nc(JJ))), cJ("    order", (() => ZZ(JJ, ZJ, qJ))), cJ("    insertSelfEdges", (() => function(JJ) {
        uJ(JJ).forEach((cJ => {
          let ZJ = 0;
          cJ.forEach(((cJ, FJ) => {
            let UJ = JJ.node(cJ);
            "number" != typeof UJ.rank && (UJ.rank = 0), UJ.order = FJ + ZJ, (UJ.selfEdges || []).forEach((cJ => {
              OJ(JJ, "selfedge", {
                width: cJ.label.width,
                height: cJ.label.height,
                rank: UJ.rank,
                order: FJ + ++ZJ,
                e: cJ.e,
                edgeLabel: cJ.label
              }, "_se"), (!Array.isArray(cJ.label.points) || 7 !== cJ.label.points.length) && (cJ.label.points = [{
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
            })), delete UJ.selfEdges
          }))
        }))
      }(JJ))), cJ("    adjustCoordinateSystem", (() => function(JJ) {
        var cJ;
        let ZJ = null == (cJ = JJ.graph().rankdir) ? void 0 : cJ.toLowerCase();
        ("lr" === ZJ || "rl" === ZJ) && Cc(JJ)
      }(JJ))), cJ("    position", (() => hZ(JJ, ZJ.corePath))), cJ("    positionSelfEdges", (() => function(JJ) {
        JJ.nodes().forEach((cJ => {
          let ZJ = JJ.node(cJ),
            FJ = JJ => "number" == typeof JJ && isFinite(JJ);
          if ("selfedge" === ZJ.dummy) {
            let UJ = ZJ,
              eJ = JJ.node(UJ.e.v),
              XJ = FJ(null == eJ ? void 0 : eJ.x) ? eJ.x : 0,
              AJ = FJ(null == eJ ? void 0 : eJ.y) ? eJ.y : 0,
              qJ = FJ(null == eJ ? void 0 : eJ.width) ? eJ.width : 0,
              jJ = FJ(null == eJ ? void 0 : eJ.height) ? eJ.height : 0,
              YJ = FJ(ZJ.x) ? ZJ.x : XJ,
              hJ = FJ(ZJ.y) ? ZJ.y : AJ,
              DJ = qJ / 2,
              sJ = jJ / 2;
            UJ.edgeLabel.points = [{
              x: YJ + DJ,
              y: hJ - sJ
            }, {
              x: YJ + DJ,
              y: hJ - sJ
            }, {
              x: YJ,
              y: hJ
            }, {
              x: YJ - DJ,
              y: hJ + sJ
            }, {
              x: YJ - DJ,
              y: hJ + sJ
            }, {
              x: YJ,
              y: hJ
            }, {
              x: YJ,
              y: hJ
            }], UJ.edgeLabel.x = YJ, UJ.edgeLabel.y = hJ, JJ.setEdge(UJ.e, UJ.edgeLabel), JJ.removeNode(cJ)
          } else ZJ && Array.isArray(ZJ.selfEdges) && ZJ.selfEdges.forEach((JJ => {
            if (!Array.isArray(JJ.label.points) || 7 !== JJ.label.points.length) {
              let cJ = FJ(ZJ.x) ? ZJ.x : 0,
                UJ = FJ(ZJ.y) ? ZJ.y : 0,
                eJ = (FJ(ZJ.width) ? ZJ.width : 0) / 2,
                XJ = (FJ(ZJ.height) ? ZJ.height : 0) / 2;
              JJ.label.points = [{
                x: cJ + eJ,
                y: UJ - XJ
              }, {
                x: cJ + eJ,
                y: UJ - XJ
              }, {
                x: cJ,
                y: UJ
              }, {
                x: cJ - eJ,
                y: UJ + XJ
              }, {
                x: cJ - eJ,
                y: UJ + XJ
              }, {
                x: cJ,
                y: UJ
              }, {
                x: cJ,
                y: UJ
              }]
            }
          }))
        }))
      }(JJ)));
      let jJ = JSON.parse(JSON.stringify(JJ._nodes));
      return cJ("    removeBorderNodes", (() => function(JJ) {
        JJ.nodes().forEach((cJ => {
          if (JJ.children(cJ).length) {
            let ZJ = JJ.node(cJ),
              FJ = JJ.node(ZJ.borderTop),
              UJ = JJ.node(ZJ.borderBottom),
              eJ = JJ.node(ZJ.borderLeft[ZJ.borderLeft.length - 1]),
              XJ = JJ.node(ZJ.borderRight[ZJ.borderRight.length - 1]);
            ZJ.width = Math.abs(XJ.x - eJ.x), ZJ.height = Math.abs(UJ.y - FJ.y), ZJ.x = eJ.x + ZJ.width / 2, ZJ.y = FJ.y + ZJ.height / 2
          }
        })), JJ.nodes().forEach((cJ => {
          "border" === JJ.node(cJ).dummy && JJ.removeNode(cJ)
        }))
      }(JJ))), cJ("    normalize.undo", (() => function(JJ) {
        JJ.graph().dummyChains.forEach((cJ => {
          let ZJ, FJ = JJ.node(cJ),
            UJ = FJ.edgeLabel;
          for (JJ.setEdge(FJ.edgeObj, UJ); FJ.dummy;) ZJ = JJ.successors(cJ)[0], JJ.removeNode(cJ), UJ.points.push({
            x: FJ.x,
            y: FJ.y
          }), "edge-label" === FJ.dummy && (UJ.x = FJ.x, UJ.y = FJ.y, UJ.width = FJ.width, UJ.height = FJ.height), cJ = ZJ, FJ = JJ.node(cJ)
        }))
      }(JJ))), cJ("    fixupEdgeLabelCoords", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          let ZJ = JJ.edge(cJ);
          if (Object.hasOwn(ZJ, "x")) switch (("l" === ZJ.labelpos || "r" === ZJ.labelpos) && (ZJ.width -= ZJ.labeloffset), ZJ.labelpos) {
            case "l":
              ZJ.x -= ZJ.width / 2 + ZJ.labeloffset;
              break;
            case "r":
              ZJ.x += ZJ.width / 2 + ZJ.labeloffset
          }
        }))
      }(JJ))), cJ("    undoCoordinateSystem", (() => Tc(JJ))), cJ("    translateGraph", (() => function(JJ) {
        let cJ = Number.POSITIVE_INFINITY,
          ZJ = 0,
          FJ = Number.POSITIVE_INFINITY,
          UJ = 0,
          eJ = JJ.graph(),
          XJ = eJ.marginx || 0,
          AJ = eJ.marginy || 0;

        function qJ(JJ) {
          let eJ = JJ.x,
            XJ = JJ.y,
            AJ = JJ.width,
            qJ = JJ.height;
          cJ = Math.min(cJ, eJ - AJ / 2), ZJ = Math.max(ZJ, eJ + AJ / 2), FJ = Math.min(FJ, XJ - qJ / 2), UJ = Math.max(UJ, XJ + qJ / 2)
        }
        JJ.nodes().forEach((cJ => qJ(JJ.node(cJ)))), JJ.edges().forEach((cJ => {
          let ZJ = JJ.edge(cJ);
          Object.hasOwn(ZJ, "x") && qJ(ZJ)
        })), cJ -= XJ, FJ -= AJ, JJ.nodes().forEach((ZJ => {
          let UJ = JJ.node(ZJ);
          UJ.x -= cJ, UJ.y -= FJ
        })), JJ.edges().forEach((ZJ => {
          let UJ = JJ.edge(ZJ);
          UJ.points.forEach((JJ => {
            JJ.x -= cJ, JJ.y -= FJ
          })), Object.hasOwn(UJ, "x") && (UJ.x -= cJ), Object.hasOwn(UJ, "y") && (UJ.y -= FJ)
        })), eJ.width = ZJ - cJ + XJ, eJ.height = UJ - FJ + AJ
      }(JJ))), cJ("    assignNodeIntersects", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          if (cJ.v === cJ.w) return;
          let ZJ, FJ, UJ = JJ.edge(cJ),
            eJ = JJ.node(cJ.v),
            XJ = JJ.node(cJ.w);
          UJ.points ? (ZJ = UJ.points[0], FJ = UJ.points[UJ.points.length - 1]) : (UJ.points = [], ZJ = XJ, FJ = eJ), UJ.points.unshift(CJ(eJ, ZJ)), UJ.points.push(CJ(XJ, FJ))
        }))
      }(JJ))), cJ("    reversePoints", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          let ZJ = JJ.edge(cJ);
          ZJ.reversed && ZJ.points.reverse()
        }))
      }(JJ))), cJ("    acyclic.undo", (() => function(JJ) {
        JJ.edges().forEach((cJ => {
          let ZJ = JJ.edge(cJ);
          if (ZJ.reversed) {
            JJ.removeEdge(cJ);
            let FJ = ZJ.forwardName;
            delete ZJ.reversed, delete ZJ.forwardName, JJ.setEdge(cJ.w, cJ.v, ZJ, FJ)
          }
        }))
      }(JJ))), {
        graph: JJ,
        rawNodes: jJ
      }
    }

    function xZ(JJ, cJ) {
      JJ.nodes().forEach((ZJ => {
        let FJ = JJ.node(ZJ),
          UJ = cJ.node(ZJ);
        FJ && (FJ.x = UJ.x, FJ.y = UJ.y, FJ.order = UJ.order, FJ.rank = UJ.rank, cJ.children(ZJ).length && (FJ.width = UJ.width, FJ.height = UJ.height))
      })), JJ.edges().forEach((ZJ => {
        let FJ = JJ.edge(ZJ),
          UJ = cJ.edge(ZJ);
        FJ.points = UJ.points, Object.hasOwn(UJ, "x") && (FJ.x = UJ.x, FJ.y = UJ.y)
      })), JJ.graph().width = cJ.graph().width, JJ.graph().height = cJ.graph().height
    }
    var rZ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      vZ = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      mZ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      QZ = ["width", "height", "rank"],
      EZ = {
        width: 0,
        height: 0
      },
      VZ = ["minlen", "weight", "width", "height", "labeloffset"],
      KZ = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      yZ = ["labelpos"];

    function SZ(JJ) {
      let cJ = new NJ({
          multigraph: !0,
          compound: !0
        }),
        ZJ = MZ(JJ.graph());
      return cJ.setGraph(Object.assign({}, vZ, IZ(ZJ, rZ), cc(ZJ, mZ))), JJ.nodes().forEach((ZJ => {
        let FJ = IZ(MZ(JJ.node(ZJ)), QZ);
        Object.keys(EZ).forEach((JJ => {
          void 0 === FJ[JJ] && (FJ[JJ] = EZ[JJ])
        })), cJ.setNode(ZJ, FJ);
        let UJ = JJ.parent(ZJ);
        void 0 !== UJ && cJ.setParent(ZJ, UJ)
      })), JJ.edges().forEach((ZJ => {
        let FJ = MZ(JJ.edge(ZJ));
        cJ.setEdge(ZJ, Object.assign({}, KZ, IZ(FJ, VZ), cc(FJ, yZ)))
      })), cJ
    }

    function IZ(JJ, cJ) {
      return Zc(cc(JJ, cJ), Number)
    }

    function MZ(JJ) {
      let cJ = {};
      return JJ && Object.entries(JJ).forEach((JJ => {
        let [ZJ, FJ] = JJ;
        "string" == typeof ZJ && (ZJ = ZJ.toLowerCase()), cJ[ZJ] = FJ
      })), cJ
    }

    function bZ(JJ) {
      let cJ = uJ(JJ),
        ZJ = new NJ({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return JJ.nodes().forEach((cJ => {
        ZJ.setNode(cJ, {
          label: cJ
        }), ZJ.setParent(cJ, "layer" + JJ.node(cJ).rank)
      })), JJ.edges().forEach((JJ => ZJ.setEdge(JJ.v, JJ.w, {}, JJ.name))), cJ.forEach(((JJ, cJ) => {
        let FJ = "layer" + cJ;
        ZJ.setNode(FJ, {
          rank: "same"
        }), JJ.reduce(((JJ, cJ) => (ZJ.setEdge(JJ, cJ, {
          style: "invis"
        }), cJ)))
      })), ZJ
    }
    var wZ = {
        time: BJ,
        notime: tJ
      },
      WZ = {
        graphlib: eJ,
        version: ec,
        layout: sZ,
        debug: bZ,
        util: {
          time: BJ,
          notime: tJ
        }
      }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);