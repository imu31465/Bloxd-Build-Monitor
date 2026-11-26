/*! For license information please see fecih8.131.68fefb54.chunk.js.LICENSE.txt */
export const id = 131;
export const ids = [131];
export const modules = {
  7025: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Graph: () => vU,
      debug: () => wz,
      default: () => Oz,
      graphlib: () => QU,
      layout: () => Iz,
      util: () => qz,
      version: () => QX
    });
    var cU = Object.defineProperty,
      yU = (UU, XU, zU) => ((UU, XU, zU) => XU in UU ? cU(UU, XU, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: zU
      }) : UU[XU] = zU)(UU, "symbol" != typeof XU ? XU + "" : XU, zU),
      QU = {};
    ((UU, XU) => {
      for (var zU in XU) cU(UU, zU, {
        get: XU[zU],
        enumerable: !0
      })
    })(QU, {
      Graph: () => vU,
      alg: () => gU
    });
    var AU = Object.defineProperty,
      FU = (UU, XU) => {
        for (var zU in XU) AU(UU, zU, {
          get: XU[zU],
          enumerable: !0
        })
      },
      oU = class {
        constructor(UU) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, UU && (this._isDirected = !("directed" in UU) || UU.directed, this._isMultigraph = "multigraph" in UU && UU.multigraph, this._isCompound = "compound" in UU && UU.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(UU) {
          return this._label = UU, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(UU) {
          return this._defaultNodeLabelFn = "function" != typeof UU ? () => UU : UU, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((UU => 0 === Object.keys(this._in[UU]).length))
        }
        sinks() {
          return this.nodes().filter((UU => 0 === Object.keys(this._out[UU]).length))
        }
        setNodes(UU, XU) {
          return UU.forEach((UU => {
            void 0 !== XU ? this.setNode(UU, XU) : this.setNode(UU)
          })), this
        }
        setNode(UU, XU) {
          return UU in this._nodes ? (arguments.length > 1 && (this._nodes[UU] = XU), this) : (this._nodes[UU] = arguments.length > 1 ? XU : this._defaultNodeLabelFn(UU), this._isCompound && (this._parent[UU] = "\0", this._children[UU] = {}, this._children["\0"][UU] = !0), this._in[UU] = {}, this._preds[UU] = {}, this._out[UU] = {}, this._sucs[UU] = {}, ++this._nodeCount, this)
        }
        node(UU) {
          return this._nodes[UU]
        }
        hasNode(UU) {
          return UU in this._nodes
        }
        removeNode(UU) {
          if (UU in this._nodes) {
            let XU = UU => this.removeEdge(this._edgeObjs[UU]);
            delete this._nodes[UU], this._isCompound && (this._removeFromParentsChildList(UU), delete this._parent[UU], this.children(UU).forEach((UU => {
              this.setParent(UU)
            })), delete this._children[UU]), Object.keys(this._in[UU]).forEach(XU), delete this._in[UU], delete this._preds[UU], Object.keys(this._out[UU]).forEach(XU), delete this._out[UU], delete this._sucs[UU], --this._nodeCount
          }
          return this
        }
        setParent(UU, XU) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === XU) XU = "\0";
          else {
            for (let zU = XU += ""; void 0 !== zU; zU = this.parent(zU))
              if (zU === UU) throw new Error("Setting " + XU + " as parent of " + UU + " would create a cycle");
            this.setNode(XU)
          }
          return this.setNode(UU), this._removeFromParentsChildList(UU), this._parent[UU] = XU, this._children[XU][UU] = !0, this
        }
        parent(UU) {
          if (this._isCompound) {
            let XU = this._parent[UU];
            if ("\0" !== XU) return XU
          }
        }
        children() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let XU = this._children[UU];
            if (XU) return Object.keys(XU)
          } else {
            if ("\0" === UU) return this.nodes();
            if (this.hasNode(UU)) return []
          }
          return []
        }
        predecessors(UU) {
          let XU = this._preds[UU];
          if (XU) return Object.keys(XU)
        }
        successors(UU) {
          let XU = this._sucs[UU];
          if (XU) return Object.keys(XU)
        }
        neighbors(UU) {
          let XU = this.predecessors(UU);
          if (XU) {
            let zU = new Set(XU),
              cU = this.successors(UU);
            if (cU)
              for (let UU of cU) zU.add(UU);
            return Array.from(zU.values())
          }
        }
        isLeaf(UU) {
          var XU;
          let zU;
          return zU = this.isDirected() ? this.successors(UU) : this.neighbors(UU), 0 === (null != (XU = null == zU ? void 0 : zU.length) ? XU : 0)
        }
        filterNodes(UU) {
          let XU = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          XU.setGraph(this.graph()), Object.entries(this._nodes).forEach((zU => {
            let [cU, yU] = zU;
            UU(cU) && XU.setNode(cU, yU)
          })), Object.values(this._edgeObjs).forEach((UU => {
            XU.hasNode(UU.v) && XU.hasNode(UU.w) && XU.setEdge(UU, this.edge(UU))
          }));
          let zU = {},
            cU = UU => {
              let yU = this.parent(UU);
              return !yU || XU.hasNode(yU) ? (zU[UU] = yU, yU) : yU in zU ? zU[yU] : cU(yU)
            };
          return this._isCompound && XU.nodes().forEach((UU => XU.setParent(UU, cU(UU)))), XU
        }
        setDefaultEdgeLabel(UU) {
          return this._defaultEdgeLabelFn = "function" != typeof UU ? () => UU : UU, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(UU, XU) {
          return UU.reduce(((UU, zU) => (void 0 !== XU ? this.setEdge(UU, zU, XU) : this.setEdge(UU, zU), zU))), this
        }
        setEdge(UU, XU, zU, cU) {
          let yU, QU, AU, FU, oU = !1;
          "object" == typeof UU && null !== UU && "v" in UU ? (yU = UU.v, QU = UU.w, AU = UU.name, 2 === arguments.length && (FU = XU, oU = !0)) : (yU = UU, QU = XU, AU = cU, arguments.length > 2 && (FU = zU, oU = !0)), yU = "" + yU, QU = "" + QU, void 0 !== AU && (AU = "" + AU);
          let EU = YU(this._isDirected, yU, QU, AU);
          if (EU in this._edgeLabels) return oU && (this._edgeLabels[EU] = FU), this;
          if (void 0 !== AU && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(yU), this.setNode(QU), this._edgeLabels[EU] = oU ? FU : this._defaultEdgeLabelFn(yU, QU, AU);
          let NU = function(UU, XU, zU, cU) {
            let yU = "" + XU,
              QU = "" + zU;
            if (!UU && yU > QU) {
              let UU = yU;
              yU = QU, QU = UU
            }
            let AU = {
              v: yU,
              w: QU
            };
            return cU && (AU.name = cU), AU
          }(this._isDirected, yU, QU, AU);
          return yU = NU.v, QU = NU.w, Object.freeze(NU), this._edgeObjs[EU] = NU, DU(this._preds[QU], yU), DU(this._sucs[yU], QU), this._in[QU][EU] = NU, this._out[yU][EU] = NU, this._edgeCount++, this
        }
        edge(UU, XU, zU) {
          let cU = 1 === arguments.length ? NU(this._isDirected, UU) : YU(this._isDirected, UU, XU, zU);
          return this._edgeLabels[cU]
        }
        edgeAsObj(UU, XU, zU) {
          let cU = 1 === arguments.length ? this.edge(UU) : this.edge(UU, XU, zU);
          return "object" != typeof cU || null === cU ? {
            label: cU
          } : cU
        }
        hasEdge(UU, XU, zU) {
          return (1 === arguments.length ? NU(this._isDirected, UU) : YU(this._isDirected, UU, XU, zU)) in this._edgeLabels
        }
        removeEdge(UU, XU, zU) {
          let cU = 1 === arguments.length ? NU(this._isDirected, UU) : YU(this._isDirected, UU, XU, zU),
            yU = this._edgeObjs[cU];
          if (yU) {
            let UU = yU.v,
              XU = yU.w;
            delete this._edgeLabels[cU], delete this._edgeObjs[cU], EU(this._preds[XU], UU), EU(this._sucs[UU], XU), delete this._in[XU][cU], delete this._out[UU][cU], this._edgeCount--
          }
          return this
        }
        inEdges(UU, XU) {
          return this.isDirected() ? this.filterEdges(this._in[UU], UU, XU) : this.nodeEdges(UU, XU)
        }
        outEdges(UU, XU) {
          return this.isDirected() ? this.filterEdges(this._out[UU], UU, XU) : this.nodeEdges(UU, XU)
        }
        nodeEdges(UU, XU) {
          if (UU in this._nodes) return this.filterEdges({
            ...this._in[UU],
            ...this._out[UU]
          }, UU, XU)
        }
        _removeFromParentsChildList(UU) {
          delete this._children[this._parent[UU]][UU]
        }
        filterEdges(UU, XU, zU) {
          if (!UU) return;
          let cU = Object.values(UU);
          return zU ? cU.filter((UU => UU.v === XU && UU.w === zU || UU.v === zU && UU.w === XU)) : cU
        }
      };

    function DU(UU, XU) {
      UU[XU] ? UU[XU]++ : UU[XU] = 1
    }

    function EU(UU, XU) {
      void 0 !== UU[XU] && !--UU[XU] && delete UU[XU]
    }

    function YU(UU, XU, zU, cU) {
      let yU = "" + XU,
        QU = "" + zU;
      if (!UU && yU > QU) {
        let UU = yU;
        yU = QU, QU = UU
      }
      return yU + "\x01" + QU + "\x01" + (void 0 === cU ? "\0" : cU)
    }

    function NU(UU, XU) {
      return YU(UU, XU.v, XU.w, XU.name)
    }

    function IU(UU) {
      let XU = {
          options: {
            directed: UU.isDirected(),
            multigraph: UU.isMultigraph(),
            compound: UU.isCompound()
          },
          nodes: pU(UU),
          edges: aU(UU)
        },
        zU = UU.graph();
      return void 0 !== zU && (XU.value = structuredClone(zU)), XU
    }

    function pU(UU) {
      return UU.nodes().map((XU => {
        let zU = UU.node(XU),
          cU = UU.parent(XU),
          yU = {
            v: XU
          };
        return void 0 !== zU && (yU.value = zU), void 0 !== cU && (yU.parent = cU), yU
      }))
    }

    function aU(UU) {
      return UU.edges().map((XU => {
        let zU = UU.edge(XU),
          cU = {
            v: XU.v,
            w: XU.w
          };
        return void 0 !== XU.name && (cU.name = XU.name), void 0 !== zU && (cU.value = zU), cU
      }))
    }

    function tU(UU) {
      let XU = new oU(UU.options);
      return void 0 !== UU.value && XU.setGraph(UU.value), UU.nodes.forEach((UU => {
        XU.setNode(UU.v, UU.value), UU.parent && XU.setParent(UU.v, UU.parent)
      })), UU.edges.forEach((UU => {
        XU.setEdge({
          v: UU.v,
          w: UU.w,
          name: UU.name
        }, UU.value)
      })), XU
    }
    FU({}, {
      read: () => tU,
      write: () => IU
    });
    var gU = {};
    FU(gU, {
      CycleException: () => wU,
      bellmanFord: () => GU,
      components: () => BU,
      dijkstra: () => PU,
      dijkstraAll: () => WU,
      findCycles: () => LU,
      floydWarshall: () => CU,
      isAcyclic: () => OU,
      postorder: () => fU,
      preorder: () => iU,
      prim: () => HU,
      shortestPaths: () => MU,
      tarjan: () => dU,
      topsort: () => qU
    });
    var kU = () => 1;

    function GU(UU, XU, zU, cU) {
      return function(UU, XU, zU, cU) {
        let yU, QU = {},
          AU = 0,
          FU = UU.nodes(),
          oU = function(UU) {
            let XU = QU[UU.v],
              cU = QU[UU.w];
            if (!XU || !cU) return;
            let AU = zU(UU);
            XU.distance + AU < cU.distance && (QU[UU.w] = {
              distance: XU.distance + AU,
              predecessor: UU.v
            }, yU = !0)
          },
          DU = function() {
            FU.forEach((function(UU) {
              cU(UU).forEach((function(XU) {
                let zU = XU.v === UU ? XU.v : XU.w,
                  cU = zU === XU.v ? XU.w : XU.v;
                oU({
                  v: zU,
                  w: cU
                })
              }))
            }))
          };
        FU.forEach((function(UU) {
          let zU = UU === XU ? 0 : Number.POSITIVE_INFINITY;
          QU[UU] = {
            distance: zU,
            predecessor: ""
          }
        }));
        let EU = FU.length;
        for (let YU = 1; YU < EU && (yU = !1, AU++, DU(), yU); YU++);
        if (AU === EU - 1 && (yU = !1, DU(), yU)) throw new Error("The graph contains a negative weight cycle");
        return QU
      }(UU, String(XU), zU || kU, cU || function(XU) {
        var zU;
        return null != (zU = UU.outEdges(XU)) ? zU : []
      })
    }

    function BU(UU) {
      let XU, zU = {},
        cU = [];

      function yU(cU) {
        var QU, AU;
        cU in zU || (zU[cU] = !0, XU.push(cU), null == (QU = UU.successors(cU)) || QU.forEach(yU), null == (AU = UU.predecessors(cU)) || AU.forEach(yU))
      }
      return UU.nodes().forEach((function(UU) {
        XU = [], yU(UU), XU.length && cU.push(XU)
      })), cU
    }
    var ZU = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((UU => UU.key))
        }
        has(UU) {
          return UU in this._keyIndices
        }
        priority(UU) {
          let XU = this._keyIndices[UU];
          if (void 0 !== XU) return this._arr[XU].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(UU, XU) {
          let zU = this._keyIndices,
            cU = String(UU);
          if (!(cU in zU)) {
            let UU = this._arr,
              yU = UU.length;
            return zU[cU] = yU, UU.push({
              key: cU,
              priority: XU
            }), this._decrease(yU), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let UU = this._arr.pop();
          return delete this._keyIndices[UU.key], this._heapify(0), UU.key
        }
        decrease(UU, XU) {
          let zU = this._keyIndices[UU];
          if (void 0 === zU) throw new Error(`Key not found: ${UU}`);
          let cU = this._arr[zU].priority;
          if (XU > cU) throw new Error(`New priority is greater than current priority. Key: ${UU} Old: ${cU} New: ${XU}`);
          this._arr[zU].priority = XU, this._decrease(zU)
        }
        _heapify(UU) {
          let XU = this._arr,
            zU = 2 * UU,
            cU = zU + 1,
            yU = UU;
          zU < XU.length && (yU = XU[zU].priority < XU[yU].priority ? zU : yU, cU < XU.length && (yU = XU[cU].priority < XU[yU].priority ? cU : yU), yU !== UU && (this._swap(UU, yU), this._heapify(yU)))
        }
        _decrease(UU) {
          let XU, zU = this._arr,
            cU = zU[UU].priority;
          for (; 0 !== UU && (XU = UU >> 1, !(zU[XU].priority < cU));) this._swap(UU, XU), UU = XU
        }
        _swap(UU, XU) {
          let zU = this._arr,
            cU = this._keyIndices,
            yU = zU[UU],
            QU = zU[XU];
          zU[UU] = QU, zU[XU] = yU, cU[QU.key] = UU, cU[yU.key] = XU
        }
      },
      RU = () => 1;

    function PU(UU, XU, zU, cU) {
      return function(UU, XU, zU, cU) {
        let yU, QU, AU = {},
          FU = new ZU,
          oU = function(UU) {
            let XU = UU.v !== yU ? UU.v : UU.w,
              cU = AU[XU];
            if (!cU) return;
            let oU = zU(UU),
              DU = QU.distance + oU;
            if (oU < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + UU + " Weight: " + oU);
            DU < cU.distance && (cU.distance = DU, cU.predecessor = yU, FU.decrease(XU, DU))
          };
        for (UU.nodes().forEach((function(UU) {
            let zU = UU === XU ? 0 : Number.POSITIVE_INFINITY;
            AU[UU] = {
              distance: zU,
              predecessor: ""
            }, FU.add(UU, zU)
          })); FU.size() > 0;) {
          yU = FU.removeMin();
          let UU = AU[yU];
          if (!UU || UU.distance === Number.POSITIVE_INFINITY) break;
          QU = UU, cU(yU).forEach(oU)
        }
        return AU
      }(UU, String(XU), zU || RU, cU || function(XU) {
        var zU;
        return null != (zU = UU.outEdges(XU)) ? zU : []
      })
    }

    function WU(UU, XU, zU) {
      return UU.nodes().reduce((function(cU, yU) {
        return cU[yU] = PU(UU, yU, XU, zU), cU
      }), {})
    }

    function dU(UU) {
      let XU = 0,
        zU = [],
        cU = {},
        yU = [];

      function QU(AU) {
        var FU;
        let oU = cU[AU] = {
          onStack: !0,
          lowlink: XU,
          index: XU++
        };
        if (zU.push(AU), null == (FU = UU.successors(AU)) || FU.forEach((function(UU) {
            if (UU in cU) {
              let XU = cU[UU];
              null != XU && XU.onStack && (oU.lowlink = Math.min(oU.lowlink, XU.index))
            } else {
              QU(UU);
              let XU = cU[UU];
              XU && (oU.lowlink = Math.min(oU.lowlink, XU.lowlink))
            }
          })), oU.lowlink === oU.index) {
          let UU, XU = [];
          do {
            UU = zU.pop();
            let yU = cU[UU];
            yU && (yU.onStack = !1), XU.push(UU)
          } while (AU !== UU);
          yU.push(XU)
        }
      }
      return UU.nodes().forEach((function(UU) {
        UU in cU || QU(UU)
      })), yU
    }

    function LU(UU) {
      return dU(UU).filter((function(XU) {
        var zU;
        let cU = XU[0];
        return !!cU && (XU.length > 1 || 1 === XU.length && (null != (zU = UU.outEdges(cU, cU)) ? zU : []).length > 0)
      }))
    }
    var eU = () => 1;

    function CU(UU, XU, zU) {
      return function(UU, XU, zU) {
        let cU = {},
          yU = UU.nodes();
        return yU.forEach((function(UU) {
          let QU = {};
          cU[UU] = QU, QU[UU] = {
            distance: 0,
            predecessor: ""
          }, yU.forEach((function(XU) {
            UU !== XU && (QU[XU] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), zU(UU).forEach((function(zU) {
            let cU = zU.v === UU ? zU.w : zU.v,
              yU = XU(zU);
            QU[cU] = {
              distance: yU,
              predecessor: UU
            }
          }))
        })), yU.forEach((function(UU) {
          let XU = cU[UU];
          XU && yU.forEach((function(zU) {
            let QU = cU[zU];
            QU && yU.forEach((function(zU) {
              let cU = QU[UU],
                yU = XU[zU],
                AU = QU[zU];
              if (cU && yU && AU) {
                let UU = cU.distance + yU.distance;
                UU < AU.distance && (AU.distance = UU, AU.predecessor = yU.predecessor)
              }
            }))
          }))
        })), cU
      }(UU, XU || eU, zU || function(XU) {
        var zU;
        return null != (zU = UU.outEdges(XU)) ? zU : []
      })
    }
    var wU = class extends Error {
      constructor(UU) {
        super(UU), this.name = "CycleException"
      }
    };

    function qU(UU) {
      let XU = {},
        zU = {},
        cU = [];
      if (UU.sinks().forEach((function yU(QU) {
          var AU;
          if (QU in zU) throw new wU;
          QU in XU || (zU[QU] = !0, XU[QU] = !0, null == (AU = UU.predecessors(QU)) || AU.forEach(yU), delete zU[QU], cU.push(QU))
        })), Object.keys(XU).length !== UU.nodeCount()) throw new wU;
      return cU
    }

    function OU(UU) {
      try {
        qU(UU)
      } catch (XU) {
        if (XU instanceof wU) return !1;
        throw XU
      }
      return !0
    }

    function SU(UU, XU, zU, cU, yU) {
      Array.isArray(XU) || (XU = [XU]);
      let QU = XU => {
          var zU;
          return null != (zU = UU.isDirected() ? UU.successors(XU) : UU.neighbors(XU)) ? zU : []
        },
        AU = {};
      return XU.forEach((function(XU) {
        if (!UU.hasNode(XU)) throw new Error("Graph does not have node: " + XU);
        yU = rU(UU, XU, "post" === zU, AU, QU, cU, yU)
      })), yU
    }

    function rU(UU, XU, zU, cU, yU, QU, AU) {
      return XU in cU || (cU[XU] = !0, zU || (AU = QU(AU, XU)), yU(XU).forEach((function(XU) {
        AU = rU(UU, XU, zU, cU, yU, QU, AU)
      })), zU && (AU = QU(AU, XU))), AU
    }

    function uU(UU, XU, zU) {
      return SU(UU, XU, zU, (function(UU, XU) {
        return UU.push(XU), UU
      }), [])
    }

    function fU(UU, XU) {
      return uU(UU, XU, "post")
    }

    function iU(UU, XU) {
      return uU(UU, XU, "pre")
    }

    function HU(UU, XU) {
      var zU;
      let cU, yU = new oU,
        QU = {},
        AU = new ZU;

      function FU(UU) {
        let zU = UU.v === cU ? UU.w : UU.v,
          yU = AU.priority(zU);
        if (void 0 !== yU) {
          let FU = XU(UU);
          FU < yU && (QU[zU] = cU, AU.decrease(zU, FU))
        }
      }
      if (0 === UU.nodeCount()) return yU;
      UU.nodes().forEach((function(UU) {
        AU.add(UU, Number.POSITIVE_INFINITY), yU.setNode(UU)
      }));
      let DU = UU.nodes()[0];
      void 0 !== DU && AU.decrease(DU, 0);
      let EU = !1;
      for (; AU.size() > 0;) {
        if (cU = AU.removeMin(), cU in QU) yU.setEdge(cU, QU[cU]);
        else {
          if (EU) throw new Error("Input graph is not connected: " + UU);
          EU = !0
        }
        null == (zU = UU.nodeEdges(cU)) || zU.forEach(FU)
      }
      return yU
    }

    function MU(UU, XU, zU, cU) {
      return function(UU, XU, zU, cU) {
        if (void 0 === zU) return PU(UU, XU, zU, cU);
        let yU = !1,
          QU = UU.nodes();
        for (let AU = 0; AU < QU.length; AU++) {
          let FU = QU[AU];
          if (void 0 === FU) continue;
          let oU = cU(FU);
          for (let UU = 0; UU < oU.length; UU++) {
            let XU = oU[UU];
            if (!XU) continue;
            let cU = XU.v === FU ? XU.v : XU.w;
            zU({
              v: cU,
              w: cU === XU.v ? XU.w : XU.v
            }) < 0 && (yU = !0)
          }
          if (yU) return GU(UU, XU, zU, cU)
        }
        return PU(UU, XU, zU, cU)
      }(UU, XU, zU, null != cU ? cU : XU => {
        var zU;
        return null != (zU = UU.outEdges(XU)) ? zU : []
      })
    }
    var vU = oU;

    function VU(UU, XU, zU, cU) {
      let yU = cU;
      for (; UU.hasNode(yU);) yU = hU(cU);
      return zU.dummy = XU, UU.setNode(yU, zU), yU
    }

    function sU(UU) {
      let XU = new vU({
        multigraph: UU.isMultigraph()
      }).setGraph(UU.graph());
      return UU.nodes().forEach((zU => {
        UU.children(zU).length || XU.setNode(zU, UU.node(zU))
      })), UU.edges().forEach((zU => {
        XU.setEdge(zU, UU.edge(zU))
      })), XU
    }

    function nU(UU, XU) {
      let zU, cU, yU = UU.x,
        QU = UU.y,
        AU = XU.x - yU,
        FU = XU.y - QU,
        oU = UU.width / 2,
        DU = UU.height / 2;
      if (!AU && !FU) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(FU) * oU > Math.abs(AU) * DU ? (FU < 0 && (DU = -DU), zU = DU * AU / FU, cU = DU) : (AU < 0 && (oU = -oU), zU = oU, cU = oU * FU / AU), {
        x: yU + zU,
        y: QU + cU
      }
    }

    function mU(UU) {
      let XU = UX(jU(UU) + 1).map((() => []));
      return UU.nodes().forEach((zU => {
        let cU = UU.node(zU),
          yU = cU.rank;
        void 0 !== yU && (XU[yU] || (XU[yU] = []), XU[yU][cU.order] = zU)
      })), XU
    }

    function lU(UU, XU, zU, cU) {
      let yU = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (yU.rank = zU, yU.order = cU), VU(UU, "border", yU, XU)
    }
    var xU = 65535;

    function JU(UU, XU) {
      if (XU.length > xU) {
        let zU = function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xU,
            zU = [];
          for (let cU = 0; cU < UU.length; cU += XU) {
            let yU = UU.slice(cU, cU + XU);
            zU.push(yU)
          }
          return zU
        }(XU);
        return UU(...zU.map((XU => UU(...XU))))
      }
      return UU(...XU)
    }

    function jU(UU) {
      let XU = UU.nodes().map((XU => {
        let zU = UU.node(XU).rank;
        return void 0 === zU ? Number.MIN_VALUE : zU
      }));
      return JU(Math.max, XU)
    }

    function KU(UU, XU) {
      let zU = Date.now();
      try {
        return XU()
      } finally {
        console.log(UU + " time: " + (Date.now() - zU) + "ms")
      }
    }

    function bU(UU, XU) {
      return XU()
    }
    var TU = 0;

    function hU(UU) {
      return UU + "" + ++TU
    }

    function UX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == XU && (XU = UU, UU = 0);
      let cU = UU => UU < XU;
      zU < 0 && (cU = UU => XU < UU);
      let yU = [];
      for (let QU = UU; cU(QU); QU += zU) yU.push(QU);
      return yU
    }

    function XX(UU, XU) {
      let zU = {};
      for (let cU of XU) void 0 !== UU[cU] && (zU[cU] = UU[cU]);
      return zU
    }

    function zX(UU, XU) {
      let zU;
      return zU = "string" == typeof XU ? UU => UU[XU] : XU, Object.entries(UU).reduce(((UU, XU) => {
        let [cU, yU] = XU;
        return UU[cU] = zU(yU, cU), UU
      }), {})
    }
    var cX = "\0";

    function yX(UU, XU, zU) {
      var cU, yU, QU, AU, FU, oU;
      if (!(UU && XU && zU && "edge" === XU.dummy && "edge" === zU.dummy && XU.edgeObj && zU.edgeObj && UU[XU.edgeObj.v] && UU[zU.edgeObj.v] && UU[XU.edgeObj.w] && UU[zU.edgeObj.w])) return 0;
      let DU = !0;
      XU.edgeObj.w === zU.edgeObj.w && (DU = !1);
      let EU = DU ? null != (yU = null == (cU = UU[XU.edgeObj.v]) ? void 0 : cU.rank) ? yU : NaN : null != (AU = null == (QU = UU[XU.edgeObj.w]) ? void 0 : QU.rank) ? AU : NaN,
        YU = Object.entries(UU).find((UU => {
          var zU, cU;
          return (null == (zU = UU[1].edgeObj) ? void 0 : zU.v) === XU.edgeObj.v && (null == (cU = UU[1].edgeObj) ? void 0 : cU.w) === XU.edgeObj.w && UU[1].rank === EU
        })),
        NU = Object.entries(UU).find((UU => {
          var XU, cU;
          return (null == (XU = UU[1].edgeObj) ? void 0 : XU.v) === zU.edgeObj.v && (null == (cU = UU[1].edgeObj) ? void 0 : cU.w) === zU.edgeObj.w && UU[1].rank === EU
        }));
      if (!YU || !NU) return 0;
      let IU = null != (FU = YU[1].order) ? FU : NaN,
        pU = null != (oU = NU[1].order) ? oU : NaN;
      return isNaN(IU - pU) ? 0 : IU - pU
    }
    var QX = "3.1.1";

    function AX(UU) {
      UU._prev._next = UU._next, UU._next._prev = UU._prev, delete UU._next, delete UU._prev
    }

    function FX(UU, XU) {
      if ("_next" !== UU && "_prev" !== UU) return XU
    }
    var oX = class {
        constructor() {
          yU(this, "_sentinel");
          let UU = {};
          UU._next = UU._prev = UU, this._sentinel = UU
        }
        dequeue() {
          let UU = this._sentinel,
            XU = UU._prev;
          if (XU !== UU) return AX(XU), XU
        }
        enqueue(UU) {
          let XU = this._sentinel;
          UU._prev && UU._next && AX(UU), UU._next = XU._next, XU._next._prev = UU, XU._next = UU, UU._prev = XU
        }
        toString() {
          let UU = [],
            XU = this._sentinel,
            zU = XU._prev;
          for (; zU !== XU;) UU.push(JSON.stringify(zU, FX)), zU = zU._prev;
          return "[" + UU.join(", ") + "]"
        }
      },
      DX = () => 1;

    function EX(UU, XU) {
      if (UU.nodeCount() <= 1) return [];
      let zU = function(UU, XU) {
        let zU = new vU,
          cU = 0,
          yU = 0;
        UU.nodes().forEach((UU => {
          zU.setNode(UU, {
            v: UU,
            in: 0,
            out: 0
          })
        })), UU.edges().forEach((UU => {
          let QU = zU.edge(UU.v, UU.w) || 0,
            AU = XU(UU),
            FU = QU + AU;
          zU.setEdge(UU.v, UU.w, FU);
          let oU = zU.node(UU.v),
            DU = zU.node(UU.w);
          yU = Math.max(yU, oU.out += AU), cU = Math.max(cU, DU.in += AU)
        }));
        let QU = function(UU) {
            let XU = [];
            for (let zU = 0; zU < UU; zU++) XU.push(zU);
            return XU
          }(yU + cU + 3).map((() => new oX)),
          AU = cU + 1;
        return zU.nodes().forEach((UU => {
          NX(QU, AU, zU.node(UU))
        })), {
          graph: zU,
          buckets: QU,
          zeroIdx: AU
        }
      }(UU, XU || DX);
      return function(UU, XU, zU) {
        var cU;
        let yU, QU = [],
          AU = XU[XU.length - 1],
          FU = XU[0];
        for (; UU.nodeCount();) {
          for (; yU = FU.dequeue();) YX(UU, XU, zU, yU);
          for (; yU = AU.dequeue();) YX(UU, XU, zU, yU);
          if (UU.nodeCount())
            for (let AU = XU.length - 2; AU > 0; --AU)
              if (yU = null == (cU = XU[AU]) ? void 0 : cU.dequeue(), yU) {
                QU = QU.concat(YX(UU, XU, zU, yU, !0) || []);
                break
              }
        }
        return QU
      }(zU.graph, zU.buckets, zU.zeroIdx).flatMap((XU => UU.outEdges(XU.v, XU.w) || []))
    }

    function YX(UU, XU, zU, cU, yU) {
      let QU = [],
        AU = yU ? QU : void 0;
      return (UU.inEdges(cU.v) || []).forEach((cU => {
        let AU = UU.edge(cU),
          FU = UU.node(cU.v);
        yU && QU.push({
          v: cU.v,
          w: cU.w
        }), FU.out -= AU, NX(XU, zU, FU)
      })), (UU.outEdges(cU.v) || []).forEach((cU => {
        let yU = UU.edge(cU),
          QU = cU.w,
          AU = UU.node(QU);
        AU.in -= yU, NX(XU, zU, AU)
      })), UU.removeNode(cU.v), AU
    }

    function NX(UU, XU, zU) {
      var cU, yU, QU;
      zU.out ? zU.in ? null == (QU = UU[zU.out - zU.in + XU]) || QU.enqueue(zU) : null == (yU = UU[UU.length - 1]) || yU.enqueue(zU) : null == (cU = UU[0]) || cU.enqueue(zU)
    }

    function IX(UU, XU) {
      var zU;
      ("greedy" === UU.graph().acyclicer ? EX(UU, (zU = UU, UU => zU.edge(UU).weight)) : function(UU, XU) {
        let zU = [],
          cU = {},
          yU = {};

        function QU(XU) {
          Object.hasOwn(yU, XU) || (yU[XU] = !0, cU[XU] = !0, UU.outEdges(XU).forEach((UU => {
            Object.hasOwn(cU, UU.w) ? zU.push(UU) : QU(UU.w)
          })), delete cU[XU])
        }

        function AU(QU) {
          var FU;
          Object.hasOwn(yU, QU) || (yU[QU] = !0, cU[QU] = !0, null == (FU = UU.outEdges(QU)) || FU.forEach((yU => {
            var FU, oU;
            Object.hasOwn(cU, yU.w) || (null == (FU = XU.node(QU)) ? void 0 : FU.rank) > (null == (oU = XU.node(yU.w)) ? void 0 : oU.rank) && function(UU, XU, zU) {
              let cU = new Set;

              function yU(XU) {
                var QU;
                if (UU.sources().includes(XU)) return !0;
                cU.add(XU);
                for (let AU of null != (QU = UU.inEdges(XU)) ? QU : [])
                  if ((AU.v !== zU.v || AU.w !== zU.w) && !cU.has(AU.v) && yU(AU.v)) return !0;
                return !1
              }
              return yU(XU)
            }(UU, yU.w, yU) ? zU.push(yU) : AU(yU.w)
          })), delete cU[QU])
        }
        let FU = QU;
        return XU && "function" == typeof XU.node && (FU = AU), UU.sources().forEach(FU), UU.nodes().forEach(FU), zU
      }(UU, null != XU ? XU : null)).forEach((XU => {
        let zU = UU.edge(XU);
        UU.removeEdge(XU), zU.forwardName = XU.name, zU.reversed = !0, UU.setEdge(XU.w, XU.v, zU, hU("rev"))
      }))
    }

    function pX(UU) {
      UU.graph().dummyChains = [], UU.edges().forEach((XU => function(UU, XU) {
        let zU, cU, yU, QU = XU.v,
          AU = UU.node(QU).rank,
          FU = XU.w,
          oU = UU.node(FU).rank,
          DU = XU.name,
          EU = UU.edge(XU),
          YU = EU.labelRank;
        if (oU === AU + 1) return;
        for (UU.removeEdge(XU), yU = 0, ++AU; AU < oU; ++yU, ++AU) EU.points = [], cU = {
          width: 0,
          height: 0,
          edgeLabel: EU,
          edgeObj: XU,
          rank: AU
        }, zU = VU(UU, "edge", cU, "_d"), AU === YU && (cU.width = EU.width, cU.height = EU.height, cU.dummy = "edge-label", cU.labelpos = EU.labelpos), UU.setEdge(QU, zU, {
          weight: EU.weight
        }, DU), 0 === yU && UU.graph().dummyChains.push(zU), QU = zU;
        UU.setEdge(QU, FU, {
          weight: EU.weight
        }, DU)
      }(UU, XU)))
    }

    function aX(UU) {
      let XU = {};
      UU.sources().forEach((function zU(cU) {
        let yU = UU.node(cU);
        if (Object.hasOwn(XU, cU)) return yU.rank;
        XU[cU] = !0;
        let QU = UU.outEdges(cU),
          AU = QU ? QU.map((XU => null == XU ? Number.POSITIVE_INFINITY : zU(XU.w) - UU.edge(XU).minlen)) : [],
          FU = JU(Math.min, AU);
        return FU === Number.POSITIVE_INFINITY && (FU = 0), yU.rank = FU
      }))
    }

    function tX(UU, XU) {
      return UU.node(XU.w).rank - UU.node(XU.v).rank - UU.edge(XU).minlen
    }
    var gX = function(UU) {
      let XU = new vU({
          directed: !1
        }),
        zU = UU.nodes();
      if (0 === zU.length) throw new Error("Graph must have at least one node");
      let cU, yU, QU = zU[0],
        AU = UU.nodeCount();
      for (XU.setNode(QU, {}); kX(XU, UU) < AU && (cU = GX(XU, UU), cU);) yU = XU.hasNode(cU.v) ? tX(UU, cU) : -tX(UU, cU), BX(XU, UU, yU);
      return XU
    };

    function kX(UU, XU) {
      return UU.nodes().forEach((function zU(cU) {
        let yU = XU.nodeEdges(cU);
        yU && yU.forEach((yU => {
          let QU = yU.v,
            AU = cU === QU ? yU.w : QU;
          !UU.hasNode(AU) && !tX(XU, yU) && (UU.setNode(AU, {}), UU.setEdge(cU, AU, {}), zU(AU))
        }))
      })), UU.nodeCount()
    }

    function GX(UU, XU) {
      return XU.edges().reduce(((zU, cU) => {
        let yU = Number.POSITIVE_INFINITY;
        return UU.hasNode(cU.v) !== UU.hasNode(cU.w) && (yU = tX(XU, cU)), yU < zU[0] ? [yU, cU] : zU
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function BX(UU, XU, zU) {
      UU.nodes().forEach((UU => XU.node(UU).rank += zU))
    }
    var {
      preorder: ZX,
      postorder: RX
    } = gU, PX = WX;

    function WX(UU) {
      UU = function(UU) {
        let XU = (new vU).setGraph(UU.graph());
        return UU.nodes().forEach((zU => XU.setNode(zU, UU.node(zU)))), UU.edges().forEach((zU => {
          let cU = XU.edge(zU.v, zU.w) || {
              weight: 0,
              minlen: 1
            },
            yU = UU.edge(zU);
          XU.setEdge(zU.v, zU.w, {
            weight: cU.weight + yU.weight,
            minlen: Math.max(cU.minlen, yU.minlen)
          })
        })), XU
      }(UU), aX(UU);
      let XU, zU, cU = gX(UU);
      for (eX(cU), dX(cU, UU); XU = wX(cU);) zU = qX(cU, UU, XU), OX(cU, UU, XU, zU)
    }

    function dX(UU, XU) {
      let zU = RX(UU, UU.nodes());
      zU = zU.slice(0, zU.length - 1), zU.forEach((zU => function(UU, XU, zU) {
        let cU = UU.node(zU).parent,
          yU = UU.edge(zU, cU);
        yU.cutvalue = LX(UU, XU, zU)
      }(UU, XU, zU)))
    }

    function LX(UU, XU, zU) {
      let cU = UU.node(zU).parent,
        yU = !0,
        QU = XU.edge(zU, cU),
        AU = 0;
      QU || (yU = !1, QU = XU.edge(cU, zU)), AU = QU.weight;
      let FU = XU.nodeEdges(zU);
      return FU && FU.forEach((QU => {
        let FU = QU.v === zU,
          oU = FU ? QU.w : QU.v;
        if (oU !== cU) {
          let cU = FU === yU,
            DU = XU.edge(QU).weight;
          if (AU += cU ? DU : -DU, function(UU, XU, zU) {
              return UU.hasEdge(XU, zU)
            }(UU, zU, oU)) {
            let XU = UU.edge(zU, oU).cutvalue;
            AU += cU ? -XU : XU
          }
        }
      })), AU
    }

    function eX(UU, XU) {
      arguments.length < 2 && (XU = UU.nodes()[0]), CX(UU, {}, 1, XU)
    }

    function CX(UU, XU, zU, cU, yU) {
      let QU = zU,
        AU = UU.node(cU);
      XU[cU] = !0;
      let FU = UU.neighbors(cU);
      return FU && FU.forEach((yU => {
        Object.hasOwn(XU, yU) || (zU = CX(UU, XU, zU, yU, cU))
      })), AU.low = QU, AU.lim = zU++, yU ? AU.parent = yU : delete AU.parent, zU
    }

    function wX(UU) {
      return UU.edges().find((XU => UU.edge(XU).cutvalue < 0))
    }

    function qX(UU, XU, zU) {
      let cU = zU.v,
        yU = zU.w;
      XU.hasEdge(cU, yU) || (cU = zU.w, yU = zU.v);
      let QU = UU.node(cU),
        AU = UU.node(yU),
        FU = QU,
        oU = !1;
      return QU.lim > AU.lim && (FU = AU, oU = !0), XU.edges().filter((XU => oU === SX(UU, UU.node(XU.v), FU) && oU !== SX(UU, UU.node(XU.w), FU))).reduce(((UU, zU) => tX(XU, zU) < tX(XU, UU) ? zU : UU))
    }

    function OX(UU, XU, zU, cU) {
      let yU = zU.v,
        QU = zU.w;
      UU.removeEdge(yU, QU), UU.setEdge(cU.v, cU.w, {}), eX(UU), dX(UU, XU),
        function(UU, XU) {
          let zU = UU.nodes().find((XU => !UU.node(XU).parent));
          if (!zU) return;
          let cU = ZX(UU, [zU]);
          cU = cU.slice(1), cU.forEach((zU => {
            let cU = UU.node(zU).parent,
              yU = XU.edge(zU, cU),
              QU = !1;
            yU || (yU = XU.edge(cU, zU), QU = !0), XU.node(zU).rank = XU.node(cU).rank + (QU ? yU.minlen : -yU.minlen)
          }))
        }(UU, XU)
    }

    function SX(UU, XU, zU) {
      return zU.low <= XU.lim && XU.lim <= zU.lim
    }
    WX.initLowLimValues = eX, WX.initCutValues = dX, WX.calcCutValue = LX, WX.leaveEdge = wX, WX.enterEdge = qX, WX.exchangeEdges = OX;
    var rX = function(UU) {
      let XU = UU.graph().ranker;
      if ("function" == typeof XU) return XU(UU);
      switch (XU) {
        case "network-simplex":
        default:
          fX(UU);
          break;
        case "tight-tree":
          ! function(UU) {
            aX(UU), gX(UU)
          }(UU);
          break;
        case "longest-path":
          uX(UU);
        case "none":
      }
    };
    var uX = aX;

    function fX(UU) {
      PX(UU)
    }
    var iX = function(UU) {
      let XU = function(UU) {
          let XU = {},
            zU = 0;

          function cU(yU) {
            let QU = zU;
            UU.children(yU).forEach(cU), XU[yU] = {
              low: QU,
              lim: zU++
            }
          }
          return UU.children(cX).forEach(cU), XU
        }(UU),
        zU = UU.graph();
      if (!Array.isArray(zU.dummyChains)) return;
      zU.dummyChains.forEach((zU => {
        let cU = UU.node(zU),
          yU = cU.edgeObj,
          QU = function(UU, XU, zU, cU) {
            let yU, QU = [],
              AU = [],
              FU = Math.min(XU[zU].low, XU[cU].low),
              oU = Math.max(XU[zU].lim, XU[cU].lim);
            yU = zU;
            do {
              yU = UU.parent(yU), QU.push(yU)
            } while (yU && (XU[yU].low > FU || oU > XU[yU].lim));
            let DU = yU,
              EU = cU;
            for (;
              (EU = UU.parent(EU)) !== DU;) AU.push(EU);
            return {
              path: QU.concat(AU.reverse()),
              lca: DU
            }
          }(UU, XU, yU.v, yU.w),
          AU = QU.path,
          FU = QU.lca,
          oU = 0,
          DU = AU[oU],
          EU = !0;
        for (; zU !== yU.w;) {
          if (cU = UU.node(zU), EU) {
            for (;
              (DU = AU[oU]) !== FU && UU.node(DU).maxRank < cU.rank;) oU++;
            DU === FU && (EU = !1)
          }
          if (!EU) {
            for (; oU < AU.length - 1 && UU.node(AU[oU + 1]).minRank <= cU.rank;) oU++;
            DU = AU[oU]
          }
          void 0 !== DU && UU.setParent(zU, DU), zU = UU.successors(zU)[0]
        }
      }))
    };

    function HX(UU) {
      let XU = VU(UU, "root", {}, "_root"),
        zU = function(UU) {
          let XU = {};

          function zU(cU, yU) {
            let QU = UU.children(cU);
            QU && QU.length && QU.forEach((UU => zU(UU, yU + 1))), XU[cU] = yU
          }
          return UU.children(cX).forEach((UU => zU(UU, 1))), XU
        }(UU),
        cU = Object.values(zU),
        yU = JU(Math.max, cU) - 1,
        QU = 2 * yU + 1;
      UU.graph().nestingRoot = XU, UU.edges().forEach((XU => UU.edge(XU).minlen *= QU));
      let AU = function(UU) {
        return UU.edges().reduce(((XU, zU) => XU + UU.edge(zU).weight), 0)
      }(UU) + 1;
      UU.children(cX).forEach((cU => {
        MX(UU, XU, QU, AU, yU, zU, cU)
      })), UU.graph().nodeRankFactor = QU
    }

    function MX(UU, XU, zU, cU, yU, QU, AU) {
      var FU;
      let oU = UU.children(AU);
      if (!oU.length) return void(AU !== XU && UU.setEdge(XU, AU, {
        weight: 0,
        minlen: zU
      }));
      let DU = lU(UU, "_bt"),
        EU = lU(UU, "_bb"),
        YU = UU.node(AU);
      UU.setParent(DU, AU), YU.borderTop = DU, UU.setParent(EU, AU), YU.borderBottom = EU, oU.forEach((FU => {
        var oU;
        MX(UU, XU, zU, cU, yU, QU, FU);
        let YU = UU.node(FU),
          NU = YU.borderTop ? YU.borderTop : FU,
          IU = YU.borderBottom ? YU.borderBottom : FU,
          pU = YU.borderTop ? cU : 2 * cU,
          aU = NU !== IU ? 1 : yU - (null != (oU = QU[AU]) ? oU : 0) + 1;
        UU.setEdge(DU, NU, {
          weight: pU,
          minlen: aU,
          nestingEdge: !0
        }), UU.setEdge(IU, EU, {
          weight: pU,
          minlen: aU,
          nestingEdge: !0
        })
      })), UU.parent(AU) || UU.setEdge(XU, DU, {
        weight: 0,
        minlen: yU + (null != (FU = QU[AU]) ? FU : 0)
      })
    }
    var vX = function(UU) {
      UU.children(cX).forEach((function XU(zU) {
        let cU = UU.children(zU),
          yU = UU.node(zU);
        if (cU.length && cU.forEach(XU), yU && Object.hasOwn(yU, "minRank")) {
          yU.borderLeft = [], yU.borderRight = [];
          for (let XU = yU.minRank, cU = yU.maxRank + 1; XU < cU; ++XU) VX(UU, "borderLeft", "_bl", zU, yU, XU), VX(UU, "borderRight", "_br", zU, yU, XU)
        }
      }))
    };

    function VX(UU, XU, zU, cU, yU, QU) {
      let AU = {
          width: 0,
          height: 0,
          rank: QU,
          borderType: XU
        },
        FU = yU[XU][QU - 1],
        oU = VU(UU, "border", AU, zU);
      yU[XU][QU] = oU, UU.setParent(oU, cU), FU && UU.setEdge(FU, oU, {
        weight: 1
      })
    }

    function sX(UU) {
      var XU;
      let zU = null == (XU = UU.graph().rankdir) ? void 0 : XU.toLowerCase();
      ("bt" === zU || "rl" === zU) && function(UU) {
        UU.nodes().forEach((XU => lX(UU.node(XU)))), UU.edges().forEach((XU => {
          var zU;
          let cU = UU.edge(XU);
          null == (zU = cU.points) || zU.forEach(lX), Object.hasOwn(cU, "y") && lX(cU)
        }))
      }(UU), ("lr" === zU || "rl" === zU) && (function(UU) {
        UU.nodes().forEach((XU => xX(UU.node(XU)))), UU.edges().forEach((XU => {
          var zU;
          let cU = UU.edge(XU);
          null == (zU = cU.points) || zU.forEach(xX), Object.hasOwn(cU, "x") && xX(cU)
        }))
      }(UU), nX(UU))
    }

    function nX(UU) {
      UU.nodes().forEach((XU => mX(UU.node(XU)))), UU.edges().forEach((XU => mX(UU.edge(XU))))
    }

    function mX(UU) {
      let XU = UU.width;
      UU.width = UU.height, UU.height = XU
    }

    function lX(UU) {
      UU.y = -UU.y
    }

    function xX(UU) {
      let XU = UU.x;
      UU.x = UU.y, UU.y = XU
    }

    function JX(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        zU = {},
        cU = UU.nodes().filter((XU => !UU.children(XU).length)),
        yU = cU.map((XU => UU.node(XU).rank)),
        QU = UX(JU(Math.max, yU) + 1).map((() => []));
      return cU.sort(((XU, zU) => UU.node(XU).rank - UU.node(zU).rank)).forEach((function cU(yU) {
        if (zU[yU]) return;
        zU[yU] = !0;
        let AU = UU.node(yU);
        QU[AU.rank].push(yU);
        let FU = UU.successors(yU);
        FU && [...FU].sort(((zU, cU) => function(zU, cU) {
          let yU = UU.node(zU),
            QU = UU.node(cU);
          return yX(XU, yU, QU)
        }(zU, cU))).forEach(cU)
      })), QU
    }

    function jX(UU, XU) {
      let zU = 0;
      for (let cU = 1; cU < XU.length; ++cU) zU += KX(UU, XU[cU - 1], XU[cU]);
      return zU
    }

    function KX(UU, XU, zU) {
      let cU = function(UU, XU) {
          return UU.reduce(((UU, zU, cU) => (UU[zU] = XU[cU], UU)), {})
        }(zU, zU.map(((UU, XU) => XU))),
        yU = XU.flatMap((XU => {
          let zU = UU.outEdges(XU);
          return zU ? zU.map((XU => ({
            pos: cU[XU.w],
            weight: UU.edge(XU).weight
          }))).sort(((UU, XU) => UU.pos - XU.pos)) : []
        })),
        QU = 1;
      for (; QU < zU.length;) QU <<= 1;
      let AU = 2 * QU - 1;
      QU -= 1;
      let FU = new Array(AU).fill(0),
        oU = 0;
      return yU.forEach((UU => {
        let XU = UU.pos + QU;
        FU[XU] += UU.weight;
        let zU = 0;
        for (; XU > 0;) XU % 2 && (zU += FU[XU + 1]), XU = XU - 1 >> 1, FU[XU] += UU.weight;
        oU += UU.weight * zU
      })), oU
    }

    function bX(UU, XU) {
      let zU = {};
      return UU.forEach(((UU, XU) => {
          let cU = {
            indegree: 0,
            in: [],
            out: [],
            vs: [UU.v],
            i: XU
          };
          void 0 !== UU.barycenter && (cU.barycenter = UU.barycenter, cU.weight = UU.weight), zU[UU.v] = cU
        })), XU.edges().forEach((UU => {
          let XU = zU[UU.v],
            cU = zU[UU.w];
          void 0 !== XU && void 0 !== cU && (cU.indegree++, XU.out.push(cU))
        })),
        function(UU) {
          let XU = [];

          function zU(UU) {
            return XU => {
              XU.merged || (void 0 === XU.barycenter || void 0 === UU.barycenter || XU.barycenter >= UU.barycenter) && function(UU, XU) {
                let zU = 0,
                  cU = 0;
                UU.weight && (zU += UU.barycenter * UU.weight, cU += UU.weight), XU.weight && (zU += XU.barycenter * XU.weight, cU += XU.weight), UU.vs = XU.vs.concat(UU.vs), UU.barycenter = zU / cU, UU.weight = cU, UU.i = Math.min(XU.i, UU.i), XU.merged = !0
              }(UU, XU)
            }
          }

          function cU(XU) {
            return zU => {
              zU.in.push(XU), 0 === --zU.indegree && UU.push(zU)
            }
          }
          for (; UU.length;) {
            let yU = UU.pop();
            XU.push(yU), yU.in.reverse().forEach(zU(yU)), yU.out.forEach(cU(yU))
          }
          return XU.filter((UU => !UU.merged)).map((UU => XX(UU, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(zU).filter((UU => !UU.indegree)))
    }

    function TX(UU, XU, zU, cU, yU) {
      let QU = {},
        AU = null,
        FU = null,
        oU = yU;
      "boolean" == typeof XU ? (oU = XU, QU = {}) : XU && (QU = XU, AU = null != zU ? zU : null, FU = null != cU ? cU : null);
      let DU = function(UU, XU) {
          let zU = {
            lhs: [],
            rhs: []
          };
          return UU.forEach((UU => {
            XU(UU) ? zU.lhs.push(UU) : zU.rhs.push(UU)
          })), zU
        }(UU, (UU => Object.hasOwn(UU, "barycenter"))),
        EU = DU.lhs,
        YU = DU.rhs.sort(((UU, XU) => XU.i - UU.i)),
        NU = [],
        IU = 0,
        pU = 0,
        aU = 0;
      EU.sort(function(UU, XU, zU) {
        return (cU, yU) => {
          if (cU.barycenter < yU.barycenter) return -1;
          if (cU.barycenter > yU.barycenter) return 1;
          if (UU && ("string" == typeof cU.vs[0] || "string" == typeof yU.vs[0])) {
            let zU = UU.node(cU.vs[0]),
              QU = UU.node(yU.vs[0]),
              AU = yX(XU, zU, QU);
            if (0 !== AU) return AU
          }
          return zU ? yU.i - cU.i : cU.i - yU.i
        }
      }(FU, AU, !!oU));
      for (let [gU, kU] of Object.entries(QU)) {
        let UU = EU.findIndex((UU => UU.vs[0] === gU));
        EU.splice(UU + 1, 0, kU)
      }
      aU = hX(NU, YU, aU), EU.forEach((UU => {
        aU += UU.vs.length, NU.push(UU.vs), IU += UU.barycenter * UU.weight, pU += UU.weight, aU = hX(NU, YU, aU)
      }));
      let tU = {
        vs: NU.flat(1)
      };
      return pU && (tU.barycenter = IU / pU, tU.weight = pU), tU
    }

    function hX(UU, XU, zU) {
      let cU;
      for (; XU.length && (cU = XU[XU.length - 1]).i <= zU;) XU.pop(), UU.push(cU.vs), zU++;
      return zU
    }

    function Uz(UU, XU, zU, cU, yU) {
      var QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU;
      let tU = null,
        gU = yU;
      "boolean" == typeof cU ? (gU = cU, tU = null) : void 0 !== cU && (tU = cU);
      let kU = UU.children(XU),
        GU = UU.node(XU),
        BU = GU ? GU.borderLeft : void 0,
        ZU = GU ? GU.borderRight : void 0,
        RU = {};
      BU && (kU = kU.filter((UU => UU !== BU && UU !== ZU)));
      let PU = function(UU) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((XU => {
          let zU = UU.inEdges(XU);
          if (!zU || !zU.length) return {
            v: XU
          };
          {
            let cU = zU.reduce(((XU, zU) => {
              let cU = UU.edge(zU),
                yU = UU.node(zU.v);
              return {
                sum: XU.sum + cU.weight * yU.order,
                weight: XU.weight + cU.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: XU,
              barycenter: cU.sum / cU.weight,
              weight: cU.weight
            }
          }
        }))
      }(UU, kU);
      PU.forEach((XU => {
        if (UU.children(XU.v).length) {
          let {
            result: cU
          } = Uz(UU, XU.v, zU, tU, gU);
          RU[XU.v] = cU, Object.hasOwn(cU, "barycenter") && function(UU, XU) {
            void 0 !== UU.barycenter ? (UU.barycenter = (UU.barycenter * UU.weight + XU.barycenter * XU.weight) / (UU.weight + XU.weight), UU.weight += XU.weight) : (UU.barycenter = XU.barycenter, UU.weight = XU.weight)
          }(XU, cU)
        }
      }));
      let WU = bX(PU, zU);
      ! function(UU, XU) {
        UU.forEach((UU => {
          UU.vs = UU.vs.flatMap((UU => XU[UU] ? XU[UU].vs : UU))
        }))
      }(WU, RU);
      let dU = {},
        LU = !1;
      for (let CU = 0; CU < WU.length; CU++)
        for (let XU = CU + 1; XU < WU.length; XU++)
          if (WU[CU] && WU[XU] && null != (QU = WU[CU]) && QU.barycenter && null != (AU = WU[XU]) && AU.barycenter && (null == (FU = WU[CU]) ? void 0 : FU.barycenter) === WU[XU].barycenter) {
            let zU = null != (DU = null == (oU = WU[CU]) ? void 0 : oU.vs[0]) ? DU : "",
              cU = null != (YU = null == (EU = WU[XU]) ? void 0 : EU.vs[0]) ? YU : "",
              yU = UU.node(zU),
              QU = UU.node(cU);
            if ("edge" === yU.dummy && "edge" === QU.dummy && (null == (NU = yU.edgeObj) ? void 0 : NU.v) === (null == (IU = QU.edgeObj) ? void 0 : IU.v) && (null == (pU = yU.edgeObj) ? void 0 : pU.w) === (null == (aU = QU.edgeObj) ? void 0 : aU.w)) {
              if (yU.edgeLabel.reversed) {
                dU[cU] = WU[CU], WU.splice(CU, 1), CU--;
                break
              }
              dU[zU] = WU[XU], WU.splice(XU, 1), XU--
            } else LU = !0
          } let eU = TX(WU, dU, tU, UU, gU);
      if (BU && ZU) {
        eU.vs = [BU, eU.vs, ZU].flat(1);
        let XU = UU.predecessors(BU);
        if (XU && XU.length) {
          let zU = UU.node(XU[0]),
            cU = UU.predecessors(ZU),
            yU = UU.node(cU[0]);
          Object.hasOwn(eU, "barycenter") || (eU.barycenter = 0, eU.weight = 0), eU.barycenter = (eU.barycenter * eU.weight + zU.order + yU.order) / (eU.weight + 2), eU.weight += 2
        }
      }
      return Object.defineProperty(eU, "result", {
        value: eU,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(eU, "usedBias", {
        value: LU,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), eU
    }

    function Xz(UU, XU, zU, cU) {
      cU || (cU = UU.nodes());
      let yU = function(UU) {
          let XU;
          for (; UU.hasNode(XU = hU("_root")););
          return XU
        }(UU),
        QU = new vU({
          compound: !0
        }).setGraph({
          root: yU
        }).setDefaultNodeLabel((XU => UU.node(XU)));
      return cU.forEach((cU => {
        let AU = UU.node(cU),
          FU = UU.parent(cU);
        if (AU.rank === XU || AU.minRank <= XU && XU <= AU.maxRank) {
          QU.setNode(cU), QU.setParent(cU, FU || yU);
          let oU = UU[zU](cU);
          oU && oU.forEach((XU => {
            let zU = XU.v === cU ? XU.w : XU.v,
              yU = QU.edge(zU, cU),
              AU = void 0 !== yU ? yU.weight : 0;
            QU.setEdge(zU, cU, {
              weight: UU.edge(XU).weight + AU
            })
          })), Object.hasOwn(AU, "minRank") && QU.setNode(cU, {
            borderLeft: AU.borderLeft[XU],
            borderRight: AU.borderRight[XU]
          })
        }
      })), QU
    }

    function zz(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof XU.customOrder) return void XU.customOrder(UU, zz);
      let cU = jU(UU),
        yU = cz(UU, UX(1, cU + 1), "inEdges"),
        QU = cz(UU, UX(cU - 1, -1, -1), "outEdges"),
        AU = JX(UU, zU);
      if (Qz(UU, AU), XU.disableOptimalOrderHeuristic) return;
      let FU, oU = Number.POSITIVE_INFINITY,
        DU = XU.constraints || [];
      for (let EU = 0, YU = 0; YU < 4; ++EU, ++YU) {
        yz(EU % 2 ? yU : QU, EU % 4 >= 2, DU, zU), AU = mU(UU);
        let XU = jX(UU, AU);
        XU < oU ? (YU = 0, FU = Object.assign({}, AU), oU = XU) : XU === oU && (FU = structuredClone(AU))
      }
      Qz(UU, FU)
    }

    function cz(UU, XU, zU) {
      let cU = new Map,
        yU = (UU, XU) => {
          cU.has(UU) || cU.set(UU, []), cU.get(UU).push(XU)
        };
      for (let QU of UU.nodes()) {
        let XU = UU.node(QU);
        if ("number" == typeof XU.rank && yU(XU.rank, QU), "number" == typeof XU.minRank && "number" == typeof XU.maxRank)
          for (let UU = XU.minRank; UU <= XU.maxRank; UU++) UU !== XU.rank && yU(UU, QU)
      }
      return XU.map((function(XU) {
        return Xz(UU, XU, zU, cU.get(XU) || [])
      }))
    }

    function yz(UU, XU, zU, cU) {
      let yU = !0,
        QU = new vU;
      UU.forEach((function(UU) {
        zU.forEach((UU => QU.setEdge(UU.left, UU.right)));
        let AU = UU.graph().root,
          {
            result: FU,
            usedBias: oU
          } = Uz(UU, AU, QU, cU, yU);
        XU && oU && (yU = !yU), FU.vs.forEach(((XU, zU) => UU.node(XU).order = zU)),
          function(UU, XU, zU) {
            let cU, yU = {};
            zU.forEach((zU => {
              let QU, AU, FU = UU.parent(zU);
              for (; FU;) {
                if (QU = UU.parent(FU), QU ? (AU = yU[QU], yU[QU] = FU) : (AU = cU, cU = FU), AU && AU !== FU) return void XU.setEdge(AU, FU);
                FU = QU
              }
            }))
          }(UU, QU, FU.vs)
      }))
    }

    function Qz(UU, XU) {
      Object.values(XU).forEach((XU => XU.forEach(((XU, zU) => UU.node(XU).order = zU))))
    }

    function Az(UU, XU, zU) {
      if (XU > zU) {
        let UU = XU;
        XU = zU, zU = UU
      }
      let cU = UU[XU];
      cU || (UU[XU] = cU = {}), cU[zU] = !0
    }

    function Fz(UU, XU, zU) {
      if (XU > zU) {
        let UU = XU;
        XU = zU, zU = UU
      }
      let cU = UU[XU];
      return void 0 !== cU && Object.hasOwn(cU, zU)
    }

    function oz(UU, XU, zU, cU) {
      let yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        QU = {},
        AU = function(UU, XU, zU, cU) {
          let yU = new vU,
            QU = UU.graph(),
            AU = function(UU, XU, zU) {
              return (cU, yU, QU) => {
                let AU, FU = cU.node(yU),
                  oU = cU.node(QU),
                  DU = 0;
                if (DU += FU.width / 2, Object.hasOwn(FU, "labelpos")) switch (FU.labelpos.toLowerCase()) {
                  case "l":
                    AU = -FU.width / 2;
                    break;
                  case "r":
                    AU = FU.width / 2
                }
                if (AU && (DU += zU ? AU : -AU), AU = void 0, DU += (FU.dummy ? XU : UU) / 2, DU += (oU.dummy ? XU : UU) / 2, DU += oU.width / 2, Object.hasOwn(oU, "labelpos")) switch (oU.labelpos.toLowerCase()) {
                  case "l":
                    AU = oU.width / 2;
                    break;
                  case "r":
                    AU = -oU.width / 2
                }
                return AU && (DU += zU ? AU : -AU), DU
              }
            }(QU.nodesep, QU.edgesep, cU);
          return XU.forEach((XU => {
            let cU;
            XU.forEach((XU => {
              let QU = zU[XU];
              if (void 0 !== QU) {
                if (yU.setNode(QU), void 0 !== cU) {
                  let FU = zU[cU];
                  if (void 0 !== FU) {
                    let zU = yU.edge(FU, QU);
                    yU.setEdge(FU, QU, Math.max(AU(UU, XU, cU), zU || 0))
                  }
                }
                cU = XU
              }
            }))
          })), yU
        }(UU, XU, zU, yU),
        FU = yU ? "borderLeft" : "borderRight";

      function oU(UU, XU) {
        let zU = AU.nodes().slice(),
          cU = {},
          yU = zU.pop();
        for (; yU;) {
          if (cU[yU]) UU(yU);
          else {
            cU[yU] = !0, zU.push(yU);
            for (let UU of XU(yU)) zU.push(UU)
          }
          yU = zU.pop()
        }
      }
      return oU((function(UU) {
        let XU = AU.inEdges(UU);
        QU[UU] = XU ? XU.reduce(((UU, XU) => {
          var zU;
          let cU = null != (zU = QU[XU.v]) ? zU : 0,
            yU = AU.edge(XU);
          return Math.max(UU, cU + (void 0 !== yU ? yU : 0))
        }), 0) : 0
      }), (function(UU) {
        return AU.predecessors(UU) || []
      })), oU((function(XU) {
        let zU = AU.outEdges(XU),
          cU = Number.POSITIVE_INFINITY;
        zU && (cU = zU.reduce(((UU, XU) => {
          let zU = QU[XU.w],
            cU = AU.edge(XU);
          return Math.min(UU, (void 0 !== zU ? zU : 0) - (void 0 !== cU ? cU : 0))
        }), Number.POSITIVE_INFINITY));
        let yU = UU.node(XU);
        cU !== Number.POSITIVE_INFINITY && yU.borderType !== FU && (QU[XU] = Math.max(void 0 !== QU[XU] ? QU[XU] : 0, cU))
      }), (function(UU) {
        return AU.successors(UU) || []
      })), Object.keys(cU).forEach((UU => {
        var XU;
        let cU = zU[UU];
        void 0 !== cU && (QU[UU] = null != (XU = QU[cU]) ? XU : 0)
      })), QU
    }

    function Dz(UU, XU) {
      let zU, cU = mU(UU),
        yU = Object.assign(function(UU, XU) {
          let zU = {};
          return XU.length && XU.reduce((function(XU, cU) {
            let yU = 0,
              QU = 0,
              AU = XU.length,
              FU = cU[cU.length - 1];
            return cU.forEach(((XU, oU) => {
              let DU = function(UU, XU) {
                  if (UU.node(XU).dummy) {
                    let zU = UU.predecessors(XU);
                    if (zU) return zU.find((XU => UU.node(XU).dummy))
                  }
                }(UU, XU),
                EU = DU ? UU.node(DU).order : AU;
              (DU || XU === FU) && (cU.slice(QU, oU + 1).forEach((XU => {
                let cU = UU.predecessors(XU);
                cU && cU.forEach((cU => {
                  let QU = UU.node(cU),
                    AU = QU.order;
                  (AU < yU || EU < AU) && (!QU.dummy || !UU.node(XU).dummy) && Az(zU, cU, XU)
                }))
              })), QU = oU + 1, yU = EU)
            })), cU
          })), zU
        }(UU, cU), function(UU, XU) {
          let zU = {};

          function cU(XU, cU, yU, QU, AU) {
            UX(cU, yU).forEach((cU => {
              let yU = XU[cU];
              if (void 0 !== yU && UU.node(yU).dummy) {
                let XU = UU.predecessors(yU);
                XU && XU.forEach((XU => {
                  if (void 0 === XU) return;
                  let cU = UU.node(XU);
                  cU.dummy && (cU.order < QU || cU.order > AU) && Az(zU, XU, yU)
                }))
              }
            }))
          }
          return XU.length && XU.reduce((function(XU, zU) {
            let yU = -1,
              QU = -1,
              AU = 0;
            return zU.forEach(((FU, oU) => {
              if ("border" === UU.node(FU).dummy) {
                let XU = UU.predecessors(FU);
                if (XU && XU.length) {
                  let FU = XU[0];
                  if (void 0 === FU) return;
                  QU = UU.node(FU).order, cU(zU, AU, oU, yU, QU), AU = oU, yU = QU
                }
              }
              cU(zU, AU, zU.length, QU, XU.length)
            })), zU
          })), zU
        }(UU, cU)),
        QU = {};
      ["u", "d"].forEach((AU => {
        zU = "u" === AU ? cU : Object.values(cU).reverse(), ["l", "r"].forEach((cU => {
          "r" === cU && (zU = zU.map((UU => Object.values(UU).reverse())));
          let FU = function(UU, XU, zU, cU, yU) {
              let QU = {},
                AU = {},
                FU = {};
              return XU.forEach((UU => {
                UU.forEach(((UU, XU) => {
                  QU[UU] = UU, AU[UU] = UU, FU[UU] = XU
                }))
              })), XU.forEach((XU => {
                let oU = -1,
                  DU = -1,
                  EU = !1,
                  YU = XU,
                  NU = XU.findIndex((XU => (null == yU ? void 0 : yU.includes(XU)) || Ez(XU, UU, yU)));
                NU > 0 && (YU = [XU[NU], ...XU.slice(0, NU), ...XU.slice(NU + 1)], EU = !0), YU.forEach((XU => {
                  var YU;
                  let NU = cU(XU);
                  if (NU && NU.length) {
                    null != yU && yU.includes(XU) && (NU = NU.filter((XU => Ez(XU, UU, yU))));
                    let cU = NU.sort(((UU, XU) => {
                        let zU = FU[UU],
                          cU = FU[XU];
                        return (void 0 !== zU ? zU : 0) - (void 0 !== cU ? cU : 0)
                      })),
                      IU = (cU.length - 1) / 2;
                    for (let UU = Math.floor(IU), yU = Math.ceil(IU); UU <= yU; ++UU) {
                      let yU = cU[UU];
                      if (void 0 === yU) continue;
                      let NU = FU[yU];
                      if (void 0 !== NU && AU[XU] === XU && oU < NU && FU[yU] !== DU && !Fz(zU, XU, yU)) {
                        let UU = QU[yU];
                        void 0 !== UU && (AU[yU] = XU, AU[XU] = QU[XU] = UU, oU = NU, EU && (oU = -1, DU = null != (YU = FU[yU]) ? YU : -1, EU = !1))
                      }
                    }
                  }
                }))
              })), {
                root: QU,
                align: AU
              }
            }(UU, zU, yU, (XU => ("u" === AU ? UU.predecessors(XU) : UU.successors(XU)) || []), XU),
            oU = oz(UU, zU, FU.root, FU.align, "r" === cU);
          "r" === cU && (oU = zX(oU, (UU => -UU))), QU[AU + cU] = oU
        }))
      }));
      let AU = function(UU, XU) {
        return Object.values(XU).reduce(((XU, zU) => {
          let cU = Number.NEGATIVE_INFINITY,
            yU = Number.POSITIVE_INFINITY;
          Object.entries(zU).forEach((XU => {
            let [zU, QU] = XU, AU = function(UU, XU) {
              return UU.node(XU).width
            }(UU, zU) / 2;
            cU = Math.max(QU + AU, cU), yU = Math.min(QU - AU, yU)
          }));
          let QU = cU - yU;
          return QU < XU[0] && (XU = [QU, zU]), XU
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(UU, QU);
      return function(UU, XU) {
          let zU = Object.values(XU),
            cU = JU(Math.min, zU),
            yU = JU(Math.max, zU);
          ["u", "d"].forEach((zU => {
            ["l", "r"].forEach((QU => {
              let AU = zU + QU,
                FU = UU[AU];
              if (!FU || FU === XU) return;
              let oU = Object.values(FU),
                DU = cU - JU(Math.min, oU);
              "l" !== QU && (DU = yU - JU(Math.max, oU)), DU && (UU[AU] = zX(FU, (UU => UU + DU)))
            }))
          }))
        }(QU, AU),
        function(UU) {
          let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            zU = UU.ul;
          return zU ? zX(zU, ((zU, cU) => {
            var yU, QU;
            if (XU) {
              let zU = XU.toLowerCase(),
                yU = UU[zU];
              if (yU && void 0 !== yU[cU]) return yU[cU]
            }
            let AU = Object.values(UU).map((UU => {
              let XU = UU[cU];
              return void 0 !== XU ? XU : 0
            })).sort(((UU, XU) => UU - XU));
            return ((null != (yU = AU[1]) ? yU : 0) + (null != (QU = AU[2]) ? QU : 0)) / 2
          })) : {}
        }(QU, UU.graph().align)
    }

    function Ez(UU, XU, zU) {
      var cU;
      if (!zU) return !1;
      let yU = null == (cU = XU.node(UU)) ? void 0 : cU.edgeObj;
      if (!yU || XU.node(UU).edgeLabel.reversed) return !1;
      let QU = zU.indexOf(null == yU ? void 0 : yU.v),
        AU = zU.indexOf(null == yU ? void 0 : yU.w);
      return -1 !== QU && -1 !== AU && QU === (AU + 1) % zU.length || QU === (AU - 1) % zU.length
    }

    function Yz(UU, XU) {
      (function(UU) {
        let XU = mU(UU),
          zU = UU.graph(),
          cU = zU.ranksep,
          yU = zU.rankalign,
          QU = 0;
        XU.forEach((XU => {
          let zU = XU.reduce(((XU, zU) => {
            var cU;
            let yU = null != (cU = UU.node(zU).height) ? cU : 0;
            return XU > yU ? XU : yU
          }), 0);
          XU.forEach((XU => {
            let cU = UU.node(XU);
            cU.y = "top" === yU ? QU + cU.height / 2 : "bottom" === yU ? QU + zU - cU.height / 2 : QU + zU / 2
          })), QU += zU + cU
        }))
      })(UU = sU(UU)), Object.entries(Dz(UU, XU)).forEach((XU => {
        let [zU, cU] = XU;
        return UU.node(zU).x = cU
      }))
    }
    var Nz = new WeakMap;

    function Iz(UU) {
      return az(UU, bU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), UU
    }

    function pz(UU, XU, zU) {
      let cU = XU;
      for (; void 0 !== cU;) {
        let XU = UU.parent(cU);
        if (XU === zU) return cU;
        cU = XU
      }
    }

    function az(UU, XU, zU) {
      var cU;
      let yU = UU.nodes().filter((XU => UU.children(XU).length)),
        QU = {};
      yU.forEach((cU => {
        let yU = UU.node(cU);
        if (yU && yU.rankdir) {
          let AU = new vU({
            multigraph: !0,
            compound: !0
          });
          AU.setGraph({
            rankdir: yU.rankdir
          });
          let FU = UU.children(cU);
          FU.forEach((XU => {
            let zU = {
              ...UU.node(XU)
            };
            AU.setNode(XU, zU);
            let yU = UU.parent(XU);
            yU && yU !== cU && FU.includes(yU) && AU.setParent(XU, yU)
          }));
          let oU = new Set;
          UU.edges().forEach((XU => {
            let zU = pz(UU, XU.v, cU),
              yU = pz(UU, XU.w, cU);
            if (zU && yU && zU !== yU) {
              let cU = `${zU}\0${yU}`;
              oU.has(cU) || (oU.add(cU), AU.setEdge(zU, yU, {
                ...UU.edge(XU)
              }))
            }
          })), az(AU, XU, zU);
          let DU = Lz(AU);
          tz(DU, XU, zU, null), gz(AU, DU);
          let EU = 1 / 0,
            YU = 1 / 0,
            NU = -1 / 0,
            IU = -1 / 0;
          AU.nodes().forEach((UU => {
            if (UU === cU) return;
            let XU = AU.node(UU);
            XU && "number" == typeof XU.x && "number" == typeof XU.y && "number" == typeof XU.width && "number" == typeof XU.height && (EU = Math.min(EU, XU.x - XU.width / 2), NU = Math.max(NU, XU.x + XU.width / 2), YU = Math.min(YU, XU.y - XU.height / 2), IU = Math.max(IU, XU.y + XU.height / 2))
          })), (!isFinite(EU) || !isFinite(YU) || !isFinite(NU) || !isFinite(IU)) && (EU = YU = 0, NU = IU = 0);
          let pU = NU - EU,
            aU = IU - YU;
          QU[cU] = {
            minX: EU,
            my: YU,
            maxX: NU,
            ly: IU,
            width: pU,
            height: aU,
            offsetX: EU,
            offsetY: YU
          }, yU._dagreClusterSubgraph = AU
        }
      }));
      let AU = [],
        FU = new Map;
      yU.forEach((XU => {
        let zU = UU.node(XU);
        zU && zU.rankdir && QU[XU] && FU.set(XU, (UU.children(XU) || []).filter((UU => UU !== XU)))
      }));
      let oU = new Set([...FU.values()].flat()),
        DU = new Map;
      FU.forEach(((XU, zU) => {
        oU.has(zU) || DU.set(zU, (XU => {
          let zU = [],
            cU = (UU.children(XU) || []).filter((UU => UU !== XU));
          for (; cU.length > 0;) {
            let XU = cU.shift();
            zU.push(XU), (UU.children(XU) || []).filter((UU => UU !== XU)).forEach((UU => cU.push(UU)))
          }
          return zU
        })(zU))
      }));
      let EU = new Set([...DU.values()].flat()),
        YU = UU => {
          for (let [XU, zU] of DU)
            if (zU.includes(UU)) return XU;
          return UU
        },
        NU = [];
      UU.edges().forEach((XU => {
        (EU.has(XU.v) || EU.has(XU.w)) && NU.push({
          edge: XU,
          label: UU.edge(XU)
        })
      }));
      let IU = new Map;
      EU.forEach((XU => {
        let zU = UU.parent(XU);
        IU.set(XU, "string" == typeof zU ? zU : void 0)
      })), DU.forEach(((XU, zU) => {
        let cU = UU.node(zU),
          yU = [];
        XU.forEach((XU => {
          let zU = UU.node(XU);
          zU && (yU.push({
            id: XU,
            node: zU,
            parent: IU.get(XU)
          }), UU.removeNode(XU))
        }));
        let FU = NU.filter((UU => {
            let {
              edge: zU
            } = UU;
            return XU.includes(zU.v) || XU.includes(zU.w)
          })),
          oU = QU[zU];
        cU && (AU.push({
          clusterId: zU,
          subgraph: cU._dagreClusterSubgraph,
          bounds: oU,
          children: XU,
          removedNodes: yU,
          removedEdges: FU
        }), cU.width = oU.width, cU.height = oU.height)
      }));
      let pU = new Set;
      NU.forEach((XU => {
        let {
          edge: zU,
          label: cU
        } = XU, yU = YU(zU.v), QU = YU(zU.w);
        if (yU !== QU && UU.hasNode(yU) && UU.hasNode(QU)) {
          let XU = `${yU}\0${QU}`;
          pU.has(XU) || (pU.add(XU), UU.setEdge(yU, QU, {
            ...cU,
            width: 0,
            height: 0
          }))
        }
      }));
      let aU = Lz(UU),
        tU = tz(aU, XU, zU, null != (cU = Nz.get(UU)) ? cU : null);
      Nz.set(UU, tU), gz(UU, aU), pU.forEach((XU => {
        let zU = XU.indexOf("\0"),
          cU = XU.slice(0, zU),
          yU = XU.slice(zU + 1);
        UU.hasEdge(cU, yU) && UU.removeEdge(cU, yU)
      })), AU.forEach((XU => {
        let {
          clusterId: zU,
          subgraph: cU,
          bounds: yU,
          removedNodes: QU,
          removedEdges: AU
        } = XU;
        var FU, oU;
        let DU = UU.node(zU),
          EU = null != (FU = null == DU ? void 0 : DU.x) ? FU : 0,
          YU = null != (oU = null == DU ? void 0 : DU.y) ? oU : 0,
          NU = (yU.minX + yU.maxX) / 2,
          IU = (yU.my + yU.ly) / 2;
        QU.forEach((XU => {
          let {
            id: zU,
            node: cU,
            parent: yU
          } = XU;
          UU.setNode(zU, cU), void 0 !== yU && UU.setParent(zU, yU)
        })), AU.forEach((XU => {
          let {
            edge: zU,
            label: cU
          } = XU;
          UU.setEdge(zU, cU)
        })), cU.nodes().forEach((XU => {
          if (XU === zU) return;
          let yU = cU.node(XU),
            QU = UU.node(XU);
          QU && yU && "number" == typeof yU.x && "number" == typeof yU.y && (QU.x = EU + (yU.x - NU), QU.y = YU + (yU.y - IU))
        })), delete DU._dagreClusterSubgraph
      })), yU.forEach((XU => {
        var zU, cU;
        let yU = UU.node(XU),
          AU = QU[XU];
        if (yU && yU.rankdir && yU._dagreClusterSubgraph && AU) {
          let QU = yU._dagreClusterSubgraph,
            FU = null != (zU = yU.x) ? zU : 0,
            oU = null != (cU = yU.y) ? cU : 0,
            DU = (AU.minX + AU.maxX) / 2,
            EU = (AU.my + AU.ly) / 2;
          QU.nodes().forEach((zU => {
            if (zU === XU) return;
            let cU = QU.node(zU),
              yU = UU.node(zU);
            if (yU && cU && "number" == typeof cU.x && "number" == typeof cU.y) {
              let UU = cU.x - DU,
                XU = cU.y - EU;
              yU.x = FU + UU, yU.y = oU + XU
            }
          })), delete yU._dagreClusterSubgraph
        }
      }))
    }

    function tz(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var yU, QU;
      let AU = !1 !== (null == zU ? void 0 : zU.useDynamic),
        FU = AU && null != (yU = null == cU ? void 0 : cU.graph) ? yU : null,
        oU = AU && null != (QU = null == cU ? void 0 : cU.rawNodes) ? QU : null;
      XU("    makeSpaceForEdgeLabels", (() => function(UU) {
        let XU = UU.graph();
        XU.ranksep /= 2, UU.edges().forEach((zU => {
          var cU;
          let yU = UU.edge(zU);
          yU.minlen *= 2, "c" !== (null != (cU = yU.labelpos) ? cU : "r").toLowerCase() && ("TB" === XU.rankdir || "BT" === XU.rankdir ? yU.width += yU.labeloffset : yU.height += yU.labeloffset)
        }))
      }(UU))), XU("    removeSelfEdges", (() => function(UU) {
        UU.edges().forEach((XU => {
          if (XU.v === XU.w) {
            let zU = UU.node(XU.v);
            zU.selfEdges || (zU.selfEdges = []), zU.selfEdges.push({
              e: XU,
              label: UU.edge(XU)
            }), UU.removeEdge(XU)
          }
        }))
      }(UU))), XU("    acyclic", (() => IX(UU, FU))), XU("    nestingGraph.run", (() => HX(UU))), XU("    rank", (() => rX(sU(UU)))), XU("    injectEdgeLabelProxies", (() => function(UU) {
        UU.edges().forEach((XU => {
          let zU = UU.edge(XU);
          if (zU.width && zU.height) {
            let zU = UU.node(XU.v),
              cU = {
                rank: (UU.node(XU.w).rank - zU.rank) / 2 + zU.rank,
                e: XU
              };
            VU(UU, "edge-proxy", cU, "_ep")
          }
        }))
      }(UU))), XU("    removeEmptyRanks", (() => function(UU) {
        let XU = UU.nodes().map((XU => UU.node(XU).rank)).filter((UU => void 0 !== UU)),
          zU = JU(Math.min, XU),
          cU = [];
        UU.nodes().forEach((XU => {
          let yU = UU.node(XU).rank - zU;
          cU[yU] || (cU[yU] = []), cU[yU].push(XU)
        }));
        let yU = 0,
          QU = UU.graph().nodeRankFactor;
        Array.from(cU).forEach(((XU, zU) => {
          void 0 === XU && zU % QU !== 0 ? --yU : void 0 !== XU && yU && XU.forEach((XU => UU.node(XU).rank += yU))
        }))
      }(UU))), XU("    nestingGraph.cleanup", (() => function(UU) {
        let XU = UU.graph();
        UU.removeNode(XU.nestingRoot), delete XU.nestingRoot, UU.edges().forEach((XU => {
          UU.edge(XU).nestingEdge && UU.removeEdge(XU)
        }))
      }(UU))), XU("    normalizeRanks", (() => function(UU) {
        let XU = UU.nodes().map((XU => {
            let zU = UU.node(XU).rank;
            return void 0 === zU ? Number.MAX_VALUE : zU
          })),
          zU = JU(Math.min, XU);
        UU.nodes().forEach((XU => {
          let cU = UU.node(XU);
          Object.hasOwn(cU, "rank") && (cU.rank -= zU)
        }))
      }(UU))), XU("    assignRankMinMax", (() => function(UU) {
        let XU = 0;
        UU.nodes().forEach((zU => {
          let cU = UU.node(zU);
          cU.borderTop && (cU.minRank = UU.node(cU.borderTop).rank, cU.maxRank = UU.node(cU.borderBottom).rank, XU = Math.max(XU, cU.maxRank))
        })), UU.graph().maxRank = XU
      }(UU))), XU("    removeEdgeLabelProxies", (() => function(UU) {
        UU.nodes().forEach((XU => {
          let zU = UU.node(XU);
          if ("edge-proxy" === zU.dummy) {
            let cU = zU;
            UU.edge(cU.e).labelRank = zU.rank, UU.removeNode(XU)
          }
        }))
      }(UU))), XU("    normalize.run", (() => pX(UU))), XU("    parentDummyChains", (() => iX(UU))), XU("    addBorderSegments", (() => vX(UU))), XU("    order", (() => zz(UU, zU, oU))), XU("    insertSelfEdges", (() => function(UU) {
        mU(UU).forEach((XU => {
          let zU = 0;
          XU.forEach(((XU, cU) => {
            let yU = UU.node(XU);
            "number" != typeof yU.rank && (yU.rank = 0), yU.order = cU + zU, (yU.selfEdges || []).forEach((XU => {
              VU(UU, "selfedge", {
                width: XU.label.width,
                height: XU.label.height,
                rank: yU.rank,
                order: cU + ++zU,
                e: XU.e,
                edgeLabel: XU.label
              }, "_se"), (!Array.isArray(XU.label.points) || 7 !== XU.label.points.length) && (XU.label.points = [{
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
            })), delete yU.selfEdges
          }))
        }))
      }(UU))), XU("    adjustCoordinateSystem", (() => function(UU) {
        var XU;
        let zU = null == (XU = UU.graph().rankdir) ? void 0 : XU.toLowerCase();
        ("lr" === zU || "rl" === zU) && nX(UU)
      }(UU))), XU("    position", (() => Yz(UU, zU.corePath))), XU("    positionSelfEdges", (() => function(UU) {
        UU.nodes().forEach((XU => {
          let zU = UU.node(XU),
            cU = UU => "number" == typeof UU && isFinite(UU);
          if ("selfedge" === zU.dummy) {
            let yU = zU,
              QU = UU.node(yU.e.v),
              AU = cU(null == QU ? void 0 : QU.x) ? QU.x : 0,
              FU = cU(null == QU ? void 0 : QU.y) ? QU.y : 0,
              oU = cU(null == QU ? void 0 : QU.width) ? QU.width : 0,
              DU = cU(null == QU ? void 0 : QU.height) ? QU.height : 0,
              EU = cU(zU.x) ? zU.x : AU,
              YU = cU(zU.y) ? zU.y : FU,
              NU = oU / 2,
              IU = DU / 2;
            yU.edgeLabel.points = [{
              x: EU + NU,
              y: YU - IU
            }, {
              x: EU + NU,
              y: YU - IU
            }, {
              x: EU,
              y: YU
            }, {
              x: EU - NU,
              y: YU + IU
            }, {
              x: EU - NU,
              y: YU + IU
            }, {
              x: EU,
              y: YU
            }, {
              x: EU,
              y: YU
            }], yU.edgeLabel.x = EU, yU.edgeLabel.y = YU, UU.setEdge(yU.e, yU.edgeLabel), UU.removeNode(XU)
          } else zU && Array.isArray(zU.selfEdges) && zU.selfEdges.forEach((UU => {
            if (!Array.isArray(UU.label.points) || 7 !== UU.label.points.length) {
              let XU = cU(zU.x) ? zU.x : 0,
                yU = cU(zU.y) ? zU.y : 0,
                QU = (cU(zU.width) ? zU.width : 0) / 2,
                AU = (cU(zU.height) ? zU.height : 0) / 2;
              UU.label.points = [{
                x: XU + QU,
                y: yU - AU
              }, {
                x: XU + QU,
                y: yU - AU
              }, {
                x: XU,
                y: yU
              }, {
                x: XU - QU,
                y: yU + AU
              }, {
                x: XU - QU,
                y: yU + AU
              }, {
                x: XU,
                y: yU
              }, {
                x: XU,
                y: yU
              }]
            }
          }))
        }))
      }(UU)));
      let DU = JSON.parse(JSON.stringify(UU._nodes));
      return XU("    removeBorderNodes", (() => function(UU) {
        UU.nodes().forEach((XU => {
          if (UU.children(XU).length) {
            let zU = UU.node(XU),
              cU = UU.node(zU.borderTop),
              yU = UU.node(zU.borderBottom),
              QU = UU.node(zU.borderLeft[zU.borderLeft.length - 1]),
              AU = UU.node(zU.borderRight[zU.borderRight.length - 1]);
            zU.width = Math.abs(AU.x - QU.x), zU.height = Math.abs(yU.y - cU.y), zU.x = QU.x + zU.width / 2, zU.y = cU.y + zU.height / 2
          }
        })), UU.nodes().forEach((XU => {
          "border" === UU.node(XU).dummy && UU.removeNode(XU)
        }))
      }(UU))), XU("    normalize.undo", (() => function(UU) {
        UU.graph().dummyChains.forEach((XU => {
          let zU, cU = UU.node(XU),
            yU = cU.edgeLabel;
          for (UU.setEdge(cU.edgeObj, yU); cU.dummy;) zU = UU.successors(XU)[0], UU.removeNode(XU), yU.points.push({
            x: cU.x,
            y: cU.y
          }), "edge-label" === cU.dummy && (yU.x = cU.x, yU.y = cU.y, yU.width = cU.width, yU.height = cU.height), XU = zU, cU = UU.node(XU)
        }))
      }(UU))), XU("    fixupEdgeLabelCoords", (() => function(UU) {
        UU.edges().forEach((XU => {
          let zU = UU.edge(XU);
          if (Object.hasOwn(zU, "x")) switch (("l" === zU.labelpos || "r" === zU.labelpos) && (zU.width -= zU.labeloffset), zU.labelpos) {
            case "l":
              zU.x -= zU.width / 2 + zU.labeloffset;
              break;
            case "r":
              zU.x += zU.width / 2 + zU.labeloffset
          }
        }))
      }(UU))), XU("    undoCoordinateSystem", (() => sX(UU))), XU("    translateGraph", (() => function(UU) {
        let XU = Number.POSITIVE_INFINITY,
          zU = 0,
          cU = Number.POSITIVE_INFINITY,
          yU = 0,
          QU = UU.graph(),
          AU = QU.marginx || 0,
          FU = QU.marginy || 0;

        function oU(UU) {
          let QU = UU.x,
            AU = UU.y,
            FU = UU.width,
            oU = UU.height;
          XU = Math.min(XU, QU - FU / 2), zU = Math.max(zU, QU + FU / 2), cU = Math.min(cU, AU - oU / 2), yU = Math.max(yU, AU + oU / 2)
        }
        UU.nodes().forEach((XU => oU(UU.node(XU)))), UU.edges().forEach((XU => {
          let zU = UU.edge(XU);
          Object.hasOwn(zU, "x") && oU(zU)
        })), XU -= AU, cU -= FU, UU.nodes().forEach((zU => {
          let yU = UU.node(zU);
          yU.x -= XU, yU.y -= cU
        })), UU.edges().forEach((zU => {
          let yU = UU.edge(zU);
          yU.points.forEach((UU => {
            UU.x -= XU, UU.y -= cU
          })), Object.hasOwn(yU, "x") && (yU.x -= XU), Object.hasOwn(yU, "y") && (yU.y -= cU)
        })), QU.width = zU - XU + AU, QU.height = yU - cU + FU
      }(UU))), XU("    assignNodeIntersects", (() => function(UU) {
        UU.edges().forEach((XU => {
          if (XU.v === XU.w) return;
          let zU, cU, yU = UU.edge(XU),
            QU = UU.node(XU.v),
            AU = UU.node(XU.w);
          yU.points ? (zU = yU.points[0], cU = yU.points[yU.points.length - 1]) : (yU.points = [], zU = AU, cU = QU), yU.points.unshift(nU(QU, zU)), yU.points.push(nU(AU, cU))
        }))
      }(UU))), XU("    reversePoints", (() => function(UU) {
        UU.edges().forEach((XU => {
          let zU = UU.edge(XU);
          zU.reversed && zU.points.reverse()
        }))
      }(UU))), XU("    acyclic.undo", (() => function(UU) {
        UU.edges().forEach((XU => {
          let zU = UU.edge(XU);
          if (zU.reversed) {
            UU.removeEdge(XU);
            let cU = zU.forwardName;
            delete zU.reversed, delete zU.forwardName, UU.setEdge(XU.w, XU.v, zU, cU)
          }
        }))
      }(UU))), {
        graph: UU,
        rawNodes: DU
      }
    }

    function gz(UU, XU) {
      UU.nodes().forEach((zU => {
        let cU = UU.node(zU),
          yU = XU.node(zU);
        cU && (cU.x = yU.x, cU.y = yU.y, cU.order = yU.order, cU.rank = yU.rank, XU.children(zU).length && (cU.width = yU.width, cU.height = yU.height))
      })), UU.edges().forEach((zU => {
        let cU = UU.edge(zU),
          yU = XU.edge(zU);
        cU.points = yU.points, Object.hasOwn(yU, "x") && (cU.x = yU.x, cU.y = yU.y)
      })), UU.graph().width = XU.graph().width, UU.graph().height = XU.graph().height
    }
    var kz = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Gz = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Bz = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Zz = ["width", "height", "rank"],
      Rz = {
        width: 0,
        height: 0
      },
      Pz = ["minlen", "weight", "width", "height", "labeloffset"],
      Wz = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      dz = ["labelpos"];

    function Lz(UU) {
      let XU = new vU({
          multigraph: !0,
          compound: !0
        }),
        zU = Cz(UU.graph());
      return XU.setGraph(Object.assign({}, Gz, ez(zU, kz), XX(zU, Bz))), UU.nodes().forEach((zU => {
        let cU = ez(Cz(UU.node(zU)), Zz);
        Object.keys(Rz).forEach((UU => {
          void 0 === cU[UU] && (cU[UU] = Rz[UU])
        })), XU.setNode(zU, cU);
        let yU = UU.parent(zU);
        void 0 !== yU && XU.setParent(zU, yU)
      })), UU.edges().forEach((zU => {
        let cU = Cz(UU.edge(zU));
        XU.setEdge(zU, Object.assign({}, Wz, ez(cU, Pz), XX(cU, dz)))
      })), XU
    }

    function ez(UU, XU) {
      return zX(XX(UU, XU), Number)
    }

    function Cz(UU) {
      let XU = {};
      return UU && Object.entries(UU).forEach((UU => {
        let [zU, cU] = UU;
        "string" == typeof zU && (zU = zU.toLowerCase()), XU[zU] = cU
      })), XU
    }

    function wz(UU) {
      let XU = mU(UU),
        zU = new vU({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return UU.nodes().forEach((XU => {
        zU.setNode(XU, {
          label: XU
        }), zU.setParent(XU, "layer" + UU.node(XU).rank)
      })), UU.edges().forEach((UU => zU.setEdge(UU.v, UU.w, {}, UU.name))), XU.forEach(((UU, XU) => {
        let cU = "layer" + XU;
        zU.setNode(cU, {
          rank: "same"
        }), UU.reduce(((UU, XU) => (zU.setEdge(UU, XU, {
          style: "invis"
        }), XU)))
      })), zU
    }
    var qz = {
        time: KU,
        notime: bU
      },
      Oz = {
        graphlib: QU,
        version: QX,
        layout: Iz,
        debug: wz,
        util: {
          time: KU,
          notime: bU
        }
      }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);