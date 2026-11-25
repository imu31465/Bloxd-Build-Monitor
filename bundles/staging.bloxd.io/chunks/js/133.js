/*! For license information please see fo1voe.133.44d18028.chunk.js.LICENSE.txt */
export const id = 133;
export const ids = [133];
export const modules = {
  6888: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Graph: () => NM,
      debug: () => Wi,
      default: () => Di,
      graphlib: () => jM,
      layout: () => Hi,
      util: () => si,
      version: () => jr
    });
    var OM = Object.defineProperty,
      SM = (MM, rM, iM) => ((MM, rM, iM) => rM in MM ? OM(MM, rM, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: iM
      }) : MM[rM] = iM)(MM, "symbol" != typeof rM ? rM + "" : rM, iM),
      jM = {};
    ((MM, rM) => {
      for (var iM in rM) OM(MM, iM, {
        get: rM[iM],
        enumerable: !0
      })
    })(jM, {
      Graph: () => NM,
      alg: () => yM
    });
    var aM = Object.defineProperty,
      PM = (MM, rM) => {
        for (var iM in rM) aM(MM, iM, {
          get: rM[iM],
          enumerable: !0
        })
      },
      nM = class {
        constructor(MM) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, MM && (this._isDirected = !("directed" in MM) || MM.directed, this._isMultigraph = "multigraph" in MM && MM.multigraph, this._isCompound = "compound" in MM && MM.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(MM) {
          return this._label = MM, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(MM) {
          return this._defaultNodeLabelFn = "function" != typeof MM ? () => MM : MM, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((MM => 0 === Object.keys(this._in[MM]).length))
        }
        sinks() {
          return this.nodes().filter((MM => 0 === Object.keys(this._out[MM]).length))
        }
        setNodes(MM, rM) {
          return MM.forEach((MM => {
            void 0 !== rM ? this.setNode(MM, rM) : this.setNode(MM)
          })), this
        }
        setNode(MM, rM) {
          return MM in this._nodes ? (arguments.length > 1 && (this._nodes[MM] = rM), this) : (this._nodes[MM] = arguments.length > 1 ? rM : this._defaultNodeLabelFn(MM), this._isCompound && (this._parent[MM] = "\0", this._children[MM] = {}, this._children["\0"][MM] = !0), this._in[MM] = {}, this._preds[MM] = {}, this._out[MM] = {}, this._sucs[MM] = {}, ++this._nodeCount, this)
        }
        node(MM) {
          return this._nodes[MM]
        }
        hasNode(MM) {
          return MM in this._nodes
        }
        removeNode(MM) {
          if (MM in this._nodes) {
            let rM = MM => this.removeEdge(this._edgeObjs[MM]);
            delete this._nodes[MM], this._isCompound && (this._removeFromParentsChildList(MM), delete this._parent[MM], this.children(MM).forEach((MM => {
              this.setParent(MM)
            })), delete this._children[MM]), Object.keys(this._in[MM]).forEach(rM), delete this._in[MM], delete this._preds[MM], Object.keys(this._out[MM]).forEach(rM), delete this._out[MM], delete this._sucs[MM], --this._nodeCount
          }
          return this
        }
        setParent(MM, rM) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === rM) rM = "\0";
          else {
            for (let iM = rM += ""; void 0 !== iM; iM = this.parent(iM))
              if (iM === MM) throw new Error("Setting " + rM + " as parent of " + MM + " would create a cycle");
            this.setNode(rM)
          }
          return this.setNode(MM), this._removeFromParentsChildList(MM), this._parent[MM] = rM, this._children[rM][MM] = !0, this
        }
        parent(MM) {
          if (this._isCompound) {
            let rM = this._parent[MM];
            if ("\0" !== rM) return rM
          }
        }
        children() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let rM = this._children[MM];
            if (rM) return Object.keys(rM)
          } else {
            if ("\0" === MM) return this.nodes();
            if (this.hasNode(MM)) return []
          }
          return []
        }
        predecessors(MM) {
          let rM = this._preds[MM];
          if (rM) return Object.keys(rM)
        }
        successors(MM) {
          let rM = this._sucs[MM];
          if (rM) return Object.keys(rM)
        }
        neighbors(MM) {
          let rM = this.predecessors(MM);
          if (rM) {
            let iM = new Set(rM),
              OM = this.successors(MM);
            if (OM)
              for (let MM of OM) iM.add(MM);
            return Array.from(iM.values())
          }
        }
        isLeaf(MM) {
          var rM;
          let iM;
          return iM = this.isDirected() ? this.successors(MM) : this.neighbors(MM), 0 === (null != (rM = null == iM ? void 0 : iM.length) ? rM : 0)
        }
        filterNodes(MM) {
          let rM = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          rM.setGraph(this.graph()), Object.entries(this._nodes).forEach((iM => {
            let [OM, SM] = iM;
            MM(OM) && rM.setNode(OM, SM)
          })), Object.values(this._edgeObjs).forEach((MM => {
            rM.hasNode(MM.v) && rM.hasNode(MM.w) && rM.setEdge(MM, this.edge(MM))
          }));
          let iM = {},
            OM = MM => {
              let SM = this.parent(MM);
              return !SM || rM.hasNode(SM) ? (iM[MM] = SM, SM) : SM in iM ? iM[SM] : OM(SM)
            };
          return this._isCompound && rM.nodes().forEach((MM => rM.setParent(MM, OM(MM)))), rM
        }
        setDefaultEdgeLabel(MM) {
          return this._defaultEdgeLabelFn = "function" != typeof MM ? () => MM : MM, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(MM, rM) {
          return MM.reduce(((MM, iM) => (void 0 !== rM ? this.setEdge(MM, iM, rM) : this.setEdge(MM, iM), iM))), this
        }
        setEdge(MM, rM, iM, OM) {
          let SM, jM, aM, PM, nM = !1;
          "object" == typeof MM && null !== MM && "v" in MM ? (SM = MM.v, jM = MM.w, aM = MM.name, 2 === arguments.length && (PM = rM, nM = !0)) : (SM = MM, jM = rM, aM = OM, arguments.length > 2 && (PM = iM, nM = !0)), SM = "" + SM, jM = "" + jM, void 0 !== aM && (aM = "" + aM);
          let zM = LM(this._isDirected, SM, jM, aM);
          if (zM in this._edgeLabels) return nM && (this._edgeLabels[zM] = PM), this;
          if (void 0 !== aM && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(SM), this.setNode(jM), this._edgeLabels[zM] = nM ? PM : this._defaultEdgeLabelFn(SM, jM, aM);
          let mM = function(MM, rM, iM, OM) {
            let SM = "" + rM,
              jM = "" + iM;
            if (!MM && SM > jM) {
              let MM = SM;
              SM = jM, jM = MM
            }
            let aM = {
              v: SM,
              w: jM
            };
            return OM && (aM.name = OM), aM
          }(this._isDirected, SM, jM, aM);
          return SM = mM.v, jM = mM.w, Object.freeze(mM), this._edgeObjs[zM] = mM, QM(this._preds[jM], SM), QM(this._sucs[SM], jM), this._in[jM][zM] = mM, this._out[SM][zM] = mM, this._edgeCount++, this
        }
        edge(MM, rM, iM) {
          let OM = 1 === arguments.length ? mM(this._isDirected, MM) : LM(this._isDirected, MM, rM, iM);
          return this._edgeLabels[OM]
        }
        edgeAsObj(MM, rM, iM) {
          let OM = 1 === arguments.length ? this.edge(MM) : this.edge(MM, rM, iM);
          return "object" != typeof OM || null === OM ? {
            label: OM
          } : OM
        }
        hasEdge(MM, rM, iM) {
          return (1 === arguments.length ? mM(this._isDirected, MM) : LM(this._isDirected, MM, rM, iM)) in this._edgeLabels
        }
        removeEdge(MM, rM, iM) {
          let OM = 1 === arguments.length ? mM(this._isDirected, MM) : LM(this._isDirected, MM, rM, iM),
            SM = this._edgeObjs[OM];
          if (SM) {
            let MM = SM.v,
              rM = SM.w;
            delete this._edgeLabels[OM], delete this._edgeObjs[OM], zM(this._preds[rM], MM), zM(this._sucs[MM], rM), delete this._in[rM][OM], delete this._out[MM][OM], this._edgeCount--
          }
          return this
        }
        inEdges(MM, rM) {
          return this.isDirected() ? this.filterEdges(this._in[MM], MM, rM) : this.nodeEdges(MM, rM)
        }
        outEdges(MM, rM) {
          return this.isDirected() ? this.filterEdges(this._out[MM], MM, rM) : this.nodeEdges(MM, rM)
        }
        nodeEdges(MM, rM) {
          if (MM in this._nodes) return this.filterEdges({
            ...this._in[MM],
            ...this._out[MM]
          }, MM, rM)
        }
        _removeFromParentsChildList(MM) {
          delete this._children[this._parent[MM]][MM]
        }
        filterEdges(MM, rM, iM) {
          if (!MM) return;
          let OM = Object.values(MM);
          return iM ? OM.filter((MM => MM.v === rM && MM.w === iM || MM.v === iM && MM.w === rM)) : OM
        }
      };

    function QM(MM, rM) {
      MM[rM] ? MM[rM]++ : MM[rM] = 1
    }

    function zM(MM, rM) {
      void 0 !== MM[rM] && !--MM[rM] && delete MM[rM]
    }

    function LM(MM, rM, iM, OM) {
      let SM = "" + rM,
        jM = "" + iM;
      if (!MM && SM > jM) {
        let MM = SM;
        SM = jM, jM = MM
      }
      return SM + "\x01" + jM + "\x01" + (void 0 === OM ? "\0" : OM)
    }

    function mM(MM, rM) {
      return LM(MM, rM.v, rM.w, rM.name)
    }

    function HM(MM) {
      let rM = {
          options: {
            directed: MM.isDirected(),
            multigraph: MM.isMultigraph(),
            compound: MM.isCompound()
          },
          nodes: hM(MM),
          edges: JM(MM)
        },
        iM = MM.graph();
      return void 0 !== iM && (rM.value = structuredClone(iM)), rM
    }

    function hM(MM) {
      return MM.nodes().map((rM => {
        let iM = MM.node(rM),
          OM = MM.parent(rM),
          SM = {
            v: rM
          };
        return void 0 !== iM && (SM.value = iM), void 0 !== OM && (SM.parent = OM), SM
      }))
    }

    function JM(MM) {
      return MM.edges().map((rM => {
        let iM = MM.edge(rM),
          OM = {
            v: rM.v,
            w: rM.w
          };
        return void 0 !== rM.name && (OM.name = rM.name), void 0 !== iM && (OM.value = iM), OM
      }))
    }

    function dM(MM) {
      let rM = new nM(MM.options);
      return void 0 !== MM.value && rM.setGraph(MM.value), MM.nodes.forEach((MM => {
        rM.setNode(MM.v, MM.value), MM.parent && rM.setParent(MM.v, MM.parent)
      })), MM.edges.forEach((MM => {
        rM.setEdge({
          v: MM.v,
          w: MM.w,
          name: MM.name
        }, MM.value)
      })), rM
    }
    PM({}, {
      read: () => dM,
      write: () => HM
    });
    var yM = {};
    PM(yM, {
      CycleException: () => RM,
      bellmanFord: () => EM,
      components: () => UM,
      dijkstra: () => eM,
      dijkstraAll: () => bM,
      findCycles: () => tM,
      floydWarshall: () => uM,
      isAcyclic: () => WM,
      postorder: () => ZM,
      preorder: () => oM,
      prim: () => fM,
      shortestPaths: () => YM,
      tarjan: () => wM,
      topsort: () => pM
    });
    var lM = () => 1;

    function EM(MM, rM, iM, OM) {
      return function(MM, rM, iM, OM) {
        let SM, jM = {},
          aM = 0,
          PM = MM.nodes(),
          nM = function(MM) {
            let rM = jM[MM.v],
              OM = jM[MM.w];
            if (!rM || !OM) return;
            let aM = iM(MM);
            rM.distance + aM < OM.distance && (jM[MM.w] = {
              distance: rM.distance + aM,
              predecessor: MM.v
            }, SM = !0)
          },
          QM = function() {
            PM.forEach((function(MM) {
              OM(MM).forEach((function(rM) {
                let iM = rM.v === MM ? rM.v : rM.w,
                  OM = iM === rM.v ? rM.w : rM.v;
                nM({
                  v: iM,
                  w: OM
                })
              }))
            }))
          };
        PM.forEach((function(MM) {
          let iM = MM === rM ? 0 : Number.POSITIVE_INFINITY;
          jM[MM] = {
            distance: iM,
            predecessor: ""
          }
        }));
        let zM = PM.length;
        for (let LM = 1; LM < zM && (SM = !1, aM++, QM(), SM); LM++);
        if (aM === zM - 1 && (SM = !1, QM(), SM)) throw new Error("The graph contains a negative weight cycle");
        return jM
      }(MM, String(rM), iM || lM, OM || function(rM) {
        var iM;
        return null != (iM = MM.outEdges(rM)) ? iM : []
      })
    }

    function UM(MM) {
      let rM, iM = {},
        OM = [];

      function SM(OM) {
        var jM, aM;
        OM in iM || (iM[OM] = !0, rM.push(OM), null == (jM = MM.successors(OM)) || jM.forEach(SM), null == (aM = MM.predecessors(OM)) || aM.forEach(SM))
      }
      return MM.nodes().forEach((function(MM) {
        rM = [], SM(MM), rM.length && OM.push(rM)
      })), OM
    }
    var GM = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((MM => MM.key))
        }
        has(MM) {
          return MM in this._keyIndices
        }
        priority(MM) {
          let rM = this._keyIndices[MM];
          if (void 0 !== rM) return this._arr[rM].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(MM, rM) {
          let iM = this._keyIndices,
            OM = String(MM);
          if (!(OM in iM)) {
            let MM = this._arr,
              SM = MM.length;
            return iM[OM] = SM, MM.push({
              key: OM,
              priority: rM
            }), this._decrease(SM), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let MM = this._arr.pop();
          return delete this._keyIndices[MM.key], this._heapify(0), MM.key
        }
        decrease(MM, rM) {
          let iM = this._keyIndices[MM];
          if (void 0 === iM) throw new Error(`Key not found: ${MM}`);
          let OM = this._arr[iM].priority;
          if (rM > OM) throw new Error(`New priority is greater than current priority. Key: ${MM} Old: ${OM} New: ${rM}`);
          this._arr[iM].priority = rM, this._decrease(iM)
        }
        _heapify(MM) {
          let rM = this._arr,
            iM = 2 * MM,
            OM = iM + 1,
            SM = MM;
          iM < rM.length && (SM = rM[iM].priority < rM[SM].priority ? iM : SM, OM < rM.length && (SM = rM[OM].priority < rM[SM].priority ? OM : SM), SM !== MM && (this._swap(MM, SM), this._heapify(SM)))
        }
        _decrease(MM) {
          let rM, iM = this._arr,
            OM = iM[MM].priority;
          for (; 0 !== MM && (rM = MM >> 1, !(iM[rM].priority < OM));) this._swap(MM, rM), MM = rM
        }
        _swap(MM, rM) {
          let iM = this._arr,
            OM = this._keyIndices,
            SM = iM[MM],
            jM = iM[rM];
          iM[MM] = jM, iM[rM] = SM, OM[jM.key] = MM, OM[SM.key] = rM
        }
      },
      CM = () => 1;

    function eM(MM, rM, iM, OM) {
      return function(MM, rM, iM, OM) {
        let SM, jM, aM = {},
          PM = new GM,
          nM = function(MM) {
            let rM = MM.v !== SM ? MM.v : MM.w,
              OM = aM[rM];
            if (!OM) return;
            let nM = iM(MM),
              QM = jM.distance + nM;
            if (nM < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + MM + " Weight: " + nM);
            QM < OM.distance && (OM.distance = QM, OM.predecessor = SM, PM.decrease(rM, QM))
          };
        for (MM.nodes().forEach((function(MM) {
            let iM = MM === rM ? 0 : Number.POSITIVE_INFINITY;
            aM[MM] = {
              distance: iM,
              predecessor: ""
            }, PM.add(MM, iM)
          })); PM.size() > 0;) {
          SM = PM.removeMin();
          let MM = aM[SM];
          if (!MM || MM.distance === Number.POSITIVE_INFINITY) break;
          jM = MM, OM(SM).forEach(nM)
        }
        return aM
      }(MM, String(rM), iM || CM, OM || function(rM) {
        var iM;
        return null != (iM = MM.outEdges(rM)) ? iM : []
      })
    }

    function bM(MM, rM, iM) {
      return MM.nodes().reduce((function(OM, SM) {
        return OM[SM] = eM(MM, SM, rM, iM), OM
      }), {})
    }

    function wM(MM) {
      let rM = 0,
        iM = [],
        OM = {},
        SM = [];

      function jM(aM) {
        var PM;
        let nM = OM[aM] = {
          onStack: !0,
          lowlink: rM,
          index: rM++
        };
        if (iM.push(aM), null == (PM = MM.successors(aM)) || PM.forEach((function(MM) {
            if (MM in OM) {
              let rM = OM[MM];
              null != rM && rM.onStack && (nM.lowlink = Math.min(nM.lowlink, rM.index))
            } else {
              jM(MM);
              let rM = OM[MM];
              rM && (nM.lowlink = Math.min(nM.lowlink, rM.lowlink))
            }
          })), nM.lowlink === nM.index) {
          let MM, rM = [];
          do {
            MM = iM.pop();
            let SM = OM[MM];
            SM && (SM.onStack = !1), rM.push(MM)
          } while (aM !== MM);
          SM.push(rM)
        }
      }
      return MM.nodes().forEach((function(MM) {
        MM in OM || jM(MM)
      })), SM
    }

    function tM(MM) {
      return wM(MM).filter((function(rM) {
        var iM;
        let OM = rM[0];
        return !!OM && (rM.length > 1 || 1 === rM.length && (null != (iM = MM.outEdges(OM, OM)) ? iM : []).length > 0)
      }))
    }
    var gM = () => 1;

    function uM(MM, rM, iM) {
      return function(MM, rM, iM) {
        let OM = {},
          SM = MM.nodes();
        return SM.forEach((function(MM) {
          let jM = {};
          OM[MM] = jM, jM[MM] = {
            distance: 0,
            predecessor: ""
          }, SM.forEach((function(rM) {
            MM !== rM && (jM[rM] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), iM(MM).forEach((function(iM) {
            let OM = iM.v === MM ? iM.w : iM.v,
              SM = rM(iM);
            jM[OM] = {
              distance: SM,
              predecessor: MM
            }
          }))
        })), SM.forEach((function(MM) {
          let rM = OM[MM];
          rM && SM.forEach((function(iM) {
            let jM = OM[iM];
            jM && SM.forEach((function(iM) {
              let OM = jM[MM],
                SM = rM[iM],
                aM = jM[iM];
              if (OM && SM && aM) {
                let MM = OM.distance + SM.distance;
                MM < aM.distance && (aM.distance = MM, aM.predecessor = SM.predecessor)
              }
            }))
          }))
        })), OM
      }(MM, rM || gM, iM || function(rM) {
        var iM;
        return null != (iM = MM.outEdges(rM)) ? iM : []
      })
    }
    var RM = class extends Error {
      constructor(MM) {
        super(MM), this.name = "CycleException"
      }
    };

    function pM(MM) {
      let rM = {},
        iM = {},
        OM = [];
      if (MM.sinks().forEach((function SM(jM) {
          var aM;
          if (jM in iM) throw new RM;
          jM in rM || (iM[jM] = !0, rM[jM] = !0, null == (aM = MM.predecessors(jM)) || aM.forEach(SM), delete iM[jM], OM.push(jM))
        })), Object.keys(rM).length !== MM.nodeCount()) throw new RM;
      return OM
    }

    function WM(MM) {
      try {
        pM(MM)
      } catch (rM) {
        if (rM instanceof RM) return !1;
        throw rM
      }
      return !0
    }

    function sM(MM, rM, iM, OM, SM) {
      Array.isArray(rM) || (rM = [rM]);
      let jM = rM => {
          var iM;
          return null != (iM = MM.isDirected() ? MM.successors(rM) : MM.neighbors(rM)) ? iM : []
        },
        aM = {};
      return rM.forEach((function(rM) {
        if (!MM.hasNode(rM)) throw new Error("Graph does not have node: " + rM);
        SM = DM(MM, rM, "post" === iM, aM, jM, OM, SM)
      })), SM
    }

    function DM(MM, rM, iM, OM, SM, jM, aM) {
      return rM in OM || (OM[rM] = !0, iM || (aM = jM(aM, rM)), SM(rM).forEach((function(rM) {
        aM = DM(MM, rM, iM, OM, SM, jM, aM)
      })), iM && (aM = jM(aM, rM))), aM
    }

    function kM(MM, rM, iM) {
      return sM(MM, rM, iM, (function(MM, rM) {
        return MM.push(rM), MM
      }), [])
    }

    function ZM(MM, rM) {
      return kM(MM, rM, "post")
    }

    function oM(MM, rM) {
      return kM(MM, rM, "pre")
    }

    function fM(MM, rM) {
      var iM;
      let OM, SM = new nM,
        jM = {},
        aM = new GM;

      function PM(MM) {
        let iM = MM.v === OM ? MM.w : MM.v,
          SM = aM.priority(iM);
        if (void 0 !== SM) {
          let PM = rM(MM);
          PM < SM && (jM[iM] = OM, aM.decrease(iM, PM))
        }
      }
      if (0 === MM.nodeCount()) return SM;
      MM.nodes().forEach((function(MM) {
        aM.add(MM, Number.POSITIVE_INFINITY), SM.setNode(MM)
      }));
      let QM = MM.nodes()[0];
      void 0 !== QM && aM.decrease(QM, 0);
      let zM = !1;
      for (; aM.size() > 0;) {
        if (OM = aM.removeMin(), OM in jM) SM.setEdge(OM, jM[OM]);
        else {
          if (zM) throw new Error("Input graph is not connected: " + MM);
          zM = !0
        }
        null == (iM = MM.nodeEdges(OM)) || iM.forEach(PM)
      }
      return SM
    }

    function YM(MM, rM, iM, OM) {
      return function(MM, rM, iM, OM) {
        if (void 0 === iM) return eM(MM, rM, iM, OM);
        let SM = !1,
          jM = MM.nodes();
        for (let aM = 0; aM < jM.length; aM++) {
          let PM = jM[aM];
          if (void 0 === PM) continue;
          let nM = OM(PM);
          for (let MM = 0; MM < nM.length; MM++) {
            let rM = nM[MM];
            if (!rM) continue;
            let OM = rM.v === PM ? rM.v : rM.w;
            iM({
              v: OM,
              w: OM === rM.v ? rM.w : rM.v
            }) < 0 && (SM = !0)
          }
          if (SM) return EM(MM, rM, iM, OM)
        }
        return eM(MM, rM, iM, OM)
      }(MM, rM, iM, null != OM ? OM : rM => {
        var iM;
        return null != (iM = MM.outEdges(rM)) ? iM : []
      })
    }
    var NM = nM;

    function AM(MM, rM, iM, OM) {
      let SM = OM;
      for (; MM.hasNode(SM);) SM = cM(OM);
      return iM.dummy = rM, MM.setNode(SM, iM), SM
    }

    function xM(MM) {
      let rM = new NM({
        multigraph: MM.isMultigraph()
      }).setGraph(MM.graph());
      return MM.nodes().forEach((iM => {
        MM.children(iM).length || rM.setNode(iM, MM.node(iM))
      })), MM.edges().forEach((iM => {
        rM.setEdge(iM, MM.edge(iM))
      })), rM
    }

    function vM(MM, rM) {
      let iM, OM, SM = MM.x,
        jM = MM.y,
        aM = rM.x - SM,
        PM = rM.y - jM,
        nM = MM.width / 2,
        QM = MM.height / 2;
      if (!aM && !PM) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(PM) * nM > Math.abs(aM) * QM ? (PM < 0 && (QM = -QM), iM = QM * aM / PM, OM = QM) : (aM < 0 && (nM = -nM), iM = nM, OM = nM * PM / aM), {
        x: SM + iM,
        y: jM + OM
      }
    }

    function FM(MM) {
      let rM = Mr(KM(MM) + 1).map((() => []));
      return MM.nodes().forEach((iM => {
        let OM = MM.node(iM),
          SM = OM.rank;
        void 0 !== SM && (rM[SM] || (rM[SM] = []), rM[SM][OM.order] = iM)
      })), rM
    }

    function BM(MM, rM, iM, OM) {
      let SM = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (SM.rank = iM, SM.order = OM), AM(MM, "border", SM, rM)
    }
    var XM = 65535;

    function IM(MM, rM) {
      if (rM.length > XM) {
        let iM = function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : XM,
            iM = [];
          for (let OM = 0; OM < MM.length; OM += rM) {
            let SM = MM.slice(OM, OM + rM);
            iM.push(SM)
          }
          return iM
        }(rM);
        return MM(...iM.map((rM => MM(...rM))))
      }
      return MM(...rM)
    }

    function KM(MM) {
      let rM = MM.nodes().map((rM => {
        let iM = MM.node(rM).rank;
        return void 0 === iM ? Number.MIN_VALUE : iM
      }));
      return IM(Math.max, rM)
    }

    function qM(MM, rM) {
      let iM = Date.now();
      try {
        return rM()
      } finally {
        console.log(MM + " time: " + (Date.now() - iM) + "ms")
      }
    }

    function TM(MM, rM) {
      return rM()
    }
    var VM = 0;

    function cM(MM) {
      return MM + "" + ++VM
    }

    function Mr(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == rM && (rM = MM, MM = 0);
      let OM = MM => MM < rM;
      iM < 0 && (OM = MM => rM < MM);
      let SM = [];
      for (let jM = MM; OM(jM); jM += iM) SM.push(jM);
      return SM
    }

    function rr(MM, rM) {
      let iM = {};
      for (let OM of rM) void 0 !== MM[OM] && (iM[OM] = MM[OM]);
      return iM
    }

    function ir(MM, rM) {
      let iM;
      return iM = "string" == typeof rM ? MM => MM[rM] : rM, Object.entries(MM).reduce(((MM, rM) => {
        let [OM, SM] = rM;
        return MM[OM] = iM(SM, OM), MM
      }), {})
    }
    var Or = "\0";

    function Sr(MM, rM, iM) {
      var OM, SM, jM, aM, PM, nM;
      if (!(MM && rM && iM && "edge" === rM.dummy && "edge" === iM.dummy && rM.edgeObj && iM.edgeObj && MM[rM.edgeObj.v] && MM[iM.edgeObj.v] && MM[rM.edgeObj.w] && MM[iM.edgeObj.w])) return 0;
      let QM = !0;
      rM.edgeObj.w === iM.edgeObj.w && (QM = !1);
      let zM = QM ? null != (SM = null == (OM = MM[rM.edgeObj.v]) ? void 0 : OM.rank) ? SM : NaN : null != (aM = null == (jM = MM[rM.edgeObj.w]) ? void 0 : jM.rank) ? aM : NaN,
        LM = Object.entries(MM).find((MM => {
          var iM, OM;
          return (null == (iM = MM[1].edgeObj) ? void 0 : iM.v) === rM.edgeObj.v && (null == (OM = MM[1].edgeObj) ? void 0 : OM.w) === rM.edgeObj.w && MM[1].rank === zM
        })),
        mM = Object.entries(MM).find((MM => {
          var rM, OM;
          return (null == (rM = MM[1].edgeObj) ? void 0 : rM.v) === iM.edgeObj.v && (null == (OM = MM[1].edgeObj) ? void 0 : OM.w) === iM.edgeObj.w && MM[1].rank === zM
        }));
      if (!LM || !mM) return 0;
      let HM = null != (PM = LM[1].order) ? PM : NaN,
        hM = null != (nM = mM[1].order) ? nM : NaN;
      return isNaN(HM - hM) ? 0 : HM - hM
    }
    var jr = "3.1.1";

    function ar(MM) {
      MM._prev._next = MM._next, MM._next._prev = MM._prev, delete MM._next, delete MM._prev
    }

    function Pr(MM, rM) {
      if ("_next" !== MM && "_prev" !== MM) return rM
    }
    var nr = class {
        constructor() {
          SM(this, "_sentinel");
          let MM = {};
          MM._next = MM._prev = MM, this._sentinel = MM
        }
        dequeue() {
          let MM = this._sentinel,
            rM = MM._prev;
          if (rM !== MM) return ar(rM), rM
        }
        enqueue(MM) {
          let rM = this._sentinel;
          MM._prev && MM._next && ar(MM), MM._next = rM._next, rM._next._prev = MM, rM._next = MM, MM._prev = rM
        }
        toString() {
          let MM = [],
            rM = this._sentinel,
            iM = rM._prev;
          for (; iM !== rM;) MM.push(JSON.stringify(iM, Pr)), iM = iM._prev;
          return "[" + MM.join(", ") + "]"
        }
      },
      Qr = () => 1;

    function zr(MM, rM) {
      if (MM.nodeCount() <= 1) return [];
      let iM = function(MM, rM) {
        let iM = new NM,
          OM = 0,
          SM = 0;
        MM.nodes().forEach((MM => {
          iM.setNode(MM, {
            v: MM,
            in: 0,
            out: 0
          })
        })), MM.edges().forEach((MM => {
          let jM = iM.edge(MM.v, MM.w) || 0,
            aM = rM(MM),
            PM = jM + aM;
          iM.setEdge(MM.v, MM.w, PM);
          let nM = iM.node(MM.v),
            QM = iM.node(MM.w);
          SM = Math.max(SM, nM.out += aM), OM = Math.max(OM, QM.in += aM)
        }));
        let jM = function(MM) {
            let rM = [];
            for (let iM = 0; iM < MM; iM++) rM.push(iM);
            return rM
          }(SM + OM + 3).map((() => new nr)),
          aM = OM + 1;
        return iM.nodes().forEach((MM => {
          mr(jM, aM, iM.node(MM))
        })), {
          graph: iM,
          buckets: jM,
          zeroIdx: aM
        }
      }(MM, rM || Qr);
      return function(MM, rM, iM) {
        var OM;
        let SM, jM = [],
          aM = rM[rM.length - 1],
          PM = rM[0];
        for (; MM.nodeCount();) {
          for (; SM = PM.dequeue();) Lr(MM, rM, iM, SM);
          for (; SM = aM.dequeue();) Lr(MM, rM, iM, SM);
          if (MM.nodeCount())
            for (let aM = rM.length - 2; aM > 0; --aM)
              if (SM = null == (OM = rM[aM]) ? void 0 : OM.dequeue(), SM) {
                jM = jM.concat(Lr(MM, rM, iM, SM, !0) || []);
                break
              }
        }
        return jM
      }(iM.graph, iM.buckets, iM.zeroIdx).flatMap((rM => MM.outEdges(rM.v, rM.w) || []))
    }

    function Lr(MM, rM, iM, OM, SM) {
      let jM = [],
        aM = SM ? jM : void 0;
      return (MM.inEdges(OM.v) || []).forEach((OM => {
        let aM = MM.edge(OM),
          PM = MM.node(OM.v);
        SM && jM.push({
          v: OM.v,
          w: OM.w
        }), PM.out -= aM, mr(rM, iM, PM)
      })), (MM.outEdges(OM.v) || []).forEach((OM => {
        let SM = MM.edge(OM),
          jM = OM.w,
          aM = MM.node(jM);
        aM.in -= SM, mr(rM, iM, aM)
      })), MM.removeNode(OM.v), aM
    }

    function mr(MM, rM, iM) {
      var OM, SM, jM;
      iM.out ? iM.in ? null == (jM = MM[iM.out - iM.in + rM]) || jM.enqueue(iM) : null == (SM = MM[MM.length - 1]) || SM.enqueue(iM) : null == (OM = MM[0]) || OM.enqueue(iM)
    }

    function Hr(MM, rM) {
      var iM;
      ("greedy" === MM.graph().acyclicer ? zr(MM, (iM = MM, MM => iM.edge(MM).weight)) : function(MM, rM) {
        let iM = [],
          OM = {},
          SM = {};

        function jM(rM) {
          Object.hasOwn(SM, rM) || (SM[rM] = !0, OM[rM] = !0, MM.outEdges(rM).forEach((MM => {
            Object.hasOwn(OM, MM.w) ? iM.push(MM) : jM(MM.w)
          })), delete OM[rM])
        }

        function aM(jM) {
          var PM;
          Object.hasOwn(SM, jM) || (SM[jM] = !0, OM[jM] = !0, null == (PM = MM.outEdges(jM)) || PM.forEach((SM => {
            var PM, nM;
            Object.hasOwn(OM, SM.w) || (null == (PM = rM.node(jM)) ? void 0 : PM.rank) > (null == (nM = rM.node(SM.w)) ? void 0 : nM.rank) && function(MM, rM, iM) {
              let OM = new Set;

              function SM(rM) {
                var jM;
                if (MM.sources().includes(rM)) return !0;
                OM.add(rM);
                for (let aM of null != (jM = MM.inEdges(rM)) ? jM : [])
                  if ((aM.v !== iM.v || aM.w !== iM.w) && !OM.has(aM.v) && SM(aM.v)) return !0;
                return !1
              }
              return SM(rM)
            }(MM, SM.w, SM) ? iM.push(SM) : aM(SM.w)
          })), delete OM[jM])
        }
        let PM = jM;
        return rM && "function" == typeof rM.node && (PM = aM), MM.sources().forEach(PM), MM.nodes().forEach(PM), iM
      }(MM, null != rM ? rM : null)).forEach((rM => {
        let iM = MM.edge(rM);
        MM.removeEdge(rM), iM.forwardName = rM.name, iM.reversed = !0, MM.setEdge(rM.w, rM.v, iM, cM("rev"))
      }))
    }

    function hr(MM) {
      MM.graph().dummyChains = [], MM.edges().forEach((rM => function(MM, rM) {
        let iM, OM, SM, jM = rM.v,
          aM = MM.node(jM).rank,
          PM = rM.w,
          nM = MM.node(PM).rank,
          QM = rM.name,
          zM = MM.edge(rM),
          LM = zM.labelRank;
        if (nM === aM + 1) return;
        for (MM.removeEdge(rM), SM = 0, ++aM; aM < nM; ++SM, ++aM) zM.points = [], OM = {
          width: 0,
          height: 0,
          edgeLabel: zM,
          edgeObj: rM,
          rank: aM
        }, iM = AM(MM, "edge", OM, "_d"), aM === LM && (OM.width = zM.width, OM.height = zM.height, OM.dummy = "edge-label", OM.labelpos = zM.labelpos), MM.setEdge(jM, iM, {
          weight: zM.weight
        }, QM), 0 === SM && MM.graph().dummyChains.push(iM), jM = iM;
        MM.setEdge(jM, PM, {
          weight: zM.weight
        }, QM)
      }(MM, rM)))
    }

    function Jr(MM) {
      let rM = {};
      MM.sources().forEach((function iM(OM) {
        let SM = MM.node(OM);
        if (Object.hasOwn(rM, OM)) return SM.rank;
        rM[OM] = !0;
        let jM = MM.outEdges(OM),
          aM = jM ? jM.map((rM => null == rM ? Number.POSITIVE_INFINITY : iM(rM.w) - MM.edge(rM).minlen)) : [],
          PM = IM(Math.min, aM);
        return PM === Number.POSITIVE_INFINITY && (PM = 0), SM.rank = PM
      }))
    }

    function dr(MM, rM) {
      return MM.node(rM.w).rank - MM.node(rM.v).rank - MM.edge(rM).minlen
    }
    var yr = function(MM) {
      let rM = new NM({
          directed: !1
        }),
        iM = MM.nodes();
      if (0 === iM.length) throw new Error("Graph must have at least one node");
      let OM, SM, jM = iM[0],
        aM = MM.nodeCount();
      for (rM.setNode(jM, {}); lr(rM, MM) < aM && (OM = Er(rM, MM), OM);) SM = rM.hasNode(OM.v) ? dr(MM, OM) : -dr(MM, OM), Ur(rM, MM, SM);
      return rM
    };

    function lr(MM, rM) {
      return MM.nodes().forEach((function iM(OM) {
        let SM = rM.nodeEdges(OM);
        SM && SM.forEach((SM => {
          let jM = SM.v,
            aM = OM === jM ? SM.w : jM;
          !MM.hasNode(aM) && !dr(rM, SM) && (MM.setNode(aM, {}), MM.setEdge(OM, aM, {}), iM(aM))
        }))
      })), MM.nodeCount()
    }

    function Er(MM, rM) {
      return rM.edges().reduce(((iM, OM) => {
        let SM = Number.POSITIVE_INFINITY;
        return MM.hasNode(OM.v) !== MM.hasNode(OM.w) && (SM = dr(rM, OM)), SM < iM[0] ? [SM, OM] : iM
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function Ur(MM, rM, iM) {
      MM.nodes().forEach((MM => rM.node(MM).rank += iM))
    }
    var {
      preorder: Gr,
      postorder: Cr
    } = yM, er = br;

    function br(MM) {
      MM = function(MM) {
        let rM = (new NM).setGraph(MM.graph());
        return MM.nodes().forEach((iM => rM.setNode(iM, MM.node(iM)))), MM.edges().forEach((iM => {
          let OM = rM.edge(iM.v, iM.w) || {
              weight: 0,
              minlen: 1
            },
            SM = MM.edge(iM);
          rM.setEdge(iM.v, iM.w, {
            weight: OM.weight + SM.weight,
            minlen: Math.max(OM.minlen, SM.minlen)
          })
        })), rM
      }(MM), Jr(MM);
      let rM, iM, OM = yr(MM);
      for (gr(OM), wr(OM, MM); rM = Rr(OM);) iM = pr(OM, MM, rM), Wr(OM, MM, rM, iM)
    }

    function wr(MM, rM) {
      let iM = Cr(MM, MM.nodes());
      iM = iM.slice(0, iM.length - 1), iM.forEach((iM => function(MM, rM, iM) {
        let OM = MM.node(iM).parent,
          SM = MM.edge(iM, OM);
        SM.cutvalue = tr(MM, rM, iM)
      }(MM, rM, iM)))
    }

    function tr(MM, rM, iM) {
      let OM = MM.node(iM).parent,
        SM = !0,
        jM = rM.edge(iM, OM),
        aM = 0;
      jM || (SM = !1, jM = rM.edge(OM, iM)), aM = jM.weight;
      let PM = rM.nodeEdges(iM);
      return PM && PM.forEach((jM => {
        let PM = jM.v === iM,
          nM = PM ? jM.w : jM.v;
        if (nM !== OM) {
          let OM = PM === SM,
            QM = rM.edge(jM).weight;
          if (aM += OM ? QM : -QM, function(MM, rM, iM) {
              return MM.hasEdge(rM, iM)
            }(MM, iM, nM)) {
            let rM = MM.edge(iM, nM).cutvalue;
            aM += OM ? -rM : rM
          }
        }
      })), aM
    }

    function gr(MM, rM) {
      arguments.length < 2 && (rM = MM.nodes()[0]), ur(MM, {}, 1, rM)
    }

    function ur(MM, rM, iM, OM, SM) {
      let jM = iM,
        aM = MM.node(OM);
      rM[OM] = !0;
      let PM = MM.neighbors(OM);
      return PM && PM.forEach((SM => {
        Object.hasOwn(rM, SM) || (iM = ur(MM, rM, iM, SM, OM))
      })), aM.low = jM, aM.lim = iM++, SM ? aM.parent = SM : delete aM.parent, iM
    }

    function Rr(MM) {
      return MM.edges().find((rM => MM.edge(rM).cutvalue < 0))
    }

    function pr(MM, rM, iM) {
      let OM = iM.v,
        SM = iM.w;
      rM.hasEdge(OM, SM) || (OM = iM.w, SM = iM.v);
      let jM = MM.node(OM),
        aM = MM.node(SM),
        PM = jM,
        nM = !1;
      return jM.lim > aM.lim && (PM = aM, nM = !0), rM.edges().filter((rM => nM === sr(MM, MM.node(rM.v), PM) && nM !== sr(MM, MM.node(rM.w), PM))).reduce(((MM, iM) => dr(rM, iM) < dr(rM, MM) ? iM : MM))
    }

    function Wr(MM, rM, iM, OM) {
      let SM = iM.v,
        jM = iM.w;
      MM.removeEdge(SM, jM), MM.setEdge(OM.v, OM.w, {}), gr(MM), wr(MM, rM),
        function(MM, rM) {
          let iM = MM.nodes().find((rM => !MM.node(rM).parent));
          if (!iM) return;
          let OM = Gr(MM, [iM]);
          OM = OM.slice(1), OM.forEach((iM => {
            let OM = MM.node(iM).parent,
              SM = rM.edge(iM, OM),
              jM = !1;
            SM || (SM = rM.edge(OM, iM), jM = !0), rM.node(iM).rank = rM.node(OM).rank + (jM ? SM.minlen : -SM.minlen)
          }))
        }(MM, rM)
    }

    function sr(MM, rM, iM) {
      return iM.low <= rM.lim && rM.lim <= iM.lim
    }
    br.initLowLimValues = gr, br.initCutValues = wr, br.calcCutValue = tr, br.leaveEdge = Rr, br.enterEdge = pr, br.exchangeEdges = Wr;
    var Dr = function(MM) {
      let rM = MM.graph().ranker;
      if ("function" == typeof rM) return rM(MM);
      switch (rM) {
        case "network-simplex":
        default:
          Zr(MM);
          break;
        case "tight-tree":
          ! function(MM) {
            Jr(MM), yr(MM)
          }(MM);
          break;
        case "longest-path":
          kr(MM);
        case "none":
      }
    };
    var kr = Jr;

    function Zr(MM) {
      er(MM)
    }
    var or = function(MM) {
      let rM = function(MM) {
          let rM = {},
            iM = 0;

          function OM(SM) {
            let jM = iM;
            MM.children(SM).forEach(OM), rM[SM] = {
              low: jM,
              lim: iM++
            }
          }
          return MM.children(Or).forEach(OM), rM
        }(MM),
        iM = MM.graph();
      if (!Array.isArray(iM.dummyChains)) return;
      iM.dummyChains.forEach((iM => {
        let OM = MM.node(iM),
          SM = OM.edgeObj,
          jM = function(MM, rM, iM, OM) {
            let SM, jM = [],
              aM = [],
              PM = Math.min(rM[iM].low, rM[OM].low),
              nM = Math.max(rM[iM].lim, rM[OM].lim);
            SM = iM;
            do {
              SM = MM.parent(SM), jM.push(SM)
            } while (SM && (rM[SM].low > PM || nM > rM[SM].lim));
            let QM = SM,
              zM = OM;
            for (;
              (zM = MM.parent(zM)) !== QM;) aM.push(zM);
            return {
              path: jM.concat(aM.reverse()),
              lca: QM
            }
          }(MM, rM, SM.v, SM.w),
          aM = jM.path,
          PM = jM.lca,
          nM = 0,
          QM = aM[nM],
          zM = !0;
        for (; iM !== SM.w;) {
          if (OM = MM.node(iM), zM) {
            for (;
              (QM = aM[nM]) !== PM && MM.node(QM).maxRank < OM.rank;) nM++;
            QM === PM && (zM = !1)
          }
          if (!zM) {
            for (; nM < aM.length - 1 && MM.node(aM[nM + 1]).minRank <= OM.rank;) nM++;
            QM = aM[nM]
          }
          void 0 !== QM && MM.setParent(iM, QM), iM = MM.successors(iM)[0]
        }
      }))
    };

    function fr(MM) {
      let rM = AM(MM, "root", {}, "_root"),
        iM = function(MM) {
          let rM = {};

          function iM(OM, SM) {
            let jM = MM.children(OM);
            jM && jM.length && jM.forEach((MM => iM(MM, SM + 1))), rM[OM] = SM
          }
          return MM.children(Or).forEach((MM => iM(MM, 1))), rM
        }(MM),
        OM = Object.values(iM),
        SM = IM(Math.max, OM) - 1,
        jM = 2 * SM + 1;
      MM.graph().nestingRoot = rM, MM.edges().forEach((rM => MM.edge(rM).minlen *= jM));
      let aM = function(MM) {
        return MM.edges().reduce(((rM, iM) => rM + MM.edge(iM).weight), 0)
      }(MM) + 1;
      MM.children(Or).forEach((OM => {
        Yr(MM, rM, jM, aM, SM, iM, OM)
      })), MM.graph().nodeRankFactor = jM
    }

    function Yr(MM, rM, iM, OM, SM, jM, aM) {
      var PM;
      let nM = MM.children(aM);
      if (!nM.length) return void(aM !== rM && MM.setEdge(rM, aM, {
        weight: 0,
        minlen: iM
      }));
      let QM = BM(MM, "_bt"),
        zM = BM(MM, "_bb"),
        LM = MM.node(aM);
      MM.setParent(QM, aM), LM.borderTop = QM, MM.setParent(zM, aM), LM.borderBottom = zM, nM.forEach((PM => {
        var nM;
        Yr(MM, rM, iM, OM, SM, jM, PM);
        let LM = MM.node(PM),
          mM = LM.borderTop ? LM.borderTop : PM,
          HM = LM.borderBottom ? LM.borderBottom : PM,
          hM = LM.borderTop ? OM : 2 * OM,
          JM = mM !== HM ? 1 : SM - (null != (nM = jM[aM]) ? nM : 0) + 1;
        MM.setEdge(QM, mM, {
          weight: hM,
          minlen: JM,
          nestingEdge: !0
        }), MM.setEdge(HM, zM, {
          weight: hM,
          minlen: JM,
          nestingEdge: !0
        })
      })), MM.parent(aM) || MM.setEdge(rM, QM, {
        weight: 0,
        minlen: SM + (null != (PM = jM[aM]) ? PM : 0)
      })
    }
    var Nr = function(MM) {
      MM.children(Or).forEach((function rM(iM) {
        let OM = MM.children(iM),
          SM = MM.node(iM);
        if (OM.length && OM.forEach(rM), SM && Object.hasOwn(SM, "minRank")) {
          SM.borderLeft = [], SM.borderRight = [];
          for (let rM = SM.minRank, OM = SM.maxRank + 1; rM < OM; ++rM) Ar(MM, "borderLeft", "_bl", iM, SM, rM), Ar(MM, "borderRight", "_br", iM, SM, rM)
        }
      }))
    };

    function Ar(MM, rM, iM, OM, SM, jM) {
      let aM = {
          width: 0,
          height: 0,
          rank: jM,
          borderType: rM
        },
        PM = SM[rM][jM - 1],
        nM = AM(MM, "border", aM, iM);
      SM[rM][jM] = nM, MM.setParent(nM, OM), PM && MM.setEdge(PM, nM, {
        weight: 1
      })
    }

    function xr(MM) {
      var rM;
      let iM = null == (rM = MM.graph().rankdir) ? void 0 : rM.toLowerCase();
      ("bt" === iM || "rl" === iM) && function(MM) {
        MM.nodes().forEach((rM => Br(MM.node(rM)))), MM.edges().forEach((rM => {
          var iM;
          let OM = MM.edge(rM);
          null == (iM = OM.points) || iM.forEach(Br), Object.hasOwn(OM, "y") && Br(OM)
        }))
      }(MM), ("lr" === iM || "rl" === iM) && (function(MM) {
        MM.nodes().forEach((rM => Xr(MM.node(rM)))), MM.edges().forEach((rM => {
          var iM;
          let OM = MM.edge(rM);
          null == (iM = OM.points) || iM.forEach(Xr), Object.hasOwn(OM, "x") && Xr(OM)
        }))
      }(MM), vr(MM))
    }

    function vr(MM) {
      MM.nodes().forEach((rM => Fr(MM.node(rM)))), MM.edges().forEach((rM => Fr(MM.edge(rM))))
    }

    function Fr(MM) {
      let rM = MM.width;
      MM.width = MM.height, MM.height = rM
    }

    function Br(MM) {
      MM.y = -MM.y
    }

    function Xr(MM) {
      let rM = MM.x;
      MM.x = MM.y, MM.y = rM
    }

    function Ir(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        iM = {},
        OM = MM.nodes().filter((rM => !MM.children(rM).length)),
        SM = OM.map((rM => MM.node(rM).rank)),
        jM = Mr(IM(Math.max, SM) + 1).map((() => []));
      return OM.sort(((rM, iM) => MM.node(rM).rank - MM.node(iM).rank)).forEach((function OM(SM) {
        if (iM[SM]) return;
        iM[SM] = !0;
        let aM = MM.node(SM);
        jM[aM.rank].push(SM);
        let PM = MM.successors(SM);
        PM && [...PM].sort(((iM, OM) => function(iM, OM) {
          let SM = MM.node(iM),
            jM = MM.node(OM);
          return Sr(rM, SM, jM)
        }(iM, OM))).forEach(OM)
      })), jM
    }

    function Kr(MM, rM) {
      let iM = 0;
      for (let OM = 1; OM < rM.length; ++OM) iM += qr(MM, rM[OM - 1], rM[OM]);
      return iM
    }

    function qr(MM, rM, iM) {
      let OM = function(MM, rM) {
          return MM.reduce(((MM, iM, OM) => (MM[iM] = rM[OM], MM)), {})
        }(iM, iM.map(((MM, rM) => rM))),
        SM = rM.flatMap((rM => {
          let iM = MM.outEdges(rM);
          return iM ? iM.map((rM => ({
            pos: OM[rM.w],
            weight: MM.edge(rM).weight
          }))).sort(((MM, rM) => MM.pos - rM.pos)) : []
        })),
        jM = 1;
      for (; jM < iM.length;) jM <<= 1;
      let aM = 2 * jM - 1;
      jM -= 1;
      let PM = new Array(aM).fill(0),
        nM = 0;
      return SM.forEach((MM => {
        let rM = MM.pos + jM;
        PM[rM] += MM.weight;
        let iM = 0;
        for (; rM > 0;) rM % 2 && (iM += PM[rM + 1]), rM = rM - 1 >> 1, PM[rM] += MM.weight;
        nM += MM.weight * iM
      })), nM
    }

    function Tr(MM, rM) {
      let iM = {};
      return MM.forEach(((MM, rM) => {
          let OM = {
            indegree: 0,
            in: [],
            out: [],
            vs: [MM.v],
            i: rM
          };
          void 0 !== MM.barycenter && (OM.barycenter = MM.barycenter, OM.weight = MM.weight), iM[MM.v] = OM
        })), rM.edges().forEach((MM => {
          let rM = iM[MM.v],
            OM = iM[MM.w];
          void 0 !== rM && void 0 !== OM && (OM.indegree++, rM.out.push(OM))
        })),
        function(MM) {
          let rM = [];

          function iM(MM) {
            return rM => {
              rM.merged || (void 0 === rM.barycenter || void 0 === MM.barycenter || rM.barycenter >= MM.barycenter) && function(MM, rM) {
                let iM = 0,
                  OM = 0;
                MM.weight && (iM += MM.barycenter * MM.weight, OM += MM.weight), rM.weight && (iM += rM.barycenter * rM.weight, OM += rM.weight), MM.vs = rM.vs.concat(MM.vs), MM.barycenter = iM / OM, MM.weight = OM, MM.i = Math.min(rM.i, MM.i), rM.merged = !0
              }(MM, rM)
            }
          }

          function OM(rM) {
            return iM => {
              iM.in.push(rM), 0 === --iM.indegree && MM.push(iM)
            }
          }
          for (; MM.length;) {
            let SM = MM.pop();
            rM.push(SM), SM.in.reverse().forEach(iM(SM)), SM.out.forEach(OM(SM))
          }
          return rM.filter((MM => !MM.merged)).map((MM => rr(MM, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(iM).filter((MM => !MM.indegree)))
    }

    function Vr(MM, rM, iM, OM, SM) {
      let jM = {},
        aM = null,
        PM = null,
        nM = SM;
      "boolean" == typeof rM ? (nM = rM, jM = {}) : rM && (jM = rM, aM = null != iM ? iM : null, PM = null != OM ? OM : null);
      let QM = function(MM, rM) {
          let iM = {
            lhs: [],
            rhs: []
          };
          return MM.forEach((MM => {
            rM(MM) ? iM.lhs.push(MM) : iM.rhs.push(MM)
          })), iM
        }(MM, (MM => Object.hasOwn(MM, "barycenter"))),
        zM = QM.lhs,
        LM = QM.rhs.sort(((MM, rM) => rM.i - MM.i)),
        mM = [],
        HM = 0,
        hM = 0,
        JM = 0;
      zM.sort(function(MM, rM, iM) {
        return (OM, SM) => {
          if (OM.barycenter < SM.barycenter) return -1;
          if (OM.barycenter > SM.barycenter) return 1;
          if (MM && ("string" == typeof OM.vs[0] || "string" == typeof SM.vs[0])) {
            let iM = MM.node(OM.vs[0]),
              jM = MM.node(SM.vs[0]),
              aM = Sr(rM, iM, jM);
            if (0 !== aM) return aM
          }
          return iM ? SM.i - OM.i : OM.i - SM.i
        }
      }(PM, aM, !!nM));
      for (let [yM, lM] of Object.entries(jM)) {
        let MM = zM.findIndex((MM => MM.vs[0] === yM));
        zM.splice(MM + 1, 0, lM)
      }
      JM = cr(mM, LM, JM), zM.forEach((MM => {
        JM += MM.vs.length, mM.push(MM.vs), HM += MM.barycenter * MM.weight, hM += MM.weight, JM = cr(mM, LM, JM)
      }));
      let dM = {
        vs: mM.flat(1)
      };
      return hM && (dM.barycenter = HM / hM, dM.weight = hM), dM
    }

    function cr(MM, rM, iM) {
      let OM;
      for (; rM.length && (OM = rM[rM.length - 1]).i <= iM;) rM.pop(), MM.push(OM.vs), iM++;
      return iM
    }

    function Mi(MM, rM, iM, OM, SM) {
      var jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM;
      let dM = null,
        yM = SM;
      "boolean" == typeof OM ? (yM = OM, dM = null) : void 0 !== OM && (dM = OM);
      let lM = MM.children(rM),
        EM = MM.node(rM),
        UM = EM ? EM.borderLeft : void 0,
        GM = EM ? EM.borderRight : void 0,
        CM = {};
      UM && (lM = lM.filter((MM => MM !== UM && MM !== GM)));
      let eM = function(MM) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((rM => {
          let iM = MM.inEdges(rM);
          if (!iM || !iM.length) return {
            v: rM
          };
          {
            let OM = iM.reduce(((rM, iM) => {
              let OM = MM.edge(iM),
                SM = MM.node(iM.v);
              return {
                sum: rM.sum + OM.weight * SM.order,
                weight: rM.weight + OM.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: rM,
              barycenter: OM.sum / OM.weight,
              weight: OM.weight
            }
          }
        }))
      }(MM, lM);
      eM.forEach((rM => {
        if (MM.children(rM.v).length) {
          let {
            result: OM
          } = Mi(MM, rM.v, iM, dM, yM);
          CM[rM.v] = OM, Object.hasOwn(OM, "barycenter") && function(MM, rM) {
            void 0 !== MM.barycenter ? (MM.barycenter = (MM.barycenter * MM.weight + rM.barycenter * rM.weight) / (MM.weight + rM.weight), MM.weight += rM.weight) : (MM.barycenter = rM.barycenter, MM.weight = rM.weight)
          }(rM, OM)
        }
      }));
      let bM = Tr(eM, iM);
      ! function(MM, rM) {
        MM.forEach((MM => {
          MM.vs = MM.vs.flatMap((MM => rM[MM] ? rM[MM].vs : MM))
        }))
      }(bM, CM);
      let wM = {},
        tM = !1;
      for (let uM = 0; uM < bM.length; uM++)
        for (let rM = uM + 1; rM < bM.length; rM++)
          if (bM[uM] && bM[rM] && null != (jM = bM[uM]) && jM.barycenter && null != (aM = bM[rM]) && aM.barycenter && (null == (PM = bM[uM]) ? void 0 : PM.barycenter) === bM[rM].barycenter) {
            let iM = null != (QM = null == (nM = bM[uM]) ? void 0 : nM.vs[0]) ? QM : "",
              OM = null != (LM = null == (zM = bM[rM]) ? void 0 : zM.vs[0]) ? LM : "",
              SM = MM.node(iM),
              jM = MM.node(OM);
            if ("edge" === SM.dummy && "edge" === jM.dummy && (null == (mM = SM.edgeObj) ? void 0 : mM.v) === (null == (HM = jM.edgeObj) ? void 0 : HM.v) && (null == (hM = SM.edgeObj) ? void 0 : hM.w) === (null == (JM = jM.edgeObj) ? void 0 : JM.w)) {
              if (SM.edgeLabel.reversed) {
                wM[OM] = bM[uM], bM.splice(uM, 1), uM--;
                break
              }
              wM[iM] = bM[rM], bM.splice(rM, 1), rM--
            } else tM = !0
          } let gM = Vr(bM, wM, dM, MM, yM);
      if (UM && GM) {
        gM.vs = [UM, gM.vs, GM].flat(1);
        let rM = MM.predecessors(UM);
        if (rM && rM.length) {
          let iM = MM.node(rM[0]),
            OM = MM.predecessors(GM),
            SM = MM.node(OM[0]);
          Object.hasOwn(gM, "barycenter") || (gM.barycenter = 0, gM.weight = 0), gM.barycenter = (gM.barycenter * gM.weight + iM.order + SM.order) / (gM.weight + 2), gM.weight += 2
        }
      }
      return Object.defineProperty(gM, "result", {
        value: gM,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(gM, "usedBias", {
        value: tM,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), gM
    }

    function ri(MM, rM, iM, OM) {
      OM || (OM = MM.nodes());
      let SM = function(MM) {
          let rM;
          for (; MM.hasNode(rM = cM("_root")););
          return rM
        }(MM),
        jM = new NM({
          compound: !0
        }).setGraph({
          root: SM
        }).setDefaultNodeLabel((rM => MM.node(rM)));
      return OM.forEach((OM => {
        let aM = MM.node(OM),
          PM = MM.parent(OM);
        if (aM.rank === rM || aM.minRank <= rM && rM <= aM.maxRank) {
          jM.setNode(OM), jM.setParent(OM, PM || SM);
          let nM = MM[iM](OM);
          nM && nM.forEach((rM => {
            let iM = rM.v === OM ? rM.w : rM.v,
              SM = jM.edge(iM, OM),
              aM = void 0 !== SM ? SM.weight : 0;
            jM.setEdge(iM, OM, {
              weight: MM.edge(rM).weight + aM
            })
          })), Object.hasOwn(aM, "minRank") && jM.setNode(OM, {
            borderLeft: aM.borderLeft[rM],
            borderRight: aM.borderRight[rM]
          })
        }
      })), jM
    }

    function ii(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof rM.customOrder) return void rM.customOrder(MM, ii);
      let OM = KM(MM),
        SM = Oi(MM, Mr(1, OM + 1), "inEdges"),
        jM = Oi(MM, Mr(OM - 1, -1, -1), "outEdges"),
        aM = Ir(MM, iM);
      if (ji(MM, aM), rM.disableOptimalOrderHeuristic) return;
      let PM, nM = Number.POSITIVE_INFINITY,
        QM = rM.constraints || [];
      for (let zM = 0, LM = 0; LM < 4; ++zM, ++LM) {
        Si(zM % 2 ? SM : jM, zM % 4 >= 2, QM, iM), aM = FM(MM);
        let rM = Kr(MM, aM);
        rM < nM ? (LM = 0, PM = Object.assign({}, aM), nM = rM) : rM === nM && (PM = structuredClone(aM))
      }
      ji(MM, PM)
    }

    function Oi(MM, rM, iM) {
      let OM = new Map,
        SM = (MM, rM) => {
          OM.has(MM) || OM.set(MM, []), OM.get(MM).push(rM)
        };
      for (let jM of MM.nodes()) {
        let rM = MM.node(jM);
        if ("number" == typeof rM.rank && SM(rM.rank, jM), "number" == typeof rM.minRank && "number" == typeof rM.maxRank)
          for (let MM = rM.minRank; MM <= rM.maxRank; MM++) MM !== rM.rank && SM(MM, jM)
      }
      return rM.map((function(rM) {
        return ri(MM, rM, iM, OM.get(rM) || [])
      }))
    }

    function Si(MM, rM, iM, OM) {
      let SM = !0,
        jM = new NM;
      MM.forEach((function(MM) {
        iM.forEach((MM => jM.setEdge(MM.left, MM.right)));
        let aM = MM.graph().root,
          {
            result: PM,
            usedBias: nM
          } = Mi(MM, aM, jM, OM, SM);
        rM && nM && (SM = !SM), PM.vs.forEach(((rM, iM) => MM.node(rM).order = iM)),
          function(MM, rM, iM) {
            let OM, SM = {};
            iM.forEach((iM => {
              let jM, aM, PM = MM.parent(iM);
              for (; PM;) {
                if (jM = MM.parent(PM), jM ? (aM = SM[jM], SM[jM] = PM) : (aM = OM, OM = PM), aM && aM !== PM) return void rM.setEdge(aM, PM);
                PM = jM
              }
            }))
          }(MM, jM, PM.vs)
      }))
    }

    function ji(MM, rM) {
      Object.values(rM).forEach((rM => rM.forEach(((rM, iM) => MM.node(rM).order = iM))))
    }

    function ai(MM, rM, iM) {
      if (rM > iM) {
        let MM = rM;
        rM = iM, iM = MM
      }
      let OM = MM[rM];
      OM || (MM[rM] = OM = {}), OM[iM] = !0
    }

    function Pi(MM, rM, iM) {
      if (rM > iM) {
        let MM = rM;
        rM = iM, iM = MM
      }
      let OM = MM[rM];
      return void 0 !== OM && Object.hasOwn(OM, iM)
    }

    function ni(MM, rM, iM, OM) {
      let SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        jM = {},
        aM = function(MM, rM, iM, OM) {
          let SM = new NM,
            jM = MM.graph(),
            aM = function(MM, rM, iM) {
              return (OM, SM, jM) => {
                let aM, PM = OM.node(SM),
                  nM = OM.node(jM),
                  QM = 0;
                if (QM += PM.width / 2, Object.hasOwn(PM, "labelpos")) switch (PM.labelpos.toLowerCase()) {
                  case "l":
                    aM = -PM.width / 2;
                    break;
                  case "r":
                    aM = PM.width / 2
                }
                if (aM && (QM += iM ? aM : -aM), aM = void 0, QM += (PM.dummy ? rM : MM) / 2, QM += (nM.dummy ? rM : MM) / 2, QM += nM.width / 2, Object.hasOwn(nM, "labelpos")) switch (nM.labelpos.toLowerCase()) {
                  case "l":
                    aM = nM.width / 2;
                    break;
                  case "r":
                    aM = -nM.width / 2
                }
                return aM && (QM += iM ? aM : -aM), QM
              }
            }(jM.nodesep, jM.edgesep, OM);
          return rM.forEach((rM => {
            let OM;
            rM.forEach((rM => {
              let jM = iM[rM];
              if (void 0 !== jM) {
                if (SM.setNode(jM), void 0 !== OM) {
                  let PM = iM[OM];
                  if (void 0 !== PM) {
                    let iM = SM.edge(PM, jM);
                    SM.setEdge(PM, jM, Math.max(aM(MM, rM, OM), iM || 0))
                  }
                }
                OM = rM
              }
            }))
          })), SM
        }(MM, rM, iM, SM),
        PM = SM ? "borderLeft" : "borderRight";

      function nM(MM, rM) {
        let iM = aM.nodes().slice(),
          OM = {},
          SM = iM.pop();
        for (; SM;) {
          if (OM[SM]) MM(SM);
          else {
            OM[SM] = !0, iM.push(SM);
            for (let MM of rM(SM)) iM.push(MM)
          }
          SM = iM.pop()
        }
      }
      return nM((function(MM) {
        let rM = aM.inEdges(MM);
        jM[MM] = rM ? rM.reduce(((MM, rM) => {
          var iM;
          let OM = null != (iM = jM[rM.v]) ? iM : 0,
            SM = aM.edge(rM);
          return Math.max(MM, OM + (void 0 !== SM ? SM : 0))
        }), 0) : 0
      }), (function(MM) {
        return aM.predecessors(MM) || []
      })), nM((function(rM) {
        let iM = aM.outEdges(rM),
          OM = Number.POSITIVE_INFINITY;
        iM && (OM = iM.reduce(((MM, rM) => {
          let iM = jM[rM.w],
            OM = aM.edge(rM);
          return Math.min(MM, (void 0 !== iM ? iM : 0) - (void 0 !== OM ? OM : 0))
        }), Number.POSITIVE_INFINITY));
        let SM = MM.node(rM);
        OM !== Number.POSITIVE_INFINITY && SM.borderType !== PM && (jM[rM] = Math.max(void 0 !== jM[rM] ? jM[rM] : 0, OM))
      }), (function(MM) {
        return aM.successors(MM) || []
      })), Object.keys(OM).forEach((MM => {
        var rM;
        let OM = iM[MM];
        void 0 !== OM && (jM[MM] = null != (rM = jM[OM]) ? rM : 0)
      })), jM
    }

    function Qi(MM, rM) {
      let iM, OM = FM(MM),
        SM = Object.assign(function(MM, rM) {
          let iM = {};
          return rM.length && rM.reduce((function(rM, OM) {
            let SM = 0,
              jM = 0,
              aM = rM.length,
              PM = OM[OM.length - 1];
            return OM.forEach(((rM, nM) => {
              let QM = function(MM, rM) {
                  if (MM.node(rM).dummy) {
                    let iM = MM.predecessors(rM);
                    if (iM) return iM.find((rM => MM.node(rM).dummy))
                  }
                }(MM, rM),
                zM = QM ? MM.node(QM).order : aM;
              (QM || rM === PM) && (OM.slice(jM, nM + 1).forEach((rM => {
                let OM = MM.predecessors(rM);
                OM && OM.forEach((OM => {
                  let jM = MM.node(OM),
                    aM = jM.order;
                  (aM < SM || zM < aM) && (!jM.dummy || !MM.node(rM).dummy) && ai(iM, OM, rM)
                }))
              })), jM = nM + 1, SM = zM)
            })), OM
          })), iM
        }(MM, OM), function(MM, rM) {
          let iM = {};

          function OM(rM, OM, SM, jM, aM) {
            Mr(OM, SM).forEach((OM => {
              let SM = rM[OM];
              if (void 0 !== SM && MM.node(SM).dummy) {
                let rM = MM.predecessors(SM);
                rM && rM.forEach((rM => {
                  if (void 0 === rM) return;
                  let OM = MM.node(rM);
                  OM.dummy && (OM.order < jM || OM.order > aM) && ai(iM, rM, SM)
                }))
              }
            }))
          }
          return rM.length && rM.reduce((function(rM, iM) {
            let SM = -1,
              jM = -1,
              aM = 0;
            return iM.forEach(((PM, nM) => {
              if ("border" === MM.node(PM).dummy) {
                let rM = MM.predecessors(PM);
                if (rM && rM.length) {
                  let PM = rM[0];
                  if (void 0 === PM) return;
                  jM = MM.node(PM).order, OM(iM, aM, nM, SM, jM), aM = nM, SM = jM
                }
              }
              OM(iM, aM, iM.length, jM, rM.length)
            })), iM
          })), iM
        }(MM, OM)),
        jM = {};
      ["u", "d"].forEach((aM => {
        iM = "u" === aM ? OM : Object.values(OM).reverse(), ["l", "r"].forEach((OM => {
          "r" === OM && (iM = iM.map((MM => Object.values(MM).reverse())));
          let PM = function(MM, rM, iM, OM, SM) {
              let jM = {},
                aM = {},
                PM = {};
              return rM.forEach((MM => {
                MM.forEach(((MM, rM) => {
                  jM[MM] = MM, aM[MM] = MM, PM[MM] = rM
                }))
              })), rM.forEach((rM => {
                let nM = -1,
                  QM = -1,
                  zM = !1,
                  LM = rM,
                  mM = rM.findIndex((rM => (null == SM ? void 0 : SM.includes(rM)) || zi(rM, MM, SM)));
                mM > 0 && (LM = [rM[mM], ...rM.slice(0, mM), ...rM.slice(mM + 1)], zM = !0), LM.forEach((rM => {
                  var LM;
                  let mM = OM(rM);
                  if (mM && mM.length) {
                    null != SM && SM.includes(rM) && (mM = mM.filter((rM => zi(rM, MM, SM))));
                    let OM = mM.sort(((MM, rM) => {
                        let iM = PM[MM],
                          OM = PM[rM];
                        return (void 0 !== iM ? iM : 0) - (void 0 !== OM ? OM : 0)
                      })),
                      HM = (OM.length - 1) / 2;
                    for (let MM = Math.floor(HM), SM = Math.ceil(HM); MM <= SM; ++MM) {
                      let SM = OM[MM];
                      if (void 0 === SM) continue;
                      let mM = PM[SM];
                      if (void 0 !== mM && aM[rM] === rM && nM < mM && PM[SM] !== QM && !Pi(iM, rM, SM)) {
                        let MM = jM[SM];
                        void 0 !== MM && (aM[SM] = rM, aM[rM] = jM[rM] = MM, nM = mM, zM && (nM = -1, QM = null != (LM = PM[SM]) ? LM : -1, zM = !1))
                      }
                    }
                  }
                }))
              })), {
                root: jM,
                align: aM
              }
            }(MM, iM, SM, (rM => ("u" === aM ? MM.predecessors(rM) : MM.successors(rM)) || []), rM),
            nM = ni(MM, iM, PM.root, PM.align, "r" === OM);
          "r" === OM && (nM = ir(nM, (MM => -MM))), jM[aM + OM] = nM
        }))
      }));
      let aM = function(MM, rM) {
        return Object.values(rM).reduce(((rM, iM) => {
          let OM = Number.NEGATIVE_INFINITY,
            SM = Number.POSITIVE_INFINITY;
          Object.entries(iM).forEach((rM => {
            let [iM, jM] = rM, aM = function(MM, rM) {
              return MM.node(rM).width
            }(MM, iM) / 2;
            OM = Math.max(jM + aM, OM), SM = Math.min(jM - aM, SM)
          }));
          let jM = OM - SM;
          return jM < rM[0] && (rM = [jM, iM]), rM
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(MM, jM);
      return function(MM, rM) {
          let iM = Object.values(rM),
            OM = IM(Math.min, iM),
            SM = IM(Math.max, iM);
          ["u", "d"].forEach((iM => {
            ["l", "r"].forEach((jM => {
              let aM = iM + jM,
                PM = MM[aM];
              if (!PM || PM === rM) return;
              let nM = Object.values(PM),
                QM = OM - IM(Math.min, nM);
              "l" !== jM && (QM = SM - IM(Math.max, nM)), QM && (MM[aM] = ir(PM, (MM => MM + QM)))
            }))
          }))
        }(jM, aM),
        function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            iM = MM.ul;
          return iM ? ir(iM, ((iM, OM) => {
            var SM, jM;
            if (rM) {
              let iM = rM.toLowerCase(),
                SM = MM[iM];
              if (SM && void 0 !== SM[OM]) return SM[OM]
            }
            let aM = Object.values(MM).map((MM => {
              let rM = MM[OM];
              return void 0 !== rM ? rM : 0
            })).sort(((MM, rM) => MM - rM));
            return ((null != (SM = aM[1]) ? SM : 0) + (null != (jM = aM[2]) ? jM : 0)) / 2
          })) : {}
        }(jM, MM.graph().align)
    }

    function zi(MM, rM, iM) {
      var OM;
      if (!iM) return !1;
      let SM = null == (OM = rM.node(MM)) ? void 0 : OM.edgeObj;
      if (!SM || rM.node(MM).edgeLabel.reversed) return !1;
      let jM = iM.indexOf(null == SM ? void 0 : SM.v),
        aM = iM.indexOf(null == SM ? void 0 : SM.w);
      return -1 !== jM && -1 !== aM && jM === (aM + 1) % iM.length || jM === (aM - 1) % iM.length
    }

    function Li(MM, rM) {
      (function(MM) {
        let rM = FM(MM),
          iM = MM.graph(),
          OM = iM.ranksep,
          SM = iM.rankalign,
          jM = 0;
        rM.forEach((rM => {
          let iM = rM.reduce(((rM, iM) => {
            var OM;
            let SM = null != (OM = MM.node(iM).height) ? OM : 0;
            return rM > SM ? rM : SM
          }), 0);
          rM.forEach((rM => {
            let OM = MM.node(rM);
            OM.y = "top" === SM ? jM + OM.height / 2 : "bottom" === SM ? jM + iM - OM.height / 2 : jM + iM / 2
          })), jM += iM + OM
        }))
      })(MM = xM(MM)), Object.entries(Qi(MM, rM)).forEach((rM => {
        let [iM, OM] = rM;
        return MM.node(iM).x = OM
      }))
    }
    var mi = new WeakMap;

    function Hi(MM) {
      return di(MM, TM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), MM
    }

    function Ji(MM, rM, iM) {
      let OM = rM;
      for (; void 0 !== OM;) {
        let rM = MM.parent(OM);
        if (rM === iM) return OM;
        OM = rM
      }
    }

    function di(MM, rM, iM) {
      var OM;
      let SM = MM.nodes().filter((rM => MM.children(rM).length)),
        jM = {};
      SM.forEach((OM => {
        let SM = MM.node(OM);
        if (SM && SM.rankdir) {
          let aM = new NM({
            multigraph: !0,
            compound: !0
          });
          aM.setGraph({
            rankdir: SM.rankdir
          });
          let PM = MM.children(OM);
          PM.forEach((rM => {
            let iM = {
              ...MM.node(rM)
            };
            aM.setNode(rM, iM);
            let SM = MM.parent(rM);
            SM && SM !== OM && PM.includes(SM) && aM.setParent(rM, SM)
          }));
          let nM = new Set;
          MM.edges().forEach((rM => {
            let iM = Ji(MM, rM.v, OM),
              SM = Ji(MM, rM.w, OM);
            if (iM && SM && iM !== SM) {
              let OM = `${iM}\0${SM}`;
              nM.has(OM) || (nM.add(OM), aM.setEdge(iM, SM, {
                ...MM.edge(rM)
              }))
            }
          })), di(aM, rM, iM);
          let QM = gi(aM);
          yi(QM, rM, iM, null), li(aM, QM);
          let zM = 1 / 0,
            LM = 1 / 0,
            mM = -1 / 0,
            HM = -1 / 0;
          aM.nodes().forEach((MM => {
            if (MM === OM) return;
            let rM = aM.node(MM);
            rM && "number" == typeof rM.x && "number" == typeof rM.y && "number" == typeof rM.width && "number" == typeof rM.height && (zM = Math.min(zM, rM.x - rM.width / 2), mM = Math.max(mM, rM.x + rM.width / 2), LM = Math.min(LM, rM.y - rM.height / 2), HM = Math.max(HM, rM.y + rM.height / 2))
          })), (!isFinite(zM) || !isFinite(LM) || !isFinite(mM) || !isFinite(HM)) && (zM = LM = 0, mM = HM = 0);
          let hM = mM - zM,
            JM = HM - LM;
          jM[OM] = {
            minX: zM,
            XS: LM,
            maxX: mM,
            KS: HM,
            width: hM,
            height: JM,
            offsetX: zM,
            offsetY: LM
          }, SM._dagreClusterSubgraph = aM
        }
      }));
      let aM = [],
        PM = new Map;
      SM.forEach((rM => {
        let iM = MM.node(rM);
        iM && iM.rankdir && jM[rM] && PM.set(rM, (MM.children(rM) || []).filter((MM => MM !== rM)))
      }));
      let nM = new Set([...PM.values()].flat()),
        QM = new Map;
      PM.forEach(((rM, iM) => {
        nM.has(iM) || QM.set(iM, (rM => {
          let iM = [],
            OM = (MM.children(rM) || []).filter((MM => MM !== rM));
          for (; OM.length > 0;) {
            let rM = OM.shift();
            iM.push(rM), (MM.children(rM) || []).filter((MM => MM !== rM)).forEach((MM => OM.push(MM)))
          }
          return iM
        })(iM))
      }));
      let zM = new Set([...QM.values()].flat()),
        LM = MM => {
          for (let [rM, iM] of QM)
            if (iM.includes(MM)) return rM;
          return MM
        },
        mM = [];
      MM.edges().forEach((rM => {
        (zM.has(rM.v) || zM.has(rM.w)) && mM.push({
          edge: rM,
          label: MM.edge(rM)
        })
      }));
      let HM = new Map;
      zM.forEach((rM => {
        let iM = MM.parent(rM);
        HM.set(rM, "string" == typeof iM ? iM : void 0)
      })), QM.forEach(((rM, iM) => {
        let OM = MM.node(iM),
          SM = [];
        rM.forEach((rM => {
          let iM = MM.node(rM);
          iM && (SM.push({
            id: rM,
            node: iM,
            parent: HM.get(rM)
          }), MM.removeNode(rM))
        }));
        let PM = mM.filter((MM => {
            let {
              edge: iM
            } = MM;
            return rM.includes(iM.v) || rM.includes(iM.w)
          })),
          nM = jM[iM];
        OM && (aM.push({
          clusterId: iM,
          subgraph: OM._dagreClusterSubgraph,
          bounds: nM,
          children: rM,
          removedNodes: SM,
          removedEdges: PM
        }), OM.width = nM.width, OM.height = nM.height)
      }));
      let hM = new Set;
      mM.forEach((rM => {
        let {
          edge: iM,
          label: OM
        } = rM, SM = LM(iM.v), jM = LM(iM.w);
        if (SM !== jM && MM.hasNode(SM) && MM.hasNode(jM)) {
          let rM = `${SM}\0${jM}`;
          hM.has(rM) || (hM.add(rM), MM.setEdge(SM, jM, {
            ...OM,
            width: 0,
            height: 0
          }))
        }
      }));
      let JM = gi(MM),
        dM = yi(JM, rM, iM, null != (OM = mi.get(MM)) ? OM : null);
      mi.set(MM, dM), li(MM, JM), hM.forEach((rM => {
        let iM = rM.indexOf("\0"),
          OM = rM.slice(0, iM),
          SM = rM.slice(iM + 1);
        MM.hasEdge(OM, SM) && MM.removeEdge(OM, SM)
      })), aM.forEach((rM => {
        let {
          clusterId: iM,
          subgraph: OM,
          bounds: SM,
          removedNodes: jM,
          removedEdges: aM
        } = rM;
        var PM, nM;
        let QM = MM.node(iM),
          zM = null != (PM = null == QM ? void 0 : QM.x) ? PM : 0,
          LM = null != (nM = null == QM ? void 0 : QM.y) ? nM : 0,
          mM = (SM.minX + SM.maxX) / 2,
          HM = (SM.XS + SM.KS) / 2;
        jM.forEach((rM => {
          let {
            id: iM,
            node: OM,
            parent: SM
          } = rM;
          MM.setNode(iM, OM), void 0 !== SM && MM.setParent(iM, SM)
        })), aM.forEach((rM => {
          let {
            edge: iM,
            label: OM
          } = rM;
          MM.setEdge(iM, OM)
        })), OM.nodes().forEach((rM => {
          if (rM === iM) return;
          let SM = OM.node(rM),
            jM = MM.node(rM);
          jM && SM && "number" == typeof SM.x && "number" == typeof SM.y && (jM.x = zM + (SM.x - mM), jM.y = LM + (SM.y - HM))
        })), delete QM._dagreClusterSubgraph
      })), SM.forEach((rM => {
        var iM, OM;
        let SM = MM.node(rM),
          aM = jM[rM];
        if (SM && SM.rankdir && SM._dagreClusterSubgraph && aM) {
          let jM = SM._dagreClusterSubgraph,
            PM = null != (iM = SM.x) ? iM : 0,
            nM = null != (OM = SM.y) ? OM : 0,
            QM = (aM.minX + aM.maxX) / 2,
            zM = (aM.XS + aM.KS) / 2;
          jM.nodes().forEach((iM => {
            if (iM === rM) return;
            let OM = jM.node(iM),
              SM = MM.node(iM);
            if (SM && OM && "number" == typeof OM.x && "number" == typeof OM.y) {
              let MM = OM.x - QM,
                rM = OM.y - zM;
              SM.x = PM + MM, SM.y = nM + rM
            }
          })), delete SM._dagreClusterSubgraph
        }
      }))
    }

    function yi(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var SM, jM;
      let aM = !1 !== (null == iM ? void 0 : iM.useDynamic),
        PM = aM && null != (SM = null == OM ? void 0 : OM.graph) ? SM : null,
        nM = aM && null != (jM = null == OM ? void 0 : OM.rawNodes) ? jM : null;
      rM("    makeSpaceForEdgeLabels", (() => function(MM) {
        let rM = MM.graph();
        rM.ranksep /= 2, MM.edges().forEach((iM => {
          var OM;
          let SM = MM.edge(iM);
          SM.minlen *= 2, "c" !== (null != (OM = SM.labelpos) ? OM : "r").toLowerCase() && ("TB" === rM.rankdir || "BT" === rM.rankdir ? SM.width += SM.labeloffset : SM.height += SM.labeloffset)
        }))
      }(MM))), rM("    removeSelfEdges", (() => function(MM) {
        MM.edges().forEach((rM => {
          if (rM.v === rM.w) {
            let iM = MM.node(rM.v);
            iM.selfEdges || (iM.selfEdges = []), iM.selfEdges.push({
              e: rM,
              label: MM.edge(rM)
            }), MM.removeEdge(rM)
          }
        }))
      }(MM))), rM("    acyclic", (() => Hr(MM, PM))), rM("    nestingGraph.run", (() => fr(MM))), rM("    rank", (() => Dr(xM(MM)))), rM("    injectEdgeLabelProxies", (() => function(MM) {
        MM.edges().forEach((rM => {
          let iM = MM.edge(rM);
          if (iM.width && iM.height) {
            let iM = MM.node(rM.v),
              OM = {
                rank: (MM.node(rM.w).rank - iM.rank) / 2 + iM.rank,
                e: rM
              };
            AM(MM, "edge-proxy", OM, "_ep")
          }
        }))
      }(MM))), rM("    removeEmptyRanks", (() => function(MM) {
        let rM = MM.nodes().map((rM => MM.node(rM).rank)).filter((MM => void 0 !== MM)),
          iM = IM(Math.min, rM),
          OM = [];
        MM.nodes().forEach((rM => {
          let SM = MM.node(rM).rank - iM;
          OM[SM] || (OM[SM] = []), OM[SM].push(rM)
        }));
        let SM = 0,
          jM = MM.graph().nodeRankFactor;
        Array.from(OM).forEach(((rM, iM) => {
          void 0 === rM && iM % jM !== 0 ? --SM : void 0 !== rM && SM && rM.forEach((rM => MM.node(rM).rank += SM))
        }))
      }(MM))), rM("    nestingGraph.cleanup", (() => function(MM) {
        let rM = MM.graph();
        MM.removeNode(rM.nestingRoot), delete rM.nestingRoot, MM.edges().forEach((rM => {
          MM.edge(rM).nestingEdge && MM.removeEdge(rM)
        }))
      }(MM))), rM("    normalizeRanks", (() => function(MM) {
        let rM = MM.nodes().map((rM => {
            let iM = MM.node(rM).rank;
            return void 0 === iM ? Number.MAX_VALUE : iM
          })),
          iM = IM(Math.min, rM);
        MM.nodes().forEach((rM => {
          let OM = MM.node(rM);
          Object.hasOwn(OM, "rank") && (OM.rank -= iM)
        }))
      }(MM))), rM("    assignRankMinMax", (() => function(MM) {
        let rM = 0;
        MM.nodes().forEach((iM => {
          let OM = MM.node(iM);
          OM.borderTop && (OM.minRank = MM.node(OM.borderTop).rank, OM.maxRank = MM.node(OM.borderBottom).rank, rM = Math.max(rM, OM.maxRank))
        })), MM.graph().maxRank = rM
      }(MM))), rM("    removeEdgeLabelProxies", (() => function(MM) {
        MM.nodes().forEach((rM => {
          let iM = MM.node(rM);
          if ("edge-proxy" === iM.dummy) {
            let OM = iM;
            MM.edge(OM.e).labelRank = iM.rank, MM.removeNode(rM)
          }
        }))
      }(MM))), rM("    normalize.run", (() => hr(MM))), rM("    parentDummyChains", (() => or(MM))), rM("    addBorderSegments", (() => Nr(MM))), rM("    order", (() => ii(MM, iM, nM))), rM("    insertSelfEdges", (() => function(MM) {
        FM(MM).forEach((rM => {
          let iM = 0;
          rM.forEach(((rM, OM) => {
            let SM = MM.node(rM);
            "number" != typeof SM.rank && (SM.rank = 0), SM.order = OM + iM, (SM.selfEdges || []).forEach((rM => {
              AM(MM, "selfedge", {
                width: rM.label.width,
                height: rM.label.height,
                rank: SM.rank,
                order: OM + ++iM,
                e: rM.e,
                edgeLabel: rM.label
              }, "_se"), (!Array.isArray(rM.label.points) || 7 !== rM.label.points.length) && (rM.label.points = [{
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
            })), delete SM.selfEdges
          }))
        }))
      }(MM))), rM("    adjustCoordinateSystem", (() => function(MM) {
        var rM;
        let iM = null == (rM = MM.graph().rankdir) ? void 0 : rM.toLowerCase();
        ("lr" === iM || "rl" === iM) && vr(MM)
      }(MM))), rM("    position", (() => Li(MM, iM.corePath))), rM("    positionSelfEdges", (() => function(MM) {
        MM.nodes().forEach((rM => {
          let iM = MM.node(rM),
            OM = MM => "number" == typeof MM && isFinite(MM);
          if ("selfedge" === iM.dummy) {
            let SM = iM,
              jM = MM.node(SM.e.v),
              aM = OM(null == jM ? void 0 : jM.x) ? jM.x : 0,
              PM = OM(null == jM ? void 0 : jM.y) ? jM.y : 0,
              nM = OM(null == jM ? void 0 : jM.width) ? jM.width : 0,
              QM = OM(null == jM ? void 0 : jM.height) ? jM.height : 0,
              zM = OM(iM.x) ? iM.x : aM,
              LM = OM(iM.y) ? iM.y : PM,
              mM = nM / 2,
              HM = QM / 2;
            SM.edgeLabel.points = [{
              x: zM + mM,
              y: LM - HM
            }, {
              x: zM + mM,
              y: LM - HM
            }, {
              x: zM,
              y: LM
            }, {
              x: zM - mM,
              y: LM + HM
            }, {
              x: zM - mM,
              y: LM + HM
            }, {
              x: zM,
              y: LM
            }, {
              x: zM,
              y: LM
            }], SM.edgeLabel.x = zM, SM.edgeLabel.y = LM, MM.setEdge(SM.e, SM.edgeLabel), MM.removeNode(rM)
          } else iM && Array.isArray(iM.selfEdges) && iM.selfEdges.forEach((MM => {
            if (!Array.isArray(MM.label.points) || 7 !== MM.label.points.length) {
              let rM = OM(iM.x) ? iM.x : 0,
                SM = OM(iM.y) ? iM.y : 0,
                jM = (OM(iM.width) ? iM.width : 0) / 2,
                aM = (OM(iM.height) ? iM.height : 0) / 2;
              MM.label.points = [{
                x: rM + jM,
                y: SM - aM
              }, {
                x: rM + jM,
                y: SM - aM
              }, {
                x: rM,
                y: SM
              }, {
                x: rM - jM,
                y: SM + aM
              }, {
                x: rM - jM,
                y: SM + aM
              }, {
                x: rM,
                y: SM
              }, {
                x: rM,
                y: SM
              }]
            }
          }))
        }))
      }(MM)));
      let QM = JSON.parse(JSON.stringify(MM._nodes));
      return rM("    removeBorderNodes", (() => function(MM) {
        MM.nodes().forEach((rM => {
          if (MM.children(rM).length) {
            let iM = MM.node(rM),
              OM = MM.node(iM.borderTop),
              SM = MM.node(iM.borderBottom),
              jM = MM.node(iM.borderLeft[iM.borderLeft.length - 1]),
              aM = MM.node(iM.borderRight[iM.borderRight.length - 1]);
            iM.width = Math.abs(aM.x - jM.x), iM.height = Math.abs(SM.y - OM.y), iM.x = jM.x + iM.width / 2, iM.y = OM.y + iM.height / 2
          }
        })), MM.nodes().forEach((rM => {
          "border" === MM.node(rM).dummy && MM.removeNode(rM)
        }))
      }(MM))), rM("    normalize.undo", (() => function(MM) {
        MM.graph().dummyChains.forEach((rM => {
          let iM, OM = MM.node(rM),
            SM = OM.edgeLabel;
          for (MM.setEdge(OM.edgeObj, SM); OM.dummy;) iM = MM.successors(rM)[0], MM.removeNode(rM), SM.points.push({
            x: OM.x,
            y: OM.y
          }), "edge-label" === OM.dummy && (SM.x = OM.x, SM.y = OM.y, SM.width = OM.width, SM.height = OM.height), rM = iM, OM = MM.node(rM)
        }))
      }(MM))), rM("    fixupEdgeLabelCoords", (() => function(MM) {
        MM.edges().forEach((rM => {
          let iM = MM.edge(rM);
          if (Object.hasOwn(iM, "x")) switch (("l" === iM.labelpos || "r" === iM.labelpos) && (iM.width -= iM.labeloffset), iM.labelpos) {
            case "l":
              iM.x -= iM.width / 2 + iM.labeloffset;
              break;
            case "r":
              iM.x += iM.width / 2 + iM.labeloffset
          }
        }))
      }(MM))), rM("    undoCoordinateSystem", (() => xr(MM))), rM("    translateGraph", (() => function(MM) {
        let rM = Number.POSITIVE_INFINITY,
          iM = 0,
          OM = Number.POSITIVE_INFINITY,
          SM = 0,
          jM = MM.graph(),
          aM = jM.marginx || 0,
          PM = jM.marginy || 0;

        function nM(MM) {
          let jM = MM.x,
            aM = MM.y,
            PM = MM.width,
            nM = MM.height;
          rM = Math.min(rM, jM - PM / 2), iM = Math.max(iM, jM + PM / 2), OM = Math.min(OM, aM - nM / 2), SM = Math.max(SM, aM + nM / 2)
        }
        MM.nodes().forEach((rM => nM(MM.node(rM)))), MM.edges().forEach((rM => {
          let iM = MM.edge(rM);
          Object.hasOwn(iM, "x") && nM(iM)
        })), rM -= aM, OM -= PM, MM.nodes().forEach((iM => {
          let SM = MM.node(iM);
          SM.x -= rM, SM.y -= OM
        })), MM.edges().forEach((iM => {
          let SM = MM.edge(iM);
          SM.points.forEach((MM => {
            MM.x -= rM, MM.y -= OM
          })), Object.hasOwn(SM, "x") && (SM.x -= rM), Object.hasOwn(SM, "y") && (SM.y -= OM)
        })), jM.width = iM - rM + aM, jM.height = SM - OM + PM
      }(MM))), rM("    assignNodeIntersects", (() => function(MM) {
        MM.edges().forEach((rM => {
          if (rM.v === rM.w) return;
          let iM, OM, SM = MM.edge(rM),
            jM = MM.node(rM.v),
            aM = MM.node(rM.w);
          SM.points ? (iM = SM.points[0], OM = SM.points[SM.points.length - 1]) : (SM.points = [], iM = aM, OM = jM), SM.points.unshift(vM(jM, iM)), SM.points.push(vM(aM, OM))
        }))
      }(MM))), rM("    reversePoints", (() => function(MM) {
        MM.edges().forEach((rM => {
          let iM = MM.edge(rM);
          iM.reversed && iM.points.reverse()
        }))
      }(MM))), rM("    acyclic.undo", (() => function(MM) {
        MM.edges().forEach((rM => {
          let iM = MM.edge(rM);
          if (iM.reversed) {
            MM.removeEdge(rM);
            let OM = iM.forwardName;
            delete iM.reversed, delete iM.forwardName, MM.setEdge(rM.w, rM.v, iM, OM)
          }
        }))
      }(MM))), {
        graph: MM,
        rawNodes: QM
      }
    }

    function li(MM, rM) {
      MM.nodes().forEach((iM => {
        let OM = MM.node(iM),
          SM = rM.node(iM);
        OM && (OM.x = SM.x, OM.y = SM.y, OM.order = SM.order, OM.rank = SM.rank, rM.children(iM).length && (OM.width = SM.width, OM.height = SM.height))
      })), MM.edges().forEach((iM => {
        let OM = MM.edge(iM),
          SM = rM.edge(iM);
        OM.points = SM.points, Object.hasOwn(SM, "x") && (OM.x = SM.x, OM.y = SM.y)
      })), MM.graph().width = rM.graph().width, MM.graph().height = rM.graph().height
    }
    var Ei = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Ui = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      Gi = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Ci = ["width", "height", "rank"],
      ei = {
        width: 0,
        height: 0
      },
      bi = ["minlen", "weight", "width", "height", "labeloffset"],
      wi = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      ti = ["labelpos"];

    function gi(MM) {
      let rM = new NM({
          multigraph: !0,
          compound: !0
        }),
        iM = Ri(MM.graph());
      return rM.setGraph(Object.assign({}, Ui, ui(iM, Ei), rr(iM, Gi))), MM.nodes().forEach((iM => {
        let OM = ui(Ri(MM.node(iM)), Ci);
        Object.keys(ei).forEach((MM => {
          void 0 === OM[MM] && (OM[MM] = ei[MM])
        })), rM.setNode(iM, OM);
        let SM = MM.parent(iM);
        void 0 !== SM && rM.setParent(iM, SM)
      })), MM.edges().forEach((iM => {
        let OM = Ri(MM.edge(iM));
        rM.setEdge(iM, Object.assign({}, wi, ui(OM, bi), rr(OM, ti)))
      })), rM
    }

    function ui(MM, rM) {
      return ir(rr(MM, rM), Number)
    }

    function Ri(MM) {
      let rM = {};
      return MM && Object.entries(MM).forEach((MM => {
        let [iM, OM] = MM;
        "string" == typeof iM && (iM = iM.toLowerCase()), rM[iM] = OM
      })), rM
    }

    function Wi(MM) {
      let rM = FM(MM),
        iM = new NM({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return MM.nodes().forEach((rM => {
        iM.setNode(rM, {
          label: rM
        }), iM.setParent(rM, "layer" + MM.node(rM).rank)
      })), MM.edges().forEach((MM => iM.setEdge(MM.v, MM.w, {}, MM.name))), rM.forEach(((MM, rM) => {
        let OM = "layer" + rM;
        iM.setNode(OM, {
          rank: "same"
        }), MM.reduce(((MM, rM) => (iM.setEdge(MM, rM, {
          style: "invis"
        }), rM)))
      })), iM
    }
    var si = {
        time: qM,
        notime: TM
      },
      Di = {
        graphlib: jM,
        version: jr,
        layout: Hi,
        debug: Wi,
        util: {
          time: qM,
          notime: TM
        }
      }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);