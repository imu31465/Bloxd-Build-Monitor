export const id = 234;
export const ids = [234, 241, 244];
export const modules = {
  40499: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu,
      h: () => lu
    });
    var su = ju(39032),
      Uu = ju(40272),
      Zu = ju(40462),
      Xu = {};
    class lu {
      constructor(uu) {
        this.attachedToElement = !1, this.attached = {}, this.camera = uu, this.checkInputs = () => {}
      }
      add(uu) {
        const Eu = uu.getSimpleName();
        this.attached[Eu] ? su.b.Warn("camera input of type " + Eu + " already exists on camera") : (this.attached[Eu] = uu, uu.camera = this.camera, uu.checkInputs && (this.checkInputs = this._addCheckInputs(uu.checkInputs.bind(uu))), this.attachedToElement && uu.attachControl(this.noPreventDefault))
      }
      remove(uu) {
        for (const Eu in this.attached) {
          const ju = this.attached[Eu];
          if (ju === uu) return ju.detachControl(), ju.camera = null, delete this.attached[Eu], void this.rebuildInputCheck()
        }
      }
      removeByType(uu) {
        for (const Eu in this.attached) {
          const ju = this.attached[Eu];
          ju.getClassName() === uu && (ju.detachControl(), ju.camera = null, delete this.attached[Eu], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(uu) {
        const Eu = this.checkInputs;
        return () => {
          Eu(), uu()
        }
      }
      attachInput(uu) {
        this.attachedToElement && uu.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          uu = !Zu.e.ForceAttachControlToAlwaysPreventDefault && uu, this.attachedToElement = !0, this.noPreventDefault = uu;
          for (const Eu in this.attached) this.attached[Eu].attachControl(uu)
        }
      }
      detachElement() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Eu in this.attached) this.attached[Eu].detachControl(), uu && (this.attached[Eu].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const uu in this.attached) {
          const Eu = this.attached[uu];
          Eu.checkInputs && (this.checkInputs = this._addCheckInputs(Eu.checkInputs.bind(Eu)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(uu) {
        const Eu = {};
        for (const ju in this.attached) {
          const uu = this.attached[ju],
            su = Uu.e.Serialize(uu);
          Eu[uu.getClassName()] = su
        }
        uu.inputsmgr = Eu
      }
      parse(uu) {
        const Eu = uu.inputsmgr;
        if (Eu) {
          this.clear();
          for (const uu in Eu) {
            const ju = Xu[uu];
            if (ju) {
              const su = Eu[uu],
                Zu = Uu.e.Parse((() => new ju), su, null);
              this.add(Zu)
            }
          }
        } else
          for (const ju in this.attached) {
            const Eu = Xu[this.attached[ju].getClassName()];
            if (Eu) {
              const su = Uu.e.Parse((() => new Eu), uu, null);
              this.remove(this.attached[ju]), this.add(su)
            }
          }
      }
    }
  },
  40503: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => su.e
    });
    var su = ju(40506);
    (0, su.f)()
  },
  40506: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => Cu,
      f: () => cu
    });
    var su = ju(40255),
      Uu = ju(40258),
      Zu = ju(37494),
      Xu = ju(37680),
      lu = ju(40508),
      qu = ju(40467),
      fu = ju(37532);
    let Cu = (() => {
        var uu;
        let Eu, ju, qu = lu.e,
          fu = [],
          Cu = [],
          bu = [],
          cu = [];
        return uu = class extends qu {
          constructor(uu, Eu, ju, Uu) {
            super(uu, ju, Uu), this.groundColor = (0, su.g)(this, fu, new Xu.c(0, 0, 0)), this.direction = ((0, su.g)(this, Cu), (0, su.g)(this, bu, void 0)), (0, su.g)(this, cu), this.direction = Eu || Zu.t.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(uu) {
            return this.direction = Zu.t.Normalize(uu.subtract(Zu.t.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ju.x, ju.y, ju.z, 0, Eu), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Eu), this
          }
          transferToNodeMaterialEffect(uu, Eu) {
            const ju = Zu.t.Normalize(this.direction);
            return uu.setFloat3(Eu, ju.x, ju.y, ju.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Zu.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return lu.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(uu, Eu) {
            uu["HEMILIGHT" + Eu] = !0
          }
        }, (() => {
          const Zu = "function" === typeof Symbol && Symbol.metadata ? Object.create(qu[Symbol.metadata] ?? null) : void 0;
          Eu = [(0, Uu.j)()], ju = [(0, Uu.A)()], (0, su.e)(null, null, Eu, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: uu => "groundColor" in uu,
              get: uu => uu.groundColor,
              set: (uu, Eu) => {
                uu.groundColor = Eu
              }
            },
            metadata: Zu
          }, fu, Cu), (0, su.e)(null, null, ju, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: uu => "direction" in uu,
              get: uu => uu.direction,
              set: (uu, Eu) => {
                uu.direction = Eu
              }
            },
            metadata: Zu
          }, bu, cu), Zu && Object.defineProperty(uu, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Zu
          })
        })(), uu
      })(),
      bu = !1;

    function cu() {
      bu || (bu = !0, qu.c.AddNodeConstructor("Light_Type_3", ((uu, Eu) => () => new Cu(uu, Zu.t.Zero(), Eu))), (0, fu.f)("BABYLON.HemisphericLight", Cu))
    }
  },
  37671: (uu, Eu, ju) => {
    ju.d(Eu, {
      Color3: () => su.c,
      b: () => su.g
    });
    var su = ju(37680);
    (0, su.i)()
  },
  38152: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(38154);
    class Uu {
      static GetPlanes(uu) {
        const Eu = [];
        for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
        return Uu.GetPlanesToRef(uu, Eu), Eu
      }
      static GetNearPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[2], Eu.normal.y = ju[7] + ju[6], Eu.normal.z = ju[11] + ju[10], Eu.d = ju[15] + ju[14], Eu.normalize()
      }
      static GetFarPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[2], Eu.normal.y = ju[7] - ju[6], Eu.normal.z = ju[11] - ju[10], Eu.d = ju[15] - ju[14], Eu.normalize()
      }
      static GetLeftPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[0], Eu.normal.y = ju[7] + ju[4], Eu.normal.z = ju[11] + ju[8], Eu.d = ju[15] + ju[12], Eu.normalize()
      }
      static GetRightPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[0], Eu.normal.y = ju[7] - ju[4], Eu.normal.z = ju[11] - ju[8], Eu.d = ju[15] - ju[12], Eu.normalize()
      }
      static GetTopPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[1], Eu.normal.y = ju[7] - ju[5], Eu.normal.z = ju[11] - ju[9], Eu.d = ju[15] - ju[13], Eu.normalize()
      }
      static GetBottomPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[1], Eu.normal.y = ju[7] + ju[5], Eu.normal.z = ju[11] + ju[9], Eu.d = ju[15] + ju[13], Eu.normalize()
      }
      static GetPlanesToRef(uu, Eu) {
        Uu.GetNearPlaneToRef(uu, Eu[0]), Uu.GetFarPlaneToRef(uu, Eu[1]), Uu.GetLeftPlaneToRef(uu, Eu[2]), Uu.GetRightPlaneToRef(uu, Eu[3]), Uu.GetTopPlaneToRef(uu, Eu[4]), Uu.GetBottomPlaneToRef(uu, Eu[5])
      }
      static IsPointInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ju++)
          if (Eu[ju].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  38154: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju, Uu) {
        this.normal = new su.t(uu, Eu, ju), this.d = Uu
      }
      Osu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Uu(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eu = 0;
        return 0 !== uu && (Eu = 1 / uu), this.normal.x *= Eu, this.normal.y *= Eu, this.normal.z *= Eu, this.d *= Eu, this
      }
      transform(uu) {
        const Eu = Uu._TmpMatrix;
        uu.invertToRef(Eu);
        const ju = Eu.m,
          su = this.normal.x,
          Zu = this.normal.y,
          Xu = this.normal.z,
          lu = this.d,
          qu = su * ju[0] + Zu * ju[1] + Xu * ju[2] + lu * ju[3],
          fu = su * ju[4] + Zu * ju[5] + Xu * ju[6] + lu * ju[7],
          Cu = su * ju[8] + Zu * ju[9] + Xu * ju[10] + lu * ju[11],
          bu = su * ju[12] + Zu * ju[13] + Xu * ju[14] + lu * ju[15];
        return new Uu(qu, fu, Cu, bu)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Eu, ju) {
        const su = Eu.x - uu.x,
          Uu = Eu.y - uu.y,
          Zu = Eu.z - uu.z,
          Xu = ju.x - uu.x,
          lu = ju.y - uu.y,
          qu = ju.z - uu.z,
          fu = Uu * qu - Zu * lu,
          Cu = Zu * Xu - su * qu,
          bu = su * lu - Uu * Xu,
          cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
        let Nu;
        return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Eu) {
        return su.t.Dot(this.normal, uu) <= Eu
      }
      signedDistanceTo(uu) {
        return su.t.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Uu(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Eu, ju) {
        const su = new Uu(0, 0, 0, 0);
        return su.copyFromPoints(uu, Eu, ju), su
      }
      static FromPositionAndNormal(uu, Eu) {
        const ju = new Uu(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Eu, ju)
      }
      static FromPositionAndNormalToRef(uu, Eu, ju) {
        return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Eu, ju) {
        const Uu = -(Eu.x * uu.x + Eu.y * uu.y + Eu.z * uu.z);
        return su.t.Dot(ju, Eu) + Uu
      }
    }
    Uu._TmpMatrix = su.e.Identity()
  },
  37488: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Matrix: () => su.e,
      Quaternion: () => su.i,
      RegisterMathVector: () => su.l,
      TmpVectors: () => su.m,
      Vector2: () => su.p,
      dO: () => su.t,
      Vector4: () => su.u
    });
    var su = ju(37494);
    (0, su.l)()
  },
  38458: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu, ju, su) {
        this.x = uu, this.y = Eu, this.width = ju, this.height = su
      }
      toGlobal(uu, Eu) {
        return new su(this.x * uu, this.y * Eu, this.width * uu, this.height * Eu)
      }
      toGlobalToRef(uu, Eu, ju) {
        return ju.x = this.x * uu, ju.y = this.y * Eu, ju.width = this.width * uu, ju.height = this.height * Eu, this
      }
      clone() {
        return new su(this.x, this.y, this.width, this.height)
      }
    }
  },
  40659: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => fu
    });
    var su = ju(37494),
      Uu = ju(37680),
      Zu = ju(40661),
      Xu = ju(40668),
      lu = ju(40693);

    function qu(uu) {
      let Eu = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ju = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Zu = [],
        qu = uu.width || uu.size || 1,
        fu = uu.height || uu.size || 1,
        Cu = uu.depth || uu.size || 1,
        bu = uu.wrap || !1;
      let cu = void 0 === uu.topBaseAt ? 1 : uu.topBaseAt,
        Nu = void 0 === uu.bottomBaseAt ? 0 : uu.bottomBaseAt;
      cu = (cu + 4) % 4, Nu = (Nu + 4) % 4;
      let Ou = [2, 0, 3, 1][cu],
        Yu = [2, 0, 1, 3][Nu],
        hu = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (bu) {
        Eu = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], hu = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let uu = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ju = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const su = [17, 18, 19, 16],
          Uu = [22, 23, 20, 21];
        for (; Ou > 0;) uu.unshift(uu.pop()), su.unshift(su.pop()), Ou--;
        for (; Yu > 0;) ju.unshift(ju.pop()), Uu.unshift(Uu.pop()), Yu--;
        uu = uu.flat(), ju = ju.flat(), hu = hu.concat(uu).concat(ju), Eu.push(su[0], su[2], su[3], su[0], su[1], su[2]), Eu.push(Uu[0], Uu[2], Uu[3], Uu[0], Uu[1], Uu[2])
      }
      const Du = [qu / 2, fu / 2, Cu / 2],
        gu = hu.reduce(((uu, Eu, ju) => uu.concat(Eu * Du[ju % 3])), []),
        Mu = 0 === uu.sideOrientation ? 0 : uu.sideOrientation || Xu.b.DEFAULTSIDE,
        eu = uu.faceUV || new Array(6),
        Gu = uu.faceColors,
        pu = [];
      for (let Xu = 0; Xu < 6; Xu++) void 0 === eu[Xu] && (eu[Xu] = new su.u(0, 0, 1, 1)), Gu && void 0 === Gu[Xu] && (Gu[Xu] = new Uu.g(1, 1, 1, 1));
      for (let su = 0; su < 6; su++)
        if (Zu.push(eu[su].z, lu.c ? 1 - eu[su].w : eu[su].w), Zu.push(eu[su].x, lu.c ? 1 - eu[su].w : eu[su].w), Zu.push(eu[su].x, lu.c ? 1 - eu[su].y : eu[su].y), Zu.push(eu[su].z, lu.c ? 1 - eu[su].y : eu[su].y), Gu)
          for (let uu = 0; uu < 4; uu++) pu.push(Gu[su].r, Gu[su].g, Gu[su].b, Gu[su].a);
      Xu.b._ComputeSides(Mu, gu, Eu, ju, Zu, uu.frontUVs, uu.backUVs);
      const wu = new Xu.b;
      if (wu.indices = Eu, wu.positions = gu, wu.normals = ju, wu.uvs = Zu, Gu) {
        const uu = Mu === Xu.b.DOUBLESIDE ? pu.concat(pu) : pu;
        wu.colors = uu
      }
      return wu
    }

    function fu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const su = new Zu.e(uu, ju);
      Eu.sideOrientation = Zu.e._GetDefaultSideOrientation(Eu.sideOrientation), su._originalBuilderSideOrientation = Eu.sideOrientation;
      return qu(Eu).applyToMesh(su, Eu.updatable), su
    }
    let Cu = !1;
    Cu || (Cu = !0, Xu.b.CreateBox = qu, Zu.e.CreateBox = function(uu, Eu) {
      return fu(uu, {
        size: Eu,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40720: (uu, Eu, ju) => {
    ju.d(Eu, {
      e: () => bu
    });
    var su = ju(37494),
      Uu = ju(40661),
      Zu = ju(40668),
      Xu = ju(40723),
      lu = ju(40399),
      qu = ju(39032);

    function fu(uu) {
      const Eu = [],
        ju = [],
        su = uu.lines,
        Uu = uu.colors,
        Xu = [];
      let lu = 0;
      for (let Zu = 0; Zu < su.length; Zu++) {
        const uu = su[Zu];
        for (let su = 0; su < uu.length; su++) {
          const {
            x: qu,
            y: fu,
            z: Cu
          } = uu[su];
          if (ju.push(qu, fu, Cu), Uu) {
            const uu = Uu[Zu],
              {
                r: Eu,
                g: ju,
                b: lu,
                a: qu
              } = uu[su];
            Xu.push(Eu, ju, lu, qu)
          }
          su > 0 && (Eu.push(lu - 1), Eu.push(lu)), lu++
        }
      }
      const qu = new Zu.b;
      return qu.indices = Eu, qu.positions = ju, Uu && (qu.colors = Xu), qu
    }

    function Cu(uu) {
      const Eu = uu.dashSize || 3,
        ju = uu.gapSize || 1,
        Uu = uu.dashNb || 200,
        Xu = uu.points,
        lu = [],
        qu = [],
        fu = su.t.Zero();
      let Cu, bu, cu, Nu = 0,
        Ou = 0;
      for (cu = 0; cu < Xu.length - 1; cu++) Xu[cu + 1].subtractToRef(Xu[cu], fu), Nu += fu.length();
      const Yu = Nu / Uu,
        hu = Eu * Yu / (Eu + ju);
      for (cu = 0; cu < Xu.length - 1; cu++) {
        Xu[cu + 1].subtractToRef(Xu[cu], fu), Cu = Math.floor(fu.length() / Yu), fu.normalize();
        for (let uu = 0; uu < Cu; uu++) bu = Yu * uu, lu.push(Xu[cu].x + bu * fu.x, Xu[cu].y + bu * fu.y, Xu[cu].z + bu * fu.z), lu.push(Xu[cu].x + (bu + hu) * fu.x, Xu[cu].y + (bu + hu) * fu.y, Xu[cu].z + (bu + hu) * fu.z), qu.push(Ou, Ou + 1), Ou += 2
      }
      const Du = new Zu.b;
      return Du.positions = lu, Du.indices = qu, Du
    }

    function bu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const su = Eu.instance,
        Uu = Eu.lines,
        Zu = Eu.colors;
      if (su) {
        const uu = su.getVerticesData(lu.j.PositionKind);
        let Eu, ju;
        Zu && (Eu = su.getVerticesData(lu.j.ColorKind));
        let Xu = 0,
          qu = 0;
        for (let su = 0; su < Uu.length; su++) {
          const lu = Uu[su];
          for (let Uu = 0; Uu < lu.length; Uu++) uu[Xu] = lu[Uu].x, uu[Xu + 1] = lu[Uu].y, uu[Xu + 2] = lu[Uu].z, Zu && Eu && (ju = Zu[su], Eu[qu] = ju[Uu].r, Eu[qu + 1] = ju[Uu].g, Eu[qu + 2] = ju[Uu].b, Eu[qu + 3] = ju[Uu].a, qu += 4), Xu += 3
        }
        return su.updateVerticesData(lu.j.PositionKind, uu, !1, !1), Zu && Eu && su.updateVerticesData(lu.j.ColorKind, Eu, !1, !1), su.refreshBoundingInfo(), su
      }
      const qu = !!Zu,
        Cu = new Xu.c(uu, ju, null, void 0, void 0, qu, Eu.useVertexAlpha, Eu.material);
      return fu(Eu).applyToMesh(Cu, Eu.updatable), Cu
    }

    function cu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const su = Eu.colors ? [Eu.colors] : null;
      return bu(uu, {
        lines: [Eu.points],
        updatable: Eu.updatable,
        instance: Eu.instance,
        colors: su,
        useVertexAlpha: Eu.useVertexAlpha,
        material: Eu.material
      }, ju)
    }

    function Nu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Zu = Eu.points,
        lu = Eu.instance,
        fu = Eu.gapSize || 1,
        bu = Eu.dashSize || 3;
      if (lu) {
        const uu = uu => {
          const Eu = su.t.Zero(),
            ju = uu.length / 6;
          let Uu, Xu, qu, fu, Cu = 0,
            bu = 0;
          for (qu = 0; qu < Zu.length - 1; qu++) Zu[qu + 1].subtractToRef(Zu[qu], Eu), Cu += Eu.length();
          const cu = Cu / ju,
            Nu = lu._creationDataStorage.dashSize,
            Ou = Nu * cu / (Nu + lu._creationDataStorage.gapSize);
          for (qu = 0; qu < Zu.length - 1; qu++)
            for (Zu[qu + 1].subtractToRef(Zu[qu], Eu), Uu = Math.floor(Eu.length() / cu), Eu.normalize(), fu = 0; fu < Uu && bu < uu.length;) Xu = cu * fu, uu[bu] = Zu[qu].x + Xu * Eu.x, uu[bu + 1] = Zu[qu].y + Xu * Eu.y, uu[bu + 2] = Zu[qu].z + Xu * Eu.z, uu[bu + 3] = Zu[qu].x + (Xu + Ou) * Eu.x, uu[bu + 4] = Zu[qu].y + (Xu + Ou) * Eu.y, uu[bu + 5] = Zu[qu].z + (Xu + Ou) * Eu.z, bu += 6, fu++;
          for (; bu < uu.length;) uu[bu] = Zu[qu].x, uu[bu + 1] = Zu[qu].y, uu[bu + 2] = Zu[qu].z, bu += 3
        };
        return (Eu.dashNb || Eu.dashSize || Eu.gapSize || Eu.useVertexAlpha || Eu.material) && qu.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), lu.updateMeshPositions(uu, !1), lu
      }
      const cu = new Xu.c(uu, ju, null, void 0, void 0, void 0, Eu.useVertexAlpha, Eu.material);
      return Cu(Eu).applyToMesh(cu, Eu.updatable), cu._creationDataStorage = new Uu.g, cu._creationDataStorage.dashSize = bu, cu._creationDataStorage.gapSize = fu, cu
    }
    let Ou = !1;
    Ou || (Ou = !0, Zu.b.CreateLineSystem = fu, Zu.b.CreateDashedLines = Cu, Uu.e.CreateLines = function(uu, Eu) {
      return cu(uu, {
        points: Eu,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Uu.e.CreateDashedLines = function(uu, Eu, ju, su, Uu) {
      return Nu(uu, {
        points: Eu,
        dashSize: ju,
        gapSize: su,
        dashNb: Uu,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40723: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => cu,
      d: () => Yu
    });
    var su, Uu, Zu = ju(37680),
      Xu = ju(40399),
      lu = ju(40661),
      qu = ju(40731),
      fu = ju(40552),
      Cu = ju(40735),
      bu = ju(40153);
    class cu extends lu.e {
      _isShaderMaterial(uu) {
        return !!uu && "ShaderMaterial" === uu.getClassName()
      }
      constructor(uu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          su = arguments.length > 5 ? arguments[5] : void 0,
          Uu = arguments.length > 6 ? arguments[6] : void 0,
          lu = arguments.length > 7 ? arguments[7] : void 0;
        super(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Eu, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = su, this.useVertexAlpha = Uu, this.color = new Zu.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Eu && (this.color = Eu.color.clone(), this.alpha = Eu.alpha, this.useVertexColor = Eu.useVertexColor, this.useVertexAlpha = Eu.useVertexAlpha), this.intersectionThreshold = .1;
        const qu = {
          attributes: [Xu.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? qu.defines.push("#define VERTEXALPHA") : qu.needAlphaBlending = !1, this.useVertexColor ? (qu.defines.push("#define VERTEXCOLOR"), qu.attributes.push(Xu.j.ColorKind)) : (qu.uniforms.push("color"), this._color4 = new Zu.g), lu) this.material = lu;
        else {
          this.hV().wO().isWebGPU && !cu.ForceGLSL && (this._shaderLanguage = 1), qu.shaderLanguage = this._shaderLanguage, qu.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ju.e(349).then((() => ju(42835))), ju.e(355).then((() => ju(42837)))]) : await Promise.all([ju.e(331).then((() => ju(42845))), ju.e(337).then((() => ju(42854)))])
          };
          const uu = new Cu.q("colorShader", this.hV(), "color", qu, !1);
          uu.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(uu)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(uu) {
        const Eu = this.material;
        if (Eu === uu) return;
        const ju = Eu && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(uu), ju && Eu?.dispose()
      }
      _setInternalMaterial(uu) {
        this._setMaterial(uu), this.material && (this.material.fillMode = fu.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(uu) {}
      _bind(uu, Eu) {
        if (!this._geometry) return this;
        const ju = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Eu, ju) : this._geometry._bind(Eu, ju, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: uu,
            g: Eu,
            b: ju
          } = this.color;
          this._color4.set(uu, Eu, ju, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(uu, Eu, ju) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const su = this.hV().wO();
        return this._unIndexed ? su.drawArraysType(fu.b.LineListDrawMode, uu.verticesStart, uu.verticesCount, ju) : su.drawElementsType(fu.b.LineListDrawMode, uu.indexStart, uu.indexCount, ju), this
      }
      dispose(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Eu) && this.material?.dispose(!1, !1, !0), super.dispose(uu)
      }
      clone(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        if (Eu && void 0 === Eu._addToSceneRootNodes) {
          const ju = Eu;
          return ju.source = this, new cu(uu, this.hV(), ju.parent, ju.source, ju.doNotCloneChildren)
        }
        return new cu(uu, this.hV(), Eu, this, ju)
      }
      createInstance(uu) {
        const Eu = new Nu(uu, this);
        if (this.Hr) {
          Eu.Hr = {};
          for (const uu in this.Hr) Eu.Hr[uu] = this.Hr[uu]
        }
        return Eu
      }
      serialize(uu) {
        super.serialize(uu), uu.color = this.color.Osu(), uu.alpha = this.alpha
      }
      static Parse(uu, Eu) {
        const ju = new cu(uu.name, Eu);
        return ju.color = Zu.c.FromArray(uu.color), ju.alpha = uu.alpha, ju
      }
    }
    cu.ForceGLSL = !1;
    class Nu extends qu.b {
      constructor(uu, Eu) {
        super(uu, Eu), this.intersectionThreshold = Eu.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Ou = !1;

    function Yu() {
      Ou || (Ou = !0, lu.e._LinesMeshParser = (uu, Eu) => cu.Parse(uu, Eu))
    }(su = cu.prototype).enableEdgesRendering ?? (su.enableEdgesRendering = (0, bu.g)("LinesMesh", "enableEdgesRendering")), (Uu = Nu.prototype).enableEdgesRendering ?? (Uu.enableEdgesRendering = (0, bu.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  },
  40346: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su.f
    });
    var su = ju(40350);
    (0, su.d)()
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);