export const id = 259;
export const ids = [259];
export const modules = {
  39701: (bb, ab, Ub) => {
    Ub.d(ab, {
      $d: () => tb,
      $e: () => mU,
      $f: () => fU,
      Ac: () => La,
      Ad: () => ja,
      Be: () => hU,
      Cb: () => aU,
      Ce: () => QU,
      D: () => Ma,
      Dc: () => Nb,
      Df: () => iU,
      Eb: () => Xa,
      Ed: () => Bb,
      Ee: () => GU,
      Fb: () => Ya,
      G: () => Wb,
      Gc: () => ea,
      Gd: () => vb,
      Hb: () => Mb,
      Hd: () => ka,
      He: () => cU,
      Hf: () => kU,
      I: () => Ib,
      Ic: () => Ba,
      Ie: () => FU,
      Jb: () => yb,
      Jd: () => ga,
      Jf: () => OU,
      Kd: () => ob,
      Lb: () => Za,
      Lc: () => Ua,
      M: () => Hb,
      Mb: () => cb,
      Me: () => KU,
      N: () => ta,
      Nc: () => pb,
      Nf: () => uU,
      O: () => Xb,
      Od: () => Pa,
      Oe: () => dU,
      P: () => wb,
      Pb: () => bU,
      Qb: () => db,
      Qc: () => zb,
      Rf: () => rU,
      Sb: () => nb,
      Sd: () => Oa,
      Se: () => tU,
      Sf: () => DU,
      T: () => TA,
      Tc: () => Ab,
      Ud: () => oa,
      Ue: () => lU,
      Vb: () => Jb,
      Vf: () => RU,
      Wc: () => mb,
      X: () => Sa,
      Xb: () => aa,
      Xd: () => ba,
      Ye: () => oU,
      Yf: () => qU,
      Zc: () => Ea,
      Zd: () => Sb,
      Ze: () => MA,
      _: () => Ob,
      _b: () => Ra,
      _c: () => kb,
      ac: () => Cb,
      ad: () => Rb,
      bb: () => Ja,
      cc: () => Fb,
      cg: () => zU,
      dc: () => Ta,
      dd: () => jb,
      de: () => xb,
      df: () => HU,
      e: () => Tb,
      eb: () => na,
      ef: () => pU,
      eg: () => gU,
      ff: () => IU,
      gb: () => Vb,
      ge: () => Lb,
      h: () => Eb,
      hc: () => Zb,
      hd: () => TU,
      ib: () => ca,
      ig: () => ZU,
      jd: () => EU,
      je: () => BU,
      jf: () => WU,
      ke: () => UA,
      kf: () => NU,
      l: () => fb,
      lb: () => rb,
      lc: () => Db,
      mc: () => va,
      md: () => ib,
      mg: () => wU,
      n: () => ub,
      nf: () => AA,
      oe: () => yU,
      og: () => PU,
      p: () => eU,
      pb: () => AU,
      pc: () => eb,
      pd: () => Gb,
      pe: () => xU,
      q: () => YU,
      qc: () => sa,
      r: () => Yb,
      rf: () => nU,
      sc: () => lb,
      sd: () => hb,
      sf: () => bA,
      sg: () => jU,
      t: () => la,
      tb: () => MU,
      tc: () => gb,
      te: () => XU,
      ub: () => Kb,
      uc: () => Va,
      uf: () => JU,
      ve: () => CU,
      w: () => wa,
      wd: () => qb,
      wf: () => SU,
      x: () => sb,
      xc: () => Aa,
      xd: () => Qb,
      y: () => Ca,
      yb: () => UU,
      ye: () => sU,
      yf: () => aA,
      z: () => Pb,
      zf: () => VU
    });
    const Ab = -2147483648,
      Mb = 12,
      Tb = 12,
      Eb = 4095,
      Yb = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      Bb = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      eb = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      vb = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      Lb = {
        Alive: 16
      },
      Pb = 32,
      Xb = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      jb = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      Rb = 4294967295,
      kb = 0,
      yb = 4294967295,
      Zb = 4,
      Db = 123,
      zb = -2147483648,
      xb = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      ib = 51,
      fb = 5,
      mb = 4294967295,
      pb = 4294967295,
      Nb = 128,
      Wb = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      Hb = 16,
      Ib = 255,
      db = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      Fb = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      hb = {
        Hotbar: 256,
        Drop: 257
      },
      Gb = {
        Down: 1,
        Next: 2,
        Stack: 4
      },
      Qb = {
        Rate: 0,
        Gyro: 1
      },
      qb = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      ub = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      rb = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      Kb = {
        LookPointed: 1,
        Held: 2
      },
      ob = 3,
      lb = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      tb = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      wb = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      sb = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      gb = {
        Stackable: 1
      },
      Cb = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      Vb = {
        Detail: 1,
        RoomForOne: 2
      },
      Ob = {
        HaveIngredients: 1,
        Listed: 2
      },
      cb = {
        HasOpts: 1
      },
      Jb = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      nb = {
        Up: 1,
        Down: 2
      },
      Sb = {
        TwoD: 1,
        Loop: 2
      },
      ba = {
        StopAfter: 1
      },
      aa = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      Ua = {
        Pose: 1,
        Visible: 2
      },
      Aa = 255,
      Ma = 65535,
      Ta = 255,
      Ea = 65535,
      Ya = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      Ba = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      ea = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      va = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      La = 4294967295,
      Pa = 4294967295,
      Xa = 255,
      ja = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      Ra = {
        critical: 123
      },
      ka = 4294967295,
      ya = {
        BYTES: 4,
        qL: (bb, ab) => bb.getUint32(ab + 0, !0)
      },
      Za = {
        BYTES: 12,
        serverId: (bb, ab) => bb.getInt32(ab + 0, !0),
        index: (bb, ab) => bb.getUint32(ab + 4, !0),
        kind: (bb, ab) => bb.getUint16(ab + 8, !0)
      },
      Da = {
        BYTES: 20,
        pos: (bb, ab, Ub) => bb.getInt32(ab + 0 + 4 * Ub, !0),
        actual: (bb, ab) => bb.getUint32(ab + 12, !0),
        dataLen: (bb, ab) => bb.getUint32(ab + 16, !0)
      },
      za = {
        BYTES: 20,
        what: (bb, ab) => bb.getUint8(ab + 0),
        value: (bb, ab) => bb.getInt16(ab + 2, !0),
        pos: (bb, ab, Ub) => bb.getInt32(ab + 4 + 4 * Ub, !0),
        block: (bb, ab) => bb.getUint32(ab + 16, !0)
      },
      xa = {
        BYTES: 4,
        item: (bb, ab) => bb.getUint16(ab + 0, !0),
        slot: (bb, ab) => bb.getUint8(ab + 2)
      },
      ia = {
        BYTES: 16,
        target: (bb, ab) => bb.getInt32(ab + 0, !0),
        damage: (bb, ab) => bb.getFloat32(ab + 4, !0),
        distance: (bb, ab) => bb.getFloat32(ab + 8, !0),
        crit: (bb, ab) => bb.getUint8(ab + 12)
      },
      fa = {
        BYTES: 4,
        slot: (bb, ab) => bb.getUint16(ab + 0, !0)
      },
      ma = {
        BYTES: 20,
        what: (bb, ab) => bb.getUint8(ab + 0),
        value: (bb, ab) => bb.getInt16(ab + 2, !0),
        pos: (bb, ab, Ub) => bb.getInt32(ab + 4 + 4 * Ub, !0),
        block: (bb, ab) => bb.getUint32(ab + 16, !0)
      },
      pa = {
        BYTES: 12,
        serverId: (bb, ab) => bb.getInt32(ab + 0, !0),
        index: (bb, ab) => bb.getUint32(ab + 4, !0),
        what: (bb, ab) => bb.getUint16(ab + 8, !0)
      },
      Na = {
        BYTES: 24,
        cx: (bb, ab) => bb.getInt32(ab + 0, !0),
        cy: (bb, ab) => bb.getInt32(ab + 4, !0),
        cz: (bb, ab) => bb.getInt32(ab + 8, !0),
        slot: (bb, ab) => bb.getUint32(ab + 12, !0),
        generation: (bb, ab) => bb.getUint32(ab + 16, !0),
        flags: (bb, ab) => bb.getUint32(ab + 20, !0)
      },
      Wa = {
        BYTES: 44,
        pos: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        sound: (bb, ab) => bb.getUint16(ab + 24, !0),
        flags: (bb, ab) => bb.getUint16(ab + 26, !0),
        handle: (bb, ab) => bb.getUint32(ab + 28, !0),
        volume: (bb, ab) => bb.getFloat32(ab + 32, !0),
        rate: (bb, ab) => bb.getFloat32(ab + 36, !0),
        refDist: (bb, ab) => bb.getFloat32(ab + 40, !0)
      },
      Ha = {
        BYTES: 28,
        pos: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        handle: (bb, ab) => bb.getUint32(ab + 24, !0)
      },
      Ia = {
        BYTES: 16,
        handle: (bb, ab) => bb.getUint32(ab + 0, !0),
        volume: (bb, ab) => bb.getFloat32(ab + 4, !0),
        rate: (bb, ab) => bb.getFloat32(ab + 8, !0),
        refDist: (bb, ab) => bb.getFloat32(ab + 12, !0)
      },
      da = {
        BYTES: 12,
        handle: (bb, ab) => bb.getUint32(ab + 0, !0),
        to: (bb, ab) => bb.getFloat32(ab + 4, !0),
        ms: (bb, ab) => bb.getUint16(ab + 8, !0),
        flags: (bb, ab) => bb.getUint16(ab + 10, !0)
      },
      Fa = {
        BYTES: 4,
        handle: (bb, ab) => bb.getUint32(ab + 0, !0)
      },
      ha = {
        BYTES: 4,
        reason: (bb, ab) => bb.getUint8(ab + 0),
        code: (bb, ab) => bb.getUint8(ab + 1)
      },
      Ga = {
        BYTES: 4,
        key: (bb, ab) => bb.getUint8(ab + 0),
        tag: (bb, ab) => bb.getUint8(ab + 1)
      },
      Qa = {
        BYTES: 16,
        save: (bb, ab) => bb.getUint32(ab + 0, !0),
        index: (bb, ab) => bb.getUint32(ab + 4, !0),
        ptr: (bb, ab) => bb.getUint32(ab + 8, !0),
        len: (bb, ab) => bb.getUint32(ab + 12, !0)
      },
      qa = {
        BYTES: 16,
        save: (bb, ab) => bb.getUint32(ab + 0, !0),
        kind: (bb, ab) => bb.getUint8(ab + 4),
        parts: (bb, ab) => bb.getUint32(ab + 8, !0),
        bytes: (bb, ab) => bb.getUint32(ab + 12, !0)
      },
      ua = {
        BYTES: 4,
        totalTicks: (bb, ab) => bb.getUint32(ab + 0, !0)
      },
      ra = {
        BYTES: 24,
        what: (bb, ab) => bb.getUint8(ab + 0),
        int: (bb, ab) => bb.getInt32(ab + 4, !0),
        x: (bb, ab) => bb.getFloat64(ab + 8, !0),
        y: (bb, ab) => bb.getFloat64(ab + 16, !0)
      },
      Ka = {
        BYTES: 8,
        what: (bb, ab) => bb.getUint8(ab + 0),
        kind: (bb, ab) => bb.getUint8(ab + 1),
        save: (bb, ab) => bb.getUint32(ab + 4, !0)
      },
      oa = {
        BYTES: 4,
        fE: (bb, ab) => bb.getUint16(ab + 0, !0)
      },
      la = {
        BYTES: 360,
        eye: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        localPos: (bb, ab, Ub) => bb.getFloat64(ab + 24 + 8 * Ub, !0),
        S_: (bb, ab, Ub) => bb.getFloat64(ab + 48 + 8 * Ub, !0),
        viewProj: (bb, ab, Ub) => bb.getFloat32(ab + 72 + 4 * Ub, !0),
        origin: (bb, ab, Ub) => bb.getInt32(ab + 136 + 4 * Ub, !0),
        heading: (bb, ab) => bb.getFloat32(ab + 148, !0),
        pitch: (bb, ab) => bb.getFloat32(ab + 152, !0),
        tanHalfFovX: (bb, ab) => bb.getFloat32(ab + 156, !0),
        tanHalfFovY: (bb, ab) => bb.getFloat32(ab + 160, !0),
        viewportCss: (bb, ab, Ub) => bb.getFloat32(ab + 164 + 4 * Ub, !0),
        localVel: (bb, ab, Ub) => bb.getFloat32(ab + 172 + 4 * Ub, !0),
        actionDir: (bb, ab, Ub) => bb.getFloat32(ab + 184 + 4 * Ub, !0),
        localId: (bb, ab) => bb.getInt32(ab + 196, !0),
        playerFlags: (bb, ab) => bb.getUint32(ab + 200, !0),
        targetBlock: (bb, ab, Ub) => bb.getInt32(ab + 204 + 4 * Ub, !0),
        targetAdjacent: (bb, ab, Ub) => bb.getInt32(ab + 216 + 4 * Ub, !0),
        targetBlockId: (bb, ab) => bb.getUint32(ab + 228, !0),
        targetNormal: (bb, ab, Ub) => bb.getInt8(ab + 232 + 1 * Ub),
        targetFlags: (bb, ab) => bb.getUint8(ab + 235),
        pickedEntity: (bb, ab) => bb.getInt32(ab + 236, !0),
        breakingPos: (bb, ab, Ub) => bb.getInt32(ab + 240 + 4 * Ub, !0),
        breakingProgress: (bb, ab) => bb.getFloat32(ab + 252, !0),
        dD: (bb, ab) => bb.getUint16(ab + 256, !0),
        selectedSlot: (bb, ab) => bb.getUint8(ab + 258),
        heldFlags: (bb, ab) => bb.getUint8(ab + 259),
        heldAttrVersion: (bb, ab) => bb.getUint32(ab + 260, !0),
        inventoryVersion: (bb, ab) => bb.getUint32(ab + 264, !0),
        effectsVersion: (bb, ab) => bb.getUint32(ab + 268, !0),
        entitiesVersion: (bb, ab) => bb.getUint32(ab + 272, !0),
        entRenderPtr: (bb, ab) => bb.getUint32(ab + 276, !0),
        entCapacity: (bb, ab) => bb.getUint32(ab + 280, !0),
        frameMs: (bb, ab) => bb.getFloat32(ab + 284, !0),
        fps: (bb, ab) => bb.getFloat32(ab + 288, !0),
        entVisPtr: (bb, ab) => bb.getUint32(ab + 292, !0),
        momentumFrac: (bb, ab) => bb.getFloat32(ab + 296, !0),
        chunkSlotsPtr: (bb, ab) => bb.getUint32(ab + 300, !0),
        chunkSlotsLen: (bb, ab) => bb.getUint32(ab + 304, !0),
        walkThroughPtr: (bb, ab) => bb.getUint32(ab + 308, !0),
        walkThroughLen: (bb, ab) => bb.getUint32(ab + 312, !0),
        audioViewPtr: (bb, ab) => bb.getUint32(ab + 316, !0),
        inventoryViewPtr: (bb, ab) => bb.getUint32(ab + 320, !0),
        eventOverflowGen: (bb, ab) => bb.getUint32(ab + 324, !0),
        eventOverflowMask: (bb, ab) => bb.getUint32(ab + 328, !0),
        promptEntity: (bb, ab) => bb.getInt32(ab + 332, !0),
        replayViewPtr: (bb, ab) => bb.getUint32(ab + 336, !0),
        slotIcon: (bb, ab) => bb.getUint32(ab + 340, !0),
        localDeaths: (bb, ab) => bb.getUint32(ab + 344, !0),
        cameraFar: (bb, ab) => bb.getFloat32(ab + 348, !0),
        gliderBoostFuel: (bb, ab) => bb.getUint32(ab + 352, !0),
        interactLabel: (bb, ab) => bb.getUint16(ab + 356, !0),
        interactIcon: (bb, ab) => bb.getUint16(ab + 358, !0)
      },
      ta = {
        BYTES: 16,
        voxelsPtr: (bb, ab) => bb.getUint32(ab + 0, !0),
        version: (bb, ab) => bb.getUint32(ab + 4, !0),
        generation: (bb, ab) => bb.getUint32(ab + 8, !0),
        PY: (bb, ab) => bb.getUint32(ab + 12, !0)
      },
      wa = {
        BYTES: 56,
        listener: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        forward: (bb, ab, Ub) => bb.getFloat32(ab + 24 + 4 * Ub, !0),
        up: (bb, ab, Ub) => bb.getFloat32(ab + 36 + 4 * Ub, !0),
        dropped: (bb, ab) => bb.getUint32(ab + 48, !0),
        unfollowed: (bb, ab) => bb.getUint32(ab + 52, !0)
      },
      sa = {
        BYTES: 8,
        item: (bb, ab) => bb.getUint16(ab + 0, !0),
        amount: (bb, ab) => bb.getUint16(ab + 2, !0),
        attrVersion: (bb, ab) => bb.getUint32(ab + 4, !0)
      },
      ga = {
        BYTES: 76,
        version: (bb, ab) => bb.getUint32(ab + 0, !0),
        state: (bb, ab) => bb.getUint8(ab + 4),
        cameraMode: (bb, ab) => bb.getUint8(ab + 5),
        qL: (bb, ab) => bb.getUint32(ab + 8, !0),
        totalTicks: (bb, ab) => bb.getUint32(ab + 12, !0),
        speed: (bb, ab) => bb.getFloat32(ab + 16, !0),
        markIn: (bb, ab) => bb.getUint32(ab + 20, !0),
        markOut: (bb, ab) => bb.getUint32(ab + 24, !0),
        editVersion: (bb, ab) => bb.getUint32(ab + 28, !0),
        drops: (bb, ab, Ub) => bb.getUint32(ab + 32 + 4 * Ub, !0)
      },
      Ca = {
        BYTES: 6,
        flags: (bb, ab) => bb.getUint8(ab + 0),
        harvestType: (bb, ab) => bb.getUint8(ab + 1),
        harvestLevel: (bb, ab) => bb.getUint8(ab + 2),
        attachedTop: (bb, ab) => bb.getUint16(ab + 4, !0)
      },
      Va = {
        BYTES: 3,
        flags: (bb, ab) => bb.getUint8(ab + 0),
        harvests: (bb, ab) => bb.getUint8(ab + 1),
        level: (bb, ab) => bb.getUint8(ab + 2)
      },
      Oa = {
        BYTES: 12,
        item: (bb, ab) => bb.getUint32(ab + 0, !0),
        amount: (bb, ab) => bb.getFloat64(ab + 4, !0)
      },
      ca = {
        BYTES: 16,
        recipes: (bb, ab) => bb.getUint32(ab + 0, !0),
        ingredients: (bb, ab) => bb.getUint32(ab + 4, !0),
        craftAllTimes: (bb, ab) => bb.getUint32(ab + 8, !0),
        flags: (bb, ab) => bb.getUint32(ab + 12, !0)
      },
      Ja = {
        BYTES: 10,
        item: (bb, ab) => bb.getUint16(ab + 0, !0),
        recipe: (bb, ab) => bb.getUint16(ab + 2, !0),
        produces: (bb, ab) => bb.getUint16(ab + 4, !0),
        requires: (bb, ab) => bb.getUint16(ab + 6, !0),
        flags: (bb, ab) => bb.getUint8(ab + 8)
      },
      na = {
        BYTES: 4,
        amount: (bb, ab) => bb.getUint16(ab + 0, !0),
        items: (bb, ab) => bb.getUint16(ab + 2, !0)
      },
      Sa = {
        BYTES: 8,
        amount: (bb, ab) => bb.getUint32(ab + 0, !0),
        item: (bb, ab) => bb.getUint16(ab + 4, !0),
        from: (bb, ab) => bb.getUint16(ab + 6, !0)
      },
      bU = {
        BYTES: 16,
        serverId: (bb, ab) => bb.getInt32(ab + 0, !0),
        len: (bb, ab) => bb.getUint32(ab + 4, !0),
        kind: (bb, ab) => bb.getUint16(ab + 8, !0),
        variation: (bb, ab) => bb.getUint16(ab + 10, !0),
        pose: (bb, ab) => bb.getUint8(ab + 12),
        meta: (bb, ab) => bb.getUint8(ab + 13),
        mesh: (bb, ab) => bb.getUint8(ab + 14),
        flags: (bb, ab) => bb.getUint8(ab + 15)
      },
      aU = {
        BYTES: 40,
        terrainOpaque: (bb, ab) => bb.getUint32(ab + 0, !0),
        terrainTransparent: (bb, ab) => bb.getUint32(ab + 4, !0),
        terrainPack: (bb, ab) => bb.getUint32(ab + 8, !0),
        earthSky: (bb, ab) => bb.getUint32(ab + 12, !0),
        skyMeshes: (bb, ab) => bb.getUint32(ab + 16, !0),
        regular: (bb, ab) => bb.getUint32(ab + 20, !0),
        thin: (bb, ab) => bb.getUint32(ab + 24, !0),
        line: (bb, ab) => bb.getUint32(ab + 28, !0),
        text: (bb, ab) => bb.getUint32(ab + 32, !0),
        particles: (bb, ab) => bb.getUint32(ab + 36, !0)
      },
      UU = {
        BYTES: 16,
        fov: (bb, ab) => bb.getFloat32(ab + 0, !0),
        baseFov: (bb, ab) => bb.getFloat32(ab + 4, !0),
        aspect: (bb, ab) => bb.getFloat32(ab + 8, !0),
        bodyHeading: (bb, ab) => bb.getFloat32(ab + 12, !0)
      },
      AU = {
        BYTES: 32,
        eye: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        heading: (bb, ab) => bb.getFloat32(ab + 24, !0),
        pitch: (bb, ab) => bb.getFloat32(ab + 28, !0)
      },
      MU = {
        BYTES: 40,
        feet: (bb, ab, Ub) => bb.getFloat64(ab + 0 + 8 * Ub, !0),
        eyeHeight: (bb, ab) => bb.getFloat32(ab + 24, !0),
        heading: (bb, ab) => bb.getFloat32(ab + 28, !0),
        headingIsDrawn: (bb, ab) => bb.getUint32(ab + 32, !0)
      },
      TU = 32,
      EU = 63,
      YU = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function BU(bb, ab, Ub, Ab, Mb) {
      var Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb, yb, Zb, Db, zb, xb, ib, fb, mb, pb, Nb, Wb, Hb, Ib;
      switch (bb) {
        case 32:
          return 4 === Ab && (null === (Tb = Mb.tickEnd) || void 0 === Tb || Tb.call(Mb, ya.qL(ab, Ub)), !0);
        case 33:
          return 12 === Ab && (null === (Eb = Mb.entitySpawned) || void 0 === Eb || Eb.call(Mb, Za.serverId(ab, Ub), Za.index(ab, Ub), Za.kind(ab, Ub)), !0);
        case 34:
          return 12 === Ab && (null === (Yb = Mb.entityDespawned) || void 0 === Yb || Yb.call(Mb, Za.serverId(ab, Ub), Za.index(ab, Ub), Za.kind(ab, Ub)), !0);
        case 39:
          return !(Ab < 20) && (null === (Bb = Mb.changeBlockFail) || void 0 === Bb || Bb.call(Mb, Da.pos(ab, Ub, 0), Da.pos(ab, Ub, 1), Da.pos(ab, Ub, 2), Da.actual(ab, Ub), Da.dataLen(ab, Ub), Ub + 20, Ab - 20), !0);
        case 46:
          return 0 === Ab && (null === (eb = Mb.changeBlockFailEnd) || void 0 === eb || eb.call(Mb), !0);
        case 48:
          return 20 === Ab && (null === (vb = Mb.inventoryEvent) || void 0 === vb || vb.call(Mb, za.what(ab, Ub), za.value(ab, Ub), za.pos(ab, Ub, 0), za.pos(ab, Ub, 1), za.pos(ab, Ub, 2), za.block(ab, Ub)), !0);
        case 49:
          return 4 === Ab && (null === (Lb = Mb.heldItemChanged) || void 0 === Lb || Lb.call(Mb, xa.item(ab, Ub), xa.slot(ab, Ub)), !0);
        case 50:
          return 16 === Ab && (null === (Pb = Mb.shotDamage) || void 0 === Pb || Pb.call(Mb, ia.target(ab, Ub), ia.damage(ab, Ub), ia.distance(ab, Ub), ia.crit(ab, Ub)), !0);
        case 51:
          return !(Ab < 4) && (null === (Xb = Mb.enchantOffer) || void 0 === Xb || Xb.call(Mb, fa.slot(ab, Ub), Ub + 4, Ab - 4), !0);
        case 52:
          return !(Ab < 20) && (null === (jb = Mb.uiEvent) || void 0 === jb || jb.call(Mb, ma.what(ab, Ub), ma.value(ab, Ub), ma.pos(ab, Ub, 0), ma.pos(ab, Ub, 1), ma.pos(ab, Ub, 2), ma.block(ab, Ub), Ub + 20, Ab - 20), !0);
        case 53:
          return 12 === Ab && (null === (Rb = Mb.entityInfoChanged) || void 0 === Rb || Rb.call(Mb, pa.serverId(ab, Ub), pa.index(ab, Ub), pa.what(ab, Ub)), !0);
        case 55:
          return 24 === Ab && (null === (kb = Mb.chunkSlot) || void 0 === kb || kb.call(Mb, Na.cx(ab, Ub), Na.cy(ab, Ub), Na.cz(ab, Ub), Na.slot(ab, Ub), Na.generation(ab, Ub), Na.flags(ab, Ub)), !0);
        case 40:
          return 44 === Ab && (null === (yb = Mb.playSound) || void 0 === yb || yb.call(Mb, Wa.pos(ab, Ub, 0), Wa.pos(ab, Ub, 1), Wa.pos(ab, Ub, 2), Wa.sound(ab, Ub), Wa.flags(ab, Ub), Wa.handle(ab, Ub), Wa.volume(ab, Ub), Wa.rate(ab, Ub), Wa.refDist(ab, Ub)), !0);
        case 41:
          return 28 === Ab && (null === (Zb = Mb.soundPos) || void 0 === Zb || Zb.call(Mb, Ha.pos(ab, Ub, 0), Ha.pos(ab, Ub, 1), Ha.pos(ab, Ub, 2), Ha.handle(ab, Ub)), !0);
        case 42:
          return 16 === Ab && (null === (Db = Mb.soundSet) || void 0 === Db || Db.call(Mb, Ia.handle(ab, Ub), Ia.volume(ab, Ub), Ia.rate(ab, Ub), Ia.refDist(ab, Ub)), !0);
        case 43:
          return 12 === Ab && (null === (zb = Mb.soundFade) || void 0 === zb || zb.call(Mb, da.handle(ab, Ub), da.to(ab, Ub), da.ms(ab, Ub), da.flags(ab, Ub)), !0);
        case 44:
          return 4 === Ab && (null === (xb = Mb.soundStop) || void 0 === xb || xb.call(Mb, Fa.handle(ab, Ub)), !0);
        case 45:
          return 0 === Ab && (null === (ib = Mb.soundReset) || void 0 === ib || ib.call(Mb), !0);
        case 56:
          return 4 === Ab && (null === (fb = Mb.replayFailed) || void 0 === fb || fb.call(Mb, ha.reason(ab, Ub), ha.code(ab, Ub)), !0);
        case 57:
          return !(Ab < 4) && (null === (mb = Mb.replayOption) || void 0 === mb || mb.call(Mb, Ga.key(ab, Ub), Ga.tag(ab, Ub), Ub + 4, Ab - 4), !0);
        case 58:
          return 16 === Ab && (null === (pb = Mb.replayFilePart) || void 0 === pb || pb.call(Mb, Qa.save(ab, Ub), Qa.index(ab, Ub), Qa.ptr(ab, Ub), Qa.len(ab, Ub)), !0);
        case 59:
          return 16 === Ab && (null === (Nb = Mb.replayFileReady) || void 0 === Nb || Nb.call(Mb, qa.save(ab, Ub), qa.kind(ab, Ub), qa.parts(ab, Ub), qa.bytes(ab, Ub)), !0);
        case 60:
          return !(Ab < 4) && (null === (Wb = Mb.replayOpened) || void 0 === Wb || Wb.call(Mb, ua.totalTicks(ab, Ub), Ub + 4, Ab - 4), !0);
        case 61:
          return !(Ab < 24) && (null === (Hb = Mb.replayUiEvent) || void 0 === Hb || Hb.call(Mb, ra.what(ab, Ub), ra.int(ab, Ub), ra.x(ab, Ub), ra.y(ab, Ub), Ub + 24, Ab - 24), !0);
        case 62:
          return 8 === Ab && (null === (Ib = Mb.recorderEvent) || void 0 === Ib || Ib.call(Mb, Ka.what(ab, Ub), Ka.kind(ab, Ub), Ka.save(ab, Ub)), !0);
        default:
          return !1
      }
    }
    const eU = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let vU = new Uint8Array(0);

    function LU(bb) {
      return vU.buffer !== bb.buffer && (vU = new Uint8Array(bb.buffer)), vU
    }

    function PU(bb, ab, Ub) {
      const Ab = bb.bX(66, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint8(Ab + 0, Ub), !0
    }

    function XU(bb, ab, Ub) {
      const Ab = bb.bX(67, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function jU(bb, ab, Ub) {
      const Ab = bb.bX(68, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint8(Ab + 0, Ub), !0
    }

    function RU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(69, ab, 4 + Ab.length);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint8(Mb + 0, Ub), LU(Tb).set(Ab, Tb.byteOffset + Mb + 4), !0
    }

    function kU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(128, ab, 4 + Mb.length);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      return Eb.setUint8(Tb + 0, Ub), Eb.setUint16(Tb + 2, Ab, !0), LU(Eb).set(Mb, Eb.byteOffset + Tb + 4), !0
    }

    function yU(bb, ab, Ub) {
      const Ab = bb.bX(131, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setInt32(Ab + 0, Ub, !0), !0
    }

    function ZU(bb, ab, Ub) {
      const Ab = bb.bX(132, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function DU(bb, ab, Ub) {
      const Ab = bb.bX(133, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function zU(bb, ab, Ub) {
      const Ab = bb.bX(144, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint8(Ab + 0, Ub), !0
    }

    function xU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(145, ab, 12);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      return Eb.setInt32(Tb + 0, Ub, !0), Eb.setInt32(Tb + 4, Ab, !0), Eb.setInt32(Tb + 8, Mb, !0), !0
    }

    function iU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(256, ab, 4 + Ab.length);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint16(Mb + 0, Ub, !0), LU(Tb).set(Ab, Tb.byteOffset + Mb + 4), !0
    }

    function fU(bb, ab, Ub) {
      const Ab = bb.bX(258, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint8(Ab + 0, Ub), !0
    }

    function mU(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      const eb = bb.bX(320, ab, 48 + Bb.length);
      if (eb < 0) return !1;
      const vb = bb.view;
      vb.setUint32(eb + 0, Ub, !0), vb.setUint16(eb + 4, Ab, !0), vb.setUint16(eb + 6, Mb, !0), vb.setUint32(eb + 8, Tb, !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat64(eb + 12 + 8 * Lb, Eb[Lb], !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat32(eb + 36 + 4 * Lb, Yb[Lb], !0);
      return LU(vb).set(Bb, vb.byteOffset + eb + 48), !0
    }

    function pU(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      const eb = bb.bX(321, ab, 48 + Bb.length);
      if (eb < 0) return !1;
      const vb = bb.view;
      vb.setUint32(eb + 0, Ub, !0), vb.setInt32(eb + 4, Ab, !0), vb.setUint16(eb + 8, Mb, !0), vb.setUint16(eb + 10, Tb, !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat64(eb + 12 + 8 * Lb, Eb[Lb], !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat32(eb + 36 + 4 * Lb, Yb[Lb], !0);
      return LU(vb).set(Bb, vb.byteOffset + eb + 48), !0
    }

    function NU(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const Yb = bb.bX(322, ab, 44 + Eb.length);
      if (Yb < 0) return !1;
      const Bb = bb.view;
      Bb.setUint32(Yb + 0, Ub, !0), Bb.setUint32(Yb + 4, Ab, !0);
      for (let eb = 0; eb < 3; eb++) Bb.setFloat64(Yb + 8 + 8 * eb, Mb[eb], !0);
      for (let eb = 0; eb < 3; eb++) Bb.setFloat32(Yb + 32 + 4 * eb, Tb[eb], !0);
      return LU(Bb).set(Eb, Bb.byteOffset + Yb + 44), !0
    }

    function WU(bb, ab, Ub) {
      const Ab = bb.bX(323, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function HU(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(324, ab, 32 + Tb.length);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      Yb.setUint32(Eb + 0, Ub, !0), Yb.setUint32(Eb + 4, Ab, !0);
      for (let Bb = 0; Bb < 3; Bb++) Yb.setFloat64(Eb + 8 + 8 * Bb, Mb[Bb], !0);
      return LU(Yb).set(Tb, Yb.byteOffset + Eb + 32), !0
    }

    function IU(bb, ab) {
      return !(bb.bX(325, ab, 0) < 0)
    }

    function dU(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(384, ab, 16);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      return Yb.setUint32(Eb + 0, Ub, !0), Yb.setUint32(Eb + 4, Ab, !0), Yb.setFloat32(Eb + 8, Mb, !0), Yb.setFloat32(Eb + 12, Tb, !0), !0
    }

    function FU(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const Yb = bb.bX(385, ab, 36 + Eb.length);
      if (Yb < 0) return !1;
      const Bb = bb.view;
      Bb.setUint32(Yb + 0, Ub, !0), Bb.setUint32(Yb + 4, Ab, !0);
      for (let eb = 0; eb < 3; eb++) Bb.setFloat64(Yb + 8 + 8 * eb, Mb[eb], !0);
      return Bb.setUint32(Yb + 32, Tb, !0), LU(Bb).set(Eb, Bb.byteOffset + Yb + 36), !0
    }

    function hU(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      const eb = bb.bX(386, ab, 56 + Bb.length);
      if (eb < 0) return !1;
      const vb = bb.view;
      vb.setUint32(eb + 0, Ub, !0), vb.setUint8(eb + 4, Ab);
      for (let Lb = 0; Lb < 4; Lb++) vb.setFloat32(eb + 8 + 4 * Lb, Mb[Lb], !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat64(eb + 24 + 8 * Lb, Tb[Lb], !0);
      return vb.setUint32(eb + 48, Eb, !0), vb.setUint32(eb + 52, Yb, !0), LU(vb).set(Bb, vb.byteOffset + eb + 56), !0
    }

    function GU(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      const eb = bb.bX(387, ab, 56);
      if (eb < 0) return !1;
      const vb = bb.view;
      vb.setUint32(eb + 0, Ub, !0), vb.setUint16(eb + 4, Ab, !0), vb.setUint8(eb + 6, Mb);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat64(eb + 8 + 8 * Lb, Tb[Lb], !0);
      for (let Lb = 0; Lb < 2; Lb++) vb.setFloat32(eb + 32 + 4 * Lb, Eb[Lb], !0);
      vb.setFloat32(eb + 40, Yb, !0);
      for (let Lb = 0; Lb < 3; Lb++) vb.setFloat32(eb + 44 + 4 * Lb, Bb[Lb], !0);
      return !0
    }

    function QU(bb, ab, Ub) {
      const Ab = bb.bX(388, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function qU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(389, ab, 8);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setInt32(Mb + 0, Ub, !0), Tb.setFloat32(Mb + 4, Ab, !0), !0
    }

    function uU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(390, ab, 8);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setInt32(Mb + 0, Ub, !0), Tb.setFloat32(Mb + 4, Ab, !0), !0
    }

    function rU(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(391, ab, 12);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      return Yb.setFloat32(Eb + 0, Ub, !0), Yb.setFloat32(Eb + 4, Ab, !0), Yb.setUint8(Eb + 8, Mb), Yb.setUint8(Eb + 9, Tb), !0
    }

    function KU(bb, ab, Ub) {
      const Ab = bb.bX(392, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function oU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(393, ab, 12);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      return Eb.setUint32(Tb + 0, Ub, !0), Eb.setUint16(Tb + 4, Ab, !0), Eb.setFloat32(Tb + 8, Mb, !0), !0
    }

    function lU(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const Yb = bb.bX(394, ab, 36);
      if (Yb < 0) return !1;
      const Bb = bb.view;
      Bb.setUint32(Yb + 0, Ub, !0), Bb.setUint16(Yb + 4, Ab, !0), Bb.setUint8(Yb + 6, Mb);
      for (let eb = 0; eb < 3; eb++) Bb.setFloat64(Yb + 8 + 8 * eb, Tb[eb], !0);
      return Bb.setFloat32(Yb + 32, Eb, !0), !0
    }

    function tU(bb, ab, Ub) {
      const Ab = bb.bX(398, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setUint32(Ab + 0, Ub, !0), !0
    }

    function wU(bb, ab, Ub) {
      const Ab = bb.bX(448, ab, 4);
      if (Ab < 0) return !1;
      return bb.view.setFloat32(Ab + 0, Ub, !0), !0
    }

    function sU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(450, ab, 12);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      for (let Eb = 0; Eb < 2; Eb++) Tb.setFloat32(Mb + 0 + 4 * Eb, Ub[Eb], !0);
      return Tb.setUint8(Mb + 8, Ab), !0
    }

    function gU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(452, ab, 8);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setFloat32(Mb + 0, Ub, !0), Tb.setUint8(Mb + 4, Ab), !0
    }

    function CU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(454, ab, 4);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      return Eb.setUint8(Tb + 0, Ub), Eb.setUint8(Tb + 1, Ab), Eb.setUint8(Tb + 2, Mb), !0
    }

    function VU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(455, ab, 40);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      for (let Eb = 0; Eb < 9; Eb++) Tb.setInt32(Mb + 0 + 4 * Eb, Ub[Eb], !0);
      return Tb.setUint32(Mb + 36, Ab, !0), !0
    }

    function OU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(456, ab, 8);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setFloat32(Mb + 0, Ub, !0), Tb.setUint8(Mb + 4, Ab), !0
    }

    function cU(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(457, ab, 16);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      for (let Yb = 0; Yb < 3; Yb++) Eb.setInt32(Tb + 0 + 4 * Yb, Ub[Yb], !0);
      for (let Yb = 0; Yb < 3; Yb++) Eb.setInt8(Tb + 12 + 1 * Yb, Ab[Yb]);
      return Eb.setUint8(Tb + 15, Mb), !0
    }

    function JU(bb, ab, Ub, Ab) {
      const Mb = bb.bX(530, ab, 4 + Ab.length);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint8(Mb + 0, Ub), LU(Tb).set(Ab, Tb.byteOffset + Mb + 4), !0
    }

    function nU(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(531, ab, 12 + Tb.length);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      return Yb.setFloat32(Eb + 0, Ub, !0), Yb.setFloat32(Eb + 4, Ab, !0), Yb.setUint32(Eb + 8, Mb, !0), LU(Yb).set(Tb, Yb.byteOffset + Eb + 12), !0
    }

    function SU(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(532, ab, 12 + Tb.length);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      return Yb.setInt32(Eb + 0, Ub, !0), Yb.setInt32(Eb + 4, Ab, !0), Yb.setUint32(Eb + 8, Mb, !0), LU(Yb).set(Tb, Yb.byteOffset + Eb + 12), !0
    }

    function bA(bb, ab, Ub, Ab, Mb) {
      const Tb = bb.bX(533, ab, 8 + Mb.length);
      if (Tb < 0) return !1;
      const Eb = bb.view;
      return Eb.setInt32(Tb + 0, Ub, !0), Eb.setInt32(Tb + 4, Ab, !0), LU(Eb).set(Mb, Eb.byteOffset + Tb + 8), !0
    }

    function aA(bb, ab) {
      return !(bb.bX(576, ab, 0) < 0)
    }

    function UA(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = bb.bX(577, ab, 36 + Tb.length);
      if (Eb < 0) return !1;
      const Yb = bb.view;
      Yb.setUint8(Eb + 0, Ub);
      for (let Bb = 0; Bb < 16; Bb++) Yb.setUint8(Eb + 4 + 1 * Bb, Ab[Bb]);
      for (let Bb = 0; Bb < 16; Bb++) Yb.setUint8(Eb + 20 + 1 * Bb, Mb[Bb]);
      return LU(Yb).set(Tb, Yb.byteOffset + Eb + 36), !0
    }

    function AA(bb, ab, Ub, Ab) {
      const Mb = bb.bX(578, ab, 4 + Ab.length);
      if (Mb < 0) return !1;
      const Tb = bb.view;
      return Tb.setUint8(Mb + 0, Ub), LU(Tb).set(Ab, Tb.byteOffset + Mb + 4), !0
    }

    function MA(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
      const Bb = bb.bX(579, ab, 36);
      if (Bb < 0) return !1;
      const eb = bb.view;
      return eb.setFloat64(Bb + 0, Ub, !0), eb.setFloat64(Bb + 8, Ab, !0), eb.setFloat64(Bb + 16, Mb, !0), eb.setFloat64(Bb + 24, Tb, !0), eb.setUint16(Bb + 32, Eb, !0), eb.setUint8(Bb + 34, Yb), !0
    }
    class TA {
      constructor(bb, ab) {
        this.core = bb, this.afterCall = ab
      }
      canModify(bb, ab, Ub) {
        const Ab = this.core.OMb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      terrainBlocked(bb, ab, Ub, Ab, Mb) {
        const Tb = this.core.KTb(bb, ab, Ub, Ab, Mb);
        return this.afterCall(), Tb
      }
      Qp(bb, ab, Ub, Ab) {
        const Mb = this.core.KP(bb, ab, Ub, Ab);
        return this.afterCall(), Mb
      }
      blockData(bb, ab, Ub) {
        const Ab = this.core.CMb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      cameraSweep(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = this.core.VAb(bb, ab, Ub, Ab, Mb, Tb, Eb);
        return this.afterCall(), Yb
      }
      hasServerTarget(bb) {
        const ab = this.core.YTb(bb);
        return this.afterCall(), ab
      }
      entityInteractable(bb) {
        const ab = this.core.UTb(bb);
        return this.afterCall(), ab
      }
      entityCrouching(bb) {
        const ab = this.core.aTb(bb);
        return this.afterCall(), ab
      }
      predictServerPosition(bb, ab, Ub, Ab) {
        const Mb = this.core.ZTb(bb, ab, Ub, Ab);
        return this.afterCall(), Mb
      }
      setOtherEntitySetting(bb, ab, Ub) {
        const Ab = this.core.SAb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      entityInfoBatch(bb) {
        const ab = this.core.UMb(bb);
        return this.afterCall(), ab
      }
      entityName(bb) {
        const ab = this.core.ATb(bb);
        return this.afterCall(), ab
      }
      hasEffect(bb, ab) {
        const Ub = this.core.ETb(bb, ab);
        return this.afterCall(), Ub
      }
      scratchPtr() {
        const bb = this.core.sAb();
        return this.afterCall(), bb
      }
      invSwap(bb, ab) {
        const Ub = this.core.XTb(bb, ab);
        return this.afterCall(), Ub
      }
      invMove(bb, ab, Ub) {
        const Ab = this.core.vTb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      invQuickMove(bb, ab, Ub, Ab) {
        const Mb = this.core.LTb(bb, ab, Ub, Ab);
        return this.afterCall(), Mb
      }
      invRemove(bb, ab, Ub) {
        const Ab = this.core.PTb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      invEnchant(bb, ab, Ub, Ab, Mb) {
        const Tb = this.core.eTb(bb, ab, Ub, Ab, Mb);
        return this.afterCall(), Tb
      }
      craft(bb, ab, Ub) {
        const Ab = this.core.craft(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      salvage(bb, ab, Ub) {
        const Ab = this.core.salvage(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      selectSlot(bb) {
        const ab = this.core.iTb(bb);
        return this.afterCall(), ab
      }
      closeChest() {
        const bb = this.core.cMb();
        return this.afterCall(), bb
      }
      itemAttributesBatch(bb) {
        const ab = this.core.aMb(bb);
        return this.afterCall(), ab
      }
      itemNames() {
        const bb = this.core.rD();
        return this.afterCall(), bb
      }
      blockProps() {
        const bb = this.core.VMb();
        return this.afterCall(), bb
      }
      itemProps() {
        const bb = this.core.jTb();
        return this.afterCall(), bb
      }
      salvageRecipe(bb) {
        const ab = this.core.MMb(bb);
        return this.afterCall(), ab
      }
      craftingView(bb, ab, Ub) {
        const Ab = this.core.bMb(bb, ab, Ub);
        return this.afterCall(), Ab
      }
      directorView() {
        const bb = this.core.CAb();
        return this.afterCall(), bb
      }
      directorDefaultPose() {
        const bb = this.core.OAb();
        return this.afterCall(), bb
      }
      directorEntity(bb) {
        const ab = this.core.cAb(bb);
        return this.afterCall(), ab
      }
      directorPose(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = this.core.JAb(bb, ab, Ub, Ab, Mb, Tb);
        return this.afterCall(), Eb
      }
      passTimings(bb) {
        const ab = this.core.yTb(bb);
        return this.afterCall(), ab
      }
      drawCensus() {
        const bb = this.core.bTb();
        return this.afterCall(), bb
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);