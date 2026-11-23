/*! For license information please see w4ddu.118.68f58812.chunk.js.LICENSE.txt */
export const id = 118;
export const ids = [118];
export const modules = {
  6445: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Graph: () => sC,
      debug: () => YZ,
      default: () => mZ,
      graphlib: () => bC,
      layout: () => MZ,
      util: () => dZ,
      version: () => bz
    });
    var QC = Object.defineProperty,
      wC = (CC, zC, ZC) => ((CC, zC, ZC) => zC in CC ? QC(CC, zC, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ZC
      }) : CC[zC] = ZC)(CC, "symbol" != typeof zC ? zC + "" : zC, ZC),
      bC = {};
    ((CC, zC) => {
      for (var ZC in zC) QC(CC, ZC, {
        get: zC[ZC],
        enumerable: !0
      })
    })(bC, {
      Graph: () => sC,
      alg: () => PC
    });
    var nC = Object.defineProperty,
      fC = (CC, zC) => {
        for (var ZC in zC) nC(CC, ZC, {
          get: zC[ZC],
          enumerable: !0
        })
      },
      oC = class {
        constructor(CC) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, CC && (this._isDirected = !("directed" in CC) || CC.directed, this._isMultigraph = "multigraph" in CC && CC.multigraph, this._isCompound = "compound" in CC && CC.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(CC) {
          return this._label = CC, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(CC) {
          return this._defaultNodeLabelFn = "function" != typeof CC ? () => CC : CC, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((CC => 0 === Object.keys(this._in[CC]).length))
        }
        sinks() {
          return this.nodes().filter((CC => 0 === Object.keys(this._out[CC]).length))
        }
        setNodes(CC, zC) {
          return CC.forEach((CC => {
            void 0 !== zC ? this.setNode(CC, zC) : this.setNode(CC)
          })), this
        }
        setNode(CC, zC) {
          return CC in this._nodes ? (arguments.length > 1 && (this._nodes[CC] = zC), this) : (this._nodes[CC] = arguments.length > 1 ? zC : this._defaultNodeLabelFn(CC), this._isCompound && (this._parent[CC] = "\0", this._children[CC] = {}, this._children["\0"][CC] = !0), this._in[CC] = {}, this._preds[CC] = {}, this._out[CC] = {}, this._sucs[CC] = {}, ++this._nodeCount, this)
        }
        node(CC) {
          return this._nodes[CC]
        }
        hasNode(CC) {
          return CC in this._nodes
        }
        removeNode(CC) {
          if (CC in this._nodes) {
            let zC = CC => this.removeEdge(this._edgeObjs[CC]);
            delete this._nodes[CC], this._isCompound && (this._removeFromParentsChildList(CC), delete this._parent[CC], this.children(CC).forEach((CC => {
              this.setParent(CC)
            })), delete this._children[CC]), Object.keys(this._in[CC]).forEach(zC), delete this._in[CC], delete this._preds[CC], Object.keys(this._out[CC]).forEach(zC), delete this._out[CC], delete this._sucs[CC], --this._nodeCount
          }
          return this
        }
        setParent(CC, zC) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === zC) zC = "\0";
          else {
            for (let ZC = zC += ""; void 0 !== ZC; ZC = this.parent(ZC))
              if (ZC === CC) throw new Error("Setting " + zC + " as parent of " + CC + " would create a cycle");
            this.setNode(zC)
          }
          return this.setNode(CC), this._removeFromParentsChildList(CC), this._parent[CC] = zC, this._children[zC][CC] = !0, this
        }
        parent(CC) {
          if (this._isCompound) {
            let zC = this._parent[CC];
            if ("\0" !== zC) return zC
          }
        }
        children() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let zC = this._children[CC];
            if (zC) return Object.keys(zC)
          } else {
            if ("\0" === CC) return this.nodes();
            if (this.hasNode(CC)) return []
          }
          return []
        }
        predecessors(CC) {
          let zC = this._preds[CC];
          if (zC) return Object.keys(zC)
        }
        successors(CC) {
          let zC = this._sucs[CC];
          if (zC) return Object.keys(zC)
        }
        neighbors(CC) {
          let zC = this.predecessors(CC);
          if (zC) {
            let ZC = new Set(zC),
              QC = this.successors(CC);
            if (QC)
              for (let CC of QC) ZC.add(CC);
            return Array.from(ZC.values())
          }
        }
        isLeaf(CC) {
          var zC;
          let ZC;
          return ZC = this.isDirected() ? this.successors(CC) : this.neighbors(CC), 0 === (null != (zC = null == ZC ? void 0 : ZC.length) ? zC : 0)
        }
        filterNodes(CC) {
          let zC = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          zC.setGraph(this.graph()), Object.entries(this._nodes).forEach((ZC => {
            let [QC, wC] = ZC;
            CC(QC) && zC.setNode(QC, wC)
          })), Object.values(this._edgeObjs).forEach((CC => {
            zC.hasNode(CC.v) && zC.hasNode(CC.w) && zC.setEdge(CC, this.edge(CC))
          }));
          let ZC = {},
            QC = CC => {
              let wC = this.parent(CC);
              return !wC || zC.hasNode(wC) ? (ZC[CC] = wC, wC) : wC in ZC ? ZC[wC] : QC(wC)
            };
          return this._isCompound && zC.nodes().forEach((CC => zC.setParent(CC, QC(CC)))), zC
        }
        setDefaultEdgeLabel(CC) {
          return this._defaultEdgeLabelFn = "function" != typeof CC ? () => CC : CC, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(CC, zC) {
          return CC.reduce(((CC, ZC) => (void 0 !== zC ? this.setEdge(CC, ZC, zC) : this.setEdge(CC, ZC), ZC))), this
        }
        setEdge(CC, zC, ZC, QC) {
          let wC, bC, nC, fC, oC = !1;
          "object" == typeof CC && null !== CC && "v" in CC ? (wC = CC.v, bC = CC.w, nC = CC.name, 2 === arguments.length && (fC = zC, oC = !0)) : (wC = CC, bC = zC, nC = QC, arguments.length > 2 && (fC = ZC, oC = !0)), wC = "" + wC, bC = "" + bC, void 0 !== nC && (nC = "" + nC);
          let FC = WC(this._isDirected, wC, bC, nC);
          if (FC in this._edgeLabels) return oC && (this._edgeLabels[FC] = fC), this;
          if (void 0 !== nC && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(wC), this.setNode(bC), this._edgeLabels[FC] = oC ? fC : this._defaultEdgeLabelFn(wC, bC, nC);
          let NC = function(CC, zC, ZC, QC) {
            let wC = "" + zC,
              bC = "" + ZC;
            if (!CC && wC > bC) {
              let CC = wC;
              wC = bC, bC = CC
            }
            let nC = {
              v: wC,
              w: bC
            };
            return QC && (nC.name = QC), nC
          }(this._isDirected, wC, bC, nC);
          return wC = NC.v, bC = NC.w, Object.freeze(NC), this._edgeObjs[FC] = NC, qC(this._preds[bC], wC), qC(this._sucs[wC], bC), this._in[bC][FC] = NC, this._out[wC][FC] = NC, this._edgeCount++, this
        }
        edge(CC, zC, ZC) {
          let QC = 1 === arguments.length ? NC(this._isDirected, CC) : WC(this._isDirected, CC, zC, ZC);
          return this._edgeLabels[QC]
        }
        edgeAsObj(CC, zC, ZC) {
          let QC = 1 === arguments.length ? this.edge(CC) : this.edge(CC, zC, ZC);
          return "object" != typeof QC || null === QC ? {
            label: QC
          } : QC
        }
        hasEdge(CC, zC, ZC) {
          return (1 === arguments.length ? NC(this._isDirected, CC) : WC(this._isDirected, CC, zC, ZC)) in this._edgeLabels
        }
        removeEdge(CC, zC, ZC) {
          let QC = 1 === arguments.length ? NC(this._isDirected, CC) : WC(this._isDirected, CC, zC, ZC),
            wC = this._edgeObjs[QC];
          if (wC) {
            let CC = wC.v,
              zC = wC.w;
            delete this._edgeLabels[QC], delete this._edgeObjs[QC], FC(this._preds[zC], CC), FC(this._sucs[CC], zC), delete this._in[zC][QC], delete this._out[CC][QC], this._edgeCount--
          }
          return this
        }
        inEdges(CC, zC) {
          return this.isDirected() ? this.filterEdges(this._in[CC], CC, zC) : this.nodeEdges(CC, zC)
        }
        outEdges(CC, zC) {
          return this.isDirected() ? this.filterEdges(this._out[CC], CC, zC) : this.nodeEdges(CC, zC)
        }
        nodeEdges(CC, zC) {
          if (CC in this._nodes) return this.filterEdges({
            ...this._in[CC],
            ...this._out[CC]
          }, CC, zC)
        }
        _removeFromParentsChildList(CC) {
          delete this._children[this._parent[CC]][CC]
        }
        filterEdges(CC, zC, ZC) {
          if (!CC) return;
          let QC = Object.values(CC);
          return ZC ? QC.filter((CC => CC.v === zC && CC.w === ZC || CC.v === ZC && CC.w === zC)) : QC
        }
      };

    function qC(CC, zC) {
      CC[zC] ? CC[zC]++ : CC[zC] = 1
    }

    function FC(CC, zC) {
      void 0 !== CC[zC] && !--CC[zC] && delete CC[zC]
    }

    function WC(CC, zC, ZC, QC) {
      let wC = "" + zC,
        bC = "" + ZC;
      if (!CC && wC > bC) {
        let CC = wC;
        wC = bC, bC = CC
      }
      return wC + "\x01" + bC + "\x01" + (void 0 === QC ? "\0" : QC)
    }

    function NC(CC, zC) {
      return WC(CC, zC.v, zC.w, zC.name)
    }

    function MC(CC) {
      let zC = {
          options: {
            directed: CC.isDirected(),
            multigraph: CC.isMultigraph(),
            compound: CC.isCompound()
          },
          nodes: gC(CC),
          edges: SC(CC)
        },
        ZC = CC.graph();
      return void 0 !== ZC && (zC.value = structuredClone(ZC)), zC
    }

    function gC(CC) {
      return CC.nodes().map((zC => {
        let ZC = CC.node(zC),
          QC = CC.parent(zC),
          wC = {
            v: zC
          };
        return void 0 !== ZC && (wC.value = ZC), void 0 !== QC && (wC.parent = QC), wC
      }))
    }

    function SC(CC) {
      return CC.edges().map((zC => {
        let ZC = CC.edge(zC),
          QC = {
            v: zC.v,
            w: zC.w
          };
        return void 0 !== zC.name && (QC.name = zC.name), void 0 !== ZC && (QC.value = ZC), QC
      }))
    }

    function pC(CC) {
      let zC = new oC(CC.options);
      return void 0 !== CC.value && zC.setGraph(CC.value), CC.nodes.forEach((CC => {
        zC.setNode(CC.v, CC.value), CC.parent && zC.setParent(CC.v, CC.parent)
      })), CC.edges.forEach((CC => {
        zC.setEdge({
          v: CC.v,
          w: CC.w,
          name: CC.name
        }, CC.value)
      })), zC
    }
    fC({}, {
      read: () => pC,
      write: () => MC
    });
    var PC = {};
    fC(PC, {
      CycleException: () => YC,
      bellmanFord: () => RC,
      components: () => AC,
      dijkstra: () => IC,
      dijkstraAll: () => iC,
      findCycles: () => eC,
      floydWarshall: () => KC,
      isAcyclic: () => mC,
      postorder: () => XC,
      preorder: () => cC,
      prim: () => uC,
      shortestPaths: () => rC,
      tarjan: () => vC,
      topsort: () => dC
    });
    var GC = () => 1;

    function RC(CC, zC, ZC, QC) {
      return function(CC, zC, ZC, QC) {
        let wC, bC = {},
          nC = 0,
          fC = CC.nodes(),
          oC = function(CC) {
            let zC = bC[CC.v],
              QC = bC[CC.w];
            if (!zC || !QC) return;
            let nC = ZC(CC);
            zC.distance + nC < QC.distance && (bC[CC.w] = {
              distance: zC.distance + nC,
              predecessor: CC.v
            }, wC = !0)
          },
          qC = function() {
            fC.forEach((function(CC) {
              QC(CC).forEach((function(zC) {
                let ZC = zC.v === CC ? zC.v : zC.w,
                  QC = ZC === zC.v ? zC.w : zC.v;
                oC({
                  v: ZC,
                  w: QC
                })
              }))
            }))
          };
        fC.forEach((function(CC) {
          let ZC = CC === zC ? 0 : Number.POSITIVE_INFINITY;
          bC[CC] = {
            distance: ZC,
            predecessor: ""
          }
        }));
        let FC = fC.length;
        for (let WC = 1; WC < FC && (wC = !1, nC++, qC(), wC); WC++);
        if (nC === FC - 1 && (wC = !1, qC(), wC)) throw new Error("The graph contains a negative weight cycle");
        return bC
      }(CC, String(zC), ZC || GC, QC || function(zC) {
        var ZC;
        return null != (ZC = CC.outEdges(zC)) ? ZC : []
      })
    }

    function AC(CC) {
      let zC, ZC = {},
        QC = [];

      function wC(QC) {
        var bC, nC;
        QC in ZC || (ZC[QC] = !0, zC.push(QC), null == (bC = CC.successors(QC)) || bC.forEach(wC), null == (nC = CC.predecessors(QC)) || nC.forEach(wC))
      }
      return CC.nodes().forEach((function(CC) {
        zC = [], wC(CC), zC.length && QC.push(zC)
      })), QC
    }
    var xC = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((CC => CC.key))
        }
        has(CC) {
          return CC in this._keyIndices
        }
        priority(CC) {
          let zC = this._keyIndices[CC];
          if (void 0 !== zC) return this._arr[zC].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(CC, zC) {
          let ZC = this._keyIndices,
            QC = String(CC);
          if (!(QC in ZC)) {
            let CC = this._arr,
              wC = CC.length;
            return ZC[QC] = wC, CC.push({
              key: QC,
              priority: zC
            }), this._decrease(wC), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let CC = this._arr.pop();
          return delete this._keyIndices[CC.key], this._heapify(0), CC.key
        }
        decrease(CC, zC) {
          let ZC = this._keyIndices[CC];
          if (void 0 === ZC) throw new Error(`Key not found: ${CC}`);
          let QC = this._arr[ZC].priority;
          if (zC > QC) throw new Error(`New priority is greater than current priority. Key: ${CC} Old: ${QC} New: ${zC}`);
          this._arr[ZC].priority = zC, this._decrease(ZC)
        }
        _heapify(CC) {
          let zC = this._arr,
            ZC = 2 * CC,
            QC = ZC + 1,
            wC = CC;
          ZC < zC.length && (wC = zC[ZC].priority < zC[wC].priority ? ZC : wC, QC < zC.length && (wC = zC[QC].priority < zC[wC].priority ? QC : wC), wC !== CC && (this._swap(CC, wC), this._heapify(wC)))
        }
        _decrease(CC) {
          let zC, ZC = this._arr,
            QC = ZC[CC].priority;
          for (; 0 !== CC && (zC = CC >> 1, !(ZC[zC].priority < QC));) this._swap(CC, zC), CC = zC
        }
        _swap(CC, zC) {
          let ZC = this._arr,
            QC = this._keyIndices,
            wC = ZC[CC],
            bC = ZC[zC];
          ZC[CC] = bC, ZC[zC] = wC, QC[bC.key] = CC, QC[wC.key] = zC
        }
      },
      JC = () => 1;

    function IC(CC, zC, ZC, QC) {
      return function(CC, zC, ZC, QC) {
        let wC, bC, nC = {},
          fC = new xC,
          oC = function(CC) {
            let zC = CC.v !== wC ? CC.v : CC.w,
              QC = nC[zC];
            if (!QC) return;
            let oC = ZC(CC),
              qC = bC.distance + oC;
            if (oC < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + CC + " Weight: " + oC);
            qC < QC.distance && (QC.distance = qC, QC.predecessor = wC, fC.decrease(zC, qC))
          };
        for (CC.nodes().forEach((function(CC) {
            let ZC = CC === zC ? 0 : Number.POSITIVE_INFINITY;
            nC[CC] = {
              distance: ZC,
              predecessor: ""
            }, fC.add(CC, ZC)
          })); fC.size() > 0;) {
          wC = fC.removeMin();
          let CC = nC[wC];
          if (!CC || CC.distance === Number.POSITIVE_INFINITY) break;
          bC = CC, QC(wC).forEach(oC)
        }
        return nC
      }(CC, String(zC), ZC || JC, QC || function(zC) {
        var ZC;
        return null != (ZC = CC.outEdges(zC)) ? ZC : []
      })
    }

    function iC(CC, zC, ZC) {
      return CC.nodes().reduce((function(QC, wC) {
        return QC[wC] = IC(CC, wC, zC, ZC), QC
      }), {})
    }

    function vC(CC) {
      let zC = 0,
        ZC = [],
        QC = {},
        wC = [];

      function bC(nC) {
        var fC;
        let oC = QC[nC] = {
          onStack: !0,
          lowlink: zC,
          index: zC++
        };
        if (ZC.push(nC), null == (fC = CC.successors(nC)) || fC.forEach((function(CC) {
            if (CC in QC) {
              let zC = QC[CC];
              null != zC && zC.onStack && (oC.lowlink = Math.min(oC.lowlink, zC.index))
            } else {
              bC(CC);
              let zC = QC[CC];
              zC && (oC.lowlink = Math.min(oC.lowlink, zC.lowlink))
            }
          })), oC.lowlink === oC.index) {
          let CC, zC = [];
          do {
            CC = ZC.pop();
            let wC = QC[CC];
            wC && (wC.onStack = !1), zC.push(CC)
          } while (nC !== CC);
          wC.push(zC)
        }
      }
      return CC.nodes().forEach((function(CC) {
        CC in QC || bC(CC)
      })), wC
    }

    function eC(CC) {
      return vC(CC).filter((function(zC) {
        var ZC;
        let QC = zC[0];
        return !!QC && (zC.length > 1 || 1 === zC.length && (null != (ZC = CC.outEdges(QC, QC)) ? ZC : []).length > 0)
      }))
    }
    var hC = () => 1;

    function KC(CC, zC, ZC) {
      return function(CC, zC, ZC) {
        let QC = {},
          wC = CC.nodes();
        return wC.forEach((function(CC) {
          let bC = {};
          QC[CC] = bC, bC[CC] = {
            distance: 0,
            predecessor: ""
          }, wC.forEach((function(zC) {
            CC !== zC && (bC[zC] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ZC(CC).forEach((function(ZC) {
            let QC = ZC.v === CC ? ZC.w : ZC.v,
              wC = zC(ZC);
            bC[QC] = {
              distance: wC,
              predecessor: CC
            }
          }))
        })), wC.forEach((function(CC) {
          let zC = QC[CC];
          zC && wC.forEach((function(ZC) {
            let bC = QC[ZC];
            bC && wC.forEach((function(ZC) {
              let QC = bC[CC],
                wC = zC[ZC],
                nC = bC[ZC];
              if (QC && wC && nC) {
                let CC = QC.distance + wC.distance;
                CC < nC.distance && (nC.distance = CC, nC.predecessor = wC.predecessor)
              }
            }))
          }))
        })), QC
      }(CC, zC || hC, ZC || function(zC) {
        var ZC;
        return null != (ZC = CC.outEdges(zC)) ? ZC : []
      })
    }
    var YC = class extends Error {
      constructor(CC) {
        super(CC), this.name = "CycleException"
      }
    };

    function dC(CC) {
      let zC = {},
        ZC = {},
        QC = [];
      if (CC.sinks().forEach((function wC(bC) {
          var nC;
          if (bC in ZC) throw new YC;
          bC in zC || (ZC[bC] = !0, zC[bC] = !0, null == (nC = CC.predecessors(bC)) || nC.forEach(wC), delete ZC[bC], QC.push(bC))
        })), Object.keys(zC).length !== CC.nodeCount()) throw new YC;
      return QC
    }

    function mC(CC) {
      try {
        dC(CC)
      } catch (zC) {
        if (zC instanceof YC) return !1;
        throw zC
      }
      return !0
    }

    function HC(CC, zC, ZC, QC, wC) {
      Array.isArray(zC) || (zC = [zC]);
      let bC = zC => {
          var ZC;
          return null != (ZC = CC.isDirected() ? CC.successors(zC) : CC.neighbors(zC)) ? ZC : []
        },
        nC = {};
      return zC.forEach((function(zC) {
        if (!CC.hasNode(zC)) throw new Error("Graph does not have node: " + zC);
        wC = EC(CC, zC, "post" === ZC, nC, bC, QC, wC)
      })), wC
    }

    function EC(CC, zC, ZC, QC, wC, bC, nC) {
      return zC in QC || (QC[zC] = !0, ZC || (nC = bC(nC, zC)), wC(zC).forEach((function(zC) {
        nC = EC(CC, zC, ZC, QC, wC, bC, nC)
      })), ZC && (nC = bC(nC, zC))), nC
    }

    function lC(CC, zC, ZC) {
      return HC(CC, zC, ZC, (function(CC, zC) {
        return CC.push(zC), CC
      }), [])
    }

    function XC(CC, zC) {
      return lC(CC, zC, "post")
    }

    function cC(CC, zC) {
      return lC(CC, zC, "pre")
    }

    function uC(CC, zC) {
      var ZC;
      let QC, wC = new oC,
        bC = {},
        nC = new xC;

      function fC(CC) {
        let ZC = CC.v === QC ? CC.w : CC.v,
          wC = nC.priority(ZC);
        if (void 0 !== wC) {
          let fC = zC(CC);
          fC < wC && (bC[ZC] = QC, nC.decrease(ZC, fC))
        }
      }
      if (0 === CC.nodeCount()) return wC;
      CC.nodes().forEach((function(CC) {
        nC.add(CC, Number.POSITIVE_INFINITY), wC.setNode(CC)
      }));
      let qC = CC.nodes()[0];
      void 0 !== qC && nC.decrease(qC, 0);
      let FC = !1;
      for (; nC.size() > 0;) {
        if (QC = nC.removeMin(), QC in bC) wC.setEdge(QC, bC[QC]);
        else {
          if (FC) throw new Error("Input graph is not connected: " + CC);
          FC = !0
        }
        null == (ZC = CC.nodeEdges(QC)) || ZC.forEach(fC)
      }
      return wC
    }

    function rC(CC, zC, ZC, QC) {
      return function(CC, zC, ZC, QC) {
        if (void 0 === ZC) return IC(CC, zC, ZC, QC);
        let wC = !1,
          bC = CC.nodes();
        for (let nC = 0; nC < bC.length; nC++) {
          let fC = bC[nC];
          if (void 0 === fC) continue;
          let oC = QC(fC);
          for (let CC = 0; CC < oC.length; CC++) {
            let zC = oC[CC];
            if (!zC) continue;
            let QC = zC.v === fC ? zC.v : zC.w;
            ZC({
              v: QC,
              w: QC === zC.v ? zC.w : zC.v
            }) < 0 && (wC = !0)
          }
          if (wC) return RC(CC, zC, ZC, QC)
        }
        return IC(CC, zC, ZC, QC)
      }(CC, zC, ZC, null != QC ? QC : zC => {
        var ZC;
        return null != (ZC = CC.outEdges(zC)) ? ZC : []
      })
    }
    var sC = oC;

    function TC(CC, zC, ZC, QC) {
      let wC = QC;
      for (; CC.hasNode(wC);) wC = VC(QC);
      return ZC.dummy = zC, CC.setNode(wC, ZC), wC
    }

    function aC(CC) {
      let zC = new sC({
        multigraph: CC.isMultigraph()
      }).setGraph(CC.graph());
      return CC.nodes().forEach((ZC => {
        CC.children(ZC).length || zC.setNode(ZC, CC.node(ZC))
      })), CC.edges().forEach((ZC => {
        zC.setEdge(ZC, CC.edge(ZC))
      })), zC
    }

    function tC(CC, zC) {
      let ZC, QC, wC = CC.x,
        bC = CC.y,
        nC = zC.x - wC,
        fC = zC.y - bC,
        oC = CC.width / 2,
        qC = CC.height / 2;
      if (!nC && !fC) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(fC) * oC > Math.abs(nC) * qC ? (fC < 0 && (qC = -qC), ZC = qC * nC / fC, QC = qC) : (nC < 0 && (oC = -oC), ZC = oC, QC = oC * fC / nC), {
        x: wC + ZC,
        y: bC + QC
      }
    }

    function DC(CC) {
      let zC = Cz(UC(CC) + 1).map((() => []));
      return CC.nodes().forEach((ZC => {
        let QC = CC.node(ZC),
          wC = QC.rank;
        void 0 !== wC && (zC[wC] || (zC[wC] = []), zC[wC][QC.order] = ZC)
      })), zC
    }

    function jC(CC, zC, ZC, QC) {
      let wC = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (wC.rank = ZC, wC.order = QC), TC(CC, "border", wC, zC)
    }
    var yC = 65535;

    function LC(CC, zC) {
      if (zC.length > yC) {
        let ZC = function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yC,
            ZC = [];
          for (let QC = 0; QC < CC.length; QC += zC) {
            let wC = CC.slice(QC, QC + zC);
            ZC.push(wC)
          }
          return ZC
        }(zC);
        return CC(...ZC.map((zC => CC(...zC))))
      }
      return CC(...zC)
    }

    function UC(CC) {
      let zC = CC.nodes().map((zC => {
        let ZC = CC.node(zC).rank;
        return void 0 === ZC ? Number.MIN_VALUE : ZC
      }));
      return LC(Math.max, zC)
    }

    function BC(CC, zC) {
      let ZC = Date.now();
      try {
        return zC()
      } finally {
        console.log(CC + " time: " + (Date.now() - ZC) + "ms")
      }
    }

    function OC(CC, zC) {
      return zC()
    }
    var kC = 0;

    function VC(CC) {
      return CC + "" + ++kC
    }

    function Cz(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == zC && (zC = CC, CC = 0);
      let QC = CC => CC < zC;
      ZC < 0 && (QC = CC => zC < CC);
      let wC = [];
      for (let bC = CC; QC(bC); bC += ZC) wC.push(bC);
      return wC
    }

    function zz(CC, zC) {
      let ZC = {};
      for (let QC of zC) void 0 !== CC[QC] && (ZC[QC] = CC[QC]);
      return ZC
    }

    function Zz(CC, zC) {
      let ZC;
      return ZC = "string" == typeof zC ? CC => CC[zC] : zC, Object.entries(CC).reduce(((CC, zC) => {
        let [QC, wC] = zC;
        return CC[QC] = ZC(wC, QC), CC
      }), {})
    }
    var Qz = "\0";

    function wz(CC, zC, ZC) {
      var QC, wC, bC, nC, fC, oC;
      if (!(CC && zC && ZC && "edge" === zC.dummy && "edge" === ZC.dummy && zC.edgeObj && ZC.edgeObj && CC[zC.edgeObj.v] && CC[ZC.edgeObj.v] && CC[zC.edgeObj.w] && CC[ZC.edgeObj.w])) return 0;
      let qC = !0;
      zC.edgeObj.w === ZC.edgeObj.w && (qC = !1);
      let FC = qC ? null != (wC = null == (QC = CC[zC.edgeObj.v]) ? void 0 : QC.rank) ? wC : NaN : null != (nC = null == (bC = CC[zC.edgeObj.w]) ? void 0 : bC.rank) ? nC : NaN,
        WC = Object.entries(CC).find((CC => {
          var ZC, QC;
          return (null == (ZC = CC[1].edgeObj) ? void 0 : ZC.v) === zC.edgeObj.v && (null == (QC = CC[1].edgeObj) ? void 0 : QC.w) === zC.edgeObj.w && CC[1].rank === FC
        })),
        NC = Object.entries(CC).find((CC => {
          var zC, QC;
          return (null == (zC = CC[1].edgeObj) ? void 0 : zC.v) === ZC.edgeObj.v && (null == (QC = CC[1].edgeObj) ? void 0 : QC.w) === ZC.edgeObj.w && CC[1].rank === FC
        }));
      if (!WC || !NC) return 0;
      let MC = null != (fC = WC[1].order) ? fC : NaN,
        gC = null != (oC = NC[1].order) ? oC : NaN;
      return isNaN(MC - gC) ? 0 : MC - gC
    }
    var bz = "3.1.1";

    function nz(CC) {
      CC._prev._next = CC._next, CC._next._prev = CC._prev, delete CC._next, delete CC._prev
    }

    function fz(CC, zC) {
      if ("_next" !== CC && "_prev" !== CC) return zC
    }
    var oz = class {
        constructor() {
          wC(this, "_sentinel");
          let CC = {};
          CC._next = CC._prev = CC, this._sentinel = CC
        }
        dequeue() {
          let CC = this._sentinel,
            zC = CC._prev;
          if (zC !== CC) return nz(zC), zC
        }
        enqueue(CC) {
          let zC = this._sentinel;
          CC._prev && CC._next && nz(CC), CC._next = zC._next, zC._next._prev = CC, zC._next = CC, CC._prev = zC
        }
        toString() {
          let CC = [],
            zC = this._sentinel,
            ZC = zC._prev;
          for (; ZC !== zC;) CC.push(JSON.stringify(ZC, fz)), ZC = ZC._prev;
          return "[" + CC.join(", ") + "]"
        }
      },
      qz = () => 1;

    function Fz(CC, zC) {
      if (CC.nodeCount() <= 1) return [];
      let ZC = function(CC, zC) {
        let ZC = new sC,
          QC = 0,
          wC = 0;
        CC.nodes().forEach((CC => {
          ZC.setNode(CC, {
            v: CC,
            in: 0,
            out: 0
          })
        })), CC.edges().forEach((CC => {
          let bC = ZC.edge(CC.v, CC.w) || 0,
            nC = zC(CC),
            fC = bC + nC;
          ZC.setEdge(CC.v, CC.w, fC);
          let oC = ZC.node(CC.v),
            qC = ZC.node(CC.w);
          wC = Math.max(wC, oC.out += nC), QC = Math.max(QC, qC.in += nC)
        }));
        let bC = function(CC) {
            let zC = [];
            for (let ZC = 0; ZC < CC; ZC++) zC.push(ZC);
            return zC
          }(wC + QC + 3).map((() => new oz)),
          nC = QC + 1;
        return ZC.nodes().forEach((CC => {
          Nz(bC, nC, ZC.node(CC))
        })), {
          graph: ZC,
          buckets: bC,
          zeroIdx: nC
        }
      }(CC, zC || qz);
      return function(CC, zC, ZC) {
        var QC;
        let wC, bC = [],
          nC = zC[zC.length - 1],
          fC = zC[0];
        for (; CC.nodeCount();) {
          for (; wC = fC.dequeue();) Wz(CC, zC, ZC, wC);
          for (; wC = nC.dequeue();) Wz(CC, zC, ZC, wC);
          if (CC.nodeCount())
            for (let nC = zC.length - 2; nC > 0; --nC)
              if (wC = null == (QC = zC[nC]) ? void 0 : QC.dequeue(), wC) {
                bC = bC.concat(Wz(CC, zC, ZC, wC, !0) || []);
                break
              }
        }
        return bC
      }(ZC.graph, ZC.buckets, ZC.zeroIdx).flatMap((zC => CC.outEdges(zC.v, zC.w) || []))
    }

    function Wz(CC, zC, ZC, QC, wC) {
      let bC = [],
        nC = wC ? bC : void 0;
      return (CC.inEdges(QC.v) || []).forEach((QC => {
        let nC = CC.edge(QC),
          fC = CC.node(QC.v);
        wC && bC.push({
          v: QC.v,
          w: QC.w
        }), fC.out -= nC, Nz(zC, ZC, fC)
      })), (CC.outEdges(QC.v) || []).forEach((QC => {
        let wC = CC.edge(QC),
          bC = QC.w,
          nC = CC.node(bC);
        nC.in -= wC, Nz(zC, ZC, nC)
      })), CC.removeNode(QC.v), nC
    }

    function Nz(CC, zC, ZC) {
      var QC, wC, bC;
      ZC.out ? ZC.in ? null == (bC = CC[ZC.out - ZC.in + zC]) || bC.enqueue(ZC) : null == (wC = CC[CC.length - 1]) || wC.enqueue(ZC) : null == (QC = CC[0]) || QC.enqueue(ZC)
    }

    function Mz(CC, zC) {
      var ZC;
      ("greedy" === CC.graph().acyclicer ? Fz(CC, (ZC = CC, CC => ZC.edge(CC).weight)) : function(CC, zC) {
        let ZC = [],
          QC = {},
          wC = {};

        function bC(zC) {
          Object.hasOwn(wC, zC) || (wC[zC] = !0, QC[zC] = !0, CC.outEdges(zC).forEach((CC => {
            Object.hasOwn(QC, CC.w) ? ZC.push(CC) : bC(CC.w)
          })), delete QC[zC])
        }

        function nC(bC) {
          var fC;
          Object.hasOwn(wC, bC) || (wC[bC] = !0, QC[bC] = !0, null == (fC = CC.outEdges(bC)) || fC.forEach((wC => {
            var fC, oC;
            Object.hasOwn(QC, wC.w) || (null == (fC = zC.node(bC)) ? void 0 : fC.rank) > (null == (oC = zC.node(wC.w)) ? void 0 : oC.rank) && function(CC, zC, ZC) {
              let QC = new Set;

              function wC(zC) {
                var bC;
                if (CC.sources().includes(zC)) return !0;
                QC.add(zC);
                for (let nC of null != (bC = CC.inEdges(zC)) ? bC : [])
                  if ((nC.v !== ZC.v || nC.w !== ZC.w) && !QC.has(nC.v) && wC(nC.v)) return !0;
                return !1
              }
              return wC(zC)
            }(CC, wC.w, wC) ? ZC.push(wC) : nC(wC.w)
          })), delete QC[bC])
        }
        let fC = bC;
        return zC && "function" == typeof zC.node && (fC = nC), CC.sources().forEach(fC), CC.nodes().forEach(fC), ZC
      }(CC, null != zC ? zC : null)).forEach((zC => {
        let ZC = CC.edge(zC);
        CC.removeEdge(zC), ZC.forwardName = zC.name, ZC.reversed = !0, CC.setEdge(zC.w, zC.v, ZC, VC("rev"))
      }))
    }

    function gz(CC) {
      CC.graph().dummyChains = [], CC.edges().forEach((zC => function(CC, zC) {
        let ZC, QC, wC, bC = zC.v,
          nC = CC.node(bC).rank,
          fC = zC.w,
          oC = CC.node(fC).rank,
          qC = zC.name,
          FC = CC.edge(zC),
          WC = FC.labelRank;
        if (oC === nC + 1) return;
        for (CC.removeEdge(zC), wC = 0, ++nC; nC < oC; ++wC, ++nC) FC.points = [], QC = {
          width: 0,
          height: 0,
          edgeLabel: FC,
          edgeObj: zC,
          rank: nC
        }, ZC = TC(CC, "edge", QC, "_d"), nC === WC && (QC.width = FC.width, QC.height = FC.height, QC.dummy = "edge-label", QC.labelpos = FC.labelpos), CC.setEdge(bC, ZC, {
          weight: FC.weight
        }, qC), 0 === wC && CC.graph().dummyChains.push(ZC), bC = ZC;
        CC.setEdge(bC, fC, {
          weight: FC.weight
        }, qC)
      }(CC, zC)))
    }

    function Sz(CC) {
      let zC = {};
      CC.sources().forEach((function ZC(QC) {
        let wC = CC.node(QC);
        if (Object.hasOwn(zC, QC)) return wC.rank;
        zC[QC] = !0;
        let bC = CC.outEdges(QC),
          nC = bC ? bC.map((zC => null == zC ? Number.POSITIVE_INFINITY : ZC(zC.w) - CC.edge(zC).minlen)) : [],
          fC = LC(Math.min, nC);
        return fC === Number.POSITIVE_INFINITY && (fC = 0), wC.rank = fC
      }))
    }

    function pz(CC, zC) {
      return CC.node(zC.w).rank - CC.node(zC.v).rank - CC.edge(zC).minlen
    }
    var Pz = function(CC) {
      let zC = new sC({
          directed: !1
        }),
        ZC = CC.nodes();
      if (0 === ZC.length) throw new Error("Graph must have at least one node");
      let QC, wC, bC = ZC[0],
        nC = CC.nodeCount();
      for (zC.setNode(bC, {}); Gz(zC, CC) < nC && (QC = Rz(zC, CC), QC);) wC = zC.hasNode(QC.v) ? pz(CC, QC) : -pz(CC, QC), Az(zC, CC, wC);
      return zC
    };

    function Gz(CC, zC) {
      return CC.nodes().forEach((function ZC(QC) {
        let wC = zC.nodeEdges(QC);
        wC && wC.forEach((wC => {
          let bC = wC.v,
            nC = QC === bC ? wC.w : bC;
          !CC.hasNode(nC) && !pz(zC, wC) && (CC.setNode(nC, {}), CC.setEdge(QC, nC, {}), ZC(nC))
        }))
      })), CC.nodeCount()
    }

    function Rz(CC, zC) {
      return zC.edges().reduce(((ZC, QC) => {
        let wC = Number.POSITIVE_INFINITY;
        return CC.hasNode(QC.v) !== CC.hasNode(QC.w) && (wC = pz(zC, QC)), wC < ZC[0] ? [wC, QC] : ZC
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Az(CC, zC, ZC) {
      CC.nodes().forEach((CC => zC.node(CC).rank += ZC))
    }
    var {
      preorder: xz,
      postorder: Jz
    } = PC, Iz = iz;

    function iz(CC) {
      CC = function(CC) {
        let zC = (new sC).setGraph(CC.graph());
        return CC.nodes().forEach((ZC => zC.setNode(ZC, CC.node(ZC)))), CC.edges().forEach((ZC => {
          let QC = zC.edge(ZC.v, ZC.w) || {
              weight: 0,
              minlen: 1
            },
            wC = CC.edge(ZC);
          zC.setEdge(ZC.v, ZC.w, {
            weight: QC.weight + wC.weight,
            minlen: Math.max(QC.minlen, wC.minlen)
          })
        })), zC
      }(CC), Sz(CC);
      let zC, ZC, QC = Pz(CC);
      for (hz(QC), vz(QC, CC); zC = Yz(QC);) ZC = dz(QC, CC, zC), mz(QC, CC, zC, ZC)
    }

    function vz(CC, zC) {
      let ZC = Jz(CC, CC.nodes());
      ZC = ZC.slice(0, ZC.length - 1), ZC.forEach((ZC => function(CC, zC, ZC) {
        let QC = CC.node(ZC).parent,
          wC = CC.edge(ZC, QC);
        wC.cutvalue = ez(CC, zC, ZC)
      }(CC, zC, ZC)))
    }

    function ez(CC, zC, ZC) {
      let QC = CC.node(ZC).parent,
        wC = !0,
        bC = zC.edge(ZC, QC),
        nC = 0;
      bC || (wC = !1, bC = zC.edge(QC, ZC)), nC = bC.weight;
      let fC = zC.nodeEdges(ZC);
      return fC && fC.forEach((bC => {
        let fC = bC.v === ZC,
          oC = fC ? bC.w : bC.v;
        if (oC !== QC) {
          let QC = fC === wC,
            qC = zC.edge(bC).weight;
          if (nC += QC ? qC : -qC, function(CC, zC, ZC) {
              return CC.hasEdge(zC, ZC)
            }(CC, ZC, oC)) {
            let zC = CC.edge(ZC, oC).cutvalue;
            nC += QC ? -zC : zC
          }
        }
      })), nC
    }

    function hz(CC, zC) {
      arguments.length < 2 && (zC = CC.nodes()[0]), Kz(CC, {}, 1, zC)
    }

    function Kz(CC, zC, ZC, QC, wC) {
      let bC = ZC,
        nC = CC.node(QC);
      zC[QC] = !0;
      let fC = CC.neighbors(QC);
      return fC && fC.forEach((wC => {
        Object.hasOwn(zC, wC) || (ZC = Kz(CC, zC, ZC, wC, QC))
      })), nC.low = bC, nC.lim = ZC++, wC ? nC.parent = wC : delete nC.parent, ZC
    }

    function Yz(CC) {
      return CC.edges().find((zC => CC.edge(zC).cutvalue < 0))
    }

    function dz(CC, zC, ZC) {
      let QC = ZC.v,
        wC = ZC.w;
      zC.hasEdge(QC, wC) || (QC = ZC.w, wC = ZC.v);
      let bC = CC.node(QC),
        nC = CC.node(wC),
        fC = bC,
        oC = !1;
      return bC.lim > nC.lim && (fC = nC, oC = !0), zC.edges().filter((zC => oC === Hz(CC, CC.node(zC.v), fC) && oC !== Hz(CC, CC.node(zC.w), fC))).reduce(((CC, ZC) => pz(zC, ZC) < pz(zC, CC) ? ZC : CC))
    }

    function mz(CC, zC, ZC, QC) {
      let wC = ZC.v,
        bC = ZC.w;
      CC.removeEdge(wC, bC), CC.setEdge(QC.v, QC.w, {}), hz(CC), vz(CC, zC),
        function(CC, zC) {
          let ZC = CC.nodes().find((zC => !CC.node(zC).parent));
          if (!ZC) return;
          let QC = xz(CC, [ZC]);
          QC = QC.slice(1), QC.forEach((ZC => {
            let QC = CC.node(ZC).parent,
              wC = zC.edge(ZC, QC),
              bC = !1;
            wC || (wC = zC.edge(QC, ZC), bC = !0), zC.node(ZC).rank = zC.node(QC).rank + (bC ? wC.minlen : -wC.minlen)
          }))
        }(CC, zC)
    }

    function Hz(CC, zC, ZC) {
      return ZC.low <= zC.lim && zC.lim <= ZC.lim
    }
    iz.initLowLimValues = hz, iz.initCutValues = vz, iz.calcCutValue = ez, iz.leaveEdge = Yz, iz.enterEdge = dz, iz.exchangeEdges = mz;
    var Ez = function(CC) {
      let zC = CC.graph().ranker;
      if ("function" == typeof zC) return zC(CC);
      switch (zC) {
        case "network-simplex":
        default:
          Xz(CC);
          break;
        case "tight-tree":
          ! function(CC) {
            Sz(CC), Pz(CC)
          }(CC);
          break;
        case "longest-path":
          lz(CC);
        case "none":
      }
    };
    var lz = Sz;

    function Xz(CC) {
      Iz(CC)
    }
    var cz = function(CC) {
      let zC = function(CC) {
          let zC = {},
            ZC = 0;

          function QC(wC) {
            let bC = ZC;
            CC.children(wC).forEach(QC), zC[wC] = {
              low: bC,
              lim: ZC++
            }
          }
          return CC.children(Qz).forEach(QC), zC
        }(CC),
        ZC = CC.graph();
      if (!Array.isArray(ZC.dummyChains)) return;
      ZC.dummyChains.forEach((ZC => {
        let QC = CC.node(ZC),
          wC = QC.edgeObj,
          bC = function(CC, zC, ZC, QC) {
            let wC, bC = [],
              nC = [],
              fC = Math.min(zC[ZC].low, zC[QC].low),
              oC = Math.max(zC[ZC].lim, zC[QC].lim);
            wC = ZC;
            do {
              wC = CC.parent(wC), bC.push(wC)
            } while (wC && (zC[wC].low > fC || oC > zC[wC].lim));
            let qC = wC,
              FC = QC;
            for (;
              (FC = CC.parent(FC)) !== qC;) nC.push(FC);
            return {
              path: bC.concat(nC.reverse()),
              lca: qC
            }
          }(CC, zC, wC.v, wC.w),
          nC = bC.path,
          fC = bC.lca,
          oC = 0,
          qC = nC[oC],
          FC = !0;
        for (; ZC !== wC.w;) {
          if (QC = CC.node(ZC), FC) {
            for (;
              (qC = nC[oC]) !== fC && CC.node(qC).maxRank < QC.rank;) oC++;
            qC === fC && (FC = !1)
          }
          if (!FC) {
            for (; oC < nC.length - 1 && CC.node(nC[oC + 1]).minRank <= QC.rank;) oC++;
            qC = nC[oC]
          }
          void 0 !== qC && CC.setParent(ZC, qC), ZC = CC.successors(ZC)[0]
        }
      }))
    };

    function uz(CC) {
      let zC = TC(CC, "root", {}, "_root"),
        ZC = function(CC) {
          let zC = {};

          function ZC(QC, wC) {
            let bC = CC.children(QC);
            bC && bC.length && bC.forEach((CC => ZC(CC, wC + 1))), zC[QC] = wC
          }
          return CC.children(Qz).forEach((CC => ZC(CC, 1))), zC
        }(CC),
        QC = Object.values(ZC),
        wC = LC(Math.max, QC) - 1,
        bC = 2 * wC + 1;
      CC.graph().nestingRoot = zC, CC.edges().forEach((zC => CC.edge(zC).minlen *= bC));
      let nC = function(CC) {
        return CC.edges().reduce(((zC, ZC) => zC + CC.edge(ZC).weight), 0)
      }(CC) + 1;
      CC.children(Qz).forEach((QC => {
        rz(CC, zC, bC, nC, wC, ZC, QC)
      })), CC.graph().nodeRankFactor = bC
    }

    function rz(CC, zC, ZC, QC, wC, bC, nC) {
      var fC;
      let oC = CC.children(nC);
      if (!oC.length) return void(nC !== zC && CC.setEdge(zC, nC, {
        weight: 0,
        minlen: ZC
      }));
      let qC = jC(CC, "_bt"),
        FC = jC(CC, "_bb"),
        WC = CC.node(nC);
      CC.setParent(qC, nC), WC.borderTop = qC, CC.setParent(FC, nC), WC.borderBottom = FC, oC.forEach((fC => {
        var oC;
        rz(CC, zC, ZC, QC, wC, bC, fC);
        let WC = CC.node(fC),
          NC = WC.borderTop ? WC.borderTop : fC,
          MC = WC.borderBottom ? WC.borderBottom : fC,
          gC = WC.borderTop ? QC : 2 * QC,
          SC = NC !== MC ? 1 : wC - (null != (oC = bC[nC]) ? oC : 0) + 1;
        CC.setEdge(qC, NC, {
          weight: gC,
          minlen: SC,
          nestingEdge: !0
        }), CC.setEdge(MC, FC, {
          weight: gC,
          minlen: SC,
          nestingEdge: !0
        })
      })), CC.parent(nC) || CC.setEdge(zC, qC, {
        weight: 0,
        minlen: wC + (null != (fC = bC[nC]) ? fC : 0)
      })
    }
    var sz = function(CC) {
      CC.children(Qz).forEach((function zC(ZC) {
        let QC = CC.children(ZC),
          wC = CC.node(ZC);
        if (QC.length && QC.forEach(zC), wC && Object.hasOwn(wC, "minRank")) {
          wC.borderLeft = [], wC.borderRight = [];
          for (let zC = wC.minRank, QC = wC.maxRank + 1; zC < QC; ++zC) Tz(CC, "borderLeft", "_bl", ZC, wC, zC), Tz(CC, "borderRight", "_br", ZC, wC, zC)
        }
      }))
    };

    function Tz(CC, zC, ZC, QC, wC, bC) {
      let nC = {
          width: 0,
          height: 0,
          rank: bC,
          borderType: zC
        },
        fC = wC[zC][bC - 1],
        oC = TC(CC, "border", nC, ZC);
      wC[zC][bC] = oC, CC.setParent(oC, QC), fC && CC.setEdge(fC, oC, {
        weight: 1
      })
    }

    function az(CC) {
      var zC;
      let ZC = null == (zC = CC.graph().rankdir) ? void 0 : zC.toLowerCase();
      ("bt" === ZC || "rl" === ZC) && function(CC) {
        CC.nodes().forEach((zC => jz(CC.node(zC)))), CC.edges().forEach((zC => {
          var ZC;
          let QC = CC.edge(zC);
          null == (ZC = QC.points) || ZC.forEach(jz), Object.hasOwn(QC, "y") && jz(QC)
        }))
      }(CC), ("lr" === ZC || "rl" === ZC) && (function(CC) {
        CC.nodes().forEach((zC => yz(CC.node(zC)))), CC.edges().forEach((zC => {
          var ZC;
          let QC = CC.edge(zC);
          null == (ZC = QC.points) || ZC.forEach(yz), Object.hasOwn(QC, "x") && yz(QC)
        }))
      }(CC), tz(CC))
    }

    function tz(CC) {
      CC.nodes().forEach((zC => Dz(CC.node(zC)))), CC.edges().forEach((zC => Dz(CC.edge(zC))))
    }

    function Dz(CC) {
      let zC = CC.width;
      CC.width = CC.height, CC.height = zC
    }

    function jz(CC) {
      CC.y = -CC.y
    }

    function yz(CC) {
      let zC = CC.x;
      CC.x = CC.y, CC.y = zC
    }

    function Lz(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ZC = {},
        QC = CC.nodes().filter((zC => !CC.children(zC).length)),
        wC = QC.map((zC => CC.node(zC).rank)),
        bC = Cz(LC(Math.max, wC) + 1).map((() => []));
      return QC.sort(((zC, ZC) => CC.node(zC).rank - CC.node(ZC).rank)).forEach((function QC(wC) {
        if (ZC[wC]) return;
        ZC[wC] = !0;
        let nC = CC.node(wC);
        bC[nC.rank].push(wC);
        let fC = CC.successors(wC);
        fC && [...fC].sort(((ZC, QC) => function(ZC, QC) {
          let wC = CC.node(ZC),
            bC = CC.node(QC);
          return wz(zC, wC, bC)
        }(ZC, QC))).forEach(QC)
      })), bC
    }

    function Uz(CC, zC) {
      let ZC = 0;
      for (let QC = 1; QC < zC.length; ++QC) ZC += Bz(CC, zC[QC - 1], zC[QC]);
      return ZC
    }

    function Bz(CC, zC, ZC) {
      let QC = function(CC, zC) {
          return CC.reduce(((CC, ZC, QC) => (CC[ZC] = zC[QC], CC)), {})
        }(ZC, ZC.map(((CC, zC) => zC))),
        wC = zC.flatMap((zC => {
          let ZC = CC.outEdges(zC);
          return ZC ? ZC.map((zC => ({
            pos: QC[zC.w],
            weight: CC.edge(zC).weight
          }))).sort(((CC, zC) => CC.pos - zC.pos)) : []
        })),
        bC = 1;
      for (; bC < ZC.length;) bC <<= 1;
      let nC = 2 * bC - 1;
      bC -= 1;
      let fC = new Array(nC).fill(0),
        oC = 0;
      return wC.forEach((CC => {
        let zC = CC.pos + bC;
        fC[zC] += CC.weight;
        let ZC = 0;
        for (; zC > 0;) zC % 2 && (ZC += fC[zC + 1]), zC = zC - 1 >> 1, fC[zC] += CC.weight;
        oC += CC.weight * ZC
      })), oC
    }

    function Oz(CC, zC) {
      let ZC = {};
      return CC.forEach(((CC, zC) => {
          let QC = {
            indegree: 0,
            in: [],
            out: [],
            vs: [CC.v],
            i: zC
          };
          void 0 !== CC.barycenter && (QC.barycenter = CC.barycenter, QC.weight = CC.weight), ZC[CC.v] = QC
        })), zC.edges().forEach((CC => {
          let zC = ZC[CC.v],
            QC = ZC[CC.w];
          void 0 !== zC && void 0 !== QC && (QC.indegree++, zC.out.push(QC))
        })),
        function(CC) {
          let zC = [];

          function ZC(CC) {
            return zC => {
              zC.merged || (void 0 === zC.barycenter || void 0 === CC.barycenter || zC.barycenter >= CC.barycenter) && function(CC, zC) {
                let ZC = 0,
                  QC = 0;
                CC.weight && (ZC += CC.barycenter * CC.weight, QC += CC.weight), zC.weight && (ZC += zC.barycenter * zC.weight, QC += zC.weight), CC.vs = zC.vs.concat(CC.vs), CC.barycenter = ZC / QC, CC.weight = QC, CC.i = Math.min(zC.i, CC.i), zC.merged = !0
              }(CC, zC)
            }
          }

          function QC(zC) {
            return ZC => {
              ZC.in.push(zC), 0 === --ZC.indegree && CC.push(ZC)
            }
          }
          for (; CC.length;) {
            let wC = CC.pop();
            zC.push(wC), wC.in.reverse().forEach(ZC(wC)), wC.out.forEach(QC(wC))
          }
          return zC.filter((CC => !CC.merged)).map((CC => zz(CC, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ZC).filter((CC => !CC.indegree)))
    }

    function kz(CC, zC, ZC, QC, wC) {
      let bC = {},
        nC = null,
        fC = null,
        oC = wC;
      "boolean" == typeof zC ? (oC = zC, bC = {}) : zC && (bC = zC, nC = null != ZC ? ZC : null, fC = null != QC ? QC : null);
      let qC = function(CC, zC) {
          let ZC = {
            lhs: [],
            rhs: []
          };
          return CC.forEach((CC => {
            zC(CC) ? ZC.lhs.push(CC) : ZC.rhs.push(CC)
          })), ZC
        }(CC, (CC => Object.hasOwn(CC, "barycenter"))),
        FC = qC.lhs,
        WC = qC.rhs.sort(((CC, zC) => zC.i - CC.i)),
        NC = [],
        MC = 0,
        gC = 0,
        SC = 0;
      FC.sort(function(CC, zC, ZC) {
        return (QC, wC) => {
          if (QC.barycenter < wC.barycenter) return -1;
          if (QC.barycenter > wC.barycenter) return 1;
          if (CC && ("string" == typeof QC.vs[0] || "string" == typeof wC.vs[0])) {
            let ZC = CC.node(QC.vs[0]),
              bC = CC.node(wC.vs[0]),
              nC = wz(zC, ZC, bC);
            if (0 !== nC) return nC
          }
          return ZC ? wC.i - QC.i : QC.i - wC.i
        }
      }(fC, nC, !!oC));
      for (let [PC, GC] of Object.entries(bC)) {
        let CC = FC.findIndex((CC => CC.vs[0] === PC));
        FC.splice(CC + 1, 0, GC)
      }
      SC = Vz(NC, WC, SC), FC.forEach((CC => {
        SC += CC.vs.length, NC.push(CC.vs), MC += CC.barycenter * CC.weight, gC += CC.weight, SC = Vz(NC, WC, SC)
      }));
      let pC = {
        vs: NC.flat(1)
      };
      return gC && (pC.barycenter = MC / gC, pC.weight = gC), pC
    }

    function Vz(CC, zC, ZC) {
      let QC;
      for (; zC.length && (QC = zC[zC.length - 1]).i <= ZC;) zC.pop(), CC.push(QC.vs), ZC++;
      return ZC
    }

    function CZ(CC, zC, ZC, QC, wC) {
      var bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC;
      let pC = null,
        PC = wC;
      "boolean" == typeof QC ? (PC = QC, pC = null) : void 0 !== QC && (pC = QC);
      let GC = CC.children(zC),
        RC = CC.node(zC),
        AC = RC ? RC.borderLeft : void 0,
        xC = RC ? RC.borderRight : void 0,
        JC = {};
      AC && (GC = GC.filter((CC => CC !== AC && CC !== xC)));
      let IC = function(CC) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((zC => {
          let ZC = CC.inEdges(zC);
          if (!ZC || !ZC.length) return {
            v: zC
          };
          {
            let QC = ZC.reduce(((zC, ZC) => {
              let QC = CC.edge(ZC),
                wC = CC.node(ZC.v);
              return {
                sum: zC.sum + QC.weight * wC.order,
                weight: zC.weight + QC.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: zC,
              barycenter: QC.sum / QC.weight,
              weight: QC.weight
            }
          }
        }))
      }(CC, GC);
      IC.forEach((zC => {
        if (CC.children(zC.v).length) {
          let {
            result: QC
          } = CZ(CC, zC.v, ZC, pC, PC);
          JC[zC.v] = QC, Object.hasOwn(QC, "barycenter") && function(CC, zC) {
            void 0 !== CC.barycenter ? (CC.barycenter = (CC.barycenter * CC.weight + zC.barycenter * zC.weight) / (CC.weight + zC.weight), CC.weight += zC.weight) : (CC.barycenter = zC.barycenter, CC.weight = zC.weight)
          }(zC, QC)
        }
      }));
      let iC = Oz(IC, ZC);
      ! function(CC, zC) {
        CC.forEach((CC => {
          CC.vs = CC.vs.flatMap((CC => zC[CC] ? zC[CC].vs : CC))
        }))
      }(iC, JC);
      let vC = {},
        eC = !1;
      for (let KC = 0; KC < iC.length; KC++)
        for (let zC = KC + 1; zC < iC.length; zC++)
          if (iC[KC] && iC[zC] && null != (bC = iC[KC]) && bC.barycenter && null != (nC = iC[zC]) && nC.barycenter && (null == (fC = iC[KC]) ? void 0 : fC.barycenter) === iC[zC].barycenter) {
            let ZC = null != (qC = null == (oC = iC[KC]) ? void 0 : oC.vs[0]) ? qC : "",
              QC = null != (WC = null == (FC = iC[zC]) ? void 0 : FC.vs[0]) ? WC : "",
              wC = CC.node(ZC),
              bC = CC.node(QC);
            if ("edge" === wC.dummy && "edge" === bC.dummy && (null == (NC = wC.edgeObj) ? void 0 : NC.v) === (null == (MC = bC.edgeObj) ? void 0 : MC.v) && (null == (gC = wC.edgeObj) ? void 0 : gC.w) === (null == (SC = bC.edgeObj) ? void 0 : SC.w)) {
              if (wC.edgeLabel.reversed) {
                vC[QC] = iC[KC], iC.splice(KC, 1), KC--;
                break
              }
              vC[ZC] = iC[zC], iC.splice(zC, 1), zC--
            } else eC = !0
          } let hC = kz(iC, vC, pC, CC, PC);
      if (AC && xC) {
        hC.vs = [AC, hC.vs, xC].flat(1);
        let zC = CC.predecessors(AC);
        if (zC && zC.length) {
          let ZC = CC.node(zC[0]),
            QC = CC.predecessors(xC),
            wC = CC.node(QC[0]);
          Object.hasOwn(hC, "barycenter") || (hC.barycenter = 0, hC.weight = 0), hC.barycenter = (hC.barycenter * hC.weight + ZC.order + wC.order) / (hC.weight + 2), hC.weight += 2
        }
      }
      return Object.defineProperty(hC, "result", {
        value: hC,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(hC, "usedBias", {
        value: eC,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), hC
    }

    function zZ(CC, zC, ZC, QC) {
      QC || (QC = CC.nodes());
      let wC = function(CC) {
          let zC;
          for (; CC.hasNode(zC = VC("_root")););
          return zC
        }(CC),
        bC = new sC({
          compound: !0
        }).setGraph({
          root: wC
        }).setDefaultNodeLabel((zC => CC.node(zC)));
      return QC.forEach((QC => {
        let nC = CC.node(QC),
          fC = CC.parent(QC);
        if (nC.rank === zC || nC.minRank <= zC && zC <= nC.maxRank) {
          bC.setNode(QC), bC.setParent(QC, fC || wC);
          let oC = CC[ZC](QC);
          oC && oC.forEach((zC => {
            let ZC = zC.v === QC ? zC.w : zC.v,
              wC = bC.edge(ZC, QC),
              nC = void 0 !== wC ? wC.weight : 0;
            bC.setEdge(ZC, QC, {
              weight: CC.edge(zC).weight + nC
            })
          })), Object.hasOwn(nC, "minRank") && bC.setNode(QC, {
            borderLeft: nC.borderLeft[zC],
            borderRight: nC.borderRight[zC]
          })
        }
      })), bC
    }

    function ZZ(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof zC.customOrder) return void zC.customOrder(CC, ZZ);
      let QC = UC(CC),
        wC = QZ(CC, Cz(1, QC + 1), "inEdges"),
        bC = QZ(CC, Cz(QC - 1, -1, -1), "outEdges"),
        nC = Lz(CC, ZC);
      if (bZ(CC, nC), zC.disableOptimalOrderHeuristic) return;
      let fC, oC = Number.POSITIVE_INFINITY,
        qC = zC.constraints || [];
      for (let FC = 0, WC = 0; WC < 4; ++FC, ++WC) {
        wZ(FC % 2 ? wC : bC, FC % 4 >= 2, qC, ZC), nC = DC(CC);
        let zC = Uz(CC, nC);
        zC < oC ? (WC = 0, fC = Object.assign({}, nC), oC = zC) : zC === oC && (fC = structuredClone(nC))
      }
      bZ(CC, fC)
    }

    function QZ(CC, zC, ZC) {
      let QC = new Map,
        wC = (CC, zC) => {
          QC.has(CC) || QC.set(CC, []), QC.get(CC).push(zC)
        };
      for (let bC of CC.nodes()) {
        let zC = CC.node(bC);
        if ("number" == typeof zC.rank && wC(zC.rank, bC), "number" == typeof zC.minRank && "number" == typeof zC.maxRank)
          for (let CC = zC.minRank; CC <= zC.maxRank; CC++) CC !== zC.rank && wC(CC, bC)
      }
      return zC.map((function(zC) {
        return zZ(CC, zC, ZC, QC.get(zC) || [])
      }))
    }

    function wZ(CC, zC, ZC, QC) {
      let wC = !0,
        bC = new sC;
      CC.forEach((function(CC) {
        ZC.forEach((CC => bC.setEdge(CC.left, CC.right)));
        let nC = CC.graph().root,
          {
            result: fC,
            usedBias: oC
          } = CZ(CC, nC, bC, QC, wC);
        zC && oC && (wC = !wC), fC.vs.forEach(((zC, ZC) => CC.node(zC).order = ZC)),
          function(CC, zC, ZC) {
            let QC, wC = {};
            ZC.forEach((ZC => {
              let bC, nC, fC = CC.parent(ZC);
              for (; fC;) {
                if (bC = CC.parent(fC), bC ? (nC = wC[bC], wC[bC] = fC) : (nC = QC, QC = fC), nC && nC !== fC) return void zC.setEdge(nC, fC);
                fC = bC
              }
            }))
          }(CC, bC, fC.vs)
      }))
    }

    function bZ(CC, zC) {
      Object.values(zC).forEach((zC => zC.forEach(((zC, ZC) => CC.node(zC).order = ZC))))
    }

    function nZ(CC, zC, ZC) {
      if (zC > ZC) {
        let CC = zC;
        zC = ZC, ZC = CC
      }
      let QC = CC[zC];
      QC || (CC[zC] = QC = {}), QC[ZC] = !0
    }

    function fZ(CC, zC, ZC) {
      if (zC > ZC) {
        let CC = zC;
        zC = ZC, ZC = CC
      }
      let QC = CC[zC];
      return void 0 !== QC && Object.hasOwn(QC, ZC)
    }

    function oZ(CC, zC, ZC, QC) {
      let wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        bC = {},
        nC = function(CC, zC, ZC, QC) {
          let wC = new sC,
            bC = CC.graph(),
            nC = function(CC, zC, ZC) {
              return (QC, wC, bC) => {
                let nC, fC = QC.node(wC),
                  oC = QC.node(bC),
                  qC = 0;
                if (qC += fC.width / 2, Object.hasOwn(fC, "labelpos")) switch (fC.labelpos.toLowerCase()) {
                  case "l":
                    nC = -fC.width / 2;
                    break;
                  case "r":
                    nC = fC.width / 2
                }
                if (nC && (qC += ZC ? nC : -nC), nC = void 0, qC += (fC.dummy ? zC : CC) / 2, qC += (oC.dummy ? zC : CC) / 2, qC += oC.width / 2, Object.hasOwn(oC, "labelpos")) switch (oC.labelpos.toLowerCase()) {
                  case "l":
                    nC = oC.width / 2;
                    break;
                  case "r":
                    nC = -oC.width / 2
                }
                return nC && (qC += ZC ? nC : -nC), qC
              }
            }(bC.nodesep, bC.edgesep, QC);
          return zC.forEach((zC => {
            let QC;
            zC.forEach((zC => {
              let bC = ZC[zC];
              if (void 0 !== bC) {
                if (wC.setNode(bC), void 0 !== QC) {
                  let fC = ZC[QC];
                  if (void 0 !== fC) {
                    let ZC = wC.edge(fC, bC);
                    wC.setEdge(fC, bC, Math.max(nC(CC, zC, QC), ZC || 0))
                  }
                }
                QC = zC
              }
            }))
          })), wC
        }(CC, zC, ZC, wC),
        fC = wC ? "borderLeft" : "borderRight";

      function oC(CC, zC) {
        let ZC = nC.nodes().slice(),
          QC = {},
          wC = ZC.pop();
        for (; wC;) {
          if (QC[wC]) CC(wC);
          else {
            QC[wC] = !0, ZC.push(wC);
            for (let CC of zC(wC)) ZC.push(CC)
          }
          wC = ZC.pop()
        }
      }
      return oC((function(CC) {
        let zC = nC.inEdges(CC);
        bC[CC] = zC ? zC.reduce(((CC, zC) => {
          var ZC;
          let QC = null != (ZC = bC[zC.v]) ? ZC : 0,
            wC = nC.edge(zC);
          return Math.max(CC, QC + (void 0 !== wC ? wC : 0))
        }), 0) : 0
      }), (function(CC) {
        return nC.predecessors(CC) || []
      })), oC((function(zC) {
        let ZC = nC.outEdges(zC),
          QC = Number.POSITIVE_INFINITY;
        ZC && (QC = ZC.reduce(((CC, zC) => {
          let ZC = bC[zC.w],
            QC = nC.edge(zC);
          return Math.min(CC, (void 0 !== ZC ? ZC : 0) - (void 0 !== QC ? QC : 0))
        }), Number.POSITIVE_INFINITY));
        let wC = CC.node(zC);
        QC !== Number.POSITIVE_INFINITY && wC.borderType !== fC && (bC[zC] = Math.max(void 0 !== bC[zC] ? bC[zC] : 0, QC))
      }), (function(CC) {
        return nC.successors(CC) || []
      })), Object.keys(QC).forEach((CC => {
        var zC;
        let QC = ZC[CC];
        void 0 !== QC && (bC[CC] = null != (zC = bC[QC]) ? zC : 0)
      })), bC
    }

    function qZ(CC, zC) {
      let ZC, QC = DC(CC),
        wC = Object.assign(function(CC, zC) {
          let ZC = {};
          return zC.length && zC.reduce((function(zC, QC) {
            let wC = 0,
              bC = 0,
              nC = zC.length,
              fC = QC[QC.length - 1];
            return QC.forEach(((zC, oC) => {
              let qC = function(CC, zC) {
                  if (CC.node(zC).dummy) {
                    let ZC = CC.predecessors(zC);
                    if (ZC) return ZC.find((zC => CC.node(zC).dummy))
                  }
                }(CC, zC),
                FC = qC ? CC.node(qC).order : nC;
              (qC || zC === fC) && (QC.slice(bC, oC + 1).forEach((zC => {
                let QC = CC.predecessors(zC);
                QC && QC.forEach((QC => {
                  let bC = CC.node(QC),
                    nC = bC.order;
                  (nC < wC || FC < nC) && (!bC.dummy || !CC.node(zC).dummy) && nZ(ZC, QC, zC)
                }))
              })), bC = oC + 1, wC = FC)
            })), QC
          })), ZC
        }(CC, QC), function(CC, zC) {
          let ZC = {};

          function QC(zC, QC, wC, bC, nC) {
            Cz(QC, wC).forEach((QC => {
              let wC = zC[QC];
              if (void 0 !== wC && CC.node(wC).dummy) {
                let zC = CC.predecessors(wC);
                zC && zC.forEach((zC => {
                  if (void 0 === zC) return;
                  let QC = CC.node(zC);
                  QC.dummy && (QC.order < bC || QC.order > nC) && nZ(ZC, zC, wC)
                }))
              }
            }))
          }
          return zC.length && zC.reduce((function(zC, ZC) {
            let wC = -1,
              bC = -1,
              nC = 0;
            return ZC.forEach(((fC, oC) => {
              if ("border" === CC.node(fC).dummy) {
                let zC = CC.predecessors(fC);
                if (zC && zC.length) {
                  let fC = zC[0];
                  if (void 0 === fC) return;
                  bC = CC.node(fC).order, QC(ZC, nC, oC, wC, bC), nC = oC, wC = bC
                }
              }
              QC(ZC, nC, ZC.length, bC, zC.length)
            })), ZC
          })), ZC
        }(CC, QC)),
        bC = {};
      ["u", "d"].forEach((nC => {
        ZC = "u" === nC ? QC : Object.values(QC).reverse(), ["l", "r"].forEach((QC => {
          "r" === QC && (ZC = ZC.map((CC => Object.values(CC).reverse())));
          let fC = function(CC, zC, ZC, QC, wC) {
              let bC = {},
                nC = {},
                fC = {};
              return zC.forEach((CC => {
                CC.forEach(((CC, zC) => {
                  bC[CC] = CC, nC[CC] = CC, fC[CC] = zC
                }))
              })), zC.forEach((zC => {
                let oC = -1,
                  qC = -1,
                  FC = !1,
                  WC = zC,
                  NC = zC.findIndex((zC => (null == wC ? void 0 : wC.includes(zC)) || FZ(zC, CC, wC)));
                NC > 0 && (WC = [zC[NC], ...zC.slice(0, NC), ...zC.slice(NC + 1)], FC = !0), WC.forEach((zC => {
                  var WC;
                  let NC = QC(zC);
                  if (NC && NC.length) {
                    null != wC && wC.includes(zC) && (NC = NC.filter((zC => FZ(zC, CC, wC))));
                    let QC = NC.sort(((CC, zC) => {
                        let ZC = fC[CC],
                          QC = fC[zC];
                        return (void 0 !== ZC ? ZC : 0) - (void 0 !== QC ? QC : 0)
                      })),
                      MC = (QC.length - 1) / 2;
                    for (let CC = Math.floor(MC), wC = Math.ceil(MC); CC <= wC; ++CC) {
                      let wC = QC[CC];
                      if (void 0 === wC) continue;
                      let NC = fC[wC];
                      if (void 0 !== NC && nC[zC] === zC && oC < NC && fC[wC] !== qC && !fZ(ZC, zC, wC)) {
                        let CC = bC[wC];
                        void 0 !== CC && (nC[wC] = zC, nC[zC] = bC[zC] = CC, oC = NC, FC && (oC = -1, qC = null != (WC = fC[wC]) ? WC : -1, FC = !1))
                      }
                    }
                  }
                }))
              })), {
                root: bC,
                align: nC
              }
            }(CC, ZC, wC, (zC => ("u" === nC ? CC.predecessors(zC) : CC.successors(zC)) || []), zC),
            oC = oZ(CC, ZC, fC.root, fC.align, "r" === QC);
          "r" === QC && (oC = Zz(oC, (CC => -CC))), bC[nC + QC] = oC
        }))
      }));
      let nC = function(CC, zC) {
        return Object.values(zC).reduce(((zC, ZC) => {
          let QC = Number.NEGATIVE_INFINITY,
            wC = Number.POSITIVE_INFINITY;
          Object.entries(ZC).forEach((zC => {
            let [ZC, bC] = zC, nC = function(CC, zC) {
              return CC.node(zC).width
            }(CC, ZC) / 2;
            QC = Math.max(bC + nC, QC), wC = Math.min(bC - nC, wC)
          }));
          let bC = QC - wC;
          return bC < zC[0] && (zC = [bC, ZC]), zC
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(CC, bC);
      return function(CC, zC) {
          let ZC = Object.values(zC),
            QC = LC(Math.min, ZC),
            wC = LC(Math.max, ZC);
          ["u", "d"].forEach((ZC => {
            ["l", "r"].forEach((bC => {
              let nC = ZC + bC,
                fC = CC[nC];
              if (!fC || fC === zC) return;
              let oC = Object.values(fC),
                qC = QC - LC(Math.min, oC);
              "l" !== bC && (qC = wC - LC(Math.max, oC)), qC && (CC[nC] = Zz(fC, (CC => CC + qC)))
            }))
          }))
        }(bC, nC),
        function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ZC = CC.ul;
          return ZC ? Zz(ZC, ((ZC, QC) => {
            var wC, bC;
            if (zC) {
              let ZC = zC.toLowerCase(),
                wC = CC[ZC];
              if (wC && void 0 !== wC[QC]) return wC[QC]
            }
            let nC = Object.values(CC).map((CC => {
              let zC = CC[QC];
              return void 0 !== zC ? zC : 0
            })).sort(((CC, zC) => CC - zC));
            return ((null != (wC = nC[1]) ? wC : 0) + (null != (bC = nC[2]) ? bC : 0)) / 2
          })) : {}
        }(bC, CC.graph().align)
    }

    function FZ(CC, zC, ZC) {
      var QC;
      if (!ZC) return !1;
      let wC = null == (QC = zC.node(CC)) ? void 0 : QC.edgeObj;
      if (!wC || zC.node(CC).edgeLabel.reversed) return !1;
      let bC = ZC.indexOf(null == wC ? void 0 : wC.v),
        nC = ZC.indexOf(null == wC ? void 0 : wC.w);
      return -1 !== bC && -1 !== nC && bC === (nC + 1) % ZC.length || bC === (nC - 1) % ZC.length
    }

    function WZ(CC, zC) {
      (function(CC) {
        let zC = DC(CC),
          ZC = CC.graph(),
          QC = ZC.ranksep,
          wC = ZC.rankalign,
          bC = 0;
        zC.forEach((zC => {
          let ZC = zC.reduce(((zC, ZC) => {
            var QC;
            let wC = null != (QC = CC.node(ZC).height) ? QC : 0;
            return zC > wC ? zC : wC
          }), 0);
          zC.forEach((zC => {
            let QC = CC.node(zC);
            QC.y = "top" === wC ? bC + QC.height / 2 : "bottom" === wC ? bC + ZC - QC.height / 2 : bC + ZC / 2
          })), bC += ZC + QC
        }))
      })(CC = aC(CC)), Object.entries(qZ(CC, zC)).forEach((zC => {
        let [ZC, QC] = zC;
        return CC.node(ZC).x = QC
      }))
    }
    var NZ = new WeakMap;

    function MZ(CC) {
      return SZ(CC, OC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), CC
    }

    function gZ(CC, zC, ZC) {
      let QC = zC;
      for (; void 0 !== QC;) {
        let zC = CC.parent(QC);
        if (zC === ZC) return QC;
        QC = zC
      }
    }

    function SZ(CC, zC, ZC) {
      var QC;
      let wC = CC.nodes().filter((zC => CC.children(zC).length)),
        bC = {};
      wC.forEach((QC => {
        let wC = CC.node(QC);
        if (wC && wC.rankdir) {
          let nC = new sC({
            multigraph: !0,
            compound: !0
          });
          nC.setGraph({
            rankdir: wC.rankdir
          });
          let fC = CC.children(QC);
          fC.forEach((zC => {
            let ZC = {
              ...CC.node(zC)
            };
            nC.setNode(zC, ZC);
            let wC = CC.parent(zC);
            wC && wC !== QC && fC.includes(wC) && nC.setParent(zC, wC)
          }));
          let oC = new Set;
          CC.edges().forEach((zC => {
            let ZC = gZ(CC, zC.v, QC),
              wC = gZ(CC, zC.w, QC);
            if (ZC && wC && ZC !== wC) {
              let QC = `${ZC}\0${wC}`;
              oC.has(QC) || (oC.add(QC), nC.setEdge(ZC, wC, {
                ...CC.edge(zC)
              }))
            }
          })), SZ(nC, zC, ZC);
          let qC = eZ(nC);
          pZ(qC, zC, ZC, null), PZ(nC, qC);
          let FC = 1 / 0,
            WC = 1 / 0,
            NC = -1 / 0,
            MC = -1 / 0;
          nC.nodes().forEach((CC => {
            if (CC === QC) return;
            let zC = nC.node(CC);
            zC && "number" == typeof zC.x && "number" == typeof zC.y && "number" == typeof zC.width && "number" == typeof zC.height && (FC = Math.min(FC, zC.x - zC.width / 2), NC = Math.max(NC, zC.x + zC.width / 2), WC = Math.min(WC, zC.y - zC.height / 2), MC = Math.max(MC, zC.y + zC.height / 2))
          })), (!isFinite(FC) || !isFinite(WC) || !isFinite(NC) || !isFinite(MC)) && (FC = WC = 0, NC = MC = 0);
          let gC = NC - FC,
            SC = MC - WC;
          bC[QC] = {
            minX: FC,
            fC: WC,
            maxX: NC,
            oC: MC,
            width: gC,
            height: SC,
            offsetX: FC,
            offsetY: WC
          }, wC._dagreClusterSubgraph = nC
        }
      }));
      let nC = [],
        fC = new Map;
      wC.forEach((zC => {
        let ZC = CC.node(zC);
        ZC && ZC.rankdir && bC[zC] && fC.set(zC, (CC.children(zC) || []).filter((CC => CC !== zC)))
      }));
      let oC = new Set([...fC.values()].flat()),
        qC = new Map;
      fC.forEach(((zC, ZC) => {
        oC.has(ZC) || qC.set(ZC, (zC => {
          let ZC = [],
            QC = (CC.children(zC) || []).filter((CC => CC !== zC));
          for (; QC.length > 0;) {
            let zC = QC.shift();
            ZC.push(zC), (CC.children(zC) || []).filter((CC => CC !== zC)).forEach((CC => QC.push(CC)))
          }
          return ZC
        })(ZC))
      }));
      let FC = new Set([...qC.values()].flat()),
        WC = CC => {
          for (let [zC, ZC] of qC)
            if (ZC.includes(CC)) return zC;
          return CC
        },
        NC = [];
      CC.edges().forEach((zC => {
        (FC.has(zC.v) || FC.has(zC.w)) && NC.push({
          edge: zC,
          label: CC.edge(zC)
        })
      }));
      let MC = new Map;
      FC.forEach((zC => {
        let ZC = CC.parent(zC);
        MC.set(zC, "string" == typeof ZC ? ZC : void 0)
      })), qC.forEach(((zC, ZC) => {
        let QC = CC.node(ZC),
          wC = [];
        zC.forEach((zC => {
          let ZC = CC.node(zC);
          ZC && (wC.push({
            id: zC,
            node: ZC,
            parent: MC.get(zC)
          }), CC.removeNode(zC))
        }));
        let fC = NC.filter((CC => {
            let {
              edge: ZC
            } = CC;
            return zC.includes(ZC.v) || zC.includes(ZC.w)
          })),
          oC = bC[ZC];
        QC && (nC.push({
          clusterId: ZC,
          subgraph: QC._dagreClusterSubgraph,
          bounds: oC,
          children: zC,
          removedNodes: wC,
          removedEdges: fC
        }), QC.width = oC.width, QC.height = oC.height)
      }));
      let gC = new Set;
      NC.forEach((zC => {
        let {
          edge: ZC,
          label: QC
        } = zC, wC = WC(ZC.v), bC = WC(ZC.w);
        if (wC !== bC && CC.hasNode(wC) && CC.hasNode(bC)) {
          let zC = `${wC}\0${bC}`;
          gC.has(zC) || (gC.add(zC), CC.setEdge(wC, bC, {
            ...QC,
            width: 0,
            height: 0
          }))
        }
      }));
      let SC = eZ(CC),
        pC = pZ(SC, zC, ZC, null != (QC = NZ.get(CC)) ? QC : null);
      NZ.set(CC, pC), PZ(CC, SC), gC.forEach((zC => {
        let ZC = zC.indexOf("\0"),
          QC = zC.slice(0, ZC),
          wC = zC.slice(ZC + 1);
        CC.hasEdge(QC, wC) && CC.removeEdge(QC, wC)
      })), nC.forEach((zC => {
        let {
          clusterId: ZC,
          subgraph: QC,
          bounds: wC,
          removedNodes: bC,
          removedEdges: nC
        } = zC;
        var fC, oC;
        let qC = CC.node(ZC),
          FC = null != (fC = null == qC ? void 0 : qC.x) ? fC : 0,
          WC = null != (oC = null == qC ? void 0 : qC.y) ? oC : 0,
          NC = (wC.minX + wC.maxX) / 2,
          MC = (wC.fC + wC.oC) / 2;
        bC.forEach((zC => {
          let {
            id: ZC,
            node: QC,
            parent: wC
          } = zC;
          CC.setNode(ZC, QC), void 0 !== wC && CC.setParent(ZC, wC)
        })), nC.forEach((zC => {
          let {
            edge: ZC,
            label: QC
          } = zC;
          CC.setEdge(ZC, QC)
        })), QC.nodes().forEach((zC => {
          if (zC === ZC) return;
          let wC = QC.node(zC),
            bC = CC.node(zC);
          bC && wC && "number" == typeof wC.x && "number" == typeof wC.y && (bC.x = FC + (wC.x - NC), bC.y = WC + (wC.y - MC))
        })), delete qC._dagreClusterSubgraph
      })), wC.forEach((zC => {
        var ZC, QC;
        let wC = CC.node(zC),
          nC = bC[zC];
        if (wC && wC.rankdir && wC._dagreClusterSubgraph && nC) {
          let bC = wC._dagreClusterSubgraph,
            fC = null != (ZC = wC.x) ? ZC : 0,
            oC = null != (QC = wC.y) ? QC : 0,
            qC = (nC.minX + nC.maxX) / 2,
            FC = (nC.fC + nC.oC) / 2;
          bC.nodes().forEach((ZC => {
            if (ZC === zC) return;
            let QC = bC.node(ZC),
              wC = CC.node(ZC);
            if (wC && QC && "number" == typeof QC.x && "number" == typeof QC.y) {
              let CC = QC.x - qC,
                zC = QC.y - FC;
              wC.x = fC + CC, wC.y = oC + zC
            }
          })), delete wC._dagreClusterSubgraph
        }
      }))
    }

    function pZ(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var wC, bC;
      let nC = !1 !== (null == ZC ? void 0 : ZC.useDynamic),
        fC = nC && null != (wC = null == QC ? void 0 : QC.graph) ? wC : null,
        oC = nC && null != (bC = null == QC ? void 0 : QC.rawNodes) ? bC : null;
      zC("    makeSpaceForEdgeLabels", (() => function(CC) {
        let zC = CC.graph();
        zC.ranksep /= 2, CC.edges().forEach((ZC => {
          var QC;
          let wC = CC.edge(ZC);
          wC.minlen *= 2, "c" !== (null != (QC = wC.labelpos) ? QC : "r").toLowerCase() && ("TB" === zC.rankdir || "BT" === zC.rankdir ? wC.width += wC.labeloffset : wC.height += wC.labeloffset)
        }))
      }(CC))), zC("    removeSelfEdges", (() => function(CC) {
        CC.edges().forEach((zC => {
          if (zC.v === zC.w) {
            let ZC = CC.node(zC.v);
            ZC.selfEdges || (ZC.selfEdges = []), ZC.selfEdges.push({
              e: zC,
              label: CC.edge(zC)
            }), CC.removeEdge(zC)
          }
        }))
      }(CC))), zC("    acyclic", (() => Mz(CC, fC))), zC("    nestingGraph.run", (() => uz(CC))), zC("    rank", (() => Ez(aC(CC)))), zC("    injectEdgeLabelProxies", (() => function(CC) {
        CC.edges().forEach((zC => {
          let ZC = CC.edge(zC);
          if (ZC.width && ZC.height) {
            let ZC = CC.node(zC.v),
              QC = {
                rank: (CC.node(zC.w).rank - ZC.rank) / 2 + ZC.rank,
                e: zC
              };
            TC(CC, "edge-proxy", QC, "_ep")
          }
        }))
      }(CC))), zC("    removeEmptyRanks", (() => function(CC) {
        let zC = CC.nodes().map((zC => CC.node(zC).rank)).filter((CC => void 0 !== CC)),
          ZC = LC(Math.min, zC),
          QC = [];
        CC.nodes().forEach((zC => {
          let wC = CC.node(zC).rank - ZC;
          QC[wC] || (QC[wC] = []), QC[wC].push(zC)
        }));
        let wC = 0,
          bC = CC.graph().nodeRankFactor;
        Array.from(QC).forEach(((zC, ZC) => {
          void 0 === zC && ZC % bC !== 0 ? --wC : void 0 !== zC && wC && zC.forEach((zC => CC.node(zC).rank += wC))
        }))
      }(CC))), zC("    nestingGraph.cleanup", (() => function(CC) {
        let zC = CC.graph();
        CC.removeNode(zC.nestingRoot), delete zC.nestingRoot, CC.edges().forEach((zC => {
          CC.edge(zC).nestingEdge && CC.removeEdge(zC)
        }))
      }(CC))), zC("    normalizeRanks", (() => function(CC) {
        let zC = CC.nodes().map((zC => {
            let ZC = CC.node(zC).rank;
            return void 0 === ZC ? Number.MAX_VALUE : ZC
          })),
          ZC = LC(Math.min, zC);
        CC.nodes().forEach((zC => {
          let QC = CC.node(zC);
          Object.hasOwn(QC, "rank") && (QC.rank -= ZC)
        }))
      }(CC))), zC("    assignRankMinMax", (() => function(CC) {
        let zC = 0;
        CC.nodes().forEach((ZC => {
          let QC = CC.node(ZC);
          QC.borderTop && (QC.minRank = CC.node(QC.borderTop).rank, QC.maxRank = CC.node(QC.borderBottom).rank, zC = Math.max(zC, QC.maxRank))
        })), CC.graph().maxRank = zC
      }(CC))), zC("    removeEdgeLabelProxies", (() => function(CC) {
        CC.nodes().forEach((zC => {
          let ZC = CC.node(zC);
          if ("edge-proxy" === ZC.dummy) {
            let QC = ZC;
            CC.edge(QC.e).labelRank = ZC.rank, CC.removeNode(zC)
          }
        }))
      }(CC))), zC("    normalize.run", (() => gz(CC))), zC("    parentDummyChains", (() => cz(CC))), zC("    addBorderSegments", (() => sz(CC))), zC("    order", (() => ZZ(CC, ZC, oC))), zC("    insertSelfEdges", (() => function(CC) {
        DC(CC).forEach((zC => {
          let ZC = 0;
          zC.forEach(((zC, QC) => {
            let wC = CC.node(zC);
            "number" != typeof wC.rank && (wC.rank = 0), wC.order = QC + ZC, (wC.selfEdges || []).forEach((zC => {
              TC(CC, "selfedge", {
                width: zC.label.width,
                height: zC.label.height,
                rank: wC.rank,
                order: QC + ++ZC,
                e: zC.e,
                edgeLabel: zC.label
              }, "_se"), (!Array.isArray(zC.label.points) || 7 !== zC.label.points.length) && (zC.label.points = [{
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
            })), delete wC.selfEdges
          }))
        }))
      }(CC))), zC("    adjustCoordinateSystem", (() => function(CC) {
        var zC;
        let ZC = null == (zC = CC.graph().rankdir) ? void 0 : zC.toLowerCase();
        ("lr" === ZC || "rl" === ZC) && tz(CC)
      }(CC))), zC("    position", (() => WZ(CC, ZC.corePath))), zC("    positionSelfEdges", (() => function(CC) {
        CC.nodes().forEach((zC => {
          let ZC = CC.node(zC),
            QC = CC => "number" == typeof CC && isFinite(CC);
          if ("selfedge" === ZC.dummy) {
            let wC = ZC,
              bC = CC.node(wC.e.v),
              nC = QC(null == bC ? void 0 : bC.x) ? bC.x : 0,
              fC = QC(null == bC ? void 0 : bC.y) ? bC.y : 0,
              oC = QC(null == bC ? void 0 : bC.width) ? bC.width : 0,
              qC = QC(null == bC ? void 0 : bC.height) ? bC.height : 0,
              FC = QC(ZC.x) ? ZC.x : nC,
              WC = QC(ZC.y) ? ZC.y : fC,
              NC = oC / 2,
              MC = qC / 2;
            wC.edgeLabel.points = [{
              x: FC + NC,
              y: WC - MC
            }, {
              x: FC + NC,
              y: WC - MC
            }, {
              x: FC,
              y: WC
            }, {
              x: FC - NC,
              y: WC + MC
            }, {
              x: FC - NC,
              y: WC + MC
            }, {
              x: FC,
              y: WC
            }, {
              x: FC,
              y: WC
            }], wC.edgeLabel.x = FC, wC.edgeLabel.y = WC, CC.setEdge(wC.e, wC.edgeLabel), CC.removeNode(zC)
          } else ZC && Array.isArray(ZC.selfEdges) && ZC.selfEdges.forEach((CC => {
            if (!Array.isArray(CC.label.points) || 7 !== CC.label.points.length) {
              let zC = QC(ZC.x) ? ZC.x : 0,
                wC = QC(ZC.y) ? ZC.y : 0,
                bC = (QC(ZC.width) ? ZC.width : 0) / 2,
                nC = (QC(ZC.height) ? ZC.height : 0) / 2;
              CC.label.points = [{
                x: zC + bC,
                y: wC - nC
              }, {
                x: zC + bC,
                y: wC - nC
              }, {
                x: zC,
                y: wC
              }, {
                x: zC - bC,
                y: wC + nC
              }, {
                x: zC - bC,
                y: wC + nC
              }, {
                x: zC,
                y: wC
              }, {
                x: zC,
                y: wC
              }]
            }
          }))
        }))
      }(CC)));
      let qC = JSON.parse(JSON.stringify(CC._nodes));
      return zC("    removeBorderNodes", (() => function(CC) {
        CC.nodes().forEach((zC => {
          if (CC.children(zC).length) {
            let ZC = CC.node(zC),
              QC = CC.node(ZC.borderTop),
              wC = CC.node(ZC.borderBottom),
              bC = CC.node(ZC.borderLeft[ZC.borderLeft.length - 1]),
              nC = CC.node(ZC.borderRight[ZC.borderRight.length - 1]);
            ZC.width = Math.abs(nC.x - bC.x), ZC.height = Math.abs(wC.y - QC.y), ZC.x = bC.x + ZC.width / 2, ZC.y = QC.y + ZC.height / 2
          }
        })), CC.nodes().forEach((zC => {
          "border" === CC.node(zC).dummy && CC.removeNode(zC)
        }))
      }(CC))), zC("    normalize.undo", (() => function(CC) {
        CC.graph().dummyChains.forEach((zC => {
          let ZC, QC = CC.node(zC),
            wC = QC.edgeLabel;
          for (CC.setEdge(QC.edgeObj, wC); QC.dummy;) ZC = CC.successors(zC)[0], CC.removeNode(zC), wC.points.push({
            x: QC.x,
            y: QC.y
          }), "edge-label" === QC.dummy && (wC.x = QC.x, wC.y = QC.y, wC.width = QC.width, wC.height = QC.height), zC = ZC, QC = CC.node(zC)
        }))
      }(CC))), zC("    fixupEdgeLabelCoords", (() => function(CC) {
        CC.edges().forEach((zC => {
          let ZC = CC.edge(zC);
          if (Object.hasOwn(ZC, "x")) switch (("l" === ZC.labelpos || "r" === ZC.labelpos) && (ZC.width -= ZC.labeloffset), ZC.labelpos) {
            case "l":
              ZC.x -= ZC.width / 2 + ZC.labeloffset;
              break;
            case "r":
              ZC.x += ZC.width / 2 + ZC.labeloffset
          }
        }))
      }(CC))), zC("    undoCoordinateSystem", (() => az(CC))), zC("    translateGraph", (() => function(CC) {
        let zC = Number.POSITIVE_INFINITY,
          ZC = 0,
          QC = Number.POSITIVE_INFINITY,
          wC = 0,
          bC = CC.graph(),
          nC = bC.marginx || 0,
          fC = bC.marginy || 0;

        function oC(CC) {
          let bC = CC.x,
            nC = CC.y,
            fC = CC.width,
            oC = CC.height;
          zC = Math.min(zC, bC - fC / 2), ZC = Math.max(ZC, bC + fC / 2), QC = Math.min(QC, nC - oC / 2), wC = Math.max(wC, nC + oC / 2)
        }
        CC.nodes().forEach((zC => oC(CC.node(zC)))), CC.edges().forEach((zC => {
          let ZC = CC.edge(zC);
          Object.hasOwn(ZC, "x") && oC(ZC)
        })), zC -= nC, QC -= fC, CC.nodes().forEach((ZC => {
          let wC = CC.node(ZC);
          wC.x -= zC, wC.y -= QC
        })), CC.edges().forEach((ZC => {
          let wC = CC.edge(ZC);
          wC.points.forEach((CC => {
            CC.x -= zC, CC.y -= QC
          })), Object.hasOwn(wC, "x") && (wC.x -= zC), Object.hasOwn(wC, "y") && (wC.y -= QC)
        })), bC.width = ZC - zC + nC, bC.height = wC - QC + fC
      }(CC))), zC("    assignNodeIntersects", (() => function(CC) {
        CC.edges().forEach((zC => {
          if (zC.v === zC.w) return;
          let ZC, QC, wC = CC.edge(zC),
            bC = CC.node(zC.v),
            nC = CC.node(zC.w);
          wC.points ? (ZC = wC.points[0], QC = wC.points[wC.points.length - 1]) : (wC.points = [], ZC = nC, QC = bC), wC.points.unshift(tC(bC, ZC)), wC.points.push(tC(nC, QC))
        }))
      }(CC))), zC("    reversePoints", (() => function(CC) {
        CC.edges().forEach((zC => {
          let ZC = CC.edge(zC);
          ZC.reversed && ZC.points.reverse()
        }))
      }(CC))), zC("    acyclic.undo", (() => function(CC) {
        CC.edges().forEach((zC => {
          let ZC = CC.edge(zC);
          if (ZC.reversed) {
            CC.removeEdge(zC);
            let QC = ZC.forwardName;
            delete ZC.reversed, delete ZC.forwardName, CC.setEdge(zC.w, zC.v, ZC, QC)
          }
        }))
      }(CC))), {
        graph: CC,
        rawNodes: qC
      }
    }

    function PZ(CC, zC) {
      CC.nodes().forEach((ZC => {
        let QC = CC.node(ZC),
          wC = zC.node(ZC);
        QC && (QC.x = wC.x, QC.y = wC.y, QC.order = wC.order, QC.rank = wC.rank, zC.children(ZC).length && (QC.width = wC.width, QC.height = wC.height))
      })), CC.edges().forEach((ZC => {
        let QC = CC.edge(ZC),
          wC = zC.edge(ZC);
        QC.points = wC.points, Object.hasOwn(wC, "x") && (QC.x = wC.x, QC.y = wC.y)
      })), CC.graph().width = zC.graph().width, CC.graph().height = zC.graph().height
    }
    var GZ = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      RZ = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      AZ = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      xZ = ["width", "height", "rank"],
      JZ = {
        width: 0,
        height: 0
      },
      IZ = ["minlen", "weight", "width", "height", "labeloffset"],
      iZ = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      vZ = ["labelpos"];

    function eZ(CC) {
      let zC = new sC({
          multigraph: !0,
          compound: !0
        }),
        ZC = KZ(CC.graph());
      return zC.setGraph(Object.assign({}, RZ, hZ(ZC, GZ), zz(ZC, AZ))), CC.nodes().forEach((ZC => {
        let QC = hZ(KZ(CC.node(ZC)), xZ);
        Object.keys(JZ).forEach((CC => {
          void 0 === QC[CC] && (QC[CC] = JZ[CC])
        })), zC.setNode(ZC, QC);
        let wC = CC.parent(ZC);
        void 0 !== wC && zC.setParent(ZC, wC)
      })), CC.edges().forEach((ZC => {
        let QC = KZ(CC.edge(ZC));
        zC.setEdge(ZC, Object.assign({}, iZ, hZ(QC, IZ), zz(QC, vZ)))
      })), zC
    }

    function hZ(CC, zC) {
      return Zz(zz(CC, zC), Number)
    }

    function KZ(CC) {
      let zC = {};
      return CC && Object.entries(CC).forEach((CC => {
        let [ZC, QC] = CC;
        "string" == typeof ZC && (ZC = ZC.toLowerCase()), zC[ZC] = QC
      })), zC
    }

    function YZ(CC) {
      let zC = DC(CC),
        ZC = new sC({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return CC.nodes().forEach((zC => {
        ZC.setNode(zC, {
          label: zC
        }), ZC.setParent(zC, "layer" + CC.node(zC).rank)
      })), CC.edges().forEach((CC => ZC.setEdge(CC.v, CC.w, {}, CC.name))), zC.forEach(((CC, zC) => {
        let QC = "layer" + zC;
        ZC.setNode(QC, {
          rank: "same"
        }), CC.reduce(((CC, zC) => (ZC.setEdge(CC, zC, {
          style: "invis"
        }), zC)))
      })), ZC
    }
    var dZ = {
        time: BC,
        notime: OC
      },
      mZ = {
        graphlib: bC,
        version: bz,
        layout: MZ,
        debug: YZ,
        util: {
          time: BC,
          notime: OC
        }
      }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);