export const id = 253;
export const ids = [253];
export const modules = {
  41006: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb
    });
    class kb {}
    kb.AUTOSAMPLERSUFFIX = "Sampler", kb.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", kb.ALPHA_DISABLE = 0, kb.ALPHA_ADD = 1, kb.ALPHA_COMBINE = 2, kb.ALPHA_SUBTRACT = 3, kb.ALPHA_MULTIPLY = 4, kb.ALPHA_MAXIMIZED = 5, kb.ALPHA_ONEONE = 6, kb.ALPHA_PREMULTIPLIED = 7, kb.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, kb.ALPHA_INTERPOLATE = 9, kb.ALPHA_SCREENMODE = 10, kb.ALPHA_ONEONE_ONEONE = 11, kb.ALPHA_ALPHATOCOLOR = 12, kb.ALPHA_REVERSEONEMINUS = 13, kb.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, kb.ALPHA_ONEONE_ONEZERO = 15, kb.ALPHA_EXCLUSION = 16, kb.ALPHA_LAYER_ACCUMULATE = 17, kb.ALPHA_MIN = 18, kb.ALPHA_MAX = 19, kb.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, kb.ALPHA_REPLACE_COLOR = 21, kb.ALPHA_EQUATION_ADD = 0, kb.ALPHA_EQUATION_SUBSTRACT = 1, kb.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, kb.ALPHA_EQUATION_MAX = 3, kb.ALPHA_EQUATION_MIN = 4, kb.ALPHA_EQUATION_DARKEN = 5, kb.DELAYLOADSTATE_NONE = 0, kb.DELAYLOADSTATE_LOADED = 1, kb.DELAYLOADSTATE_LOADING = 2, kb.DELAYLOADSTATE_NOTLOADED = 4, kb.NEVER = 512, kb.ALWAYS = 519, kb.LESS = 513, kb.EQUAL = 514, kb.LEQUAL = 515, kb.GREATER = 516, kb.GEQUAL = 518, kb.NOTEQUAL = 517, kb.KEEP = 7680, kb.ZERO = 0, kb.REPLACE = 7681, kb.INCR = 7682, kb.DECR = 7683, kb.INVERT = 5386, kb.INCR_WRAP = 34055, kb.DECR_WRAP = 34056, kb.TEXTURE_CLAMP_ADDRESSMODE = 0, kb.TEXTURE_WRAP_ADDRESSMODE = 1, kb.TEXTURE_MIRROR_ADDRESSMODE = 2, kb.TEXTURE_REPETITION_NONE = 0, kb.TEXTURE_REPETITION_NOISE_BLEND = 1, kb.TEXTURE_REPETITION_HEX_TILING = 2, kb.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, kb.TEXTURE_REPETITION_VORONOI_BOMBING = 4, kb.TEXTURE_CREATIONFLAG_STORAGE = 1, kb.TEXTUREFORMAT_ALPHA = 0, kb.TEXTUREFORMAT_LUMINANCE = 1, kb.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, kb.TEXTUREFORMAT_RGB = 4, kb.TEXTUREFORMAT_RGBA = 5, kb.TEXTUREFORMAT_RED = 6, kb.TEXTUREFORMAT_R = 6, kb.TEXTUREFORMAT_R16_UNORM = 33322, kb.TEXTUREFORMAT_RG16_UNORM = 33324, kb.TEXTUREFORMAT_RGB16_UNORM = 32852, kb.TEXTUREFORMAT_RGBA16_UNORM = 32859, kb.TEXTUREFORMAT_R16_SNORM = 36760, kb.TEXTUREFORMAT_RG16_SNORM = 36761, kb.TEXTUREFORMAT_RGB16_SNORM = 36762, kb.TEXTUREFORMAT_RGBA16_SNORM = 36763, kb.TEXTUREFORMAT_RG = 7, kb.TEXTUREFORMAT_RED_INTEGER = 8, kb.TEXTUREFORMAT_R_INTEGER = 8, kb.TEXTUREFORMAT_RG_INTEGER = 9, kb.TEXTUREFORMAT_RGB_INTEGER = 10, kb.TEXTUREFORMAT_RGBA_INTEGER = 11, kb.TEXTUREFORMAT_BGRA = 12, kb.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, kb.TEXTUREFORMAT_DEPTH32_FLOAT = 14, kb.TEXTUREFORMAT_DEPTH16 = 15, kb.TEXTUREFORMAT_DEPTH24 = 16, kb.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, kb.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, kb.TEXTUREFORMAT_STENCIL8 = 19, kb.TEXTUREFORMAT_UNDEFINED = 4294967295, kb.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, kb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, kb.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, kb.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, kb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, kb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, kb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, kb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, kb.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, kb.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, kb.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, kb.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, kb.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, kb.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, kb.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, kb.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, kb.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, kb.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, kb.TEXTURETYPE_UNSIGNED_BYTE = 0, kb.TEXTURETYPE_UNSIGNED_INT = 0, kb.TEXTURETYPE_FLOAT = 1, kb.TEXTURETYPE_HALF_FLOAT = 2, kb.TEXTURETYPE_BYTE = 3, kb.TEXTURETYPE_SHORT = 4, kb.TEXTURETYPE_UNSIGNED_SHORT = 5, kb.TEXTURETYPE_INT = 6, kb.TEXTURETYPE_UNSIGNED_INTEGER = 7, kb.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, kb.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, kb.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, kb.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, kb.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, kb.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, kb.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, kb.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, kb.TEXTURETYPE_UNDEFINED = 16, kb.TEXTURE_2D = 3553, kb.TEXTURE_2D_ARRAY = 35866, kb.TEXTURE_CUBE_MAP = 34067, kb.TEXTURE_CUBE_MAP_ARRAY = 3735928559, kb.TEXTURE_3D = 32879, kb.TEXTURE_NEAREST_SAMPLINGMODE = 1, kb.TEXTURE_NEAREST_NEAREST = 1, kb.TEXTURE_BILINEAR_SAMPLINGMODE = 2, kb.TEXTURE_LINEAR_LINEAR = 2, kb.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, kb.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, kb.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, kb.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, kb.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, kb.TEXTURE_NEAREST_LINEAR = 7, kb.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, kb.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, kb.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, kb.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, kb.TEXTURE_LINEAR_NEAREST = 12, kb.TEXTURE_EXPLICIT_MODE = 0, kb.TEXTURE_SPHERICAL_MODE = 1, kb.TEXTURE_PLANAR_MODE = 2, kb.TEXTURE_CUBIC_MODE = 3, kb.TEXTURE_PROJECTION_MODE = 4, kb.TEXTURE_SKYBOX_MODE = 5, kb.TEXTURE_INVCUBIC_MODE = 6, kb.TEXTURE_EQUIRECTANGULAR_MODE = 7, kb.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, kb.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, kb.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, kb.TEXTURE_FILTERING_QUALITY_HIGH = 64, kb.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, kb.TEXTURE_FILTERING_QUALITY_LOW = 8, kb.SCALEMODE_FLOOR = 1, kb.SCALEMODE_NEAREST = 2, kb.SCALEMODE_CEILING = 3, kb.MATERIAL_TextureDirtyFlag = 1, kb.MATERIAL_LightDirtyFlag = 2, kb.MATERIAL_FresnelDirtyFlag = 4, kb.MATERIAL_AttributesDirtyFlag = 8, kb.MATERIAL_MiscDirtyFlag = 16, kb.MATERIAL_PrePassDirtyFlag = 32, kb.MATERIAL_ImageProcessingDirtyFlag = 64, kb.MATERIAL_AllDirtyFlag = 127, kb.MATERIAL_TriangleFillMode = 0, kb.MATERIAL_WireFrameFillMode = 1, kb.MATERIAL_PointFillMode = 2, kb.MATERIAL_PointListDrawMode = 3, kb.MATERIAL_LineListDrawMode = 4, kb.MATERIAL_LineLoopDrawMode = 5, kb.MATERIAL_LineStripDrawMode = 6, kb.MATERIAL_TriangleStripDrawMode = 7, kb.MATERIAL_TriangleFanDrawMode = 8, kb.MATERIAL_ClockWiseSideOrientation = 0, kb.MATERIAL_CounterClockWiseSideOrientation = 1, kb.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, kb.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, kb.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, kb.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, kb.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, kb.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, kb.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, kb.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, kb.ACTION_NothingTrigger = 0, kb.ACTION_OnPickTrigger = 1, kb.ACTION_OnLeftPickTrigger = 2, kb.ACTION_OnRightPickTrigger = 3, kb.ACTION_OnCenterPickTrigger = 4, kb.ACTION_OnPickDownTrigger = 5, kb.ACTION_OnDoublePickTrigger = 6, kb.ACTION_OnPickUpTrigger = 7, kb.ACTION_OnPickOutTrigger = 16, kb.ACTION_OnLongPressTrigger = 8, kb.ACTION_OnPointerOverTrigger = 9, kb.ACTION_OnPointerOutTrigger = 10, kb.ACTION_OnEveryFrameTrigger = 11, kb.ACTION_OnIntersectionEnterTrigger = 12, kb.ACTION_OnIntersectionExitTrigger = 13, kb.ACTION_OnKeyDownTrigger = 14, kb.ACTION_OnKeyUpTrigger = 15, kb.PARTICLES_BILLBOARDMODE_Y = 2, kb.PARTICLES_BILLBOARDMODE_ALL = 7, kb.PARTICLES_BILLBOARDMODE_STRETCHED = 8, kb.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, kb.MESHES_CULLINGSTRATEGY_STANDARD = 0, kb.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, kb.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, kb.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, kb.SCENELOADER_NO_LOGGING = 0, kb.SCENELOADER_MINIMAL_LOGGING = 1, kb.SCENELOADER_SUMMARY_LOGGING = 2, kb.SCENELOADER_DETAILED_LOGGING = 3, kb.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, kb.PREPASS_POSITION_TEXTURE_TYPE = 1, kb.PREPASS_VELOCITY_TEXTURE_TYPE = 2, kb.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, kb.PREPASS_COLOR_TEXTURE_TYPE = 4, kb.PREPASS_DEPTH_TEXTURE_TYPE = 5, kb.PREPASS_NORMAL_TEXTURE_TYPE = 6, kb.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, kb.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, kb.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, kb.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, kb.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, kb.PREPASS_ALBEDO_TEXTURE_TYPE = 12, kb.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, kb.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, kb.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, kb.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, kb.BUFFER_CREATIONFLAG_READ = 1, kb.BUFFER_CREATIONFLAG_WRITE = 2, kb.BUFFER_CREATIONFLAG_READWRITE = 3, kb.BUFFER_CREATIONFLAG_UNIFORM = 4, kb.BUFFER_CREATIONFLAG_VERTEX = 8, kb.BUFFER_CREATIONFLAG_INDEX = 16, kb.BUFFER_CREATIONFLAG_STORAGE = 32, kb.BUFFER_CREATIONFLAG_INDIRECT = 64, kb.RENDERPASS_MAIN = 0, kb.INPUT_ALT_KEY = 18, kb.INPUT_CTRL_KEY = 17, kb.INPUT_META_KEY1 = 91, kb.INPUT_META_KEY2 = 92, kb.INPUT_META_KEY3 = 93, kb.INPUT_SHIFT_KEY = 16, kb.SNAPSHOTRENDERING_STANDARD = 0, kb.SNAPSHOTRENDERING_FAST = 1, kb.PERSPECTIVE_CAMERA = 0, kb.ORTHOGRAPHIC_CAMERA = 1, kb.FOVMODE_VERTICAL_FIXED = 0, kb.FOVMODE_HORIZONTAL_FIXED = 1, kb.RIG_MODE_NONE = 0, kb.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, kb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, kb.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, kb.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, kb.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, kb.RIG_MODE_VR = 20, kb.RIG_MODE_CUSTOM = 22, kb.MAX_SUPPORTED_UV_SETS = 6, kb.GL_ALPHA_EQUATION_ADD = 32774, kb.GL_ALPHA_EQUATION_MIN = 32775, kb.GL_ALPHA_EQUATION_MAX = 32776, kb.GL_ALPHA_EQUATION_SUBTRACT = 32778, kb.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, kb.GL_ALPHA_FUNCTION_SRC = 768, kb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, kb.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, kb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, kb.GL_ALPHA_FUNCTION_DST_ALPHA = 772, kb.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, kb.GL_ALPHA_FUNCTION_DST_COLOR = 774, kb.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, kb.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, kb.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, kb.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, kb.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, kb.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, kb.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, kb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, kb.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, kb.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, kb.SnippetUrl = "https://snippet.babylonjs.com", kb.FOGMODE_NONE = 0, kb.FOGMODE_EXP = 1, kb.FOGMODE_EXP2 = 2, kb.FOGMODE_LINEAR = 3, kb.BYTE = 5120, kb.UNSIGNED_BYTE = 5121, kb.SHORT = 5122, kb.UNSIGNED_SHORT = 5123, kb.INT = 5124, kb.UNSIGNED_INT = 5125, kb.FLOAT = 5126, kb.HALF_FLOAT = 5131, kb.PositionKind = "position", kb.NormalKind = "normal", kb.TangentKind = "tangent", kb.UVKind = "uv", kb.UV2Kind = "uv2", kb.UV3Kind = "uv3", kb.UV4Kind = "uv4", kb.UV5Kind = "uv5", kb.UV6Kind = "uv6", kb.ColorKind = "color", kb.ColorInstanceKind = "instanceColor", kb.MatricesIndicesKind = "matricesIndices", kb.MatricesWeightsKind = "matricesWeights", kb.MatricesIndicesExtraKind = "matricesIndicesExtra", kb.MatricesWeightsExtraKind = "matricesWeightsExtra", kb.ANIMATIONTYPE_FLOAT = 0, kb.ANIMATIONTYPE_VECTOR3 = 1, kb.ANIMATIONTYPE_QUATERNION = 2, kb.ANIMATIONTYPE_MATRIX = 3, kb.ANIMATIONTYPE_COLOR3 = 4, kb.ANIMATIONTYPE_COLOR4 = 7, kb.ANIMATIONTYPE_VECTOR2 = 5, kb.ANIMATIONTYPE_SIZE = 6, kb.ShadowMinZ = 0, kb.ShadowMaxZ = 1e4, kb.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, kb.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  40987: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Ib
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(39706),
      Ub = sb(39674);
    let Ib = (() => {
      var bb;
      let cb, sb, Ib, Hb, fb = Tb.b,
        Mb = [];
      return bb = class extends fb {
        constructor() {
          super(...arguments), this._position = (0, kb.m)(this, Mb), this._needProjectionMatrixCompute = !0, this._viewMatrix = ab.e.Identity(), this._projectionMatrix = ab.e.Identity()
        }
        _setPosition(bb) {
          this._position = bb
        }
        get position() {
          return this._position
        }
        set position(bb) {
          this._setPosition(bb)
        }
        _setDirection(bb) {
          this._direction = bb
        }
        get direction() {
          return this._direction
        }
        set direction(bb) {
          this._setDirection(bb)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(bb) {
          this._shadowMinZ = bb, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(bb) {
          this._shadowMaxZ = bb, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = ab.p.Zero()), ab.p.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = ab.p.Zero()), ab.p.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(bb) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(bb) {
          return this.direction = ab.p.Normalize(bb.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const bb = ab.p.Cross(this.direction, Ub.d.Y),
            cb = ab.p.Cross(bb, this.direction);
          return ab.p.RotationFromAxis(bb, cb, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = ab.p.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(bb) {
          return !bb && this.isSynchronized() ? (this._currentRenderId = this.EY().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.ssb(this.position), this._worldMatrix || (this._worldMatrix = ab.e.Identity()), ab.e.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(bb) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : bb?.minZ || 0
        }
        getDepthMaxZ(bb) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : bb?.maxZ || 1e4
        }
        setShadowProjectionMatrix(bb, cb, sb) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(cb, sb, bb) : this._setDefaultShadowProjectionMatrix(bb, cb, sb), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(bb) {
          const cb = ab.m.Fm[0];
          let sb = this.position;
          this.computeTransformedInformation() && (sb = this.transformedPosition), ab.p.NormalizeToRef(this.getShadowDirection(bb), cb), 1 === Math.abs(ab.p.Dot(cb, ab.p.Up())) && (cb.z = 1e-13);
          const kb = ab.m.Fm[1];
          return sb.addToRef(cb, kb), ab.e.LookAtLHToRef(sb, kb, ab.p.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(bb, cb) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, bb ?? this._viewMatrix, cb ?? []), this._projectionMatrix
        }
      }, (() => {
        const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(fb[Symbol.metadata] ?? null) : void 0;
        cb = [(0, Wb.C)()], sb = [(0, Wb.C)()], Ib = [(0, Wb.E)()], Hb = [(0, Wb.E)()], (0, kb.j)(bb, null, cb, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: bb => "position" in bb,
            get: bb => bb.position
          },
          metadata: ab
        }, null, Mb), (0, kb.j)(bb, null, sb, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: bb => "direction" in bb,
            get: bb => bb.direction
          },
          metadata: ab
        }, null, Mb), (0, kb.j)(bb, null, Ib, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "shadowMinZ" in bb,
            get: bb => bb.shadowMinZ
          },
          metadata: ab
        }, null, Mb), (0, kb.j)(bb, null, Hb, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: bb => "shadowMaxZ" in bb,
            get: bb => bb.shadowMaxZ
          },
          metadata: ab
        }, null, Mb), ab && Object.defineProperty(bb, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ab
        })
      })(), bb
    })()
  },
  41e3: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Wb
    });
    var kb = sb(39895);
    class Wb extends kb.e {
      constructor(bb, cb, sb, Wb, ab) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Ib = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Hb = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          fb = arguments.length > 9 ? arguments[9] : void 0,
          Mb = arguments.length > 10 ? arguments[10] : void 0,
          Xb = arguments.length > 11 ? arguments[11] : void 0,
          nb = arguments.length > 12 ? arguments[12] : void 0;
        super(null, ab, !Tb, Ub, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, fb), this.format = Wb, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Hb || (Ib = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Hb || (Ib = 1), this._texture = this._engine.createRawTexture(bb, cb, sb, Wb, Tb, Ub, Ib, null, Hb, fb ?? 0, Mb ?? !1, nb), this.wrapU = kb.e.CLAMP_ADDRESSMODE, this.wrapV = kb.e.CLAMP_ADDRESSMODE, this._waitingForData = !!Xb && !bb)
      }
      update(bb) {
        this.updateMipLevel(bb, 0)
      }
      updateMipLevel(bb, cb) {
        this._getEngine().updateRawTexture(this._texture, bb, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, cb), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const bb = new Wb(null, this.getSize().width, this.getSize().height, this.format, this.EY(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return bb._texture = this._texture, this._texture.incrementReferences(), bb
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 1, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 2, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 0, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 4, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 5, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(bb, cb, sb, kb) {
        return new Wb(bb, cb, sb, 5, kb, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(bb, cb, sb, ab) {
        let Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ib = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kb.e.TRILINEAR_SAMPLINGMODE;
        return new Wb(bb, cb, sb, 6, ab, Tb, Ub, Ib, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(bb, cb, sb, ab) {
        let Tb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Ib = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : kb.e.TRILINEAR_SAMPLINGMODE;
        return new Wb(bb, cb, sb, 6, ab, Tb, Ub, Ib, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41043: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb.e
    });
    var kb = sb(39865);
    (0, kb.h)()
  },
  40991: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => kb.c
    });
    var kb = sb(39877);
    (0, kb.f)()
  },
  39877: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb,
      f: () => lb
    });
    var kb, Wb, ab = sb(36830),
      Tb = sb(39576),
      Ub = sb(39835),
      Ib = sb(39884),
      Hb = sb(39730),
      fb = sb(39889),
      Mb = sb(39296);
    class Xb extends Ub.b {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          kb = arguments.length > 5 ? arguments[5] : void 0,
          Wb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, cb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = kb, this.useVertexAlpha = Wb, this.color = new ab.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, cb && (this.color = cb.color.clone(), this.alpha = cb.alpha, this.useVertexColor = cb.useVertexColor, this.useVertexAlpha = cb.useVertexAlpha), this.intersectionThreshold = .1;
        const Ib = {
          attributes: [Tb.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Ib.defines.push("#define VERTEXALPHA") : Ib.needAlphaBlending = !1, this.useVertexColor ? (Ib.defines.push("#define VERTEXCOLOR"), Ib.attributes.push(Tb.l.ColorKind)) : (Ib.uniforms.push("color"), this._color4 = new ab.g), Ub) this.material = Ub;
        else {
          this.EY().Sm().isWebGPU && !Xb.ForceGLSL && (this._shaderLanguage = 1), Ib.shaderLanguage = this._shaderLanguage, Ib.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([sb.e(334).then((() => sb(41916))), sb.e(340).then((() => sb(41922)))]) : await Promise.all([sb.e(316).then((() => sb(41925))), sb.e(322).then((() => sb(41928)))])
          };
          const bb = new fb.q("colorShader", this.EY(), "color", Ib, !1);
          bb.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(bb)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(bb) {
        const cb = this.material;
        if (cb === bb) return;
        const sb = cb && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), sb && cb?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = Hb.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, cb) {
        if (!this._geometry) return this;
        const sb = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(cb, sb) : this._geometry._bind(cb, sb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: cb,
            b: sb
          } = this.color;
          this._color4.set(bb, cb, sb, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, cb, sb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const kb = this.EY().Sm();
        return this._unIndexed ? kb.drawArraysType(Hb.e.LineListDrawMode, bb.verticesStart, bb.verticesCount, sb) : kb.drawElementsType(Hb.e.LineListDrawMode, bb.indexStart, bb.indexCount, sb), this
      }
      dispose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || cb) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (cb && void 0 === cb._addToSceneRootNodes) {
          const sb = cb;
          return sb.source = this, new Xb(bb, this.EY(), sb.parent, sb.source, sb.doNotCloneChildren)
        }
        return new Xb(bb, this.EY(), cb, this, sb)
      }
      createInstance(bb) {
        const cb = new nb(bb, this);
        if (this.LJ) {
          cb.LJ = {};
          for (const bb in this.LJ) cb.LJ[bb] = this.LJ[bb]
        }
        return cb
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.Osb(), bb.alpha = this.alpha
      }
      static Parse(bb, cb) {
        const sb = new Xb(bb.name, cb);
        return sb.color = ab.e.FromArray(bb.color), sb.alpha = bb.alpha, sb
      }
    }
    Xb.ForceGLSL = !1;
    class nb extends Ib.e {
      constructor(bb, cb) {
        super(bb, cb), this.intersectionThreshold = cb.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let mb = !1;

    function lb() {
      mb || (mb = !0, Ub.b._LinesMeshParser = (bb, cb) => Xb.Parse(bb, cb))
    }(kb = Xb.prototype).enableEdgesRendering ?? (kb.enableEdgesRendering = (0, Mb.e)("LinesMesh", "enableEdgesRendering")), (Wb = nb.prototype).enableEdgesRendering ?? (Wb.enableEdgesRendering = (0, Mb.e)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);