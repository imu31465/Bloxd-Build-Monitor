/*! For license information please see u88b9b.133.85b9254c.chunk.js.LICENSE.txt */
export const id = 133;
export const ids = [133];
export const modules = {
  7036: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Graph: () => ue,
      debug: () => YH,
      default: () => aH,
      graphlib: () => Me,
      layout: () => TH,
      util: () => VH,
      version: () => Mi
    });
    var ye = Object.defineProperty,
      be = (ee, ie, He) => ((ee, ie, He) => ie in ee ? ye(ee, ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: He
      }) : ee[ie] = He)(ee, "symbol" != typeof ie ? ie + "" : ie, He),
      Me = {};
    ((ee, ie) => {
      for (var He in ie) ye(ee, He, {
        get: ie[He],
        enumerable: !0
      })
    })(Me, {
      Graph: () => ue,
      alg: () => Xe
    });
    var Ke = Object.defineProperty,
      Ue = (ee, ie) => {
        for (var He in ie) Ke(ee, He, {
          get: ie[He],
          enumerable: !0
        })
      },
      Fe = class {
        constructor(ee) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, ee && (this._isDirected = !("directed" in ee) || ee.directed, this._isMultigraph = "multigraph" in ee && ee.multigraph, this._isCompound = "compound" in ee && ee.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(ee) {
          return this._label = ee, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(ee) {
          return this._defaultNodeLabelFn = "function" != typeof ee ? () => ee : ee, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((ee => 0 === Object.keys(this._in[ee]).length))
        }
        sinks() {
          return this.nodes().filter((ee => 0 === Object.keys(this._out[ee]).length))
        }
        setNodes(ee, ie) {
          return ee.forEach((ee => {
            void 0 !== ie ? this.setNode(ee, ie) : this.setNode(ee)
          })), this
        }
        setNode(ee, ie) {
          return ee in this._nodes ? (arguments.length > 1 && (this._nodes[ee] = ie), this) : (this._nodes[ee] = arguments.length > 1 ? ie : this._defaultNodeLabelFn(ee), this._isCompound && (this._parent[ee] = "\0", this._children[ee] = {}, this._children["\0"][ee] = !0), this._in[ee] = {}, this._preds[ee] = {}, this._out[ee] = {}, this._sucs[ee] = {}, ++this._nodeCount, this)
        }
        node(ee) {
          return this._nodes[ee]
        }
        hasNode(ee) {
          return ee in this._nodes
        }
        removeNode(ee) {
          if (ee in this._nodes) {
            let ie = ee => this.removeEdge(this._edgeObjs[ee]);
            delete this._nodes[ee], this._isCompound && (this._removeFromParentsChildList(ee), delete this._parent[ee], this.children(ee).forEach((ee => {
              this.setParent(ee)
            })), delete this._children[ee]), Object.keys(this._in[ee]).forEach(ie), delete this._in[ee], delete this._preds[ee], Object.keys(this._out[ee]).forEach(ie), delete this._out[ee], delete this._sucs[ee], --this._nodeCount
          }
          return this
        }
        setParent(ee, ie) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === ie) ie = "\0";
          else {
            for (let He = ie += ""; void 0 !== He; He = this.parent(He))
              if (He === ee) throw new Error("Setting " + ie + " as parent of " + ee + " would create a cycle");
            this.setNode(ie)
          }
          return this.setNode(ee), this._removeFromParentsChildList(ee), this._parent[ee] = ie, this._children[ie][ee] = !0, this
        }
        parent(ee) {
          if (this._isCompound) {
            let ie = this._parent[ee];
            if ("\0" !== ie) return ie
          }
        }
        children() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let ie = this._children[ee];
            if (ie) return Object.keys(ie)
          } else {
            if ("\0" === ee) return this.nodes();
            if (this.hasNode(ee)) return []
          }
          return []
        }
        predecessors(ee) {
          let ie = this._preds[ee];
          if (ie) return Object.keys(ie)
        }
        successors(ee) {
          let ie = this._sucs[ee];
          if (ie) return Object.keys(ie)
        }
        neighbors(ee) {
          let ie = this.predecessors(ee);
          if (ie) {
            let He = new Set(ie),
              ye = this.successors(ee);
            if (ye)
              for (let ee of ye) He.add(ee);
            return Array.from(He.values())
          }
        }
        isLeaf(ee) {
          var ie;
          let He;
          return He = this.isDirected() ? this.successors(ee) : this.neighbors(ee), 0 === (null != (ie = null == He ? void 0 : He.length) ? ie : 0)
        }
        filterNodes(ee) {
          let ie = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          ie.setGraph(this.graph()), Object.entries(this._nodes).forEach((He => {
            let [ye, be] = He;
            ee(ye) && ie.setNode(ye, be)
          })), Object.values(this._edgeObjs).forEach((ee => {
            ie.hasNode(ee.v) && ie.hasNode(ee.w) && ie.setEdge(ee, this.edge(ee))
          }));
          let He = {},
            ye = ee => {
              let be = this.parent(ee);
              return !be || ie.hasNode(be) ? (He[ee] = be, be) : be in He ? He[be] : ye(be)
            };
          return this._isCompound && ie.nodes().forEach((ee => ie.setParent(ee, ye(ee)))), ie
        }
        setDefaultEdgeLabel(ee) {
          return this._defaultEdgeLabelFn = "function" != typeof ee ? () => ee : ee, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(ee, ie) {
          return ee.reduce(((ee, He) => (void 0 !== ie ? this.setEdge(ee, He, ie) : this.setEdge(ee, He), He))), this
        }
        setEdge(ee, ie, He, ye) {
          let be, Me, Ke, Ue, Fe = !1;
          "object" == typeof ee && null !== ee && "v" in ee ? (be = ee.v, Me = ee.w, Ke = ee.name, 2 === arguments.length && (Ue = ie, Fe = !0)) : (be = ee, Me = ie, Ke = ye, arguments.length > 2 && (Ue = He, Fe = !0)), be = "" + be, Me = "" + Me, void 0 !== Ke && (Ke = "" + Ke);
          let oe = Re(this._isDirected, be, Me, Ke);
          if (oe in this._edgeLabels) return Fe && (this._edgeLabels[oe] = Ue), this;
          if (void 0 !== Ke && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(be), this.setNode(Me), this._edgeLabels[oe] = Fe ? Ue : this._defaultEdgeLabelFn(be, Me, Ke);
          let ke = function(ee, ie, He, ye) {
            let be = "" + ie,
              Me = "" + He;
            if (!ee && be > Me) {
              let ee = be;
              be = Me, Me = ee
            }
            let Ke = {
              v: be,
              w: Me
            };
            return ye && (Ke.name = ye), Ke
          }(this._isDirected, be, Me, Ke);
          return be = ke.v, Me = ke.w, Object.freeze(ke), this._edgeObjs[oe] = ke, Je(this._preds[Me], be), Je(this._sucs[be], Me), this._in[Me][oe] = ke, this._out[be][oe] = ke, this._edgeCount++, this
        }
        edge(ee, ie, He) {
          let ye = 1 === arguments.length ? ke(this._isDirected, ee) : Re(this._isDirected, ee, ie, He);
          return this._edgeLabels[ye]
        }
        edgeAsObj(ee, ie, He) {
          let ye = 1 === arguments.length ? this.edge(ee) : this.edge(ee, ie, He);
          return "object" != typeof ye || null === ye ? {
            label: ye
          } : ye
        }
        hasEdge(ee, ie, He) {
          return (1 === arguments.length ? ke(this._isDirected, ee) : Re(this._isDirected, ee, ie, He)) in this._edgeLabels
        }
        removeEdge(ee, ie, He) {
          let ye = 1 === arguments.length ? ke(this._isDirected, ee) : Re(this._isDirected, ee, ie, He),
            be = this._edgeObjs[ye];
          if (be) {
            let ee = be.v,
              ie = be.w;
            delete this._edgeLabels[ye], delete this._edgeObjs[ye], oe(this._preds[ie], ee), oe(this._sucs[ee], ie), delete this._in[ie][ye], delete this._out[ee][ye], this._edgeCount--
          }
          return this
        }
        inEdges(ee, ie) {
          return this.isDirected() ? this.filterEdges(this._in[ee], ee, ie) : this.nodeEdges(ee, ie)
        }
        outEdges(ee, ie) {
          return this.isDirected() ? this.filterEdges(this._out[ee], ee, ie) : this.nodeEdges(ee, ie)
        }
        nodeEdges(ee, ie) {
          if (ee in this._nodes) return this.filterEdges({
            ...this._in[ee],
            ...this._out[ee]
          }, ee, ie)
        }
        _removeFromParentsChildList(ee) {
          delete this._children[this._parent[ee]][ee]
        }
        filterEdges(ee, ie, He) {
          if (!ee) return;
          let ye = Object.values(ee);
          return He ? ye.filter((ee => ee.v === ie && ee.w === He || ee.v === He && ee.w === ie)) : ye
        }
      };

    function Je(ee, ie) {
      ee[ie] ? ee[ie]++ : ee[ie] = 1
    }

    function oe(ee, ie) {
      void 0 !== ee[ie] && !--ee[ie] && delete ee[ie]
    }

    function Re(ee, ie, He, ye) {
      let be = "" + ie,
        Me = "" + He;
      if (!ee && be > Me) {
        let ee = be;
        be = Me, Me = ee
      }
      return be + "\x01" + Me + "\x01" + (void 0 === ye ? "\0" : ye)
    }

    function ke(ee, ie) {
      return Re(ee, ie.v, ie.w, ie.name)
    }

    function qe(ee) {
      let ie = {
          options: {
            directed: ee.isDirected(),
            multigraph: ee.isMultigraph(),
            compound: ee.isCompound()
          },
          nodes: fe(ee),
          edges: Te(ee)
        },
        He = ee.graph();
      return void 0 !== He && (ie.value = structuredClone(He)), ie
    }

    function fe(ee) {
      return ee.nodes().map((ie => {
        let He = ee.node(ie),
          ye = ee.parent(ie),
          be = {
            v: ie
          };
        return void 0 !== He && (be.value = He), void 0 !== ye && (be.parent = ye), be
      }))
    }

    function Te(ee) {
      return ee.edges().map((ie => {
        let He = ee.edge(ie),
          ye = {
            v: ie.v,
            w: ie.w
          };
        return void 0 !== ie.name && (ye.name = ie.name), void 0 !== He && (ye.value = He), ye
      }))
    }

    function pe(ee) {
      let ie = new Fe(ee.options);
      return void 0 !== ee.value && ie.setGraph(ee.value), ee.nodes.forEach((ee => {
        ie.setNode(ee.v, ee.value), ee.parent && ie.setParent(ee.v, ee.parent)
      })), ee.edges.forEach((ee => {
        ie.setEdge({
          v: ee.v,
          w: ee.w,
          name: ee.name
        }, ee.value)
      })), ie
    }
    Ue({}, {
      read: () => pe,
      write: () => qe
    });
    var Xe = {};
    Ue(Xe, {
      CycleException: () => Pe,
      bellmanFord: () => Be,
      components: () => Ee,
      dijkstra: () => de,
      dijkstraAll: () => We,
      findCycles: () => Ze,
      floydWarshall: () => De,
      isAcyclic: () => Ye,
      postorder: () => xe,
      preorder: () => Le,
      prim: () => Ce,
      shortestPaths: () => ve,
      tarjan: () => te,
      topsort: () => Ae
    });
    var ze = () => 1;

    function Be(ee, ie, He, ye) {
      return function(ee, ie, He, ye) {
        let be, Me = {},
          Ke = 0,
          Ue = ee.nodes(),
          Fe = function(ee) {
            let ie = Me[ee.v],
              ye = Me[ee.w];
            if (!ie || !ye) return;
            let Ke = He(ee);
            ie.distance + Ke < ye.distance && (Me[ee.w] = {
              distance: ie.distance + Ke,
              predecessor: ee.v
            }, be = !0)
          },
          Je = function() {
            Ue.forEach((function(ee) {
              ye(ee).forEach((function(ie) {
                let He = ie.v === ee ? ie.v : ie.w,
                  ye = He === ie.v ? ie.w : ie.v;
                Fe({
                  v: He,
                  w: ye
                })
              }))
            }))
          };
        Ue.forEach((function(ee) {
          let He = ee === ie ? 0 : Number.POSITIVE_INFINITY;
          Me[ee] = {
            distance: He,
            predecessor: ""
          }
        }));
        let oe = Ue.length;
        for (let Re = 1; Re < oe && (be = !1, Ke++, Je(), be); Re++);
        if (Ke === oe - 1 && (be = !1, Je(), be)) throw new Error("The graph contains a negative weight cycle");
        return Me
      }(ee, String(ie), He || ze, ye || function(ie) {
        var He;
        return null != (He = ee.outEdges(ie)) ? He : []
      })
    }

    function Ee(ee) {
      let ie, He = {},
        ye = [];

      function be(ye) {
        var Me, Ke;
        ye in He || (He[ye] = !0, ie.push(ye), null == (Me = ee.successors(ye)) || Me.forEach(be), null == (Ke = ee.predecessors(ye)) || Ke.forEach(be))
      }
      return ee.nodes().forEach((function(ee) {
        ie = [], be(ee), ie.length && ye.push(ie)
      })), ye
    }
    var ge = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((ee => ee.key))
        }
        has(ee) {
          return ee in this._keyIndices
        }
        priority(ee) {
          let ie = this._keyIndices[ee];
          if (void 0 !== ie) return this._arr[ie].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(ee, ie) {
          let He = this._keyIndices,
            ye = String(ee);
          if (!(ye in He)) {
            let ee = this._arr,
              be = ee.length;
            return He[ye] = be, ee.push({
              key: ye,
              priority: ie
            }), this._decrease(be), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let ee = this._arr.pop();
          return delete this._keyIndices[ee.key], this._heapify(0), ee.key
        }
        decrease(ee, ie) {
          let He = this._keyIndices[ee];
          if (void 0 === He) throw new Error(`Key not found: ${ee}`);
          let ye = this._arr[He].priority;
          if (ie > ye) throw new Error(`New priority is greater than current priority. Key: ${ee} Old: ${ye} New: ${ie}`);
          this._arr[He].priority = ie, this._decrease(He)
        }
        _heapify(ee) {
          let ie = this._arr,
            He = 2 * ee,
            ye = He + 1,
            be = ee;
          He < ie.length && (be = ie[He].priority < ie[be].priority ? He : be, ye < ie.length && (be = ie[ye].priority < ie[be].priority ? ye : be), be !== ee && (this._swap(ee, be), this._heapify(be)))
        }
        _decrease(ee) {
          let ie, He = this._arr,
            ye = He[ee].priority;
          for (; 0 !== ee && (ie = ee >> 1, !(He[ie].priority < ye));) this._swap(ee, ie), ee = ie
        }
        _swap(ee, ie) {
          let He = this._arr,
            ye = this._keyIndices,
            be = He[ee],
            Me = He[ie];
          He[ee] = Me, He[ie] = be, ye[Me.key] = ee, ye[be.key] = ie
        }
      },
      Oe = () => 1;

    function de(ee, ie, He, ye) {
      return function(ee, ie, He, ye) {
        let be, Me, Ke = {},
          Ue = new ge,
          Fe = function(ee) {
            let ie = ee.v !== be ? ee.v : ee.w,
              ye = Ke[ie];
            if (!ye) return;
            let Fe = He(ee),
              Je = Me.distance + Fe;
            if (Fe < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + ee + " Weight: " + Fe);
            Je < ye.distance && (ye.distance = Je, ye.predecessor = be, Ue.decrease(ie, Je))
          };
        for (ee.nodes().forEach((function(ee) {
            let He = ee === ie ? 0 : Number.POSITIVE_INFINITY;
            Ke[ee] = {
              distance: He,
              predecessor: ""
            }, Ue.add(ee, He)
          })); Ue.size() > 0;) {
          be = Ue.removeMin();
          let ee = Ke[be];
          if (!ee || ee.distance === Number.POSITIVE_INFINITY) break;
          Me = ee, ye(be).forEach(Fe)
        }
        return Ke
      }(ee, String(ie), He || Oe, ye || function(ie) {
        var He;
        return null != (He = ee.outEdges(ie)) ? He : []
      })
    }

    function We(ee, ie, He) {
      return ee.nodes().reduce((function(ye, be) {
        return ye[be] = de(ee, be, ie, He), ye
      }), {})
    }

    function te(ee) {
      let ie = 0,
        He = [],
        ye = {},
        be = [];

      function Me(Ke) {
        var Ue;
        let Fe = ye[Ke] = {
          onStack: !0,
          lowlink: ie,
          index: ie++
        };
        if (He.push(Ke), null == (Ue = ee.successors(Ke)) || Ue.forEach((function(ee) {
            if (ee in ye) {
              let ie = ye[ee];
              null != ie && ie.onStack && (Fe.lowlink = Math.min(Fe.lowlink, ie.index))
            } else {
              Me(ee);
              let ie = ye[ee];
              ie && (Fe.lowlink = Math.min(Fe.lowlink, ie.lowlink))
            }
          })), Fe.lowlink === Fe.index) {
          let ee, ie = [];
          do {
            ee = He.pop();
            let be = ye[ee];
            be && (be.onStack = !1), ie.push(ee)
          } while (Ke !== ee);
          be.push(ie)
        }
      }
      return ee.nodes().forEach((function(ee) {
        ee in ye || Me(ee)
      })), be
    }

    function Ze(ee) {
      return te(ee).filter((function(ie) {
        var He;
        let ye = ie[0];
        return !!ye && (ie.length > 1 || 1 === ie.length && (null != (He = ee.outEdges(ye, ye)) ? He : []).length > 0)
      }))
    }
    var we = () => 1;

    function De(ee, ie, He) {
      return function(ee, ie, He) {
        let ye = {},
          be = ee.nodes();
        return be.forEach((function(ee) {
          let Me = {};
          ye[ee] = Me, Me[ee] = {
            distance: 0,
            predecessor: ""
          }, be.forEach((function(ie) {
            ee !== ie && (Me[ie] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), He(ee).forEach((function(He) {
            let ye = He.v === ee ? He.w : He.v,
              be = ie(He);
            Me[ye] = {
              distance: be,
              predecessor: ee
            }
          }))
        })), be.forEach((function(ee) {
          let ie = ye[ee];
          ie && be.forEach((function(He) {
            let Me = ye[He];
            Me && be.forEach((function(He) {
              let ye = Me[ee],
                be = ie[He],
                Ke = Me[He];
              if (ye && be && Ke) {
                let ee = ye.distance + be.distance;
                ee < Ke.distance && (Ke.distance = ee, Ke.predecessor = be.predecessor)
              }
            }))
          }))
        })), ye
      }(ee, ie || we, He || function(ie) {
        var He;
        return null != (He = ee.outEdges(ie)) ? He : []
      })
    }
    var Pe = class extends Error {
      constructor(ee) {
        super(ee), this.name = "CycleException"
      }
    };

    function Ae(ee) {
      let ie = {},
        He = {},
        ye = [];
      if (ee.sinks().forEach((function be(Me) {
          var Ke;
          if (Me in He) throw new Pe;
          Me in ie || (He[Me] = !0, ie[Me] = !0, null == (Ke = ee.predecessors(Me)) || Ke.forEach(be), delete He[Me], ye.push(Me))
        })), Object.keys(ie).length !== ee.nodeCount()) throw new Pe;
      return ye
    }

    function Ye(ee) {
      try {
        Ae(ee)
      } catch (ie) {
        if (ie instanceof Pe) return !1;
        throw ie
      }
      return !0
    }

    function Ve(ee, ie, He, ye, be) {
      Array.isArray(ie) || (ie = [ie]);
      let Me = ie => {
          var He;
          return null != (He = ee.isDirected() ? ee.successors(ie) : ee.neighbors(ie)) ? He : []
        },
        Ke = {};
      return ie.forEach((function(ie) {
        if (!ee.hasNode(ie)) throw new Error("Graph does not have node: " + ie);
        be = ae(ee, ie, "post" === He, Ke, Me, ye, be)
      })), be
    }

    function ae(ee, ie, He, ye, be, Me, Ke) {
      return ie in ye || (ye[ie] = !0, He || (Ke = Me(Ke, ie)), be(ie).forEach((function(ie) {
        Ke = ae(ee, ie, He, ye, be, Me, Ke)
      })), He && (Ke = Me(Ke, ie))), Ke
    }

    function ce(ee, ie, He) {
      return Ve(ee, ie, He, (function(ee, ie) {
        return ee.push(ie), ee
      }), [])
    }

    function xe(ee, ie) {
      return ce(ee, ie, "post")
    }

    function Le(ee, ie) {
      return ce(ee, ie, "pre")
    }

    function Ce(ee, ie) {
      var He;
      let ye, be = new Fe,
        Me = {},
        Ke = new ge;

      function Ue(ee) {
        let He = ee.v === ye ? ee.w : ee.v,
          be = Ke.priority(He);
        if (void 0 !== be) {
          let Ue = ie(ee);
          Ue < be && (Me[He] = ye, Ke.decrease(He, Ue))
        }
      }
      if (0 === ee.nodeCount()) return be;
      ee.nodes().forEach((function(ee) {
        Ke.add(ee, Number.POSITIVE_INFINITY), be.setNode(ee)
      }));
      let Je = ee.nodes()[0];
      void 0 !== Je && Ke.decrease(Je, 0);
      let oe = !1;
      for (; Ke.size() > 0;) {
        if (ye = Ke.removeMin(), ye in Me) be.setEdge(ye, Me[ye]);
        else {
          if (oe) throw new Error("Input graph is not connected: " + ee);
          oe = !0
        }
        null == (He = ee.nodeEdges(ye)) || He.forEach(Ue)
      }
      return be
    }

    function ve(ee, ie, He, ye) {
      return function(ee, ie, He, ye) {
        if (void 0 === He) return de(ee, ie, He, ye);
        let be = !1,
          Me = ee.nodes();
        for (let Ke = 0; Ke < Me.length; Ke++) {
          let Ue = Me[Ke];
          if (void 0 === Ue) continue;
          let Fe = ye(Ue);
          for (let ee = 0; ee < Fe.length; ee++) {
            let ie = Fe[ee];
            if (!ie) continue;
            let ye = ie.v === Ue ? ie.v : ie.w;
            He({
              v: ye,
              w: ye === ie.v ? ie.w : ie.v
            }) < 0 && (be = !0)
          }
          if (be) return Be(ee, ie, He, ye)
        }
        return de(ee, ie, He, ye)
      }(ee, ie, He, null != ye ? ye : ie => {
        var He;
        return null != (He = ee.outEdges(ie)) ? He : []
      })
    }
    var ue = Fe;

    function me(ee, ie, He, ye) {
      let be = ye;
      for (; ee.hasNode(be);) be = Qe(ye);
      return He.dummy = ie, ee.setNode(be, He), be
    }

    function le(ee) {
      let ie = new ue({
        multigraph: ee.isMultigraph()
      }).setGraph(ee.graph());
      return ee.nodes().forEach((He => {
        ee.children(He).length || ie.setNode(He, ee.node(He))
      })), ee.edges().forEach((He => {
        ie.setEdge(He, ee.edge(He))
      })), ie
    }

    function Se(ee, ie) {
      let He, ye, be = ee.x,
        Me = ee.y,
        Ke = ie.x - be,
        Ue = ie.y - Me,
        Fe = ee.width / 2,
        Je = ee.height / 2;
      if (!Ke && !Ue) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Ue) * Fe > Math.abs(Ke) * Je ? (Ue < 0 && (Je = -Je), He = Je * Ke / Ue, ye = Je) : (Ke < 0 && (Fe = -Fe), He = Fe, ye = Fe * Ue / Ke), {
        x: be + He,
        y: Me + ye
      }
    }

    function ne(ee) {
      let ie = ei(he(ee) + 1).map((() => []));
      return ee.nodes().forEach((He => {
        let ye = ee.node(He),
          be = ye.rank;
        void 0 !== be && (ie[be] || (ie[be] = []), ie[be][ye.order] = He)
      })), ie
    }

    function je(ee, ie, He, ye) {
      let be = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (be.rank = He, be.order = ye), me(ee, "border", be, ie)
    }
    var se = 65535;

    function Ie(ee, ie) {
      if (ie.length > se) {
        let He = function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : se,
            He = [];
          for (let ye = 0; ye < ee.length; ye += ie) {
            let be = ee.slice(ye, ye + ie);
            He.push(be)
          }
          return He
        }(ie);
        return ee(...He.map((ie => ee(...ie))))
      }
      return ee(...ie)
    }

    function he(ee) {
      let ie = ee.nodes().map((ie => {
        let He = ee.node(ie).rank;
        return void 0 === He ? Number.MIN_VALUE : He
      }));
      return Ie(Math.max, ie)
    }

    function Ne(ee, ie) {
      let He = Date.now();
      try {
        return ie()
      } finally {
        console.log(ee + " time: " + (Date.now() - He) + "ms")
      }
    }

    function Ge(ee, ie) {
      return ie()
    }
    var re = 0;

    function Qe(ee) {
      return ee + "" + ++re
    }

    function ei(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == ie && (ie = ee, ee = 0);
      let ye = ee => ee < ie;
      He < 0 && (ye = ee => ie < ee);
      let be = [];
      for (let Me = ee; ye(Me); Me += He) be.push(Me);
      return be
    }

    function ii(ee, ie) {
      let He = {};
      for (let ye of ie) void 0 !== ee[ye] && (He[ye] = ee[ye]);
      return He
    }

    function Hi(ee, ie) {
      let He;
      return He = "string" == typeof ie ? ee => ee[ie] : ie, Object.entries(ee).reduce(((ee, ie) => {
        let [ye, be] = ie;
        return ee[ye] = He(be, ye), ee
      }), {})
    }
    var yi = "\0";

    function bi(ee, ie, He) {
      var ye, be, Me, Ke, Ue, Fe;
      if (!(ee && ie && He && "edge" === ie.dummy && "edge" === He.dummy && ie.edgeObj && He.edgeObj && ee[ie.edgeObj.v] && ee[He.edgeObj.v] && ee[ie.edgeObj.w] && ee[He.edgeObj.w])) return 0;
      let Je = !0;
      ie.edgeObj.w === He.edgeObj.w && (Je = !1);
      let oe = Je ? null != (be = null == (ye = ee[ie.edgeObj.v]) ? void 0 : ye.rank) ? be : NaN : null != (Ke = null == (Me = ee[ie.edgeObj.w]) ? void 0 : Me.rank) ? Ke : NaN,
        Re = Object.entries(ee).find((ee => {
          var He, ye;
          return (null == (He = ee[1].edgeObj) ? void 0 : He.v) === ie.edgeObj.v && (null == (ye = ee[1].edgeObj) ? void 0 : ye.w) === ie.edgeObj.w && ee[1].rank === oe
        })),
        ke = Object.entries(ee).find((ee => {
          var ie, ye;
          return (null == (ie = ee[1].edgeObj) ? void 0 : ie.v) === He.edgeObj.v && (null == (ye = ee[1].edgeObj) ? void 0 : ye.w) === He.edgeObj.w && ee[1].rank === oe
        }));
      if (!Re || !ke) return 0;
      let qe = null != (Ue = Re[1].order) ? Ue : NaN,
        fe = null != (Fe = ke[1].order) ? Fe : NaN;
      return isNaN(qe - fe) ? 0 : qe - fe
    }
    var Mi = "3.1.1";

    function Ki(ee) {
      ee._prev._next = ee._next, ee._next._prev = ee._prev, delete ee._next, delete ee._prev
    }

    function Ui(ee, ie) {
      if ("_next" !== ee && "_prev" !== ee) return ie
    }
    var Fi = class {
        constructor() {
          be(this, "_sentinel");
          let ee = {};
          ee._next = ee._prev = ee, this._sentinel = ee
        }
        dequeue() {
          let ee = this._sentinel,
            ie = ee._prev;
          if (ie !== ee) return Ki(ie), ie
        }
        enqueue(ee) {
          let ie = this._sentinel;
          ee._prev && ee._next && Ki(ee), ee._next = ie._next, ie._next._prev = ee, ie._next = ee, ee._prev = ie
        }
        toString() {
          let ee = [],
            ie = this._sentinel,
            He = ie._prev;
          for (; He !== ie;) ee.push(JSON.stringify(He, Ui)), He = He._prev;
          return "[" + ee.join(", ") + "]"
        }
      },
      Ji = () => 1;

    function oi(ee, ie) {
      if (ee.nodeCount() <= 1) return [];
      let He = function(ee, ie) {
        let He = new ue,
          ye = 0,
          be = 0;
        ee.nodes().forEach((ee => {
          He.setNode(ee, {
            v: ee,
            in: 0,
            out: 0
          })
        })), ee.edges().forEach((ee => {
          let Me = He.edge(ee.v, ee.w) || 0,
            Ke = ie(ee),
            Ue = Me + Ke;
          He.setEdge(ee.v, ee.w, Ue);
          let Fe = He.node(ee.v),
            Je = He.node(ee.w);
          be = Math.max(be, Fe.out += Ke), ye = Math.max(ye, Je.in += Ke)
        }));
        let Me = function(ee) {
            let ie = [];
            for (let He = 0; He < ee; He++) ie.push(He);
            return ie
          }(be + ye + 3).map((() => new Fi)),
          Ke = ye + 1;
        return He.nodes().forEach((ee => {
          ki(Me, Ke, He.node(ee))
        })), {
          graph: He,
          buckets: Me,
          zeroIdx: Ke
        }
      }(ee, ie || Ji);
      return function(ee, ie, He) {
        var ye;
        let be, Me = [],
          Ke = ie[ie.length - 1],
          Ue = ie[0];
        for (; ee.nodeCount();) {
          for (; be = Ue.dequeue();) Ri(ee, ie, He, be);
          for (; be = Ke.dequeue();) Ri(ee, ie, He, be);
          if (ee.nodeCount())
            for (let Ke = ie.length - 2; Ke > 0; --Ke)
              if (be = null == (ye = ie[Ke]) ? void 0 : ye.dequeue(), be) {
                Me = Me.concat(Ri(ee, ie, He, be, !0) || []);
                break
              }
        }
        return Me
      }(He.graph, He.buckets, He.zeroIdx).flatMap((ie => ee.outEdges(ie.v, ie.w) || []))
    }

    function Ri(ee, ie, He, ye, be) {
      let Me = [],
        Ke = be ? Me : void 0;
      return (ee.inEdges(ye.v) || []).forEach((ye => {
        let Ke = ee.edge(ye),
          Ue = ee.node(ye.v);
        be && Me.push({
          v: ye.v,
          w: ye.w
        }), Ue.out -= Ke, ki(ie, He, Ue)
      })), (ee.outEdges(ye.v) || []).forEach((ye => {
        let be = ee.edge(ye),
          Me = ye.w,
          Ke = ee.node(Me);
        Ke.in -= be, ki(ie, He, Ke)
      })), ee.removeNode(ye.v), Ke
    }

    function ki(ee, ie, He) {
      var ye, be, Me;
      He.out ? He.in ? null == (Me = ee[He.out - He.in + ie]) || Me.enqueue(He) : null == (be = ee[ee.length - 1]) || be.enqueue(He) : null == (ye = ee[0]) || ye.enqueue(He)
    }

    function qi(ee, ie) {
      var He;
      ("greedy" === ee.graph().acyclicer ? oi(ee, (He = ee, ee => He.edge(ee).weight)) : function(ee, ie) {
        let He = [],
          ye = {},
          be = {};

        function Me(ie) {
          Object.hasOwn(be, ie) || (be[ie] = !0, ye[ie] = !0, ee.outEdges(ie).forEach((ee => {
            Object.hasOwn(ye, ee.w) ? He.push(ee) : Me(ee.w)
          })), delete ye[ie])
        }

        function Ke(Me) {
          var Ue;
          Object.hasOwn(be, Me) || (be[Me] = !0, ye[Me] = !0, null == (Ue = ee.outEdges(Me)) || Ue.forEach((be => {
            var Ue, Fe;
            Object.hasOwn(ye, be.w) || (null == (Ue = ie.node(Me)) ? void 0 : Ue.rank) > (null == (Fe = ie.node(be.w)) ? void 0 : Fe.rank) && function(ee, ie, He) {
              let ye = new Set;

              function be(ie) {
                var Me;
                if (ee.sources().includes(ie)) return !0;
                ye.add(ie);
                for (let Ke of null != (Me = ee.inEdges(ie)) ? Me : [])
                  if ((Ke.v !== He.v || Ke.w !== He.w) && !ye.has(Ke.v) && be(Ke.v)) return !0;
                return !1
              }
              return be(ie)
            }(ee, be.w, be) ? He.push(be) : Ke(be.w)
          })), delete ye[Me])
        }
        let Ue = Me;
        return ie && "function" == typeof ie.node && (Ue = Ke), ee.sources().forEach(Ue), ee.nodes().forEach(Ue), He
      }(ee, null != ie ? ie : null)).forEach((ie => {
        let He = ee.edge(ie);
        ee.removeEdge(ie), He.forwardName = ie.name, He.reversed = !0, ee.setEdge(ie.w, ie.v, He, Qe("rev"))
      }))
    }

    function fi(ee) {
      ee.graph().dummyChains = [], ee.edges().forEach((ie => function(ee, ie) {
        let He, ye, be, Me = ie.v,
          Ke = ee.node(Me).rank,
          Ue = ie.w,
          Fe = ee.node(Ue).rank,
          Je = ie.name,
          oe = ee.edge(ie),
          Re = oe.labelRank;
        if (Fe === Ke + 1) return;
        for (ee.removeEdge(ie), be = 0, ++Ke; Ke < Fe; ++be, ++Ke) oe.points = [], ye = {
          width: 0,
          height: 0,
          edgeLabel: oe,
          edgeObj: ie,
          rank: Ke
        }, He = me(ee, "edge", ye, "_d"), Ke === Re && (ye.width = oe.width, ye.height = oe.height, ye.dummy = "edge-label", ye.labelpos = oe.labelpos), ee.setEdge(Me, He, {
          weight: oe.weight
        }, Je), 0 === be && ee.graph().dummyChains.push(He), Me = He;
        ee.setEdge(Me, Ue, {
          weight: oe.weight
        }, Je)
      }(ee, ie)))
    }

    function Ti(ee) {
      let ie = {};
      ee.sources().forEach((function He(ye) {
        let be = ee.node(ye);
        if (Object.hasOwn(ie, ye)) return be.rank;
        ie[ye] = !0;
        let Me = ee.outEdges(ye),
          Ke = Me ? Me.map((ie => null == ie ? Number.POSITIVE_INFINITY : He(ie.w) - ee.edge(ie).minlen)) : [],
          Ue = Ie(Math.min, Ke);
        return Ue === Number.POSITIVE_INFINITY && (Ue = 0), be.rank = Ue
      }))
    }

    function Xi(ee, ie) {
      return ee.node(ie.w).rank - ee.node(ie.v).rank - ee.edge(ie).minlen
    }
    var zi = function(ee) {
      let ie = new ue({
          directed: !1
        }),
        He = ee.nodes();
      if (0 === He.length) throw new Error("Graph must have at least one node");
      let ye, be, Me = He[0],
        Ke = ee.nodeCount();
      for (ie.setNode(Me, {}); Bi(ie, ee) < Ke && (ye = Ei(ie, ee), ye);) be = ie.hasNode(ye.v) ? Xi(ee, ye) : -Xi(ee, ye), gi(ie, ee, be);
      return ie
    };

    function Bi(ee, ie) {
      return ee.nodes().forEach((function He(ye) {
        let be = ie.nodeEdges(ye);
        be && be.forEach((be => {
          let Me = be.v,
            Ke = ye === Me ? be.w : Me;
          !ee.hasNode(Ke) && !Xi(ie, be) && (ee.setNode(Ke, {}), ee.setEdge(ye, Ke, {}), He(Ke))
        }))
      })), ee.nodeCount()
    }

    function Ei(ee, ie) {
      return ie.edges().reduce(((He, ye) => {
        let be = Number.POSITIVE_INFINITY;
        return ee.hasNode(ye.v) !== ee.hasNode(ye.w) && (be = Xi(ie, ye)), be < He[0] ? [be, ye] : He
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function gi(ee, ie, He) {
      ee.nodes().forEach((ee => ie.node(ee).rank += He))
    }
    var {
      preorder: Oi,
      postorder: di
    } = Xe, Wi = ti;

    function ti(ee) {
      ee = function(ee) {
        let ie = (new ue).setGraph(ee.graph());
        return ee.nodes().forEach((He => ie.setNode(He, ee.node(He)))), ee.edges().forEach((He => {
          let ye = ie.edge(He.v, He.w) || {
              weight: 0,
              minlen: 1
            },
            be = ee.edge(He);
          ie.setEdge(He.v, He.w, {
            weight: ye.weight + be.weight,
            minlen: Math.max(ye.minlen, be.minlen)
          })
        })), ie
      }(ee), Ti(ee);
      let ie, He, ye = zi(ee);
      for (Di(ye), Zi(ye, ee); ie = Ai(ye);) He = Yi(ye, ee, ie), Vi(ye, ee, ie, He)
    }

    function Zi(ee, ie) {
      let He = di(ee, ee.nodes());
      He = He.slice(0, He.length - 1), He.forEach((He => function(ee, ie, He) {
        let ye = ee.node(He).parent,
          be = ee.edge(He, ye);
        be.cutvalue = wi(ee, ie, He)
      }(ee, ie, He)))
    }

    function wi(ee, ie, He) {
      let ye = ee.node(He).parent,
        be = !0,
        Me = ie.edge(He, ye),
        Ke = 0;
      Me || (be = !1, Me = ie.edge(ye, He)), Ke = Me.weight;
      let Ue = ie.nodeEdges(He);
      return Ue && Ue.forEach((Me => {
        let Ue = Me.v === He,
          Fe = Ue ? Me.w : Me.v;
        if (Fe !== ye) {
          let ye = Ue === be,
            Je = ie.edge(Me).weight;
          if (Ke += ye ? Je : -Je, function(ee, ie, He) {
              return ee.hasEdge(ie, He)
            }(ee, He, Fe)) {
            let ie = ee.edge(He, Fe).cutvalue;
            Ke += ye ? -ie : ie
          }
        }
      })), Ke
    }

    function Di(ee, ie) {
      arguments.length < 2 && (ie = ee.nodes()[0]), Pi(ee, {}, 1, ie)
    }

    function Pi(ee, ie, He, ye, be) {
      let Me = He,
        Ke = ee.node(ye);
      ie[ye] = !0;
      let Ue = ee.neighbors(ye);
      return Ue && Ue.forEach((be => {
        Object.hasOwn(ie, be) || (He = Pi(ee, ie, He, be, ye))
      })), Ke.low = Me, Ke.lim = He++, be ? Ke.parent = be : delete Ke.parent, He
    }

    function Ai(ee) {
      return ee.edges().find((ie => ee.edge(ie).cutvalue < 0))
    }

    function Yi(ee, ie, He) {
      let ye = He.v,
        be = He.w;
      ie.hasEdge(ye, be) || (ye = He.w, be = He.v);
      let Me = ee.node(ye),
        Ke = ee.node(be),
        Ue = Me,
        Fe = !1;
      return Me.lim > Ke.lim && (Ue = Ke, Fe = !0), ie.edges().filter((ie => Fe === ai(ee, ee.node(ie.v), Ue) && Fe !== ai(ee, ee.node(ie.w), Ue))).reduce(((ee, He) => Xi(ie, He) < Xi(ie, ee) ? He : ee))
    }

    function Vi(ee, ie, He, ye) {
      let be = He.v,
        Me = He.w;
      ee.removeEdge(be, Me), ee.setEdge(ye.v, ye.w, {}), Di(ee), Zi(ee, ie),
        function(ee, ie) {
          let He = ee.nodes().find((ie => !ee.node(ie).parent));
          if (!He) return;
          let ye = Oi(ee, [He]);
          ye = ye.slice(1), ye.forEach((He => {
            let ye = ee.node(He).parent,
              be = ie.edge(He, ye),
              Me = !1;
            be || (be = ie.edge(ye, He), Me = !0), ie.node(He).rank = ie.node(ye).rank + (Me ? be.minlen : -be.minlen)
          }))
        }(ee, ie)
    }

    function ai(ee, ie, He) {
      return He.low <= ie.lim && ie.lim <= He.lim
    }
    ti.initLowLimValues = Di, ti.initCutValues = Zi, ti.calcCutValue = wi, ti.leaveEdge = Ai, ti.enterEdge = Yi, ti.exchangeEdges = Vi;
    var ci = function(ee) {
      let ie = ee.graph().ranker;
      if ("function" == typeof ie) return ie(ee);
      switch (ie) {
        case "network-simplex":
        default:
          Li(ee);
          break;
        case "tight-tree":
          ! function(ee) {
            Ti(ee), zi(ee)
          }(ee);
          break;
        case "longest-path":
          xi(ee);
        case "none":
      }
    };
    var xi = Ti;

    function Li(ee) {
      Wi(ee)
    }
    var Ci = function(ee) {
      let ie = function(ee) {
          let ie = {},
            He = 0;

          function ye(be) {
            let Me = He;
            ee.children(be).forEach(ye), ie[be] = {
              low: Me,
              lim: He++
            }
          }
          return ee.children(yi).forEach(ye), ie
        }(ee),
        He = ee.graph();
      if (!Array.isArray(He.dummyChains)) return;
      He.dummyChains.forEach((He => {
        let ye = ee.node(He),
          be = ye.edgeObj,
          Me = function(ee, ie, He, ye) {
            let be, Me = [],
              Ke = [],
              Ue = Math.min(ie[He].low, ie[ye].low),
              Fe = Math.max(ie[He].lim, ie[ye].lim);
            be = He;
            do {
              be = ee.parent(be), Me.push(be)
            } while (be && (ie[be].low > Ue || Fe > ie[be].lim));
            let Je = be,
              oe = ye;
            for (;
              (oe = ee.parent(oe)) !== Je;) Ke.push(oe);
            return {
              path: Me.concat(Ke.reverse()),
              lca: Je
            }
          }(ee, ie, be.v, be.w),
          Ke = Me.path,
          Ue = Me.lca,
          Fe = 0,
          Je = Ke[Fe],
          oe = !0;
        for (; He !== be.w;) {
          if (ye = ee.node(He), oe) {
            for (;
              (Je = Ke[Fe]) !== Ue && ee.node(Je).maxRank < ye.rank;) Fe++;
            Je === Ue && (oe = !1)
          }
          if (!oe) {
            for (; Fe < Ke.length - 1 && ee.node(Ke[Fe + 1]).minRank <= ye.rank;) Fe++;
            Je = Ke[Fe]
          }
          void 0 !== Je && ee.setParent(He, Je), He = ee.successors(He)[0]
        }
      }))
    };

    function vi(ee) {
      let ie = me(ee, "root", {}, "_root"),
        He = function(ee) {
          let ie = {};

          function He(ye, be) {
            let Me = ee.children(ye);
            Me && Me.length && Me.forEach((ee => He(ee, be + 1))), ie[ye] = be
          }
          return ee.children(yi).forEach((ee => He(ee, 1))), ie
        }(ee),
        ye = Object.values(He),
        be = Ie(Math.max, ye) - 1,
        Me = 2 * be + 1;
      ee.graph().nestingRoot = ie, ee.edges().forEach((ie => ee.edge(ie).minlen *= Me));
      let Ke = function(ee) {
        return ee.edges().reduce(((ie, He) => ie + ee.edge(He).weight), 0)
      }(ee) + 1;
      ee.children(yi).forEach((ye => {
        ui(ee, ie, Me, Ke, be, He, ye)
      })), ee.graph().nodeRankFactor = Me
    }

    function ui(ee, ie, He, ye, be, Me, Ke) {
      var Ue;
      let Fe = ee.children(Ke);
      if (!Fe.length) return void(Ke !== ie && ee.setEdge(ie, Ke, {
        weight: 0,
        minlen: He
      }));
      let Je = je(ee, "_bt"),
        oe = je(ee, "_bb"),
        Re = ee.node(Ke);
      ee.setParent(Je, Ke), Re.borderTop = Je, ee.setParent(oe, Ke), Re.borderBottom = oe, Fe.forEach((Ue => {
        var Fe;
        ui(ee, ie, He, ye, be, Me, Ue);
        let Re = ee.node(Ue),
          ke = Re.borderTop ? Re.borderTop : Ue,
          qe = Re.borderBottom ? Re.borderBottom : Ue,
          fe = Re.borderTop ? ye : 2 * ye,
          Te = ke !== qe ? 1 : be - (null != (Fe = Me[Ke]) ? Fe : 0) + 1;
        ee.setEdge(Je, ke, {
          weight: fe,
          minlen: Te,
          nestingEdge: !0
        }), ee.setEdge(qe, oe, {
          weight: fe,
          minlen: Te,
          nestingEdge: !0
        })
      })), ee.parent(Ke) || ee.setEdge(ie, Je, {
        weight: 0,
        minlen: be + (null != (Ue = Me[Ke]) ? Ue : 0)
      })
    }
    var mi = function(ee) {
      ee.children(yi).forEach((function ie(He) {
        let ye = ee.children(He),
          be = ee.node(He);
        if (ye.length && ye.forEach(ie), be && Object.hasOwn(be, "minRank")) {
          be.borderLeft = [], be.borderRight = [];
          for (let ie = be.minRank, ye = be.maxRank + 1; ie < ye; ++ie) li(ee, "borderLeft", "_bl", He, be, ie), li(ee, "borderRight", "_br", He, be, ie)
        }
      }))
    };

    function li(ee, ie, He, ye, be, Me) {
      let Ke = {
          width: 0,
          height: 0,
          rank: Me,
          borderType: ie
        },
        Ue = be[ie][Me - 1],
        Fe = me(ee, "border", Ke, He);
      be[ie][Me] = Fe, ee.setParent(Fe, ye), Ue && ee.setEdge(Ue, Fe, {
        weight: 1
      })
    }

    function Si(ee) {
      var ie;
      let He = null == (ie = ee.graph().rankdir) ? void 0 : ie.toLowerCase();
      ("bt" === He || "rl" === He) && function(ee) {
        ee.nodes().forEach((ie => si(ee.node(ie)))), ee.edges().forEach((ie => {
          var He;
          let ye = ee.edge(ie);
          null == (He = ye.points) || He.forEach(si), Object.hasOwn(ye, "y") && si(ye)
        }))
      }(ee), ("lr" === He || "rl" === He) && (function(ee) {
        ee.nodes().forEach((ie => Ii(ee.node(ie)))), ee.edges().forEach((ie => {
          var He;
          let ye = ee.edge(ie);
          null == (He = ye.points) || He.forEach(Ii), Object.hasOwn(ye, "x") && Ii(ye)
        }))
      }(ee), ni(ee))
    }

    function ni(ee) {
      ee.nodes().forEach((ie => ji(ee.node(ie)))), ee.edges().forEach((ie => ji(ee.edge(ie))))
    }

    function ji(ee) {
      let ie = ee.width;
      ee.width = ee.height, ee.height = ie
    }

    function si(ee) {
      ee.y = -ee.y
    }

    function Ii(ee) {
      let ie = ee.x;
      ee.x = ee.y, ee.y = ie
    }

    function Ni(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        He = {},
        ye = ee.nodes().filter((ie => !ee.children(ie).length)),
        be = ye.map((ie => ee.node(ie).rank)),
        Me = ei(Ie(Math.max, be) + 1).map((() => []));
      return ye.sort(((ie, He) => ee.node(ie).rank - ee.node(He).rank)).forEach((function ye(be) {
        if (He[be]) return;
        He[be] = !0;
        let Ke = ee.node(be);
        Me[Ke.rank].push(be);
        let Ue = ee.successors(be);
        Ue && [...Ue].sort(((He, ye) => function(He, ye) {
          let be = ee.node(He),
            Me = ee.node(ye);
          return bi(ie, be, Me)
        }(He, ye))).forEach(ye)
      })), Me
    }

    function Gi(ee, ie) {
      let He = 0;
      for (let ye = 1; ye < ie.length; ++ye) He += ri(ee, ie[ye - 1], ie[ye]);
      return He
    }

    function ri(ee, ie, He) {
      let ye = function(ee, ie) {
          return ee.reduce(((ee, He, ye) => (ee[He] = ie[ye], ee)), {})
        }(He, He.map(((ee, ie) => ie))),
        be = ie.flatMap((ie => {
          let He = ee.outEdges(ie);
          return He ? He.map((ie => ({
            pos: ye[ie.w],
            weight: ee.edge(ie).weight
          }))).sort(((ee, ie) => ee.pos - ie.pos)) : []
        })),
        Me = 1;
      for (; Me < He.length;) Me <<= 1;
      let Ke = 2 * Me - 1;
      Me -= 1;
      let Ue = new Array(Ke).fill(0),
        Fe = 0;
      return be.forEach((ee => {
        let ie = ee.pos + Me;
        Ue[ie] += ee.weight;
        let He = 0;
        for (; ie > 0;) ie % 2 && (He += Ue[ie + 1]), ie = ie - 1 >> 1, Ue[ie] += ee.weight;
        Fe += ee.weight * He
      })), Fe
    }

    function Qi(ee, ie) {
      let He = {};
      return ee.forEach(((ee, ie) => {
          let ye = {
            indegree: 0,
            in: [],
            out: [],
            vs: [ee.v],
            i: ie
          };
          void 0 !== ee.barycenter && (ye.barycenter = ee.barycenter, ye.weight = ee.weight), He[ee.v] = ye
        })), ie.edges().forEach((ee => {
          let ie = He[ee.v],
            ye = He[ee.w];
          void 0 !== ie && void 0 !== ye && (ye.indegree++, ie.out.push(ye))
        })),
        function(ee) {
          let ie = [];

          function He(ee) {
            return ie => {
              ie.merged || (void 0 === ie.barycenter || void 0 === ee.barycenter || ie.barycenter >= ee.barycenter) && function(ee, ie) {
                let He = 0,
                  ye = 0;
                ee.weight && (He += ee.barycenter * ee.weight, ye += ee.weight), ie.weight && (He += ie.barycenter * ie.weight, ye += ie.weight), ee.vs = ie.vs.concat(ee.vs), ee.barycenter = He / ye, ee.weight = ye, ee.i = Math.min(ie.i, ee.i), ie.merged = !0
              }(ee, ie)
            }
          }

          function ye(ie) {
            return He => {
              He.in.push(ie), 0 === --He.indegree && ee.push(He)
            }
          }
          for (; ee.length;) {
            let be = ee.pop();
            ie.push(be), be.in.reverse().forEach(He(be)), be.out.forEach(ye(be))
          }
          return ie.filter((ee => !ee.merged)).map((ee => ii(ee, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(He).filter((ee => !ee.indegree)))
    }

    function eH(ee, ie, He, ye, be) {
      let Me = {},
        Ke = null,
        Ue = null,
        Fe = be;
      "boolean" == typeof ie ? (Fe = ie, Me = {}) : ie && (Me = ie, Ke = null != He ? He : null, Ue = null != ye ? ye : null);
      let Je = function(ee, ie) {
          let He = {
            lhs: [],
            rhs: []
          };
          return ee.forEach((ee => {
            ie(ee) ? He.lhs.push(ee) : He.rhs.push(ee)
          })), He
        }(ee, (ee => Object.hasOwn(ee, "barycenter"))),
        oe = Je.lhs,
        Re = Je.rhs.sort(((ee, ie) => ie.i - ee.i)),
        ke = [],
        qe = 0,
        fe = 0,
        Te = 0;
      oe.sort(function(ee, ie, He) {
        return (ye, be) => {
          if (ye.barycenter < be.barycenter) return -1;
          if (ye.barycenter > be.barycenter) return 1;
          if (ee && ("string" == typeof ye.vs[0] || "string" == typeof be.vs[0])) {
            let He = ee.node(ye.vs[0]),
              Me = ee.node(be.vs[0]),
              Ke = bi(ie, He, Me);
            if (0 !== Ke) return Ke
          }
          return He ? be.i - ye.i : ye.i - be.i
        }
      }(Ue, Ke, !!Fe));
      for (let [Xe, ze] of Object.entries(Me)) {
        let ee = oe.findIndex((ee => ee.vs[0] === Xe));
        oe.splice(ee + 1, 0, ze)
      }
      Te = iH(ke, Re, Te), oe.forEach((ee => {
        Te += ee.vs.length, ke.push(ee.vs), qe += ee.barycenter * ee.weight, fe += ee.weight, Te = iH(ke, Re, Te)
      }));
      let pe = {
        vs: ke.flat(1)
      };
      return fe && (pe.barycenter = qe / fe, pe.weight = fe), pe
    }

    function iH(ee, ie, He) {
      let ye;
      for (; ie.length && (ye = ie[ie.length - 1]).i <= He;) ie.pop(), ee.push(ye.vs), He++;
      return He
    }

    function HH(ee, ie, He, ye, be) {
      var Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te;
      let pe = null,
        Xe = be;
      "boolean" == typeof ye ? (Xe = ye, pe = null) : void 0 !== ye && (pe = ye);
      let ze = ee.children(ie),
        Be = ee.node(ie),
        Ee = Be ? Be.borderLeft : void 0,
        ge = Be ? Be.borderRight : void 0,
        Oe = {};
      Ee && (ze = ze.filter((ee => ee !== Ee && ee !== ge)));
      let de = function(ee) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((ie => {
          let He = ee.inEdges(ie);
          if (!He || !He.length) return {
            v: ie
          };
          {
            let ye = He.reduce(((ie, He) => {
              let ye = ee.edge(He),
                be = ee.node(He.v);
              return {
                sum: ie.sum + ye.weight * be.order,
                weight: ie.weight + ye.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: ie,
              barycenter: ye.sum / ye.weight,
              weight: ye.weight
            }
          }
        }))
      }(ee, ze);
      de.forEach((ie => {
        if (ee.children(ie.v).length) {
          let {
            result: ye
          } = HH(ee, ie.v, He, pe, Xe);
          Oe[ie.v] = ye, Object.hasOwn(ye, "barycenter") && function(ee, ie) {
            void 0 !== ee.barycenter ? (ee.barycenter = (ee.barycenter * ee.weight + ie.barycenter * ie.weight) / (ee.weight + ie.weight), ee.weight += ie.weight) : (ee.barycenter = ie.barycenter, ee.weight = ie.weight)
          }(ie, ye)
        }
      }));
      let We = Qi(de, He);
      ! function(ee, ie) {
        ee.forEach((ee => {
          ee.vs = ee.vs.flatMap((ee => ie[ee] ? ie[ee].vs : ee))
        }))
      }(We, Oe);
      let te = {},
        Ze = !1;
      for (let De = 0; De < We.length; De++)
        for (let ie = De + 1; ie < We.length; ie++)
          if (We[De] && We[ie] && null != (Me = We[De]) && Me.barycenter && null != (Ke = We[ie]) && Ke.barycenter && (null == (Ue = We[De]) ? void 0 : Ue.barycenter) === We[ie].barycenter) {
            let He = null != (Je = null == (Fe = We[De]) ? void 0 : Fe.vs[0]) ? Je : "",
              ye = null != (Re = null == (oe = We[ie]) ? void 0 : oe.vs[0]) ? Re : "",
              be = ee.node(He),
              Me = ee.node(ye);
            if ("edge" === be.dummy && "edge" === Me.dummy && (null == (ke = be.edgeObj) ? void 0 : ke.v) === (null == (qe = Me.edgeObj) ? void 0 : qe.v) && (null == (fe = be.edgeObj) ? void 0 : fe.w) === (null == (Te = Me.edgeObj) ? void 0 : Te.w)) {
              if (be.edgeLabel.reversed) {
                te[ye] = We[De], We.splice(De, 1), De--;
                break
              }
              te[He] = We[ie], We.splice(ie, 1), ie--
            } else Ze = !0
          } let we = eH(We, te, pe, ee, Xe);
      if (Ee && ge) {
        we.vs = [Ee, we.vs, ge].flat(1);
        let ie = ee.predecessors(Ee);
        if (ie && ie.length) {
          let He = ee.node(ie[0]),
            ye = ee.predecessors(ge),
            be = ee.node(ye[0]);
          Object.hasOwn(we, "barycenter") || (we.barycenter = 0, we.weight = 0), we.barycenter = (we.barycenter * we.weight + He.order + be.order) / (we.weight + 2), we.weight += 2
        }
      }
      return Object.defineProperty(we, "result", {
        value: we,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(we, "usedBias", {
        value: Ze,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), we
    }

    function yH(ee, ie, He, ye) {
      ye || (ye = ee.nodes());
      let be = function(ee) {
          let ie;
          for (; ee.hasNode(ie = Qe("_root")););
          return ie
        }(ee),
        Me = new ue({
          compound: !0
        }).setGraph({
          root: be
        }).setDefaultNodeLabel((ie => ee.node(ie)));
      return ye.forEach((ye => {
        let Ke = ee.node(ye),
          Ue = ee.parent(ye);
        if (Ke.rank === ie || Ke.minRank <= ie && ie <= Ke.maxRank) {
          Me.setNode(ye), Me.setParent(ye, Ue || be);
          let Fe = ee[He](ye);
          Fe && Fe.forEach((ie => {
            let He = ie.v === ye ? ie.w : ie.v,
              be = Me.edge(He, ye),
              Ke = void 0 !== be ? be.weight : 0;
            Me.setEdge(He, ye, {
              weight: ee.edge(ie).weight + Ke
            })
          })), Object.hasOwn(Ke, "minRank") && Me.setNode(ye, {
            borderLeft: Ke.borderLeft[ie],
            borderRight: Ke.borderRight[ie]
          })
        }
      })), Me
    }

    function bH(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof ie.customOrder) return void ie.customOrder(ee, bH);
      let ye = he(ee),
        be = MH(ee, ei(1, ye + 1), "inEdges"),
        Me = MH(ee, ei(ye - 1, -1, -1), "outEdges"),
        Ke = Ni(ee, He);
      if (UH(ee, Ke), ie.disableOptimalOrderHeuristic) return;
      let Ue, Fe = Number.POSITIVE_INFINITY,
        Je = ie.constraints || [];
      for (let oe = 0, Re = 0; Re < 4; ++oe, ++Re) {
        KH(oe % 2 ? be : Me, oe % 4 >= 2, Je, He), Ke = ne(ee);
        let ie = Gi(ee, Ke);
        ie < Fe ? (Re = 0, Ue = Object.assign({}, Ke), Fe = ie) : ie === Fe && (Ue = structuredClone(Ke))
      }
      UH(ee, Ue)
    }

    function MH(ee, ie, He) {
      let ye = new Map,
        be = (ee, ie) => {
          ye.has(ee) || ye.set(ee, []), ye.get(ee).push(ie)
        };
      for (let Me of ee.nodes()) {
        let ie = ee.node(Me);
        if ("number" == typeof ie.rank && be(ie.rank, Me), "number" == typeof ie.minRank && "number" == typeof ie.maxRank)
          for (let ee = ie.minRank; ee <= ie.maxRank; ee++) ee !== ie.rank && be(ee, Me)
      }
      return ie.map((function(ie) {
        return yH(ee, ie, He, ye.get(ie) || [])
      }))
    }

    function KH(ee, ie, He, ye) {
      let be = !0,
        Me = new ue;
      ee.forEach((function(ee) {
        He.forEach((ee => Me.setEdge(ee.left, ee.right)));
        let Ke = ee.graph().root,
          {
            result: Ue,
            usedBias: Fe
          } = HH(ee, Ke, Me, ye, be);
        ie && Fe && (be = !be), Ue.vs.forEach(((ie, He) => ee.node(ie).order = He)),
          function(ee, ie, He) {
            let ye, be = {};
            He.forEach((He => {
              let Me, Ke, Ue = ee.parent(He);
              for (; Ue;) {
                if (Me = ee.parent(Ue), Me ? (Ke = be[Me], be[Me] = Ue) : (Ke = ye, ye = Ue), Ke && Ke !== Ue) return void ie.setEdge(Ke, Ue);
                Ue = Me
              }
            }))
          }(ee, Me, Ue.vs)
      }))
    }

    function UH(ee, ie) {
      Object.values(ie).forEach((ie => ie.forEach(((ie, He) => ee.node(ie).order = He))))
    }

    function FH(ee, ie, He) {
      if (ie > He) {
        let ee = ie;
        ie = He, He = ee
      }
      let ye = ee[ie];
      ye || (ee[ie] = ye = {}), ye[He] = !0
    }

    function JH(ee, ie, He) {
      if (ie > He) {
        let ee = ie;
        ie = He, He = ee
      }
      let ye = ee[ie];
      return void 0 !== ye && Object.hasOwn(ye, He)
    }

    function oH(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Me = {},
        Ke = function(ee, ie, He, ye) {
          let be = new ue,
            Me = ee.graph(),
            Ke = function(ee, ie, He) {
              return (ye, be, Me) => {
                let Ke, Ue = ye.node(be),
                  Fe = ye.node(Me),
                  Je = 0;
                if (Je += Ue.width / 2, Object.hasOwn(Ue, "labelpos")) switch (Ue.labelpos.toLowerCase()) {
                  case "l":
                    Ke = -Ue.width / 2;
                    break;
                  case "r":
                    Ke = Ue.width / 2
                }
                if (Ke && (Je += He ? Ke : -Ke), Ke = void 0, Je += (Ue.dummy ? ie : ee) / 2, Je += (Fe.dummy ? ie : ee) / 2, Je += Fe.width / 2, Object.hasOwn(Fe, "labelpos")) switch (Fe.labelpos.toLowerCase()) {
                  case "l":
                    Ke = Fe.width / 2;
                    break;
                  case "r":
                    Ke = -Fe.width / 2
                }
                return Ke && (Je += He ? Ke : -Ke), Je
              }
            }(Me.nodesep, Me.edgesep, ye);
          return ie.forEach((ie => {
            let ye;
            ie.forEach((ie => {
              let Me = He[ie];
              if (void 0 !== Me) {
                if (be.setNode(Me), void 0 !== ye) {
                  let Ue = He[ye];
                  if (void 0 !== Ue) {
                    let He = be.edge(Ue, Me);
                    be.setEdge(Ue, Me, Math.max(Ke(ee, ie, ye), He || 0))
                  }
                }
                ye = ie
              }
            }))
          })), be
        }(ee, ie, He, be),
        Ue = be ? "borderLeft" : "borderRight";

      function Fe(ee, ie) {
        let He = Ke.nodes().slice(),
          ye = {},
          be = He.pop();
        for (; be;) {
          if (ye[be]) ee(be);
          else {
            ye[be] = !0, He.push(be);
            for (let ee of ie(be)) He.push(ee)
          }
          be = He.pop()
        }
      }
      return Fe((function(ee) {
        let ie = Ke.inEdges(ee);
        Me[ee] = ie ? ie.reduce(((ee, ie) => {
          var He;
          let ye = null != (He = Me[ie.v]) ? He : 0,
            be = Ke.edge(ie);
          return Math.max(ee, ye + (void 0 !== be ? be : 0))
        }), 0) : 0
      }), (function(ee) {
        return Ke.predecessors(ee) || []
      })), Fe((function(ie) {
        let He = Ke.outEdges(ie),
          ye = Number.POSITIVE_INFINITY;
        He && (ye = He.reduce(((ee, ie) => {
          let He = Me[ie.w],
            ye = Ke.edge(ie);
          return Math.min(ee, (void 0 !== He ? He : 0) - (void 0 !== ye ? ye : 0))
        }), Number.POSITIVE_INFINITY));
        let be = ee.node(ie);
        ye !== Number.POSITIVE_INFINITY && be.borderType !== Ue && (Me[ie] = Math.max(void 0 !== Me[ie] ? Me[ie] : 0, ye))
      }), (function(ee) {
        return Ke.successors(ee) || []
      })), Object.keys(ye).forEach((ee => {
        var ie;
        let ye = He[ee];
        void 0 !== ye && (Me[ee] = null != (ie = Me[ye]) ? ie : 0)
      })), Me
    }

    function RH(ee, ie) {
      let He, ye = ne(ee),
        be = Object.assign(function(ee, ie) {
          let He = {};
          return ie.length && ie.reduce((function(ie, ye) {
            let be = 0,
              Me = 0,
              Ke = ie.length,
              Ue = ye[ye.length - 1];
            return ye.forEach(((ie, Fe) => {
              let Je = function(ee, ie) {
                  if (ee.node(ie).dummy) {
                    let He = ee.predecessors(ie);
                    if (He) return He.find((ie => ee.node(ie).dummy))
                  }
                }(ee, ie),
                oe = Je ? ee.node(Je).order : Ke;
              (Je || ie === Ue) && (ye.slice(Me, Fe + 1).forEach((ie => {
                let ye = ee.predecessors(ie);
                ye && ye.forEach((ye => {
                  let Me = ee.node(ye),
                    Ke = Me.order;
                  (Ke < be || oe < Ke) && (!Me.dummy || !ee.node(ie).dummy) && FH(He, ye, ie)
                }))
              })), Me = Fe + 1, be = oe)
            })), ye
          })), He
        }(ee, ye), function(ee, ie) {
          let He = {};

          function ye(ie, ye, be, Me, Ke) {
            ei(ye, be).forEach((ye => {
              let be = ie[ye];
              if (void 0 !== be && ee.node(be).dummy) {
                let ie = ee.predecessors(be);
                ie && ie.forEach((ie => {
                  if (void 0 === ie) return;
                  let ye = ee.node(ie);
                  ye.dummy && (ye.order < Me || ye.order > Ke) && FH(He, ie, be)
                }))
              }
            }))
          }
          return ie.length && ie.reduce((function(ie, He) {
            let be = -1,
              Me = -1,
              Ke = 0;
            return He.forEach(((Ue, Fe) => {
              if ("border" === ee.node(Ue).dummy) {
                let ie = ee.predecessors(Ue);
                if (ie && ie.length) {
                  let Ue = ie[0];
                  if (void 0 === Ue) return;
                  Me = ee.node(Ue).order, ye(He, Ke, Fe, be, Me), Ke = Fe, be = Me
                }
              }
              ye(He, Ke, He.length, Me, ie.length)
            })), He
          })), He
        }(ee, ye)),
        Me = {};
      ["u", "d"].forEach((Ke => {
        He = "u" === Ke ? ye : Object.values(ye).reverse(), ["l", "r"].forEach((ye => {
          "r" === ye && (He = He.map((ee => Object.values(ee).reverse())));
          let Ue = function(ee, ie, He, ye, be) {
              let Me = {},
                Ke = {},
                Ue = {};
              return ie.forEach((ee => {
                ee.forEach(((ee, ie) => {
                  Me[ee] = ee, Ke[ee] = ee, Ue[ee] = ie
                }))
              })), ie.forEach((ie => {
                let Fe = -1,
                  Je = -1,
                  oe = !1,
                  Re = ie,
                  ke = ie.findIndex((ie => (null == be ? void 0 : be.includes(ie)) || kH(ie, ee, be)));
                ke > 0 && (Re = [ie[ke], ...ie.slice(0, ke), ...ie.slice(ke + 1)], oe = !0), Re.forEach((ie => {
                  var Re;
                  let ke = ye(ie);
                  if (ke && ke.length) {
                    null != be && be.includes(ie) && (ke = ke.filter((ie => kH(ie, ee, be))));
                    let ye = ke.sort(((ee, ie) => {
                        let He = Ue[ee],
                          ye = Ue[ie];
                        return (void 0 !== He ? He : 0) - (void 0 !== ye ? ye : 0)
                      })),
                      qe = (ye.length - 1) / 2;
                    for (let ee = Math.floor(qe), be = Math.ceil(qe); ee <= be; ++ee) {
                      let be = ye[ee];
                      if (void 0 === be) continue;
                      let ke = Ue[be];
                      if (void 0 !== ke && Ke[ie] === ie && Fe < ke && Ue[be] !== Je && !JH(He, ie, be)) {
                        let ee = Me[be];
                        void 0 !== ee && (Ke[be] = ie, Ke[ie] = Me[ie] = ee, Fe = ke, oe && (Fe = -1, Je = null != (Re = Ue[be]) ? Re : -1, oe = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Me,
                align: Ke
              }
            }(ee, He, be, (ie => ("u" === Ke ? ee.predecessors(ie) : ee.successors(ie)) || []), ie),
            Fe = oH(ee, He, Ue.root, Ue.align, "r" === ye);
          "r" === ye && (Fe = Hi(Fe, (ee => -ee))), Me[Ke + ye] = Fe
        }))
      }));
      let Ke = function(ee, ie) {
        return Object.values(ie).reduce(((ie, He) => {
          let ye = Number.NEGATIVE_INFINITY,
            be = Number.POSITIVE_INFINITY;
          Object.entries(He).forEach((ie => {
            let [He, Me] = ie, Ke = function(ee, ie) {
              return ee.node(ie).width
            }(ee, He) / 2;
            ye = Math.max(Me + Ke, ye), be = Math.min(Me - Ke, be)
          }));
          let Me = ye - be;
          return Me < ie[0] && (ie = [Me, He]), ie
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(ee, Me);
      return function(ee, ie) {
          let He = Object.values(ie),
            ye = Ie(Math.min, He),
            be = Ie(Math.max, He);
          ["u", "d"].forEach((He => {
            ["l", "r"].forEach((Me => {
              let Ke = He + Me,
                Ue = ee[Ke];
              if (!Ue || Ue === ie) return;
              let Fe = Object.values(Ue),
                Je = ye - Ie(Math.min, Fe);
              "l" !== Me && (Je = be - Ie(Math.max, Fe)), Je && (ee[Ke] = Hi(Ue, (ee => ee + Je)))
            }))
          }))
        }(Me, Ke),
        function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            He = ee.ul;
          return He ? Hi(He, ((He, ye) => {
            var be, Me;
            if (ie) {
              let He = ie.toLowerCase(),
                be = ee[He];
              if (be && void 0 !== be[ye]) return be[ye]
            }
            let Ke = Object.values(ee).map((ee => {
              let ie = ee[ye];
              return void 0 !== ie ? ie : 0
            })).sort(((ee, ie) => ee - ie));
            return ((null != (be = Ke[1]) ? be : 0) + (null != (Me = Ke[2]) ? Me : 0)) / 2
          })) : {}
        }(Me, ee.graph().align)
    }

    function kH(ee, ie, He) {
      var ye;
      if (!He) return !1;
      let be = null == (ye = ie.node(ee)) ? void 0 : ye.edgeObj;
      if (!be || ie.node(ee).edgeLabel.reversed) return !1;
      let Me = He.indexOf(null == be ? void 0 : be.v),
        Ke = He.indexOf(null == be ? void 0 : be.w);
      return -1 !== Me && -1 !== Ke && Me === (Ke + 1) % He.length || Me === (Ke - 1) % He.length
    }

    function qH(ee, ie) {
      (function(ee) {
        let ie = ne(ee),
          He = ee.graph(),
          ye = He.ranksep,
          be = He.rankalign,
          Me = 0;
        ie.forEach((ie => {
          let He = ie.reduce(((ie, He) => {
            var ye;
            let be = null != (ye = ee.node(He).height) ? ye : 0;
            return ie > be ? ie : be
          }), 0);
          ie.forEach((ie => {
            let ye = ee.node(ie);
            ye.y = "top" === be ? Me + ye.height / 2 : "bottom" === be ? Me + He - ye.height / 2 : Me + He / 2
          })), Me += He + ye
        }))
      })(ee = le(ee)), Object.entries(RH(ee, ie)).forEach((ie => {
        let [He, ye] = ie;
        return ee.node(He).x = ye
      }))
    }
    var fH = new WeakMap;

    function TH(ee) {
      return XH(ee, Ge, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), ee
    }

    function pH(ee, ie, He) {
      let ye = ie;
      for (; void 0 !== ye;) {
        let ie = ee.parent(ye);
        if (ie === He) return ye;
        ye = ie
      }
    }

    function XH(ee, ie, He) {
      var ye;
      let be = ee.nodes().filter((ie => ee.children(ie).length)),
        Me = {};
      be.forEach((ye => {
        let be = ee.node(ye);
        if (be && be.rankdir) {
          let Ke = new ue({
            multigraph: !0,
            compound: !0
          });
          Ke.setGraph({
            rankdir: be.rankdir
          });
          let Ue = ee.children(ye);
          Ue.forEach((ie => {
            let He = {
              ...ee.node(ie)
            };
            Ke.setNode(ie, He);
            let be = ee.parent(ie);
            be && be !== ye && Ue.includes(be) && Ke.setParent(ie, be)
          }));
          let Fe = new Set;
          ee.edges().forEach((ie => {
            let He = pH(ee, ie.v, ye),
              be = pH(ee, ie.w, ye);
            if (He && be && He !== be) {
              let ye = `${He}\0${be}`;
              Fe.has(ye) || (Fe.add(ye), Ke.setEdge(He, be, {
                ...ee.edge(ie)
              }))
            }
          })), XH(Ke, ie, He);
          let Je = DH(Ke);
          zH(Je, ie, He, null), BH(Ke, Je);
          let oe = 1 / 0,
            Re = 1 / 0,
            ke = -1 / 0,
            qe = -1 / 0;
          Ke.nodes().forEach((ee => {
            if (ee === ye) return;
            let ie = Ke.node(ee);
            ie && "number" == typeof ie.x && "number" == typeof ie.y && "number" == typeof ie.width && "number" == typeof ie.height && (oe = Math.min(oe, ie.x - ie.width / 2), ke = Math.max(ke, ie.x + ie.width / 2), Re = Math.min(Re, ie.y - ie.height / 2), qe = Math.max(qe, ie.y + ie.height / 2))
          })), (!isFinite(oe) || !isFinite(Re) || !isFinite(ke) || !isFinite(qe)) && (oe = Re = 0, ke = qe = 0);
          let fe = ke - oe,
            Te = qe - Re;
          Me[ye] = {
            minX: oe,
            rb: Re,
            maxX: ke,
            Qb: qe,
            width: fe,
            height: Te,
            offsetX: oe,
            offsetY: Re
          }, be._dagreClusterSubgraph = Ke
        }
      }));
      let Ke = [],
        Ue = new Map;
      be.forEach((ie => {
        let He = ee.node(ie);
        He && He.rankdir && Me[ie] && Ue.set(ie, (ee.children(ie) || []).filter((ee => ee !== ie)))
      }));
      let Fe = new Set([...Ue.values()].flat()),
        Je = new Map;
      Ue.forEach(((ie, He) => {
        Fe.has(He) || Je.set(He, (ie => {
          let He = [],
            ye = (ee.children(ie) || []).filter((ee => ee !== ie));
          for (; ye.length > 0;) {
            let ie = ye.shift();
            He.push(ie), (ee.children(ie) || []).filter((ee => ee !== ie)).forEach((ee => ye.push(ee)))
          }
          return He
        })(He))
      }));
      let oe = new Set([...Je.values()].flat()),
        Re = ee => {
          for (let [ie, He] of Je)
            if (He.includes(ee)) return ie;
          return ee
        },
        ke = [];
      ee.edges().forEach((ie => {
        (oe.has(ie.v) || oe.has(ie.w)) && ke.push({
          edge: ie,
          label: ee.edge(ie)
        })
      }));
      let qe = new Map;
      oe.forEach((ie => {
        let He = ee.parent(ie);
        qe.set(ie, "string" == typeof He ? He : void 0)
      })), Je.forEach(((ie, He) => {
        let ye = ee.node(He),
          be = [];
        ie.forEach((ie => {
          let He = ee.node(ie);
          He && (be.push({
            id: ie,
            node: He,
            parent: qe.get(ie)
          }), ee.removeNode(ie))
        }));
        let Ue = ke.filter((ee => {
            let {
              edge: He
            } = ee;
            return ie.includes(He.v) || ie.includes(He.w)
          })),
          Fe = Me[He];
        ye && (Ke.push({
          clusterId: He,
          subgraph: ye._dagreClusterSubgraph,
          bounds: Fe,
          children: ie,
          removedNodes: be,
          removedEdges: Ue
        }), ye.width = Fe.width, ye.height = Fe.height)
      }));
      let fe = new Set;
      ke.forEach((ie => {
        let {
          edge: He,
          label: ye
        } = ie, be = Re(He.v), Me = Re(He.w);
        if (be !== Me && ee.hasNode(be) && ee.hasNode(Me)) {
          let ie = `${be}\0${Me}`;
          fe.has(ie) || (fe.add(ie), ee.setEdge(be, Me, {
            ...ye,
            width: 0,
            height: 0
          }))
        }
      }));
      let Te = DH(ee),
        pe = zH(Te, ie, He, null != (ye = fH.get(ee)) ? ye : null);
      fH.set(ee, pe), BH(ee, Te), fe.forEach((ie => {
        let He = ie.indexOf("\0"),
          ye = ie.slice(0, He),
          be = ie.slice(He + 1);
        ee.hasEdge(ye, be) && ee.removeEdge(ye, be)
      })), Ke.forEach((ie => {
        let {
          clusterId: He,
          subgraph: ye,
          bounds: be,
          removedNodes: Me,
          removedEdges: Ke
        } = ie;
        var Ue, Fe;
        let Je = ee.node(He),
          oe = null != (Ue = null == Je ? void 0 : Je.x) ? Ue : 0,
          Re = null != (Fe = null == Je ? void 0 : Je.y) ? Fe : 0,
          ke = (be.minX + be.maxX) / 2,
          qe = (be.rb + be.Qb) / 2;
        Me.forEach((ie => {
          let {
            id: He,
            node: ye,
            parent: be
          } = ie;
          ee.setNode(He, ye), void 0 !== be && ee.setParent(He, be)
        })), Ke.forEach((ie => {
          let {
            edge: He,
            label: ye
          } = ie;
          ee.setEdge(He, ye)
        })), ye.nodes().forEach((ie => {
          if (ie === He) return;
          let be = ye.node(ie),
            Me = ee.node(ie);
          Me && be && "number" == typeof be.x && "number" == typeof be.y && (Me.x = oe + (be.x - ke), Me.y = Re + (be.y - qe))
        })), delete Je._dagreClusterSubgraph
      })), be.forEach((ie => {
        var He, ye;
        let be = ee.node(ie),
          Ke = Me[ie];
        if (be && be.rankdir && be._dagreClusterSubgraph && Ke) {
          let Me = be._dagreClusterSubgraph,
            Ue = null != (He = be.x) ? He : 0,
            Fe = null != (ye = be.y) ? ye : 0,
            Je = (Ke.minX + Ke.maxX) / 2,
            oe = (Ke.rb + Ke.Qb) / 2;
          Me.nodes().forEach((He => {
            if (He === ie) return;
            let ye = Me.node(He),
              be = ee.node(He);
            if (be && ye && "number" == typeof ye.x && "number" == typeof ye.y) {
              let ee = ye.x - Je,
                ie = ye.y - oe;
              be.x = Ue + ee, be.y = Fe + ie
            }
          })), delete be._dagreClusterSubgraph
        }
      }))
    }

    function zH(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var be, Me;
      let Ke = !1 !== (null == He ? void 0 : He.useDynamic),
        Ue = Ke && null != (be = null == ye ? void 0 : ye.graph) ? be : null,
        Fe = Ke && null != (Me = null == ye ? void 0 : ye.rawNodes) ? Me : null;
      ie("    makeSpaceForEdgeLabels", (() => function(ee) {
        let ie = ee.graph();
        ie.ranksep /= 2, ee.edges().forEach((He => {
          var ye;
          let be = ee.edge(He);
          be.minlen *= 2, "c" !== (null != (ye = be.labelpos) ? ye : "r").toLowerCase() && ("TB" === ie.rankdir || "BT" === ie.rankdir ? be.width += be.labeloffset : be.height += be.labeloffset)
        }))
      }(ee))), ie("    removeSelfEdges", (() => function(ee) {
        ee.edges().forEach((ie => {
          if (ie.v === ie.w) {
            let He = ee.node(ie.v);
            He.selfEdges || (He.selfEdges = []), He.selfEdges.push({
              e: ie,
              label: ee.edge(ie)
            }), ee.removeEdge(ie)
          }
        }))
      }(ee))), ie("    acyclic", (() => qi(ee, Ue))), ie("    nestingGraph.run", (() => vi(ee))), ie("    rank", (() => ci(le(ee)))), ie("    injectEdgeLabelProxies", (() => function(ee) {
        ee.edges().forEach((ie => {
          let He = ee.edge(ie);
          if (He.width && He.height) {
            let He = ee.node(ie.v),
              ye = {
                rank: (ee.node(ie.w).rank - He.rank) / 2 + He.rank,
                e: ie
              };
            me(ee, "edge-proxy", ye, "_ep")
          }
        }))
      }(ee))), ie("    removeEmptyRanks", (() => function(ee) {
        let ie = ee.nodes().map((ie => ee.node(ie).rank)).filter((ee => void 0 !== ee)),
          He = Ie(Math.min, ie),
          ye = [];
        ee.nodes().forEach((ie => {
          let be = ee.node(ie).rank - He;
          ye[be] || (ye[be] = []), ye[be].push(ie)
        }));
        let be = 0,
          Me = ee.graph().nodeRankFactor;
        Array.from(ye).forEach(((ie, He) => {
          void 0 === ie && He % Me !== 0 ? --be : void 0 !== ie && be && ie.forEach((ie => ee.node(ie).rank += be))
        }))
      }(ee))), ie("    nestingGraph.cleanup", (() => function(ee) {
        let ie = ee.graph();
        ee.removeNode(ie.nestingRoot), delete ie.nestingRoot, ee.edges().forEach((ie => {
          ee.edge(ie).nestingEdge && ee.removeEdge(ie)
        }))
      }(ee))), ie("    normalizeRanks", (() => function(ee) {
        let ie = ee.nodes().map((ie => {
            let He = ee.node(ie).rank;
            return void 0 === He ? Number.MAX_VALUE : He
          })),
          He = Ie(Math.min, ie);
        ee.nodes().forEach((ie => {
          let ye = ee.node(ie);
          Object.hasOwn(ye, "rank") && (ye.rank -= He)
        }))
      }(ee))), ie("    assignRankMinMax", (() => function(ee) {
        let ie = 0;
        ee.nodes().forEach((He => {
          let ye = ee.node(He);
          ye.borderTop && (ye.minRank = ee.node(ye.borderTop).rank, ye.maxRank = ee.node(ye.borderBottom).rank, ie = Math.max(ie, ye.maxRank))
        })), ee.graph().maxRank = ie
      }(ee))), ie("    removeEdgeLabelProxies", (() => function(ee) {
        ee.nodes().forEach((ie => {
          let He = ee.node(ie);
          if ("edge-proxy" === He.dummy) {
            let ye = He;
            ee.edge(ye.e).labelRank = He.rank, ee.removeNode(ie)
          }
        }))
      }(ee))), ie("    normalize.run", (() => fi(ee))), ie("    parentDummyChains", (() => Ci(ee))), ie("    addBorderSegments", (() => mi(ee))), ie("    order", (() => bH(ee, He, Fe))), ie("    insertSelfEdges", (() => function(ee) {
        ne(ee).forEach((ie => {
          let He = 0;
          ie.forEach(((ie, ye) => {
            let be = ee.node(ie);
            "number" != typeof be.rank && (be.rank = 0), be.order = ye + He, (be.selfEdges || []).forEach((ie => {
              me(ee, "selfedge", {
                width: ie.label.width,
                height: ie.label.height,
                rank: be.rank,
                order: ye + ++He,
                e: ie.e,
                edgeLabel: ie.label
              }, "_se"), (!Array.isArray(ie.label.points) || 7 !== ie.label.points.length) && (ie.label.points = [{
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
            })), delete be.selfEdges
          }))
        }))
      }(ee))), ie("    adjustCoordinateSystem", (() => function(ee) {
        var ie;
        let He = null == (ie = ee.graph().rankdir) ? void 0 : ie.toLowerCase();
        ("lr" === He || "rl" === He) && ni(ee)
      }(ee))), ie("    position", (() => qH(ee, He.corePath))), ie("    positionSelfEdges", (() => function(ee) {
        ee.nodes().forEach((ie => {
          let He = ee.node(ie),
            ye = ee => "number" == typeof ee && isFinite(ee);
          if ("selfedge" === He.dummy) {
            let be = He,
              Me = ee.node(be.e.v),
              Ke = ye(null == Me ? void 0 : Me.x) ? Me.x : 0,
              Ue = ye(null == Me ? void 0 : Me.y) ? Me.y : 0,
              Fe = ye(null == Me ? void 0 : Me.width) ? Me.width : 0,
              Je = ye(null == Me ? void 0 : Me.height) ? Me.height : 0,
              oe = ye(He.x) ? He.x : Ke,
              Re = ye(He.y) ? He.y : Ue,
              ke = Fe / 2,
              qe = Je / 2;
            be.edgeLabel.points = [{
              x: oe + ke,
              y: Re - qe
            }, {
              x: oe + ke,
              y: Re - qe
            }, {
              x: oe,
              y: Re
            }, {
              x: oe - ke,
              y: Re + qe
            }, {
              x: oe - ke,
              y: Re + qe
            }, {
              x: oe,
              y: Re
            }, {
              x: oe,
              y: Re
            }], be.edgeLabel.x = oe, be.edgeLabel.y = Re, ee.setEdge(be.e, be.edgeLabel), ee.removeNode(ie)
          } else He && Array.isArray(He.selfEdges) && He.selfEdges.forEach((ee => {
            if (!Array.isArray(ee.label.points) || 7 !== ee.label.points.length) {
              let ie = ye(He.x) ? He.x : 0,
                be = ye(He.y) ? He.y : 0,
                Me = (ye(He.width) ? He.width : 0) / 2,
                Ke = (ye(He.height) ? He.height : 0) / 2;
              ee.label.points = [{
                x: ie + Me,
                y: be - Ke
              }, {
                x: ie + Me,
                y: be - Ke
              }, {
                x: ie,
                y: be
              }, {
                x: ie - Me,
                y: be + Ke
              }, {
                x: ie - Me,
                y: be + Ke
              }, {
                x: ie,
                y: be
              }, {
                x: ie,
                y: be
              }]
            }
          }))
        }))
      }(ee)));
      let Je = JSON.parse(JSON.stringify(ee._nodes));
      return ie("    removeBorderNodes", (() => function(ee) {
        ee.nodes().forEach((ie => {
          if (ee.children(ie).length) {
            let He = ee.node(ie),
              ye = ee.node(He.borderTop),
              be = ee.node(He.borderBottom),
              Me = ee.node(He.borderLeft[He.borderLeft.length - 1]),
              Ke = ee.node(He.borderRight[He.borderRight.length - 1]);
            He.width = Math.abs(Ke.x - Me.x), He.height = Math.abs(be.y - ye.y), He.x = Me.x + He.width / 2, He.y = ye.y + He.height / 2
          }
        })), ee.nodes().forEach((ie => {
          "border" === ee.node(ie).dummy && ee.removeNode(ie)
        }))
      }(ee))), ie("    normalize.undo", (() => function(ee) {
        ee.graph().dummyChains.forEach((ie => {
          let He, ye = ee.node(ie),
            be = ye.edgeLabel;
          for (ee.setEdge(ye.edgeObj, be); ye.dummy;) He = ee.successors(ie)[0], ee.removeNode(ie), be.points.push({
            x: ye.x,
            y: ye.y
          }), "edge-label" === ye.dummy && (be.x = ye.x, be.y = ye.y, be.width = ye.width, be.height = ye.height), ie = He, ye = ee.node(ie)
        }))
      }(ee))), ie("    fixupEdgeLabelCoords", (() => function(ee) {
        ee.edges().forEach((ie => {
          let He = ee.edge(ie);
          if (Object.hasOwn(He, "x")) switch (("l" === He.labelpos || "r" === He.labelpos) && (He.width -= He.labeloffset), He.labelpos) {
            case "l":
              He.x -= He.width / 2 + He.labeloffset;
              break;
            case "r":
              He.x += He.width / 2 + He.labeloffset
          }
        }))
      }(ee))), ie("    undoCoordinateSystem", (() => Si(ee))), ie("    translateGraph", (() => function(ee) {
        let ie = Number.POSITIVE_INFINITY,
          He = 0,
          ye = Number.POSITIVE_INFINITY,
          be = 0,
          Me = ee.graph(),
          Ke = Me.marginx || 0,
          Ue = Me.marginy || 0;

        function Fe(ee) {
          let Me = ee.x,
            Ke = ee.y,
            Ue = ee.width,
            Fe = ee.height;
          ie = Math.min(ie, Me - Ue / 2), He = Math.max(He, Me + Ue / 2), ye = Math.min(ye, Ke - Fe / 2), be = Math.max(be, Ke + Fe / 2)
        }
        ee.nodes().forEach((ie => Fe(ee.node(ie)))), ee.edges().forEach((ie => {
          let He = ee.edge(ie);
          Object.hasOwn(He, "x") && Fe(He)
        })), ie -= Ke, ye -= Ue, ee.nodes().forEach((He => {
          let be = ee.node(He);
          be.x -= ie, be.y -= ye
        })), ee.edges().forEach((He => {
          let be = ee.edge(He);
          be.points.forEach((ee => {
            ee.x -= ie, ee.y -= ye
          })), Object.hasOwn(be, "x") && (be.x -= ie), Object.hasOwn(be, "y") && (be.y -= ye)
        })), Me.width = He - ie + Ke, Me.height = be - ye + Ue
      }(ee))), ie("    assignNodeIntersects", (() => function(ee) {
        ee.edges().forEach((ie => {
          if (ie.v === ie.w) return;
          let He, ye, be = ee.edge(ie),
            Me = ee.node(ie.v),
            Ke = ee.node(ie.w);
          be.points ? (He = be.points[0], ye = be.points[be.points.length - 1]) : (be.points = [], He = Ke, ye = Me), be.points.unshift(Se(Me, He)), be.points.push(Se(Ke, ye))
        }))
      }(ee))), ie("    reversePoints", (() => function(ee) {
        ee.edges().forEach((ie => {
          let He = ee.edge(ie);
          He.reversed && He.points.reverse()
        }))
      }(ee))), ie("    acyclic.undo", (() => function(ee) {
        ee.edges().forEach((ie => {
          let He = ee.edge(ie);
          if (He.reversed) {
            ee.removeEdge(ie);
            let ye = He.forwardName;
            delete He.reversed, delete He.forwardName, ee.setEdge(ie.w, ie.v, He, ye)
          }
        }))
      }(ee))), {
        graph: ee,
        rawNodes: Je
      }
    }

    function BH(ee, ie) {
      ee.nodes().forEach((He => {
        let ye = ee.node(He),
          be = ie.node(He);
        ye && (ye.x = be.x, ye.y = be.y, ye.order = be.order, ye.rank = be.rank, ie.children(He).length && (ye.width = be.width, ye.height = be.height))
      })), ee.edges().forEach((He => {
        let ye = ee.edge(He),
          be = ie.edge(He);
        ye.points = be.points, Object.hasOwn(be, "x") && (ye.x = be.x, ye.y = be.y)
      })), ee.graph().width = ie.graph().width, ee.graph().height = ie.graph().height
    }
    var EH = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      gH = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      OH = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      dH = ["width", "height", "rank"],
      WH = {
        width: 0,
        height: 0
      },
      tH = ["minlen", "weight", "width", "height", "labeloffset"],
      ZH = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      wH = ["labelpos"];

    function DH(ee) {
      let ie = new ue({
          multigraph: !0,
          compound: !0
        }),
        He = AH(ee.graph());
      return ie.setGraph(Object.assign({}, gH, PH(He, EH), ii(He, OH))), ee.nodes().forEach((He => {
        let ye = PH(AH(ee.node(He)), dH);
        Object.keys(WH).forEach((ee => {
          void 0 === ye[ee] && (ye[ee] = WH[ee])
        })), ie.setNode(He, ye);
        let be = ee.parent(He);
        void 0 !== be && ie.setParent(He, be)
      })), ee.edges().forEach((He => {
        let ye = AH(ee.edge(He));
        ie.setEdge(He, Object.assign({}, ZH, PH(ye, tH), ii(ye, wH)))
      })), ie
    }

    function PH(ee, ie) {
      return Hi(ii(ee, ie), Number)
    }

    function AH(ee) {
      let ie = {};
      return ee && Object.entries(ee).forEach((ee => {
        let [He, ye] = ee;
        "string" == typeof He && (He = He.toLowerCase()), ie[He] = ye
      })), ie
    }

    function YH(ee) {
      let ie = ne(ee),
        He = new ue({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return ee.nodes().forEach((ie => {
        He.setNode(ie, {
          label: ie
        }), He.setParent(ie, "layer" + ee.node(ie).rank)
      })), ee.edges().forEach((ee => He.setEdge(ee.v, ee.w, {}, ee.name))), ie.forEach(((ee, ie) => {
        let ye = "layer" + ie;
        He.setNode(ye, {
          rank: "same"
        }), ee.reduce(((ee, ie) => (He.setEdge(ee, ie, {
          style: "invis"
        }), ie)))
      })), He
    }
    var VH = {
        time: Ne,
        notime: Ge
      },
      aH = {
        graphlib: Me,
        version: Mi,
        layout: TH,
        debug: YH,
        util: {
          time: Ne,
          notime: Ge
        }
      }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);