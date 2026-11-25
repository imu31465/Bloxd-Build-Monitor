/*! For license information please see dz8ef.120.2d47e03f.chunk.js.LICENSE.txt */
export const id = 120;
export const ids = [120];
export const modules = {
  6642: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Graph: () => Iu,
      debug: () => kj,
      default: () => vj,
      graphlib: () => Zu,
      layout: () => Nj,
      util: () => mj,
      version: () => ZE
    });
    var su = Object.defineProperty,
      Uu = (uu, Eu, ju) => ((uu, Eu, ju) => Eu in uu ? su(uu, Eu, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ju
      }) : uu[Eu] = ju)(uu, "symbol" != typeof Eu ? Eu + "" : Eu, ju),
      Zu = {};
    ((uu, Eu) => {
      for (var ju in Eu) su(uu, ju, {
        get: Eu[ju],
        enumerable: !0
      })
    })(Zu, {
      Graph: () => Iu,
      alg: () => Du
    });
    var Xu = Object.defineProperty,
      lu = (uu, Eu) => {
        for (var ju in Eu) Xu(uu, ju, {
          get: Eu[ju],
          enumerable: !0
        })
      },
      qu = class {
        constructor(uu) {
          this._isDirected = !0, this._isMultigraph = !1, this._isCompound = !1, this._nodes = {}, this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {}, this._nodeCount = 0, this._edgeCount = 0, this._defaultNodeLabelFn = () => {}, this._defaultEdgeLabelFn = () => {}, uu && (this._isDirected = !("directed" in uu) || uu.directed, this._isMultigraph = "multigraph" in uu && uu.multigraph, this._isCompound = "compound" in uu && uu.compound), this._isCompound && (this._parent = {}, this._children = {}, this._children["\0"] = {})
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
        setGraph(uu) {
          return this._label = uu, this
        }
        graph() {
          return this._label
        }
        setDefaultNodeLabel(uu) {
          return this._defaultNodeLabelFn = "function" != typeof uu ? () => uu : uu, this
        }
        nodeCount() {
          return this._nodeCount
        }
        nodes() {
          return Object.keys(this._nodes)
        }
        sources() {
          return this.nodes().filter((uu => 0 === Object.keys(this._in[uu]).length))
        }
        sinks() {
          return this.nodes().filter((uu => 0 === Object.keys(this._out[uu]).length))
        }
        setNodes(uu, Eu) {
          return uu.forEach((uu => {
            void 0 !== Eu ? this.setNode(uu, Eu) : this.setNode(uu)
          })), this
        }
        setNode(uu, Eu) {
          return uu in this._nodes ? (arguments.length > 1 && (this._nodes[uu] = Eu), this) : (this._nodes[uu] = arguments.length > 1 ? Eu : this._defaultNodeLabelFn(uu), this._isCompound && (this._parent[uu] = "\0", this._children[uu] = {}, this._children["\0"][uu] = !0), this._in[uu] = {}, this._preds[uu] = {}, this._out[uu] = {}, this._sucs[uu] = {}, ++this._nodeCount, this)
        }
        node(uu) {
          return this._nodes[uu]
        }
        hasNode(uu) {
          return uu in this._nodes
        }
        removeNode(uu) {
          if (uu in this._nodes) {
            let Eu = uu => this.removeEdge(this._edgeObjs[uu]);
            delete this._nodes[uu], this._isCompound && (this._removeFromParentsChildList(uu), delete this._parent[uu], this.children(uu).forEach((uu => {
              this.setParent(uu)
            })), delete this._children[uu]), Object.keys(this._in[uu]).forEach(Eu), delete this._in[uu], delete this._preds[uu], Object.keys(this._out[uu]).forEach(Eu), delete this._out[uu], delete this._sucs[uu], --this._nodeCount
          }
          return this
        }
        setParent(uu, Eu) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Eu) Eu = "\0";
          else {
            for (let ju = Eu += ""; void 0 !== ju; ju = this.parent(ju))
              if (ju === uu) throw new Error("Setting " + Eu + " as parent of " + uu + " would create a cycle");
            this.setNode(Eu)
          }
          return this.setNode(uu), this._removeFromParentsChildList(uu), this._parent[uu] = Eu, this._children[Eu][uu] = !0, this
        }
        parent(uu) {
          if (this._isCompound) {
            let Eu = this._parent[uu];
            if ("\0" !== Eu) return Eu
          }
        }
        children() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Eu = this._children[uu];
            if (Eu) return Object.keys(Eu)
          } else {
            if ("\0" === uu) return this.nodes();
            if (this.hasNode(uu)) return []
          }
          return []
        }
        predecessors(uu) {
          let Eu = this._preds[uu];
          if (Eu) return Object.keys(Eu)
        }
        successors(uu) {
          let Eu = this._sucs[uu];
          if (Eu) return Object.keys(Eu)
        }
        neighbors(uu) {
          let Eu = this.predecessors(uu);
          if (Eu) {
            let ju = new Set(Eu),
              su = this.successors(uu);
            if (su)
              for (let uu of su) ju.add(uu);
            return Array.from(ju.values())
          }
        }
        isLeaf(uu) {
          var Eu;
          let ju;
          return ju = this.isDirected() ? this.successors(uu) : this.neighbors(uu), 0 === (null != (Eu = null == ju ? void 0 : ju.length) ? Eu : 0)
        }
        filterNodes(uu) {
          let Eu = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Eu.setGraph(this.graph()), Object.entries(this._nodes).forEach((ju => {
            let [su, Uu] = ju;
            uu(su) && Eu.setNode(su, Uu)
          })), Object.values(this._edgeObjs).forEach((uu => {
            Eu.hasNode(uu.v) && Eu.hasNode(uu.w) && Eu.setEdge(uu, this.edge(uu))
          }));
          let ju = {},
            su = uu => {
              let Uu = this.parent(uu);
              return !Uu || Eu.hasNode(Uu) ? (ju[uu] = Uu, Uu) : Uu in ju ? ju[Uu] : su(Uu)
            };
          return this._isCompound && Eu.nodes().forEach((uu => Eu.setParent(uu, su(uu)))), Eu
        }
        setDefaultEdgeLabel(uu) {
          return this._defaultEdgeLabelFn = "function" != typeof uu ? () => uu : uu, this
        }
        edgeCount() {
          return this._edgeCount
        }
        edges() {
          return Object.values(this._edgeObjs)
        }
        setPath(uu, Eu) {
          return uu.reduce(((uu, ju) => (void 0 !== Eu ? this.setEdge(uu, ju, Eu) : this.setEdge(uu, ju), ju))), this
        }
        setEdge(uu, Eu, ju, su) {
          let Uu, Zu, Xu, lu, qu = !1;
          "object" == typeof uu && null !== uu && "v" in uu ? (Uu = uu.v, Zu = uu.w, Xu = uu.name, 2 === arguments.length && (lu = Eu, qu = !0)) : (Uu = uu, Zu = Eu, Xu = su, arguments.length > 2 && (lu = ju, qu = !0)), Uu = "" + Uu, Zu = "" + Zu, void 0 !== Xu && (Xu = "" + Xu);
          let Cu = bu(this._isDirected, Uu, Zu, Xu);
          if (Cu in this._edgeLabels) return qu && (this._edgeLabels[Cu] = lu), this;
          if (void 0 !== Xu && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Uu), this.setNode(Zu), this._edgeLabels[Cu] = qu ? lu : this._defaultEdgeLabelFn(Uu, Zu, Xu);
          let cu = function(uu, Eu, ju, su) {
            let Uu = "" + Eu,
              Zu = "" + ju;
            if (!uu && Uu > Zu) {
              let uu = Uu;
              Uu = Zu, Zu = uu
            }
            let Xu = {
              v: Uu,
              w: Zu
            };
            return su && (Xu.name = su), Xu
          }(this._isDirected, Uu, Zu, Xu);
          return Uu = cu.v, Zu = cu.w, Object.freeze(cu), this._edgeObjs[Cu] = cu, fu(this._preds[Zu], Uu), fu(this._sucs[Uu], Zu), this._in[Zu][Cu] = cu, this._out[Uu][Cu] = cu, this._edgeCount++, this
        }
        edge(uu, Eu, ju) {
          let su = 1 === arguments.length ? cu(this._isDirected, uu) : bu(this._isDirected, uu, Eu, ju);
          return this._edgeLabels[su]
        }
        edgeAsObj(uu, Eu, ju) {
          let su = 1 === arguments.length ? this.edge(uu) : this.edge(uu, Eu, ju);
          return "object" != typeof su || null === su ? {
            label: su
          } : su
        }
        hasEdge(uu, Eu, ju) {
          return (1 === arguments.length ? cu(this._isDirected, uu) : bu(this._isDirected, uu, Eu, ju)) in this._edgeLabels
        }
        removeEdge(uu, Eu, ju) {
          let su = 1 === arguments.length ? cu(this._isDirected, uu) : bu(this._isDirected, uu, Eu, ju),
            Uu = this._edgeObjs[su];
          if (Uu) {
            let uu = Uu.v,
              Eu = Uu.w;
            delete this._edgeLabels[su], delete this._edgeObjs[su], Cu(this._preds[Eu], uu), Cu(this._sucs[uu], Eu), delete this._in[Eu][su], delete this._out[uu][su], this._edgeCount--
          }
          return this
        }
        inEdges(uu, Eu) {
          return this.isDirected() ? this.filterEdges(this._in[uu], uu, Eu) : this.nodeEdges(uu, Eu)
        }
        outEdges(uu, Eu) {
          return this.isDirected() ? this.filterEdges(this._out[uu], uu, Eu) : this.nodeEdges(uu, Eu)
        }
        nodeEdges(uu, Eu) {
          if (uu in this._nodes) return this.filterEdges({
            ...this._in[uu],
            ...this._out[uu]
          }, uu, Eu)
        }
        _removeFromParentsChildList(uu) {
          delete this._children[this._parent[uu]][uu]
        }
        filterEdges(uu, Eu, ju) {
          if (!uu) return;
          let su = Object.values(uu);
          return ju ? su.filter((uu => uu.v === Eu && uu.w === ju || uu.v === ju && uu.w === Eu)) : su
        }
      };

    function fu(uu, Eu) {
      uu[Eu] ? uu[Eu]++ : uu[Eu] = 1
    }

    function Cu(uu, Eu) {
      void 0 !== uu[Eu] && !--uu[Eu] && delete uu[Eu]
    }

    function bu(uu, Eu, ju, su) {
      let Uu = "" + Eu,
        Zu = "" + ju;
      if (!uu && Uu > Zu) {
        let uu = Uu;
        Uu = Zu, Zu = uu
      }
      return Uu + "\x01" + Zu + "\x01" + (void 0 === su ? "\0" : su)
    }

    function cu(uu, Eu) {
      return bu(uu, Eu.v, Eu.w, Eu.name)
    }

    function Nu(uu) {
      let Eu = {
          options: {
            directed: uu.isDirected(),
            multigraph: uu.isMultigraph(),
            compound: uu.isCompound()
          },
          nodes: Ou(uu),
          edges: Yu(uu)
        },
        ju = uu.graph();
      return void 0 !== ju && (Eu.value = structuredClone(ju)), Eu
    }

    function Ou(uu) {
      return uu.nodes().map((Eu => {
        let ju = uu.node(Eu),
          su = uu.parent(Eu),
          Uu = {
            v: Eu
          };
        return void 0 !== ju && (Uu.value = ju), void 0 !== su && (Uu.parent = su), Uu
      }))
    }

    function Yu(uu) {
      return uu.edges().map((Eu => {
        let ju = uu.edge(Eu),
          su = {
            v: Eu.v,
            w: Eu.w
          };
        return void 0 !== Eu.name && (su.name = Eu.name), void 0 !== ju && (su.value = ju), su
      }))
    }

    function hu(uu) {
      let Eu = new qu(uu.options);
      return void 0 !== uu.value && Eu.setGraph(uu.value), uu.nodes.forEach((uu => {
        Eu.setNode(uu.v, uu.value), uu.parent && Eu.setParent(uu.v, uu.parent)
      })), uu.edges.forEach((uu => {
        Eu.setEdge({
          v: uu.v,
          w: uu.w,
          name: uu.name
        }, uu.value)
      })), Eu
    }
    lu({}, {
      read: () => hu,
      write: () => Nu
    });
    var Du = {};
    lu(Du, {
      CycleException: () => ku,
      bellmanFord: () => Mu,
      components: () => eu,
      dijkstra: () => wu,
      dijkstraAll: () => Ju,
      findCycles: () => au,
      floydWarshall: () => ou,
      isAcyclic: () => vu,
      postorder: () => Qu,
      preorder: () => iu,
      prim: () => Wu,
      shortestPaths: () => Su,
      tarjan: () => du,
      topsort: () => mu
    });
    var gu = () => 1;

    function Mu(uu, Eu, ju, su) {
      return function(uu, Eu, ju, su) {
        let Uu, Zu = {},
          Xu = 0,
          lu = uu.nodes(),
          qu = function(uu) {
            let Eu = Zu[uu.v],
              su = Zu[uu.w];
            if (!Eu || !su) return;
            let Xu = ju(uu);
            Eu.distance + Xu < su.distance && (Zu[uu.w] = {
              distance: Eu.distance + Xu,
              predecessor: uu.v
            }, Uu = !0)
          },
          fu = function() {
            lu.forEach((function(uu) {
              su(uu).forEach((function(Eu) {
                let ju = Eu.v === uu ? Eu.v : Eu.w,
                  su = ju === Eu.v ? Eu.w : Eu.v;
                qu({
                  v: ju,
                  w: su
                })
              }))
            }))
          };
        lu.forEach((function(uu) {
          let ju = uu === Eu ? 0 : Number.POSITIVE_INFINITY;
          Zu[uu] = {
            distance: ju,
            predecessor: ""
          }
        }));
        let Cu = lu.length;
        for (let bu = 1; bu < Cu && (Uu = !1, Xu++, fu(), Uu); bu++);
        if (Xu === Cu - 1 && (Uu = !1, fu(), Uu)) throw new Error("The graph contains a negative weight cycle");
        return Zu
      }(uu, String(Eu), ju || gu, su || function(Eu) {
        var ju;
        return null != (ju = uu.outEdges(Eu)) ? ju : []
      })
    }

    function eu(uu) {
      let Eu, ju = {},
        su = [];

      function Uu(su) {
        var Zu, Xu;
        su in ju || (ju[su] = !0, Eu.push(su), null == (Zu = uu.successors(su)) || Zu.forEach(Uu), null == (Xu = uu.predecessors(su)) || Xu.forEach(Uu))
      }
      return uu.nodes().forEach((function(uu) {
        Eu = [], Uu(uu), Eu.length && su.push(Eu)
      })), su
    }
    var Gu = class {
        constructor() {
          this._arr = [], this._keyIndices = {}
        }
        size() {
          return this._arr.length
        }
        keys() {
          return this._arr.map((uu => uu.key))
        }
        has(uu) {
          return uu in this._keyIndices
        }
        priority(uu) {
          let Eu = this._keyIndices[uu];
          if (void 0 !== Eu) return this._arr[Eu].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(uu, Eu) {
          let ju = this._keyIndices,
            su = String(uu);
          if (!(su in ju)) {
            let uu = this._arr,
              Uu = uu.length;
            return ju[su] = Uu, uu.push({
              key: su,
              priority: Eu
            }), this._decrease(Uu), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let uu = this._arr.pop();
          return delete this._keyIndices[uu.key], this._heapify(0), uu.key
        }
        decrease(uu, Eu) {
          let ju = this._keyIndices[uu];
          if (void 0 === ju) throw new Error(`Key not found: ${uu}`);
          let su = this._arr[ju].priority;
          if (Eu > su) throw new Error(`New priority is greater than current priority. Key: ${uu} Old: ${su} New: ${Eu}`);
          this._arr[ju].priority = Eu, this._decrease(ju)
        }
        _heapify(uu) {
          let Eu = this._arr,
            ju = 2 * uu,
            su = ju + 1,
            Uu = uu;
          ju < Eu.length && (Uu = Eu[ju].priority < Eu[Uu].priority ? ju : Uu, su < Eu.length && (Uu = Eu[su].priority < Eu[Uu].priority ? su : Uu), Uu !== uu && (this._swap(uu, Uu), this._heapify(Uu)))
        }
        _decrease(uu) {
          let Eu, ju = this._arr,
            su = ju[uu].priority;
          for (; 0 !== uu && (Eu = uu >> 1, !(ju[Eu].priority < su));) this._swap(uu, Eu), uu = Eu
        }
        _swap(uu, Eu) {
          let ju = this._arr,
            su = this._keyIndices,
            Uu = ju[uu],
            Zu = ju[Eu];
          ju[uu] = Zu, ju[Eu] = Uu, su[Zu.key] = uu, su[Uu.key] = Eu
        }
      },
      pu = () => 1;

    function wu(uu, Eu, ju, su) {
      return function(uu, Eu, ju, su) {
        let Uu, Zu, Xu = {},
          lu = new Gu,
          qu = function(uu) {
            let Eu = uu.v !== Uu ? uu.v : uu.w,
              su = Xu[Eu];
            if (!su) return;
            let qu = ju(uu),
              fu = Zu.distance + qu;
            if (qu < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + uu + " Weight: " + qu);
            fu < su.distance && (su.distance = fu, su.predecessor = Uu, lu.decrease(Eu, fu))
          };
        for (uu.nodes().forEach((function(uu) {
            let ju = uu === Eu ? 0 : Number.POSITIVE_INFINITY;
            Xu[uu] = {
              distance: ju,
              predecessor: ""
            }, lu.add(uu, ju)
          })); lu.size() > 0;) {
          Uu = lu.removeMin();
          let uu = Xu[Uu];
          if (!uu || uu.distance === Number.POSITIVE_INFINITY) break;
          Zu = uu, su(Uu).forEach(qu)
        }
        return Xu
      }(uu, String(Eu), ju || pu, su || function(Eu) {
        var ju;
        return null != (ju = uu.outEdges(Eu)) ? ju : []
      })
    }

    function Ju(uu, Eu, ju) {
      return uu.nodes().reduce((function(su, Uu) {
        return su[Uu] = wu(uu, Uu, Eu, ju), su
      }), {})
    }

    function du(uu) {
      let Eu = 0,
        ju = [],
        su = {},
        Uu = [];

      function Zu(Xu) {
        var lu;
        let qu = su[Xu] = {
          onStack: !0,
          lowlink: Eu,
          index: Eu++
        };
        if (ju.push(Xu), null == (lu = uu.successors(Xu)) || lu.forEach((function(uu) {
            if (uu in su) {
              let Eu = su[uu];
              null != Eu && Eu.onStack && (qu.lowlink = Math.min(qu.lowlink, Eu.index))
            } else {
              Zu(uu);
              let Eu = su[uu];
              Eu && (qu.lowlink = Math.min(qu.lowlink, Eu.lowlink))
            }
          })), qu.lowlink === qu.index) {
          let uu, Eu = [];
          do {
            uu = ju.pop();
            let Uu = su[uu];
            Uu && (Uu.onStack = !1), Eu.push(uu)
          } while (Xu !== uu);
          Uu.push(Eu)
        }
      }
      return uu.nodes().forEach((function(uu) {
        uu in su || Zu(uu)
      })), Uu
    }

    function au(uu) {
      return du(uu).filter((function(Eu) {
        var ju;
        let su = Eu[0];
        return !!su && (Eu.length > 1 || 1 === Eu.length && (null != (ju = uu.outEdges(su, su)) ? ju : []).length > 0)
      }))
    }
    var Pu = () => 1;

    function ou(uu, Eu, ju) {
      return function(uu, Eu, ju) {
        let su = {},
          Uu = uu.nodes();
        return Uu.forEach((function(uu) {
          let Zu = {};
          su[uu] = Zu, Zu[uu] = {
            distance: 0,
            predecessor: ""
          }, Uu.forEach((function(Eu) {
            uu !== Eu && (Zu[Eu] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), ju(uu).forEach((function(ju) {
            let su = ju.v === uu ? ju.w : ju.v,
              Uu = Eu(ju);
            Zu[su] = {
              distance: Uu,
              predecessor: uu
            }
          }))
        })), Uu.forEach((function(uu) {
          let Eu = su[uu];
          Eu && Uu.forEach((function(ju) {
            let Zu = su[ju];
            Zu && Uu.forEach((function(ju) {
              let su = Zu[uu],
                Uu = Eu[ju],
                Xu = Zu[ju];
              if (su && Uu && Xu) {
                let uu = su.distance + Uu.distance;
                uu < Xu.distance && (Xu.distance = uu, Xu.predecessor = Uu.predecessor)
              }
            }))
          }))
        })), su
      }(uu, Eu || Pu, ju || function(Eu) {
        var ju;
        return null != (ju = uu.outEdges(Eu)) ? ju : []
      })
    }
    var ku = class extends Error {
      constructor(uu) {
        super(uu), this.name = "CycleException"
      }
    };

    function mu(uu) {
      let Eu = {},
        ju = {},
        su = [];
      if (uu.sinks().forEach((function Uu(Zu) {
          var Xu;
          if (Zu in ju) throw new ku;
          Zu in Eu || (ju[Zu] = !0, Eu[Zu] = !0, null == (Xu = uu.predecessors(Zu)) || Xu.forEach(Uu), delete ju[Zu], su.push(Zu))
        })), Object.keys(Eu).length !== uu.nodeCount()) throw new ku;
      return su
    }

    function vu(uu) {
      try {
        mu(uu)
      } catch (Eu) {
        if (Eu instanceof ku) return !1;
        throw Eu
      }
      return !0
    }

    function Ku(uu, Eu, ju, su, Uu) {
      Array.isArray(Eu) || (Eu = [Eu]);
      let Zu = Eu => {
          var ju;
          return null != (ju = uu.isDirected() ? uu.successors(Eu) : uu.neighbors(Eu)) ? ju : []
        },
        Xu = {};
      return Eu.forEach((function(Eu) {
        if (!uu.hasNode(Eu)) throw new Error("Graph does not have node: " + Eu);
        Uu = Vu(uu, Eu, "post" === ju, Xu, Zu, su, Uu)
      })), Uu
    }

    function Vu(uu, Eu, ju, su, Uu, Zu, Xu) {
      return Eu in su || (su[Eu] = !0, ju || (Xu = Zu(Xu, Eu)), Uu(Eu).forEach((function(Eu) {
        Xu = Vu(uu, Eu, ju, su, Uu, Zu, Xu)
      })), ju && (Xu = Zu(Xu, Eu))), Xu
    }

    function ru(uu, Eu, ju) {
      return Ku(uu, Eu, ju, (function(uu, Eu) {
        return uu.push(Eu), uu
      }), [])
    }

    function Qu(uu, Eu) {
      return ru(uu, Eu, "post")
    }

    function iu(uu, Eu) {
      return ru(uu, Eu, "pre")
    }

    function Wu(uu, Eu) {
      var ju;
      let su, Uu = new qu,
        Zu = {},
        Xu = new Gu;

      function lu(uu) {
        let ju = uu.v === su ? uu.w : uu.v,
          Uu = Xu.priority(ju);
        if (void 0 !== Uu) {
          let lu = Eu(uu);
          lu < Uu && (Zu[ju] = su, Xu.decrease(ju, lu))
        }
      }
      if (0 === uu.nodeCount()) return Uu;
      uu.nodes().forEach((function(uu) {
        Xu.add(uu, Number.POSITIVE_INFINITY), Uu.setNode(uu)
      }));
      let fu = uu.nodes()[0];
      void 0 !== fu && Xu.decrease(fu, 0);
      let Cu = !1;
      for (; Xu.size() > 0;) {
        if (su = Xu.removeMin(), su in Zu) Uu.setEdge(su, Zu[su]);
        else {
          if (Cu) throw new Error("Input graph is not connected: " + uu);
          Cu = !0
        }
        null == (ju = uu.nodeEdges(su)) || ju.forEach(lu)
      }
      return Uu
    }

    function Su(uu, Eu, ju, su) {
      return function(uu, Eu, ju, su) {
        if (void 0 === ju) return wu(uu, Eu, ju, su);
        let Uu = !1,
          Zu = uu.nodes();
        for (let Xu = 0; Xu < Zu.length; Xu++) {
          let lu = Zu[Xu];
          if (void 0 === lu) continue;
          let qu = su(lu);
          for (let uu = 0; uu < qu.length; uu++) {
            let Eu = qu[uu];
            if (!Eu) continue;
            let su = Eu.v === lu ? Eu.v : Eu.w;
            ju({
              v: su,
              w: su === Eu.v ? Eu.w : Eu.v
            }) < 0 && (Uu = !0)
          }
          if (Uu) return Mu(uu, Eu, ju, su)
        }
        return wu(uu, Eu, ju, su)
      }(uu, Eu, ju, null != su ? su : Eu => {
        var ju;
        return null != (ju = uu.outEdges(Eu)) ? ju : []
      })
    }
    var Iu = qu;

    function Fu(uu, Eu, ju, su) {
      let Uu = su;
      for (; uu.hasNode(Uu);) Uu = Ru(su);
      return ju.dummy = Eu, uu.setNode(Uu, ju), Uu
    }

    function Bu(uu) {
      let Eu = new Iu({
        multigraph: uu.isMultigraph()
      }).setGraph(uu.graph());
      return uu.nodes().forEach((ju => {
        uu.children(ju).length || Eu.setNode(ju, uu.node(ju))
      })), uu.edges().forEach((ju => {
        Eu.setEdge(ju, uu.edge(ju))
      })), Eu
    }

    function Lu(uu, Eu) {
      let ju, su, Uu = uu.x,
        Zu = uu.y,
        Xu = Eu.x - Uu,
        lu = Eu.y - Zu,
        qu = uu.width / 2,
        fu = uu.height / 2;
      if (!Xu && !lu) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(lu) * qu > Math.abs(Xu) * fu ? (lu < 0 && (fu = -fu), ju = fu * Xu / lu, su = fu) : (Xu < 0 && (qu = -qu), ju = qu, su = qu * lu / Xu), {
        x: Uu + ju,
        y: Zu + su
      }
    }

    function tu(uu) {
      let Eu = uE(Au(uu) + 1).map((() => []));
      return uu.nodes().forEach((ju => {
        let su = uu.node(ju),
          Uu = su.rank;
        void 0 !== Uu && (Eu[Uu] || (Eu[Uu] = []), Eu[Uu][su.order] = ju)
      })), Eu
    }

    function xu(uu, Eu, ju, su) {
      let Uu = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Uu.rank = ju, Uu.order = su), Fu(uu, "border", Uu, Eu)
    }
    var Tu = 65535;

    function Hu(uu, Eu) {
      if (Eu.length > Tu) {
        let ju = function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tu,
            ju = [];
          for (let su = 0; su < uu.length; su += Eu) {
            let Uu = uu.slice(su, su + Eu);
            ju.push(Uu)
          }
          return ju
        }(Eu);
        return uu(...ju.map((Eu => uu(...Eu))))
      }
      return uu(...Eu)
    }

    function Au(uu) {
      let Eu = uu.nodes().map((Eu => {
        let ju = uu.node(Eu).rank;
        return void 0 === ju ? Number.MIN_VALUE : ju
      }));
      return Hu(Math.max, Eu)
    }

    function nu(uu, Eu) {
      let ju = Date.now();
      try {
        return Eu()
      } finally {
        console.log(uu + " time: " + (Date.now() - ju) + "ms")
      }
    }

    function yu(uu, Eu) {
      return Eu()
    }
    var zu = 0;

    function Ru(uu) {
      return uu + "" + ++zu
    }

    function uE(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Eu && (Eu = uu, uu = 0);
      let su = uu => uu < Eu;
      ju < 0 && (su = uu => Eu < uu);
      let Uu = [];
      for (let Zu = uu; su(Zu); Zu += ju) Uu.push(Zu);
      return Uu
    }

    function EE(uu, Eu) {
      let ju = {};
      for (let su of Eu) void 0 !== uu[su] && (ju[su] = uu[su]);
      return ju
    }

    function jE(uu, Eu) {
      let ju;
      return ju = "string" == typeof Eu ? uu => uu[Eu] : Eu, Object.entries(uu).reduce(((uu, Eu) => {
        let [su, Uu] = Eu;
        return uu[su] = ju(Uu, su), uu
      }), {})
    }
    var sE = "\0";

    function UE(uu, Eu, ju) {
      var su, Uu, Zu, Xu, lu, qu;
      if (!(uu && Eu && ju && "edge" === Eu.dummy && "edge" === ju.dummy && Eu.edgeObj && ju.edgeObj && uu[Eu.edgeObj.v] && uu[ju.edgeObj.v] && uu[Eu.edgeObj.w] && uu[ju.edgeObj.w])) return 0;
      let fu = !0;
      Eu.edgeObj.w === ju.edgeObj.w && (fu = !1);
      let Cu = fu ? null != (Uu = null == (su = uu[Eu.edgeObj.v]) ? void 0 : su.rank) ? Uu : NaN : null != (Xu = null == (Zu = uu[Eu.edgeObj.w]) ? void 0 : Zu.rank) ? Xu : NaN,
        bu = Object.entries(uu).find((uu => {
          var ju, su;
          return (null == (ju = uu[1].edgeObj) ? void 0 : ju.v) === Eu.edgeObj.v && (null == (su = uu[1].edgeObj) ? void 0 : su.w) === Eu.edgeObj.w && uu[1].rank === Cu
        })),
        cu = Object.entries(uu).find((uu => {
          var Eu, su;
          return (null == (Eu = uu[1].edgeObj) ? void 0 : Eu.v) === ju.edgeObj.v && (null == (su = uu[1].edgeObj) ? void 0 : su.w) === ju.edgeObj.w && uu[1].rank === Cu
        }));
      if (!bu || !cu) return 0;
      let Nu = null != (lu = bu[1].order) ? lu : NaN,
        Ou = null != (qu = cu[1].order) ? qu : NaN;
      return isNaN(Nu - Ou) ? 0 : Nu - Ou
    }
    var ZE = "3.1.1";

    function XE(uu) {
      uu._prev._next = uu._next, uu._next._prev = uu._prev, delete uu._next, delete uu._prev
    }

    function lE(uu, Eu) {
      if ("_next" !== uu && "_prev" !== uu) return Eu
    }
    var qE = class {
        constructor() {
          Uu(this, "_sentinel");
          let uu = {};
          uu._next = uu._prev = uu, this._sentinel = uu
        }
        dequeue() {
          let uu = this._sentinel,
            Eu = uu._prev;
          if (Eu !== uu) return XE(Eu), Eu
        }
        enqueue(uu) {
          let Eu = this._sentinel;
          uu._prev && uu._next && XE(uu), uu._next = Eu._next, Eu._next._prev = uu, Eu._next = uu, uu._prev = Eu
        }
        toString() {
          let uu = [],
            Eu = this._sentinel,
            ju = Eu._prev;
          for (; ju !== Eu;) uu.push(JSON.stringify(ju, lE)), ju = ju._prev;
          return "[" + uu.join(", ") + "]"
        }
      },
      fE = () => 1;

    function CE(uu, Eu) {
      if (uu.nodeCount() <= 1) return [];
      let ju = function(uu, Eu) {
        let ju = new Iu,
          su = 0,
          Uu = 0;
        uu.nodes().forEach((uu => {
          ju.setNode(uu, {
            v: uu,
            in: 0,
            out: 0
          })
        })), uu.edges().forEach((uu => {
          let Zu = ju.edge(uu.v, uu.w) || 0,
            Xu = Eu(uu),
            lu = Zu + Xu;
          ju.setEdge(uu.v, uu.w, lu);
          let qu = ju.node(uu.v),
            fu = ju.node(uu.w);
          Uu = Math.max(Uu, qu.out += Xu), su = Math.max(su, fu.in += Xu)
        }));
        let Zu = function(uu) {
            let Eu = [];
            for (let ju = 0; ju < uu; ju++) Eu.push(ju);
            return Eu
          }(Uu + su + 3).map((() => new qE)),
          Xu = su + 1;
        return ju.nodes().forEach((uu => {
          cE(Zu, Xu, ju.node(uu))
        })), {
          graph: ju,
          buckets: Zu,
          zeroIdx: Xu
        }
      }(uu, Eu || fE);
      return function(uu, Eu, ju) {
        var su;
        let Uu, Zu = [],
          Xu = Eu[Eu.length - 1],
          lu = Eu[0];
        for (; uu.nodeCount();) {
          for (; Uu = lu.dequeue();) bE(uu, Eu, ju, Uu);
          for (; Uu = Xu.dequeue();) bE(uu, Eu, ju, Uu);
          if (uu.nodeCount())
            for (let Xu = Eu.length - 2; Xu > 0; --Xu)
              if (Uu = null == (su = Eu[Xu]) ? void 0 : su.dequeue(), Uu) {
                Zu = Zu.concat(bE(uu, Eu, ju, Uu, !0) || []);
                break
              }
        }
        return Zu
      }(ju.graph, ju.buckets, ju.zeroIdx).flatMap((Eu => uu.outEdges(Eu.v, Eu.w) || []))
    }

    function bE(uu, Eu, ju, su, Uu) {
      let Zu = [],
        Xu = Uu ? Zu : void 0;
      return (uu.inEdges(su.v) || []).forEach((su => {
        let Xu = uu.edge(su),
          lu = uu.node(su.v);
        Uu && Zu.push({
          v: su.v,
          w: su.w
        }), lu.out -= Xu, cE(Eu, ju, lu)
      })), (uu.outEdges(su.v) || []).forEach((su => {
        let Uu = uu.edge(su),
          Zu = su.w,
          Xu = uu.node(Zu);
        Xu.in -= Uu, cE(Eu, ju, Xu)
      })), uu.removeNode(su.v), Xu
    }

    function cE(uu, Eu, ju) {
      var su, Uu, Zu;
      ju.out ? ju.in ? null == (Zu = uu[ju.out - ju.in + Eu]) || Zu.enqueue(ju) : null == (Uu = uu[uu.length - 1]) || Uu.enqueue(ju) : null == (su = uu[0]) || su.enqueue(ju)
    }

    function NE(uu, Eu) {
      var ju;
      ("greedy" === uu.graph().acyclicer ? CE(uu, (ju = uu, uu => ju.edge(uu).weight)) : function(uu, Eu) {
        let ju = [],
          su = {},
          Uu = {};

        function Zu(Eu) {
          Object.hasOwn(Uu, Eu) || (Uu[Eu] = !0, su[Eu] = !0, uu.outEdges(Eu).forEach((uu => {
            Object.hasOwn(su, uu.w) ? ju.push(uu) : Zu(uu.w)
          })), delete su[Eu])
        }

        function Xu(Zu) {
          var lu;
          Object.hasOwn(Uu, Zu) || (Uu[Zu] = !0, su[Zu] = !0, null == (lu = uu.outEdges(Zu)) || lu.forEach((Uu => {
            var lu, qu;
            Object.hasOwn(su, Uu.w) || (null == (lu = Eu.node(Zu)) ? void 0 : lu.rank) > (null == (qu = Eu.node(Uu.w)) ? void 0 : qu.rank) && function(uu, Eu, ju) {
              let su = new Set;

              function Uu(Eu) {
                var Zu;
                if (uu.sources().includes(Eu)) return !0;
                su.add(Eu);
                for (let Xu of null != (Zu = uu.inEdges(Eu)) ? Zu : [])
                  if ((Xu.v !== ju.v || Xu.w !== ju.w) && !su.has(Xu.v) && Uu(Xu.v)) return !0;
                return !1
              }
              return Uu(Eu)
            }(uu, Uu.w, Uu) ? ju.push(Uu) : Xu(Uu.w)
          })), delete su[Zu])
        }
        let lu = Zu;
        return Eu && "function" == typeof Eu.node && (lu = Xu), uu.sources().forEach(lu), uu.nodes().forEach(lu), ju
      }(uu, null != Eu ? Eu : null)).forEach((Eu => {
        let ju = uu.edge(Eu);
        uu.removeEdge(Eu), ju.forwardName = Eu.name, ju.reversed = !0, uu.setEdge(Eu.w, Eu.v, ju, Ru("rev"))
      }))
    }

    function OE(uu) {
      uu.graph().dummyChains = [], uu.edges().forEach((Eu => function(uu, Eu) {
        let ju, su, Uu, Zu = Eu.v,
          Xu = uu.node(Zu).rank,
          lu = Eu.w,
          qu = uu.node(lu).rank,
          fu = Eu.name,
          Cu = uu.edge(Eu),
          bu = Cu.labelRank;
        if (qu === Xu + 1) return;
        for (uu.removeEdge(Eu), Uu = 0, ++Xu; Xu < qu; ++Uu, ++Xu) Cu.points = [], su = {
          width: 0,
          height: 0,
          edgeLabel: Cu,
          edgeObj: Eu,
          rank: Xu
        }, ju = Fu(uu, "edge", su, "_d"), Xu === bu && (su.width = Cu.width, su.height = Cu.height, su.dummy = "edge-label", su.labelpos = Cu.labelpos), uu.setEdge(Zu, ju, {
          weight: Cu.weight
        }, fu), 0 === Uu && uu.graph().dummyChains.push(ju), Zu = ju;
        uu.setEdge(Zu, lu, {
          weight: Cu.weight
        }, fu)
      }(uu, Eu)))
    }

    function YE(uu) {
      let Eu = {};
      uu.sources().forEach((function ju(su) {
        let Uu = uu.node(su);
        if (Object.hasOwn(Eu, su)) return Uu.rank;
        Eu[su] = !0;
        let Zu = uu.outEdges(su),
          Xu = Zu ? Zu.map((Eu => null == Eu ? Number.POSITIVE_INFINITY : ju(Eu.w) - uu.edge(Eu).minlen)) : [],
          lu = Hu(Math.min, Xu);
        return lu === Number.POSITIVE_INFINITY && (lu = 0), Uu.rank = lu
      }))
    }

    function hE(uu, Eu) {
      return uu.node(Eu.w).rank - uu.node(Eu.v).rank - uu.edge(Eu).minlen
    }
    var DE = function(uu) {
      let Eu = new Iu({
          directed: !1
        }),
        ju = uu.nodes();
      if (0 === ju.length) throw new Error("Graph must have at least one node");
      let su, Uu, Zu = ju[0],
        Xu = uu.nodeCount();
      for (Eu.setNode(Zu, {}); gE(Eu, uu) < Xu && (su = ME(Eu, uu), su);) Uu = Eu.hasNode(su.v) ? hE(uu, su) : -hE(uu, su), eE(Eu, uu, Uu);
      return Eu
    };

    function gE(uu, Eu) {
      return uu.nodes().forEach((function ju(su) {
        let Uu = Eu.nodeEdges(su);
        Uu && Uu.forEach((Uu => {
          let Zu = Uu.v,
            Xu = su === Zu ? Uu.w : Zu;
          !uu.hasNode(Xu) && !hE(Eu, Uu) && (uu.setNode(Xu, {}), uu.setEdge(su, Xu, {}), ju(Xu))
        }))
      })), uu.nodeCount()
    }

    function ME(uu, Eu) {
      return Eu.edges().reduce(((ju, su) => {
        let Uu = Number.POSITIVE_INFINITY;
        return uu.hasNode(su.v) !== uu.hasNode(su.w) && (Uu = hE(Eu, su)), Uu < ju[0] ? [Uu, su] : ju
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function eE(uu, Eu, ju) {
      uu.nodes().forEach((uu => Eu.node(uu).rank += ju))
    }
    var {
      preorder: GE,
      postorder: pE
    } = Du, wE = JE;

    function JE(uu) {
      uu = function(uu) {
        let Eu = (new Iu).setGraph(uu.graph());
        return uu.nodes().forEach((ju => Eu.setNode(ju, uu.node(ju)))), uu.edges().forEach((ju => {
          let su = Eu.edge(ju.v, ju.w) || {
              weight: 0,
              minlen: 1
            },
            Uu = uu.edge(ju);
          Eu.setEdge(ju.v, ju.w, {
            weight: su.weight + Uu.weight,
            minlen: Math.max(su.minlen, Uu.minlen)
          })
        })), Eu
      }(uu), YE(uu);
      let Eu, ju, su = DE(uu);
      for (PE(su), dE(su, uu); Eu = kE(su);) ju = mE(su, uu, Eu), vE(su, uu, Eu, ju)
    }

    function dE(uu, Eu) {
      let ju = pE(uu, uu.nodes());
      ju = ju.slice(0, ju.length - 1), ju.forEach((ju => function(uu, Eu, ju) {
        let su = uu.node(ju).parent,
          Uu = uu.edge(ju, su);
        Uu.cutvalue = aE(uu, Eu, ju)
      }(uu, Eu, ju)))
    }

    function aE(uu, Eu, ju) {
      let su = uu.node(ju).parent,
        Uu = !0,
        Zu = Eu.edge(ju, su),
        Xu = 0;
      Zu || (Uu = !1, Zu = Eu.edge(su, ju)), Xu = Zu.weight;
      let lu = Eu.nodeEdges(ju);
      return lu && lu.forEach((Zu => {
        let lu = Zu.v === ju,
          qu = lu ? Zu.w : Zu.v;
        if (qu !== su) {
          let su = lu === Uu,
            fu = Eu.edge(Zu).weight;
          if (Xu += su ? fu : -fu, function(uu, Eu, ju) {
              return uu.hasEdge(Eu, ju)
            }(uu, ju, qu)) {
            let Eu = uu.edge(ju, qu).cutvalue;
            Xu += su ? -Eu : Eu
          }
        }
      })), Xu
    }

    function PE(uu, Eu) {
      arguments.length < 2 && (Eu = uu.nodes()[0]), oE(uu, {}, 1, Eu)
    }

    function oE(uu, Eu, ju, su, Uu) {
      let Zu = ju,
        Xu = uu.node(su);
      Eu[su] = !0;
      let lu = uu.neighbors(su);
      return lu && lu.forEach((Uu => {
        Object.hasOwn(Eu, Uu) || (ju = oE(uu, Eu, ju, Uu, su))
      })), Xu.low = Zu, Xu.lim = ju++, Uu ? Xu.parent = Uu : delete Xu.parent, ju
    }

    function kE(uu) {
      return uu.edges().find((Eu => uu.edge(Eu).cutvalue < 0))
    }

    function mE(uu, Eu, ju) {
      let su = ju.v,
        Uu = ju.w;
      Eu.hasEdge(su, Uu) || (su = ju.w, Uu = ju.v);
      let Zu = uu.node(su),
        Xu = uu.node(Uu),
        lu = Zu,
        qu = !1;
      return Zu.lim > Xu.lim && (lu = Xu, qu = !0), Eu.edges().filter((Eu => qu === KE(uu, uu.node(Eu.v), lu) && qu !== KE(uu, uu.node(Eu.w), lu))).reduce(((uu, ju) => hE(Eu, ju) < hE(Eu, uu) ? ju : uu))
    }

    function vE(uu, Eu, ju, su) {
      let Uu = ju.v,
        Zu = ju.w;
      uu.removeEdge(Uu, Zu), uu.setEdge(su.v, su.w, {}), PE(uu), dE(uu, Eu),
        function(uu, Eu) {
          let ju = uu.nodes().find((Eu => !uu.node(Eu).parent));
          if (!ju) return;
          let su = GE(uu, [ju]);
          su = su.slice(1), su.forEach((ju => {
            let su = uu.node(ju).parent,
              Uu = Eu.edge(ju, su),
              Zu = !1;
            Uu || (Uu = Eu.edge(su, ju), Zu = !0), Eu.node(ju).rank = Eu.node(su).rank + (Zu ? Uu.minlen : -Uu.minlen)
          }))
        }(uu, Eu)
    }

    function KE(uu, Eu, ju) {
      return ju.low <= Eu.lim && Eu.lim <= ju.lim
    }
    JE.initLowLimValues = PE, JE.initCutValues = dE, JE.calcCutValue = aE, JE.leaveEdge = kE, JE.enterEdge = mE, JE.exchangeEdges = vE;
    var VE = function(uu) {
      let Eu = uu.graph().ranker;
      if ("function" == typeof Eu) return Eu(uu);
      switch (Eu) {
        case "network-simplex":
        default:
          QE(uu);
          break;
        case "tight-tree":
          ! function(uu) {
            YE(uu), DE(uu)
          }(uu);
          break;
        case "longest-path":
          rE(uu);
        case "none":
      }
    };
    var rE = YE;

    function QE(uu) {
      wE(uu)
    }
    var iE = function(uu) {
      let Eu = function(uu) {
          let Eu = {},
            ju = 0;

          function su(Uu) {
            let Zu = ju;
            uu.children(Uu).forEach(su), Eu[Uu] = {
              low: Zu,
              lim: ju++
            }
          }
          return uu.children(sE).forEach(su), Eu
        }(uu),
        ju = uu.graph();
      if (!Array.isArray(ju.dummyChains)) return;
      ju.dummyChains.forEach((ju => {
        let su = uu.node(ju),
          Uu = su.edgeObj,
          Zu = function(uu, Eu, ju, su) {
            let Uu, Zu = [],
              Xu = [],
              lu = Math.min(Eu[ju].low, Eu[su].low),
              qu = Math.max(Eu[ju].lim, Eu[su].lim);
            Uu = ju;
            do {
              Uu = uu.parent(Uu), Zu.push(Uu)
            } while (Uu && (Eu[Uu].low > lu || qu > Eu[Uu].lim));
            let fu = Uu,
              Cu = su;
            for (;
              (Cu = uu.parent(Cu)) !== fu;) Xu.push(Cu);
            return {
              path: Zu.concat(Xu.reverse()),
              lca: fu
            }
          }(uu, Eu, Uu.v, Uu.w),
          Xu = Zu.path,
          lu = Zu.lca,
          qu = 0,
          fu = Xu[qu],
          Cu = !0;
        for (; ju !== Uu.w;) {
          if (su = uu.node(ju), Cu) {
            for (;
              (fu = Xu[qu]) !== lu && uu.node(fu).maxRank < su.rank;) qu++;
            fu === lu && (Cu = !1)
          }
          if (!Cu) {
            for (; qu < Xu.length - 1 && uu.node(Xu[qu + 1]).minRank <= su.rank;) qu++;
            fu = Xu[qu]
          }
          void 0 !== fu && uu.setParent(ju, fu), ju = uu.successors(ju)[0]
        }
      }))
    };

    function WE(uu) {
      let Eu = Fu(uu, "root", {}, "_root"),
        ju = function(uu) {
          let Eu = {};

          function ju(su, Uu) {
            let Zu = uu.children(su);
            Zu && Zu.length && Zu.forEach((uu => ju(uu, Uu + 1))), Eu[su] = Uu
          }
          return uu.children(sE).forEach((uu => ju(uu, 1))), Eu
        }(uu),
        su = Object.values(ju),
        Uu = Hu(Math.max, su) - 1,
        Zu = 2 * Uu + 1;
      uu.graph().nestingRoot = Eu, uu.edges().forEach((Eu => uu.edge(Eu).minlen *= Zu));
      let Xu = function(uu) {
        return uu.edges().reduce(((Eu, ju) => Eu + uu.edge(ju).weight), 0)
      }(uu) + 1;
      uu.children(sE).forEach((su => {
        SE(uu, Eu, Zu, Xu, Uu, ju, su)
      })), uu.graph().nodeRankFactor = Zu
    }

    function SE(uu, Eu, ju, su, Uu, Zu, Xu) {
      var lu;
      let qu = uu.children(Xu);
      if (!qu.length) return void(Xu !== Eu && uu.setEdge(Eu, Xu, {
        weight: 0,
        minlen: ju
      }));
      let fu = xu(uu, "_bt"),
        Cu = xu(uu, "_bb"),
        bu = uu.node(Xu);
      uu.setParent(fu, Xu), bu.borderTop = fu, uu.setParent(Cu, Xu), bu.borderBottom = Cu, qu.forEach((lu => {
        var qu;
        SE(uu, Eu, ju, su, Uu, Zu, lu);
        let bu = uu.node(lu),
          cu = bu.borderTop ? bu.borderTop : lu,
          Nu = bu.borderBottom ? bu.borderBottom : lu,
          Ou = bu.borderTop ? su : 2 * su,
          Yu = cu !== Nu ? 1 : Uu - (null != (qu = Zu[Xu]) ? qu : 0) + 1;
        uu.setEdge(fu, cu, {
          weight: Ou,
          minlen: Yu,
          nestingEdge: !0
        }), uu.setEdge(Nu, Cu, {
          weight: Ou,
          minlen: Yu,
          nestingEdge: !0
        })
      })), uu.parent(Xu) || uu.setEdge(Eu, fu, {
        weight: 0,
        minlen: Uu + (null != (lu = Zu[Xu]) ? lu : 0)
      })
    }
    var IE = function(uu) {
      uu.children(sE).forEach((function Eu(ju) {
        let su = uu.children(ju),
          Uu = uu.node(ju);
        if (su.length && su.forEach(Eu), Uu && Object.hasOwn(Uu, "minRank")) {
          Uu.borderLeft = [], Uu.borderRight = [];
          for (let Eu = Uu.minRank, su = Uu.maxRank + 1; Eu < su; ++Eu) FE(uu, "borderLeft", "_bl", ju, Uu, Eu), FE(uu, "borderRight", "_br", ju, Uu, Eu)
        }
      }))
    };

    function FE(uu, Eu, ju, su, Uu, Zu) {
      let Xu = {
          width: 0,
          height: 0,
          rank: Zu,
          borderType: Eu
        },
        lu = Uu[Eu][Zu - 1],
        qu = Fu(uu, "border", Xu, ju);
      Uu[Eu][Zu] = qu, uu.setParent(qu, su), lu && uu.setEdge(lu, qu, {
        weight: 1
      })
    }

    function BE(uu) {
      var Eu;
      let ju = null == (Eu = uu.graph().rankdir) ? void 0 : Eu.toLowerCase();
      ("bt" === ju || "rl" === ju) && function(uu) {
        uu.nodes().forEach((Eu => xE(uu.node(Eu)))), uu.edges().forEach((Eu => {
          var ju;
          let su = uu.edge(Eu);
          null == (ju = su.points) || ju.forEach(xE), Object.hasOwn(su, "y") && xE(su)
        }))
      }(uu), ("lr" === ju || "rl" === ju) && (function(uu) {
        uu.nodes().forEach((Eu => TE(uu.node(Eu)))), uu.edges().forEach((Eu => {
          var ju;
          let su = uu.edge(Eu);
          null == (ju = su.points) || ju.forEach(TE), Object.hasOwn(su, "x") && TE(su)
        }))
      }(uu), LE(uu))
    }

    function LE(uu) {
      uu.nodes().forEach((Eu => tE(uu.node(Eu)))), uu.edges().forEach((Eu => tE(uu.edge(Eu))))
    }

    function tE(uu) {
      let Eu = uu.width;
      uu.width = uu.height, uu.height = Eu
    }

    function xE(uu) {
      uu.y = -uu.y
    }

    function TE(uu) {
      let Eu = uu.x;
      uu.x = uu.y, uu.y = Eu
    }

    function HE(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        ju = {},
        su = uu.nodes().filter((Eu => !uu.children(Eu).length)),
        Uu = su.map((Eu => uu.node(Eu).rank)),
        Zu = uE(Hu(Math.max, Uu) + 1).map((() => []));
      return su.sort(((Eu, ju) => uu.node(Eu).rank - uu.node(ju).rank)).forEach((function su(Uu) {
        if (ju[Uu]) return;
        ju[Uu] = !0;
        let Xu = uu.node(Uu);
        Zu[Xu.rank].push(Uu);
        let lu = uu.successors(Uu);
        lu && [...lu].sort(((ju, su) => function(ju, su) {
          let Uu = uu.node(ju),
            Zu = uu.node(su);
          return UE(Eu, Uu, Zu)
        }(ju, su))).forEach(su)
      })), Zu
    }

    function AE(uu, Eu) {
      let ju = 0;
      for (let su = 1; su < Eu.length; ++su) ju += nE(uu, Eu[su - 1], Eu[su]);
      return ju
    }

    function nE(uu, Eu, ju) {
      let su = function(uu, Eu) {
          return uu.reduce(((uu, ju, su) => (uu[ju] = Eu[su], uu)), {})
        }(ju, ju.map(((uu, Eu) => Eu))),
        Uu = Eu.flatMap((Eu => {
          let ju = uu.outEdges(Eu);
          return ju ? ju.map((Eu => ({
            pos: su[Eu.w],
            weight: uu.edge(Eu).weight
          }))).sort(((uu, Eu) => uu.pos - Eu.pos)) : []
        })),
        Zu = 1;
      for (; Zu < ju.length;) Zu <<= 1;
      let Xu = 2 * Zu - 1;
      Zu -= 1;
      let lu = new Array(Xu).fill(0),
        qu = 0;
      return Uu.forEach((uu => {
        let Eu = uu.pos + Zu;
        lu[Eu] += uu.weight;
        let ju = 0;
        for (; Eu > 0;) Eu % 2 && (ju += lu[Eu + 1]), Eu = Eu - 1 >> 1, lu[Eu] += uu.weight;
        qu += uu.weight * ju
      })), qu
    }

    function yE(uu, Eu) {
      let ju = {};
      return uu.forEach(((uu, Eu) => {
          let su = {
            indegree: 0,
            in: [],
            out: [],
            vs: [uu.v],
            i: Eu
          };
          void 0 !== uu.barycenter && (su.barycenter = uu.barycenter, su.weight = uu.weight), ju[uu.v] = su
        })), Eu.edges().forEach((uu => {
          let Eu = ju[uu.v],
            su = ju[uu.w];
          void 0 !== Eu && void 0 !== su && (su.indegree++, Eu.out.push(su))
        })),
        function(uu) {
          let Eu = [];

          function ju(uu) {
            return Eu => {
              Eu.merged || (void 0 === Eu.barycenter || void 0 === uu.barycenter || Eu.barycenter >= uu.barycenter) && function(uu, Eu) {
                let ju = 0,
                  su = 0;
                uu.weight && (ju += uu.barycenter * uu.weight, su += uu.weight), Eu.weight && (ju += Eu.barycenter * Eu.weight, su += Eu.weight), uu.vs = Eu.vs.concat(uu.vs), uu.barycenter = ju / su, uu.weight = su, uu.i = Math.min(Eu.i, uu.i), Eu.merged = !0
              }(uu, Eu)
            }
          }

          function su(Eu) {
            return ju => {
              ju.in.push(Eu), 0 === --ju.indegree && uu.push(ju)
            }
          }
          for (; uu.length;) {
            let Uu = uu.pop();
            Eu.push(Uu), Uu.in.reverse().forEach(ju(Uu)), Uu.out.forEach(su(Uu))
          }
          return Eu.filter((uu => !uu.merged)).map((uu => EE(uu, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(ju).filter((uu => !uu.indegree)))
    }

    function zE(uu, Eu, ju, su, Uu) {
      let Zu = {},
        Xu = null,
        lu = null,
        qu = Uu;
      "boolean" == typeof Eu ? (qu = Eu, Zu = {}) : Eu && (Zu = Eu, Xu = null != ju ? ju : null, lu = null != su ? su : null);
      let fu = function(uu, Eu) {
          let ju = {
            lhs: [],
            rhs: []
          };
          return uu.forEach((uu => {
            Eu(uu) ? ju.lhs.push(uu) : ju.rhs.push(uu)
          })), ju
        }(uu, (uu => Object.hasOwn(uu, "barycenter"))),
        Cu = fu.lhs,
        bu = fu.rhs.sort(((uu, Eu) => Eu.i - uu.i)),
        cu = [],
        Nu = 0,
        Ou = 0,
        Yu = 0;
      Cu.sort(function(uu, Eu, ju) {
        return (su, Uu) => {
          if (su.barycenter < Uu.barycenter) return -1;
          if (su.barycenter > Uu.barycenter) return 1;
          if (uu && ("string" == typeof su.vs[0] || "string" == typeof Uu.vs[0])) {
            let ju = uu.node(su.vs[0]),
              Zu = uu.node(Uu.vs[0]),
              Xu = UE(Eu, ju, Zu);
            if (0 !== Xu) return Xu
          }
          return ju ? Uu.i - su.i : su.i - Uu.i
        }
      }(lu, Xu, !!qu));
      for (let [Du, gu] of Object.entries(Zu)) {
        let uu = Cu.findIndex((uu => uu.vs[0] === Du));
        Cu.splice(uu + 1, 0, gu)
      }
      Yu = RE(cu, bu, Yu), Cu.forEach((uu => {
        Yu += uu.vs.length, cu.push(uu.vs), Nu += uu.barycenter * uu.weight, Ou += uu.weight, Yu = RE(cu, bu, Yu)
      }));
      let hu = {
        vs: cu.flat(1)
      };
      return Ou && (hu.barycenter = Nu / Ou, hu.weight = Ou), hu
    }

    function RE(uu, Eu, ju) {
      let su;
      for (; Eu.length && (su = Eu[Eu.length - 1]).i <= ju;) Eu.pop(), uu.push(su.vs), ju++;
      return ju
    }

    function uj(uu, Eu, ju, su, Uu) {
      var Zu, Xu, lu, qu, fu, Cu, bu, cu, Nu, Ou, Yu;
      let hu = null,
        Du = Uu;
      "boolean" == typeof su ? (Du = su, hu = null) : void 0 !== su && (hu = su);
      let gu = uu.children(Eu),
        Mu = uu.node(Eu),
        eu = Mu ? Mu.borderLeft : void 0,
        Gu = Mu ? Mu.borderRight : void 0,
        pu = {};
      eu && (gu = gu.filter((uu => uu !== eu && uu !== Gu)));
      let wu = function(uu) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Eu => {
          let ju = uu.inEdges(Eu);
          if (!ju || !ju.length) return {
            v: Eu
          };
          {
            let su = ju.reduce(((Eu, ju) => {
              let su = uu.edge(ju),
                Uu = uu.node(ju.v);
              return {
                sum: Eu.sum + su.weight * Uu.order,
                weight: Eu.weight + su.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Eu,
              barycenter: su.sum / su.weight,
              weight: su.weight
            }
          }
        }))
      }(uu, gu);
      wu.forEach((Eu => {
        if (uu.children(Eu.v).length) {
          let {
            result: su
          } = uj(uu, Eu.v, ju, hu, Du);
          pu[Eu.v] = su, Object.hasOwn(su, "barycenter") && function(uu, Eu) {
            void 0 !== uu.barycenter ? (uu.barycenter = (uu.barycenter * uu.weight + Eu.barycenter * Eu.weight) / (uu.weight + Eu.weight), uu.weight += Eu.weight) : (uu.barycenter = Eu.barycenter, uu.weight = Eu.weight)
          }(Eu, su)
        }
      }));
      let Ju = yE(wu, ju);
      ! function(uu, Eu) {
        uu.forEach((uu => {
          uu.vs = uu.vs.flatMap((uu => Eu[uu] ? Eu[uu].vs : uu))
        }))
      }(Ju, pu);
      let du = {},
        au = !1;
      for (let ou = 0; ou < Ju.length; ou++)
        for (let Eu = ou + 1; Eu < Ju.length; Eu++)
          if (Ju[ou] && Ju[Eu] && null != (Zu = Ju[ou]) && Zu.barycenter && null != (Xu = Ju[Eu]) && Xu.barycenter && (null == (lu = Ju[ou]) ? void 0 : lu.barycenter) === Ju[Eu].barycenter) {
            let ju = null != (fu = null == (qu = Ju[ou]) ? void 0 : qu.vs[0]) ? fu : "",
              su = null != (bu = null == (Cu = Ju[Eu]) ? void 0 : Cu.vs[0]) ? bu : "",
              Uu = uu.node(ju),
              Zu = uu.node(su);
            if ("edge" === Uu.dummy && "edge" === Zu.dummy && (null == (cu = Uu.edgeObj) ? void 0 : cu.v) === (null == (Nu = Zu.edgeObj) ? void 0 : Nu.v) && (null == (Ou = Uu.edgeObj) ? void 0 : Ou.w) === (null == (Yu = Zu.edgeObj) ? void 0 : Yu.w)) {
              if (Uu.edgeLabel.reversed) {
                du[su] = Ju[ou], Ju.splice(ou, 1), ou--;
                break
              }
              du[ju] = Ju[Eu], Ju.splice(Eu, 1), Eu--
            } else au = !0
          } let Pu = zE(Ju, du, hu, uu, Du);
      if (eu && Gu) {
        Pu.vs = [eu, Pu.vs, Gu].flat(1);
        let Eu = uu.predecessors(eu);
        if (Eu && Eu.length) {
          let ju = uu.node(Eu[0]),
            su = uu.predecessors(Gu),
            Uu = uu.node(su[0]);
          Object.hasOwn(Pu, "barycenter") || (Pu.barycenter = 0, Pu.weight = 0), Pu.barycenter = (Pu.barycenter * Pu.weight + ju.order + Uu.order) / (Pu.weight + 2), Pu.weight += 2
        }
      }
      return Object.defineProperty(Pu, "result", {
        value: Pu,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Pu, "usedBias", {
        value: au,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Pu
    }

    function Ej(uu, Eu, ju, su) {
      su || (su = uu.nodes());
      let Uu = function(uu) {
          let Eu;
          for (; uu.hasNode(Eu = Ru("_root")););
          return Eu
        }(uu),
        Zu = new Iu({
          compound: !0
        }).setGraph({
          root: Uu
        }).setDefaultNodeLabel((Eu => uu.node(Eu)));
      return su.forEach((su => {
        let Xu = uu.node(su),
          lu = uu.parent(su);
        if (Xu.rank === Eu || Xu.minRank <= Eu && Eu <= Xu.maxRank) {
          Zu.setNode(su), Zu.setParent(su, lu || Uu);
          let qu = uu[ju](su);
          qu && qu.forEach((Eu => {
            let ju = Eu.v === su ? Eu.w : Eu.v,
              Uu = Zu.edge(ju, su),
              Xu = void 0 !== Uu ? Uu.weight : 0;
            Zu.setEdge(ju, su, {
              weight: uu.edge(Eu).weight + Xu
            })
          })), Object.hasOwn(Xu, "minRank") && Zu.setNode(su, {
            borderLeft: Xu.borderLeft[Eu],
            borderRight: Xu.borderRight[Eu]
          })
        }
      })), Zu
    }

    function jj(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Eu.customOrder) return void Eu.customOrder(uu, jj);
      let su = Au(uu),
        Uu = sj(uu, uE(1, su + 1), "inEdges"),
        Zu = sj(uu, uE(su - 1, -1, -1), "outEdges"),
        Xu = HE(uu, ju);
      if (Zj(uu, Xu), Eu.disableOptimalOrderHeuristic) return;
      let lu, qu = Number.POSITIVE_INFINITY,
        fu = Eu.constraints || [];
      for (let Cu = 0, bu = 0; bu < 4; ++Cu, ++bu) {
        Uj(Cu % 2 ? Uu : Zu, Cu % 4 >= 2, fu, ju), Xu = tu(uu);
        let Eu = AE(uu, Xu);
        Eu < qu ? (bu = 0, lu = Object.assign({}, Xu), qu = Eu) : Eu === qu && (lu = structuredClone(Xu))
      }
      Zj(uu, lu)
    }

    function sj(uu, Eu, ju) {
      let su = new Map,
        Uu = (uu, Eu) => {
          su.has(uu) || su.set(uu, []), su.get(uu).push(Eu)
        };
      for (let Zu of uu.nodes()) {
        let Eu = uu.node(Zu);
        if ("number" == typeof Eu.rank && Uu(Eu.rank, Zu), "number" == typeof Eu.minRank && "number" == typeof Eu.maxRank)
          for (let uu = Eu.minRank; uu <= Eu.maxRank; uu++) uu !== Eu.rank && Uu(uu, Zu)
      }
      return Eu.map((function(Eu) {
        return Ej(uu, Eu, ju, su.get(Eu) || [])
      }))
    }

    function Uj(uu, Eu, ju, su) {
      let Uu = !0,
        Zu = new Iu;
      uu.forEach((function(uu) {
        ju.forEach((uu => Zu.setEdge(uu.left, uu.right)));
        let Xu = uu.graph().root,
          {
            result: lu,
            usedBias: qu
          } = uj(uu, Xu, Zu, su, Uu);
        Eu && qu && (Uu = !Uu), lu.vs.forEach(((Eu, ju) => uu.node(Eu).order = ju)),
          function(uu, Eu, ju) {
            let su, Uu = {};
            ju.forEach((ju => {
              let Zu, Xu, lu = uu.parent(ju);
              for (; lu;) {
                if (Zu = uu.parent(lu), Zu ? (Xu = Uu[Zu], Uu[Zu] = lu) : (Xu = su, su = lu), Xu && Xu !== lu) return void Eu.setEdge(Xu, lu);
                lu = Zu
              }
            }))
          }(uu, Zu, lu.vs)
      }))
    }

    function Zj(uu, Eu) {
      Object.values(Eu).forEach((Eu => Eu.forEach(((Eu, ju) => uu.node(Eu).order = ju))))
    }

    function Xj(uu, Eu, ju) {
      if (Eu > ju) {
        let uu = Eu;
        Eu = ju, ju = uu
      }
      let su = uu[Eu];
      su || (uu[Eu] = su = {}), su[ju] = !0
    }

    function lj(uu, Eu, ju) {
      if (Eu > ju) {
        let uu = Eu;
        Eu = ju, ju = uu
      }
      let su = uu[Eu];
      return void 0 !== su && Object.hasOwn(su, ju)
    }

    function qj(uu, Eu, ju, su) {
      let Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Zu = {},
        Xu = function(uu, Eu, ju, su) {
          let Uu = new Iu,
            Zu = uu.graph(),
            Xu = function(uu, Eu, ju) {
              return (su, Uu, Zu) => {
                let Xu, lu = su.node(Uu),
                  qu = su.node(Zu),
                  fu = 0;
                if (fu += lu.width / 2, Object.hasOwn(lu, "labelpos")) switch (lu.labelpos.toLowerCase()) {
                  case "l":
                    Xu = -lu.width / 2;
                    break;
                  case "r":
                    Xu = lu.width / 2
                }
                if (Xu && (fu += ju ? Xu : -Xu), Xu = void 0, fu += (lu.dummy ? Eu : uu) / 2, fu += (qu.dummy ? Eu : uu) / 2, fu += qu.width / 2, Object.hasOwn(qu, "labelpos")) switch (qu.labelpos.toLowerCase()) {
                  case "l":
                    Xu = qu.width / 2;
                    break;
                  case "r":
                    Xu = -qu.width / 2
                }
                return Xu && (fu += ju ? Xu : -Xu), fu
              }
            }(Zu.nodesep, Zu.edgesep, su);
          return Eu.forEach((Eu => {
            let su;
            Eu.forEach((Eu => {
              let Zu = ju[Eu];
              if (void 0 !== Zu) {
                if (Uu.setNode(Zu), void 0 !== su) {
                  let lu = ju[su];
                  if (void 0 !== lu) {
                    let ju = Uu.edge(lu, Zu);
                    Uu.setEdge(lu, Zu, Math.max(Xu(uu, Eu, su), ju || 0))
                  }
                }
                su = Eu
              }
            }))
          })), Uu
        }(uu, Eu, ju, Uu),
        lu = Uu ? "borderLeft" : "borderRight";

      function qu(uu, Eu) {
        let ju = Xu.nodes().slice(),
          su = {},
          Uu = ju.pop();
        for (; Uu;) {
          if (su[Uu]) uu(Uu);
          else {
            su[Uu] = !0, ju.push(Uu);
            for (let uu of Eu(Uu)) ju.push(uu)
          }
          Uu = ju.pop()
        }
      }
      return qu((function(uu) {
        let Eu = Xu.inEdges(uu);
        Zu[uu] = Eu ? Eu.reduce(((uu, Eu) => {
          var ju;
          let su = null != (ju = Zu[Eu.v]) ? ju : 0,
            Uu = Xu.edge(Eu);
          return Math.max(uu, su + (void 0 !== Uu ? Uu : 0))
        }), 0) : 0
      }), (function(uu) {
        return Xu.predecessors(uu) || []
      })), qu((function(Eu) {
        let ju = Xu.outEdges(Eu),
          su = Number.POSITIVE_INFINITY;
        ju && (su = ju.reduce(((uu, Eu) => {
          let ju = Zu[Eu.w],
            su = Xu.edge(Eu);
          return Math.min(uu, (void 0 !== ju ? ju : 0) - (void 0 !== su ? su : 0))
        }), Number.POSITIVE_INFINITY));
        let Uu = uu.node(Eu);
        su !== Number.POSITIVE_INFINITY && Uu.borderType !== lu && (Zu[Eu] = Math.max(void 0 !== Zu[Eu] ? Zu[Eu] : 0, su))
      }), (function(uu) {
        return Xu.successors(uu) || []
      })), Object.keys(su).forEach((uu => {
        var Eu;
        let su = ju[uu];
        void 0 !== su && (Zu[uu] = null != (Eu = Zu[su]) ? Eu : 0)
      })), Zu
    }

    function fj(uu, Eu) {
      let ju, su = tu(uu),
        Uu = Object.assign(function(uu, Eu) {
          let ju = {};
          return Eu.length && Eu.reduce((function(Eu, su) {
            let Uu = 0,
              Zu = 0,
              Xu = Eu.length,
              lu = su[su.length - 1];
            return su.forEach(((Eu, qu) => {
              let fu = function(uu, Eu) {
                  if (uu.node(Eu).dummy) {
                    let ju = uu.predecessors(Eu);
                    if (ju) return ju.find((Eu => uu.node(Eu).dummy))
                  }
                }(uu, Eu),
                Cu = fu ? uu.node(fu).order : Xu;
              (fu || Eu === lu) && (su.slice(Zu, qu + 1).forEach((Eu => {
                let su = uu.predecessors(Eu);
                su && su.forEach((su => {
                  let Zu = uu.node(su),
                    Xu = Zu.order;
                  (Xu < Uu || Cu < Xu) && (!Zu.dummy || !uu.node(Eu).dummy) && Xj(ju, su, Eu)
                }))
              })), Zu = qu + 1, Uu = Cu)
            })), su
          })), ju
        }(uu, su), function(uu, Eu) {
          let ju = {};

          function su(Eu, su, Uu, Zu, Xu) {
            uE(su, Uu).forEach((su => {
              let Uu = Eu[su];
              if (void 0 !== Uu && uu.node(Uu).dummy) {
                let Eu = uu.predecessors(Uu);
                Eu && Eu.forEach((Eu => {
                  if (void 0 === Eu) return;
                  let su = uu.node(Eu);
                  su.dummy && (su.order < Zu || su.order > Xu) && Xj(ju, Eu, Uu)
                }))
              }
            }))
          }
          return Eu.length && Eu.reduce((function(Eu, ju) {
            let Uu = -1,
              Zu = -1,
              Xu = 0;
            return ju.forEach(((lu, qu) => {
              if ("border" === uu.node(lu).dummy) {
                let Eu = uu.predecessors(lu);
                if (Eu && Eu.length) {
                  let lu = Eu[0];
                  if (void 0 === lu) return;
                  Zu = uu.node(lu).order, su(ju, Xu, qu, Uu, Zu), Xu = qu, Uu = Zu
                }
              }
              su(ju, Xu, ju.length, Zu, Eu.length)
            })), ju
          })), ju
        }(uu, su)),
        Zu = {};
      ["u", "d"].forEach((Xu => {
        ju = "u" === Xu ? su : Object.values(su).reverse(), ["l", "r"].forEach((su => {
          "r" === su && (ju = ju.map((uu => Object.values(uu).reverse())));
          let lu = function(uu, Eu, ju, su, Uu) {
              let Zu = {},
                Xu = {},
                lu = {};
              return Eu.forEach((uu => {
                uu.forEach(((uu, Eu) => {
                  Zu[uu] = uu, Xu[uu] = uu, lu[uu] = Eu
                }))
              })), Eu.forEach((Eu => {
                let qu = -1,
                  fu = -1,
                  Cu = !1,
                  bu = Eu,
                  cu = Eu.findIndex((Eu => (null == Uu ? void 0 : Uu.includes(Eu)) || Cj(Eu, uu, Uu)));
                cu > 0 && (bu = [Eu[cu], ...Eu.slice(0, cu), ...Eu.slice(cu + 1)], Cu = !0), bu.forEach((Eu => {
                  var bu;
                  let cu = su(Eu);
                  if (cu && cu.length) {
                    null != Uu && Uu.includes(Eu) && (cu = cu.filter((Eu => Cj(Eu, uu, Uu))));
                    let su = cu.sort(((uu, Eu) => {
                        let ju = lu[uu],
                          su = lu[Eu];
                        return (void 0 !== ju ? ju : 0) - (void 0 !== su ? su : 0)
                      })),
                      Nu = (su.length - 1) / 2;
                    for (let uu = Math.floor(Nu), Uu = Math.ceil(Nu); uu <= Uu; ++uu) {
                      let Uu = su[uu];
                      if (void 0 === Uu) continue;
                      let cu = lu[Uu];
                      if (void 0 !== cu && Xu[Eu] === Eu && qu < cu && lu[Uu] !== fu && !lj(ju, Eu, Uu)) {
                        let uu = Zu[Uu];
                        void 0 !== uu && (Xu[Uu] = Eu, Xu[Eu] = Zu[Eu] = uu, qu = cu, Cu && (qu = -1, fu = null != (bu = lu[Uu]) ? bu : -1, Cu = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Zu,
                align: Xu
              }
            }(uu, ju, Uu, (Eu => ("u" === Xu ? uu.predecessors(Eu) : uu.successors(Eu)) || []), Eu),
            qu = qj(uu, ju, lu.root, lu.align, "r" === su);
          "r" === su && (qu = jE(qu, (uu => -uu))), Zu[Xu + su] = qu
        }))
      }));
      let Xu = function(uu, Eu) {
        return Object.values(Eu).reduce(((Eu, ju) => {
          let su = Number.NEGATIVE_INFINITY,
            Uu = Number.POSITIVE_INFINITY;
          Object.entries(ju).forEach((Eu => {
            let [ju, Zu] = Eu, Xu = function(uu, Eu) {
              return uu.node(Eu).width
            }(uu, ju) / 2;
            su = Math.max(Zu + Xu, su), Uu = Math.min(Zu - Xu, Uu)
          }));
          let Zu = su - Uu;
          return Zu < Eu[0] && (Eu = [Zu, ju]), Eu
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(uu, Zu);
      return function(uu, Eu) {
          let ju = Object.values(Eu),
            su = Hu(Math.min, ju),
            Uu = Hu(Math.max, ju);
          ["u", "d"].forEach((ju => {
            ["l", "r"].forEach((Zu => {
              let Xu = ju + Zu,
                lu = uu[Xu];
              if (!lu || lu === Eu) return;
              let qu = Object.values(lu),
                fu = su - Hu(Math.min, qu);
              "l" !== Zu && (fu = Uu - Hu(Math.max, qu)), fu && (uu[Xu] = jE(lu, (uu => uu + fu)))
            }))
          }))
        }(Zu, Xu),
        function(uu) {
          let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            ju = uu.ul;
          return ju ? jE(ju, ((ju, su) => {
            var Uu, Zu;
            if (Eu) {
              let ju = Eu.toLowerCase(),
                Uu = uu[ju];
              if (Uu && void 0 !== Uu[su]) return Uu[su]
            }
            let Xu = Object.values(uu).map((uu => {
              let Eu = uu[su];
              return void 0 !== Eu ? Eu : 0
            })).sort(((uu, Eu) => uu - Eu));
            return ((null != (Uu = Xu[1]) ? Uu : 0) + (null != (Zu = Xu[2]) ? Zu : 0)) / 2
          })) : {}
        }(Zu, uu.graph().align)
    }

    function Cj(uu, Eu, ju) {
      var su;
      if (!ju) return !1;
      let Uu = null == (su = Eu.node(uu)) ? void 0 : su.edgeObj;
      if (!Uu || Eu.node(uu).edgeLabel.reversed) return !1;
      let Zu = ju.indexOf(null == Uu ? void 0 : Uu.v),
        Xu = ju.indexOf(null == Uu ? void 0 : Uu.w);
      return -1 !== Zu && -1 !== Xu && Zu === (Xu + 1) % ju.length || Zu === (Xu - 1) % ju.length
    }

    function bj(uu, Eu) {
      (function(uu) {
        let Eu = tu(uu),
          ju = uu.graph(),
          su = ju.ranksep,
          Uu = ju.rankalign,
          Zu = 0;
        Eu.forEach((Eu => {
          let ju = Eu.reduce(((Eu, ju) => {
            var su;
            let Uu = null != (su = uu.node(ju).height) ? su : 0;
            return Eu > Uu ? Eu : Uu
          }), 0);
          Eu.forEach((Eu => {
            let su = uu.node(Eu);
            su.y = "top" === Uu ? Zu + su.height / 2 : "bottom" === Uu ? Zu + ju - su.height / 2 : Zu + ju / 2
          })), Zu += ju + su
        }))
      })(uu = Bu(uu)), Object.entries(fj(uu, Eu)).forEach((Eu => {
        let [ju, su] = Eu;
        return uu.node(ju).x = su
      }))
    }
    var cj = new WeakMap;

    function Nj(uu) {
      return Yj(uu, yu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), uu
    }

    function Oj(uu, Eu, ju) {
      let su = Eu;
      for (; void 0 !== su;) {
        let Eu = uu.parent(su);
        if (Eu === ju) return su;
        su = Eu
      }
    }

    function Yj(uu, Eu, ju) {
      var su;
      let Uu = uu.nodes().filter((Eu => uu.children(Eu).length)),
        Zu = {};
      Uu.forEach((su => {
        let Uu = uu.node(su);
        if (Uu && Uu.rankdir) {
          let Xu = new Iu({
            multigraph: !0,
            compound: !0
          });
          Xu.setGraph({
            rankdir: Uu.rankdir
          });
          let lu = uu.children(su);
          lu.forEach((Eu => {
            let ju = {
              ...uu.node(Eu)
            };
            Xu.setNode(Eu, ju);
            let Uu = uu.parent(Eu);
            Uu && Uu !== su && lu.includes(Uu) && Xu.setParent(Eu, Uu)
          }));
          let qu = new Set;
          uu.edges().forEach((Eu => {
            let ju = Oj(uu, Eu.v, su),
              Uu = Oj(uu, Eu.w, su);
            if (ju && Uu && ju !== Uu) {
              let su = `${ju}\0${Uu}`;
              qu.has(su) || (qu.add(su), Xu.setEdge(ju, Uu, {
                ...uu.edge(Eu)
              }))
            }
          })), Yj(Xu, Eu, ju);
          let fu = aj(Xu);
          hj(fu, Eu, ju, null), Dj(Xu, fu);
          let Cu = 1 / 0,
            bu = 1 / 0,
            cu = -1 / 0,
            Nu = -1 / 0;
          Xu.nodes().forEach((uu => {
            if (uu === su) return;
            let Eu = Xu.node(uu);
            Eu && "number" == typeof Eu.x && "number" == typeof Eu.y && "number" == typeof Eu.width && "number" == typeof Eu.height && (Cu = Math.min(Cu, Eu.x - Eu.width / 2), cu = Math.max(cu, Eu.x + Eu.width / 2), bu = Math.min(bu, Eu.y - Eu.height / 2), Nu = Math.max(Nu, Eu.y + Eu.height / 2))
          })), (!isFinite(Cu) || !isFinite(bu) || !isFinite(cu) || !isFinite(Nu)) && (Cu = bu = 0, cu = Nu = 0);
          let Ou = cu - Cu,
            Yu = Nu - bu;
          Zu[su] = {
            minX: Cu,
            ss: bu,
            maxX: cu,
            Us: Nu,
            width: Ou,
            height: Yu,
            offsetX: Cu,
            offsetY: bu
          }, Uu._dagreClusterSubgraph = Xu
        }
      }));
      let Xu = [],
        lu = new Map;
      Uu.forEach((Eu => {
        let ju = uu.node(Eu);
        ju && ju.rankdir && Zu[Eu] && lu.set(Eu, (uu.children(Eu) || []).filter((uu => uu !== Eu)))
      }));
      let qu = new Set([...lu.values()].flat()),
        fu = new Map;
      lu.forEach(((Eu, ju) => {
        qu.has(ju) || fu.set(ju, (Eu => {
          let ju = [],
            su = (uu.children(Eu) || []).filter((uu => uu !== Eu));
          for (; su.length > 0;) {
            let Eu = su.shift();
            ju.push(Eu), (uu.children(Eu) || []).filter((uu => uu !== Eu)).forEach((uu => su.push(uu)))
          }
          return ju
        })(ju))
      }));
      let Cu = new Set([...fu.values()].flat()),
        bu = uu => {
          for (let [Eu, ju] of fu)
            if (ju.includes(uu)) return Eu;
          return uu
        },
        cu = [];
      uu.edges().forEach((Eu => {
        (Cu.has(Eu.v) || Cu.has(Eu.w)) && cu.push({
          edge: Eu,
          label: uu.edge(Eu)
        })
      }));
      let Nu = new Map;
      Cu.forEach((Eu => {
        let ju = uu.parent(Eu);
        Nu.set(Eu, "string" == typeof ju ? ju : void 0)
      })), fu.forEach(((Eu, ju) => {
        let su = uu.node(ju),
          Uu = [];
        Eu.forEach((Eu => {
          let ju = uu.node(Eu);
          ju && (Uu.push({
            id: Eu,
            node: ju,
            parent: Nu.get(Eu)
          }), uu.removeNode(Eu))
        }));
        let lu = cu.filter((uu => {
            let {
              edge: ju
            } = uu;
            return Eu.includes(ju.v) || Eu.includes(ju.w)
          })),
          qu = Zu[ju];
        su && (Xu.push({
          clusterId: ju,
          subgraph: su._dagreClusterSubgraph,
          bounds: qu,
          children: Eu,
          removedNodes: Uu,
          removedEdges: lu
        }), su.width = qu.width, su.height = qu.height)
      }));
      let Ou = new Set;
      cu.forEach((Eu => {
        let {
          edge: ju,
          label: su
        } = Eu, Uu = bu(ju.v), Zu = bu(ju.w);
        if (Uu !== Zu && uu.hasNode(Uu) && uu.hasNode(Zu)) {
          let Eu = `${Uu}\0${Zu}`;
          Ou.has(Eu) || (Ou.add(Eu), uu.setEdge(Uu, Zu, {
            ...su,
            width: 0,
            height: 0
          }))
        }
      }));
      let Yu = aj(uu),
        hu = hj(Yu, Eu, ju, null != (su = cj.get(uu)) ? su : null);
      cj.set(uu, hu), Dj(uu, Yu), Ou.forEach((Eu => {
        let ju = Eu.indexOf("\0"),
          su = Eu.slice(0, ju),
          Uu = Eu.slice(ju + 1);
        uu.hasEdge(su, Uu) && uu.removeEdge(su, Uu)
      })), Xu.forEach((Eu => {
        let {
          clusterId: ju,
          subgraph: su,
          bounds: Uu,
          removedNodes: Zu,
          removedEdges: Xu
        } = Eu;
        var lu, qu;
        let fu = uu.node(ju),
          Cu = null != (lu = null == fu ? void 0 : fu.x) ? lu : 0,
          bu = null != (qu = null == fu ? void 0 : fu.y) ? qu : 0,
          cu = (Uu.minX + Uu.maxX) / 2,
          Nu = (Uu.ss + Uu.Us) / 2;
        Zu.forEach((Eu => {
          let {
            id: ju,
            node: su,
            parent: Uu
          } = Eu;
          uu.setNode(ju, su), void 0 !== Uu && uu.setParent(ju, Uu)
        })), Xu.forEach((Eu => {
          let {
            edge: ju,
            label: su
          } = Eu;
          uu.setEdge(ju, su)
        })), su.nodes().forEach((Eu => {
          if (Eu === ju) return;
          let Uu = su.node(Eu),
            Zu = uu.node(Eu);
          Zu && Uu && "number" == typeof Uu.x && "number" == typeof Uu.y && (Zu.x = Cu + (Uu.x - cu), Zu.y = bu + (Uu.y - Nu))
        })), delete fu._dagreClusterSubgraph
      })), Uu.forEach((Eu => {
        var ju, su;
        let Uu = uu.node(Eu),
          Xu = Zu[Eu];
        if (Uu && Uu.rankdir && Uu._dagreClusterSubgraph && Xu) {
          let Zu = Uu._dagreClusterSubgraph,
            lu = null != (ju = Uu.x) ? ju : 0,
            qu = null != (su = Uu.y) ? su : 0,
            fu = (Xu.minX + Xu.maxX) / 2,
            Cu = (Xu.ss + Xu.Us) / 2;
          Zu.nodes().forEach((ju => {
            if (ju === Eu) return;
            let su = Zu.node(ju),
              Uu = uu.node(ju);
            if (Uu && su && "number" == typeof su.x && "number" == typeof su.y) {
              let uu = su.x - fu,
                Eu = su.y - Cu;
              Uu.x = lu + uu, Uu.y = qu + Eu
            }
          })), delete Uu._dagreClusterSubgraph
        }
      }))
    }

    function hj(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Uu, Zu;
      let Xu = !1 !== (null == ju ? void 0 : ju.useDynamic),
        lu = Xu && null != (Uu = null == su ? void 0 : su.graph) ? Uu : null,
        qu = Xu && null != (Zu = null == su ? void 0 : su.rawNodes) ? Zu : null;
      Eu("    makeSpaceForEdgeLabels", (() => function(uu) {
        let Eu = uu.graph();
        Eu.ranksep /= 2, uu.edges().forEach((ju => {
          var su;
          let Uu = uu.edge(ju);
          Uu.minlen *= 2, "c" !== (null != (su = Uu.labelpos) ? su : "r").toLowerCase() && ("TB" === Eu.rankdir || "BT" === Eu.rankdir ? Uu.width += Uu.labeloffset : Uu.height += Uu.labeloffset)
        }))
      }(uu))), Eu("    removeSelfEdges", (() => function(uu) {
        uu.edges().forEach((Eu => {
          if (Eu.v === Eu.w) {
            let ju = uu.node(Eu.v);
            ju.selfEdges || (ju.selfEdges = []), ju.selfEdges.push({
              e: Eu,
              label: uu.edge(Eu)
            }), uu.removeEdge(Eu)
          }
        }))
      }(uu))), Eu("    acyclic", (() => NE(uu, lu))), Eu("    nestingGraph.run", (() => WE(uu))), Eu("    rank", (() => VE(Bu(uu)))), Eu("    injectEdgeLabelProxies", (() => function(uu) {
        uu.edges().forEach((Eu => {
          let ju = uu.edge(Eu);
          if (ju.width && ju.height) {
            let ju = uu.node(Eu.v),
              su = {
                rank: (uu.node(Eu.w).rank - ju.rank) / 2 + ju.rank,
                e: Eu
              };
            Fu(uu, "edge-proxy", su, "_ep")
          }
        }))
      }(uu))), Eu("    removeEmptyRanks", (() => function(uu) {
        let Eu = uu.nodes().map((Eu => uu.node(Eu).rank)).filter((uu => void 0 !== uu)),
          ju = Hu(Math.min, Eu),
          su = [];
        uu.nodes().forEach((Eu => {
          let Uu = uu.node(Eu).rank - ju;
          su[Uu] || (su[Uu] = []), su[Uu].push(Eu)
        }));
        let Uu = 0,
          Zu = uu.graph().nodeRankFactor;
        Array.from(su).forEach(((Eu, ju) => {
          void 0 === Eu && ju % Zu !== 0 ? --Uu : void 0 !== Eu && Uu && Eu.forEach((Eu => uu.node(Eu).rank += Uu))
        }))
      }(uu))), Eu("    nestingGraph.cleanup", (() => function(uu) {
        let Eu = uu.graph();
        uu.removeNode(Eu.nestingRoot), delete Eu.nestingRoot, uu.edges().forEach((Eu => {
          uu.edge(Eu).nestingEdge && uu.removeEdge(Eu)
        }))
      }(uu))), Eu("    normalizeRanks", (() => function(uu) {
        let Eu = uu.nodes().map((Eu => {
            let ju = uu.node(Eu).rank;
            return void 0 === ju ? Number.MAX_VALUE : ju
          })),
          ju = Hu(Math.min, Eu);
        uu.nodes().forEach((Eu => {
          let su = uu.node(Eu);
          Object.hasOwn(su, "rank") && (su.rank -= ju)
        }))
      }(uu))), Eu("    assignRankMinMax", (() => function(uu) {
        let Eu = 0;
        uu.nodes().forEach((ju => {
          let su = uu.node(ju);
          su.borderTop && (su.minRank = uu.node(su.borderTop).rank, su.maxRank = uu.node(su.borderBottom).rank, Eu = Math.max(Eu, su.maxRank))
        })), uu.graph().maxRank = Eu
      }(uu))), Eu("    removeEdgeLabelProxies", (() => function(uu) {
        uu.nodes().forEach((Eu => {
          let ju = uu.node(Eu);
          if ("edge-proxy" === ju.dummy) {
            let su = ju;
            uu.edge(su.e).labelRank = ju.rank, uu.removeNode(Eu)
          }
        }))
      }(uu))), Eu("    normalize.run", (() => OE(uu))), Eu("    parentDummyChains", (() => iE(uu))), Eu("    addBorderSegments", (() => IE(uu))), Eu("    order", (() => jj(uu, ju, qu))), Eu("    insertSelfEdges", (() => function(uu) {
        tu(uu).forEach((Eu => {
          let ju = 0;
          Eu.forEach(((Eu, su) => {
            let Uu = uu.node(Eu);
            "number" != typeof Uu.rank && (Uu.rank = 0), Uu.order = su + ju, (Uu.selfEdges || []).forEach((Eu => {
              Fu(uu, "selfedge", {
                width: Eu.label.width,
                height: Eu.label.height,
                rank: Uu.rank,
                order: su + ++ju,
                e: Eu.e,
                edgeLabel: Eu.label
              }, "_se"), (!Array.isArray(Eu.label.points) || 7 !== Eu.label.points.length) && (Eu.label.points = [{
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
            })), delete Uu.selfEdges
          }))
        }))
      }(uu))), Eu("    adjustCoordinateSystem", (() => function(uu) {
        var Eu;
        let ju = null == (Eu = uu.graph().rankdir) ? void 0 : Eu.toLowerCase();
        ("lr" === ju || "rl" === ju) && LE(uu)
      }(uu))), Eu("    position", (() => bj(uu, ju.corePath))), Eu("    positionSelfEdges", (() => function(uu) {
        uu.nodes().forEach((Eu => {
          let ju = uu.node(Eu),
            su = uu => "number" == typeof uu && isFinite(uu);
          if ("selfedge" === ju.dummy) {
            let Uu = ju,
              Zu = uu.node(Uu.e.v),
              Xu = su(null == Zu ? void 0 : Zu.x) ? Zu.x : 0,
              lu = su(null == Zu ? void 0 : Zu.y) ? Zu.y : 0,
              qu = su(null == Zu ? void 0 : Zu.width) ? Zu.width : 0,
              fu = su(null == Zu ? void 0 : Zu.height) ? Zu.height : 0,
              Cu = su(ju.x) ? ju.x : Xu,
              bu = su(ju.y) ? ju.y : lu,
              cu = qu / 2,
              Nu = fu / 2;
            Uu.edgeLabel.points = [{
              x: Cu + cu,
              y: bu - Nu
            }, {
              x: Cu + cu,
              y: bu - Nu
            }, {
              x: Cu,
              y: bu
            }, {
              x: Cu - cu,
              y: bu + Nu
            }, {
              x: Cu - cu,
              y: bu + Nu
            }, {
              x: Cu,
              y: bu
            }, {
              x: Cu,
              y: bu
            }], Uu.edgeLabel.x = Cu, Uu.edgeLabel.y = bu, uu.setEdge(Uu.e, Uu.edgeLabel), uu.removeNode(Eu)
          } else ju && Array.isArray(ju.selfEdges) && ju.selfEdges.forEach((uu => {
            if (!Array.isArray(uu.label.points) || 7 !== uu.label.points.length) {
              let Eu = su(ju.x) ? ju.x : 0,
                Uu = su(ju.y) ? ju.y : 0,
                Zu = (su(ju.width) ? ju.width : 0) / 2,
                Xu = (su(ju.height) ? ju.height : 0) / 2;
              uu.label.points = [{
                x: Eu + Zu,
                y: Uu - Xu
              }, {
                x: Eu + Zu,
                y: Uu - Xu
              }, {
                x: Eu,
                y: Uu
              }, {
                x: Eu - Zu,
                y: Uu + Xu
              }, {
                x: Eu - Zu,
                y: Uu + Xu
              }, {
                x: Eu,
                y: Uu
              }, {
                x: Eu,
                y: Uu
              }]
            }
          }))
        }))
      }(uu)));
      let fu = JSON.parse(JSON.stringify(uu._nodes));
      return Eu("    removeBorderNodes", (() => function(uu) {
        uu.nodes().forEach((Eu => {
          if (uu.children(Eu).length) {
            let ju = uu.node(Eu),
              su = uu.node(ju.borderTop),
              Uu = uu.node(ju.borderBottom),
              Zu = uu.node(ju.borderLeft[ju.borderLeft.length - 1]),
              Xu = uu.node(ju.borderRight[ju.borderRight.length - 1]);
            ju.width = Math.abs(Xu.x - Zu.x), ju.height = Math.abs(Uu.y - su.y), ju.x = Zu.x + ju.width / 2, ju.y = su.y + ju.height / 2
          }
        })), uu.nodes().forEach((Eu => {
          "border" === uu.node(Eu).dummy && uu.removeNode(Eu)
        }))
      }(uu))), Eu("    normalize.undo", (() => function(uu) {
        uu.graph().dummyChains.forEach((Eu => {
          let ju, su = uu.node(Eu),
            Uu = su.edgeLabel;
          for (uu.setEdge(su.edgeObj, Uu); su.dummy;) ju = uu.successors(Eu)[0], uu.removeNode(Eu), Uu.points.push({
            x: su.x,
            y: su.y
          }), "edge-label" === su.dummy && (Uu.x = su.x, Uu.y = su.y, Uu.width = su.width, Uu.height = su.height), Eu = ju, su = uu.node(Eu)
        }))
      }(uu))), Eu("    fixupEdgeLabelCoords", (() => function(uu) {
        uu.edges().forEach((Eu => {
          let ju = uu.edge(Eu);
          if (Object.hasOwn(ju, "x")) switch (("l" === ju.labelpos || "r" === ju.labelpos) && (ju.width -= ju.labeloffset), ju.labelpos) {
            case "l":
              ju.x -= ju.width / 2 + ju.labeloffset;
              break;
            case "r":
              ju.x += ju.width / 2 + ju.labeloffset
          }
        }))
      }(uu))), Eu("    undoCoordinateSystem", (() => BE(uu))), Eu("    translateGraph", (() => function(uu) {
        let Eu = Number.POSITIVE_INFINITY,
          ju = 0,
          su = Number.POSITIVE_INFINITY,
          Uu = 0,
          Zu = uu.graph(),
          Xu = Zu.marginx || 0,
          lu = Zu.marginy || 0;

        function qu(uu) {
          let Zu = uu.x,
            Xu = uu.y,
            lu = uu.width,
            qu = uu.height;
          Eu = Math.min(Eu, Zu - lu / 2), ju = Math.max(ju, Zu + lu / 2), su = Math.min(su, Xu - qu / 2), Uu = Math.max(Uu, Xu + qu / 2)
        }
        uu.nodes().forEach((Eu => qu(uu.node(Eu)))), uu.edges().forEach((Eu => {
          let ju = uu.edge(Eu);
          Object.hasOwn(ju, "x") && qu(ju)
        })), Eu -= Xu, su -= lu, uu.nodes().forEach((ju => {
          let Uu = uu.node(ju);
          Uu.x -= Eu, Uu.y -= su
        })), uu.edges().forEach((ju => {
          let Uu = uu.edge(ju);
          Uu.points.forEach((uu => {
            uu.x -= Eu, uu.y -= su
          })), Object.hasOwn(Uu, "x") && (Uu.x -= Eu), Object.hasOwn(Uu, "y") && (Uu.y -= su)
        })), Zu.width = ju - Eu + Xu, Zu.height = Uu - su + lu
      }(uu))), Eu("    assignNodeIntersects", (() => function(uu) {
        uu.edges().forEach((Eu => {
          if (Eu.v === Eu.w) return;
          let ju, su, Uu = uu.edge(Eu),
            Zu = uu.node(Eu.v),
            Xu = uu.node(Eu.w);
          Uu.points ? (ju = Uu.points[0], su = Uu.points[Uu.points.length - 1]) : (Uu.points = [], ju = Xu, su = Zu), Uu.points.unshift(Lu(Zu, ju)), Uu.points.push(Lu(Xu, su))
        }))
      }(uu))), Eu("    reversePoints", (() => function(uu) {
        uu.edges().forEach((Eu => {
          let ju = uu.edge(Eu);
          ju.reversed && ju.points.reverse()
        }))
      }(uu))), Eu("    acyclic.undo", (() => function(uu) {
        uu.edges().forEach((Eu => {
          let ju = uu.edge(Eu);
          if (ju.reversed) {
            uu.removeEdge(Eu);
            let su = ju.forwardName;
            delete ju.reversed, delete ju.forwardName, uu.setEdge(Eu.w, Eu.v, ju, su)
          }
        }))
      }(uu))), {
        graph: uu,
        rawNodes: fu
      }
    }

    function Dj(uu, Eu) {
      uu.nodes().forEach((ju => {
        let su = uu.node(ju),
          Uu = Eu.node(ju);
        su && (su.x = Uu.x, su.y = Uu.y, su.order = Uu.order, su.rank = Uu.rank, Eu.children(ju).length && (su.width = Uu.width, su.height = Uu.height))
      })), uu.edges().forEach((ju => {
        let su = uu.edge(ju),
          Uu = Eu.edge(ju);
        su.points = Uu.points, Object.hasOwn(Uu, "x") && (su.x = Uu.x, su.y = Uu.y)
      })), uu.graph().width = Eu.graph().width, uu.graph().height = Eu.graph().height
    }
    var gj = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Mj = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      ej = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      Gj = ["width", "height", "rank"],
      pj = {
        width: 0,
        height: 0
      },
      wj = ["minlen", "weight", "width", "height", "labeloffset"],
      Jj = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      dj = ["labelpos"];

    function aj(uu) {
      let Eu = new Iu({
          multigraph: !0,
          compound: !0
        }),
        ju = oj(uu.graph());
      return Eu.setGraph(Object.assign({}, Mj, Pj(ju, gj), EE(ju, ej))), uu.nodes().forEach((ju => {
        let su = Pj(oj(uu.node(ju)), Gj);
        Object.keys(pj).forEach((uu => {
          void 0 === su[uu] && (su[uu] = pj[uu])
        })), Eu.setNode(ju, su);
        let Uu = uu.parent(ju);
        void 0 !== Uu && Eu.setParent(ju, Uu)
      })), uu.edges().forEach((ju => {
        let su = oj(uu.edge(ju));
        Eu.setEdge(ju, Object.assign({}, Jj, Pj(su, wj), EE(su, dj)))
      })), Eu
    }

    function Pj(uu, Eu) {
      return jE(EE(uu, Eu), Number)
    }

    function oj(uu) {
      let Eu = {};
      return uu && Object.entries(uu).forEach((uu => {
        let [ju, su] = uu;
        "string" == typeof ju && (ju = ju.toLowerCase()), Eu[ju] = su
      })), Eu
    }

    function kj(uu) {
      let Eu = tu(uu),
        ju = new Iu({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return uu.nodes().forEach((Eu => {
        ju.setNode(Eu, {
          label: Eu
        }), ju.setParent(Eu, "layer" + uu.node(Eu).rank)
      })), uu.edges().forEach((uu => ju.setEdge(uu.v, uu.w, {}, uu.name))), Eu.forEach(((uu, Eu) => {
        let su = "layer" + Eu;
        ju.setNode(su, {
          rank: "same"
        }), uu.reduce(((uu, Eu) => (ju.setEdge(uu, Eu, {
          style: "invis"
        }), Eu)))
      })), ju
    }
    var mj = {
        time: nu,
        notime: yu
      },
      vj = {
        graphlib: Zu,
        version: ZE,
        layout: Nj,
        debug: kj,
        util: {
          time: nu,
          notime: yu
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);