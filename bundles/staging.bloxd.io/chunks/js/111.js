/*! For license information please see q3ynmh.111.544af885.chunk.js.LICENSE.txt */
export const id = 111;
export const ids = [111];
export const modules = {
  6228: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Graph: () => Fu,
      debug: () => Gy,
      default: () => ny,
      graphlib: () => Qu,
      layout: () => xy,
      util: () => Uy,
      version: () => QR
    });
    var Eu = Object.defineProperty,
      Ku = (uu, Ru, yu) => ((uu, Ru, yu) => Ru in uu ? Eu(uu, Ru, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: yu
      }) : uu[Ru] = yu)(uu, "symbol" != typeof Ru ? Ru + "" : Ru, yu),
      Qu = {};
    ((uu, Ru) => {
      for (var yu in Ru) Eu(uu, yu, {
        get: Ru[yu],
        enumerable: !0
      })
    })(Qu, {
      Graph: () => Fu,
      alg: () => Wu
    });
    var mu = Object.defineProperty,
      Ju = (uu, Ru) => {
        for (var yu in Ru) mu(uu, yu, {
          get: Ru[yu],
          enumerable: !0
        })
      },
      Nu = class {
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
        setNodes(uu, Ru) {
          return uu.forEach((uu => {
            void 0 !== Ru ? this.setNode(uu, Ru) : this.setNode(uu)
          })), this
        }
        setNode(uu, Ru) {
          return uu in this._nodes ? (arguments.length > 1 && (this._nodes[uu] = Ru), this) : (this._nodes[uu] = arguments.length > 1 ? Ru : this._defaultNodeLabelFn(uu), this._isCompound && (this._parent[uu] = "\0", this._children[uu] = {}, this._children["\0"][uu] = !0), this._in[uu] = {}, this._preds[uu] = {}, this._out[uu] = {}, this._sucs[uu] = {}, ++this._nodeCount, this)
        }
        node(uu) {
          return this._nodes[uu]
        }
        hasNode(uu) {
          return uu in this._nodes
        }
        removeNode(uu) {
          if (uu in this._nodes) {
            let Ru = uu => this.removeEdge(this._edgeObjs[uu]);
            delete this._nodes[uu], this._isCompound && (this._removeFromParentsChildList(uu), delete this._parent[uu], this.children(uu).forEach((uu => {
              this.setParent(uu)
            })), delete this._children[uu]), Object.keys(this._in[uu]).forEach(Ru), delete this._in[uu], delete this._preds[uu], Object.keys(this._out[uu]).forEach(Ru), delete this._out[uu], delete this._sucs[uu], --this._nodeCount
          }
          return this
        }
        setParent(uu, Ru) {
          if (!this._isCompound) throw new Error("Cannot set parent in a non-compound graph");
          if (void 0 === Ru) Ru = "\0";
          else {
            for (let yu = Ru += ""; void 0 !== yu; yu = this.parent(yu))
              if (yu === uu) throw new Error("Setting " + Ru + " as parent of " + uu + " would create a cycle");
            this.setNode(Ru)
          }
          return this.setNode(uu), this._removeFromParentsChildList(uu), this._parent[uu] = Ru, this._children[Ru][uu] = !0, this
        }
        parent(uu) {
          if (this._isCompound) {
            let Ru = this._parent[uu];
            if ("\0" !== Ru) return Ru
          }
        }
        children() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "\0";
          if (this._isCompound) {
            let Ru = this._children[uu];
            if (Ru) return Object.keys(Ru)
          } else {
            if ("\0" === uu) return this.nodes();
            if (this.hasNode(uu)) return []
          }
          return []
        }
        predecessors(uu) {
          let Ru = this._preds[uu];
          if (Ru) return Object.keys(Ru)
        }
        successors(uu) {
          let Ru = this._sucs[uu];
          if (Ru) return Object.keys(Ru)
        }
        neighbors(uu) {
          let Ru = this.predecessors(uu);
          if (Ru) {
            let yu = new Set(Ru),
              Eu = this.successors(uu);
            if (Eu)
              for (let uu of Eu) yu.add(uu);
            return Array.from(yu.values())
          }
        }
        isLeaf(uu) {
          var Ru;
          let yu;
          return yu = this.isDirected() ? this.successors(uu) : this.neighbors(uu), 0 === (null != (Ru = null == yu ? void 0 : yu.length) ? Ru : 0)
        }
        filterNodes(uu) {
          let Ru = new this.constructor({
            directed: this._isDirected,
            multigraph: this._isMultigraph,
            compound: this._isCompound
          });
          Ru.setGraph(this.graph()), Object.entries(this._nodes).forEach((yu => {
            let [Eu, Ku] = yu;
            uu(Eu) && Ru.setNode(Eu, Ku)
          })), Object.values(this._edgeObjs).forEach((uu => {
            Ru.hasNode(uu.v) && Ru.hasNode(uu.w) && Ru.setEdge(uu, this.edge(uu))
          }));
          let yu = {},
            Eu = uu => {
              let Ku = this.parent(uu);
              return !Ku || Ru.hasNode(Ku) ? (yu[uu] = Ku, Ku) : Ku in yu ? yu[Ku] : Eu(Ku)
            };
          return this._isCompound && Ru.nodes().forEach((uu => Ru.setParent(uu, Eu(uu)))), Ru
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
        setPath(uu, Ru) {
          return uu.reduce(((uu, yu) => (void 0 !== Ru ? this.setEdge(uu, yu, Ru) : this.setEdge(uu, yu), yu))), this
        }
        setEdge(uu, Ru, yu, Eu) {
          let Ku, Qu, mu, Ju, Nu = !1;
          "object" == typeof uu && null !== uu && "v" in uu ? (Ku = uu.v, Qu = uu.w, mu = uu.name, 2 === arguments.length && (Ju = Ru, Nu = !0)) : (Ku = uu, Qu = Ru, mu = Eu, arguments.length > 2 && (Ju = yu, Nu = !0)), Ku = "" + Ku, Qu = "" + Qu, void 0 !== mu && (mu = "" + mu);
          let Vu = ru(this._isDirected, Ku, Qu, mu);
          if (Vu in this._edgeLabels) return Nu && (this._edgeLabels[Vu] = Ju), this;
          if (void 0 !== mu && !this._isMultigraph) throw new Error("Cannot set a named edge when isMultigraph = false");
          this.setNode(Ku), this.setNode(Qu), this._edgeLabels[Vu] = Nu ? Ju : this._defaultEdgeLabelFn(Ku, Qu, mu);
          let Bu = function(uu, Ru, yu, Eu) {
            let Ku = "" + Ru,
              Qu = "" + yu;
            if (!uu && Ku > Qu) {
              let uu = Ku;
              Ku = Qu, Qu = uu
            }
            let mu = {
              v: Ku,
              w: Qu
            };
            return Eu && (mu.name = Eu), mu
          }(this._isDirected, Ku, Qu, mu);
          return Ku = Bu.v, Qu = Bu.w, Object.freeze(Bu), this._edgeObjs[Vu] = Bu, Xu(this._preds[Qu], Ku), Xu(this._sucs[Ku], Qu), this._in[Qu][Vu] = Bu, this._out[Ku][Vu] = Bu, this._edgeCount++, this
        }
        edge(uu, Ru, yu) {
          let Eu = 1 === arguments.length ? Bu(this._isDirected, uu) : ru(this._isDirected, uu, Ru, yu);
          return this._edgeLabels[Eu]
        }
        edgeAsObj(uu, Ru, yu) {
          let Eu = 1 === arguments.length ? this.edge(uu) : this.edge(uu, Ru, yu);
          return "object" != typeof Eu || null === Eu ? {
            label: Eu
          } : Eu
        }
        hasEdge(uu, Ru, yu) {
          return (1 === arguments.length ? Bu(this._isDirected, uu) : ru(this._isDirected, uu, Ru, yu)) in this._edgeLabels
        }
        removeEdge(uu, Ru, yu) {
          let Eu = 1 === arguments.length ? Bu(this._isDirected, uu) : ru(this._isDirected, uu, Ru, yu),
            Ku = this._edgeObjs[Eu];
          if (Ku) {
            let uu = Ku.v,
              Ru = Ku.w;
            delete this._edgeLabels[Eu], delete this._edgeObjs[Eu], Vu(this._preds[Ru], uu), Vu(this._sucs[uu], Ru), delete this._in[Ru][Eu], delete this._out[uu][Eu], this._edgeCount--
          }
          return this
        }
        inEdges(uu, Ru) {
          return this.isDirected() ? this.filterEdges(this._in[uu], uu, Ru) : this.nodeEdges(uu, Ru)
        }
        outEdges(uu, Ru) {
          return this.isDirected() ? this.filterEdges(this._out[uu], uu, Ru) : this.nodeEdges(uu, Ru)
        }
        nodeEdges(uu, Ru) {
          if (uu in this._nodes) return this.filterEdges({
            ...this._in[uu],
            ...this._out[uu]
          }, uu, Ru)
        }
        _removeFromParentsChildList(uu) {
          delete this._children[this._parent[uu]][uu]
        }
        filterEdges(uu, Ru, yu) {
          if (!uu) return;
          let Eu = Object.values(uu);
          return yu ? Eu.filter((uu => uu.v === Ru && uu.w === yu || uu.v === yu && uu.w === Ru)) : Eu
        }
      };

    function Xu(uu, Ru) {
      uu[Ru] ? uu[Ru]++ : uu[Ru] = 1
    }

    function Vu(uu, Ru) {
      void 0 !== uu[Ru] && !--uu[Ru] && delete uu[Ru]
    }

    function ru(uu, Ru, yu, Eu) {
      let Ku = "" + Ru,
        Qu = "" + yu;
      if (!uu && Ku > Qu) {
        let uu = Ku;
        Ku = Qu, Qu = uu
      }
      return Ku + "\x01" + Qu + "\x01" + (void 0 === Eu ? "\0" : Eu)
    }

    function Bu(uu, Ru) {
      return ru(uu, Ru.v, Ru.w, Ru.name)
    }

    function xu(uu) {
      let Ru = {
          options: {
            directed: uu.isDirected(),
            multigraph: uu.isMultigraph(),
            compound: uu.isCompound()
          },
          nodes: Su(uu),
          edges: pu(uu)
        },
        yu = uu.graph();
      return void 0 !== yu && (Ru.value = structuredClone(yu)), Ru
    }

    function Su(uu) {
      return uu.nodes().map((Ru => {
        let yu = uu.node(Ru),
          Eu = uu.parent(Ru),
          Ku = {
            v: Ru
          };
        return void 0 !== yu && (Ku.value = yu), void 0 !== Eu && (Ku.parent = Eu), Ku
      }))
    }

    function pu(uu) {
      return uu.edges().map((Ru => {
        let yu = uu.edge(Ru),
          Eu = {
            v: Ru.v,
            w: Ru.w
          };
        return void 0 !== Ru.name && (Eu.name = Ru.name), void 0 !== yu && (Eu.value = yu), Eu
      }))
    }

    function Tu(uu) {
      let Ru = new Nu(uu.options);
      return void 0 !== uu.value && Ru.setGraph(uu.value), uu.nodes.forEach((uu => {
        Ru.setNode(uu.v, uu.value), uu.parent && Ru.setParent(uu.v, uu.parent)
      })), uu.edges.forEach((uu => {
        Ru.setEdge({
          v: uu.v,
          w: uu.w,
          name: uu.name
        }, uu.value)
      })), Ru
    }
    Ju({}, {
      read: () => Tu,
      write: () => xu
    });
    var Wu = {};
    Ju(Wu, {
      CycleException: () => Gu,
      bellmanFord: () => Hu,
      components: () => du,
      dijkstra: () => ku,
      dijkstraAll: () => eu,
      findCycles: () => Du,
      floydWarshall: () => Iu,
      isAcyclic: () => nu,
      postorder: () => gu,
      preorder: () => cu,
      prim: () => Lu,
      shortestPaths: () => zu,
      tarjan: () => Au,
      topsort: () => Uu
    });
    var ju = () => 1;

    function Hu(uu, Ru, yu, Eu) {
      return function(uu, Ru, yu, Eu) {
        let Ku, Qu = {},
          mu = 0,
          Ju = uu.nodes(),
          Nu = function(uu) {
            let Ru = Qu[uu.v],
              Eu = Qu[uu.w];
            if (!Ru || !Eu) return;
            let mu = yu(uu);
            Ru.distance + mu < Eu.distance && (Qu[uu.w] = {
              distance: Ru.distance + mu,
              predecessor: uu.v
            }, Ku = !0)
          },
          Xu = function() {
            Ju.forEach((function(uu) {
              Eu(uu).forEach((function(Ru) {
                let yu = Ru.v === uu ? Ru.v : Ru.w,
                  Eu = yu === Ru.v ? Ru.w : Ru.v;
                Nu({
                  v: yu,
                  w: Eu
                })
              }))
            }))
          };
        Ju.forEach((function(uu) {
          let yu = uu === Ru ? 0 : Number.POSITIVE_INFINITY;
          Qu[uu] = {
            distance: yu,
            predecessor: ""
          }
        }));
        let Vu = Ju.length;
        for (let ru = 1; ru < Vu && (Ku = !1, mu++, Xu(), Ku); ru++);
        if (mu === Vu - 1 && (Ku = !1, Xu(), Ku)) throw new Error("The graph contains a negative weight cycle");
        return Qu
      }(uu, String(Ru), yu || ju, Eu || function(Ru) {
        var yu;
        return null != (yu = uu.outEdges(Ru)) ? yu : []
      })
    }

    function du(uu) {
      let Ru, yu = {},
        Eu = [];

      function Ku(Eu) {
        var Qu, mu;
        Eu in yu || (yu[Eu] = !0, Ru.push(Eu), null == (Qu = uu.successors(Eu)) || Qu.forEach(Ku), null == (mu = uu.predecessors(Eu)) || mu.forEach(Ku))
      }
      return uu.nodes().forEach((function(uu) {
        Ru = [], Ku(uu), Ru.length && Eu.push(Ru)
      })), Eu
    }
    var bu = class {
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
          let Ru = this._keyIndices[uu];
          if (void 0 !== Ru) return this._arr[Ru].priority
        }
        min() {
          if (0 === this.size()) throw new Error("Queue underflow");
          return this._arr[0].key
        }
        add(uu, Ru) {
          let yu = this._keyIndices,
            Eu = String(uu);
          if (!(Eu in yu)) {
            let uu = this._arr,
              Ku = uu.length;
            return yu[Eu] = Ku, uu.push({
              key: Eu,
              priority: Ru
            }), this._decrease(Ku), !0
          }
          return !1
        }
        removeMin() {
          if (0 === this.size()) throw new Error("Queue underflow");
          this._swap(0, this._arr.length - 1);
          let uu = this._arr.pop();
          return delete this._keyIndices[uu.key], this._heapify(0), uu.key
        }
        decrease(uu, Ru) {
          let yu = this._keyIndices[uu];
          if (void 0 === yu) throw new Error(`Key not found: ${uu}`);
          let Eu = this._arr[yu].priority;
          if (Ru > Eu) throw new Error(`New priority is greater than current priority. Key: ${uu} Old: ${Eu} New: ${Ru}`);
          this._arr[yu].priority = Ru, this._decrease(yu)
        }
        _heapify(uu) {
          let Ru = this._arr,
            yu = 2 * uu,
            Eu = yu + 1,
            Ku = uu;
          yu < Ru.length && (Ku = Ru[yu].priority < Ru[Ku].priority ? yu : Ku, Eu < Ru.length && (Ku = Ru[Eu].priority < Ru[Ku].priority ? Eu : Ku), Ku !== uu && (this._swap(uu, Ku), this._heapify(Ku)))
        }
        _decrease(uu) {
          let Ru, yu = this._arr,
            Eu = yu[uu].priority;
          for (; 0 !== uu && (Ru = uu >> 1, !(yu[Ru].priority < Eu));) this._swap(uu, Ru), uu = Ru
        }
        _swap(uu, Ru) {
          let yu = this._arr,
            Eu = this._keyIndices,
            Ku = yu[uu],
            Qu = yu[Ru];
          yu[uu] = Qu, yu[Ru] = Ku, Eu[Qu.key] = uu, Eu[Ku.key] = Ru
        }
      },
      Cu = () => 1;

    function ku(uu, Ru, yu, Eu) {
      return function(uu, Ru, yu, Eu) {
        let Ku, Qu, mu = {},
          Ju = new bu,
          Nu = function(uu) {
            let Ru = uu.v !== Ku ? uu.v : uu.w,
              Eu = mu[Ru];
            if (!Eu) return;
            let Nu = yu(uu),
              Xu = Qu.distance + Nu;
            if (Nu < 0) throw new Error("dijkstra does not allow negative edge weights. Bad edge: " + uu + " Weight: " + Nu);
            Xu < Eu.distance && (Eu.distance = Xu, Eu.predecessor = Ku, Ju.decrease(Ru, Xu))
          };
        for (uu.nodes().forEach((function(uu) {
            let yu = uu === Ru ? 0 : Number.POSITIVE_INFINITY;
            mu[uu] = {
              distance: yu,
              predecessor: ""
            }, Ju.add(uu, yu)
          })); Ju.size() > 0;) {
          Ku = Ju.removeMin();
          let uu = mu[Ku];
          if (!uu || uu.distance === Number.POSITIVE_INFINITY) break;
          Qu = uu, Eu(Ku).forEach(Nu)
        }
        return mu
      }(uu, String(Ru), yu || Cu, Eu || function(Ru) {
        var yu;
        return null != (yu = uu.outEdges(Ru)) ? yu : []
      })
    }

    function eu(uu, Ru, yu) {
      return uu.nodes().reduce((function(Eu, Ku) {
        return Eu[Ku] = ku(uu, Ku, Ru, yu), Eu
      }), {})
    }

    function Au(uu) {
      let Ru = 0,
        yu = [],
        Eu = {},
        Ku = [];

      function Qu(mu) {
        var Ju;
        let Nu = Eu[mu] = {
          onStack: !0,
          lowlink: Ru,
          index: Ru++
        };
        if (yu.push(mu), null == (Ju = uu.successors(mu)) || Ju.forEach((function(uu) {
            if (uu in Eu) {
              let Ru = Eu[uu];
              null != Ru && Ru.onStack && (Nu.lowlink = Math.min(Nu.lowlink, Ru.index))
            } else {
              Qu(uu);
              let Ru = Eu[uu];
              Ru && (Nu.lowlink = Math.min(Nu.lowlink, Ru.lowlink))
            }
          })), Nu.lowlink === Nu.index) {
          let uu, Ru = [];
          do {
            uu = yu.pop();
            let Ku = Eu[uu];
            Ku && (Ku.onStack = !1), Ru.push(uu)
          } while (mu !== uu);
          Ku.push(Ru)
        }
      }
      return uu.nodes().forEach((function(uu) {
        uu in Eu || Qu(uu)
      })), Ku
    }

    function Du(uu) {
      return Au(uu).filter((function(Ru) {
        var yu;
        let Eu = Ru[0];
        return !!Eu && (Ru.length > 1 || 1 === Ru.length && (null != (yu = uu.outEdges(Eu, Eu)) ? yu : []).length > 0)
      }))
    }
    var Mu = () => 1;

    function Iu(uu, Ru, yu) {
      return function(uu, Ru, yu) {
        let Eu = {},
          Ku = uu.nodes();
        return Ku.forEach((function(uu) {
          let Qu = {};
          Eu[uu] = Qu, Qu[uu] = {
            distance: 0,
            predecessor: ""
          }, Ku.forEach((function(Ru) {
            uu !== Ru && (Qu[Ru] = {
              distance: Number.POSITIVE_INFINITY,
              predecessor: ""
            })
          })), yu(uu).forEach((function(yu) {
            let Eu = yu.v === uu ? yu.w : yu.v,
              Ku = Ru(yu);
            Qu[Eu] = {
              distance: Ku,
              predecessor: uu
            }
          }))
        })), Ku.forEach((function(uu) {
          let Ru = Eu[uu];
          Ru && Ku.forEach((function(yu) {
            let Qu = Eu[yu];
            Qu && Ku.forEach((function(yu) {
              let Eu = Qu[uu],
                Ku = Ru[yu],
                mu = Qu[yu];
              if (Eu && Ku && mu) {
                let uu = Eu.distance + Ku.distance;
                uu < mu.distance && (mu.distance = uu, mu.predecessor = Ku.predecessor)
              }
            }))
          }))
        })), Eu
      }(uu, Ru || Mu, yu || function(Ru) {
        var yu;
        return null != (yu = uu.outEdges(Ru)) ? yu : []
      })
    }
    var Gu = class extends Error {
      constructor(uu) {
        super(uu), this.name = "CycleException"
      }
    };

    function Uu(uu) {
      let Ru = {},
        yu = {},
        Eu = [];
      if (uu.sinks().forEach((function Ku(Qu) {
          var mu;
          if (Qu in yu) throw new Gu;
          Qu in Ru || (yu[Qu] = !0, Ru[Qu] = !0, null == (mu = uu.predecessors(Qu)) || mu.forEach(Ku), delete yu[Qu], Eu.push(Qu))
        })), Object.keys(Ru).length !== uu.nodeCount()) throw new Gu;
      return Eu
    }

    function nu(uu) {
      try {
        Uu(uu)
      } catch (Ru) {
        if (Ru instanceof Gu) return !1;
        throw Ru
      }
      return !0
    }

    function su(uu, Ru, yu, Eu, Ku) {
      Array.isArray(Ru) || (Ru = [Ru]);
      let Qu = Ru => {
          var yu;
          return null != (yu = uu.isDirected() ? uu.successors(Ru) : uu.neighbors(Ru)) ? yu : []
        },
        mu = {};
      return Ru.forEach((function(Ru) {
        if (!uu.hasNode(Ru)) throw new Error("Graph does not have node: " + Ru);
        Ku = tu(uu, Ru, "post" === yu, mu, Qu, Eu, Ku)
      })), Ku
    }

    function tu(uu, Ru, yu, Eu, Ku, Qu, mu) {
      return Ru in Eu || (Eu[Ru] = !0, yu || (mu = Qu(mu, Ru)), Ku(Ru).forEach((function(Ru) {
        mu = tu(uu, Ru, yu, Eu, Ku, Qu, mu)
      })), yu && (mu = Qu(mu, Ru))), mu
    }

    function lu(uu, Ru, yu) {
      return su(uu, Ru, yu, (function(uu, Ru) {
        return uu.push(Ru), uu
      }), [])
    }

    function gu(uu, Ru) {
      return lu(uu, Ru, "post")
    }

    function cu(uu, Ru) {
      return lu(uu, Ru, "pre")
    }

    function Lu(uu, Ru) {
      var yu;
      let Eu, Ku = new Nu,
        Qu = {},
        mu = new bu;

      function Ju(uu) {
        let yu = uu.v === Eu ? uu.w : uu.v,
          Ku = mu.priority(yu);
        if (void 0 !== Ku) {
          let Ju = Ru(uu);
          Ju < Ku && (Qu[yu] = Eu, mu.decrease(yu, Ju))
        }
      }
      if (0 === uu.nodeCount()) return Ku;
      uu.nodes().forEach((function(uu) {
        mu.add(uu, Number.POSITIVE_INFINITY), Ku.setNode(uu)
      }));
      let Xu = uu.nodes()[0];
      void 0 !== Xu && mu.decrease(Xu, 0);
      let Vu = !1;
      for (; mu.size() > 0;) {
        if (Eu = mu.removeMin(), Eu in Qu) Ku.setEdge(Eu, Qu[Eu]);
        else {
          if (Vu) throw new Error("Input graph is not connected: " + uu);
          Vu = !0
        }
        null == (yu = uu.nodeEdges(Eu)) || yu.forEach(Ju)
      }
      return Ku
    }

    function zu(uu, Ru, yu, Eu) {
      return function(uu, Ru, yu, Eu) {
        if (void 0 === yu) return ku(uu, Ru, yu, Eu);
        let Ku = !1,
          Qu = uu.nodes();
        for (let mu = 0; mu < Qu.length; mu++) {
          let Ju = Qu[mu];
          if (void 0 === Ju) continue;
          let Nu = Eu(Ju);
          for (let uu = 0; uu < Nu.length; uu++) {
            let Ru = Nu[uu];
            if (!Ru) continue;
            let Eu = Ru.v === Ju ? Ru.v : Ru.w;
            yu({
              v: Eu,
              w: Eu === Ru.v ? Ru.w : Ru.v
            }) < 0 && (Ku = !0)
          }
          if (Ku) return Hu(uu, Ru, yu, Eu)
        }
        return ku(uu, Ru, yu, Eu)
      }(uu, Ru, yu, null != Eu ? Eu : Ru => {
        var yu;
        return null != (yu = uu.outEdges(Ru)) ? yu : []
      })
    }
    var Fu = Nu;

    function wu(uu, Ru, yu, Eu) {
      let Ku = Eu;
      for (; uu.hasNode(Ku);) Ku = fu(Eu);
      return yu.dummy = Ru, uu.setNode(Ku, yu), Ku
    }

    function Zu(uu) {
      let Ru = new Fu({
        multigraph: uu.isMultigraph()
      }).setGraph(uu.graph());
      return uu.nodes().forEach((yu => {
        uu.children(yu).length || Ru.setNode(yu, uu.node(yu))
      })), uu.edges().forEach((yu => {
        Ru.setEdge(yu, uu.edge(yu))
      })), Ru
    }

    function hu(uu, Ru) {
      let yu, Eu, Ku = uu.x,
        Qu = uu.y,
        mu = Ru.x - Ku,
        Ju = Ru.y - Qu,
        Nu = uu.width / 2,
        Xu = uu.height / 2;
      if (!mu && !Ju) throw new Error("Not possible to find intersection inside of the rectangle");
      return Math.abs(Ju) * Nu > Math.abs(mu) * Xu ? (Ju < 0 && (Xu = -Xu), yu = Xu * mu / Ju, Eu = Xu) : (mu < 0 && (Nu = -Nu), yu = Nu, Eu = Nu * Ju / mu), {
        x: Ku + yu,
        y: Qu + Eu
      }
    }

    function Pu(uu) {
      let Ru = uR(qu(uu) + 1).map((() => []));
      return uu.nodes().forEach((yu => {
        let Eu = uu.node(yu),
          Ku = Eu.rank;
        void 0 !== Ku && (Ru[Ku] || (Ru[Ku] = []), Ru[Ku][Eu.order] = yu)
      })), Ru
    }

    function iu(uu, Ru, yu, Eu) {
      let Ku = {
        width: 0,
        height: 0
      };
      return arguments.length >= 4 && (Ku.rank = yu, Ku.order = Eu), wu(uu, "border", Ku, Ru)
    }
    var Yu = 65535;

    function ou(uu, Ru) {
      if (Ru.length > Yu) {
        let yu = function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yu,
            yu = [];
          for (let Eu = 0; Eu < uu.length; Eu += Ru) {
            let Ku = uu.slice(Eu, Eu + Ru);
            yu.push(Ku)
          }
          return yu
        }(Ru);
        return uu(...yu.map((Ru => uu(...Ru))))
      }
      return uu(...Ru)
    }

    function qu(uu) {
      let Ru = uu.nodes().map((Ru => {
        let yu = uu.node(Ru).rank;
        return void 0 === yu ? Number.MIN_VALUE : yu
      }));
      return ou(Math.max, Ru)
    }

    function Ou(uu, Ru) {
      let yu = Date.now();
      try {
        return Ru()
      } finally {
        console.log(uu + " time: " + (Date.now() - yu) + "ms")
      }
    }

    function vu(uu, Ru) {
      return Ru()
    }
    var au = 0;

    function fu(uu) {
      return uu + "" + ++au
    }

    function uR(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      null == Ru && (Ru = uu, uu = 0);
      let Eu = uu => uu < Ru;
      yu < 0 && (Eu = uu => Ru < uu);
      let Ku = [];
      for (let Qu = uu; Eu(Qu); Qu += yu) Ku.push(Qu);
      return Ku
    }

    function RR(uu, Ru) {
      let yu = {};
      for (let Eu of Ru) void 0 !== uu[Eu] && (yu[Eu] = uu[Eu]);
      return yu
    }

    function yR(uu, Ru) {
      let yu;
      return yu = "string" == typeof Ru ? uu => uu[Ru] : Ru, Object.entries(uu).reduce(((uu, Ru) => {
        let [Eu, Ku] = Ru;
        return uu[Eu] = yu(Ku, Eu), uu
      }), {})
    }
    var ER = "\0";

    function KR(uu, Ru, yu) {
      var Eu, Ku, Qu, mu, Ju, Nu;
      if (!(uu && Ru && yu && "edge" === Ru.dummy && "edge" === yu.dummy && Ru.edgeObj && yu.edgeObj && uu[Ru.edgeObj.v] && uu[yu.edgeObj.v] && uu[Ru.edgeObj.w] && uu[yu.edgeObj.w])) return 0;
      let Xu = !0;
      Ru.edgeObj.w === yu.edgeObj.w && (Xu = !1);
      let Vu = Xu ? null != (Ku = null == (Eu = uu[Ru.edgeObj.v]) ? void 0 : Eu.rank) ? Ku : NaN : null != (mu = null == (Qu = uu[Ru.edgeObj.w]) ? void 0 : Qu.rank) ? mu : NaN,
        ru = Object.entries(uu).find((uu => {
          var yu, Eu;
          return (null == (yu = uu[1].edgeObj) ? void 0 : yu.v) === Ru.edgeObj.v && (null == (Eu = uu[1].edgeObj) ? void 0 : Eu.w) === Ru.edgeObj.w && uu[1].rank === Vu
        })),
        Bu = Object.entries(uu).find((uu => {
          var Ru, Eu;
          return (null == (Ru = uu[1].edgeObj) ? void 0 : Ru.v) === yu.edgeObj.v && (null == (Eu = uu[1].edgeObj) ? void 0 : Eu.w) === yu.edgeObj.w && uu[1].rank === Vu
        }));
      if (!ru || !Bu) return 0;
      let xu = null != (Ju = ru[1].order) ? Ju : NaN,
        Su = null != (Nu = Bu[1].order) ? Nu : NaN;
      return isNaN(xu - Su) ? 0 : xu - Su
    }
    var QR = "3.1.1";

    function mR(uu) {
      uu._prev._next = uu._next, uu._next._prev = uu._prev, delete uu._next, delete uu._prev
    }

    function JR(uu, Ru) {
      if ("_next" !== uu && "_prev" !== uu) return Ru
    }
    var NR = class {
        constructor() {
          Ku(this, "_sentinel");
          let uu = {};
          uu._next = uu._prev = uu, this._sentinel = uu
        }
        dequeue() {
          let uu = this._sentinel,
            Ru = uu._prev;
          if (Ru !== uu) return mR(Ru), Ru
        }
        enqueue(uu) {
          let Ru = this._sentinel;
          uu._prev && uu._next && mR(uu), uu._next = Ru._next, Ru._next._prev = uu, Ru._next = uu, uu._prev = Ru
        }
        toString() {
          let uu = [],
            Ru = this._sentinel,
            yu = Ru._prev;
          for (; yu !== Ru;) uu.push(JSON.stringify(yu, JR)), yu = yu._prev;
          return "[" + uu.join(", ") + "]"
        }
      },
      XR = () => 1;

    function VR(uu, Ru) {
      if (uu.nodeCount() <= 1) return [];
      let yu = function(uu, Ru) {
        let yu = new Fu,
          Eu = 0,
          Ku = 0;
        uu.nodes().forEach((uu => {
          yu.setNode(uu, {
            v: uu,
            in: 0,
            out: 0
          })
        })), uu.edges().forEach((uu => {
          let Qu = yu.edge(uu.v, uu.w) || 0,
            mu = Ru(uu),
            Ju = Qu + mu;
          yu.setEdge(uu.v, uu.w, Ju);
          let Nu = yu.node(uu.v),
            Xu = yu.node(uu.w);
          Ku = Math.max(Ku, Nu.out += mu), Eu = Math.max(Eu, Xu.in += mu)
        }));
        let Qu = function(uu) {
            let Ru = [];
            for (let yu = 0; yu < uu; yu++) Ru.push(yu);
            return Ru
          }(Ku + Eu + 3).map((() => new NR)),
          mu = Eu + 1;
        return yu.nodes().forEach((uu => {
          BR(Qu, mu, yu.node(uu))
        })), {
          graph: yu,
          buckets: Qu,
          zeroIdx: mu
        }
      }(uu, Ru || XR);
      return function(uu, Ru, yu) {
        var Eu;
        let Ku, Qu = [],
          mu = Ru[Ru.length - 1],
          Ju = Ru[0];
        for (; uu.nodeCount();) {
          for (; Ku = Ju.dequeue();) rR(uu, Ru, yu, Ku);
          for (; Ku = mu.dequeue();) rR(uu, Ru, yu, Ku);
          if (uu.nodeCount())
            for (let mu = Ru.length - 2; mu > 0; --mu)
              if (Ku = null == (Eu = Ru[mu]) ? void 0 : Eu.dequeue(), Ku) {
                Qu = Qu.concat(rR(uu, Ru, yu, Ku, !0) || []);
                break
              }
        }
        return Qu
      }(yu.graph, yu.buckets, yu.zeroIdx).flatMap((Ru => uu.outEdges(Ru.v, Ru.w) || []))
    }

    function rR(uu, Ru, yu, Eu, Ku) {
      let Qu = [],
        mu = Ku ? Qu : void 0;
      return (uu.inEdges(Eu.v) || []).forEach((Eu => {
        let mu = uu.edge(Eu),
          Ju = uu.node(Eu.v);
        Ku && Qu.push({
          v: Eu.v,
          w: Eu.w
        }), Ju.out -= mu, BR(Ru, yu, Ju)
      })), (uu.outEdges(Eu.v) || []).forEach((Eu => {
        let Ku = uu.edge(Eu),
          Qu = Eu.w,
          mu = uu.node(Qu);
        mu.in -= Ku, BR(Ru, yu, mu)
      })), uu.removeNode(Eu.v), mu
    }

    function BR(uu, Ru, yu) {
      var Eu, Ku, Qu;
      yu.out ? yu.in ? null == (Qu = uu[yu.out - yu.in + Ru]) || Qu.enqueue(yu) : null == (Ku = uu[uu.length - 1]) || Ku.enqueue(yu) : null == (Eu = uu[0]) || Eu.enqueue(yu)
    }

    function xR(uu, Ru) {
      var yu;
      ("greedy" === uu.graph().acyclicer ? VR(uu, (yu = uu, uu => yu.edge(uu).weight)) : function(uu, Ru) {
        let yu = [],
          Eu = {},
          Ku = {};

        function Qu(Ru) {
          Object.hasOwn(Ku, Ru) || (Ku[Ru] = !0, Eu[Ru] = !0, uu.outEdges(Ru).forEach((uu => {
            Object.hasOwn(Eu, uu.w) ? yu.push(uu) : Qu(uu.w)
          })), delete Eu[Ru])
        }

        function mu(Qu) {
          var Ju;
          Object.hasOwn(Ku, Qu) || (Ku[Qu] = !0, Eu[Qu] = !0, null == (Ju = uu.outEdges(Qu)) || Ju.forEach((Ku => {
            var Ju, Nu;
            Object.hasOwn(Eu, Ku.w) || (null == (Ju = Ru.node(Qu)) ? void 0 : Ju.rank) > (null == (Nu = Ru.node(Ku.w)) ? void 0 : Nu.rank) && function(uu, Ru, yu) {
              let Eu = new Set;

              function Ku(Ru) {
                var Qu;
                if (uu.sources().includes(Ru)) return !0;
                Eu.add(Ru);
                for (let mu of null != (Qu = uu.inEdges(Ru)) ? Qu : [])
                  if ((mu.v !== yu.v || mu.w !== yu.w) && !Eu.has(mu.v) && Ku(mu.v)) return !0;
                return !1
              }
              return Ku(Ru)
            }(uu, Ku.w, Ku) ? yu.push(Ku) : mu(Ku.w)
          })), delete Eu[Qu])
        }
        let Ju = Qu;
        return Ru && "function" == typeof Ru.node && (Ju = mu), uu.sources().forEach(Ju), uu.nodes().forEach(Ju), yu
      }(uu, null != Ru ? Ru : null)).forEach((Ru => {
        let yu = uu.edge(Ru);
        uu.removeEdge(Ru), yu.forwardName = Ru.name, yu.reversed = !0, uu.setEdge(Ru.w, Ru.v, yu, fu("rev"))
      }))
    }

    function SR(uu) {
      uu.graph().dummyChains = [], uu.edges().forEach((Ru => function(uu, Ru) {
        let yu, Eu, Ku, Qu = Ru.v,
          mu = uu.node(Qu).rank,
          Ju = Ru.w,
          Nu = uu.node(Ju).rank,
          Xu = Ru.name,
          Vu = uu.edge(Ru),
          ru = Vu.labelRank;
        if (Nu === mu + 1) return;
        for (uu.removeEdge(Ru), Ku = 0, ++mu; mu < Nu; ++Ku, ++mu) Vu.points = [], Eu = {
          width: 0,
          height: 0,
          edgeLabel: Vu,
          edgeObj: Ru,
          rank: mu
        }, yu = wu(uu, "edge", Eu, "_d"), mu === ru && (Eu.width = Vu.width, Eu.height = Vu.height, Eu.dummy = "edge-label", Eu.labelpos = Vu.labelpos), uu.setEdge(Qu, yu, {
          weight: Vu.weight
        }, Xu), 0 === Ku && uu.graph().dummyChains.push(yu), Qu = yu;
        uu.setEdge(Qu, Ju, {
          weight: Vu.weight
        }, Xu)
      }(uu, Ru)))
    }

    function pR(uu) {
      let Ru = {};
      uu.sources().forEach((function yu(Eu) {
        let Ku = uu.node(Eu);
        if (Object.hasOwn(Ru, Eu)) return Ku.rank;
        Ru[Eu] = !0;
        let Qu = uu.outEdges(Eu),
          mu = Qu ? Qu.map((Ru => null == Ru ? Number.POSITIVE_INFINITY : yu(Ru.w) - uu.edge(Ru).minlen)) : [],
          Ju = ou(Math.min, mu);
        return Ju === Number.POSITIVE_INFINITY && (Ju = 0), Ku.rank = Ju
      }))
    }

    function TR(uu, Ru) {
      return uu.node(Ru.w).rank - uu.node(Ru.v).rank - uu.edge(Ru).minlen
    }
    var WR = function(uu) {
      let Ru = new Fu({
          directed: !1
        }),
        yu = uu.nodes();
      if (0 === yu.length) throw new Error("Graph must have at least one node");
      let Eu, Ku, Qu = yu[0],
        mu = uu.nodeCount();
      for (Ru.setNode(Qu, {}); jR(Ru, uu) < mu && (Eu = HR(Ru, uu), Eu);) Ku = Ru.hasNode(Eu.v) ? TR(uu, Eu) : -TR(uu, Eu), dR(Ru, uu, Ku);
      return Ru
    };

    function jR(uu, Ru) {
      return uu.nodes().forEach((function yu(Eu) {
        let Ku = Ru.nodeEdges(Eu);
        Ku && Ku.forEach((Ku => {
          let Qu = Ku.v,
            mu = Eu === Qu ? Ku.w : Qu;
          !uu.hasNode(mu) && !TR(Ru, Ku) && (uu.setNode(mu, {}), uu.setEdge(Eu, mu, {}), yu(mu))
        }))
      })), uu.nodeCount()
    }

    function HR(uu, Ru) {
      return Ru.edges().reduce(((yu, Eu) => {
        let Ku = Number.POSITIVE_INFINITY;
        return uu.hasNode(Eu.v) !== uu.hasNode(Eu.w) && (Ku = TR(Ru, Eu)), Ku < yu[0] ? [Ku, Eu] : yu
      }), [Number.POSITIVE_INFINITY, null])[1]
    }

    function dR(uu, Ru, yu) {
      uu.nodes().forEach((uu => Ru.node(uu).rank += yu))
    }
    var {
      preorder: bR,
      postorder: CR
    } = Wu, kR = eR;

    function eR(uu) {
      uu = function(uu) {
        let Ru = (new Fu).setGraph(uu.graph());
        return uu.nodes().forEach((yu => Ru.setNode(yu, uu.node(yu)))), uu.edges().forEach((yu => {
          let Eu = Ru.edge(yu.v, yu.w) || {
              weight: 0,
              minlen: 1
            },
            Ku = uu.edge(yu);
          Ru.setEdge(yu.v, yu.w, {
            weight: Eu.weight + Ku.weight,
            minlen: Math.max(Eu.minlen, Ku.minlen)
          })
        })), Ru
      }(uu), pR(uu);
      let Ru, yu, Eu = WR(uu);
      for (MR(Eu), AR(Eu, uu); Ru = GR(Eu);) yu = UR(Eu, uu, Ru), nR(Eu, uu, Ru, yu)
    }

    function AR(uu, Ru) {
      let yu = CR(uu, uu.nodes());
      yu = yu.slice(0, yu.length - 1), yu.forEach((yu => function(uu, Ru, yu) {
        let Eu = uu.node(yu).parent,
          Ku = uu.edge(yu, Eu);
        Ku.cutvalue = DR(uu, Ru, yu)
      }(uu, Ru, yu)))
    }

    function DR(uu, Ru, yu) {
      let Eu = uu.node(yu).parent,
        Ku = !0,
        Qu = Ru.edge(yu, Eu),
        mu = 0;
      Qu || (Ku = !1, Qu = Ru.edge(Eu, yu)), mu = Qu.weight;
      let Ju = Ru.nodeEdges(yu);
      return Ju && Ju.forEach((Qu => {
        let Ju = Qu.v === yu,
          Nu = Ju ? Qu.w : Qu.v;
        if (Nu !== Eu) {
          let Eu = Ju === Ku,
            Xu = Ru.edge(Qu).weight;
          if (mu += Eu ? Xu : -Xu, function(uu, Ru, yu) {
              return uu.hasEdge(Ru, yu)
            }(uu, yu, Nu)) {
            let Ru = uu.edge(yu, Nu).cutvalue;
            mu += Eu ? -Ru : Ru
          }
        }
      })), mu
    }

    function MR(uu, Ru) {
      arguments.length < 2 && (Ru = uu.nodes()[0]), IR(uu, {}, 1, Ru)
    }

    function IR(uu, Ru, yu, Eu, Ku) {
      let Qu = yu,
        mu = uu.node(Eu);
      Ru[Eu] = !0;
      let Ju = uu.neighbors(Eu);
      return Ju && Ju.forEach((Ku => {
        Object.hasOwn(Ru, Ku) || (yu = IR(uu, Ru, yu, Ku, Eu))
      })), mu.low = Qu, mu.lim = yu++, Ku ? mu.parent = Ku : delete mu.parent, yu
    }

    function GR(uu) {
      return uu.edges().find((Ru => uu.edge(Ru).cutvalue < 0))
    }

    function UR(uu, Ru, yu) {
      let Eu = yu.v,
        Ku = yu.w;
      Ru.hasEdge(Eu, Ku) || (Eu = yu.w, Ku = yu.v);
      let Qu = uu.node(Eu),
        mu = uu.node(Ku),
        Ju = Qu,
        Nu = !1;
      return Qu.lim > mu.lim && (Ju = mu, Nu = !0), Ru.edges().filter((Ru => Nu === sR(uu, uu.node(Ru.v), Ju) && Nu !== sR(uu, uu.node(Ru.w), Ju))).reduce(((uu, yu) => TR(Ru, yu) < TR(Ru, uu) ? yu : uu))
    }

    function nR(uu, Ru, yu, Eu) {
      let Ku = yu.v,
        Qu = yu.w;
      uu.removeEdge(Ku, Qu), uu.setEdge(Eu.v, Eu.w, {}), MR(uu), AR(uu, Ru),
        function(uu, Ru) {
          let yu = uu.nodes().find((Ru => !uu.node(Ru).parent));
          if (!yu) return;
          let Eu = bR(uu, [yu]);
          Eu = Eu.slice(1), Eu.forEach((yu => {
            let Eu = uu.node(yu).parent,
              Ku = Ru.edge(yu, Eu),
              Qu = !1;
            Ku || (Ku = Ru.edge(Eu, yu), Qu = !0), Ru.node(yu).rank = Ru.node(Eu).rank + (Qu ? Ku.minlen : -Ku.minlen)
          }))
        }(uu, Ru)
    }

    function sR(uu, Ru, yu) {
      return yu.low <= Ru.lim && Ru.lim <= yu.lim
    }
    eR.initLowLimValues = MR, eR.initCutValues = AR, eR.calcCutValue = DR, eR.leaveEdge = GR, eR.enterEdge = UR, eR.exchangeEdges = nR;
    var tR = function(uu) {
      let Ru = uu.graph().ranker;
      if ("function" == typeof Ru) return Ru(uu);
      switch (Ru) {
        case "network-simplex":
        default:
          gR(uu);
          break;
        case "tight-tree":
          ! function(uu) {
            pR(uu), WR(uu)
          }(uu);
          break;
        case "longest-path":
          lR(uu);
        case "none":
      }
    };
    var lR = pR;

    function gR(uu) {
      kR(uu)
    }
    var cR = function(uu) {
      let Ru = function(uu) {
          let Ru = {},
            yu = 0;

          function Eu(Ku) {
            let Qu = yu;
            uu.children(Ku).forEach(Eu), Ru[Ku] = {
              low: Qu,
              lim: yu++
            }
          }
          return uu.children(ER).forEach(Eu), Ru
        }(uu),
        yu = uu.graph();
      if (!Array.isArray(yu.dummyChains)) return;
      yu.dummyChains.forEach((yu => {
        let Eu = uu.node(yu),
          Ku = Eu.edgeObj,
          Qu = function(uu, Ru, yu, Eu) {
            let Ku, Qu = [],
              mu = [],
              Ju = Math.min(Ru[yu].low, Ru[Eu].low),
              Nu = Math.max(Ru[yu].lim, Ru[Eu].lim);
            Ku = yu;
            do {
              Ku = uu.parent(Ku), Qu.push(Ku)
            } while (Ku && (Ru[Ku].low > Ju || Nu > Ru[Ku].lim));
            let Xu = Ku,
              Vu = Eu;
            for (;
              (Vu = uu.parent(Vu)) !== Xu;) mu.push(Vu);
            return {
              path: Qu.concat(mu.reverse()),
              lca: Xu
            }
          }(uu, Ru, Ku.v, Ku.w),
          mu = Qu.path,
          Ju = Qu.lca,
          Nu = 0,
          Xu = mu[Nu],
          Vu = !0;
        for (; yu !== Ku.w;) {
          if (Eu = uu.node(yu), Vu) {
            for (;
              (Xu = mu[Nu]) !== Ju && uu.node(Xu).maxRank < Eu.rank;) Nu++;
            Xu === Ju && (Vu = !1)
          }
          if (!Vu) {
            for (; Nu < mu.length - 1 && uu.node(mu[Nu + 1]).minRank <= Eu.rank;) Nu++;
            Xu = mu[Nu]
          }
          void 0 !== Xu && uu.setParent(yu, Xu), yu = uu.successors(yu)[0]
        }
      }))
    };

    function LR(uu) {
      let Ru = wu(uu, "root", {}, "_root"),
        yu = function(uu) {
          let Ru = {};

          function yu(Eu, Ku) {
            let Qu = uu.children(Eu);
            Qu && Qu.length && Qu.forEach((uu => yu(uu, Ku + 1))), Ru[Eu] = Ku
          }
          return uu.children(ER).forEach((uu => yu(uu, 1))), Ru
        }(uu),
        Eu = Object.values(yu),
        Ku = ou(Math.max, Eu) - 1,
        Qu = 2 * Ku + 1;
      uu.graph().nestingRoot = Ru, uu.edges().forEach((Ru => uu.edge(Ru).minlen *= Qu));
      let mu = function(uu) {
        return uu.edges().reduce(((Ru, yu) => Ru + uu.edge(yu).weight), 0)
      }(uu) + 1;
      uu.children(ER).forEach((Eu => {
        zR(uu, Ru, Qu, mu, Ku, yu, Eu)
      })), uu.graph().nodeRankFactor = Qu
    }

    function zR(uu, Ru, yu, Eu, Ku, Qu, mu) {
      var Ju;
      let Nu = uu.children(mu);
      if (!Nu.length) return void(mu !== Ru && uu.setEdge(Ru, mu, {
        weight: 0,
        minlen: yu
      }));
      let Xu = iu(uu, "_bt"),
        Vu = iu(uu, "_bb"),
        ru = uu.node(mu);
      uu.setParent(Xu, mu), ru.borderTop = Xu, uu.setParent(Vu, mu), ru.borderBottom = Vu, Nu.forEach((Ju => {
        var Nu;
        zR(uu, Ru, yu, Eu, Ku, Qu, Ju);
        let ru = uu.node(Ju),
          Bu = ru.borderTop ? ru.borderTop : Ju,
          xu = ru.borderBottom ? ru.borderBottom : Ju,
          Su = ru.borderTop ? Eu : 2 * Eu,
          pu = Bu !== xu ? 1 : Ku - (null != (Nu = Qu[mu]) ? Nu : 0) + 1;
        uu.setEdge(Xu, Bu, {
          weight: Su,
          minlen: pu,
          nestingEdge: !0
        }), uu.setEdge(xu, Vu, {
          weight: Su,
          minlen: pu,
          nestingEdge: !0
        })
      })), uu.parent(mu) || uu.setEdge(Ru, Xu, {
        weight: 0,
        minlen: Ku + (null != (Ju = Qu[mu]) ? Ju : 0)
      })
    }
    var FR = function(uu) {
      uu.children(ER).forEach((function Ru(yu) {
        let Eu = uu.children(yu),
          Ku = uu.node(yu);
        if (Eu.length && Eu.forEach(Ru), Ku && Object.hasOwn(Ku, "minRank")) {
          Ku.borderLeft = [], Ku.borderRight = [];
          for (let Ru = Ku.minRank, Eu = Ku.maxRank + 1; Ru < Eu; ++Ru) wR(uu, "borderLeft", "_bl", yu, Ku, Ru), wR(uu, "borderRight", "_br", yu, Ku, Ru)
        }
      }))
    };

    function wR(uu, Ru, yu, Eu, Ku, Qu) {
      let mu = {
          width: 0,
          height: 0,
          rank: Qu,
          borderType: Ru
        },
        Ju = Ku[Ru][Qu - 1],
        Nu = wu(uu, "border", mu, yu);
      Ku[Ru][Qu] = Nu, uu.setParent(Nu, Eu), Ju && uu.setEdge(Ju, Nu, {
        weight: 1
      })
    }

    function ZR(uu) {
      var Ru;
      let yu = null == (Ru = uu.graph().rankdir) ? void 0 : Ru.toLowerCase();
      ("bt" === yu || "rl" === yu) && function(uu) {
        uu.nodes().forEach((Ru => iR(uu.node(Ru)))), uu.edges().forEach((Ru => {
          var yu;
          let Eu = uu.edge(Ru);
          null == (yu = Eu.points) || yu.forEach(iR), Object.hasOwn(Eu, "y") && iR(Eu)
        }))
      }(uu), ("lr" === yu || "rl" === yu) && (function(uu) {
        uu.nodes().forEach((Ru => YR(uu.node(Ru)))), uu.edges().forEach((Ru => {
          var yu;
          let Eu = uu.edge(Ru);
          null == (yu = Eu.points) || yu.forEach(YR), Object.hasOwn(Eu, "x") && YR(Eu)
        }))
      }(uu), hR(uu))
    }

    function hR(uu) {
      uu.nodes().forEach((Ru => PR(uu.node(Ru)))), uu.edges().forEach((Ru => PR(uu.edge(Ru))))
    }

    function PR(uu) {
      let Ru = uu.width;
      uu.width = uu.height, uu.height = Ru
    }

    function iR(uu) {
      uu.y = -uu.y
    }

    function YR(uu) {
      let Ru = uu.x;
      uu.x = uu.y, uu.y = Ru
    }

    function oR(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        yu = {},
        Eu = uu.nodes().filter((Ru => !uu.children(Ru).length)),
        Ku = Eu.map((Ru => uu.node(Ru).rank)),
        Qu = uR(ou(Math.max, Ku) + 1).map((() => []));
      return Eu.sort(((Ru, yu) => uu.node(Ru).rank - uu.node(yu).rank)).forEach((function Eu(Ku) {
        if (yu[Ku]) return;
        yu[Ku] = !0;
        let mu = uu.node(Ku);
        Qu[mu.rank].push(Ku);
        let Ju = uu.successors(Ku);
        Ju && [...Ju].sort(((yu, Eu) => function(yu, Eu) {
          let Ku = uu.node(yu),
            Qu = uu.node(Eu);
          return KR(Ru, Ku, Qu)
        }(yu, Eu))).forEach(Eu)
      })), Qu
    }

    function qR(uu, Ru) {
      let yu = 0;
      for (let Eu = 1; Eu < Ru.length; ++Eu) yu += OR(uu, Ru[Eu - 1], Ru[Eu]);
      return yu
    }

    function OR(uu, Ru, yu) {
      let Eu = function(uu, Ru) {
          return uu.reduce(((uu, yu, Eu) => (uu[yu] = Ru[Eu], uu)), {})
        }(yu, yu.map(((uu, Ru) => Ru))),
        Ku = Ru.flatMap((Ru => {
          let yu = uu.outEdges(Ru);
          return yu ? yu.map((Ru => ({
            pos: Eu[Ru.w],
            weight: uu.edge(Ru).weight
          }))).sort(((uu, Ru) => uu.pos - Ru.pos)) : []
        })),
        Qu = 1;
      for (; Qu < yu.length;) Qu <<= 1;
      let mu = 2 * Qu - 1;
      Qu -= 1;
      let Ju = new Array(mu).fill(0),
        Nu = 0;
      return Ku.forEach((uu => {
        let Ru = uu.pos + Qu;
        Ju[Ru] += uu.weight;
        let yu = 0;
        for (; Ru > 0;) Ru % 2 && (yu += Ju[Ru + 1]), Ru = Ru - 1 >> 1, Ju[Ru] += uu.weight;
        Nu += uu.weight * yu
      })), Nu
    }

    function vR(uu, Ru) {
      let yu = {};
      return uu.forEach(((uu, Ru) => {
          let Eu = {
            indegree: 0,
            in: [],
            out: [],
            vs: [uu.v],
            i: Ru
          };
          void 0 !== uu.barycenter && (Eu.barycenter = uu.barycenter, Eu.weight = uu.weight), yu[uu.v] = Eu
        })), Ru.edges().forEach((uu => {
          let Ru = yu[uu.v],
            Eu = yu[uu.w];
          void 0 !== Ru && void 0 !== Eu && (Eu.indegree++, Ru.out.push(Eu))
        })),
        function(uu) {
          let Ru = [];

          function yu(uu) {
            return Ru => {
              Ru.merged || (void 0 === Ru.barycenter || void 0 === uu.barycenter || Ru.barycenter >= uu.barycenter) && function(uu, Ru) {
                let yu = 0,
                  Eu = 0;
                uu.weight && (yu += uu.barycenter * uu.weight, Eu += uu.weight), Ru.weight && (yu += Ru.barycenter * Ru.weight, Eu += Ru.weight), uu.vs = Ru.vs.concat(uu.vs), uu.barycenter = yu / Eu, uu.weight = Eu, uu.i = Math.min(Ru.i, uu.i), Ru.merged = !0
              }(uu, Ru)
            }
          }

          function Eu(Ru) {
            return yu => {
              yu.in.push(Ru), 0 === --yu.indegree && uu.push(yu)
            }
          }
          for (; uu.length;) {
            let Ku = uu.pop();
            Ru.push(Ku), Ku.in.reverse().forEach(yu(Ku)), Ku.out.forEach(Eu(Ku))
          }
          return Ru.filter((uu => !uu.merged)).map((uu => RR(uu, ["vs", "i", "barycenter", "weight"])))
        }(Object.values(yu).filter((uu => !uu.indegree)))
    }

    function aR(uu, Ru, yu, Eu, Ku) {
      let Qu = {},
        mu = null,
        Ju = null,
        Nu = Ku;
      "boolean" == typeof Ru ? (Nu = Ru, Qu = {}) : Ru && (Qu = Ru, mu = null != yu ? yu : null, Ju = null != Eu ? Eu : null);
      let Xu = function(uu, Ru) {
          let yu = {
            lhs: [],
            rhs: []
          };
          return uu.forEach((uu => {
            Ru(uu) ? yu.lhs.push(uu) : yu.rhs.push(uu)
          })), yu
        }(uu, (uu => Object.hasOwn(uu, "barycenter"))),
        Vu = Xu.lhs,
        ru = Xu.rhs.sort(((uu, Ru) => Ru.i - uu.i)),
        Bu = [],
        xu = 0,
        Su = 0,
        pu = 0;
      Vu.sort(function(uu, Ru, yu) {
        return (Eu, Ku) => {
          if (Eu.barycenter < Ku.barycenter) return -1;
          if (Eu.barycenter > Ku.barycenter) return 1;
          if (uu && ("string" == typeof Eu.vs[0] || "string" == typeof Ku.vs[0])) {
            let yu = uu.node(Eu.vs[0]),
              Qu = uu.node(Ku.vs[0]),
              mu = KR(Ru, yu, Qu);
            if (0 !== mu) return mu
          }
          return yu ? Ku.i - Eu.i : Eu.i - Ku.i
        }
      }(Ju, mu, !!Nu));
      for (let [Wu, ju] of Object.entries(Qu)) {
        let uu = Vu.findIndex((uu => uu.vs[0] === Wu));
        Vu.splice(uu + 1, 0, ju)
      }
      pu = fR(Bu, ru, pu), Vu.forEach((uu => {
        pu += uu.vs.length, Bu.push(uu.vs), xu += uu.barycenter * uu.weight, Su += uu.weight, pu = fR(Bu, ru, pu)
      }));
      let Tu = {
        vs: Bu.flat(1)
      };
      return Su && (Tu.barycenter = xu / Su, Tu.weight = Su), Tu
    }

    function fR(uu, Ru, yu) {
      let Eu;
      for (; Ru.length && (Eu = Ru[Ru.length - 1]).i <= yu;) Ru.pop(), uu.push(Eu.vs), yu++;
      return yu
    }

    function uy(uu, Ru, yu, Eu, Ku) {
      var Qu, mu, Ju, Nu, Xu, Vu, ru, Bu, xu, Su, pu;
      let Tu = null,
        Wu = Ku;
      "boolean" == typeof Eu ? (Wu = Eu, Tu = null) : void 0 !== Eu && (Tu = Eu);
      let ju = uu.children(Ru),
        Hu = uu.node(Ru),
        du = Hu ? Hu.borderLeft : void 0,
        bu = Hu ? Hu.borderRight : void 0,
        Cu = {};
      du && (ju = ju.filter((uu => uu !== du && uu !== bu)));
      let ku = function(uu) {
        return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((Ru => {
          let yu = uu.inEdges(Ru);
          if (!yu || !yu.length) return {
            v: Ru
          };
          {
            let Eu = yu.reduce(((Ru, yu) => {
              let Eu = uu.edge(yu),
                Ku = uu.node(yu.v);
              return {
                sum: Ru.sum + Eu.weight * Ku.order,
                weight: Ru.weight + Eu.weight
              }
            }), {
              sum: 0,
              weight: 0
            });
            return {
              v: Ru,
              barycenter: Eu.sum / Eu.weight,
              weight: Eu.weight
            }
          }
        }))
      }(uu, ju);
      ku.forEach((Ru => {
        if (uu.children(Ru.v).length) {
          let {
            result: Eu
          } = uy(uu, Ru.v, yu, Tu, Wu);
          Cu[Ru.v] = Eu, Object.hasOwn(Eu, "barycenter") && function(uu, Ru) {
            void 0 !== uu.barycenter ? (uu.barycenter = (uu.barycenter * uu.weight + Ru.barycenter * Ru.weight) / (uu.weight + Ru.weight), uu.weight += Ru.weight) : (uu.barycenter = Ru.barycenter, uu.weight = Ru.weight)
          }(Ru, Eu)
        }
      }));
      let eu = vR(ku, yu);
      ! function(uu, Ru) {
        uu.forEach((uu => {
          uu.vs = uu.vs.flatMap((uu => Ru[uu] ? Ru[uu].vs : uu))
        }))
      }(eu, Cu);
      let Au = {},
        Du = !1;
      for (let Iu = 0; Iu < eu.length; Iu++)
        for (let Ru = Iu + 1; Ru < eu.length; Ru++)
          if (eu[Iu] && eu[Ru] && null != (Qu = eu[Iu]) && Qu.barycenter && null != (mu = eu[Ru]) && mu.barycenter && (null == (Ju = eu[Iu]) ? void 0 : Ju.barycenter) === eu[Ru].barycenter) {
            let yu = null != (Xu = null == (Nu = eu[Iu]) ? void 0 : Nu.vs[0]) ? Xu : "",
              Eu = null != (ru = null == (Vu = eu[Ru]) ? void 0 : Vu.vs[0]) ? ru : "",
              Ku = uu.node(yu),
              Qu = uu.node(Eu);
            if ("edge" === Ku.dummy && "edge" === Qu.dummy && (null == (Bu = Ku.edgeObj) ? void 0 : Bu.v) === (null == (xu = Qu.edgeObj) ? void 0 : xu.v) && (null == (Su = Ku.edgeObj) ? void 0 : Su.w) === (null == (pu = Qu.edgeObj) ? void 0 : pu.w)) {
              if (Ku.edgeLabel.reversed) {
                Au[Eu] = eu[Iu], eu.splice(Iu, 1), Iu--;
                break
              }
              Au[yu] = eu[Ru], eu.splice(Ru, 1), Ru--
            } else Du = !0
          } let Mu = aR(eu, Au, Tu, uu, Wu);
      if (du && bu) {
        Mu.vs = [du, Mu.vs, bu].flat(1);
        let Ru = uu.predecessors(du);
        if (Ru && Ru.length) {
          let yu = uu.node(Ru[0]),
            Eu = uu.predecessors(bu),
            Ku = uu.node(Eu[0]);
          Object.hasOwn(Mu, "barycenter") || (Mu.barycenter = 0, Mu.weight = 0), Mu.barycenter = (Mu.barycenter * Mu.weight + yu.order + Ku.order) / (Mu.weight + 2), Mu.weight += 2
        }
      }
      return Object.defineProperty(Mu, "result", {
        value: Mu,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Object.defineProperty(Mu, "usedBias", {
        value: Du,
        enumerable: !1,
        configurable: !0,
        writable: !0
      }), Mu
    }

    function Ry(uu, Ru, yu, Eu) {
      Eu || (Eu = uu.nodes());
      let Ku = function(uu) {
          let Ru;
          for (; uu.hasNode(Ru = fu("_root")););
          return Ru
        }(uu),
        Qu = new Fu({
          compound: !0
        }).setGraph({
          root: Ku
        }).setDefaultNodeLabel((Ru => uu.node(Ru)));
      return Eu.forEach((Eu => {
        let mu = uu.node(Eu),
          Ju = uu.parent(Eu);
        if (mu.rank === Ru || mu.minRank <= Ru && Ru <= mu.maxRank) {
          Qu.setNode(Eu), Qu.setParent(Eu, Ju || Ku);
          let Nu = uu[yu](Eu);
          Nu && Nu.forEach((Ru => {
            let yu = Ru.v === Eu ? Ru.w : Ru.v,
              Ku = Qu.edge(yu, Eu),
              mu = void 0 !== Ku ? Ku.weight : 0;
            Qu.setEdge(yu, Eu, {
              weight: uu.edge(Ru).weight + mu
            })
          })), Object.hasOwn(mu, "minRank") && Qu.setNode(Eu, {
            borderLeft: mu.borderLeft[Ru],
            borderRight: mu.borderRight[Ru]
          })
        }
      })), Qu
    }

    function yy(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      if ("function" == typeof Ru.customOrder) return void Ru.customOrder(uu, yy);
      let Eu = qu(uu),
        Ku = Ey(uu, uR(1, Eu + 1), "inEdges"),
        Qu = Ey(uu, uR(Eu - 1, -1, -1), "outEdges"),
        mu = oR(uu, yu);
      if (Qy(uu, mu), Ru.disableOptimalOrderHeuristic) return;
      let Ju, Nu = Number.POSITIVE_INFINITY,
        Xu = Ru.constraints || [];
      for (let Vu = 0, ru = 0; ru < 4; ++Vu, ++ru) {
        Ky(Vu % 2 ? Ku : Qu, Vu % 4 >= 2, Xu, yu), mu = Pu(uu);
        let Ru = qR(uu, mu);
        Ru < Nu ? (ru = 0, Ju = Object.assign({}, mu), Nu = Ru) : Ru === Nu && (Ju = structuredClone(mu))
      }
      Qy(uu, Ju)
    }

    function Ey(uu, Ru, yu) {
      let Eu = new Map,
        Ku = (uu, Ru) => {
          Eu.has(uu) || Eu.set(uu, []), Eu.get(uu).push(Ru)
        };
      for (let Qu of uu.nodes()) {
        let Ru = uu.node(Qu);
        if ("number" == typeof Ru.rank && Ku(Ru.rank, Qu), "number" == typeof Ru.minRank && "number" == typeof Ru.maxRank)
          for (let uu = Ru.minRank; uu <= Ru.maxRank; uu++) uu !== Ru.rank && Ku(uu, Qu)
      }
      return Ru.map((function(Ru) {
        return Ry(uu, Ru, yu, Eu.get(Ru) || [])
      }))
    }

    function Ky(uu, Ru, yu, Eu) {
      let Ku = !0,
        Qu = new Fu;
      uu.forEach((function(uu) {
        yu.forEach((uu => Qu.setEdge(uu.left, uu.right)));
        let mu = uu.graph().root,
          {
            result: Ju,
            usedBias: Nu
          } = uy(uu, mu, Qu, Eu, Ku);
        Ru && Nu && (Ku = !Ku), Ju.vs.forEach(((Ru, yu) => uu.node(Ru).order = yu)),
          function(uu, Ru, yu) {
            let Eu, Ku = {};
            yu.forEach((yu => {
              let Qu, mu, Ju = uu.parent(yu);
              for (; Ju;) {
                if (Qu = uu.parent(Ju), Qu ? (mu = Ku[Qu], Ku[Qu] = Ju) : (mu = Eu, Eu = Ju), mu && mu !== Ju) return void Ru.setEdge(mu, Ju);
                Ju = Qu
              }
            }))
          }(uu, Qu, Ju.vs)
      }))
    }

    function Qy(uu, Ru) {
      Object.values(Ru).forEach((Ru => Ru.forEach(((Ru, yu) => uu.node(Ru).order = yu))))
    }

    function my(uu, Ru, yu) {
      if (Ru > yu) {
        let uu = Ru;
        Ru = yu, yu = uu
      }
      let Eu = uu[Ru];
      Eu || (uu[Ru] = Eu = {}), Eu[yu] = !0
    }

    function Jy(uu, Ru, yu) {
      if (Ru > yu) {
        let uu = Ru;
        Ru = yu, yu = uu
      }
      let Eu = uu[Ru];
      return void 0 !== Eu && Object.hasOwn(Eu, yu)
    }

    function Ny(uu, Ru, yu, Eu) {
      let Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        Qu = {},
        mu = function(uu, Ru, yu, Eu) {
          let Ku = new Fu,
            Qu = uu.graph(),
            mu = function(uu, Ru, yu) {
              return (Eu, Ku, Qu) => {
                let mu, Ju = Eu.node(Ku),
                  Nu = Eu.node(Qu),
                  Xu = 0;
                if (Xu += Ju.width / 2, Object.hasOwn(Ju, "labelpos")) switch (Ju.labelpos.toLowerCase()) {
                  case "l":
                    mu = -Ju.width / 2;
                    break;
                  case "r":
                    mu = Ju.width / 2
                }
                if (mu && (Xu += yu ? mu : -mu), mu = void 0, Xu += (Ju.dummy ? Ru : uu) / 2, Xu += (Nu.dummy ? Ru : uu) / 2, Xu += Nu.width / 2, Object.hasOwn(Nu, "labelpos")) switch (Nu.labelpos.toLowerCase()) {
                  case "l":
                    mu = Nu.width / 2;
                    break;
                  case "r":
                    mu = -Nu.width / 2
                }
                return mu && (Xu += yu ? mu : -mu), Xu
              }
            }(Qu.nodesep, Qu.edgesep, Eu);
          return Ru.forEach((Ru => {
            let Eu;
            Ru.forEach((Ru => {
              let Qu = yu[Ru];
              if (void 0 !== Qu) {
                if (Ku.setNode(Qu), void 0 !== Eu) {
                  let Ju = yu[Eu];
                  if (void 0 !== Ju) {
                    let yu = Ku.edge(Ju, Qu);
                    Ku.setEdge(Ju, Qu, Math.max(mu(uu, Ru, Eu), yu || 0))
                  }
                }
                Eu = Ru
              }
            }))
          })), Ku
        }(uu, Ru, yu, Ku),
        Ju = Ku ? "borderLeft" : "borderRight";

      function Nu(uu, Ru) {
        let yu = mu.nodes().slice(),
          Eu = {},
          Ku = yu.pop();
        for (; Ku;) {
          if (Eu[Ku]) uu(Ku);
          else {
            Eu[Ku] = !0, yu.push(Ku);
            for (let uu of Ru(Ku)) yu.push(uu)
          }
          Ku = yu.pop()
        }
      }
      return Nu((function(uu) {
        let Ru = mu.inEdges(uu);
        Qu[uu] = Ru ? Ru.reduce(((uu, Ru) => {
          var yu;
          let Eu = null != (yu = Qu[Ru.v]) ? yu : 0,
            Ku = mu.edge(Ru);
          return Math.max(uu, Eu + (void 0 !== Ku ? Ku : 0))
        }), 0) : 0
      }), (function(uu) {
        return mu.predecessors(uu) || []
      })), Nu((function(Ru) {
        let yu = mu.outEdges(Ru),
          Eu = Number.POSITIVE_INFINITY;
        yu && (Eu = yu.reduce(((uu, Ru) => {
          let yu = Qu[Ru.w],
            Eu = mu.edge(Ru);
          return Math.min(uu, (void 0 !== yu ? yu : 0) - (void 0 !== Eu ? Eu : 0))
        }), Number.POSITIVE_INFINITY));
        let Ku = uu.node(Ru);
        Eu !== Number.POSITIVE_INFINITY && Ku.borderType !== Ju && (Qu[Ru] = Math.max(void 0 !== Qu[Ru] ? Qu[Ru] : 0, Eu))
      }), (function(uu) {
        return mu.successors(uu) || []
      })), Object.keys(Eu).forEach((uu => {
        var Ru;
        let Eu = yu[uu];
        void 0 !== Eu && (Qu[uu] = null != (Ru = Qu[Eu]) ? Ru : 0)
      })), Qu
    }

    function Xy(uu, Ru) {
      let yu, Eu = Pu(uu),
        Ku = Object.assign(function(uu, Ru) {
          let yu = {};
          return Ru.length && Ru.reduce((function(Ru, Eu) {
            let Ku = 0,
              Qu = 0,
              mu = Ru.length,
              Ju = Eu[Eu.length - 1];
            return Eu.forEach(((Ru, Nu) => {
              let Xu = function(uu, Ru) {
                  if (uu.node(Ru).dummy) {
                    let yu = uu.predecessors(Ru);
                    if (yu) return yu.find((Ru => uu.node(Ru).dummy))
                  }
                }(uu, Ru),
                Vu = Xu ? uu.node(Xu).order : mu;
              (Xu || Ru === Ju) && (Eu.slice(Qu, Nu + 1).forEach((Ru => {
                let Eu = uu.predecessors(Ru);
                Eu && Eu.forEach((Eu => {
                  let Qu = uu.node(Eu),
                    mu = Qu.order;
                  (mu < Ku || Vu < mu) && (!Qu.dummy || !uu.node(Ru).dummy) && my(yu, Eu, Ru)
                }))
              })), Qu = Nu + 1, Ku = Vu)
            })), Eu
          })), yu
        }(uu, Eu), function(uu, Ru) {
          let yu = {};

          function Eu(Ru, Eu, Ku, Qu, mu) {
            uR(Eu, Ku).forEach((Eu => {
              let Ku = Ru[Eu];
              if (void 0 !== Ku && uu.node(Ku).dummy) {
                let Ru = uu.predecessors(Ku);
                Ru && Ru.forEach((Ru => {
                  if (void 0 === Ru) return;
                  let Eu = uu.node(Ru);
                  Eu.dummy && (Eu.order < Qu || Eu.order > mu) && my(yu, Ru, Ku)
                }))
              }
            }))
          }
          return Ru.length && Ru.reduce((function(Ru, yu) {
            let Ku = -1,
              Qu = -1,
              mu = 0;
            return yu.forEach(((Ju, Nu) => {
              if ("border" === uu.node(Ju).dummy) {
                let Ru = uu.predecessors(Ju);
                if (Ru && Ru.length) {
                  let Ju = Ru[0];
                  if (void 0 === Ju) return;
                  Qu = uu.node(Ju).order, Eu(yu, mu, Nu, Ku, Qu), mu = Nu, Ku = Qu
                }
              }
              Eu(yu, mu, yu.length, Qu, Ru.length)
            })), yu
          })), yu
        }(uu, Eu)),
        Qu = {};
      ["u", "d"].forEach((mu => {
        yu = "u" === mu ? Eu : Object.values(Eu).reverse(), ["l", "r"].forEach((Eu => {
          "r" === Eu && (yu = yu.map((uu => Object.values(uu).reverse())));
          let Ju = function(uu, Ru, yu, Eu, Ku) {
              let Qu = {},
                mu = {},
                Ju = {};
              return Ru.forEach((uu => {
                uu.forEach(((uu, Ru) => {
                  Qu[uu] = uu, mu[uu] = uu, Ju[uu] = Ru
                }))
              })), Ru.forEach((Ru => {
                let Nu = -1,
                  Xu = -1,
                  Vu = !1,
                  ru = Ru,
                  Bu = Ru.findIndex((Ru => (null == Ku ? void 0 : Ku.includes(Ru)) || Vy(Ru, uu, Ku)));
                Bu > 0 && (ru = [Ru[Bu], ...Ru.slice(0, Bu), ...Ru.slice(Bu + 1)], Vu = !0), ru.forEach((Ru => {
                  var ru;
                  let Bu = Eu(Ru);
                  if (Bu && Bu.length) {
                    null != Ku && Ku.includes(Ru) && (Bu = Bu.filter((Ru => Vy(Ru, uu, Ku))));
                    let Eu = Bu.sort(((uu, Ru) => {
                        let yu = Ju[uu],
                          Eu = Ju[Ru];
                        return (void 0 !== yu ? yu : 0) - (void 0 !== Eu ? Eu : 0)
                      })),
                      xu = (Eu.length - 1) / 2;
                    for (let uu = Math.floor(xu), Ku = Math.ceil(xu); uu <= Ku; ++uu) {
                      let Ku = Eu[uu];
                      if (void 0 === Ku) continue;
                      let Bu = Ju[Ku];
                      if (void 0 !== Bu && mu[Ru] === Ru && Nu < Bu && Ju[Ku] !== Xu && !Jy(yu, Ru, Ku)) {
                        let uu = Qu[Ku];
                        void 0 !== uu && (mu[Ku] = Ru, mu[Ru] = Qu[Ru] = uu, Nu = Bu, Vu && (Nu = -1, Xu = null != (ru = Ju[Ku]) ? ru : -1, Vu = !1))
                      }
                    }
                  }
                }))
              })), {
                root: Qu,
                align: mu
              }
            }(uu, yu, Ku, (Ru => ("u" === mu ? uu.predecessors(Ru) : uu.successors(Ru)) || []), Ru),
            Nu = Ny(uu, yu, Ju.root, Ju.align, "r" === Eu);
          "r" === Eu && (Nu = yR(Nu, (uu => -uu))), Qu[mu + Eu] = Nu
        }))
      }));
      let mu = function(uu, Ru) {
        return Object.values(Ru).reduce(((Ru, yu) => {
          let Eu = Number.NEGATIVE_INFINITY,
            Ku = Number.POSITIVE_INFINITY;
          Object.entries(yu).forEach((Ru => {
            let [yu, Qu] = Ru, mu = function(uu, Ru) {
              return uu.node(Ru).width
            }(uu, yu) / 2;
            Eu = Math.max(Qu + mu, Eu), Ku = Math.min(Qu - mu, Ku)
          }));
          let Qu = Eu - Ku;
          return Qu < Ru[0] && (Ru = [Qu, yu]), Ru
        }), [Number.POSITIVE_INFINITY, null])[1]
      }(uu, Qu);
      return function(uu, Ru) {
          let yu = Object.values(Ru),
            Eu = ou(Math.min, yu),
            Ku = ou(Math.max, yu);
          ["u", "d"].forEach((yu => {
            ["l", "r"].forEach((Qu => {
              let mu = yu + Qu,
                Ju = uu[mu];
              if (!Ju || Ju === Ru) return;
              let Nu = Object.values(Ju),
                Xu = Eu - ou(Math.min, Nu);
              "l" !== Qu && (Xu = Ku - ou(Math.max, Nu)), Xu && (uu[mu] = yR(Ju, (uu => uu + Xu)))
            }))
          }))
        }(Qu, mu),
        function(uu) {
          let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            yu = uu.ul;
          return yu ? yR(yu, ((yu, Eu) => {
            var Ku, Qu;
            if (Ru) {
              let yu = Ru.toLowerCase(),
                Ku = uu[yu];
              if (Ku && void 0 !== Ku[Eu]) return Ku[Eu]
            }
            let mu = Object.values(uu).map((uu => {
              let Ru = uu[Eu];
              return void 0 !== Ru ? Ru : 0
            })).sort(((uu, Ru) => uu - Ru));
            return ((null != (Ku = mu[1]) ? Ku : 0) + (null != (Qu = mu[2]) ? Qu : 0)) / 2
          })) : {}
        }(Qu, uu.graph().align)
    }

    function Vy(uu, Ru, yu) {
      var Eu;
      if (!yu) return !1;
      let Ku = null == (Eu = Ru.node(uu)) ? void 0 : Eu.edgeObj;
      if (!Ku || Ru.node(uu).edgeLabel.reversed) return !1;
      let Qu = yu.indexOf(null == Ku ? void 0 : Ku.v),
        mu = yu.indexOf(null == Ku ? void 0 : Ku.w);
      return -1 !== Qu && -1 !== mu && Qu === (mu + 1) % yu.length || Qu === (mu - 1) % yu.length
    }

    function ry(uu, Ru) {
      (function(uu) {
        let Ru = Pu(uu),
          yu = uu.graph(),
          Eu = yu.ranksep,
          Ku = yu.rankalign,
          Qu = 0;
        Ru.forEach((Ru => {
          let yu = Ru.reduce(((Ru, yu) => {
            var Eu;
            let Ku = null != (Eu = uu.node(yu).height) ? Eu : 0;
            return Ru > Ku ? Ru : Ku
          }), 0);
          Ru.forEach((Ru => {
            let Eu = uu.node(Ru);
            Eu.y = "top" === Ku ? Qu + Eu.height / 2 : "bottom" === Ku ? Qu + yu - Eu.height / 2 : Qu + yu / 2
          })), Qu += yu + Eu
        }))
      })(uu = Zu(uu)), Object.entries(Xy(uu, Ru)).forEach((Ru => {
        let [yu, Eu] = Ru;
        return uu.node(yu).x = Eu
      }))
    }
    var By = new WeakMap;

    function xy(uu) {
      return py(uu, vu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}), uu
    }

    function Sy(uu, Ru, yu) {
      let Eu = Ru;
      for (; void 0 !== Eu;) {
        let Ru = uu.parent(Eu);
        if (Ru === yu) return Eu;
        Eu = Ru
      }
    }

    function py(uu, Ru, yu) {
      var Eu;
      let Ku = uu.nodes().filter((Ru => uu.children(Ru).length)),
        Qu = {};
      Ku.forEach((Eu => {
        let Ku = uu.node(Eu);
        if (Ku && Ku.rankdir) {
          let mu = new Fu({
            multigraph: !0,
            compound: !0
          });
          mu.setGraph({
            rankdir: Ku.rankdir
          });
          let Ju = uu.children(Eu);
          Ju.forEach((Ru => {
            let yu = {
              ...uu.node(Ru)
            };
            mu.setNode(Ru, yu);
            let Ku = uu.parent(Ru);
            Ku && Ku !== Eu && Ju.includes(Ku) && mu.setParent(Ru, Ku)
          }));
          let Nu = new Set;
          uu.edges().forEach((Ru => {
            let yu = Sy(uu, Ru.v, Eu),
              Ku = Sy(uu, Ru.w, Eu);
            if (yu && Ku && yu !== Ku) {
              let Eu = `${yu}\0${Ku}`;
              Nu.has(Eu) || (Nu.add(Eu), mu.setEdge(yu, Ku, {
                ...uu.edge(Ru)
              }))
            }
          })), py(mu, Ru, yu);
          let Xu = Dy(mu);
          Ty(Xu, Ru, yu, null), Wy(mu, Xu);
          let Vu = 1 / 0,
            ru = 1 / 0,
            Bu = -1 / 0,
            xu = -1 / 0;
          mu.nodes().forEach((uu => {
            if (uu === Eu) return;
            let Ru = mu.node(uu);
            Ru && "number" == typeof Ru.x && "number" == typeof Ru.y && "number" == typeof Ru.width && "number" == typeof Ru.height && (Vu = Math.min(Vu, Ru.x - Ru.width / 2), Bu = Math.max(Bu, Ru.x + Ru.width / 2), ru = Math.min(ru, Ru.y - Ru.height / 2), xu = Math.max(xu, Ru.y + Ru.height / 2))
          })), (!isFinite(Vu) || !isFinite(ru) || !isFinite(Bu) || !isFinite(xu)) && (Vu = ru = 0, Bu = xu = 0);
          let Su = Bu - Vu,
            pu = xu - ru;
          Qu[Eu] = {
            minX: Vu,
            ME: ru,
            maxX: Bu,
            IE: xu,
            width: Su,
            height: pu,
            offsetX: Vu,
            offsetY: ru
          }, Ku._dagreClusterSubgraph = mu
        }
      }));
      let mu = [],
        Ju = new Map;
      Ku.forEach((Ru => {
        let yu = uu.node(Ru);
        yu && yu.rankdir && Qu[Ru] && Ju.set(Ru, (uu.children(Ru) || []).filter((uu => uu !== Ru)))
      }));
      let Nu = new Set([...Ju.values()].flat()),
        Xu = new Map;
      Ju.forEach(((Ru, yu) => {
        Nu.has(yu) || Xu.set(yu, (Ru => {
          let yu = [],
            Eu = (uu.children(Ru) || []).filter((uu => uu !== Ru));
          for (; Eu.length > 0;) {
            let Ru = Eu.shift();
            yu.push(Ru), (uu.children(Ru) || []).filter((uu => uu !== Ru)).forEach((uu => Eu.push(uu)))
          }
          return yu
        })(yu))
      }));
      let Vu = new Set([...Xu.values()].flat()),
        ru = uu => {
          for (let [Ru, yu] of Xu)
            if (yu.includes(uu)) return Ru;
          return uu
        },
        Bu = [];
      uu.edges().forEach((Ru => {
        (Vu.has(Ru.v) || Vu.has(Ru.w)) && Bu.push({
          edge: Ru,
          label: uu.edge(Ru)
        })
      }));
      let xu = new Map;
      Vu.forEach((Ru => {
        let yu = uu.parent(Ru);
        xu.set(Ru, "string" == typeof yu ? yu : void 0)
      })), Xu.forEach(((Ru, yu) => {
        let Eu = uu.node(yu),
          Ku = [];
        Ru.forEach((Ru => {
          let yu = uu.node(Ru);
          yu && (Ku.push({
            id: Ru,
            node: yu,
            parent: xu.get(Ru)
          }), uu.removeNode(Ru))
        }));
        let Ju = Bu.filter((uu => {
            let {
              edge: yu
            } = uu;
            return Ru.includes(yu.v) || Ru.includes(yu.w)
          })),
          Nu = Qu[yu];
        Eu && (mu.push({
          clusterId: yu,
          subgraph: Eu._dagreClusterSubgraph,
          bounds: Nu,
          children: Ru,
          removedNodes: Ku,
          removedEdges: Ju
        }), Eu.width = Nu.width, Eu.height = Nu.height)
      }));
      let Su = new Set;
      Bu.forEach((Ru => {
        let {
          edge: yu,
          label: Eu
        } = Ru, Ku = ru(yu.v), Qu = ru(yu.w);
        if (Ku !== Qu && uu.hasNode(Ku) && uu.hasNode(Qu)) {
          let Ru = `${Ku}\0${Qu}`;
          Su.has(Ru) || (Su.add(Ru), uu.setEdge(Ku, Qu, {
            ...Eu,
            width: 0,
            height: 0
          }))
        }
      }));
      let pu = Dy(uu),
        Tu = Ty(pu, Ru, yu, null != (Eu = By.get(uu)) ? Eu : null);
      By.set(uu, Tu), Wy(uu, pu), Su.forEach((Ru => {
        let yu = Ru.indexOf("\0"),
          Eu = Ru.slice(0, yu),
          Ku = Ru.slice(yu + 1);
        uu.hasEdge(Eu, Ku) && uu.removeEdge(Eu, Ku)
      })), mu.forEach((Ru => {
        let {
          clusterId: yu,
          subgraph: Eu,
          bounds: Ku,
          removedNodes: Qu,
          removedEdges: mu
        } = Ru;
        var Ju, Nu;
        let Xu = uu.node(yu),
          Vu = null != (Ju = null == Xu ? void 0 : Xu.x) ? Ju : 0,
          ru = null != (Nu = null == Xu ? void 0 : Xu.y) ? Nu : 0,
          Bu = (Ku.minX + Ku.maxX) / 2,
          xu = (Ku.ME + Ku.IE) / 2;
        Qu.forEach((Ru => {
          let {
            id: yu,
            node: Eu,
            parent: Ku
          } = Ru;
          uu.setNode(yu, Eu), void 0 !== Ku && uu.setParent(yu, Ku)
        })), mu.forEach((Ru => {
          let {
            edge: yu,
            label: Eu
          } = Ru;
          uu.setEdge(yu, Eu)
        })), Eu.nodes().forEach((Ru => {
          if (Ru === yu) return;
          let Ku = Eu.node(Ru),
            Qu = uu.node(Ru);
          Qu && Ku && "number" == typeof Ku.x && "number" == typeof Ku.y && (Qu.x = Vu + (Ku.x - Bu), Qu.y = ru + (Ku.y - xu))
        })), delete Xu._dagreClusterSubgraph
      })), Ku.forEach((Ru => {
        var yu, Eu;
        let Ku = uu.node(Ru),
          mu = Qu[Ru];
        if (Ku && Ku.rankdir && Ku._dagreClusterSubgraph && mu) {
          let Qu = Ku._dagreClusterSubgraph,
            Ju = null != (yu = Ku.x) ? yu : 0,
            Nu = null != (Eu = Ku.y) ? Eu : 0,
            Xu = (mu.minX + mu.maxX) / 2,
            Vu = (mu.ME + mu.IE) / 2;
          Qu.nodes().forEach((yu => {
            if (yu === Ru) return;
            let Eu = Qu.node(yu),
              Ku = uu.node(yu);
            if (Ku && Eu && "number" == typeof Eu.x && "number" == typeof Eu.y) {
              let uu = Eu.x - Xu,
                Ru = Eu.y - Vu;
              Ku.x = Ju + uu, Ku.y = Nu + Ru
            }
          })), delete Ku._dagreClusterSubgraph
        }
      }))
    }

    function Ty(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
      var Ku, Qu;
      let mu = !1 !== (null == yu ? void 0 : yu.useDynamic),
        Ju = mu && null != (Ku = null == Eu ? void 0 : Eu.graph) ? Ku : null,
        Nu = mu && null != (Qu = null == Eu ? void 0 : Eu.rawNodes) ? Qu : null;
      Ru("    makeSpaceForEdgeLabels", (() => function(uu) {
        let Ru = uu.graph();
        Ru.ranksep /= 2, uu.edges().forEach((yu => {
          var Eu;
          let Ku = uu.edge(yu);
          Ku.minlen *= 2, "c" !== (null != (Eu = Ku.labelpos) ? Eu : "r").toLowerCase() && ("TB" === Ru.rankdir || "BT" === Ru.rankdir ? Ku.width += Ku.labeloffset : Ku.height += Ku.labeloffset)
        }))
      }(uu))), Ru("    removeSelfEdges", (() => function(uu) {
        uu.edges().forEach((Ru => {
          if (Ru.v === Ru.w) {
            let yu = uu.node(Ru.v);
            yu.selfEdges || (yu.selfEdges = []), yu.selfEdges.push({
              e: Ru,
              label: uu.edge(Ru)
            }), uu.removeEdge(Ru)
          }
        }))
      }(uu))), Ru("    acyclic", (() => xR(uu, Ju))), Ru("    nestingGraph.run", (() => LR(uu))), Ru("    rank", (() => tR(Zu(uu)))), Ru("    injectEdgeLabelProxies", (() => function(uu) {
        uu.edges().forEach((Ru => {
          let yu = uu.edge(Ru);
          if (yu.width && yu.height) {
            let yu = uu.node(Ru.v),
              Eu = {
                rank: (uu.node(Ru.w).rank - yu.rank) / 2 + yu.rank,
                e: Ru
              };
            wu(uu, "edge-proxy", Eu, "_ep")
          }
        }))
      }(uu))), Ru("    removeEmptyRanks", (() => function(uu) {
        let Ru = uu.nodes().map((Ru => uu.node(Ru).rank)).filter((uu => void 0 !== uu)),
          yu = ou(Math.min, Ru),
          Eu = [];
        uu.nodes().forEach((Ru => {
          let Ku = uu.node(Ru).rank - yu;
          Eu[Ku] || (Eu[Ku] = []), Eu[Ku].push(Ru)
        }));
        let Ku = 0,
          Qu = uu.graph().nodeRankFactor;
        Array.from(Eu).forEach(((Ru, yu) => {
          void 0 === Ru && yu % Qu !== 0 ? --Ku : void 0 !== Ru && Ku && Ru.forEach((Ru => uu.node(Ru).rank += Ku))
        }))
      }(uu))), Ru("    nestingGraph.cleanup", (() => function(uu) {
        let Ru = uu.graph();
        uu.removeNode(Ru.nestingRoot), delete Ru.nestingRoot, uu.edges().forEach((Ru => {
          uu.edge(Ru).nestingEdge && uu.removeEdge(Ru)
        }))
      }(uu))), Ru("    normalizeRanks", (() => function(uu) {
        let Ru = uu.nodes().map((Ru => {
            let yu = uu.node(Ru).rank;
            return void 0 === yu ? Number.MAX_VALUE : yu
          })),
          yu = ou(Math.min, Ru);
        uu.nodes().forEach((Ru => {
          let Eu = uu.node(Ru);
          Object.hasOwn(Eu, "rank") && (Eu.rank -= yu)
        }))
      }(uu))), Ru("    assignRankMinMax", (() => function(uu) {
        let Ru = 0;
        uu.nodes().forEach((yu => {
          let Eu = uu.node(yu);
          Eu.borderTop && (Eu.minRank = uu.node(Eu.borderTop).rank, Eu.maxRank = uu.node(Eu.borderBottom).rank, Ru = Math.max(Ru, Eu.maxRank))
        })), uu.graph().maxRank = Ru
      }(uu))), Ru("    removeEdgeLabelProxies", (() => function(uu) {
        uu.nodes().forEach((Ru => {
          let yu = uu.node(Ru);
          if ("edge-proxy" === yu.dummy) {
            let Eu = yu;
            uu.edge(Eu.e).labelRank = yu.rank, uu.removeNode(Ru)
          }
        }))
      }(uu))), Ru("    normalize.run", (() => SR(uu))), Ru("    parentDummyChains", (() => cR(uu))), Ru("    addBorderSegments", (() => FR(uu))), Ru("    order", (() => yy(uu, yu, Nu))), Ru("    insertSelfEdges", (() => function(uu) {
        Pu(uu).forEach((Ru => {
          let yu = 0;
          Ru.forEach(((Ru, Eu) => {
            let Ku = uu.node(Ru);
            "number" != typeof Ku.rank && (Ku.rank = 0), Ku.order = Eu + yu, (Ku.selfEdges || []).forEach((Ru => {
              wu(uu, "selfedge", {
                width: Ru.label.width,
                height: Ru.label.height,
                rank: Ku.rank,
                order: Eu + ++yu,
                e: Ru.e,
                edgeLabel: Ru.label
              }, "_se"), (!Array.isArray(Ru.label.points) || 7 !== Ru.label.points.length) && (Ru.label.points = [{
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
            })), delete Ku.selfEdges
          }))
        }))
      }(uu))), Ru("    adjustCoordinateSystem", (() => function(uu) {
        var Ru;
        let yu = null == (Ru = uu.graph().rankdir) ? void 0 : Ru.toLowerCase();
        ("lr" === yu || "rl" === yu) && hR(uu)
      }(uu))), Ru("    position", (() => ry(uu, yu.corePath))), Ru("    positionSelfEdges", (() => function(uu) {
        uu.nodes().forEach((Ru => {
          let yu = uu.node(Ru),
            Eu = uu => "number" == typeof uu && isFinite(uu);
          if ("selfedge" === yu.dummy) {
            let Ku = yu,
              Qu = uu.node(Ku.e.v),
              mu = Eu(null == Qu ? void 0 : Qu.x) ? Qu.x : 0,
              Ju = Eu(null == Qu ? void 0 : Qu.y) ? Qu.y : 0,
              Nu = Eu(null == Qu ? void 0 : Qu.width) ? Qu.width : 0,
              Xu = Eu(null == Qu ? void 0 : Qu.height) ? Qu.height : 0,
              Vu = Eu(yu.x) ? yu.x : mu,
              ru = Eu(yu.y) ? yu.y : Ju,
              Bu = Nu / 2,
              xu = Xu / 2;
            Ku.edgeLabel.points = [{
              x: Vu + Bu,
              y: ru - xu
            }, {
              x: Vu + Bu,
              y: ru - xu
            }, {
              x: Vu,
              y: ru
            }, {
              x: Vu - Bu,
              y: ru + xu
            }, {
              x: Vu - Bu,
              y: ru + xu
            }, {
              x: Vu,
              y: ru
            }, {
              x: Vu,
              y: ru
            }], Ku.edgeLabel.x = Vu, Ku.edgeLabel.y = ru, uu.setEdge(Ku.e, Ku.edgeLabel), uu.removeNode(Ru)
          } else yu && Array.isArray(yu.selfEdges) && yu.selfEdges.forEach((uu => {
            if (!Array.isArray(uu.label.points) || 7 !== uu.label.points.length) {
              let Ru = Eu(yu.x) ? yu.x : 0,
                Ku = Eu(yu.y) ? yu.y : 0,
                Qu = (Eu(yu.width) ? yu.width : 0) / 2,
                mu = (Eu(yu.height) ? yu.height : 0) / 2;
              uu.label.points = [{
                x: Ru + Qu,
                y: Ku - mu
              }, {
                x: Ru + Qu,
                y: Ku - mu
              }, {
                x: Ru,
                y: Ku
              }, {
                x: Ru - Qu,
                y: Ku + mu
              }, {
                x: Ru - Qu,
                y: Ku + mu
              }, {
                x: Ru,
                y: Ku
              }, {
                x: Ru,
                y: Ku
              }]
            }
          }))
        }))
      }(uu)));
      let Xu = JSON.parse(JSON.stringify(uu._nodes));
      return Ru("    removeBorderNodes", (() => function(uu) {
        uu.nodes().forEach((Ru => {
          if (uu.children(Ru).length) {
            let yu = uu.node(Ru),
              Eu = uu.node(yu.borderTop),
              Ku = uu.node(yu.borderBottom),
              Qu = uu.node(yu.borderLeft[yu.borderLeft.length - 1]),
              mu = uu.node(yu.borderRight[yu.borderRight.length - 1]);
            yu.width = Math.abs(mu.x - Qu.x), yu.height = Math.abs(Ku.y - Eu.y), yu.x = Qu.x + yu.width / 2, yu.y = Eu.y + yu.height / 2
          }
        })), uu.nodes().forEach((Ru => {
          "border" === uu.node(Ru).dummy && uu.removeNode(Ru)
        }))
      }(uu))), Ru("    normalize.undo", (() => function(uu) {
        uu.graph().dummyChains.forEach((Ru => {
          let yu, Eu = uu.node(Ru),
            Ku = Eu.edgeLabel;
          for (uu.setEdge(Eu.edgeObj, Ku); Eu.dummy;) yu = uu.successors(Ru)[0], uu.removeNode(Ru), Ku.points.push({
            x: Eu.x,
            y: Eu.y
          }), "edge-label" === Eu.dummy && (Ku.x = Eu.x, Ku.y = Eu.y, Ku.width = Eu.width, Ku.height = Eu.height), Ru = yu, Eu = uu.node(Ru)
        }))
      }(uu))), Ru("    fixupEdgeLabelCoords", (() => function(uu) {
        uu.edges().forEach((Ru => {
          let yu = uu.edge(Ru);
          if (Object.hasOwn(yu, "x")) switch (("l" === yu.labelpos || "r" === yu.labelpos) && (yu.width -= yu.labeloffset), yu.labelpos) {
            case "l":
              yu.x -= yu.width / 2 + yu.labeloffset;
              break;
            case "r":
              yu.x += yu.width / 2 + yu.labeloffset
          }
        }))
      }(uu))), Ru("    undoCoordinateSystem", (() => ZR(uu))), Ru("    translateGraph", (() => function(uu) {
        let Ru = Number.POSITIVE_INFINITY,
          yu = 0,
          Eu = Number.POSITIVE_INFINITY,
          Ku = 0,
          Qu = uu.graph(),
          mu = Qu.marginx || 0,
          Ju = Qu.marginy || 0;

        function Nu(uu) {
          let Qu = uu.x,
            mu = uu.y,
            Ju = uu.width,
            Nu = uu.height;
          Ru = Math.min(Ru, Qu - Ju / 2), yu = Math.max(yu, Qu + Ju / 2), Eu = Math.min(Eu, mu - Nu / 2), Ku = Math.max(Ku, mu + Nu / 2)
        }
        uu.nodes().forEach((Ru => Nu(uu.node(Ru)))), uu.edges().forEach((Ru => {
          let yu = uu.edge(Ru);
          Object.hasOwn(yu, "x") && Nu(yu)
        })), Ru -= mu, Eu -= Ju, uu.nodes().forEach((yu => {
          let Ku = uu.node(yu);
          Ku.x -= Ru, Ku.y -= Eu
        })), uu.edges().forEach((yu => {
          let Ku = uu.edge(yu);
          Ku.points.forEach((uu => {
            uu.x -= Ru, uu.y -= Eu
          })), Object.hasOwn(Ku, "x") && (Ku.x -= Ru), Object.hasOwn(Ku, "y") && (Ku.y -= Eu)
        })), Qu.width = yu - Ru + mu, Qu.height = Ku - Eu + Ju
      }(uu))), Ru("    assignNodeIntersects", (() => function(uu) {
        uu.edges().forEach((Ru => {
          if (Ru.v === Ru.w) return;
          let yu, Eu, Ku = uu.edge(Ru),
            Qu = uu.node(Ru.v),
            mu = uu.node(Ru.w);
          Ku.points ? (yu = Ku.points[0], Eu = Ku.points[Ku.points.length - 1]) : (Ku.points = [], yu = mu, Eu = Qu), Ku.points.unshift(hu(Qu, yu)), Ku.points.push(hu(mu, Eu))
        }))
      }(uu))), Ru("    reversePoints", (() => function(uu) {
        uu.edges().forEach((Ru => {
          let yu = uu.edge(Ru);
          yu.reversed && yu.points.reverse()
        }))
      }(uu))), Ru("    acyclic.undo", (() => function(uu) {
        uu.edges().forEach((Ru => {
          let yu = uu.edge(Ru);
          if (yu.reversed) {
            uu.removeEdge(Ru);
            let Eu = yu.forwardName;
            delete yu.reversed, delete yu.forwardName, uu.setEdge(Ru.w, Ru.v, yu, Eu)
          }
        }))
      }(uu))), {
        graph: uu,
        rawNodes: Xu
      }
    }

    function Wy(uu, Ru) {
      uu.nodes().forEach((yu => {
        let Eu = uu.node(yu),
          Ku = Ru.node(yu);
        Eu && (Eu.x = Ku.x, Eu.y = Ku.y, Eu.order = Ku.order, Eu.rank = Ku.rank, Ru.children(yu).length && (Eu.width = Ku.width, Eu.height = Ku.height))
      })), uu.edges().forEach((yu => {
        let Eu = uu.edge(yu),
          Ku = Ru.edge(yu);
        Eu.points = Ku.points, Object.hasOwn(Ku, "x") && (Eu.x = Ku.x, Eu.y = Ku.y)
      })), uu.graph().width = Ru.graph().width, uu.graph().height = Ru.graph().height
    }
    var jy = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
      Hy = {
        ranksep: 50,
        edgesep: 20,
        nodesep: 50,
        rankdir: "TB",
        rankalign: "center"
      },
      dy = ["acyclicer", "ranker", "rankdir", "align", "rankalign"],
      by = ["width", "height", "rank"],
      Cy = {
        width: 0,
        height: 0
      },
      ky = ["minlen", "weight", "width", "height", "labeloffset"],
      ey = {
        minlen: 1,
        weight: 1,
        width: 0,
        height: 0,
        labeloffset: 10,
        labelpos: "r"
      },
      Ay = ["labelpos"];

    function Dy(uu) {
      let Ru = new Fu({
          multigraph: !0,
          compound: !0
        }),
        yu = Iy(uu.graph());
      return Ru.setGraph(Object.assign({}, Hy, My(yu, jy), RR(yu, dy))), uu.nodes().forEach((yu => {
        let Eu = My(Iy(uu.node(yu)), by);
        Object.keys(Cy).forEach((uu => {
          void 0 === Eu[uu] && (Eu[uu] = Cy[uu])
        })), Ru.setNode(yu, Eu);
        let Ku = uu.parent(yu);
        void 0 !== Ku && Ru.setParent(yu, Ku)
      })), uu.edges().forEach((yu => {
        let Eu = Iy(uu.edge(yu));
        Ru.setEdge(yu, Object.assign({}, ey, My(Eu, ky), RR(Eu, Ay)))
      })), Ru
    }

    function My(uu, Ru) {
      return yR(RR(uu, Ru), Number)
    }

    function Iy(uu) {
      let Ru = {};
      return uu && Object.entries(uu).forEach((uu => {
        let [yu, Eu] = uu;
        "string" == typeof yu && (yu = yu.toLowerCase()), Ru[yu] = Eu
      })), Ru
    }

    function Gy(uu) {
      let Ru = Pu(uu),
        yu = new Fu({
          compound: !0,
          multigraph: !0
        }).setGraph({});
      return uu.nodes().forEach((Ru => {
        yu.setNode(Ru, {
          label: Ru
        }), yu.setParent(Ru, "layer" + uu.node(Ru).rank)
      })), uu.edges().forEach((uu => yu.setEdge(uu.v, uu.w, {}, uu.name))), Ru.forEach(((uu, Ru) => {
        let Eu = "layer" + Ru;
        yu.setNode(Eu, {
          rank: "same"
        }), uu.reduce(((uu, Ru) => (yu.setEdge(uu, Ru, {
          style: "invis"
        }), Ru)))
      })), yu
    }
    var Uy = {
        time: Ou,
        notime: vu
      },
      ny = {
        graphlib: Qu,
        version: QR,
        layout: xy,
        debug: Gy,
        util: {
          time: Ou,
          notime: vu
        }
      }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);